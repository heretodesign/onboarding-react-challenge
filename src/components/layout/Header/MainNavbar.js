import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'


const MainNavbar = () => {

  return (
    <>
      <section className="hero is-primary is-medium">
        <div className="is-paddingless-horizontal topNav">
            <div className="container grid">
                <div className="firstsection">
                    <p className="subtitle is-6 has-text-white isdata">A handpicked, expertly managed workforce</p>
                 </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://www.supahands.com/">
                  {/*<img src={logo} className="nav-logo" width="200" height="150" alt="Supahands logo" />*/}
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <span>Solutions</span>
                  </a>
                  <a className="navbar-item">
                    <span>How it works</span>
                  </a>
                  <a className="navbar-item">
                    <span>Product suite</span>
                  </a>
                  <a className="navbar-item">
                    <span>Company</span>
                  </a>
                  <a className="navbar-item">
                    <strong>Contant Us</strong>
                  </a>
                  {/*<span className="navbar-item">
                  <a className="button is-info" id="navBtn">
                    Test now
                  </a>
                  </span>*/}
                </div>
              </div>
            </div>
          </nav>
        </div>

      </section>
    </>
  );
}

export default MainNavbar;
