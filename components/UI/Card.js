import React from "react";
import styled from "styled-components";

import { baseline, breakpoints } from "../../theme/themeFunctions";

const Root = styled.div`
	margin-bottom: ${baseline(2)};
`;

const CardHeader = styled.div`
	padding: ${baseline(1)};
	border-top: 2px solid #d2d2d2;
	background: #281934;
`;

const CardTitle = styled.h3`
	text-transform: uppercase;
	margin-bottom: ${baseline(1)};
`;

const CardBody = styled.div`
	padding: ${baseline(1)};
	background: #050608;
`;

const CardDescription = styled.span`
	opacity: 0.8;
`;

const Card = props => {
	const { title, children } = props;

	return (
		<Root>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Quest Step</CardDescription>
			</CardHeader>
			<CardBody>{children}</CardBody>
		</Root>
	);
};

export default Card;
