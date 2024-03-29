"use client"

import { AuthContex } from "@/context.jsx/AuthStorage";
import { useContext } from "react";


const ContentDisplay = () => {

    const { selectDuah } = useContext(AuthContex)




    return (
        <div>
            <p>{selectDuah}</p>
        </div>
    );
};

export default ContentDisplay;