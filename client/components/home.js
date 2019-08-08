import React from 'react'
// import {Link} from 'react-router-dom'
// import {Signup} from './signUp'
// import {AboutUs} from './'
// import BitcoinInfo from './BitcoinsInfo'
import Fade from 'react-reveal/Fade'

export default function Home() {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>How It Works</h1>
                  <p>
                    With LightText you can send Bitcoins by SMS. You have to
                    register with us and send money to someone registered. You
                    don't need Internet, just a phone number.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>Lightning Wallets ⚡</h1>
                  <p>
                    Unfairly cheap and fast transactions. LightText brings zero
                    configuration, ready to use, user friendly Lightning Network
                    Wallets for iOS and Android. Read more about our open
                    source.
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <p className="customer">- John Doe</p>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="showcase-left" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="showcase-right">
                <h1>Hands-free help from the Google Assistant</h1>
                <p>
                  Google Home voice-activated speaker.consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                </p>
              </div>
              <br />
              <a className="btn btn-default btn-lg showcase-btn">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="testimonial">
        <div className="container">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <p className="customer">- John Doe</p>
        </div>
      </section>
      <hr />
      <section id="showcase">
        <div className="container">
          <div className="row">
            <Fade left duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-left">
                  <h1>How It Works</h1>
                  <p>
                    With LightText you can send Bitcoins by SMS. You have to
                    register with us and send money to someone registered. You
                    don't need Internet, just a phone number.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="300px">
              <div className="col-md-6 col-sm-6">
                <div className="showcase-right">
                  <h1>Lightning Wallets ⚡</h1>
                  <p>
                    Unfairly cheap and fast transactions. LightText brings zero
                    configuration, ready to use, user friendly Lightning Network
                    Wallets for iOS and Android. Read more about our open
                    source.
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
