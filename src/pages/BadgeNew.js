import React from "react";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../styles/BadgeNew.css";


class BadgeNew extends React.Component {
  state = {
    form: {
        firstName: '',
        lastName: '',
        lastName2: '',
        email: '',
        jobTitle: '',
        page: '',
    }
  };
  handleChange = e => {
    //hacer una copia del estado del form
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    this.setState({
      // form: {
      //     [e.target.name] : e.target.value,
      // },

      //1era forma
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                lastName2={this.state.form.lastName2}
                email={this.state.form.email}
                jobTittle={this.state.form.jobTitle}
                page={this.state.form.page}
                avatarUrl="https://s.gravatar.com/avatar/f4aacaafde00c9658148a667f3b5c81d?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
