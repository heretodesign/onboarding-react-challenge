import { editProject, getProjectDetails, componentDidMount } from '../pages/EditPages'

// getProjectDetails
// step 1: call the getProjectDetails with data from the props 
// step 2: assert the data to be equal to the return object
test('should make a request to the backend server', () => {
  
})

// editProject
// step 1: call the editProject with updated data 
// step 2: assert the value of the return object
test('should send updated data to the backend server', () => {
  const getData = {
    data: {
      id: p22,
      title: 'New Project',
      description: 'this is a new project',
      status: 'New',
      priority: '1',
      start_date: '10/10/2019',
      company_id: 'p22',
      created_by: 'abel',
      updated_by: 'abel',
    }
  };
  const action = editProject(getData);
  expect(action).toEqual({
    type: 'editProject',
    updatedData: {
      ...getData,
      id: expect.any(String)
    }
  });
});

// lifecycle method
test('should make a request to the backend server', () => {
  
})

