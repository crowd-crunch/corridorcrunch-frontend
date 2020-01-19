import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Root = styled.strong`
	text-transform: uppercase;
	cursor: pointer;

	:hover {
		color: #faca20;
	}
`;

const Logo = () => {
	return (
		<Link href="/">
			<Root>Corridor Crunch</Root>
		</Link>
	);
};

export default Logo;
