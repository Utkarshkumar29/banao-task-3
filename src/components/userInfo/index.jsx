import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import "../../styles/userInfo.scss";
import Loader from "../loader";

const UserInfo = () => {
    const {user} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])

    if (!user) {
        return <Loader />
    }


    return (
        <div className="user-info">
            <h1 className="">User Information</h1>
            <img className="avatar" src={user.avatar} alt="User Avatar" />
            <h2>{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
            <p className="username">@{user.profile.username}</p>
            <p className="bio">{user.Bio}</p>
            <p className="job-title">{user.jobTitle}</p>
            <p className="email">{user.profile.email}</p>
            <p className="created-at">Joined on: {user.createdAt}</p>
        </div>
    )
}

export default UserInfo;
