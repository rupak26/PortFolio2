import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsFolder2Open } from 'react-icons/bs';
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from './utils';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <PageHeaderContent
                headerText="Projects"
                icon={<BsFolder2Open size={40} />}
            />
            <div className="project">
                <div className="project_sections">
                <h3 className="project__section__header">{data.heading}</h3>
                    <VerticalTimeline
                    layout="1-column"
                    lineColor="var(--yellow-theme-main-color)"
                    >   
                    {
                        data.list.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="project__section__element"
                            contentStyle={{
                            background: '#1e293b',
                            color: '#f1f5f9'
                            }}
                            contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                            iconStyle={{
                            background: 'var(--yellow-theme-main-color)',
                            color: '#fff'
                            }}    
                            >
                            <h3><a href={item.link} target="_blank" rel="noopener noreferrer" className="vertical-timeline-element-title">
                                 {item.title}
                            </a></h3>    
                            <p>{item.Description}</p>
                            </VerticalTimelineElement>
                        ))
                    }
                    </VerticalTimeline> 
                </div>    
            </div>  
        </section>
    )
}

export default Projects;