import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { DropdownList } from "react-widgets";

class AddJobs extends Component {
  grabPositions() {
    const positions = [
      "Software Engineer",
      "Full Stack Engineer",
      "Front End Engineer",
      "Back End Engineer",
      "Intern",
      "Other"
    ];
    return positions;
  }

  renderField(field) {
    return (
      <FormGroup>
        <ControlLabel>{field.label}:</ControlLabel>
        <br />
        <FormControl type="text" {...field.input} /> {field.meta.error}
      </FormGroup>
    );
  }

  renderDropdown(field) {
    return (
      <DropdownList
        {...field.input}
        data={field.data}
        onChange={field.input.onChange}
      />
    );
  }
  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Company" name="company" component={this.renderField} />
        <Field
          label="Position"
          name="position"
          data={this.grabPositions()}
          valueField="value"
          textField="position"
          component={this.renderDropdown}
        />
        <Field label="Link" name="link" component={this.renderField} />{" "}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate Inputs
  if (!values.company) {
    errors.company = "Enter Company Name!";
  }

  if (!values.position) {
    errors.position = "Enter Position Name!";
  }
  if (!values.link) {
    errors.link = "Provide A Link";
  }

  return errors;
}
export default reduxForm({
  //validate: validate <--- the validate function above
  validate,
  form: "AddJobsForm"
})(AddJobs);
