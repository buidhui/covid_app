import React from "react";

function Blog(props) {
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
              <li className="active">
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
            <form action="#" className="appoinment_form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder
                    />
                    <label htmlFor="name">
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
                    />
                    <label htmlFor>
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
                    />
                    <label htmlFor>
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
                      defaultValue={""}
                    />
                    <label htmlFor>
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
                        id="squared2"
                        name="check"
                      />
                      <label className="l_text" htmlFor="squared2">
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
                    <li className="dropdown submenu active">
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
        <section className="breadcrumb_area">
          <div className="container">
            <div className="breadcrumb_text">
              <h6 className="wow fadeInUp">From the Blog</h6>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Recent updates
              </h3>
              <ul
                className="nav justify-content-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="blog_area">
          <div className="container">
            <div className="blog_menu">
              <div className="g_fillter">
                <ul className="nav justify-content-center">
                  <li className="active" data-filter="*">
                    <a href="#">
                      <i className="linearicons-icons" />
                    </a>
                  </li>
                  <li data-filter=".comm">
                    <a href="#">Political News</a>
                  </li>
                  <li data-filter=".medi">
                    <a href="#">Medicine</a>
                  </li>
                  <li data-filter=".eff">
                    <a href="#">Economic Effects </a>
                  </li>
                  <li data-filter=".pre">
                    <a href="#">Prevention</a>
                  </li>
                  <li data-filter=".edu">
                    <a href="#">Education</a>
                  </li>
                  <li data-filter=".quarantine">
                    <a href="#">Quarantine</a>
                  </li>
                  <li data-filter=".health">
                    <a href="#">Health</a>
                  </li>
                  <li data-filter=".travel">
                    <a href="#">Travel</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row blog_item_inner">
              <div className="col-lg-6 comm travel edu quarantine">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 18, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 22
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Quarantine</div>
                      <div className="author">
                        <a href="#">by Sheryl Smith</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 4 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          How to treat COVID-19 <br />
                          coronavirus at home?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 medi">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 17, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 31
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Medicine</div>
                      <div className="author">
                        <a href="#">by Robert Watson</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 6 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          When will we have a vaccine for
                          <br /> COVID-19 Coronavirus?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 travel pre quarantine">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 16, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 45
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Quarantine</div>
                      <div className="author">
                        <a href="#">by Sheryl Smith</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 5 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          What can I do under the new
                          <br /> rules?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 edu pre">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 15, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 17
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Prevention</div>
                      <div className="author">
                        <a href="#">by Naomi Hill</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 4 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          What you need to know about <br />
                          COVID-19 and pregnancy
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 health">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 14, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 8
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Health</div>
                      <div className="author">
                        <a href="#">by Anthony Taylor</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 3 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          Are you washing your hands
                          <br /> properly?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 comm pre travel health">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 13, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 19
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Health</div>
                      <div className="author">
                        <a href="#">by Sheryl Smith</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 8 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          What is an underlying health
                          <br /> condition?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 edu">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-7.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 12, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 38
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Education</div>
                      <div className="author">
                        <a href="#">by Robert Watson</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 5 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          How to stay healthy while <br />
                          working at home
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 eff edu medi">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 11, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 20
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Medicine</div>
                      <div className="author">
                        <a href="#">by Anthony Taylor</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 4 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>What is shielding, who needs it?</h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pre medi">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-9.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 10, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 57
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Medicine</div>
                      <div className="author">
                        <a href="#">by Sheryl Smith</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 8 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          What to do if you need to see a <br />
                          GP or get medication?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 quarantine eff">
                <div className="big_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-grid/blog-10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 09, 2020
                      </a>
                      <a href="#">
                        <i className="linearicons-bubbles" /> 5
                      </a>
                    </div>
                    <div className="blog_btm_text">
                      <div className="tag">Quarantine</div>
                      <div className="author">
                        <a href="#">by Sheryl Smith</a>
                        <a href="#">
                          <i className="linearicons-radio-button" /> 7 min read
                        </a>
                      </div>
                      <a href="#">
                        <h3>
                          Do you need to disinfect your
                          <br /> home?
                        </h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row blog_pagination">
              <div className="col-md-2">
                <a className="pagi_btn prev" href="#">
                  <i className="linearicons-arrow-left" /> Newer posts
                </a>
              </div>
              <div className="col-md-8">
                <nav
                  className="navigation"
                  aria-label="Page navigation example"
                >
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item blank">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 text-right">
                <a className="pagi_btn next" href="#">
                  Older posts <i className="linearicons-arrow-right" />
                </a>
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
                          <a href="http://paul-themes.com/cdn-cgi/l/email-protection#cebca1ada5b7acaafff7f7fb8ea9a3afa7a2e0ada1a3">
                            <h6>
                              Email:{" "}
                              <span>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="cfa7a68faabfa6abaaa2a6ace1a0bda8"
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
        aria-labelledby="exampleModalLabel"
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
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
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

export default Blog;
