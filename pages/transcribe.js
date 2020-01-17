import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import BaseLayout from "../layouts/BaseLayout";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

import { baseline, breakpoints } from "../theme/themeFunctions";

const ContentRow = styled(Row)`
	display: flex;
	flex-direction: column-reverse;

	@media ${breakpoints.medium} {
		flex-direction: row;
	}
`;

const Transcribe = () => {
	return (
		<div>
			<BaseLayout title="Transcribe" description="This is where we transcribe a corridors of time sequence">
				<ContentRow type="flex" justify="space-between">
					<Col sm={24} lg={12}>
						<Card title="A piece of the puzzle">
							<ul>
								<li>Transcribe the image below using https://tjl.co/corridors-of-time/</li>
								<li>Copy and paste the RAW JSON output from tjl.co into the box below and click submit</li>
							</ul>
						</Card>
					</Col>
					<Col sm={24} lg={12} style={{ textAlign: "right" }}>
						<Button>New Image</Button>
					</Col>
				</ContentRow>
			</BaseLayout>
		</div>
	);
};

export default Transcribe;
