import React from "react";
import { Row } from "antd";

import BaseLayout from "../layouts/BaseLayout";

const Transcribe = () => {
	return (
		<div>
			<BaseLayout title="Transcribe" description="This is where we transcribe a corridors of time sequence">
				<Row type="flex" justify="center">
					Transcribe
				</Row>
			</BaseLayout>
		</div>
	);
};

export default Transcribe;
