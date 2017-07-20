///
/// \file   showcase.js
/// \brief  A container showing details of a project.
///

// Imports
import React from "react";
import Axios from "axios";

///
/// \file   Showcase
/// \brief  Displays details of a given project.
///
class Showcase extends React.Component {
    onPrevClicked () {
        if (this.state.id > 0) {
            this.setState({ id: this.state.id - 1 });
        }
    }

    onNextClicked () {
        if (this.state.id + 1 < this.state.projects.length) {
            this.setState({ id: this.state.id + 1 });
        }
    }

    constructor (props) {
        super(props)

        this.state = {
            id: 0,
            status: "fetching",
            projects: [],
            error: ""
        };
    }

    componentDidMount () {
        Axios.get(`/api/projects/${this.props.category}`)
            .then(response => {
                this.setState({
                    id: 0,
                    projects: response.data.projects,
                    status: "success"
                });
            })
            .catch(err => {
                this.setState({
                    id: 0,
                    projects: [],
                    error: err.response.data.error,
                    status: "error"
                });
            });
    }

    componentWillReceiveProps (next) {
        if (next.category !== this.props.category) {
            Axios.get(`/api/projects/${next.category}`)
                .then(response => {
                    this.setState({
                        id: 0,
                        projects: response.data.projects,
                        status: "success"
                    });
                })
                .catch(err => {
                    this.setState({
                        id: 0,
                        projects: [],
                        error: err.response.data.error,
                        status: "error"
                    });
                });
        }
    }

    render () {
        if (this.state.status === "fetching") {
            return (
                <div className="dwg-showcase-message">
                    <h2>Please Wait</h2>
                    <p>We are fetching projects...</p>
                </div>
            );
        }

        if (this.state.status === "error") {
            return (
                <div className="dwg-showcase-message">
                    <h2>Error Fetching Projects</h2>
                    <p>Error: {this.state.error}</p>
                </div>
            );
        }

        const current = this.state.projects[this.state.id];
        return (
            <div className="dwg-showcase">
                <div className="dwg-showcase-project">
                    {
                        current.image &&
                        <img src={current.image} />
                    }
                    <span className="dwg-showcase-project-name">{current.name}</span>
                    <span className="dwg-showcase-project-description">{current.description}</span>
                    <span className="dwg-showcase-project-technologies">Written with: {current.technologies.join(", ")}</span>
                    <a className="dwg-showcase-project-link" href={current.link} target="_blank">Go to Project</a>
                </div>
                <div className="dwg-showcase-button-group">
                {
                    this.state.id > 0 ?
                    (
                    <button className="dwg-showcase-button" id="prev" onClick={this.onPrevClicked.bind(this)}>
                        Previous
                    </button>
                    ) : (
                    <button className="dwg-showcase-button" id="prev" disabled>
                        Previous
                    </button>
                    )
                }
                {
                    this.state.id + 1 < this.state.projects.length ?
                    (
                    <button className="dwg-showcase-button" id="next" onClick={this.onNextClicked.bind(this)}>
                        Next
                    </button>
                    ) : (
                    <button className="dwg-showcase-button" id="next" disabled>
                        Next
                    </button>
                    )
                }
                </div>
            </div>
        );
    }
};

// Exports
export default Showcase;