import { useState } from "react";

import './style.css';

import { Spiral as Hamburger } from 'hamburger-react';

import useWindowDimensions from "../../hooks/useWindowDimension";

import Sidebar from "../Sidebar";

const Navbar = () => {
    const { width } = useWindowDimensions();
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <h2>S<span>/</span>HEMMANN</h2>
            </div>
            <div className="navbar-navitems-container">
                <a className="navbar-navitems" href="#">Home</a>
                <a className="navbar-navitems" href="#">Sobre</a>
                <a className="navbar-navitems" href="#">Projetos</a>
                <a className="curriculum-button" target="_blank" href="/curriculum.pdf">
                    Curriculum
                </a>
            </div>
            {width <= 765 ? (
                <div style={{zIndex: 3}}>
                    <Hamburger toggled={sidebarOpen} onToggle={(toogled) => setSidebarOpen(toogled)} color="#4361ee" rounded label="Show menu"/>
                </div>
            ) : null}
            {width <= 765 ? (
            <Sidebar show={sidebarOpen} close={() => setSidebarOpen(!sidebarOpen)}/>
            ) : null}
        </div>
    );
}

export default Navbar;
