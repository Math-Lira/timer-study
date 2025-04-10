import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) =>
    `linear-gradient(
    to right,
    ${props.theme['green-700']} 0%,
    ${props.theme['green-500']} 50%,
    ${props.theme['green-300']} 100%
  )`};

  color: ${(props) => props.theme['gray-900']};

  &:disabled {
    opacity: 1.5;
    cursor: not-allowed;
  }

  &:nor(:disabled):hover {
    opacity: 0.8;
  }

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: transparent;
  color: ${(props) => props.theme['red-500']};
  border: 2px solid ${(props) => props.theme['red-500']};
  transition: all 0.2s ease-in-out;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
    color: ${(props) => props.theme['gray-900']};
    border-color: ${(props) => props.theme['red-700']};
  }

  &:active {
    border-color: transparent;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`
