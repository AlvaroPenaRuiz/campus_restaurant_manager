import Admin from "./admin"
import Book from "./book"
import Food from "./food"
import LandingPage from "./landingPage"
import Manage from "./manage"
import Restaurant from "./restaurant"
import Restaurants from "./restaurants"
import TodaysMeal from "./todayMeal"

import { BrowserRouter, Routes, Route } from "react-router-dom"


const Layout = () => {

    return (
      <>
        <nav className="mainNav">
            <div className="mainNavLeft">
                <a href="/restaurants"><button>Restaurants</button></a>
                <a href="/food"><button>Food</button></a>
                <a href="/todaysmeal"><button>Today's meal</button></a>
                <a href="/book"><button>Book</button></a>
                <a href="/manage"><button>Manage</button></a>
                <a href="/admin"><button>Admin</button></a>

            </div>
            <div className="mainNavCenter">
                <a href="/"><span>LOGO AQUI</span></a>
            </div>
            <div className="mainNavRight">
                <a href=""><button><i className="fa-solid fa-user"></i></button></a>
            </div>
        </nav>
        
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/book" element={<Book amountOfDays={20} amountOfPeople={12}/>} />
                    <Route path="/food" element={<Food/>} />
                    <Route path="/manage" element={<Manage/>} />
                    <Route path="/restaurant/:restaurantId" element={<Restaurant/>} />
                    <Route path="/restaurants" element={<Restaurants/>} />
                    <Route path="/todaysmeal" element={<TodaysMeal/>} />
                    <Route path="/" element={<LandingPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
        
        <footer></footer>
      </>
    )
  }
  
  export default Layout
  
