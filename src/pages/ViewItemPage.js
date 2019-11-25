import React from 'react'
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ViewItemPage extends React.Component {
  state = {
    content: {},
    isLoading: true
  }

  async componentDidMount() {
    await this.viewProjectDetails();
  }

  viewProjectDetails() {
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
    if (this.state.isLoading) 
    return 'Loading...'
    return (
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large">
                  <div className="firstsection">
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-10 is-offset-1">
                          <div className="columns is-3-desktop">
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> ID_Type: {this.state.content.id_type}</p>
                            </div>
                            <div className="column has-background-white">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> ID: {this.state.content.id}</p>
                            </div>
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Title: {this.state.content.attributes.title}</p>
                            </div>
                          </div>
                          <br />
                          <div className="columns">
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Status: {this.state.content.attributes.status}</p>
                            </div>
                            <div className="column has-background-white">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Description: {this.state.content.attributes["project description"]}</p>
                            </div>
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Priority: {this.state.content.attributes.priority}</p>
                            </div>
                          </div>
                          <br />
                          <div className="columns">
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Start date: {this.state.content.attributes.initial_state}</p>
                            </div>
                            <div className="column has-background-white">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Company ID: {this.state.content.relationships.company.data.id}</p>
                            </div>
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Company Name: {this.state.content.relationships.company.data.type}</p>
                            </div>
                          </div>
                          <br />
                          <div className="columns">
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Created By: {this.state.content.attributes.title}</p>
                            </div>
                            <div className="column has-background-white">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Updated By: {this.state.content.attributes.title}</p>
                            </div>
                            <div className="column has-background-white-ter">
                              <p className="subtitle is-5 has-text-black" id="viewPara"> Project Manager: {this.state.content.relationships["project-manager"].data.type}</p>
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
