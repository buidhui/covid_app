import React from "react";

function Tracking(props) {
  return (
    <div>
      <div className="body_wrapper">
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
      </div>
    </div>
  );
}

export default Tracking;
