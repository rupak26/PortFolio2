import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import './style.scss'; 

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <p>
                    I'm a passionate <strong>Backend Developer</strong> specializing in 
                    <strong> Django Rest Framework</strong>, API development, and database management.
                </p>
                <p>
                    I'm also a <strong>Competitive Programmer</strong>. I've solved around 
                    <strong> 1000 problems </strong> on various coding platforms.
                </p>
                <div className="about__links">
                    <a 
                        href="https://leetcode.com/u/Rb_26/" 
                        className="about__button leetcode" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LeetCode
                    </a>
                    <a 
                        href="https://codeforces.com/profile/PROKOR-RUDRO" 
                        className="about__button codeforces" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Codeforces
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
