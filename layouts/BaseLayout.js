import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Layout } from "antd";

import Navigation from "./Navigation";
import { baseline, breakpoints } from "../theme/themeFunctions";

const Root = styled.div`
	display: block;
	height: 100vh;
`;

const TitleSection = styled.div`
	padding: ${baseline(2)};
	background-color: #1d1d1d;

	@media ${breakpoints.medium} {
		padding: ${baseline(3)};
	}
`;

const Title = styled.h2`
	text-transform: uppercase;
`;

const Content = styled.div`
	padding: ${baseline(2)};

	@media ${breakpoints.medium} {
		padding: ${baseline(3)};
	}
`;

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			delayChildren: 0.5
		}
	}
};

const BaseLayout = props => {
	const { title, children, description } = props;

	return (
		<Root>
			<Head>
				<title>Corridors of Time</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
			</Head>
			<Layout>
				<Navigation />
				<motion.div variants={container} initial="hidden" animate="show">
					<TitleSection>
						<Title>
							{"// "}
							{title}
						</Title>
						<p>{description}</p>
					</TitleSection>
					<Content>{children}</Content>
				</motion.div>
			</Layout>
		</Root>
	);
};

export default BaseLayout;
