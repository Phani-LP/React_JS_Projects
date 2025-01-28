import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function SimpleForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message} Data Saved Successfully. `
    );
  };

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2>Simple Form</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>
      <br />
      <form onSubmit={formHandler}>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col" colSpan={2}>Form Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={changeHandler}
                />
              </td>
            </tr>

            <tr>
              <td>Message</td>
              <td>
                <textarea
                  value={formData.message}
                  name="message"
                  onChange={changeHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <input type="submit" value="submit" class="btn btn-secondary btn"/>
      </form>
    </>
  );
}

export default SimpleForms;
