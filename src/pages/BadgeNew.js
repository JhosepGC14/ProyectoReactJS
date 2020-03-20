import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../styles/BadgeNew.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      lastName2: "",
      email: "",
      jobTitle: "",
      page: ""
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
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error:null});
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if(this.state.loading){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First_Name"}
                lastName={this.state.form.lastName || "Last_Name1"}
                lastName2={this.state.form.lastName2 || "Last_Name2"}
                email={this.state.form.email || "example@example.com"}
                jobTittle={this.state.form.jobTitle || "Job_Title"}
                page={this.state.form.page || "GitHub"}
                avatarUrl="https://s.gravatar.com/avatar/f4aacaafde00c9658148a667f3b5c81d?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
