import React, { useState } from "react";
import { Col, Row, Icon, Slider } from "antd";
import styled from "styled-components";

import BaseLayout from "../layouts/BaseLayout";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

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

	return (
		<div>
			<BaseLayout title="Transcribe" description="This is where we transcribe a corridors of time sequence">
				<ContentRow type="flex" justify="start" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={24} lg={12}>
						<Card title="A strange sequence" description="Quest Step" type="legendary">
							<ul>
								<li>Transcribe the image below using https://tjl.co/corridors-of-time/</li>
								<li>Copy and paste the RAW JSON output from tjl.co into the box below and click submit</li>
							</ul>
						</Card>
					</Col>
					<Col sm={24} lg={12}>
						<Card title="A piece of the puzzle" description={`Sequence #${MockImageData.id}`} type="common">
							<p>Current sequence information</p>
							<ListItem>
								<span>
									<Icon type="safety-certificate" theme="filled" style={{ paddingRight: baseline(1) }} />
									<ListItemTitle>Confidence Score:</ListItemTitle>
								</span>
								<strong>{`${MockImageData.confidenceScore}%`}</strong>
							</ListItem>
							<ListItem>
								<span>
									<Icon type="eye" theme="filled" style={{ paddingRight: baseline(1) }} />
									<ListItemTitle>Total Transcriptions:</ListItemTitle>
								</span>
								<strong>{`${MockImageData.totalTranscriptions}`}</strong>
							</ListItem>
						</Card>
					</Col>
				</ContentRow>
				<ContentRow type="flex" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
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
					</Col>
					<Col sm={24} lg={12}>
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
