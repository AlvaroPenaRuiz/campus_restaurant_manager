import Admin from "./admin"
import Book from "./book"
import Food from "./food"
import LandingPage from "./landingPage"
import Manage from "./manage"
import Restaurant from "./restaurant"
import Restaurants from "./restaurants"
import TodaysMeal from "./todayMeal"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Login from "./login"
import { UserType } from "../types/User"
import Cookies from "js-cookie"
import logo from '../assets/logo.png'
import License from "./subcomponent/license"

type Props = {
    user: UserType | boolean,
    setUser: React.Dispatch<React.SetStateAction<UserType | boolean>>
}

const Layout = ({ user, setUser }: Props) => {

    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("user")
        setUser(false)
    }

    return (
        <>
            <nav className="mainNav">
                <div className="mainNavLeft">
                    <button className="mainNavButton" onClick={() => navigate('/restaurants')}>Restaurants</button>
                    <button className="mainNavButton" onClick={() => navigate('/food')}>Food</button>
                    <button className="mainNavButton" onClick={() => navigate('/todaysmeal')}>Today's meal</button>
                    <button className="mainNavButton" onClick={() => navigate('/book')}>Book</button>
                    {typeof (user) !== "boolean" && user.restaurant_id ? <button className="mainNavButton" onClick={() => navigate('/manage')}>Manage</button> : <></>}
                    {typeof (user) !== "boolean" && user.admin ? <button className="mainNavButton" onClick={() => navigate('/admin')}>Admin</button> : <></>}

                </div>
                <div className="mainNavCenter">
                    <img src={logo} className="navLogo" onClick={() => navigate("/")}></img>
                </div>
                <div className="mainNavRight">
                    {!user ? <button className="mainNavButton" onClick={() => navigate('/login')}>Login</button> : <></>}
                    {user ? <button className="mainNavButton" onClick={() => logout()}>Logout</button> : <></>}
                </div>
            </nav>

            <div>


                <Routes>
                    {typeof (user) !== "boolean" && user.admin ? <Route path="/admin" element={<Admin />} /> : <></>}
                    <Route path="/book" element={<Book amountOfDays={20} amountOfPeople={12} />} />
                    <Route path="/food" element={<Food />} />
                    {!user ? <Route path="/login" element={<Login setUser={setUser} />} /> : <></>}
                    {typeof (user) !== "boolean" && user.restaurant_id ? <Route path="/manage/*" element={<Manage user={user} />} /> : <></>}
                    <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/todaysmeal" element={<TodaysMeal />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>

            </div>

            <footer>
                <div><p>This is a Project for FP GS Desarrollo de Aplicaciones Web made by Álvaro Pena Ruiz for CIFP Carlos III. </p></div><div className="license"><License/></div>
            </footer>
        </>
    )
}

export default Layout

