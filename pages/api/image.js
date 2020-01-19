import fetch from "node-fetch";

export default (req, res) => {
	if (req.method === "POST") {
		fetch("http://localhost:8000/api/transcriptions/", {
			method: "POST",
			body: JSON.stringify(req.body),
			headers: { "Content-Type": "application/json" }
		})
			.then(r => r.json())
			.then(data => {
				res.status(200).json(data);
			});
	} else if (req.method === "GET") {
		fetch("http://localhost:8000/api/pieces/get_random")
			.then(r => r.json())
			.then(data => {
				res.status(200).json(data);
			});
	}
};
