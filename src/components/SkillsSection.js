//Import Icons

import html from '../img/HTML Icon.png';
import css from '../img/CSS Icon.png';
import js from '../img/JS Icon.png'
import sql from '../img/SQL Icon.png';
import java from '../img/Java Icon.png';
import react from '../img/React Icon.png';
import php from '../img/PHP Icon.png';
import webdevelopment from '../img/Web Development.png';
//Styles
import {About,Description,Image,Hide, Image2} from "../styles";
import styled from 'styled-components';
const SkillsSection = () => {
    return(
        <Skills>
            <Description>
                <h2>My <span>Skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={html} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={css} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={js} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={react} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={php} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={sql} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={java} />
                        </div>
                    </Card>
                </Cards>
                </Description>
        </Skills>
    )
}

const Skills = styled(About)`
    
    h2 {
        padding-bottom: 5rem;
        
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
    flex-basis: 20rem;
    flex-grow: 2.5;
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
`;


export default SkillsSection;