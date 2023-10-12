import AboutMe1 from '../img/About Me 1.png';

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hi!</h2>
                    </div>
                    <div className="hide">
                        <h2>I'm {'</'}<span>Lazaros{'/>'}</span> a</h2>
                    </div>
                    <div className="hide">
                        <h2>Web Developer</h2>
                    </div>
                </div>
                <p>Contact me for any job suggestions.</p>
                <button>Contact Me</button>
                <div className="image">
                    <img src={AboutMe1} alt="Web Programming Languages" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;