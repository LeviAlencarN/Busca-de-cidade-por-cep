import styled from "styled-components";

export const Container = styled.div`

    background-color: white;
    width: 30rem;
    height: 25rem;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    box-shadow: 4px 4px rgba(0,0,0,0.7);
    

    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width:50%;
        height: 50px;
        margin-top: 10px;
        font-size: 15pt;
    }

   .results {
        margin: 10rem 0;
   }

`

export const Button = styled.button`

   margin-top: 5%;
   width: 6rem;
   height: 30px;
   box-shadow: 4px 4px rgba(0,0,0,0.7);
   color: white;
   background-color: rgb(42, 146, 194);

   :hover {
        cursor: pointer;
        background-color: rgb(60, 175, 228);
   }
`