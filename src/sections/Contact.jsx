import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
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
          setShowModal(true);
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
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            message sent
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Footer className="d-flex justify-content-center">
          <Button className="dark-button" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="container d-flex flex-wrap">
          <div className="col-12 col-lg-3">
            <h3>contact</h3>
          </div>
          <div className="col-12 col-lg-8 offset-lg-1">
            <Form onSubmit={sendEmail}>
              <FloatingLabel controlId="name" label="name" className="mb-3">
                <Form.Control
                  onChange={handleFormChange}
                  value={form.name}
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="email" className="mb-3">
                <Form.Control
                  onChange={handleFormChange}
                  value={form.email}
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="message"
                label="message"
                className="mb-3"
              >
                <Form.Control
                  onChange={handleFormChange}
                  value={form.message}
                  style={{ height: "100px" }}
                  as="textarea"
                  placeholder="message"
                  name="message"
                  required
                />
              </FloatingLabel>
              <Button className="dark-button" type="submit">
                send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
