import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
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
              <Link to="index.html">Home</Link>
            </li>
            <li>
              <Link to="index.html">Prevention</Link>
            </li>
            <li>
              <Link to="appointment.html">Appointment</Link>
            </li>

            <li>
              <Link to="index.html">Blog</Link>
            </li>
            <li>
              <Link to="contact.html">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu_btm">
          <a className="green_btn" href="#">
            <i className="linearicons-pulse" /> Health Declare
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
                  <li className="active">
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/tracking">Tracking</Link>
                  </li>
                  {/* <li>
                    <Link to="/prevention">Prevention</Link>
                  </li> */}
                  <li>
                    <Link to="/appointment">Appointment</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li className="checker_btn">
                    {/* <Link to="/healthdiary">Health Diary</Link> */}
                    <Link to="/healthdiary">
                      <i className="linearicons-pulse" /> Health diary
                    </Link>
                  </li>
                  <li className="checker_btn">
                    <a href="#">
                      <i className="linearicons-user" /> Sign in
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="modal" id="exampleModal">
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

export default Header;
