import React from "react";
import styled from "styled-components";
import { Button as CoreButton } from "antd";

import { baseline } from "./UIFunctions";

const Root = styled(CoreButton)`
	background-color: transparent;
	margin: ${baseline(1)} ${baseline(3)};
	padding: ${baseline(0.5)};
	height: auto;
	border-radius: 0;
	line-height: 1.5;
	color: #4762eb;
	border-color: transparent;
	border-bottom: 1px solid #4762eb;

	:active,
	:focus,
	:hover {
		background-color: transparent;
		color: #3952c9;
		border-bottom: 1px solid #4762eb;
	}
`;

const Button = props => {
	const { children, to, onClick, className } = props;

	return (
		<Root type="link" href={to} onClick={onClick} className={className}>
			{children}
		</Root>
	);
};

export default Button;
