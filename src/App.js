// import logo from './logo.svg';

import React,{ Component } from 'react';
import PageHeader from './components/PageHeader/index'
import PageList from './components/PageList'
import './App.css';
// import { Layout } from 'antd';

export default class App extends Component{
  render(){
    return( 
      <div>
        <PageHeader/>
        <PageList/>
      </div>

    )
  }
}

