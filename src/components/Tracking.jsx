import React from "react";

function Tracking(props) {
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
              <li className="active">
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
              <li>
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
                      id="a_name"
                      name="a_name"
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
                      id="a_email"
                      name="a_email"
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
                      id="a_number"
                      name="a_number"
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
                      name="a_message"
                      id="a_message"
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
                        id="a_policy"
                        name="check"
                      />
                      <label className="l_text" htmlFor="a_policy">
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
              <div className="success-message">
                <i className="fa fa-check text-primary" /> Thank you!. Your
                message is successfully sent...
              </div>
              <div className="error-message">
                We're sorry, but something went wrong
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
                    <li className="dropdown submenu active">
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
                    <li>
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
        <section className="coronavirus_map">
          <iframe
            className="map"
            src="https://coronavirus-92ebd.web.app/map?embed=true"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="world_wide_tracker tracker_page pad_top">
          <div className="container">
            <img
              className="tracker_map"
              src="assets/images/tracker-map-bg.png"
              alt=""
            />
            <div className="tracker_text">
              <h5>Worldwide Tracker</h5>
              <h2>Confirmed Coronavirus Cases</h2>
              <p>Last updated: April 08, 2020, 01:43 GMT</p>
            </div>
            <div className="row tracker_inner">
              <div className="col-lg-3 col-6">
                <div className="media">
                  <div className="d-flex">
                    <img src="assets/images/icon/corona-red-1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h2 id="total_cases" />
                    <p>Total Cases</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="media">
                  <div className="d-flex">
                    <img src="assets/images/icon/corona-black-1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h2 id="total_deaths" />
                    <p>Total Deaths</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="media">
                  <div className="d-flex">
                    <img src="assets/images/icon/corona-green-1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h2 id="total_recovered" />
                    <p>Recovered</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="media">
                  <div className="d-flex">
                    <img src="assets/images/icon/corona-yellow-1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h2 id="new_cases" />
                    <p>New Cases</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="confirm_boxes row"
              id="coronaCountryUpdate"
              data-country="bangladesh"
            >
              <div className="col-lg-2">
                <div className="confirm_item">
                  <i className="linearicons-calendar-check" />
                  <h3 className="cuCountryTodayCases" />
                  <p>Today</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="confirm_item">
                  <i className="linearicons-earth-lock" />
                  <h3 className="cuContries" />
                  <p>Countries</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="confirm_item">
                  <i className="linearicons-clipboard-user" />
                  <h3 className="cuCountryTotal" />
                  <p>Active Cases</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="confirm_item">
                  <i className="linearicons-tombstone" />
                  <h3 className="cuTotal" />
                  <p>Worldwide Cases</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="confirm_item">
                  <i className="linearicons-return2" />
                  <h3 className="cuCountryRecovered" />
                  <p>Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="total_cases_chart">
          <div className="container">
            <div className="total_cases_inner">
              <iframe
                style={{ width: "100%" }}
                src="https://coronavirus.app/chart/evolution/infected?embed=true"
                frameBorder={0}
                allow="autoplay;"
                allowFullScreen
              />
            </div>
            <div className="total_cases_inner">
              <iframe
                style={{ width: "100%" }}
                src="https://coronavirus.app/chart/new/infected?embed=true"
                frameBorder={0}
                allow="autoplay;"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        <section className="data_table_area">
          <div className="container">
            <div className="main_title text-center">
              <h5>Tracking by countries</h5>
              <h2>Coronavirus in numbers</h2>
            </div>
            <div className="all-country table-responsive">
              <table
                id="world_table"
                className="table table-striped table-bordered dataTable no-footer"
                role="grid"
                aria-describedby="world_table_info"
              >
                <thead>
                  <tr role="row">
                    <th>Serial</th>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>New Cases</th>
                    <th>Deaths</th>
                    <th>New Deaths</th>
                    <th>Recovered</th>
                    <th>Active</th>
                    <th>Critical</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </section>
        <section className="app_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="app_text">
                  <h2>
                    Get <span>epidemic</span> app!
                  </h2>
                  <p>
                    Download our app now, track Coronavirus cases real-time and
                    follow instant updates.
                  </p>
                  <a href="#">
                    <img src="assets/images/apple-btn.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/images/google-btn.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="app_mobile">
                  <div className="mobile_image">
                    <img src="assets/images/mobile-1.png" alt="" />
                    <img src="assets/images/mobile-2.png" alt="" />
                  </div>
                  <ul className="corona_img nav">
                    <li>
                      <img src="assets/images/icon/app-virus-1.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/icon/app-virus-2.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/icon/app-virus-3.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/icon/app-virus-4.png" alt="" />
                    </li>
                    <li data-parallax='{"y": 100}'>
                      <img src="assets/images/icon/app-virus-5.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/icon/app-virus-6.png" alt="" />
                    </li>
                    <li>
                      <img src="assets/images/icon/app-virus-7.png" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="media">
                  <div className="d-flex">
                    <i className="linearicons-mailbox-full" />
                  </div>
                  <div className="media-body">
                    <h4>Subscribe our newsletter</h4>
                    <p>
                      Join our subscribers list to get latest news and updates
                      about COVID-19 delivered directly in your inbox.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mail_box">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Enter your email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="linearicons-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <label className="container-checkbox">
                    I accept the <span>Privacy Policy.</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_area">
          <div className="footer_widgets_area pad_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                          <a href="http://paul-themes.com/cdn-cgi/l/email-protection#4e3c212d25372c2a7f77777b0e29232f2722602d2123">
                            <h6>
                              Email:{" "}
                              <span>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="fd9594bd988d94999890949ed3928f9a"
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                Designed with <i className="linearicons-heart" />
                by <span>creakits</span>
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

export default Tracking;
