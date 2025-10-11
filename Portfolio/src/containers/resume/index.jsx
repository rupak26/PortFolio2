import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { FaRegFileAlt } from 'react-icons/fa';
import { data } from './utils';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.scss'


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<FaRegFileAlt size={40} />}
      />

      <div className="timeline">
        <div className="timeline__section">
          <h3 className="timeline__section__header">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__section__element"
                contentStyle={{
                  background: '#1e293b',
                  color: '#f1f5f9'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                date={item.date}
                iconStyle={{
                  background: 'var(--yellow-theme-main-color)',
                  color: '#fff'
                }}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__section">
          <h3 className="timeline__section__header">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__section__element"
                contentStyle={{
                  background: '#1e293b',
                  color: '#f1f5f9'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                date={item.date}
                iconStyle={{
                  background: 'var(--yellow-theme-main-color)',
                  color: '#fff'
                }}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
