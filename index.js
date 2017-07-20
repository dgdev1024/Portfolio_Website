///
/// \file   index.js
/// \brief  The entry point for our application.
///

// Load Environment Variables
require("node-env-file")(".env");

// Run Server.
require("./server/index")();