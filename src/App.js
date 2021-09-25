//Import functionality
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';

//Import Views
import HomeView from './Views/HomeView';

function App() {
  return (
    <>
    <SideBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={HomeView}/>
        {/* <Route exact path = "/" component={HomeView}/> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
