import React from 'react'
import ReactDOM from 'react-dom/client'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Pokemon</h1>

          <h2>Contact</h2>

          <address>
            Bharat Chavhan | Maharashtra | 444506
            <br />
            <div className="btnFooter2">
              <a
                className="footer__btn"
                href="https://www.linkedin.com/in/bharat-chavhan-563a881ba"
              >
                Linkedin
              </a>
              <a
                className="footer__btn"
                href="https://github.com/iambharatchavhan"
              >
                github
              </a>
            </div>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Front-End</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">HTML & CSS</a>
              </li>

              <li>
                <a href="#">Javascript</a>
              </li>

              <li>
                <a href="#">ReactJS</a>
              </li>

              <li>
                <a href="#"></a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Back-End</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Node JS</a>
              </li>

              <li>
                <a href="#"></a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023 Pokemon App | All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> Bharat Chavhan
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export { Footer }
