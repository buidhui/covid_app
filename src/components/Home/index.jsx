import React from "react";
function Home(props) {
  return (
    <div>
      <div>
        <div className="body_wrapper">
          <section className="home_banner_area">
            <div className="container">
              <div className="row home_banner_inner">
                <div className="col-sm-7">
                  <h5 className="wow fadeInUp" data-wow-delay="300ms">
                    Stop COVID-19
                  </h5>
                  <h3 className="wow fadeInUp" data-wow-delay="500ms">
                    How can we fight together against Coronavirus?
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay="400ms">
                    It’s never been clearer that we’re all global citizens,
                    <br />
                    and we all have a part to play. The novel strain of
                    <br />
                    coronavirus, has officially reached pandemic proportions.
                  </p>
                  <a
                    className="main_btn wow fadeInLeft"
                    data-wow-delay="300ms"
                    href="#"
                  >
                    How to Prevent
                  </a>
                  <div className="row home_option">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="300ms">
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-shield-check" />
                        </div>
                        <div className="media-body">
                          <h4>Protection</h4>
                          <p>How to protect yourself</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-pulse" />
                        </div>
                        <div className="media-body">
                          <h4>Symptoms</h4>
                          <p>Check basic symptoms</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="500ms">
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-bubbles" />
                        </div>
                        <div className="media-body">
                          <h4>Appointment</h4>
                          <p>Get online consultation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="600ms">
                      <div className="media">
                        <div className="d-flex">
                          <i className="linearicons-document2" />
                        </div>
                        <div className="media-body">
                          <h4>About COVID-19</h4>
                          <p>Read more about coronavirus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <img
                    className="img-fluid wow fadeInRight"
                    data-wow-delay="400ms"
                    src="assets/images/svg/home-banner-cleaner.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="check_now_area">
            <div className="container">
              <div className="row m-0 justify-content-between">
                <div className="left">
                  <div className="media">
                    <div className="d-flex">
                      <img src="assets/images/check-1.png" alt="" />
                      <img src="assets/images/check-2.png" alt="" />
                      <img src="assets/images/check-3.png" alt="" />
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
                  <a
                    className="icon_btn wow fadeInRight"
                    data-wow-delay="400ms"
                    href="#"
                  >
                    Check now <i className="linearicons-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="home_about_corona">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="home_ab_img wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <img src="assets/images/home-ab-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home_ab_text">
                    <div className="home_ab_text_inner">
                      <div className="home_ab_item">
                        <h6>COVID-19 the disease</h6>
                        <h4>About the Coronavirus</h4>
                        <p>
                          Coronavirus disease 2019 (COVID-19) is an infectious
                          disease caused by severe acute respiratory syndrome
                          coronavirus 2. The disease was first identified in
                          2019 in Wuhan, the capital of Hubei, China, and has
                          since spread globally, resulting in the 2019–2020
                          coronavirus pandemic.
                        </p>
                      </div>
                      <div className="home_ab_item">
                        <h4>What is the COVID-19?</h4>
                        <p>
                          COVID-19 is a new strain of coronavirus that has not
                          been previously identified in humans. It was first
                          identified in Wuhan, Hubei Province, China, where it
                          has caused a large and ongoing outbreak. It has since
                          spread more widely in China.
                        </p>
                        <a className="text_btn" href="#">
                          Read more about{" "}
                          <i className="linearicons-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="world_wide_tracker pad_top">
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
                <div className="col-lg-3 col-6 wow fadeIn" data-wow-delay={300}>
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
                <div className="col-lg-3 col-6 wow fadeIn" data-wow-delay={400}>
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
                <div className="col-lg-3 col-6 wow fadeIn" data-wow-delay={500}>
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
                <div className="col-lg-3 col-6 wow fadeIn" data-wow-delay={600}>
                  <div className="media">
                    <div className="d-flex">
                      <img
                        src="assets/images/icon/corona-yellow-1.png"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h2 id="new_cases" />
                      <p>New Cases</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tracker_btn">
                <a
                  className="green_btn wow fadeInUp"
                  data-wow-delay={500}
                  href="#"
                >
                  <i className="linearicons-earth-lock" /> See Live Track
                </a>
              </div>
            </div>
          </section>
          <section className="symptoms_area">
            <div className="container">
              <ul className="nav image_list">
                <li>
                  <img src="assets/images/symptoms-user/sm-1.png" alt="" />
                </li>
                <li>
                  <img src="assets/images/symptoms-user/sm-2.png" alt="" />
                </li>
                <li>
                  <img src="assets/images/symptoms-user/sm-3.png" alt="" />
                </li>
              </ul>
              <div className="title_text wow fadeInUp" data-wow-delay="400ms">
                <h5>Symptoms of COVID-19</h5>
                <h2>What are the basic symptoms?</h2>
              </div>
              <div className="row symptoms_inner">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="symptoms_item">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/symptoms-user/symptoms-1.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>High fever</h4>
                        <p>
                          Fever is a key symptom, experts say. Don't fixate on a
                          number, but know it's not a fever until temperature
                          reaches at least 39°C.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="500ms">
                  <div className="symptoms_item">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/symptoms-user/symptoms-2.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Sortness of Breath</h4>
                        <p>
                          You feel hot to touch on your chest or back It is a
                          common sign and also may appear in 2-10 days if you
                          affected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="symptoms_item">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/symptoms-user/symptoms-3.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Dry Cough</h4>
                        <p>
                          Coughing is another key symptom, but it's not just any
                          cough, said Schaffner. It should be a dry cough that
                          you feel in your chest.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="700ms">
                  <div className="symptoms_item">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/symptoms-user/symptoms-4.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Headache</h4>
                        <p>
                          Around 1 out of every 6 people who gets COVID-19
                          becomes seriously ill and develops difficulty
                          breathing or shortness of breath.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="protect_yourself_area p_100">
            <div className="container">
              <div className="main_title text-center">
                <h5>What you need to do</h5>
                <h2>How to protect yourself?</h2>
              </div>
              <div className="row protect_inner">
                <div className="col-lg-6">
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
                  <div className="protect_self_text">
                    <h3>What does self-isolation involve?</h3>
                    <p>
                      If you need to self-isolate, you should take action
                      immediately. You must stay inside and avoid all contact
                      with other people.
                    </p>
                    <a className="text_btn" href="#">
                      How else can you protect yourself?
                      <i className="linearicons-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="protect_img text-center apps_craft_animation">
                    <img
                      className="img-fluid wow fadeIn"
                      data-wow-delay="500ms"
                      src="assets/images/protect-img.png"
                      alt=""
                    />
                    <ul className="nav">
                      <li>
                        <img
                          src="assets/images/icon/project-virus-1.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-2.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="layer layer2"
                          data-depth="0.5"
                          src="assets/images/icon/project-virus-3.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-4.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-5.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-6.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-7.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-8.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          className="layer layer2"
                          data-depth="0.5"
                          src="assets/images/icon/project-virus-9.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icon/project-virus-10.png"
                          alt=""
                        />
                      </li>
                    </ul>
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
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="400ms"
                >
                  <div className="washing_item">
                    <div className="icon">
                      <img src="assets/images/icon/washing-1.png" alt="" />
                      <div className="number">1</div>
                    </div>
                    <p>
                      <span>Apply soap</span> and ruv your hands together
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="500ms"
                >
                  <div className="washing_item">
                    <div className="icon">
                      <img src="assets/images/icon/washing-2.png" alt="" />
                      <div className="number">2</div>
                    </div>
                    <p>
                      <span>Use one hand</span> to rub the back of the other
                      hand and vice versa
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="600ms"
                >
                  <div className="washing_item">
                    <div className="icon">
                      <img src="assets/images/icon/washing-3.png" alt="" />
                      <div className="number">3</div>
                    </div>
                    <p>
                      <span>Rub your hands</span> together and clean between
                      your fingers
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="700ms"
                >
                  <div className="washing_item">
                    <div className="icon">
                      <img src="assets/images/icon/washing-4.png" alt="" />
                      <div className="number">4</div>
                    </div>
                    <p>
                      <span>Rub the back</span> of your fingers against your
                      palms
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="800ms"
                >
                  <div className="washing_item">
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
                <div
                  className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                  data-wow-delay="900ms"
                >
                  <div className="washing_item">
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
          <section className="prevent_area">
            <div className="container">
              <div className="row prevent_inner">
                <div className="col-lg-6">
                  <div className="prevent_item_inner row">
                    <div
                      className="col-sm-6 wow fadeInUp"
                      data-wow-delay="400ms"
                    >
                      <div className="prevent_item">
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
                            Stay at home if you perceive the symptoms and
                            consult your doctor on phone.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 wow fadeInUp"
                      data-wow-delay="500ms"
                    >
                      <div className="prevent_item">
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
                    <div
                      className="col-sm-6 wow fadeInUp"
                      data-wow-delay="600ms"
                    >
                      <div className="prevent_item">
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
                    <div
                      className="col-sm-6 wow fadeInUp"
                      data-wow-delay="700ms"
                    >
                      <div className="prevent_item">
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
                            When you are around other people and before you
                            enter a healthcare provider’s.
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
                        droplets produced when people cough or sneeze; with
                        close contact being within 1 to 2 meters (3 to 6 feet).
                        A study in Singapore found that an uncovered coughing
                        can lead to droplets travelling up to 4.5 metres (15
                        feet).
                      </p>
                      <p>
                        Respiratory droplets may also be produced during
                        breathing out, including when talking, though the virus
                        is not generally airborne. These droplets can land in
                        the mouths or noses of people who are nearby or possibly
                        be inhaled into the lungs. Some medical procedures such
                        as intubation and cardiopulmonary...
                      </p>
                      <a className="green_btn" href="#">
                        <i className="linearicons-shield-check" /> Read more
                        about Prevention
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="answers_area p_100">
            <div className="container">
              <div className="main_title">
                <h5>Have questions? Find answers!</h5>
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="row answer_inner">
                <div className="col-lg-4">
                  <div className="question_list">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Pandemic
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="home-tab"
                                  data-toggle="tab"
                                  href="#home"
                                  role="tab"
                                  aria-controls="home"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile-tab"
                                  data-toggle="tab"
                                  href="#profile"
                                  role="tab"
                                  aria-controls="profile"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact-tab"
                                  data-toggle="tab"
                                  href="#contact"
                                  role="tab"
                                  aria-controls="contact"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four-tab"
                                  data-toggle="tab"
                                  href="#four"
                                  role="tab"
                                  aria-controls="four"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five-tab"
                                  data-toggle="tab"
                                  href="#five"
                                  role="tab"
                                  aria-controls="five"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            About COVID-19
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab2"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home2-tab"
                                  data-toggle="tab"
                                  href="#home2"
                                  role="tab"
                                  aria-controls="home2"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile2-tab"
                                  data-toggle="tab"
                                  href="#profile2"
                                  role="tab"
                                  aria-controls="profile2"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact2-tab"
                                  data-toggle="tab"
                                  href="#contact2"
                                  role="tab"
                                  aria-controls="contact2"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four2-tab"
                                  data-toggle="tab"
                                  href="#four2"
                                  role="tab"
                                  aria-controls="four2"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five2-tab"
                                  data-toggle="tab"
                                  href="#five2"
                                  role="tab"
                                  aria-controls="five2"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Protecting against COVID-19
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab3"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home3-tab"
                                  data-toggle="tab"
                                  href="#home3"
                                  role="tab"
                                  aria-controls="home3"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile3-tab"
                                  data-toggle="tab"
                                  href="#profile3"
                                  role="tab"
                                  aria-controls="profile3"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact3-tab"
                                  data-toggle="tab"
                                  href="#contact3"
                                  role="tab"
                                  aria-controls="contact3"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four3-tab"
                                  data-toggle="tab"
                                  href="#four3"
                                  role="tab"
                                  aria-controls="four3"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five3-tab"
                                  data-toggle="tab"
                                  href="#five3"
                                  role="tab"
                                  aria-controls="five3"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingfour">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            Work and travel arrangements
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapsefour"
                          className="collapse"
                          aria-labelledby="headingfour"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab4"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home4-tab"
                                  data-toggle="tab"
                                  href="#home4"
                                  role="tab"
                                  aria-controls="home4"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile4-tab"
                                  data-toggle="tab"
                                  href="#profile4"
                                  role="tab"
                                  aria-controls="profile4"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact4-tab"
                                  data-toggle="tab"
                                  href="#contact4"
                                  role="tab"
                                  aria-controls="contact4"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four4-tab"
                                  data-toggle="tab"
                                  href="#four4"
                                  role="tab"
                                  aria-controls="four4"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five4-tab"
                                  data-toggle="tab"
                                  href="#five4"
                                  role="tab"
                                  aria-controls="five4"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingfive">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsefive"
                            aria-expanded="false"
                            aria-controls="collapsefive"
                          >
                            About university and school
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapsefive"
                          className="collapse"
                          aria-labelledby="headingfive"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab5"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home5-tab"
                                  data-toggle="tab"
                                  href="#home5"
                                  role="tab"
                                  aria-controls="home5"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile5-tab"
                                  data-toggle="tab"
                                  href="#profile5"
                                  role="tab"
                                  aria-controls="profile5"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact5-tab"
                                  data-toggle="tab"
                                  href="#contact5"
                                  role="tab"
                                  aria-controls="contact5"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four5-tab"
                                  data-toggle="tab"
                                  href="#four5"
                                  role="tab"
                                  aria-controls="four5"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five5-tab"
                                  data-toggle="tab"
                                  href="#five5"
                                  role="tab"
                                  aria-controls="five5"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingsix">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsesix"
                            aria-expanded="false"
                            aria-controls="collapsesix"
                          >
                            Home isolation
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapsesix"
                          className="collapse"
                          aria-labelledby="headingsix"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab6"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home6-tab"
                                  data-toggle="tab"
                                  href="#home6"
                                  role="tab"
                                  aria-controls="home6"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile6-tab"
                                  data-toggle="tab"
                                  href="#profile6"
                                  role="tab"
                                  aria-controls="profile6"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact6-tab"
                                  data-toggle="tab"
                                  href="#contact6"
                                  role="tab"
                                  aria-controls="contact6"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four6-tab"
                                  data-toggle="tab"
                                  href="#four6"
                                  role="tab"
                                  aria-controls="four6"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five6-tab"
                                  data-toggle="tab"
                                  href="#five6"
                                  role="tab"
                                  aria-controls="five6"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingseven">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseseven"
                            aria-expanded="false"
                            aria-controls="collapseseven"
                          >
                            Social distancing
                            <i className="linearicons-chevron-down" />
                          </button>
                        </div>
                        <div
                          id="collapseseven"
                          className="collapse"
                          aria-labelledby="headingseven"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="myTab7"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="home7-tab"
                                  data-toggle="tab"
                                  href="#home7"
                                  role="tab"
                                  aria-controls="home7"
                                  aria-selected="true"
                                >
                                  What are coronaviruses?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="profile7-tab"
                                  data-toggle="tab"
                                  href="#profile7"
                                  role="tab"
                                  aria-controls="profile7"
                                  aria-selected="false"
                                >
                                  What is the COVID-19 virus?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="contact7-tab"
                                  data-toggle="tab"
                                  href="#contact7"
                                  role="tab"
                                  aria-controls="contact7"
                                  aria-selected="false"
                                >
                                  What is the difference between COVID-19 and
                                  the flu?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="four7-tab"
                                  data-toggle="tab"
                                  href="#four7"
                                  role="tab"
                                  aria-controls="four7"
                                  aria-selected="false"
                                >
                                  How is the virus spread?
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="five7-tab"
                                  data-toggle="tab"
                                  href="#five7"
                                  role="tab"
                                  aria-controls="five7"
                                  aria-selected="false"
                                >
                                  What are the symptoms?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tab-content answer_details" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h4>What are coronaviruses?</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <h4>What is the COVID-19 virus?</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu?
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four"
                      role="tabpanel"
                      aria-labelledby="four-tab"
                    >
                      <h4>How is the virus spread?</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five"
                      role="tabpanel"
                      aria-labelledby="five-tab"
                    >
                      <h4>What are the symptoms?</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home2"
                      role="tabpanel"
                      aria-labelledby="home2-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile2"
                      role="tabpanel"
                      aria-labelledby="profile2-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact2"
                      role="tabpanel"
                      aria-labelledby="contact2-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four2"
                      role="tabpanel"
                      aria-labelledby="four2-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five2"
                      role="tabpanel"
                      aria-labelledby="five2-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home3"
                      role="tabpanel"
                      aria-labelledby="home3-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile3"
                      role="tabpanel"
                      aria-labelledby="profile3-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact3"
                      role="tabpanel"
                      aria-labelledby="contact3-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four3"
                      role="tabpanel"
                      aria-labelledby="four3-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five3"
                      role="tabpanel"
                      aria-labelledby="five3-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home4"
                      role="tabpanel"
                      aria-labelledby="home4-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile4"
                      role="tabpanel"
                      aria-labelledby="profile4-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact4"
                      role="tabpanel"
                      aria-labelledby="contact4-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four4"
                      role="tabpanel"
                      aria-labelledby="four4-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five4"
                      role="tabpanel"
                      aria-labelledby="five4-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home5"
                      role="tabpanel"
                      aria-labelledby="home5-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile5"
                      role="tabpanel"
                      aria-labelledby="profile5-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact5"
                      role="tabpanel"
                      aria-labelledby="contact5-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four5"
                      role="tabpanel"
                      aria-labelledby="four5-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five5"
                      role="tabpanel"
                      aria-labelledby="five5-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home6"
                      role="tabpanel"
                      aria-labelledby="home6-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile6"
                      role="tabpanel"
                      aria-labelledby="profile6-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact6"
                      role="tabpanel"
                      aria-labelledby="contact6-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four6"
                      role="tabpanel"
                      aria-labelledby="four6-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five6"
                      role="tabpanel"
                      aria-labelledby="five6-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home7"
                      role="tabpanel"
                      aria-labelledby="home7-tab"
                    >
                      <h4>What are coronaviruses? 1</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile7"
                      role="tabpanel"
                      aria-labelledby="profile7-tab"
                    >
                      <h4>What is the COVID-19 virus? 2</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact7"
                      role="tabpanel"
                      aria-labelledby="contact7-tab"
                    >
                      <h4>
                        What is the difference between COVID-19 and the flu? 3
                      </h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="four7"
                      role="tabpanel"
                      aria-labelledby="four7-tab"
                    >
                      <h4>How is the virus spread? 4</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="five7"
                      role="tabpanel"
                      aria-labelledby="five7-tab"
                    >
                      <h4>What are the symptoms? 5</h4>
                      <p>
                        The first symptoms of COVID-19 and influenza (flu)
                        infections are often very similar. They both cause fever
                        and similar respiratory symptoms, which can then range
                        from mild through to severe disease, and sometimes can
                        be fatal.
                      </p>
                      <p>
                        Both viruses are also transmitted in the same way, by
                        coughing or sneezing, or by contact with hands, surfaces
                        or objects contaminated with the virus. As a result, the
                        same public health measures, such as hand hygiene (hand
                        washing), good respiratory etiquette (coughing into your
                        elbow or into a tissue and immediately disposing of the
                        tissue) and good household cleaning are important
                        actions to prevent both infections.
                      </p>
                      <p>
                        The speed of transmission is an important difference
                        between the two viruses. Influenza typically has a
                        shorter incubation period (the time from infection to
                        appearance of symptoms) than COVID-19. This means that
                        influenza can spread faster than COVID-19.
                      </p>
                      <p>
                        While the range of symptoms for the two viruses is
                        similar, the fraction with severe disease appears to be
                        higher for COVID-19. While most people have mild
                        symptoms, approximately 15% of people have severe
                        infections and 5% require intensive care in a hospital
                        ICU. The proportions of severe and critical COVID-19
                        infections are higher than for influenza infections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home_latest_blog_area">
            <div className="container">
              <div className="main_title text-center">
                <h5>Latest Blog Posts</h5>
                <h2>Recent from Updates</h2>
                <p>
                  Find out updates you need to know about preventing, isolating
                  and treating coronavirus and COVID-19.
                </p>
              </div>
              <div className="row l_blog_inner">
                <div className="col-lg-8">
                  <div className="big_l_blog_item">
                    <div className="l_blog_img">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/latest-blog/l-blog.jpg"
                        alt=""
                      />
                    </div>
                    <div className="l_blog_text">
                      <div className="date">
                        <a href="#">
                          <i className="linearicons-calendar-full" /> Apr 12,
                          2020
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
                            <i className="linearicons-radio-button" /> 4 min
                            read
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
                <div className="col-lg-4">
                  <div className="small_l_blog_item">
                    <div className="l_blog_img">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/latest-blog/l-blog-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="l_blog_text">
                      <div className="date">
                        <a href="#">
                          <i className="linearicons-calendar-full" /> Apr 11,
                          2020
                        </a>
                        <a href="#">
                          <i className="linearicons-bubbles" /> 39
                        </a>
                      </div>
                      <a href="#">
                        <h3>What is an underlying health condition?</h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="small_l_blog_item">
                    <div className="l_blog_img">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/latest-blog/l-blog-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="l_blog_text">
                      <div className="date">
                        <a href="#">
                          <i className="linearicons-calendar-full" /> Apr 11,
                          2020
                        </a>
                        <a href="#">
                          <i className="linearicons-bubbles" /> 39
                        </a>
                      </div>
                      <a href="#">
                        <h3>What is an underlying health condition?</h3>
                      </a>
                      <a className="text_btn" href="#">
                        Read more <i className="linearicons-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="client_logo_area">
            <div className="container">
              <div className="client_slider">
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-1.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-2.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-3.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-4.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-5.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="assets/images/client-logo/client-logo-6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="subscribe_area apps_craft_animation">
            <ul className="nav">
              <li>
                <img
                  className="layer layer2"
                  data-depth="0.5"
                  src="assets/images/icon/subs-1.png"
                  alt=""
                />
              </li>
              <li>
                <img src="assets/images/icon/subs-2.png" alt="" />
              </li>
              <li>
                <img src="assets/images/icon/subs-3.png" alt="" />
              </li>
            </ul>
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
                    aria-describedby="button-addon3"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon3"
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
    </div>
  );
}

export default Home;
