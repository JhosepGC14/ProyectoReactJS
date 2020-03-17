import React from "react";
import confLogo from "../images/badge-header.svg";
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {

    return (
      <div className="Badge">
        {/* Header */}
        <div className="Badge__header">
          <img src={confLogo} alt="imagen_conferencia" />
        </div>
        {/* Body */}
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="avatar"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
            <br />
            {this.props.lastName2}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTittle}</h3>
          <div><a href="https://www.github.com/JhosepGC14">{this.props.page}</a></div>
          <div><a href="jhosepgc14@gmail.com">{this.props.email}</a></div>
        </div>
        {/* Footer */}
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
