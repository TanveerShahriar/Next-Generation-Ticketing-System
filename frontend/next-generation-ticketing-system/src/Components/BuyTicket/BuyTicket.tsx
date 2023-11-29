import React, {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ScheduleCard from "../../Entity/CustomEntity/ScheduleCard";
import TwoDistrict from "../../Entity/CustomEntity/TwoDistrict";
import {UserToken} from "../../Token/UserToken";
import ScheduleCardService from "../../Service/ScheduleCardService";

function BuyTicket() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jsonString = searchParams.get('data') || '';
    const [scheduleCard, setScheduleCard] = useState<ScheduleCard>();


    const { authorised, userId, userType } = useContext(UserToken);
    let navigate = useNavigate();
    useEffect(() => {
        if (authorised === "false") {
            navigate("/login");
        }
    }, [authorised]);

    useEffect(() => {
        if (jsonString === '') {
            navigate("/home");
            return;
        }
        const data = JSON.parse(decodeURIComponent(jsonString));
        const scheduleId: number = data.scheduleId;
        const twoDistrict: TwoDistrict = data.twoDistrict;
        ScheduleCardService.getScheduleCard(scheduleId).then((res) => {
            setScheduleCard(res.data);
        })

    }, [jsonString]);
    return (
        <div>

        </div>
    );
}

export default BuyTicket;
