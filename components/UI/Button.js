import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button as CoreButton } from "antd";

import { baseline, breakpoints } from "../../theme/themeFunctions";

const Root = styled(CoreButton)`
	border-radius: 0;
	padding: ${baseline(1)} ${baseline(3)};
	height: ${baseline(4)};
	line-height: 1.5;
	text-transform: uppercase;
	font-weight: 600;
	transition: none;
	margin: ${baseline(1)} 0;

	@media ${breakpoints.medium} {
		margin: 0;

		:not(:first-of-type) {
			margin-left: ${baseline(1)};
		}
	}

	${props =>
		props.type === "primary" &&
		`
			border: 1px solid #ffce1f;
			background-color: #b78c25;
			color: #d2d2d2;

			:active,
			:focus,
			:hover {
				background-color: #b78c25;
				color: #d2d2d2;
				border-color: #fefefe;
			}
	`}

	${props =>
		props.type === "negative" &&
		`
		border: 1px solid #a62935;
		background-color: #6E2630;
		color: #d2d2d2;

		:active,
		:focus,
		:hover {
			background-color: #a62935;
			color: #d2d2d2;
			border-color: #fefefe;
	`}
`;

const Button = props => {
	const { children, to, onClick, type = "primary" } = props;

	return (
		<Root onClick={onClick} type={type}>
			<Link href={to}>{children}</Link>
		</Root>
	);
};

export default Button;
