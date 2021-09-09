import './style.css';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Sidebar = ({show, close}) => {
    return (
        <>
            <Slide right when={show}>
                <div className="sidebar-navitems-container">
                    <a className="sidebar-navitems" href="#">Home</a>
                    <a className="sidebar-navitems" href="#">Sobre</a>
                    <a className="sidebar-navitems" href="#">Projetos</a>
                    <a className="curriculum-button-sidebar" target="_blank" href="/curriculum.pdf">
                        Curriculum
                    </a>
                </div>
            </Slide>
            <Fade right when={show}>
                <div className="sidebar-blur" onClick={close}></div>
            </Fade>
        </>

    );
};

export default Sidebar;