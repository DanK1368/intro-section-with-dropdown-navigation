import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 8vh;
  width: calc(100% - 3rem);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
`;

export const StyledNavBar = styled.div`
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(110%);
    /* transition: transform 0.5s ease-in, opacity 1s ease-in; */
    opacity: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    width: 50%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
      background-color: ${({ theme }) => theme.colors.almostWhite};
      position: absolute;
      right: 0;
      top: 0;
      width: 65%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10rem 0 0 3rem;
      gap: 3rem;
      transform: translateX(110%);
    }

    & li {
      padding-inline: 1.5rem;
    }

    & li a {
      display: flex;
      align-items: center;
      gap: 2rem;

      &:hover {
        color: ${({ theme }) => theme.colors.almostBlack};
      }
    }
  }

  &.active {
    transform: translateX(0%);
    opacity: 1;

    & > ul {
      transform: translateX(0%);
      transition: transform 0.3s ease-in, opacity 1s ease-in;
    }
  }

  img {
    transition: transform 0.3s ease-in-out;
  }

  .icon-rotate {
    transform: rotateZ(180deg);
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledSignUp = styled.div`
  width: 25%;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a:hover {
    color: ${({ theme }) => theme.colors.almostBlack};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.small}) {
    a,
    button {
      display: none;
    }
  }
`;

export const StyledBurger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const StyledDropdown = styled.div`
  height: 160px;
  width: 153px;
  position: absolute;
  transform: translateX(500%);

  .dropdown-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    li {
      display: flex;
      width: 80%;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      color: ${({ theme }) => theme.colors.mediumGray};
      font-size: 1.2rem;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }

  &.dropdown-active {
    position: relative;
    transform: translateX(0%);
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.small}) {
    top: 8vh;
    background-color: #fff;
    height: 160px;
    width: 153px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-40%);

    &.company {
      width: 116px;
      height: 128px;
      transform: translateX(-10%);
    }

    &.dropdown-active {
      opacity: 1;
      position: absolute;
      transform: translateX(-40%);

      &.company {
        transform: translateX(-10%);
      }
    }
  }
`;
