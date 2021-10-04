import './style.css';

import PhotoshopIcon from '../../assets/img/adobe-photoshop.svg';
import ExcelIcon from '../../assets/img/microsoft-excel.svg';
import WordIcon from '../../assets/img/microsoft-word.svg';
import PptIcon from '../../assets/img/microsoft-powerpoint.svg';
import OutlookIcon from '../../assets/img/microsoft-outlook.svg';
import SteAbout from '../../assets/img/steAbout.png';

const Sobre = () => {
    return (
        <div className="sobre-container">
            <div className="sobre-content">

                <div className="sobre-col1">
                    <div className="sobre-content-title">
                        <h2><span>/</span>Sobre Mim</h2>
                    </div>
                    <div className="sobre-content-row2">
                        <p className="sobre-content-text">Industriekauffrau pela Deutsche Berufsschule am Colégio Humboldt São Paulo. Atualmente faço um projeto de iniciação científica e curso Ciências Sociais e do Consumo, ambos na ESPM. Tenho certificados de inglês, alemão e espanhol e experiencia com o pacote office. Fiz estágio rotativo na Faber-Castell por 2 anos, onde trabalhei nas áreas novos negócios e inovação, educação e RH.
                            Sou muito curiosa, entusiasmada em aprender coisas novas e colocar a mão na massa. Além de ter muito interesse nas áreas de marketing, custumer experience, novos negócios e inovação.
                        </p>

                        <div className="sobre-facts-container">

                            <div className="sobre-facts-child-container">
                                <div className="sobre-facts-row">
                                    <svg className="sobre-facts-icon"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4361EE" d="M41.6,-49.5C52.1,-40.8,57.5,-25.9,59.1,-11.3C60.6,3.3,58.2,17.8,52.4,32.6C46.7,47.5,37.5,62.7,24.4,67.9C11.2,73.1,-5.9,68.2,-18.3,59.7C-30.7,51.1,-38.4,38.8,-47.1,26.1C-55.9,13.3,-65.7,0,-68.5,-16.9C-71.2,-33.7,-66.9,-54.2,-54.3,-62.5C-41.7,-70.9,-20.9,-67.1,-2.7,-64C15.5,-60.8,31.1,-58.2,41.6,-49.5Z" transform="translate(100 100)" />
                                    </svg>
                                    <p>Curiosa</p>
                                </div>
                                <div className="sobre-facts-row">
                                    <svg className="sobre-facts-icon"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4361EE" d="M41.6,-49.5C52.1,-40.8,57.5,-25.9,59.1,-11.3C60.6,3.3,58.2,17.8,52.4,32.6C46.7,47.5,37.5,62.7,24.4,67.9C11.2,73.1,-5.9,68.2,-18.3,59.7C-30.7,51.1,-38.4,38.8,-47.1,26.1C-55.9,13.3,-65.7,0,-68.5,-16.9C-71.2,-33.7,-66.9,-54.2,-54.3,-62.5C-41.7,-70.9,-20.9,-67.1,-2.7,-64C15.5,-60.8,31.1,-58.2,41.6,-49.5Z" transform="translate(100 100)" />
                                    </svg>
                                    <p>Enstusiasmada</p>
                                </div>
                            </div>

                            <div className="sobre-facts-child-container">
                                <div className="sobre-facts-row">
                                    <svg className="sobre-facts-icon"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4361EE" d="M41.6,-49.5C52.1,-40.8,57.5,-25.9,59.1,-11.3C60.6,3.3,58.2,17.8,52.4,32.6C46.7,47.5,37.5,62.7,24.4,67.9C11.2,73.1,-5.9,68.2,-18.3,59.7C-30.7,51.1,-38.4,38.8,-47.1,26.1C-55.9,13.3,-65.7,0,-68.5,-16.9C-71.2,-33.7,-66.9,-54.2,-54.3,-62.5C-41.7,-70.9,-20.9,-67.1,-2.7,-64C15.5,-60.8,31.1,-58.2,41.6,-49.5Z" transform="translate(100 100)" />
                                    </svg>
                                    <p>Curiosa</p>
                                </div>
                                <div className="sobre-facts-row">
                                    <svg className="sobre-facts-icon"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4361EE" d="M41.6,-49.5C52.1,-40.8,57.5,-25.9,59.1,-11.3C60.6,3.3,58.2,17.8,52.4,32.6C46.7,47.5,37.5,62.7,24.4,67.9C11.2,73.1,-5.9,68.2,-18.3,59.7C-30.7,51.1,-38.4,38.8,-47.1,26.1C-55.9,13.3,-65.7,0,-68.5,-16.9C-71.2,-33.7,-66.9,-54.2,-54.3,-62.5C-41.7,-70.9,-20.9,-67.1,-2.7,-64C15.5,-60.8,31.1,-58.2,41.6,-49.5Z" transform="translate(100 100)" />
                                    </svg>
                                    <p>Enstusiasmada </p>
                                </div>
                            </div>

                        </div>

                        <div className="sobre-tools-container">
                            <p className="sobre-subtitle" >Ferramentas</p>
                            <div className="sobre-tools-icons-container">
                                <img className="sobre-tool-icon"  src={PhotoshopIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={ExcelIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={WordIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={PptIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={OutlookIcon} alt="checked icon"/>
                            </div>

                        </div>

                        <div className="sobre-linguas-container">
                            <p className="sobre-subtitle" >Idiomas</p>
                            <div className="sobre-linguas-all">
                                <p>Inglês - avançado</p>
                                <p>{'│'}</p>
                                <p>Alemão - avançado</p>
                                <p>{'│'}</p>
                                <p>Espanhol - avançado</p>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="sobre-imagem-ste" src={SteAbout} alt=""/>
            </div>

        </div>
    );
};

export default Sobre;