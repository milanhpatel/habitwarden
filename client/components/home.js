import React from 'react'
// import {Link} from 'react-router-dom'
// import {Signup} from './signUp'
// import {AboutUs} from './'
// import BitcoinInfo from './BitcoinsInfo'
import Fade from 'react-reveal/Fade'
//import {Typewriter} from '../helper/typewriter'

const txtElement = document.querySelector('.txt-type')
const words = JSON.parse('["Developer", "Designer", "Creator"]')
const wait = 3000

export default function Home() {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>
                    Habit Warden is the simplest way to track and reinforce your
                    habits.
                  </h1>
                  {/* <h1>X:  
      <span className="txt-type" data-wait="3000" data-words='["Developer", "Designer", "Creator"]'></span>
    </h1> */}

                  {/*new TypeWriter(txtElement, words, wait)*/}
                  {/*<p> X </p>*/}
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  {/*<h1> X </h1>*/}
                  <p>
                    We've heard{' '}
                    <b>
                      friction of tracking is the biggest barrier to consistency
                    </b>.
                  </p>
                  <p>
                    And the{' '}
                    <b> biggest barrier to consistency is a lack of tracking</b>{' '}
                    the important things.
                  </p>
                  <p>
                    See the conundrum?{' '}
                    <b> Get on the right path in less than 3 minutes</b> below.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <hr />
      <section id="testimonial">
        <div className="container">
          <p>
            "We have two lives, and the second begins when we realize we only
            have one."
          </p>
          <p className="customer">- Confucius</p>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>Input habits.</h1>
                  <p>
                    - Sweat 5x weekly <br />
                    - Read 1 page daily <br />
                    - Cook 4 meals this week <br />
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>X</h1>
                  <p>gif placeholder.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>X</h1>
                  <p>gif placeholder.</p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>Tell us a why for each habit.</h1>
                  <p>
                    - Think for 30 seconds on WHY you want to build these habits{' '}
                    <br />
                    - Text us 1 (or more!) for each
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>Begin.</h1>
                  <p>
                    - AM check-in, PM check-out [5am / 9pm] <br />
                    - AM: Simply respond if you plan to accomplish each habit{' '}
                    <br />
                    - PM: Respond with if you accomplished each one <br />
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>X</h1>
                  <p>gif placeholder.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1 />
                  <p>
                    1.01<sup>365</sup> = 37.78 <br /> 0.99<sup>365</sup> = 0.026
                  </p>{' '}
                  <br />
                  <p>
                    <i>
                      We don't have you set far and away goals - we focus on
                      daily action, repeated mindlessly, until you achieve.
                    </i>
                  </p>{' '}
                  <br />
                  <p>Text Habit Warden, be 1% better every day.</p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>Never stop.</h1>
                  <p>
                    Habit Warden is powerful for three reasons:
                    <ol>
                      <li>
                        It feels satisfying to record your success in the
                        moment.
                      </li>
                      <li>
                        It creates a visual cue that can remind you to act.
                      </li>
                      <li>
                        It is motivating to see the progress you are making. You
                        don't want to break your streak.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <hr />
    </div>
  )
}
