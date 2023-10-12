import AboutMe1 from '../img/About Me 1.png';
//Styled
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Hi!</h2>
                    </Hide>
                    <Hide>
                        <h2>I'm <span>{'</'}</span>Lazaros<span>{'/>'}</span> a</h2>
                    </Hide>
                    <Hide>
                        <h2>Web Developer</h2>
                    </Hide>
                </div>
                <p>Contact me for any job suggestions.</p>
                <button>Contact Me</button>
                <Image>
                    <img src={AboutMe1} alt="Web Programming Languages" />
                </Image>
            </Description>
        </About>
    )
}

//Styled Components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 50%;
        height: 80vh;
        object-fit: cover;
        float: right;
        border-radius: 50%;
    }
`;
const Hide = styled.div`

    overflow: hidden;
`;
export default AboutSection;