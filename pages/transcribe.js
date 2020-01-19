import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Row, Icon, Input, Slider } from "antd";
import { useFormik } from "formik";

import BaseLayout from "../layouts/BaseLayout";
import Button from "../components/UI/Button";
import CheckboxButton from "../components/UI/CheckboxButton";
import Card from "../components/UI/Card";
import Divider from "../components/UI/Divider";

import { baseline, breakpoints } from "../theme/themeFunctions";

const ContentRow = styled(Row)`
	display: flex;
	flex-direction: column;
	margin-bottom: ${baseline(1)};

	@media ${breakpoints.medium} {
		flex-direction: row;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	margin-top: ${baseline(1)};

	@media ${breakpoints.medium} {
		margin-top: 0;
	}
`;

const ImageOverlay = styled.div`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 2;
	background: rgba(0, 0, 0, 0.4);
	border: 1px solid #d2d2d2;
	border-top: none;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding: ${baseline(0.5)};

	@media ${breakpoints.medium} {
		width: 50%;
	}
`;

const ListItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${baseline(1)} 0;

	@media ${breakpoints.medium} {
		width: 50%;
	}
`;

const ListItemTitle = styled.span`
	display: inline-block;
	margin-right: ${baseline(2)};
`;

const Image = styled.img`
	filter: ${props => `invert(${props.inversion})`};
`;

const InversionSlider = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: ${baseline(2)} 0;
	font-size: 1.8rem;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${baseline(2)} 0;

	@media ${breakpoints.medium} {
		flex-direction: row;
	}
`;

const GutteredRow = styled(Row)`
	margin-bottom: ${baseline(2)};
`;

const ListIconWrapper = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LinkWrapper = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const ListIcon = styled(Icon)`
	font-size: 1.8rem;
	margin-right: ${baseline(1)};
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 0.75rem;
`;

const Iframe = styled.iframe`
	width: 100%;
	height: 100%;
	outline: none;
`;

const ValidationMessage = styled.div`
	color: #a62935;
	min-height: ${baseline(2)};
	margin-bottom: ${baseline(-2)};
`;

const defaultFlags = {
	badQuality: false,
	isRotated: false
};

const defaultData = {
	confidences: [],
	rotatedimages: [],
	transCount: 0
};

