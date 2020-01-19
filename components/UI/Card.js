import React from "react";
import styled from "styled-components";

import { baseline } from "../../theme/themeFunctions";

const CardTypes = {
	flag: "#a62935",
	common: "#3A5630",
	rare: "#3B6D98",
	legendary: "#281934",
	exotic: "#CEAE32"
};

const Root = styled.div`
	margin-bottom: ${baseline(2)};
`;

const CardHeader = styled.div`
	padding: ${baseline(1)};
	border-top: 2px solid #d2d2d2;
	background: ${props => CardTypes[props.type]};
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
	const { title, type, description, children } = props;

	return (
		<Root>
			<CardHeader type={type}>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardBody>{children}</CardBody>
		</Root>
	);
};

export default Card;
