import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import NavOptions from './components/content/NavOptions'

const ListPage = lazy(() => import('./pages/ListPage'));
const EditPage = lazy(() => import('./pages/EditPage'));
const AddFormPage = lazy(() => import('./pages/AddFormPage'));
const ViewItemPage = lazy(() => import('./pages/ViewItemPage'));

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NavOptions />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ListPage} />
          <Route path="/pages/new" component={AddFormPage} />
          <Route path="/pages/editpage/:id" component={EditPage} />
          <Route path="/pages/viewitem/:id" component={ViewItemPage} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
