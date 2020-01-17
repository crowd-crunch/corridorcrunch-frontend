import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Row, Col, Menu, Icon } from "antd";

import Logo from "../components/UI/Logo";
import { baseline, breakpoints } from "../theme/themeFunctions";

const Root = styled(Row)`
	height: 45px;
	background-color: #232323;
	padding: 0;
	color: rgba(255, 255, 255, 0.8);

	@media ${breakpoints.medium} {
		padding: 0 ${baseline(2)};
	}
`;

const LogoColumn = styled(Col)`
	display: none;

	@media ${breakpoints.medium} {
		display: flex;
	}
`;

const NavMenuColumn = styled(Col)`
	max-width: 100%;
	text-align: left;

	@media ${breakpoints.medium} {
		text-align: right;
	}
`;

const NavMenu = styled(Menu)`
	line-height: 42px;
	border-bottom: none;
	background: transparent;
`;

const Navigation = () => {
	const [selectedItem, setSelectedItem] = useState(null);

	return (
		<Root type="flex" align="middle" justify="space-between">
			<LogoColumn md={6} lg={12}>
				<Logo />
			</LogoColumn>
			<NavMenuColumn sm={4} md={12} lg={12}>
				<NavMenu onClick={setSelectedItem} selectedKeys={[selectedItem]} mode="horizontal">
					<Menu.Item key="transcribe">
						<Link href="transcribe">
							<span>
								<Icon type="radar-chart" />
								Transcribe
							</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="submit">
						<Link href="submit">
							<span>
								<Icon type="picture" />
								Submit
							</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="view">
						<Icon type="eye" />
						View All
					</Menu.Item>
				</NavMenu>
			</NavMenuColumn>
		</Root>
	);
};

export default Navigation;
