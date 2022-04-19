import styled from "styled-components";

export const Styledbutton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;

  &.register-btn {
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.mediumGray};

    &:hover {
      color: ${({ theme }) => theme.colors.almostBlack};
      border: 1.3px solid ${({ theme }) => theme.colors.almostBlack};
    }
  }

  &.cta-btn {
    background: ${({ theme }) => theme.colors.almostBlack};
    border: none;
    color: ${({ theme }) => theme.colors.almostWhite};
    font-weight: bolder;
    letter-spacing: 0.35px;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.almostBlack};
      border: 1.3px solid ${({ theme }) => theme.colors.almostBlack};
    }
  }
`;
