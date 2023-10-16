import AboutMe1 from '../img/About Me 1.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
//Styled
import styled from 'styled-components';
import {About,Description,Image,Hide} from "../styles";

const AboutSection = () => {
    const [text] = useTypewriter({
        words: ['Lazaros'],
        loop:[],
        typeSpeed: 130,
        deleteSpeed: 100,

    });
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Hi!</h2>
                    </Hide>
                    <Hide>
                        <h2>I'm <span>{'</'}</span>{text}<Cursor cursorStyle='|'/><span>{'/>'}</span> a</h2>
                    </Hide>
                    
                    <Hide>
                        <h2>Web Developer</h2>
                    </Hide>
                </div>
                <p>Contact me for any job suggestions.</p>
                <button>Contact Me</button>
                </Description>
                <Image>
                    <img src={AboutMe1} alt="Web Programming Languages" />
                </Image>
        </About>
    );
}

//Styled Components

export default AboutSection;