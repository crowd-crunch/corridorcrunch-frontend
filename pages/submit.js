import React from "react";
import { Row } from "antd";

import BaseLayout from "../layouts/BaseLayout";

const Submit = () => {
	return (
		<div>
			<BaseLayout title="Submit">
				<Row type="flex" justify="center">
					Submit a new sequence
				</Row>
			</BaseLayout>
		</div>
	);
};

export default Submit;
