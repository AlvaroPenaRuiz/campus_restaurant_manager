import { useState } from "react"
import Layout from "./components/layout"
import { UserType } from "./types/User"
import { BrowserRouter } from "react-router-dom"
import Cookies from "js-cookie"

const App = () => {
  const userCookie = Cookies.get("user")
  const [user, setUser] = useState( userCookie ? JSON.parse(userCookie) as UserType : false)

  return (
    <>
    <BrowserRouter>
      <Layout user={user} setUser={setUser}/>
    </BrowserRouter>
    </>
  )
}

export default App
