import React from 'react'
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Flickr from '../Flickr-1.4s-200px.svg'

class ViewItemPage extends React.Component {
  state = {
    content: {},
    isLoading: true
  }

  componentDidMount () {
    axios.get(`https://on5os8gmcj.execute-api.ap-southeast-1.amazonaws.com/stage/v1/projects/${this.props.match.params.id}`)
    .then(result => {
      //console.log(result.data);
      this.setState({
        content: result.data,
        isLoading: false,
      })
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    if (!this.state.content) return 'Loading...'
    console.log(this.state.content);
    return (
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-10 is-offset-1">
                          <div className="columns">
                            <div className="column">
                                <p className="subtitle is-5 has-text-white" id="viewPara"> Id: {this.state.content.id}</p>
                            </div>
                            <div className="column">
                              <p className="subtitle is-5 has-text-white" id="viewPara"> Title: {this.state.content.title}</p>
                            </div>
                            <div className="column">
                              <p className="subtitle is-5 has-text-white" id="viewPara"> Status: {this.state.content.status}</p>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <p className="subtitle is-5 has-text-white" id="viewPara"> Description: {this.state.content["project description"]}</p>
                            </div>
                            <div className="column">
                            </div>
                            <div className="column">
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column">
                            </div>
                            <div className="column">
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <p className="subtitle is-5 has-text-white" id="viewPara"> Status</p>
                            </div>
                            <div className="column">
                            </div>
                            <div className="column">
                              Third column
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
          </section>
    )
  }
}

export default ViewItemPage;
