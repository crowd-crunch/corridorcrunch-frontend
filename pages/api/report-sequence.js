import fetch from "node-fetch";

export default (req, res) => {
	const { imageID } = req.body;
	if (req.method === "POST") {
		fetch(`http://corridorcrunch.com/api/pieces/${imageID}/report/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" }
		})
			.then(r => r.json())
			.then(data => {
				res.status(200).json(data);
			});
	}
};
