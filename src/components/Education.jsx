import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled'
import styled from 'styled-components';

const EduAnchor = styled.a`
    color:#009688;
    text-decoration: none;
`;

const Education = props => ( 

    <div className="Education">
        <H2Styled name="Estudios:"/>
        <div className="Education-container">

        {props.data.map((edu, index)=>(
            <div className="Education-item" key={`Edu-${index}`}>
                <H3Styled>{edu.degree + " @ "} 
                    <EduAnchor href={edu.link} target="_blank">{edu.institution } </EduAnchor>
                    <span>{" / "+ edu.startDate} - {edu.endDate}</span>
                </H3Styled>
                <PStyled name={edu.description}/>
            </div>
        ))}
        </div>
    </div>
);

export default Education;