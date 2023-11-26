import React, {useContext, useEffect} from "react";
import {UserToken} from "../../Token/UserToken";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const {authorised, userId,userType} = useContext(UserToken);

    let navigate = useNavigate();
    useEffect(() => {
        if (authorised === "false") {
            navigate("/login");
        }
    }, [authorised]);

    return (
        <div>
            <p>This is homepage</p>
        </div>
    );
}

export default Homepage;
