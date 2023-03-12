import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from "./Main";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";



function App() {
  return (<div>
<div>

<h1 className="label"><span className="ru">RU</span>STOO<span className="ls">LS</span></h1>
<h2 className="labelOne">СтройМаркет</h2>
</div>
<Router>
  <nav>
    <Link to="/" className="link first">Категории</Link>
    <Link to="/aboutUs" className="link">О нас</Link>
    <Link to="/contacts" className="link">Наши магазины</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/aboutUs" element={<AboutUs/>} />
    <Route path="/contacts" element={<Contacts/>} />
  </Routes>
  </Router>
  </div>
  );
}

export default App;
