"use strict";

const axios = require("axios");

const baseUrl = "http://localhost:8080/api";

function sendRequest(options, currResults) {
	const results = currResults || [];

	return new Promise((resolve, reject) => {
		axios(options)
			.then((res) => {
				res.data.results.forEach((result) => {
					results.push(result);
				});
				resolve(results);
			})
			.catch((err) => {
				reject(new Error("Could not fetch: " + err));
			});
	});
}

async function createRequest(endpoint) {
	const options = {
		url: baseUrl + endpoint,
		headers: {
			method: "GET",
			"user-agent": "swapi-get",
			"swapi-get-version": require("../package.json").version,
		},
	};

	const req = await sendRequest(options);

	return req;
}

module.exports = {
	people() {
		return createRequest("/people");
	},
};
