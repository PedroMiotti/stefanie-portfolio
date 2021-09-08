import './style.css';

// Assets
import StefImage2 from '../../assets/img/steHomeImage.svg'
import ScrollAnimation from '../../assets/animations/scroll.json';

import Lottie from "react-lottie";

const Home = () => {

    const scrollAnimationOptions = {
        loop: true,
        autoplay: true,
        animationData: ScrollAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="home-container">
            <div className="home-intro-text">
                <h1>Olá,</h1>
                <h1>Meu nome é Stefanie.</h1>
                <p>
                    Sou muito curiosa, entusiasmada em aprender coisas novas e colocar a mão na massa. Além de ter muito interesse nas áreas de marketing, custumer experience, novos negócios e inovação.
                </p>
            </div>
            <div className="home-image-container">
                <img className="home-image" src={StefImage2} />
                <svg className="home-image-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4361EE" d="M41.6,-49.5C52.1,-40.8,57.5,-25.9,59.1,-11.3C60.6,3.3,58.2,17.8,52.4,32.6C46.7,47.5,37.5,62.7,24.4,67.9C11.2,73.1,-5.9,68.2,-18.3,59.7C-30.7,51.1,-38.4,38.8,-47.1,26.1C-55.9,13.3,-65.7,0,-68.5,-16.9C-71.2,-33.7,-66.9,-54.2,-54.3,-62.5C-41.7,-70.9,-20.9,-67.1,-2.7,-64C15.5,-60.8,31.1,-58.2,41.6,-49.5Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="scroll-line-container">
                <Lottie
                    options={scrollAnimationOptions}
                    style={{width: 120}}
                />
            </div>
        </div>
    );
};

export default Home;