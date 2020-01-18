import React from "react";
import styled from "styled-components";
import { Checkbox, Icon } from "antd";

import { baseline } from "../../theme/themeFunctions";

const Root = styled(Checkbox)`
	border: 1px solid #d2d2d2;
	border-radius: 3px !important;
	height: auto !important;
	width: 100%;
	margin: ${baseline(1)};
	margin-left: 0 !important;
	box-shadow: 0px 2px 8px rgba(12, 12, 13, 0.1) !important;
	padding: ${baseline(1)};
	background: #232323;

	> input,
	.ant-checkbox {
		display: none !important;
	}

	> span {
		padding: 0 !important;
	}

	:before {
		display: none !important;
	}

	:hover,
	:active,
	:focus {
		${props => !props.isChecked && `color: #b78c25 !important;`};
		${props => !props.isChecked && `border-color: #b78c25 !important;`};
	}

	${props =>
		props.isChecked &&
		`
		background-color: #b78c25 !important;
		color: #d2d2d2 !important;
		border-color: transparent !important;
	`}
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: ${baseline(0.5)};
`;

const CheckboxIcon = styled(Icon)`
	font-size: 1.8rem;
	margin-right: ${baseline(1)};
`;

const CheckboxButton = props => {
	const { title, value, iconType, isChecked, clickHandler, children } = props;

	return (
		<Root onClick={clickHandler} value={value} isChecked={isChecked}>
			<Title>
				<CheckboxIcon type={iconType} />
				<strong>{title}</strong>
			</Title>
			<p>{children}</p>
		</Root>
	);
};

export default CheckboxButton;
