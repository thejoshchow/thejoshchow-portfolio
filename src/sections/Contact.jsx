import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env["REACT_APP_SERVICE_ID"],
        process.env["REACT_APP_TEMPLATE_ID"],
        form,
        {
          publicKey: process.env["REACT_APP_PUBLIC_KEY"],
        }
      )
      .then(
        () => {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          console.log("success!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section id="contact" className="section row">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="container d-flex flex-row">
          <div className="col-sm-12 col-lg-3">
            <h3>Contact</h3>
          </div>
          <div className="col-sm-12 col-lg-8 offset-lg-1">
            <Form onSubmit={sendEmail}>
              <FloatingLabel controlId="name" label="Name" className="mb-3">
                <Form.Control
                  onChange={handleFormChange}
                  value={form.name}
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  onChange={handleFormChange}
                  value={form.email}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="message"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  onChange={handleFormChange}
                  value={form.message}
                  style={{ height: "100px" }}
                  as="textarea"
                  placeholder="Message"
                  name="message"
                  required
                />
              </FloatingLabel>
              <Button type="submit">Send Message</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
