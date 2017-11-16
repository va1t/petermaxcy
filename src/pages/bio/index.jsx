import React from 'react'

class Bio extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Skills</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i
                    className="devicon-html5-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i
                    className="devicon-css-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Angular.js"
                >
                  <i
                    className="devicon-angular-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="AWS"
                >
                  <i
                    className="devicon-firebase-plain-wordmark"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Education</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>put stuff here</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Bio
