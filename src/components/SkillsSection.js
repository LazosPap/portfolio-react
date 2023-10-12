//Import Icons

import html from '../img/HTML Icon.png';
import css from '../img/CSS Icon.png';
import js from '../img/JS Icon.png'
import sql from '../img/SQL Icon.png';
import java from '../img/Java Icon.png';
import react from '../img/React Icon.png';
import php from '../img/PHP Icon.png';

const SkillsSection = () => {
    return(
        <div className="skills">
            <div className="description">
                <h2>My <span>Skills</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={html} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={css} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={js} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={react} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={php} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={sql} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={java} />
                        </div>
                    </div>
                </div>
                <div className="image">
                  <img src=""/>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;