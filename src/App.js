//import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Rout, Route, Swi, Switch
 } from 'react-router-dom';
import Create from './Create';
import BolgDetails from './BlogDetails';
import NotFound from './NotFound';
import EditBlog from './EditBlog';

function App() {
//  const title ='Welcome to the new blog';
//  const likes = 50;
 // const person = {name:'selam',age:25,};
 // const link="http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className="content">
      <Switch>
        <Route exact path="/"> 
          <Home/>
          </Route>
          <Route path="/create"> 
          <Create/>
          </Route>
          <Route path="/blogs/:id"> 
          <BolgDetails/>
          </Route>
          <Route path="/edit/:id"> 
          <EditBlog/>
          </Route>
          <Route path="*"> 
          <NotFound/>
          </Route>
      </Switch>
    

     </div>
    </div>
    </Router>
  );
}

export default App; 
