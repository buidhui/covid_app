import React from "react";
function SingleBlog(props) {
  return (
    <div>
      <div className="body_wrapper">
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
        <section className="single_blog_img">
          <div className="container">
            <div className="single_blog_text">
              <a className="tag" href="#">
                Quarantine
              </a>
              <h2>How to treat COVID-19 coronavirus at home?</h2>
              <ul className="nav">
                <li>
                  <a href="#">
                    <i className="linearicons-calendar-full" />
                    Apr 18, 2020{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="linearicons-bubbles" />
                    22
                  </a>
                </li>
                <li>
                  <a href="#">by Sheryl Smith</a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="linearicons-radio-button"
                      style={{ color: "#01cfbe" }}
                    />
                    4 min read
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="single_blog_area">
          <div className="container">
            <div className="row single_blog_inner">
              <div className="col-lg-9">
                <div className="single_blog_text_inner">
                  <div className="single_first_text">
                    <h6>
                      Medical experts around the world are working around the
                      clock to develop a vaccine for COVID-19 as it continues to
                      spread around the globe. But how are vaccines made and
                      when are we likely to have one for coronavirus? We all
                      know that vaccines exist for other viruses, like flu, but
                      COVID-19 is a new illness that experts haven't seen
                      before.
                    </h6>
                    <div className="media">
                      <div className="d-flex">
                        <span>D</span>
                      </div>
                      <div className="media-body">
                        <p>
                          r Diana Gall of Doctor 4 U, and Mr Parvinder Sagoo,
                          pharmacist and clinical advisor at Vaxxy, explain how
                          vaccines are made, how coronavirus is being mapped and
                          when we will see a vaccine for Coronavirus COVID-19.
                        </p>
                      </div>
                    </div>
                    <p>
                      A huge amount of misinformation about vaccines is often
                      shared on social media, causing unnecessary concern around
                      their safety. Myths about vaccines causing autism or
                      containing heavy metals that can poison the body are
                      scientifically unfounded. Vaccines are safe and the best
                      way we can protect the population from disease. That's why
                      the creation of a coronavirus vaccine is so important to
                      control the pandemic.
                    </p>
                  </div>
                  <div className="secand_part">
                    <h4>How are vaccines made?</h4>
                    <p>
                      The most common way to make a vaccine involves using the
                      virus antigen itself, Dr Gall explains. "In any vaccine,
                      the strain of virus that needs an immunisation must be
                      identified before anything can be done. However, once the
                      strain is identified, the antigen is isolated and either
                      weakened or made inactive through a chemical process," she
                    </p>
                    <h5>
                      Virus proteins that are used to create vaccines are
                      sometimes grown in cells that come from chicken embryos,
                      or alternatively, they can be grown in a bioreactor like a
                      Petri dish.
                    </h5>
                    <p>
                      When a virus is weakened or inactive, it can't reproduce
                      in order to cause illness, but the body's immune system
                      can still create antibodies to fight it off. That way, if
                      you do come into contact with an active form of the virus,
                      your body should be equipped to fight it before it makes
                      you ill.
                    </p>
                  </div>
                  <div className="secand_part">
                    <h4>Vaccines in an outbreak</h4>
                    <p>
                      During unprecedented times, like the current coronavirus
                      outbreak, vaccines must still go through the same process,
                      but because the demand is higher a fast-tracked process is
                      usually possible.
                    </p>
                    <p>
                      "Right now, health professionals around the globe are
                      racing against the clock to get a vaccine for this virus.
                      However, the issue is that creating a vaccine takes time.
                      However, the fact that all efforts from health
                      professionals around the globe will be focused on getting
                      a vaccine could quicken the process," Mr Sagoo says.
                    </p>
                    <p>
                      But in order to do this, scientists need to identify the
                      exact strain of the virus causing the pandemic.
                    </p>
                    <p>
                      "Before any vaccine can be produced, the exact strain
                      causing the epidemic or pandemic must be identified and
                      isolated, as with any other vaccine production," Dr Gall
                      explains.
                    </p>
                    <img
                      className="img-fluid"
                      src="assets/images/blog/single-blog-1.jpg"
                      alt=""
                    />
                    <p className="source">Source: The Guardian</p>
                    <p>
                      "Unfortunately, even in cases where an immunisation is
                      desperately needed, it can take a long time to create one,
                      and certain processes can only be accelerated so much
                      before safety is compromised.
                    </p>
                    <p>
                      "Any vaccine, including those made for a mass outbreak,
                      are produced in the same ways. However, Moderna, the
                      company behind one of the current vaccines being trialled
                      for COVID-19, uses mRNA technology - a faster method than
                      traditional vaccines."
                    </p>
                    <p>
                      Messenger RNA (mRNA) is a molecule found in cells which
                      carries DNA codes from the nucleus to the cytoplasm, where
                      a process called protein synthesis is carried out.
                    </p>
                    <p>
                      "The DNA sequence of the virus is transcribed into mRNA,
                      meaning that the actual antigen of the virus itself isn't
                      included in the vaccine,. Despite that, it still contains
                      everything that the body needs to create specific
                      antibodies to fight off the virus."
                    </p>
                  </div>
                  <div className="single_blog_bottom">
                    <div className="row m-0 justify-content-between">
                      <div className="left">
                        <ul className="nav">
                          <li>
                            <a href="#">vaccine</a>
                          </li>
                          <li>
                            <a href="#">medicine</a>
                          </li>
                          <li>
                            <a href="#">coronavirus</a>
                          </li>
                        </ul>
                      </div>
                      <div className="right">
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
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-envelope-open-text" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="post_navigation row">
                    <div className="col-6">
                      <a href="#">
                        <i className="linearicons-arrow-left" /> Previous post
                      </a>
                      <h4>What can I do under the new rules?</h4>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#">
                        Next post <i className="linearicons-arrow-right" />
                      </a>
                      <h4>Are you washing your hands properly?</h4>
                    </div>
                  </div>
                  <div className="post_author">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          className="rounded-circle"
                          src="assets/images/author.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Sheryl Smith</h4>
                        <h6>Pharmaceutical expert</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ullam corporis suscipit laboriosam, nisi ut aliquid
                          exam.
                        </p>
                        <a className="post" href="#">
                          <i className="linearicons-papers" /> Articles
                        </a>
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
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-medium-m" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="s_comment_list">
                    <h3 className="cm_title_br">5 Comments</h3>
                    <div className="s_comment_list_inner">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src="assets/images/comment/comment-1.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <a href="#">
                            <h4>Rebecca Sterling</h4>
                          </a>
                          <p>
                            Similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et
                            harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat.
                          </p>
                          <h6>
                            <i className="linearicons-clock3" /> 3 hours ago
                          </h6>
                          <a className="text_btn" href="#">
                            Reply <i className="linearicons-arrow-right" />
                          </a>
                          <div className="media">
                            <div className="d-flex">
                              <img
                                className="rounded-circle"
                                src="assets/images/comment/comment-2.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h4>Robert Kane</h4>
                              </a>
                              <p>
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident.
                              </p>
                              <h6>
                                <i className="linearicons-clock3" /> 22 mins ago
                              </h6>
                              <a className="text_btn" href="#">
                                Reply
                                <i className="linearicons-arrow-right" />
                              </a>
                              <div className="media">
                                <div className="d-flex">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/comment/comment-3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>Liu Jackson</h4>
                                  </a>
                                  <p>
                                    Similique sunt in culpa qui officia deserunt
                                    mollitia animi...
                                  </p>
                                  <h6>
                                    <i className="linearicons-clock3" /> 8 mins
                                    ago
                                  </h6>
                                  <a className="text_btn" href="#">
                                    Reply{" "}
                                    <i className="linearicons-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src="assets/images/comment/comment-4.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <a href="#">
                            <h4>Ian Gorkovszkij</h4>
                          </a>
                          <p>
                            Harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit. Temporibus
                            autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates
                            repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut
                            reiciendis voluptatibus.
                          </p>
                          <h6>
                            <i className="linearicons-clock3" /> 1 day ago
                          </h6>
                          <a className="text_btn" href="#">
                            Reply <i className="linearicons-arrow-right" />
                          </a>
                          <div className="media">
                            <div className="d-flex">
                              <img
                                className="rounded-circle"
                                src="assets/images/comment/comment-5.png"
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <a href="#">
                                <h4>Naomi Hill</h4>
                              </a>
                              <p>
                                Nam libero tempore, cum soluta nobis est
                                eligendi optio...
                              </p>
                              <h6>
                                <i className="linearicons-clock3" /> 3 hours ago
                              </h6>
                              <a className="text_btn" href="#">
                                Reply
                                <i className="linearicons-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment_box">
                    <h3 className="cm_title_br">Leave your reply</h3>
                    <form
                      className="row contact_us_form appoinment_form"
                      action="http://paul-themes.com/html/covid-19/contact_process.php"
                      id="contactForm"
                      noValidate="novalidate"
                    >
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder
                          />
                          <label>
                            <i className="linearicons-user" />
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder
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
                            id="subject"
                            name="subject"
                            placeholder
                          />
                          <label>
                            <i className="linearicons-document" />
                            Subject
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
                              id="policy"
                              name="check"
                            />
                            <label className="l_text" htmlFor="policy">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                          <button type="submit" className="green_btn">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right_sidebar">
                  <aside className="right_widget ct_widget">
                    <div className="r_wd_title">
                      <h3>Categories</h3>
                    </div>
                    <ul className="nav flex-column">
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Political News
                          <span>(17)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Medicine
                          <span>(29)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Economic Effects
                          <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Prevention
                          <span>(33)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Education
                          <span>(27)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Quarantine
                          <span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Health <span>(18)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-arrow-right" />
                          Travel <span>(5)</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="right_widget subs_widget">
                    <img src="assets/images/subscribe-widget-bg.jpg" alt="" />
                    <div className="subs_text">
                      <i className="linearicons-envelope-open" />
                      <h4>Stay updated</h4>
                      <p>Join our subscribers list to get latest news</p>
                      <a className="subs_btn" href="#">
                        Subscribe
                      </a>
                    </div>
                  </aside>
                  <aside className="right_widget post_widget">
                    <div className="r_wd_title">
                      <h3>Trending Posts</h3>
                    </div>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/blog/tranding-post/post-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>What is shielding and who needs it?</h4>
                      </div>
                    </div>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/blog/tranding-post/post-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>
                          What to do if you need to see a GP or get medication?
                        </h4>
                      </div>
                    </div>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/images/blog/tranding-post/post-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Do you need to disinfect your home?</h4>
                      </div>
                    </div>
                  </aside>
                  <aside className="right_widget tag_widget">
                    <div className="r_wd_title">
                      <h3>Popular Tags</h3>
                    </div>
                    <ul className="nav">
                      <li>
                        <a href="#">vaccine</a>
                      </li>
                      <li>
                        <a href="#">coronavirus</a>
                      </li>
                      <li>
                        <a href="#">covid</a>
                      </li>
                      <li>
                        <a href="#">sars ncov</a>
                      </li>
                      <li>
                        <a href="#">elderly</a>
                      </li>
                      <li>
                        <a href="#">senior</a>
                      </li>
                      <li>
                        <a href="#">pregnancy</a>
                      </li>
                      <li>
                        <a href="#">economical</a>
                      </li>
                      <li>
                        <a href="#">c19</a>
                      </li>
                      <li>
                        <a href="#">stayathome</a>
                      </li>
                      <li>
                        <a href="#">school</a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="right_widget wash_widget">
                    <h6>Hand washing process</h6>
                    <h3>How to wash your hands properly</h3>
                    <p>
                      Are you washing your hands properly? Most of us know how
                      important it is to practise good hand hygiene. But just
                      because you're washing your hands often, doesn't mean that
                      you're washing them well.
                    </p>
                    <a className="text_btn" href="#">
                      View more <i className="linearicons-arrow-right" />
                    </a>
                  </aside>
                  <aside className="right_widget archive_widget ct_widget">
                    <div className="r_wd_title">
                      <h3>Archive</h3>
                    </div>
                    <ul className="nav flex-column">
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Apr 2020
                          <span>(49)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Marc 2020
                          <span>(40)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Feb 2020
                          <span>(32)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Jan 2020
                          <span>(26)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Dec 2019
                          <span>(7)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Nov 2019
                          <span>(0)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Oct 2019
                          <span>(0)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="linearicons-calendar-text" />
                          Sept 2019
                          <span>(0)</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related_posts_area">
          <div className="container">
            <div className="main_title text-center">
              <h5>Related posts</h5>
              <h2>You may also like</h2>
            </div>
            <div className="row related_post_inner">
              <div className="col-lg-4 col-md-6">
                <div className="small_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/related-post/post-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 11, 2020
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
              <div className="col-lg-4 col-md-6">
                <div className="small_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/related-post/post-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 11, 2020
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
              <div className="col-lg-4 col-md-6">
                <div className="small_l_blog_item">
                  <div className="l_blog_img">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/related-post/post-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l_blog_text">
                    <div className="date">
                      <a href="#">
                        <i className="linearicons-calendar-full" /> Apr 11, 2020
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

export default SingleBlog;
