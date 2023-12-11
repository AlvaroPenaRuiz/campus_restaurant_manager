import { useEffect, useState } from "react"
import { UserType } from "../types/User"
import { deleteUser, getUsers, postUser, putUser } from "../services/user"
import { getRestaurants } from "../services/restaurant"
import { RestaurantType } from "../types/Restaurant"

const Admin = () => {

    const [users, setUsers] = useState([] as UserType[])
    const [restaurants, setRestaurants] = useState([] as RestaurantType[])
    const [newUser, setNewUser] = useState(false)


    const handleSave = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        const elements = [...event.currentTarget.parentNode!.parentNode!.querySelectorAll("input, select")] as (HTMLInputElement | HTMLSelectElement)[]
        // @ts-ignore
        const [name, lastname, userId, username, password, email, restaurant_id, admin] = elements.map((e, i) => i === 7 ? e.checked : e.value)
        console.log(name, lastname, userId, username, password, email, Number(restaurant_id), admin)
        putUser(id, name, lastname, userId, username, password, email, Number(restaurant_id), admin)
    }

    const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const elements = [...event.currentTarget.parentNode!.parentNode!.querySelectorAll("input, select")] as (HTMLInputElement | HTMLSelectElement)[]
        // @ts-ignore
        const [name, lastname, userId, username, password, email, restaurant_id, admin] = elements.map((e, i) => i === 7 ? e.checked : e.value)
        if (name && lastname && userId && username && password && email) {
            postUser(name, lastname, userId, username, password, email, restaurant_id, admin).then((response) => {

                setUsers([...users, { ...response.data }])
                setNewUser(false)
            })
        } else {
            window.alert("Please, you must fill all the fields for create an user.")
            event.preventDefault()
        }

    }

    const handleDelete = (user_id: number) => {
        deleteUser(user_id)
        setUsers(users.filter(user => user.id !== user_id)!)

    }

    const fetchData = async () => {
        const resUsers: UserType[] = (await getUsers()).data
        const resRestaurants: RestaurantType[] = (await getRestaurants()).data
        return { resUsers: resUsers.sort((a, b) => a.id > b.id ? 1 : -1), resRestaurants }
    }

    useEffect(() => {
        fetchData().then((response) => {
            const { resUsers, resRestaurants } = response

            setRestaurants(resRestaurants)
            setUsers(resUsers)
        })


    }, [newUser])

    return (
        <>
            <div className="subbody centeredText">
                {users && restaurants ? <div>
                    <div>
                        <h1>Admin Page</h1>
                    </div>
                    <div>
                        <p>Here you can add, delete, update a user, assign it to a restaurant, restart the password and give admin privileges.</p>
                        <div className="tableContainer">
                            <table className="bigTable">
                                <thead>
                                    <tr><th>Name</th><th>Lastname</th><th>User Id</th><th>Username</th><th>Password</th><th>Email</th><th>Restaurant</th><th>Admin</th></tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => {
                                        return <tr key={index} id={`admin-user-${index}`}>
                                            <td><input type="text" defaultValue={user.name} /></td>
                                            <td><input type="text" defaultValue={user.lastname} /></td>
                                            <td><input type="text" defaultValue={user.user_id} /></td>
                                            <td><input type="text" defaultValue={user.username} /></td>
                                            <td><input type="password" /></td>
                                            <td><input type="text" defaultValue={user.email} /></td>
                                            <td><select defaultValue={user.restaurant_id || ""}>
                                                <option value="" >None</option>
                                                {restaurants.map((restaurant, restIndex) => {
                                                    return <option value={restaurant.id} key={restIndex}>{restaurant.name}</option>
                                                })}
                                            </select></td>
                                            <td><input type="checkbox" defaultChecked={user.admin ? true : false} /></td>
                                            <td><button onClick={(event) => handleSave(event, user.id)}><i className="fa-regular fa-floppy-disk"></i></button></td>
                                            <td><button onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash"></i></button></td>
                                        </tr>
                                    })}
                                    {newUser ? <tr id={`admin-newuser}`}>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="password" /></td>
                                        <td><input type="text" /></td>
                                        <td><select defaultValue="">
                                            <option value="" >None</option>
                                            {restaurants.map((restaurant, restIndex) => {
                                                return <option value={restaurant.id} key={restIndex}>{restaurant.name}</option>
                                            })}
                                        </select></td>
                                        <td><input type="checkbox" /></td>
                                        <td><button onClick={handleCreate}><i className="fa-regular fa-floppy-disk"></i></button></td>
                                        <td><button onClick={() => setNewUser(false)}><i className="fa-solid fa-xmark"></i></button></td>
                                    </tr> : <></>}
                                </tbody>
                            </table>
                        {!newUser ? <button className="formButton" onClick={() => setNewUser(true)}>New User</button> : <></>}
                        </div>
                    </div>
                </div> : <></>}
            </div>
        </>
    )
}

export default Admin
