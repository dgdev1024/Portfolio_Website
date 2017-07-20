///
/// \file   index.js
/// \brief  The entry point for our application's frontend.
///

// Imports
const Path              = require("path");
const Express           = require("express");
const BodyParser        = require("body-parser");

// Exports
module.exports = () => {
    // Express
    const App = Express();

    // Middleware
    App.use(BodyParser.json());
    App.use(BodyParser.urlencoded({ extended: false }));
    App.use(Express.static(Path.join(__dirname, "..", "public")));

    // API Routing
    App.use("/api/projects", require("./routes/works.api"));
    App.use("/api/email", require("./routes/email.api"));

    // Index Routing
    App.get("*", (req, res, next) => {
        res.sendFile(Path.join(__dirname, "..", "public", "index.html"));
    });

    // Error Handling
    App.use((err, req, res, next) => {
        if (process.env.NODE_ENV === "development") {
            return res.status(500).json(err);
        } else {
            return res.status(500).send("500: Internal Server Error");
        }
    });

    // Listen
    const Server = App.listen(process.env.PORT || 3000, () => {
        console.log(`Listening on port #${Server.address().port}...`);
    });
};