import styled from "styled-components";

export const StyledMainContent = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 92vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    display: flex;
    flex-direction: row-reverse;
    padding-block: 5rem;
    gap: 10rem;
  }
`;

export const StyledHeroImg = styled.img`
  max-width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    &.desktop-img {
      display: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    &.mobile-img {
      display: none;
    }
    &.desktop-img {
      width: 90%;
      object-fit: contain;
      flex: 1;
    }
  }
`;

export const StyledSection = styled.section`
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 90%;
    margin: auto;
    justify-content: space-between;
    align-items: start;
    text-align: left;
    flex: 1;
    padding-top: 10rem;

    h1 {
      font-size: 5.6rem;
      max-width: 11ch;
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20%;
    max-width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 4rem 0 0 0;
  }
`;
