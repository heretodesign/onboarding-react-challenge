import React from 'react'
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css'

const baseURL = "https://on5os8gmcj.execute-api.ap-southeast-1.amazonaws.com/stage/v1/projects"

class EditPage extends React.Component {
  constructor(props) {
    super(props);
     this.title = React.createRef();
    this.state = {
      id: '',
      title: '',
      status: '',
      description: '',
      company_id: '',
      company_type: '',
      start_date: '',
      project_manager_id: '',
      project_manager_type: '',
      end_date: '',
      type: '',
      priority: ''
    }
  }

  componentDidMount () {
    this.getProjectDetails();
  }

  getProjectDetails() {
    let projectId = this.props.match.params.id;
    axios.get(`https://on5os8gmcj.execute-api.ap-southeast-1.amazonaws.com/stage/v1/projects/${projectId}`)
    .then(result => {
      console.log(result.data.attributes.title);
      this.title = result.data.attributes.title;
      console.log(this.title)
      this.setState({
        data: result.data,
        isLoading: false,
      })
    }).catch(e => {
      console.log(e);
    })
  }
  
  handleChange = event => {
    // console.log([event.target.name],[event.target.value]);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {
       "id": this.state.id,
       "type":"projects",
       "attributes":{
         "status": this.state.status,
         "priority": this.state.priority,
         "id": this.state.id,
         "title": this.state.title,
         "project description": this.state["project description"],
         "start_date": this.state.start_date,
         "end_date": this.state.end_date
       },
       "relationships":{
         "company": {
           "data": {
             "id": this.state.company_id,
             "type": this.state.company_type
           }
         },
         "project-manager": {
           "data": {
             "id": this.state.project_manager_id,
             "type": this.state.project_manager_type
           }
         }
       }
     }
    console.log({data});
    axios.patch(baseURL+this.props.match.params.id,data)
      .then(response => {
        console.log(response.data)
        console.log('Item successfully updated')
        this.setState({
          id: '',
          title: '',
          status: '',
          description: '',
          company_id: '',
          company_type: '',
          start_date: '',
          project_manager_id: '',
          project_manager_type: '',
          end_date: '',
          type: '',
          priority: ''
        })
      })
      .catch(err => console.log(err))

      // Redirect to ListPage
      this.props.history.push('/')
    }


  render(){
    const {isLoading, data } = this.state;
    return (
      <>
       <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
              <div className="firstsection">
                  <div className="content" id="todoForm">
                    <form id="todo-form" onSubmit={this.handleSubmit}>
                        <div className="content">
                          <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Attributes Field</p>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="id" value={this.state.id} placeholder="Add ID" ref="id" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="title"  placeholder="Add Title" value={this.state.title} ref="title"  onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="status" value={this.state.status} ref="status" value={this.state.status} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="project description" value={this.state["project description"]} ref="project description" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="start_date" value={this.state.start_date} ref="start_date" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                              <input className="input is-medium" type="text" name="end_date" value={this.state.end_date} ref="end_date" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="priority" value={this.state.priority} ref="priority" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="type" value={this.state.type} ref="type" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <br />
                          <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Project Manager Field </p>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="project_manager_id" value={this.state.project_manager_id} ref="project_manager_id" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                              <input className="input is-medium" type="text" name="project_manager_type" value={this.state.project_manager_type} ref="project_manager_type" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <br />
                          <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Company Field</p>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="company_id" value={this.state.company_id} ref="company_id" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="company_type" value={this.state.company_type} ref="company_type" onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Update Item</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                  </div>
               </div>
          </div>
        </section>
      </>
    );
  }
}

export default EditPage;
