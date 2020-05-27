import React from "react";

function Appointment(props) {
  return (
    <div>
      <div className="body_wrapper">
        <section className="breadcrumb_area boi_breadcrumb">
          <div className="container">
            <div className="breadcrumb_text">
              <h6 className="wow fadeInUp">
                Consult our epidemiological experts
              </h6>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Online Skype Consultation
              </h3>
              <ul
                className="nav justify-content-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="doctors.html">Appointment</a>
                </li>
              </ul>
            </div>
            <div className="row appointment_box">
              <div className="col-lg-4 appoinment_features">
                <div className="shape one" data-parallax='{"y": 100}'>
                  <img src="assets/images/appoinment/a_img1.png" alt="" />
                </div>
                <div className="shape two">
                  <img src="assets/images/appoinment/a_img2.png" alt="" />
                </div>
                <div className="shape three">
                  <img src="assets/images/appoinment/a_img3.png" alt="" />
                </div>
                <div className="shape four" data-parallax='{"x": 30}'>
                  <img src="assets/images/appoinment/a_img4.png" alt="" />
                </div>
                <div className="shape five">
                  <img src="assets/images/appoinment/a_img5.png" alt="" />
                </div>
                <div className="shape six" data-parallax='{"y": 50}'>
                  <img src="assets/images/appoinment/a_img6.png" alt="" />
                </div>
                <h2>Make an appointment</h2>
                <p>
                  Fill out the form to request an online appointment and our
                  staff will contact you immediately.
                </p>
                <div className="media appoinment_features_item">
                  <i className="linearicons-medal-empty" />
                  <div className="media-body">
                    <h6>Reputable experts</h6>
                    <p>Our doctors are world famous</p>
                  </div>
                </div>
                <div className="media appoinment_features_item">
                  <i className="linearicons-clipboard-check" />
                  <div className="media-body">
                    <h6>Smart advice</h6>
                    <p>We’ll give you useful tips</p>
                  </div>
                </div>
                <div className="media appoinment_features_item">
                  <i className="linearicons-tags" />
                  <div className="media-body">
                    <h6>100% FREE</h6>
                    <p>Don’ worry about the cost</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form action="#" className="appoinment_form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          id="a_name"
                          name="a_name"
                          placeholder
                        />
                        <label>
                          <i className="linearicons-user" />
                          Your Name
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          id="a_email"
                          name="a_email"
                          placeholder
                        />
                        <label>
                          <i className="linearicons-envelope-open" />
                          Your Email Address
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          id="skype"
                          name="skype"
                          placeholder
                        />
                        <label>
                          <i className="fab fa-skype" />
                          Your Skype ID
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          id="a_number"
                          name="a_number"
                          placeholder
                        />
                        <label>
                          <i className="linearicons-telephone" />
                          Your Phone Number
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="form-group input-group date"
                        id="datetimepicker3"
                        data-target-input="nearest"
                      >
                        <div
                          className="input-group-append"
                          data-target="#datetimepicker3"
                          data-toggle="datetimepicker"
                        >
                          <div className="input-group-text">
                            <i className="linearicons-calendar-text" />
                          </div>
                        </div>
                        <div className="text_div">Choose date</div>
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          data-target="#datetimepicker3"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="form-group input-group date"
                        id="datetimepicker4"
                        data-target-input="nearest"
                      >
                        <div
                          className="input-group-append"
                          data-target="#datetimepicker4"
                          data-toggle="datetimepicker"
                        >
                          <div className="input-group-text">
                            <i className="linearicons-alarm2" />
                          </div>
                        </div>
                        <div className="text_div">Choose time</div>
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          data-target="#datetimepicker4"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder
                        />
                        <label>
                          <i className="linearicons-document" />
                          Add your subject
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group select_conversation_inner">
                        <h6>Choose method of conversation</h6>
                        <div className="select_conversation">
                          <input
                            type="radio"
                            name="conversation"
                            id="voice"
                            defaultValue="voice"
                          />
                          <label htmlFor="voice">Voice</label>
                        </div>
                        <div className="select_conversation">
                          <input
                            type="radio"
                            name="conversation"
                            id="video"
                            defaultValue="video"
                          />
                          <label htmlFor="video">Video</label>
                        </div>
                        <div className="select_conversation">
                          <input
                            type="radio"
                            name="conversation"
                            id="chat"
                            defaultValue="chat"
                          />
                          <label htmlFor="chat">Chat</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="a_message"
                          id="a_message"
                          cols={30}
                          rows={10}
                          className="form-control"
                          defaultValue={""}
                        />
                        <label>
                          <i className="linearicons-pencil4" />
                          Your Message
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group checkbox_field">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            defaultValue="None"
                            id="squared2"
                            name="check"
                          />
                          <label className="l_text" htmlFor="squared2">
                            I accept the <span>Privacy Policy</span> and the
                            <span>Term of Use.</span>
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="green_btn"
                          value="appoinment"
                          data-value="appoinment"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="work_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="work_content">
                  <div className="main_title">
                    <h5>It’s so simple</h5>
                    <h2>How it works?</h2>
                  </div>
                  <ol className="work_list">
                    <li className="wow fadeInUp" data-wow-delay="0.1s">
                      Enter your contact details so we can add you on Skype
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.2s">
                      Select date and time, when we can call you
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      Select method of conversation
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      Add your subject, that we will talk about on consulting
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      Describe briefly how we can help you
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  data-wow-delay="400ms"
                  className="img-fluid wow fadeInRight"
                  src="assets/images/appoinment/works.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="client_logo_area pad_top">
          <div className="container">
            <div className="client_slider">
              <div className="item">
                <img src="assets/images/client-logo/client-logo-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-2.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-3.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-4.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-5.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-6.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-2.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-3.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-4.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-5.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/client-logo/client-logo-6.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="check_now_area check_now_box full_widget_check">
          <div className="container">
            <div className="row m-0 justify-content-between">
              <div className="left">
                <div className="media">
                  <div className="d-flex">
                    <img src="assets/images/check-4.png" alt="" />
                    <img src="assets/images/check-5.png" alt="" />
                    <img src="assets/images/check-6.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h4>Think you might be affected?</h4>
                    <p>
                      Try our simple coronavirus checker to find out what you
                      need to do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <a className="icon_btn" href="#">
                  Check now <i className="linearicons-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Appointment;
