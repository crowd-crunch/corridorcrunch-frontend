import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import BaseLayout from "../layouts/BaseLayout";
import Button from "../components/UI/Button";
import Step from "../components/UI/Step";
import { baseline } from "../theme/themeFunctions";

const Title = styled.h3`
	padding-bottom: ${baseline(1)};
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Home = () => {
	return (
		<div>
			<BaseLayout title="Welcome">
				<Row type="flex" justify="center" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={{ span: 24 }} md={{ span: 18 }}>
						<Title>An Unexpected Journey</Title>
					</Col>
				</Row>
				<Row type="flex" justify="center" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 36 }]}>
					<Col sm={{ span: 24 }} lg={{ span: 10 }}>
						<p>
							The purpose of this site is to provide the most accurate database of puzzle piece transcriptions by
							crowdsourcing the transcription process and verifying through redundancy.
						</p>
						<i> - Corridors of Time Team</i>
					</Col>
					<Col sm={{ span: 24 }} lg={{ span: 8 }}>
						<p>Steps:</p>
						<Step number={1} title="Transcription">
							<p>
								Each image is transcribed several times by different people. Identical transcriptions increases the
								confidence that the transcription is accurate.
							</p>
						</Step>
						<Step number={2} title="Validation">
							<p>
								Once the accuracy of an image's transcription has reached a high confidence rating, it will be added to
								our table of verified results.
							</p>
						</Step>
						<Step number={3} title="Output">
							<p>
								The found solutions will be accessible via a CSV export. This is still being worked on. Please get in
								touch with @ebuch if you'd like to help.
							</p>
						</Step>
						<Button type="primary" to="transcribe">
							Start transcribing
						</Button>
					</Col>
				</Row>
			</BaseLayout>
		</div>
	);
};

export default Home;
