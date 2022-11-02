import styled from "styled-components";

export const Wrapper = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
border-radius: 30px;
border: none;
background-color: ${({ theme }) => theme.colors.neonGreen};


`;