import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/Book/AddBook';
import Books from './components/Book/Books';
import Navbar from './components/NavBar/NavBar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/books' component={Books}/>
        <Route exact path='/addbook' component={AddBook}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
