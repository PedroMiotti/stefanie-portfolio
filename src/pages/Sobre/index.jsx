import './style.css';

import Checked from '../../assets/img/checked.svg'
import PhotoshopIcon from '../../assets/img/adobe-photoshop.svg';
import ExcelIcon from '../../assets/img/microsoft-excel.svg';
import WordIcon from '../../assets/img/microsoft-word.svg';
import PptIcon from '../../assets/img/microsoft-powerpoint.svg';
import OutlookIcon from '../../assets/img/microsoft-outlook.svg';
import SteImage from '../../assets/img/index.png';

const Sobre = () => {
    return (
        <div className="sobre-container">
            <div className="sobre-content">

                <div className="sobre-col1">
                    <div className="sobre-content-title">
                        <h2><span>/</span>Sobre Mim</h2>
                    </div>
                    <div className="sobre-content-row2">
                        <p className="sobre-content-text">Sou muito curiosa, entusiasmada em aprender coisas novas e colocar a mão na massa. Além de ter muito interesse nas áreas de marketing,
                            custumer experience, novos negócios e inovação.>Sou muito curiosa, entusiasmada em aprender coisas novas e colocar a mão na massa. Além de ter muito interesse nas áreas de marketing,
                            custumer experience, novos negócios e inovação.>Sou muito curiosa, entusiasmada em aprender coisas novas e colocar a mão na massa. Além de ter muito interesse nas áreas de marketing,
                            custumer experience, novos negócios e inovação.
                        </p>

                        <div className="sobre-facts-container">

                            <div className="sobre-facts-child-container">
                                <div className="sobre-facts-row">
                                    <img className="sobre-checked-icon" src={Checked} alt="checked icon"/>
                                    <p>Curiosa</p>
                                </div>
                                <div className="sobre-facts-row">
                                    <img className="sobre-checked-icon" src={Checked} alt="checked icon"/>
                                    <p>Enstusiasmada</p>
                                </div>
                            </div>

                            <div className="sobre-facts-child-container">
                                <div className="sobre-facts-row">
                                    <img className="sobre-checked-icon" src={Checked} alt="checked icon"/>
                                    <p>Curiosa</p>
                                </div>
                                <div className="sobre-facts-row">
                                    <img className="sobre-checked-icon" src={Checked} alt="checked icon"/>
                                    <p>Enstusiasmada </p>
                                </div>
                            </div>

                        </div>

                        <div className="sobre-tools-container">
                            <p className="sobre-subtitle" >- Ferramentas</p>
                            <div className="sobre-tools-icons-container">
                                <img className="sobre-tool-icon"  src={PhotoshopIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={ExcelIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={WordIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={PptIcon} alt="checked icon"/>
                                <img className="sobre-tool-icon" src={OutlookIcon} alt="checked icon"/>
                            </div>

                        </div>

                        <div className="sobre-linguas-container">
                            <p className="sobre-subtitle" >- Linguas</p>
                            <div className="sobre-linguas-all">
                                <p>Inglês</p>
                                <p>{'│'}</p>
                                <p>Alemão</p>
                                <p>{'│'}</p>
                                <p>Espanhol</p>
                                <p>{'│'}</p>
                                <p>Português</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sobre-col2">
                    <img src={SteImage} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Sobre;