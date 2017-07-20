///
/// \file   webpack.config.js
/// \brief  Configuration for building the frontend with Webpack.
///

// Imports
const Path      = require("path");

// Export configuration.
module.exports = {
    // The frontend's entry point.
    entry: Path.join(__dirname, "client/index.js"),

    // The bundle file's output path.
    output: {
        path: Path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },

    // The modules necessary for transpiling.
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [ "es2015", "stage-2", "react" ]
                }
            }]
        }, 
        {
            test: /\.(sass|scss)$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        }]
    }
};