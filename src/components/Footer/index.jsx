import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
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
                            Skype ID: <span>team4.org</span>
                          </h6>
                        </a>
                      </div>
                    </div>
                    <div className="media">
                      <div className="d-flex">
                        <i className="linearicons-envelope-open" />
                      </div>
                      <div className="media-body">
                        <a href="http://paul-themes.com/cdn-cgi/l/email-protection#3f4d505c54465d5b0e06060a7f58525e5653115c5052">
                          <h6>
                            Email:{" "}
                            <span>
                              <span
                                className="__cf_email__"
                                data-cfemail="fb9392bb9e8b929f9e969298d594899c"
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
              by <span>Team 4</span>
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
