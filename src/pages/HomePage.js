
import { useEffect, useState } from "react"
import api from "../global/api"
import Header from "../components/Header"
import {FallingLines} from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"



export default function HomePage() {

    const [mainCity, setMainCity] = useState()
    const [choose, setChoose] = useState("")
    const [sendBtn, setSendBtn] = useState(false)
    const navigate = useNavigate()


    function handleOption(event) {

        setChoose(event.target.value)

    }


    function nextPage (){

        if(sendBtn === false) setSendBtn(true)
        else setSendBtn(false)

        navigate(`/tickets/${choose}`)

    }
    

    useEffect(() => {

        const promise = api.city();
        promise.then(res => setMainCity(res.data))
        promise.catch((err) => console.log(err))
        console.log('error');
    }, [])

    return (

        
            <HomePageContainer>
                
                <Header/>

                <Main>

                    <Input value={choose} onChange={handleOption}>
                        <input value=""> {"Busca"}</input>
                        { mainCity !== undefined && mainCity.map((item) => <input key={item.id} value={`${item.name}`}>

                                {`${item.name}, 
                                  ${item.NameOfState}, 
                                  ${item.NameOfCountry}` }

                            </input>)}

                    </Input>

                    <Button onClick={nextPage}>
                        {sendBtn ? <FallingLines color="#08246C" timeout={6000}/> : "Pesquisar"}
                    </Button>

                </Main>

            </HomePageContainer>
        
    )
}

 const HomePageContainer = styled.div`

   height: 660px;
   display: flex;
   flex-direction: column;
   background: rgba(232, 24, 24, 0.16);
   
`


 const Main = styled.div`

    background: rgba(232, 24, 24, 0.16);
    border-radius: 22.031px;
    width: 80vw;
    height: 50px;
    margin: 20vh auto;
    margin-top: 200px;
    display: flex;
    align-items: center;
    
    
`
 const Input = styled.select`

 width: 400px;
 height: 30px;
 border-radius: 5px;
 border-style: none;
 padding: 10px;
 font-size: 20px;
 font-family: Apple Chancery, cursive;
 background: rgba(232, 24, 24, 0.16);
 border-radius: 16px;
 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 backdrop-filter: blur(0px);
 -webkit-backdrop-filter: blur(0px);
 border: 1px solid rgba(232, 24, 24, 1);
 &::placeholder {
     font-size: 20px;
     color: #363636;
 }


`
 const Button = styled.button`

    position: absolute;
    right:200px;
    width: 200px;
 height: 46px;
 font-family: Apple Chancery, cursive;
 background: rgba(232, 24, 24, 0.16);
 border-radius: 16px;
 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 backdrop-filter: blur(0px);
 -webkit-backdrop-filter: blur(0px);
 border: 1px solid rgba(232, 24, 24, 1);
 display: flex;
 justify-content: center;
 align-items: center;
 color: FFFAFA;
 cursor: pointer;
 font-size: 20px;
 transition: 0.4s;
 &:hover {
     background-color:   #E818187D;
 }

    opacity: 0.7;
    
`