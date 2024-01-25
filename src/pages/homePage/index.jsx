    import React, { useContext } from "react";
    import UserList from "../../components/userList";
    import UserInfo from "../../components/userInfo";
    import "../../styles/homePage.scss"
    import MyNavbar from "../../components/navbar";
    import { UserContext } from "../../context/userContext";

    const HomePage = () => {
        const {user}=useContext(UserContext)

        return (
                <div className="Container">
                    {user && <MyNavbar />}
                    <div className="wrapper"> 
                        <UserList className="on"/>
                        <UserInfo/>
                    </div>
                </div>
        )
    }

    export default HomePage;
