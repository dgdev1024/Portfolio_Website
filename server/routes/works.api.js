///
/// \file   works.api.js
/// \brief  API routing for my showcased projects.
///

// Imports
const Express           = require("express");
const Projects          = require("../data/projects");
const Router            = Express.Router();

// GET: Fetches a project.
Router.get("/:category", (req, res) => {
    if (Projects.hasOwnProperty(req.params.category) === false) {
        return res.status(404).json({
            error: "Category not found."
        });
    }

    return res.status(200).json({
        projects: Projects[req.params.category]
    });
});

// Exports
module.exports = Router;