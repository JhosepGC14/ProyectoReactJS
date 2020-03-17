import React from "react";
import "../styles/BadgesList.css";
import twitterLogo from "../images/twitter-logo.svg";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt=""
              />
              <div className="contenedor">
                <strong>{badge.firstName} {badge.lastName}</strong>
                <strong>{badge.jobTitle}</strong>
                <a href={badge.email}>{badge.email}</a>
                <img className="twitter-logo" src={twitterLogo} alt="twitterlogo"/>
                <a href={badge.twitter} className="twitter-name">@{badge.twitter}</a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
