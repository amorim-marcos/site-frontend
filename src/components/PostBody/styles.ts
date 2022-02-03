import styled from 'styled-components'

export const Wrapper = styled.main`
  @media (min-width: 0px) {
    //base

    p {
      font-size: 14px;
    }

    h1 {
      font-size: 34px;
      font-weight: 800;
      color: #004934;
      font-size: 32px;
    }

    h2 {
      color: #429c2e;
      font-weight: 600;
      font-size: 32px;
    }

    h3 {
      color: #0a6c3b;
      font-weight: 800;
    }

    h4 {
      color: #0a6c3b;
      font-weight: 700;
    }
  }

  @media (min-width: 320px) {
    //xs
  }

  @media (min-width: 568px) {
    //sm

    p {
      font-size: 15px;
    }
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 22px;
    }
  }

  @media (min-width: 768px) {
    //md
  }

  @media (min-width: 1024px) {
    //lg
    p {
      font-size: 16px;
    }
    h1 {
      font-size: 19px;
    }
    h2 {
      font-size: 18px;
    }
  }

  @media (min-width: 1280px) {
    //xl
    p {
      font-size: 18px;
    }
    h1 {
      font-size: 29px;
    }

    h2 {
      font-size: 26px;
    }
  }

  @media (min-width: 1536px) {
    //2xl
  }
`
