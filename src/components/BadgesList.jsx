import React from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter-logo.svg";
import Gravatar from './Gravatar';

class BadgesList extends React.Component {
  render() {
    //manejando elbadge cuando hay informacion vacia
    // if (this.props.badges.length === 0){
    //   return(
    //     <div>
    //       <h3>No Badges Were Found</h3>
    //       <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
    //     </div>
    //   );
    // }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              {/* <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt=""
              /> */}
              <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="logo" />
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
