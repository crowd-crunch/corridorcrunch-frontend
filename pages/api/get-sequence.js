import fetch from "node-fetch";

export default (req, res) => {
	if (req.method === "GET") {
		fetch("http://corridorcrunch.com/api/pieces/get_random")
			.then(r => r.json())
			.then(data => {
				res.status(200).json(data);
			});
	}
};
