import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled,  {keyframes} from 'styled-components';
import H2Styled from '../styled/H2Styled'

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding:0;
        background: #f5f5f5;
    }

`
const move = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border: 16px solid #BDBDBD; /* Light grey */
  border-top: 16px solid #117A65; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${move} 2s linear infinite;
  
`;

const LoadingStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr .25fr 1fr  ; 
    grid-template-rows: repeat(3, 1fr); 
`;

const LoadingContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    text-align: center;
    align-items: center;
`;


const Loading = () =>(
    <LoadingStyled>
        <GlobalStyle/>
        <LoadingContainer>
            <Spinner/>
            <H2Styled name="Cargando"/>
        </LoadingContainer>
    </LoadingStyled>

);

export default Loading;