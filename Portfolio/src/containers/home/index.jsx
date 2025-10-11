import React from 'react';
import '../home/style.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';

const Home = () => {
    const navigate = useNavigate();

    const redirectToContact = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className='home'>
            {/* Animated background */}
            <div className='home__background'>
                <div className='home__blob home__blob--1'></div>
                <div className='home__blob home__blob--2'></div>
                <div className='home__blob home__blob--3'></div>
            </div>

            {/* Main content */}
            <div className='home__container'>
                <div className='home__text-wrapper'>
                    {/* Subtitle */}
                    <Animate
                        play
                        duration={0.8}
                        delay={0}
                        start={{ opacity: 0, transform: 'translateY(-20px)' }}
                        end={{ opacity: 1, transform: 'translateY(0px)' }}
                    >
                        <p className='home__subtitle'>Welcome to my portfolio</p>
                    </Animate>

                    {/* Main heading with typing effect */}
                    <h1 className='typing-text'>
                        <span className='typing-text__main'>Hello, I'm Rupok</span>
                        <br />
                        <span className='typing-text__secondary'>Backend Developer</span>
                    </h1>

                    {/* Description */}
                    <Animate
                        play
                        duration={0.8}
                        delay={0.3}
                        start={{ opacity: 0 }}
                        end={{ opacity: 1 }}
                    >
                        <p className='home__description'>
                            Crafting robust server-side solutions and scalable architectures. 
                            Let's build something extraordinary together.
                        </p>
                    </Animate>

                    {/* Buttons */}
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateY(550px)', opacity: 0 }}
                        end={{ transform: 'translateY(0px)', opacity: 1 }}
                    >
                        <div className='home__button-wrapper'>
                            <button 
                                className='home__btn home__btn--primary' 
                                onClick={redirectToContact}
                            >
                                <span className='home__btn-text'>Get in Touch</span>
                                <svg className='home__btn-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                </svg>
                            </button>
                            <a 
                                href="/RUPAK_BISWAS.pdf" 
                                download 
                                className="home__btn home__btn--secondary"
                            >
                                <span className='home__btn-text'>Download Resume</span>
                                <svg className='home__btn-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19v-7m0 0V5m0 7H5m7 0h7' />
                                </svg>
                            </a>
                        </div>
                    </Animate>

                    {/* Stats */}
                    <Animate
                        play
                        duration={0.8}
                        delay={2.5}
                        start={{ opacity: 0 }}
                        end={{ opacity: 1 }}
                    >
                        <div className='home__stats'>
                            <div className='home__stat'>
                                <p className='home__stat-number'>1+</p>
                                <p className='home__stat-label'>Years</p>
                            </div>
                            <div className='home__stat'>
                                <p className='home__stat-number'>2+</p>
                                <p className='home__stat-label'>Projects</p>
                            </div>
                            <div className='home__stat'>
                                <p className='home__stat-number'>2+</p>
                                <p className='home__stat-label'>Clients</p>
                            </div>
                        </div>
                    </Animate>
                </div>

                {/* Scroll indicator */}
                <div className='home__scroll-indicator'>
                    <svg className='home__scroll-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Home;