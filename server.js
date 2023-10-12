"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

// Check the hostname to make sure that it is valid
const hostname = "base";

// Check if the DNS server is responding
const dnsResolver = require('dns').getResolver();

dnsResolver.resolve(hostname, (err, address) => {
  if (err) {
    console.log("Error resolving hostname:", err.message);
  } else {
    console.log("Hostname resolved to:", address);
  }
});

// Check the network configuration for errors
const networkInterfaces = require('os').networkInterfaces();

for (const interfaceName in networkInterfaces) {
  const interfaces = networkInterfaces[interfaceName];

  for (const interface of interfaces) {
    if (interface.family === 'IPv4') {
      console.log("Interface name:", interfaceName);
      console.log("Interface address:", interface.address);
    }
  }
}
