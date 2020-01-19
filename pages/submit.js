import React from "react";

import styled from "styled-components";
import { Col, Row, Input } from "antd";
import { useFormik } from "formik";
import Button from "../components/UI/Button";

import BaseLayout from "../layouts/BaseLayout";
import Card from "../components/UI/Card";

import { baseline, breakpoints } from "../theme/themeFunctions";

const GutteredRow = styled(Row)`
	margin-bottom: ${baseline(2)};
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 0.75rem;
`;

const { TextArea } = Input;

const ValidationMessage = styled.div`
	color: #a62935;
	min-height: ${baseline(2)};
	margin-bottom: ${baseline(-2)};
`;

const ContentRow = styled(Row)`
	display: flex;
	flex-direction: column;
	margin-bottom: ${baseline(1)};

	@media ${breakpoints.medium} {
		flex-direction: row;
	}
`;

const Submit = () => {
	const formik = useFormik({
		initialValues: {
			sequence: ""
		},
		onSubmit: values => {
			console.log(values);
		}
	});

	return (
		<div>
			<BaseLayout title="Submit">
				<Row type="flex" justify="center">
					Image submission is still in development. Please keep transcribing until this is ready.
				</Row>

				<ContentRow type="flex" justify="start" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={24} lg={12}>
						<Card title="A strange sequence" description="Quest Step" type="legendary">
							<ul>
								<li>
									Go to Osiris (pick up his new quest offering if you haven't yet) and start the Sundial using the panel
									next to him.
								</li>
								<li>Go through the corridor and you'll reach a room with 6 doors labeled with different symbols.</li>
								<li>
									To reach the vault room, you must follow a specific sequence of doors called the "emblem sequence".
								</li>
								<li>
									Upon arriving, you'll find a tomb surrounded by a transparent floor with a bunch of hexagonal pillars
									below. Interacting with the "???" action reveals the puzzle piece we need a screenshot of.
								</li>
								<li>
									With the entrance directly behind your back, approach the nearest edge of the transparent floor and
									look down into the pillars below. Please take special care to make sure all symbols are visible and
									not covered up by quests, weapons, or legs. You can repeat this process on other characters to obtain
									more puzzle pieces.
								</li>
							</ul>
						</Card>
					</Col>

					<Col sm={24} lg={12}>
						<Card title="The Emblem Sequence" type="legendary">
							<img
								src="https://s3.amazonaws.com/assets.primagames.com/_resized/files/destiny-2-corridors-of-time-codes-emblem.png_1200x675_.png"
								alt="emblem"
							/>
						</Card>
					</Col>
				</ContentRow>
				<ContentRow type="flex" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={24} lg={12}>
						<Card title="URL submission" type="legendary">
							<h4>Ideal image candidates:</h4>
							<ul>
								<li>Submit direct links to images, .jpg or .png</li>
								<li>Links have to start with "https://" or "http://"</li>
								<li>We accept links to cdn.discordapp.com, media.discordapp.net, i.gyazo.com and i.imgur.com</li>
								<li>Clear image</li>
								<li>Good contrast</li>
								<li>Image is not rotated</li>
								<li>No obscured symbols</li>
								<li>Outer pillars are visible</li>
							</ul>
							<h4>Avoid submitting images that are:</h4>
							<ul>
								<li>
									<li>Blurry </li>
									<li>Wildly rotated</li>
									<li>Low resolution</li>
									<li>Cropped or obscured</li>
									<li>Not an in-game screenshot</li>
								</li>
							</ul>
						</Card>
					</Col>

					<Col sm={24} lg={12}>
						<h3>Submit New Piece</h3>
						<form onSubmit={formik.handleSubmit}>
							<GutteredRow type="flex">
								<Col span={24}>
									<Label htmlFor="sequence">URL Submission</Label>
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
							<GutteredRow>
								<Col sm={24} lg={12}>
									<Button type="primary" htmlType="submit">
										Submit New Piece
									</Button>
								</Col>
							</GutteredRow>
						</form>
					</Col>
				</ContentRow>
			</BaseLayout>
		</div>
	);
};

export default Submit;
