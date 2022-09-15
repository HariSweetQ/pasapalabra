#!/usr/bin/env node

const liveServer = require("live-server");
const path = require('path');

const params = {
	port: 8080, // Set the server port. Defaults to 8080.	
	open: true, // When false, it won't load your browser by default.
	ignore: 'scss', // comma-separated string for paths to ignore
	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [['/', './']], // Mount a directory to a route.
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);