// import logo from './logo.svg';
import "./App.css";
import BookListing from "./booklisting";
import RegisterPage from "./register";
import LoginPage from "./login";
import {BrowserRouter as Router , Route, Routes ,Link} from 'react-router-dom'
import CartPage from "./cart";
import Homepage from "./homepage";


function App() {

return(
  <>
  <Router>
    <Routes>
      <Route exact path="/login" element={ <LoginPage/> }/>
      <Route exact path="/register" element={ <RegisterPage /> }/>
      <Route exact path="/books" element={ <BookListing /> }/>
      <Route exact path="/cart" element={<CartPage/>}/>
      <Route exact path="/" element={<Homepage/>}/>
    </Routes>
  </Router>

  </>
)
}

export default App;
