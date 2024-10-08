import React, { useState } from "react";
import "../../components/contact/Contact.css";
import Button from "../button/Button";
import locationicon from "../../images/location.png";
import phoneicon from "../../images/call.png";
import emailicon from "../../images/email.png";
import { useForm } from "react-hook-form";


function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.REACT_APP_URL;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/twoemail/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Emails sent successfuly");
        reset();
      } else {
        alert("Failed to send Mail");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending emails");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section>
        <div className="full-width">
          <div className="main-content-1320">
            <div className="padding-dft"></div>
            <div className="contact-container">
              <div className="title contact-title">
                <p className="maintitle">Contact Us</p>
              </div>
              <div className="contact-content">
              <div className="contact-form">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name-contact-row">
                      <div className="input-field name-contact">
                        <div className="input-field">Name</div>
                        <div className="input-group name-contact-input">
                          <input
                            type="text"
                            className="input"
                            {...register("name", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="input-field name-contact">
                        <div className="input-field">Contact Number</div>
                        <div className="input-group name-contact-input">
                          <input
                            type="text"
                            className="input"
                            {...register("contactNumber", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="email-row">
                      <div className="input-field">
                        <div className="input-field">Email</div>
                        <div className="input-group">
                          <input
                            type="email"
                            className="input"
                            {...register("email", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="message-row">
                      <div className="input-field">
                        <div className="input-field">Message</div>
                        <div className="input-group">
                          <textarea
                            className="input"
                            {...register("Message", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="btn-contact">
                    {isLoading ? (
                        <Button
                          type="button"
                          label="Loading..."
                          isLoading={true}
                        />
                      ) : (
                        <Button
                          type="submit"
                          label="Submit"
                          isLoading={false}
                        />
                      )}                     
                    </div>
                 
                </form>
                </div>
                <div className="contact-address">
                  <div className="address">
                    <img
                      src={locationicon}
                      alt="location-icon"
                      className="icon-contact"
                    />
                    <p className="address-land-mark">
                      <a
                        href="https://goo.gl/maps/npGPYMXJBweg7XJX6"
                        target="_blank"
                        rel="nopper"
                        className="contact-decoration"
                      >
                        A9, Gauri Nagar Society, Near Swaminarayan Temple, Ranna
                        Park, Ghatlodia, Ahmedabad- 380061
                      </a>
                    </p>
                  </div>
                  <div className="phone-number">
                    <img
                      src={phoneicon}
                      alt="phone-icon"
                      className="icon-contact"
                    />
                    <p className="address-land-marks">
                      <a href="tel:9825471959" className="contact-decoration">
                        (+91) 98254 71959 |
                      </a>

                      <a href="tel:7016141186" className="contact-decoration">
                        (+91) 7016141186
                      </a>
                    </p>
                  </div>
                  <div className="email ">
                    <img
                      src={emailicon}
                      alt="email-icon"
                      className="icon-contact"
                    />
                    <p className="address-land-mark">
                      <a
                        href="mailto:dftalumnifamily@gmail.com"
                        target="_blank"
                        rel="nopper"
                        className="contact-decoration"
                      >
                        dftalumnifamily@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
