
import styled from "styled-components"
import logo from "../assets/LogoSigla.png"

export default function Header(){
    return (
        <Main>
                <img src={logo}></img>
        </Main>
    )
}

const Main = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100px;
background-color: #FFFAFA;
width: 100%; 
border-bottom: 1px solid #dfdddd;
font-family: 'Libre Bodoni', sans-serif;
position: fixed;
top: 0;
z-index: 1;
background: rgba(232, 24, 24, 0.16);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(0px);
-webkit-backdrop-filter: blur(0px);
border: 2px solid rgba(232, 24, 24, 1);

`


   



`

