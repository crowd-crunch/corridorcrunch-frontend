import fetch from "node-fetch";

export default (req, res) => {
	if (req.method === "POST") {
		fetch("http://corridorcrunch.com/api/transcriptions/", {
			method: "POST",
			body: JSON.stringify(req.body),
			headers: { "Content-Type": "application/json" }
		})
			.then(r => r.json())
			.then(data => {
				res.status(200).json(data);
			});
	}
};
