import styled from 'styled-components'

interface Props {
  back: string
  img: string
}

export const InformationCard = styled.div<Props>`
  background: ${(props) => props.back || 'dark'};
  width: 100%;
  max-width: 35%;
  min-width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  a {
    font-size: 20px;
  }

  @media screen and (max-width: 760px) {
    max-width: 100%;
    background: unset;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('${(props) => props.img}');
    box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 60%);
  }
`