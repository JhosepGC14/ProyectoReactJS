import React from "react";
import "../styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  constructor(props){
    super(props)
    console.log('1. constructor()');
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    console.log('3. componetdidmount()');
    this.timeoutId = setTimeout(()=>{
      this.setState({
        data: [
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed34",
            firstName: "Jhosep",
            lastName: "Guadalupe",
            email: "jhosepgc14@gmail.com",
            jobTitle: "Front-End Developer",
            twitter: "JhosepGC14",
            avatarUrl:
              "https://s.gravatar.com/avatar/f4aacaafde00c9658148a667f3b5c81d?s=80"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3b",
            firstName: "Diego",
            lastName: "Guadalupe",
            email: "dguadalupe.dagc@gmail.com",
            jobTitle: "UX/UI Designer at Bitel Company",
            twitter: "diegaso2693",
            avatarUrl:
              "https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/10314589_1041964072528299_6435936132770007320_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=lz4L9PKvQ5oAX_zbMT0&_nc_ht=scontent.flim9-1.fna&oh=cd47eba61ec4df469dbf1c8dfda50fd0&oe=5E95961A"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075beed3d",
            firstName: "Angel",
            lastName: "Villanueva",
            email: "sogaso@gmail.com",
            jobTitle: "UX/UI Desginer",
            twitter: "Sogaso93",
            avatarUrl:
              "https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/54436071_10156891563440993_8836134237804429312_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=aQtQUQY767UAX8L69ji&_nc_ht=scontent.flim9-1.fna&oh=af556d844872b6d41a3efb86f07ec9d4&oe=5E93C969"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeea3d",
            firstName: "Sebastian",
            lastName: "Yabiku",
            email: "sybk@gmail.com",
            jobTitle: "Front-End Developer",
            twitter: "syabiku93",
            avatarUrl:
              "https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/74604689_3298185730256922_3666853587662667776_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=2-X0m15RxvcAX-fj8ng&_nc_ht=scontent.flim9-1.fna&oh=644ff4bc6011cf23355b4fe43021161d&oe=5E942059"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be085aeea3d",
            firstName: "Ronald",
            lastName: "Melgarejo",
            email: "rmelgarejok@gmail.com",
            jobTitle: "Back-End Developer",
            twitter: "rmsolis93",
            avatarUrl:
              "https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/19366041_1573723325985783_6868478597637557652_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=lZDFr-zp6CIAX9DqhgS&_nc_ht=scontent.flim9-1.fna&oh=e31c174254e508730198d7d044b8f782&oe=5E939657"
          },
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "MajorRodriguez61545",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
          },
        ],
      });
    },3000);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('5. ComponentDidUpdate');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    })
  }

  componentWillUnmount(){
    console.log('6. ComponentWillUmmount')
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()')
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
