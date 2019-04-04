import React, { Component } from 'react';
import {Section} from './Shared';
import { FaLaptop, FaGraduationCap } from 'react-icons/fa';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Experience extends Component {
    render() {
        const { experience } = this.props.resumeData;

        return (
            <Section
                name={"Experience"}
                color={'#f5f5f5'}
            >
                <h1>Experience</h1>

                <VerticalTimeline>
                    {
                        experience && experience.map((data, i)=>{
                            const isWork = data.icon === 'work';
                            return(
                                <VerticalTimelineElement
                                    key={i + data}
                                    className="vertical-timeline-element--work"
                                    date={data.dates}
                                    icon={isWork ? <FaLaptop/> : <FaGraduationCap/>}
                                    iconStyle={{ backgroundColor: '#f1a7f1', backgroundImage: 'linear-gradient(315deg, #fad0c4 0%, #f1a7f1 100%)', color: '#fff' }}
                                >
                                    <h3 className="vertical-timeline-element-title">{data.company}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{data.job_title}</h4>
                                    <p>
                                        {data.job_description}
                                    </p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </Section>
        );
    }
}



