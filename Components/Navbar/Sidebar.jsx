"use client"

import { GiBrightExplosion } from "react-icons/gi";
import duaDatas from "../data.json"
import { useContext } from "react";
import { AuthContex } from "../../context.jsx/AuthStorage";

const Sidebar = () => {

    // const { setSelectDuah } = useContext(AuthContex)


    return (

        <div className="text-white px-2 ml-4 py-4 z-0 border-white ">
            <ul className="space-y-2 text-sm">
                {/* {
                    duaDatas?.map((data, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary font-semibold" ><GiBrightExplosion className="" /> <button onClick={() => setSelectDuah(data.title)} >{data.title}</button> </li>
                    ))
                } */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ad ducimus odit, illo veritatis harum ipsum architecto nobis rerum commodi reiciendis modi, tempora consequuntur ab unde impedit beata</p>
            </ul>
        </div>

    );
};

export default Sidebar;