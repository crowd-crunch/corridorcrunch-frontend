import React from "react";
import styled from "styled-components";

import { baseline, breakpoints } from "../../theme/themeFunctions";

const Root = styled.hr`
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin: ${baseline(2)} 0;
	border-bottom: none;

	@media ${breakpoints.medium} {
		margin: ${baseline(3)} 0;
	}
`;

const Divider = () => {
	return <Root />;
};

export default Divider;
