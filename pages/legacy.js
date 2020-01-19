import React from "react";
import styled from "styled-components";
import { Row, Col, Icon } from "antd";

import BaseLayout from "../layouts/BaseLayout";
import { baseline, breakpoints } from "../theme/themeFunctions";

const ListItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${baseline(1)} 0;
`;

const ListIconWrapper = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const ListItemTitle = styled.span`
	display: inline-block;
	margin-right: ${baseline(2)};
`;

const ListIcon = styled(Icon)`
	font-size: 1.8rem;
	margin-right: ${baseline(1)};
`;

const Legacy = () => {
	return (
		<div>
			<BaseLayout title="Legacy Site">
				<Row type="flex" justify="center">
					<h4>Below is a list of links to the legacy site that have not been ported across yet</h4>
					<Col span={12}>
						<ListItem>
							<a href="http://corridorcrunch.com/transcriptions/guide">
								<ListIconWrapper>
									<ListIcon type="read" />
									<ListItemTitle>Transcription Guide</ListItemTitle>
								</ListIconWrapper>
							</a>
						</ListItem>
						<ListItem>
							<a href="http://corridorcrunch.com/puzzlepieces/">
								<ListIconWrapper>
									<ListIcon type="file-image" />
									<ListItemTitle>Most Recent Sequence Submissions</ListItemTitle>
								</ListIconWrapper>
							</a>
						</ListItem>
						<ListItem>
							<a href="http://corridorcrunch.com/transcriptions">
								<ListIconWrapper>
									<ListIcon type="cluster" />
									<ListItemTitle>All Sequence Submissions</ListItemTitle>
								</ListIconWrapper>
							</a>
						</ListItem>
						<ListItem>
							<a href="http://corridorcrunch.com/solutions">
								<ListIconWrapper>
									<ListIcon type="file-protect" />
									<ListItemTitle>Verified Sequences</ListItemTitle>
								</ListIconWrapper>
							</a>
						</ListItem>
						<ListItem>
							<a href="http://corridorcrunch.com/confidence">
								<ListIconWrapper>
									<ListIcon type="box-plot" />
									<ListItemTitle>All Confidence Ratings</ListItemTitle>
								</ListIconWrapper>
							</a>
						</ListItem>
					</Col>
				</Row>
			</BaseLayout>
		</div>
	);
};

export default Legacy;
