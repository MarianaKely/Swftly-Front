
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../pages/HomePage";



export default function MainConfiguration () {




    return (

        <MainContainer>

          <BrowserRouter>

            <Routes>

            <Route path="/" element={<HomePage />} />
            
            

            </Routes>

          </BrowserRouter>

       </MainContainer>



)

}

const MainContainer = styled.div`

    width: 100%;
    height:660px;

  `
