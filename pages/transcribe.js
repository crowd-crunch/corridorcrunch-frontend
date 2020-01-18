import React, { useState } from "react";
import Link from "next/link";
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
	margin-top: ${baseline(1)};

	@media ${breakpoints.medium} {
		margin-top: 0;
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

const ListIcon = styled(Icon)`
	font-size: 1.8rem;
	margin-right: ${baseline(1)};
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 0.75rem;
`;

const ValidationMessage = styled.div`
	color: #a62935;
	min-height: ${baseline(2)};
	margin-bottom: ${baseline(-2)};
`;

// Mocking the image data from an API until this is able hooked up
const MockImageData = {
	id: "0037",
	url:
		"https://cdn.discordapp.com/attachments/666873697763590144/667306014680547339/tiger_release_final_20200116_165011.png",
	confidenceScore: 70,
	totalTranscriptions: 8
};

const Transcribe = () => {
	const [inversion, setInversion] = useState(0);
	const [additionalFlags, setAdditionalFlags] = useState({
		badQuality: false,
		isRotated: false
	});

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

	const formik = useFormik({
		initialValues: {
			sequence: ""
		},
		validate,
		onSubmit: values => {
			const JSON = {
				sequence: values.sequence,
				badQuality: additionalFlags.badQuality,
				isRotated: additionalFlags.isRotated
			};
			console.log(JSON);
		}
	});

	const handleCheckFlag = e => {
		const paymentType = e.target.value;
		setAdditionalFlags({ ...additionalFlags, [paymentType]: !additionalFlags[paymentType] });
	};

	const isChecked = type => additionalFlags[type];
	const { TextArea } = Input;

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
									You can easily verify the image rotation by using the outer pillars as landmarks. [See this rotation
									landmarks guide]
								</li>
							</ul>
						</Card>
					</Col>
					<Col sm={24} lg={12}>
						<Card title="A piece of the puzzle" description={`Sequence #${MockImageData.id}`} type="common">
							<p>Current sequence information:</p>
							<ListItem>
								<ListIconWrapper>
									<ListIcon type="safety-certificate" theme="filled" style={{ paddingRight: baseline(1) }} />
									<ListItemTitle>Confidence Score:</ListItemTitle>
								</ListIconWrapper>
								<strong>{`${MockImageData.confidenceScore}%`}</strong>
							</ListItem>
							<ListItem>
								<ListIconWrapper>
									<ListIcon type="eye" theme="filled" style={{ paddingRight: baseline(1) }} />
									<ListItemTitle>Total Transcriptions:</ListItemTitle>
								</ListIconWrapper>
								<strong>{`${MockImageData.totalTranscriptions}`}</strong>
							</ListItem>
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
								tooltipVisible
							/>
						</InversionSlider>
						<Divider />
						<h3>Additional Actions</h3>
						<Actions>
							<Button type="primary">Display New Image</Button>
							<Button type="negative">Report Current Image</Button>
						</Actions>
					</Col>
				</ContentRow>
				<ContentRow>
					<Col lg={24}>
						<ImageWrapper>
							<Image inversion={inversion} src={MockImageData.url} alt="" />
						</ImageWrapper>
					</Col>
				</ContentRow>
			</BaseLayout>
		</div>
	);
};

export default Transcribe;
