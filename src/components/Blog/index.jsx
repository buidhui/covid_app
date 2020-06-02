import React from "react";

function Blog(props) {
  return (
    <div>
      <div className="body_wrapper">
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
       </div>
    </div>
  );
}

export default Blog;
