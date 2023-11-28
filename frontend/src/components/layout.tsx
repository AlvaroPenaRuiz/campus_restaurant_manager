import Admin from "./admin"
import Book from "./book"
import Food from "./food"
import LandingPage from "./landingPage"
import Manage from "./manage"
import Restaurants from "./restaurants"
import TodaysMeal from "./todayMeal"

import { BrowserRouter, Routes, Route } from "react-router-dom"


const Layout = () => {

    return (
      <>
        <nav className="mainNav">
            <div className="mainNavLeft">
                <button><a href="/restaurants">Restaurants</a></button>
                <button><a href="/food">Food</a></button>
                <button><a href="/todaysmeal">Today's meal</a></button>
                <button><a href="/book">Book</a></button>
                <button><a href="/manage">Manage</a></button>
                <button><a href="/admin">Admin</a></button>

            </div>
            <div className="mainNavCenter">
                <a href="/"><span>LOGO AQUI</span></a>
            </div>
            <div className="mainNavRight">
                <button>ICONO LOGIN AQUI</button>
            </div>
        </nav>
        
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" Component={Admin} />
                    <Route path="/book" Component={Book} />
                    <Route path="/food" Component={Food} />
                    <Route path="/manage" Component={Manage} />
                    <Route path="/restaurants" Component={Restaurants} />
                    <Route path="/todaysmeal" Component={TodaysMeal} />
                    <Route path="/" Component={LandingPage} />
                </Routes>
            </BrowserRouter>
        </div>
        
        <footer></footer>
      </>
    )
  }
  
  export default Layout
  
