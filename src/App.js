import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import Error  from  './components/Error'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (  
      <> <Router>
        <NavBar/>

         <Routes>
          <Route exact path="https://react-news-app-nu.vercel.app/" element={<News key="general" pageSize={9} country="in" category="general"/>}/>
          {/* <Route exact path="/buisness" element={<News key="buisness" pageSize={6} country="in" category="buisness"/>}/> */}
          <Route exact path="/entertainment" element ={<News  key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News  key="technology" pageSize={9} country="in" category="technology"/>}/>

          {/* default route  */}
          <Route path="*"  element={<Error/>}/> 

          </Routes>
        </Router>
      </>
    )
  }
}


