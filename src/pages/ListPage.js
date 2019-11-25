import React from 'react'
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchInput: '',
      filterData: []
    }
  }

  componentDidMount () {
    axios.get('https://on5os8gmcj.execute-api.ap-southeast-1.amazonaws.com/stage/v1/projects')
    .then(response => {
      console.log(response.data[0].relationships["project-manager"].data.id);
      this.setState({
        projects: response.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  updateItem = (projectId) => {
    this.props.history.push(`/pages/editpage/${projectId}`)
  }

  viewItem = (projectId) => {
    this.props.history.push(`/pages/viewitem/${projectId}`)
  }

  render() {
    const { projects, searchInput } = this.state;
    // const filteredPM = projects.relationships["project-manager"].data.id.filter(pm => {
    //   return pm.project.relationships["project-manager"].data.id.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    // })
    const filteredPM = projects.filter(project => {
      console.log('abel' + projects);
      
      // return project.relationships["project-managers"].data.id === searchInput;
    })
      return (
        <div>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large notification">
                  <div className="firstsection">
                      <h1 className="title is-3">Att: list of all Projects</h1>
                      <div class="columns is-mobile">
                        <div class="column is-5 is-offset-7">
                          <div className="content">
                            <form id="addName-form" onSubmit={e => this.searchFilter(e)}>
                              <div className="columns" id="mainColumns">
                                <div className="column " id="mainCol">
                                  <div className="field">
                                    <div className="control">
                                      <input
                                        onChange={e => this.handleChange(e)}
                                        className="input is-info is-medium"
                                        type="text"
                                        name="searchInput"
                                        value={this.state.searchInput || ""}
                                        placeholder="..search by PM" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="columns">
                                <div className="column is-three-fifths is-offset-one-fifth">
                                  {
                                      filteredPM.map((item, index) =>
                                        <div className="is-size-5 has-text-left" id="empDiv" key={index}>
                                          {item.id} - {item.id_type} {item.attributes.status} {item.relationships["project-manager"].data.id}
                                        </div>)
                                    }
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="columns">
                          <div className="column" id="tablelisttask">
                            <table className="table is-mobile">
                              <thead className="has-background-black">
                                <tr>
                                  <th><abbr title="id" className="has-text-white is-3">Id</abbr></th>
                                  <th><abbr title="title" className="has-text-white">Title</abbr></th>
                                  <th><abbr title="status" className="has-text-white">Status</abbr></th>
                                  <th><abbr title="description" className="has-text-white">Description</abbr></th>
                                  <th><abbr title="type" className="has-text-white">Type</abbr></th>
                                  <th><abbr title="priority" className="has-text-white">Priority</abbr></th>
                                  <th><abbr title="start_date" className="has-text-white">Start Date</abbr></th>
                                  <th><abbr title="end_date" className="has-text-white">End Date</abbr></th>
                                  <th><abbr title="project_manager_id" className="has-text-white">Project Manager Id</abbr></th>
                                  <th><abbr title="project_manager_type" className="has-text-white">Project Manager Type</abbr></th>
                                  <th><abbr title="company_id" className="has-text-white">Company Id</abbr></th>
                                  <th><abbr title="company_type" className="has-text-white">Company Type</abbr></th>
                                  <th><abbr title="action" className="has-text-white">Action</abbr></th>
                                </tr>
                              </thead>
                              <tbody>
                                {projects.map((project) => (
                                  <tr className="key={project.id}">
                                    <td>{ project.id }</td>
                                    <td>{ project.attributes.title }</td>
                                    <td>{ project.attributes.status }</td>
                                    <td>{ project.attributes["project description"] }</td>
                                    <td>{ project.type }</td>
                                    <td>{ project.attributes.priority }</td>
                                    <td>{ project.attributes.start_date }</td>
                                    <td>{ project.attributes.end_date }</td>
                                    <td>{ project.relationships["project-manager"].data.id }</td>
                                    <td>{ project.relationships["project-manager"].data.type }</td>
                                    <td>{ project.id }</td>
                                    <td>{ project.type }</td>
                                    <td>
                                      <td><button onClick={() => {this.updateItem(`${project.id_type}${project.id}`)} } className="button is-danger">Edit Item</button></td>
                                      <td><button onClick={() => {this.viewItem(`${project.id_type}${project.id}`)} } className="button is-info">View Item</button></td>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                           </div>
                        </div>
                      </div>
                   </div>
              </div>
          </section>
        </div>
      )
  }
}

export default ListPage;
