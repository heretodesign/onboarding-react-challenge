import React from 'react'
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const NavOptions = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                    <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">Item List</p>
                </div>
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-info is-fullwidth" id="noticeList">List of All Items</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/pages/new" className="button  is-info is-fullwidth">Add New Item</Link>

                          {/*<Link to="/pages/detailpage" className="button is-info is-fullwidth" id="noticeList">View Items</Link>*/}
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          {/*<Link to="/pages/new" className="button is-large is-info is-fullwidth">Add New Item</Link>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
        </div>
     </section>
    </>
  );
}

export default NavOptions;
