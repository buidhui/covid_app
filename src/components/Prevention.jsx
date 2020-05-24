import React from "react";

function Prevention(props) {
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
        <header className="header_area white_header">
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
                    src="assets/images/logo-2.png"
                    srcSet="assets/images/logo-2-2x.png 2x"
                    alt=""
                  />
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
                    <img src="assets/images/icon/search-white.png" alt="" />
                    <img src="assets/images/icon/search.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="menu_btn">
                    <img src="assets/images/icon/burger-white.png" alt="" />
                    <img src="assets/images/icon/burger.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section className="prevention_banner">
          <div className="container">
            <div className="prevention_text">
              <h6 className="wow fadeInUp">What you need to do</h6>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                How to prevent COVID-19?
              </h3>
              <ul
                className="nav justify-content-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="prevention.html">Prevention</a>
                </li>
                <li>
                  <a href="#">How to prevent COVID-19?</a>
                </li>
              </ul>
              <img
                className="img-fluid"
                src="assets/images/breadcrumb/prevention-persong.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="protect_yourself_area p_100">
          <div className="container">
            <div className="main_title_2 text-center">
              <h2 className="wow fadeInUp">
                Keep <span>social distance</span> to stay safe
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                With the number of COVID-19 cases increasing every day,
                psychologists offer insights on how to separate yourself from
                others, while still getting the social support you need.
              </p>
            </div>
            <div className="row protect_inner flex-row-reverse">
              <div className="col-lg-6">
                <div className="main_title">
                  <h5>What you need to do</h5>
                  <h2>How to protect yourself?</h2>
                </div>
                <div className="row protect_list_inner">
                  <div className="col-6">
                    <div className="protect_list_item">
                      <div className="protect_list_title">
                        <h3>You should do</h3>
                        <h6>Be sure to follow it</h6>
                      </div>
                      <ul className="nav flex-column">
                        <li>
                          <a href="#">
                            <i className="linearicons-home4" />
                            Stay at home
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-desk-tape" />
                            Wear mask
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-tissue" />
                            Always use tissues
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-couch" />
                            Disinfect your home
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-rain" />
                            Wash your hands
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-thermometer" />
                            Frequent self-isolation
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-bottle" />
                            Frequent waterintake
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="protect_list_item red">
                      <div className="protect_list_title">
                        <h3>You should avoid</h3>
                        <h6>Be sure to follow it</h6>
                      </div>
                      <ul className="nav flex-column">
                        <li>
                          <a href="#">
                            <i className="linearicons-man-woman" />
                            Social distance
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-paw" />
                            Avoid animals
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-woman" />
                            Don't touch your face
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-hand" />
                            Avoid handshaking
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-chair" />
                            Avoid infected surfaces
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-drop-crossed" />
                            Avoid droplets
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="linearicons-plane-crossed" />
                            Don’t travel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="protect_img">
                  <img
                    className="img-fluid"
                    src="assets/images/protect-img-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="prevent_area prevent_right">
          <div className="container">
            <div className="row prevent_inner flex-row-reverse">
              <div className="col-lg-6">
                <div className="prevent_item_inner row">
                  <div className="col-sm-6">
                    <div className="prevent_item wow fadeInUp">
                      <div className="prevent_img">
                        <img
                          className="img-fluid"
                          src="assets/images/prevent/prevent-1.png"
                          alt=""
                        />
                      </div>
                      <div className="prevent_text">
                        <h4>Stay at home</h4>
                        <p>
                          Stay at home if you perceive the symptoms and consult
                          your doctor on phone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="prevent_item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="prevent_img">
                        <img
                          className="img-fluid"
                          src="assets/images/prevent/prevent-2.png"
                          alt=""
                        />
                      </div>
                      <div className="prevent_text">
                        <h4>Wash your hands often</h4>
                        <p>
                          Clean your hands with alcohol-based rub or wash them
                          with soap for at least 20 seconds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="prevent_item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="prevent_img">
                        <img
                          className="img-fluid"
                          src="assets/images/prevent/prevent-3.png"
                          alt=""
                        />
                      </div>
                      <div className="prevent_text">
                        <h4>Keep social distance</h4>
                        <p>
                          Keep at least 2 m distance between yourself &amp;
                          anyone if you go among people.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="prevent_item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="prevent_img">
                        <img
                          className="img-fluid"
                          src="assets/images/prevent/prevent-4.png"
                          alt=""
                        />
                      </div>
                      <div className="prevent_text">
                        <h4>Wear Facemask</h4>
                        <p>
                          When you are around other people and before you enter
                          a healthcare provider’s.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="prevent_details">
                  <div className="prevent_details_text">
                    <h5>What should you do</h5>
                    <h2>How to prevent Coronavirus?</h2>
                    <p>
                      Some details about how the disease is spread are unknown
                      and is being determined.The WHO and CDC state that it is
                      primarily spread during close contact and by respiratory
                      droplets
                      <br /> produced when people cough or sneeze; with close
                      contact being within 1 to 2 meters (3 to 6 feet). A study
                      in Singapore found that an uncovered coughing can lead to
                      droplets travelling up to 4.5 metres (15 feet).
                    </p>
                    <p>
                      Respiratory droplets may also be produced during breathing
                      out, including when talking, though the virus is not
                      generally airborne. These droplets can land in the mouths
                      or noses of people who are nearby or possibly be inhaled
                      into the lungs. Some medical procedures such as intubation
                      and cardiopulmonary...
                    </p>
                    <a className="green_btn" href="#">
                      <i className="linearicons-shield-check" /> Read more about
                      Prevention
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="washing_process_area pad_btm">
          <div className="container">
            <div className="main_title text-center white">
              <h5>Hand washing process</h5>
              <h2>How to wash your Hands</h2>
            </div>
            <div className="washing_process_inner row">
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="400ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-1.png" alt="" />
                    <div className="number">1</div>
                  </div>
                  <p>
                    <span>Apply soap</span> and ruv your hands together
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="500ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-2.png" alt="" />
                    <div className="number">2</div>
                  </div>
                  <p>
                    <span>Use one hand</span> to rub the back of the other hand
                    and vice versa
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="600ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-3.png" alt="" />
                    <div className="number">3</div>
                  </div>
                  <p>
                    <span>Rub your hands</span> together and clean between your
                    fingers
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="700ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-4.png" alt="" />
                    <div className="number">4</div>
                  </div>
                  <p>
                    <span>Rub the back</span> of your fingers against your palms
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="800ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-5.png" alt="" />
                    <div className="number">5</div>
                  </div>
                  <p>
                    <span>Rub your thumb</span> using your other hand and vice
                    versa
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="washing_item wow fadeIn" data-wow-delay="900ms">
                  <div className="icon">
                    <img src="assets/images/icon/washing-6.png" alt="" />
                    <div className="number">6</div>
                  </div>
                  <p>
                    <span>Rub your tips</span> of your fingers on the palm of
                    your other hand and vice versa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_area prevention_box">
          <div className="container">
            <div className="check_now_area check_now_box">
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
          </div>
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
                          <a href="http://paul-themes.com/cdn-cgi/l/email-protection#c3b1aca0a8baa1a7f2fafaf683a4aea2aaafeda0acae">
                            <h6>
                              Email:{" "}
                              <span>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="1d75745d786d74797870747e33726f7a"
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

export default Prevention;
