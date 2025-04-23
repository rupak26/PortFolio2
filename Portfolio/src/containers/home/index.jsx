import React, { use } from 'react';
import '../home/style.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';

const Home = () => {
    const navigate = useNavigate();

    const redirectTocontact = () => {
        navigate('/contact')
    };

    return (
        <section id="home" className='home'>
            <div className='home__text-wrapper'>
                <h1 className='typing-text'>
                    Hello, I'm Rupok
                    <br />
                    Backend developer
                </h1>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateY(550px)'
                    }}
                    end={{
                        transform: 'translate(0px)'
                    }}
                >
                    <div className='home__button-wrapper'>
                        <button className='hire-me-btn' onClick={redirectTocontact}>Hire Me</button>
                        <a href="/Rupak_Biswas.pdf" download className="download-resume-btn">
                            Download Resume
                        </a>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Home;
