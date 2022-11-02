import styled from "styled-components";

export const Wrapper = styled.button`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
padding: 15px;
bottom: -10%;
border-radius: 30px;
border: none;
background-color: ${({ theme }) => theme.colors.neonGreen};

:hover{
    cursor: pointer;
    box-shadow: 0px 0px 38px 3px rgba(82, 255, 168, 1);
}

`;