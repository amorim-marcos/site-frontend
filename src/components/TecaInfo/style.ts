import styled from 'styled-components'

export const Wrapper = styled.main`
  li {
    list-style: none;
  }
  p {
    margin: 10px 0;
    margin-left: -15px;
  }

  li::before {
    content: '';
    background: url('/img/seta_bege.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -3px;
    margin-right: 5px;
    width: 15px;
    height: 20px;
  }

  @media (max-width: 1280px) {
    li::before {
      margin-bottom: -3px;
      margin-right: 5px;
      width: 5px;
      height: 10px;
    }
  }

  @media (max-width: 568px) {
    li::before {
      margin-bottom: -3px;
      margin-right: 5px;
      width: 10px;
      height: 15px;
    }
  }
`