const Transcribe = () => {
	const [data, setData] = useState(defaultData);
	const [loading, setLoading] = useState(true);
	const [inversion, setInversion] = useState(0);
	const [additionalFlags, setAdditionalFlags] = useState(defaultFlags);

	const isValidJSON = jsonString =>
		!/[^,:{}[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(jsonString.replace(/"(\\.|[^"\\])*"/g, ""));

	const validate = values => {
		const errors = {};
		if (!values.sequence) {
			errors.sequence = "This field is required";
		} else if (!isValidJSON(values.sequence)) {
			errors.sequence = "Invalid JSON schema, please check your sequence and try again.";
		}

		return errors;
	};

	const fetchImage = () => {
		setLoading(true);
		fetch("/api/image")
			.then(res => res.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(console.log);
	};

	const onSubmit = ({ sequence }, formikBag) => {
		const s = JSON.parse(sequence);
		const body = {
			bad_image: additionalFlags.badQuality,
			...(additionalFlags.isRotated && { orientation: "wrong" }),
			puzzlePiece: data.id,
			center: s.center,
			wall1: s.walls[0],
			wall2: s.walls[1],
			wall3: s.walls[2],
			wall4: s.walls[3],
			wall5: s.walls[4],
			wall6: s.walls[5],
			link1: s.nodes[0].join(""),
			link2: s.nodes[1].join(""),
			link3: s.nodes[2].join(""),
			link4: s.nodes[3].join(""),
			link5: s.nodes[4].join(""),
			link6: s.nodes[5].join("")
		};
		formikBag.setSubmitting(true);
		fetch("/api/image", { body: JSON.stringify(body), method: "POST", headers: { "Content-Type": "application/json" } })
			.then(res => res.json())
			.then(() => {
				formikBag.resetForm();
				formikBag.setSubmitting(false);
				setAdditionalFlags(defaultFlags);
				setData(defaultData);
				fetchImage();
			})
			.catch(() => {
				formikBag.setSubmitting(false);
			});
	};

	const formik = useFormik({
		initialValues: {
			sequence: "{}"
		},
		validate,
		onSubmit
	});

	const handleCheckFlag = e => {
		const paymentType = e.target.value;
		setAdditionalFlags({ ...additionalFlags, [paymentType]: !additionalFlags[paymentType] });
	};

	const isChecked = type => additionalFlags[type];
	const { TextArea } = Input;

	useEffect(() => {
		fetchImage();
	}, []);

	const confidence = data.confidences.length && data.confidences[0] >= 5 ? `${data.confidences[0]}%` : "0%";

	const cardType = data.rotatedimages.length ? "flag" : "common";

	return (
		<div>
			<BaseLayout title="Transcribe" description="This is where we transcribe a corridors of time sequence">
				<ContentRow type="flex" justify="start" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={24} lg={12}>
						<Card title="A strange sequence" description="Quest Step" type="legendary">
							<ul>
								<li>
									<span>Transcribe the image below using </span>
									<a href="https://tjl.co/corridors-of-time/" target="_blank" rel="noopener noreferrer">
										https://tjl.co/corridors-of-time/
									</a>
								</li>
								<li>{`Copy and paste the RAW JSON output from tjl.co into the box below and click submit. The raw JSON is everything between the { and } curly brackets, including those brackets themselves.`}</li>
								<li>
									All puzzle pieces should be transcribed as they appear when the room's entrance is behind the player.
									You can easily verify the image rotation by using the outer pillars as landmarks.
									<a
										href="https://cdn.discordapp.com/attachments/667600349225287680/668240692916781096/unknown.png"
										target="_blank"
										rel="noopener noreferrer"
									>
										[See this rotation landmarks guide]
									</a>
								</li>
							</ul>
						</Card>
					</Col>
					<Col sm={24} lg={12}>
						<Card title="A piece of the puzzle" description={`Sequence #${data.id}`} type={cardType}>
							<p>Current sequence information:</p>
							<ListItem>
								<ListIconWrapper>
									<ListIcon type="safety-certificate" theme="filled" />
									<ListItemTitle>Confidence Score:</ListItemTitle>
								</ListIconWrapper>
								{!loading && <strong>{confidence}</strong>}
							</ListItem>
							<ListItem>
								<ListIconWrapper>
									<ListIcon type="eye" theme="filled" />
									<ListItemTitle>Total Transcriptions:</ListItemTitle>
								</ListIconWrapper>
								<strong>{`${data.transCount}`}</strong>
							</ListItem>
							{data.rotatedimages.length > 0 && (
								<ListItem style={{ width: "100%" }}>
									<ListIconWrapper>
										<ListIcon type="flag" theme="filled" style={{ color: "#a62935" }} />
										<ListItemTitle>
											This sequence has been flagged for an incorrect orientation. Please pay extra attention to detail
											when transcribing this sequence.
										</ListItemTitle>
									</ListIconWrapper>
								</ListItem>
							)}
						</Card>
					</Col>
				</ContentRow>
				<ContentRow type="flex" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={24} lg={12}>
						<h3>Submit Sequence</h3>
						<form onSubmit={formik.handleSubmit}>
							<GutteredRow type="flex">
								<Col span={24}>
									<Label htmlFor="sequence">JSON Sequence</Label>
									<TextArea
										rows={4}
										type="text"
										name="sequence"
										placeholder="JSON Sequence"
										onChange={formik.handleChange}
										onFocus={ev => ev.target.select()}
										value={formik.values.sequence}
									/>
									<ValidationMessage>
										{formik.touched.sequence && formik.errors.sequence ? <div>{formik.errors.sequence}</div> : null}
									</ValidationMessage>
								</Col>
							</GutteredRow>
							<GutteredRow
								type="flex"
								align="middle"
								justify="space-between"
								gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}
							>
								<Col sm={24} lg={12}>
									<CheckboxButton
										title="Flag Image Quality"
										clickHandler={handleCheckFlag}
										value="badQuality"
										isChecked={isChecked("badQuality")}
										iconType="flag"
									>
										If an image is blurry, covered, cropped off, too small, doesn't load, or is unreadable for any
										reason, please click check this box before submitting the sequence.
									</CheckboxButton>
								</Col>
								<Col sm={24} lg={12}>
									<CheckboxButton
										title="Flag Image Rotation"
										clickHandler={handleCheckFlag}
										value="isRotated"
										isChecked={isChecked("isRotated")}
										iconType="sync"
									>
										If an image is rotated incorrectly, and the correct rotation can be seen, please transcribe it and
										check this box before submitting the sequence.
									</CheckboxButton>
								</Col>
							</GutteredRow>
							<GutteredRow>
								<Col sm={24} lg={12}>
									<Button type="primary" htmlType="submit">
										Submit Sequence
									</Button>
								</Col>
							</GutteredRow>
						</form>
					</Col>
					<Col sm={24} lg={12}>
						<h3>Image Inversion</h3>
						<p>Having trouble seeing the sequence. Try the inversion slider below:</p>
						<InversionSlider>
							<Icon type="sliders" theme="filled" style={{ paddingRight: baseline(1) }} />
							<Slider
								style={{ width: "100%", maxWidth: "400px" }}
								defaultValue={inversion}
								min={0}
								max={1}
								step={0.1}
								onChange={setInversion}
							/>
						</InversionSlider>
						<Divider />
						<h3>Additional Actions</h3>
						<Actions>
							<Button type="primary" onClick={fetchImage}>
								Display New Image
							</Button>
							{false && <Button type="negative">Report Current Image</Button>}
						</Actions>
					</Col>
				</ContentRow>
				<ContentRow>
					<Col lg={24}>
						{!loading && (
							<ImageWrapper>
								{data.isImage ? (
									<React.Fragment>
										<ImageOverlay>
											<LinkWrapper href={data.url} target="_blank" rel="noopener noreferrer">
												<ListIcon type="zoom-in" />
												View Larger Image
											</LinkWrapper>
										</ImageOverlay>
										<Image inversion={inversion} src={data.url} alt="" />
									</React.Fragment>
								) : (
									<Iframe src={data.url} />
								)}
							</ImageWrapper>
						)}
					</Col>
				</ContentRow>
			</BaseLayout>
		</div>
	);
};

export default Transcribe;
