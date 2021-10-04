import './global.css';

// Components
import Navbar from "./components/Navbar";
import SocialLine from "./components/SocialLine";

// Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';

import ReactPageScroller from 'react-page-scroller';


function App() {
    return (
        <div className="App">
            <Navbar/>

            <ReactPageScroller >
                <Home/>
                <Sobre/>
            </ReactPageScroller>

            <SocialLine/>
        </div>
    );
}


export default App;
