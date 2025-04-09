import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background: ${(props) => props.theme['green-500']};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
      }

      &.active {
        color: ${(props) => props.theme['green-500']};

        &::after {
          transform: scaleX(1);
        }
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
`
