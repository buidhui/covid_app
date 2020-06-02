import React from "react";

function HealthDiary(props) {
  return (
    <div>
      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_text">
            <h6 className="wow fadeInUp">Health Diary</h6>
            <h3 className="wow fadeInUp" data-wow-delay="0.2s">
              Declare Your Daily Routine
            </h3>
            <ul
              className="nav justify-content-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="contact.html">Health Diary</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact_area">
        <div className="container">
          <div className="contact_form_inner">
            <form
              className="row contact_us_form appoinment_form js-form"
              style={{ border: "3px solid #58547e", borderRadius: "10px" }}
            >
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
                  <label className="top_text">
                    <i className="linearicons-circle" />
                    Check the Temperature and Enter the Result
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
                  <label className="top_text">
                    <i className="linearicons-map" />
                    Places where you have gone.
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
                  <label className="top_text">
                    <i className="linearicons-telephone" />
                    Contacted with people that were infected, suspected or
                    diagnosed with COVID-19?
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="awesome">
                  <div className="form-group select_conversation_inner">
                    <h6>Individual Symptoms</h6>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="voice"
                        defaultValue="voice"
                      />
                      <label htmlFor="voice">Fever</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">Cough</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">Shortness of Breath</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">
                        Persistent Pain in the Chest
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="awesome">
                  <div className="form-group select_conversation_inner">
                    <h6>Washing hands regularly</h6>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="voice"
                        defaultValue="voice"
                      />
                      <label htmlFor="voice">Yes</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="awesome">
                  <div className="form-group select_conversation_inner">
                    <h6>Rate your health today</h6>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="voice"
                        defaultValue="voice"
                      />
                      <label htmlFor="voice">1</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">2</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">3</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">4</label>
                    </div>
                    <div className="select_conversation">
                      <input
                        type="radio"
                        name="conversation"
                        id="video"
                        defaultValue="video"
                      />
                      <label htmlFor="video">5</label>
                    </div>
                  </div>
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
                  <label className="top_text">
                    <i className="linearicons-pencil4" />
                    Additional Notes
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
                      I accept the <span>Infomations</span> and the
                      <span> Responsibility</span> what I have declared above.
                    </label>
                  </div>
                  <button type="submit" value="submit" className="green_btn">
                    Submit
                  </button>
                </div>
              </div>
              <div className="success-message">
                <i className="fa fa-check text-primary" /> Thank you!. Your
                declaration is successfully sent...
              </div>
              <div className="error-message">
                We're sorry, but something went wrong
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthDiary;
