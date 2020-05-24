import React from "react";

function Appointment(props) {
  return (
    <div>
      <div className="body_wrapper">
        <div className="preloader">
          <div className="three-bounce">
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </div>
        </div>
        <div className="mobile_canvus_menu">
          <div className="close_btn">
            <img src="assets/images/icon/close-dark.png" alt="" />
          </div>
          <div className="menu_part_lux">
            <ul className="menu_list wd_scroll">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="index.html">
                  Prevention
                  <i className="linearicons-chevron-down" />
                </a>
                <ul className="list">
                  <li>
                    <a href="symptom.html">Typical Symptoms</a>
                  </li>
                  <li>
                    <a href="symptom-checker.html">Symptom Checker</a>
                  </li>
                  <li>
                    <a href="prevention.html">Prevention</a>
                  </li>
                  <li>
                    <a href="virus-checker.html">Coronavirus Checker</a>
                  </li>
                  <li>
                    <a href="tracker.html">Tracker</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                  <li>
                    <a href="faq.html">Faqs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="appointment.html">Appointment</a>
              </li>
              <li className="active">
                <a href="#">
                  Pages
                  <i className="linearicons-chevron-down" />
                </a>
                <ul className="list">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="doctors.html">Doctors</a>
                  </li>
                  <li>
                    <a href="sample-right-sidebar.html">Simple Sidebar</a>
                  </li>
                  <li>
                    <a href="typography.html">Typhography</a>
                  </li>
                  <li>
                    <a href="search.html">Search</a>
                  </li>
                  <li>
                    <a href="search-nothing.html">Not Found</a>
                  </li>
                  <li>
                    <a href="comingsoon.html">Coming Soon</a>
                  </li>
                  <li>
                    <a href="404.html">Error</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html">
                  Blog
                  <i className="linearicons-chevron-down" />
                </a>
                <ul className="list">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="single-blog.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu_btm">
            <a className="green_btn" href="#">
              <i className="linearicons-pulse" /> Symptom Checker
            </a>
          </div>
        </div>
        <div className="body_capture" />
        <section className="sidebar_widget scroll_body">
          <div className="info_sidebar_inner">
            <div className="close_btn">
              <img src="assets/images/icon/close.png" alt="" />
            </div>
            <ul className="nav info_social">
              <li>
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
              </li>
            </ul>
            <div className="info_title">
              <h2>Get in touch</h2>
              <p>
                If you have any question before we start, please fill below the
                contact form.
              </p>
            </div>
            <form action="#" className="appoinment_form js-form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder
                      required
                    />
                    <label>
                      <i className="linearicons-user" />
                      Your Name
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      placeholder
                      required
                    />
                    <label>
                      <i className="linearicons-envelope-open" />
                      Your Email Address
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="number"
                      name="number"
                      placeholder
                      required
                    />
                    <label>
                      <i className="linearicons-telephone" />
                      Your Phone Number
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                    <label>
                      <i className="linearicons-document" />
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
                        id="policy"
                        name="check"
                      />
                      <label className="l_text" htmlFor="policy">
                        I accept the <span>Privacy Policy</span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="green_btn"
                      name="appoinment"
                      id="appoinment"
                      value="appoinment"
                      data-value="appoinment"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="info_footer">
              <p>© Copyright Epidemic Organisation Ltd.</p>
              <h6>
                Designed with <i className="linearicons-heart" />
                by <span>creakits</span>
              </h6>
            </div>
          </div>
        </section>
        <header className="header_area">
          <ul className="nav menu_social flex-column">
            <li>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
          <div className="main_menu">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="assets/images/logo.png"
                    srcSet="assets/images/logo-2x.png 2x"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav ml-auto">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown submenu">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="prevention.html"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Prevention{" "}
                      </a>
                      <i
                        className="linearicons-chevron-down mobile_dropdown"
                        aria-hidden="true"
                        data-toggle="dropdown"
                      />
                      <ul className="dropdown-menu">
                        <li className="dropdown submenu">
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="symptom.html"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Symptoms
                            <i
                              className="linearicons-chevron-right mobile_dropdown"
                              aria-hidden="true"
                              data-toggle="dropdown"
                            />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="symptom.html">Typical Symptoms</a>
                            </li>
                            <li>
                              <a href="symptom-checker.html">Symptom Checker</a>
                            </li>
                            <li>
                              <a href="prevention.html">Prevention</a>
                            </li>
                            <li>
                              <a href="virus-checker.html">
                                Coronavirus Checker
                              </a>
                            </li>
                            <li>
                              <a href="tracker.html">Tracker</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="maintenance.html">Maintenance</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQS</a>
                        </li>
                      </ul>
                    </li>
                    <li className="active">
                      <a href="appointment.html">Appointment</a>
                    </li>
                    <li className="dropdown submenu">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <i
                        className="linearicons-chevron-down mobile_dropdown"
                        aria-hidden="true"
                        data-toggle="dropdown"
                      />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="doctors.html">Doctors</a>
                        </li>
                        <li>
                          <a href="sample-right-sidebar.html">Simple Sidebar</a>
                        </li>
                        <li>
                          <a href="typography.html">Typhography</a>
                        </li>
                        <li className="dropdown submenu">
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="search.html"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Search
                            <i
                              className="linearicons-chevron-right mobile_dropdown"
                              aria-hidden="true"
                              data-toggle="dropdown"
                            />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="search.html">Search</a>
                            </li>
                            <li>
                              <a href="search-nothing.html">Not Found</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="comingsoon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="404.html">Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown submenu">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="blog.html"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <i
                        className="linearicons-chevron-down mobile_dropdown"
                        aria-hidden="true"
                        data-toggle="dropdown"
                      />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="checker_btn">
                      <a href="#">
                        <i className="linearicons-pulse" /> Symptom Checker
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="right_burger">
              <ul className="nav">
                <li>
                  <div
                    className="search_btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <img src="assets/images/icon/search.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="menu_btn">
                    <img src="assets/images/icon/burger.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
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
        <footer className="footer_area">
          <div className="footer_widgets_area pad_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <aside className="f_widget contact_widget">
                    <div className="f_title">
                      <h3>Contacts</h3>
                    </div>
                    <div className="ct_wd_text">
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-telephone" />
                        </div>
                        <div className="media-body">
                          <h5>emergency call</h5>
                          <a href="tel:+8801676790690">
                            <h4>+61 (8) 8234 3555</h4>
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-map-marker" />
                        </div>
                        <div className="media-body">
                          <p>
                            78-66 State Route 33,
                            <br />
                            Brighton VIC 3186, AUSTRALIA
                          </p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="d-flex">
                          <i className="fab fa-skype" />
                        </div>
                        <div className="media-body">
                          <a href="skype:md.rocky79">
                            <h6>
                              Skype ID: <span>epidemic.org</span>
                            </h6>
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-envelope-open" />
                        </div>
                        <div className="media-body">
                          <a href="http://paul-themes.com/cdn-cgi/l/email-protection#55273a363e2c3731646c6c60153238343c397b363a38">
                            <h6>
                              Email:{" "}
                              <span>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="a8c0c1e8cdd8c1cccdc5c1cb86c7dacf"
                                >
                                  [email&nbsp;protected]
                                </span>
                              </span>
                            </h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3">
                  <aside className="f_widget list_widget">
                    <div className="f_title">
                      <h3>Prevention</h3>
                    </div>
                    <ul className="nav flex-column">
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          Typical Symptoms
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          How to Protect
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          How are spreading
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          Meet our Doctors
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          About Coronavirus
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="col-lg-3">
                  <aside className="f_widget list_widget">
                    <div className="f_title">
                      <h3>Protection</h3>
                    </div>
                    <ul className="nav flex-column">
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          Typical Symptoms
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          How to Protect
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          How are spreading
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          Meet our Doctors
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-radio-button" />
                          About Coronavirus
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="col-lg-3">
                  <aside className="f_widget about_widget">
                    <div className="f_title">
                      <h3>About</h3>
                    </div>
                    <p>
                      The disease was first identified in 2019 in Wuhan, the
                      capital of Hubei, China, and has since spread globally,
                      resulting in the 2019–2020 coronavirus pandemic.
                    </p>
                    <ul className="nav">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_copyright">
            <div className="container">
              <img src="assets/images/f-logo.png" alt="" />
              <p>© Copyright Epidemic Organisation Ltd.</p>
              <ul className="nav">
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Impressum</a>
                </li>
              </ul>
              <h6>
                Designed with <i className="linearicons-heart" /> by
                <span>creakits</span>
              </h6>
            </div>
          </div>
        </footer>
      </div>
      <div
        className="modal fade search_modal"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <img src="assets/images/icon/close-white.png" alt="" />
        </button>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here..."
                  aria-label="Recipient's username"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="linearicons-magnifier" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
