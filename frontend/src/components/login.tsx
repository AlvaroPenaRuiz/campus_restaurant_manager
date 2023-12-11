import { ChangeEvent, useState } from "react"
import { UserType } from "../types/User"
import { postUserAuthentication } from "../services/user"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"

type Props = {
	setUser: React.Dispatch<React.SetStateAction<UserType | boolean>>
}

const Login = ({ setUser }: Props) => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const checkLogin = async () => {
		const result = await postUserAuthentication(username, password)
		const user = result.data
		if (Object.keys(user).length > 0) {
			setUser(user)
			Cookies.set("user", JSON.stringify(user))
			return user
		} else {
			setUser(false)
			Cookies.remove(user)
			return false
		}
	}

	// Handlers
	const handleUsername = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)
	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)
	const handleLogin = (event: React.MouseEvent) => {
		event.preventDefault()
		checkLogin().then((response) => {
			if (response) {
				navigate("/")
			} else {
				window.alert("Login unsuccesful!")
			}
		})
	}

	return (
		<>
			<div className="subbody">
				<h1>Login Page for Staff Members</h1>
				<div className="contentBlock">
					<div className="centeredText">
						<p>This login page is only for staff members. If you are one but do not have credentials please contact your direct supervisor to put you in contact with the Platform Administrator.</p>
					</div>
					<form id="loginForm">
						<div id="loginForm" className="formGroup">
							<div>
								<label>Username</label>
								<input type="text" onChange={handleUsername} />
							</div>
							<div>
								<label>Password</label>
								<input type="password" onChange={handlePassword} />
							</div>
						</div>
						<button className="formButton" onClick={handleLogin}>Login</button>
					</form>
				</div>
			</div>
		</>
	)
}


export default Login
