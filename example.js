"use strict";

const swapi = require("./lib/swapi-get");

swapi
	.people()
	.then((data) => console.log(data))
	.catch(console.error);
