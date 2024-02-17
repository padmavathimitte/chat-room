import {React} from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Register from './components/Register'


import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Chat" component={Chat} />
    </BrowserRouter>
  )
}

export default App;
