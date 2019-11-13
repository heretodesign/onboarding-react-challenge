import React from 'react'
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css'

class EditPage extends React.Component {
  state = {
    id: '',
    title: '',
    status: '',
    "project description": '',
    company_id: '',
    company_type: '',
    start_date: '',
    project_manager_id: '',
    project_manager_type: '',
    end_date: '',
    type: '',
    priority: ''
  }

  handleChange = event => {
    // console.log([event.target.name],[event.target.value]);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  handleSubmit = event => {
    event.preventDefault()
    const url = "https://on5os8gmcj.execute-api.ap-southeast-1.amazonaws.com/stage/v1/projects"

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
    axios.patch(url+this.props.match.params.id,data)
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
                                <input className="input is-medium" type="text" value={this.state.id} placeholder="Add ID" value={this.state.id} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" placeholder="Add Title" value={this.state.title} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="status" value={this.state.status} placeholder="Add Status" value={this.state.status} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="project description" value={this.state["project description"]} placeholder="Add Project Description" value={this.state["project description"]} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="start_date" value={this.state.start_date} placeholder="Add Start Date" value={this.state.start_date} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                              <input className="input is-medium" type="text" name="end_date" value={this.state.end_date} placeholder="Add End Date" value={this.state.end_date} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="priority" value={this.state.priority} placeholder="Add Priority Level" value={this.state.priority} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="type" value={this.state.type} placeholder="Add Type" value={this.state.type} onChange={this.handleChange} />
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
                                <input className="input is-medium" type="text" name="project_manager_id" value={this.state.project_manager_id} placeholder="Add Project Manager Id" value={this.state.project_manager_id} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                              <input className="input is-medium" type="text" name="project_manager_type" value={this.state.project_manager_type} placeholder="Add Project Manager Type" value={this.state.project_manager_type} onChange={this.handleChange} />
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
                                <input className="input is-medium" type="text" name="company_id" value={this.state.company_id} placeholder="Add Company ID" value={this.state.company_id} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="field">
                              <div className="control">
                                <input className="input is-medium" type="text" name="company_type" value={this.state.company_type} placeholder="Add Company Type" value={this.state.company_type} onChange={this.handleChange} />
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
