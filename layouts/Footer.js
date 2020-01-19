import React from "react";
import styled from "styled-components";
import { Row, Col, Icon } from "antd";

import { baseline, breakpoints } from "../theme/themeFunctions";

const Root = styled(Row)`
	height: 80px;
	width: 100%;
	background-color: #232323;
	padding: ${baseline(1)};
	color: rgba(255, 255, 255, 0.8);
	font-size: 0.85rem;

	@media ${breakpoints.medium} {
		padding: 0 ${baseline(3)};
		position: fixed;
		bottom: 0;
		z-index: 9999;
	}
`;

const IconWrapper = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: rgba(255, 255, 255, 0.7);
`;

const FooterIcon = styled(Icon)`
	margin: 0 ${baseline(1)};
`;

const Footer = () => {
	return (
		<Root type="flex" align="middle" justify="space-between">
			<Col>
				<IconWrapper>
					Corridor Crunch
					<FooterIcon type="copyright" />
					2020
				</IconWrapper>
			</Col>
			<Col>
				<a href="https://github.com/Corridors-of-Time-Transcription">
					<FooterIcon type="github" />
					Github Repo
				</a>
			</Col>
			<Col>
				<a href="https://discord.gg/5gypd8R">
					<FooterIcon type="radar-chart" />
					Discord Channel
				</a>
			</Col>
		</Root>
	);
};

export default Footer;
