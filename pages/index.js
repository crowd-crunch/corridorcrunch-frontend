import React from "react";
import { Row } from "antd";

import BaseLayout from "../layouts/BaseLayout";

const Home = () => {
	return (
		<div>
			<BaseLayout title="Welcome">
				<Row type="flex" justify="center">
					Welcome
				</Row>
			</BaseLayout>
		</div>
	);
};

export default Home;
