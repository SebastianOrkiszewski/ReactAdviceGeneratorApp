import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 300px;
  width: 375px;
  padding: 40px 50px 50px 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  background-size: 100vh;
  

  @media screen and (min-width: 580px) {
    width: 600px;
  }
`;

export const Id = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.neonGreen};
  white-space: pre-wrap;
  font-weight: normal;
`;

export const Advice = styled.p`
  margin: 20px 0 25px 0;
  font-size: ${({ theme }) => theme.fontSize.standard};
  text-align: center;
  color: ${({ theme }) => theme.colors.lightCyan};
`;

export const DesktopDivider = styled.div`
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const MobileDivider = styled.div`
  @media screen and (min-width: 580px) {
    display: none;
  }
`;
