import React from "react";
import { useAppSelector } from "../app/hooks";

interface profileProps {}

const Profile: React.FC<profileProps> = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div style={{ background: "white" }}>
            <h2>profile {user.id}.</h2>
            <hr />
            <p>username: {user.username}</p>
            <p>password: {user.password}</p>
        </div>
    );
};

export default Profile;
