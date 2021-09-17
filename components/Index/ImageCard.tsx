import styled from 'styled-components'

interface Props {
  img: string
}

export const ImageCard = styled.div<Props>`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-image: url('${(props) => props.img}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 760px) {
    display: none;
  }

`
