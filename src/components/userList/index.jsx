import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/userList.scss"
import { UserContext } from "../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const UserList=()=>{
    const [userData,setUserData]=useState([])
    const [hoveredUser, setHoveredUser] = useState(null)
    const {user,setUser}=useContext(UserContext)
    const [selectedUser, setSelectedUser] = useState(null)

    const fetchApi=async()=>{
        try {
            const response=await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            const data=response.data.slice(10)
            if(!data){
                alert('Failed to fetch the data or No data Found')
            }else{
                setUserData(data)
                setUser(data[0])
                console.log(user)
            }
        } catch (error) {
            console.log("Failed to fetch the data",error)
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return(
            <div className="userContainer p-2">
                    {user && <h1>User List</h1>}
                    {userData.map((item, index) => (
                        <div className="d-flex justify-content-between align-items-center userCard p-1" onMouseEnter={() => setHoveredUser(item)} onMouseLeave={() => setHoveredUser(null)} key={index} onClick={() => {setUser(item)}}>
                        <div key={index} className="d-flex align-items-center gap-2 p-3">
                            <img src={item.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}  alt="User Avatar" className="circle"/>
                            <h5 >{item.profile.username}</h5>
                        </div>
                        {hoveredUser === item ? (
                            <div className="round p-2">
                                <div className="rounder d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faCaretRight} className="icon" />
                                </div>
                          </div>
                        ) : (
                            <FontAwesomeIcon icon={faPlus} />
                        )}
                        </div>
                    ))}
            </div>
    )
}

export default UserList
