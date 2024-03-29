import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Loading from '../components/Loading'
import userData from '../hooks/userData.json'

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding:0;
        background: #f5f5f5;
    }

`

const App = ()=>{
    const data = userData;
    const [counter, setCounter] = useState(0); 
    setTimeout(()=>{
        setCounter(1);
    },1000)
    return counter === 0 ? <Loading/>: (
        <Main>
            <GlobalStyle/>
                <Sidebar>
                    <About
                        avatar= {data.avatar}
                        name={data.name}
                        profession={data.profession}
                        bio={data.bio}
                        address={data.address}
                        social={data.social}
                        objectFit={data.objectFit}
                        
                        />
                </Sidebar>
                {console.log('test')}
                <Info>
                    <Education
                        data={data.education}
                    />
                    <Experience
                        data={data.experience}
                        />
                    <Certificates
                        data={data.certificate}
                    />
                    <Skills
                        data={data.skills}
                        />
                </Info>
            
        </Main>
    );

}

export default App;