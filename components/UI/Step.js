import React from "react";
import styled from "styled-components";

import { baseline } from "../../theme/themeFunctions";

const Root = styled.div`
	margin-bottom: ${baseline(2)};
`;

const StepWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const StepNumber = styled.div`
	display: inline-block;
	background: #343434;
	padding: ${baseline(0.5)} ${baseline(1)};
`;

const StepTitle = styled.div`
	width: 100%;
	display: inline-block;
	background: #1d1d1d;
	padding: ${baseline(0.5)} ${baseline(1)};
`;

const StepContent = styled.div`
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.8);
	margin: ${baseline(0.5)} 0;
`;

const Logo = props => {
	const { number, title, children } = props;

	return (
		<Root>
			<StepWrapper>
				<StepNumber>{number}</StepNumber>
				<StepTitle>{title}</StepTitle>
			</StepWrapper>
			<StepContent>{children}</StepContent>
		</Root>
	);
};

export default Logo;
