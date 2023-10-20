import { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

import "./appLayout.css";

const AppLayout = () => {
    const [isActive, setIsActive] = useState(true);
    const [title, setTitle] = useState('Title');

    return <div className="main">
        <Sidebar isActive={isActive} setIsActive={setIsActive} setTitle={setTitle} />
        <div className={`content ${isActive ? '' : 'inactive'}`}>
            <div className="header">{title}</div>
            <div className="outlet"><Outlet /></div>
        </div>
    </div>;
};

export default AppLayout;