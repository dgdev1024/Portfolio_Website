///
/// \file   projects.js
/// \brief  Contains data on our showcased projects.
///

// Export
module.exports = {
    "frontend": [
        {
            name: "Random Quote Generator",
            description: "This site allows you to roll a random, inspiring quote on demand. The quotes are brought to you by Forismatic.",
            technologies: [ "Bootstrap", "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/NdeGJr/image/large.png",
            link: "https://codepen.io/dgdev1024/full/NdeGJr"
        },
        {
            name: "Wikipedia Search Viewer",
            description: "This site allows you to search for Wikipedia articles. Wikipedia's API will fetch the articles for you.",
            technologies: [ "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/pRBGKa/image/large.png",
            link: "https://codepen.io/dgdev1024/full/pRBGKa"
        },
        {
            name: "Twitch Streamer Status Viewer",
            description: "This site uses Twitch's API to show the online status of Twitch's currently featured streamers, as well as a select few others.",
            technologies: [ "Bootstrap", "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/YNbNZG/image/large.png",
            link: "https://codepen.io/dgdev1024/full/YNbNZG"
        },
        {
            name: "Basic Calculator",
            description: "This is a basic calculator. It features basic math functions (add, subtract, etc.), left-to-right calculation, and a rudimentary memory feature.",
            technologies: [ "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/MpYmJd/image/large.png",
            link: "https://codepen.io/dgdev1024/full/MpYmJd"
        },
        {
            name: "Pomodoro Clock",
            description: "Here's a tool that can help you pace your work time and your break time. Set up the work and break timers, and they will alternate between each other when their time lapses.",
            technologies: [ "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/oZXLay/image/large.png",
            link: "https://codepen.io/dgdev1024/full/oZXLay"
        },
        {
            name: "Tic Tac Toe",
            description: "This is a basic implementation of the game of Tic Tac Toe, which utilizes RNG-driven AI.",
            technologies: [ "Javascript", "JQuery" ],
            image: "https://codepen.io/dgdev1024/pen/EWPXQP/image/large.png",
            link: "https://codepen.io/dgdev1024/full/EWPXQP"
        },
        {
            name: "Simon",
            description: "This is a clone of the classic electronic memory game, Simon. For this project I decided to use regular DOM manipulation, instead of JQuery.",
            technologies: [ "Javascript" ],
            image: "https://codepen.io/dgdev1024/pen/aJdjEd/image/large.png",
            link: "https://codepen.io/dgdev1024/full/aJdjEd"
        },
        {
            name: "Todo List",
            description: "This is a simple, volatile todo list. Here, you can add, remove, and manage tasks. This is my first effort with ES6, React, and SASS.",
            technologies: [ "Javascript ES6", "React JS", "SASS" ],
            image: "https://codepen.io/dgdev1024/pen/OppVoB/image/large.png",
            link: "https://codepen.io/dgdev1024/full/OppVoB"
        },
        {
            name: "Markdown Previewer",
            description: "Here is an editor that allows you to write and preview Markdown code. Write your code in the left pane, and preview it in the right.",
            technologies: [ "Javascript ES6", "React JS", "SASS", "Marked" ],
            image: "https://codepen.io/dgdev1024/pen/JWWWYw/image/large.png",
            link: "https://codepen.io/dgdev1024/full/JWWWYw"
        },
        {
            name: "Camper Leaderboard",
            description: "This is a leaderboard of the most active users on freeCodeCamp, an interactive web platform for learning code.",
            technologies: [ "Javascript ES6", "React JS", "SASS", "Axios" ],
            image: "https://codepen.io/dgdev1024/pen/ZeJJYW/image/large.png",
            link: "https://codepen.io/dgdev1024/full/ZeJJYW"
        },
        {
            name: "Recipe Box",
            description: "This app allows yuo to keep, view, manage, manipulate, and save recipes that you come up with. This app takes advantage of the browser's localStorage object in order to save the recipes.",
            technologies: [ "Javascript ES6", "React JS", "SASS" ],
            image: "https://codepen.io/dgdev1024/pen/YZYxMe/image/large.png",
            link: "https://codepen.io/dgdev1024/full/YZYxMe"
        },
        {
            name: "Game of Life",
            description: "An implementation of John Conway's Game of Life algorithm. Set up the board, or generate a random board, and hit the Play button to see what happens!",
            technologies: [ "Javascript ES6", "React JS" ],
            image: "https://codepen.io/dgdev1024/pen/LWrYwg/image/large.png",
            link: "https://codepen.io/dgdev1024/full/LWrYwg"
        }
    ],

    "backend": [
        {
            name: "Timestamp Microservice",
            description: "Generates a natural date and a UNIX timestamp from a given date string.",
            technologies: [ "Javascript ES6", "Node.js", "Express" ],
            link: "https://dwg-timestamp.glitch.me/"
        },
        {
            name: "Request Header Parser Microservice",
            description: "Parses an HTTP request header to determine the client's language, operating system, and IP address.",
            technologies: [ "Javascript ES6", "Node.js", "Express" ],
            link: "https://identify-me.glitch.me/"
        },
        {
            name: "URL Shortener Microservice",
            description: "Generates a short URL that points to the destination of your choice.",
            technologies: [ "Javascript ES6", "Node.js", "MongoDB", "Mongoose", "Express" ],
            link: "https://smurl.glitch.me/"
        },
        {
            name: "File Metadata Microservice",
            description: "Displays the metadata details of an uploaded file, including MIME type and file size.",
            technologies: [ "Javascript ES6", "React JS", "SASS", "Node.js", "Express", "Multer" ],
            link: "https://metafile.glitch.me/"
        }
    ],

    "full-stack": [
        {
            name: "Votany",
            description: "A website for creating, managing, and voting on polls.",
            technologies: [
                "Javascript ES6",
                "React JS",
                "Redux JS",
                "SASS",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Passport"
            ],
            image: "https://www.dropbox.com/s/rx8rif9v1pbijm8/votany-large.png?raw=1",
            link: "http://votany.glitch.me/"
        }
    ]
};