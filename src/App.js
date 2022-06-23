import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import error  from  '../src/404.webp'

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

      {/* < img style={{width:"200px", height:"200px"}} src={error} alt='error message' /> */}
        {/* <News pageSize={6} country="in" category="sports"/> */}


         <Routes>

         <Route exact path="/" element={<News pageSize={6} country="in" category="general"/>}/>
          <Route exact path="/buisness" element={<News pageSize={6} country="in" category="buisness"/>}/>
          <Route exact path="/entertainment" element ={<News pageSize={6} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News  pageSize={6} country="in" category="health"/>}/>
          <Route exact path="/health" element={<News pageSize={6} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News  pageSize={6} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News  pageSize={6} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News pageSize={6} country="in" category="technology"/>}/>

          {/* default route  */}
          <Route path="*"  element={<img style={{marginLeft:"200px", marginTop:"200px", width:"500px", height:"500px"}} src={error} alt='error message' />}/>

          </Routes>
        </Router>
      </>
    )
  }
}


