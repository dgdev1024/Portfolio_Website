///
/// \file   topbar.js
/// \brief  Displays a navigation bar at the top of the page.
///

// Imports
import React from "react";

///
/// \class  Topbar
/// \brief  Displays a navigation bar at the top of the page.
///
class Topbar extends React.Component {
    onMenuToggled () {
        this.setState({ toggled: !this.state.toggled });
    }

    resetToggle () {
        this.setState({ toggled: false });
    }

    constructor (props) {
        super(props);

        this.state = { toggled: false };
        this.resetToggle = this.resetToggle.bind(this);
    }

    render () {
        let menuClass = "dwg-topbar-menu";
        if (this.state.toggled === true) {
            menuClass += " dwg-topbar-toggled";
        }

        return (
            <div className="dwg-topbar">
                <a href="#top">
                    <div className="dwg-topbar-brand">
                        Dennis W. Griffin
                    </div>
                </a>
                <div className="dwg-topbar-menu-icon" onClick={this.onMenuToggled.bind(this)}>
                    &#9776;
                </div>
                <div className={menuClass}>
                    <a className="dwg-topbar-menu-item" href="#top" onClick={this.resetToggle}>Home</a>
                    <a className="dwg-topbar-menu-item" href="#about" onClick={this.resetToggle}>About</a>
                    <a className="dwg-topbar-menu-item" href="#projects" onClick={this.resetToggle}>Projects</a>
                    <a className="dwg-topbar-menu-item" href="#contact" onClick={this.resetToggle}>Contact</a>
                </div>
            </div>
        );
    }
};

// Export
export default Topbar;