import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoutImg from '../assets/images/logoutwhite.png'

export default function Header () {

    return (
        <Container>
            <h1> Olá, {"fulano"}</h1>
            <Link to={"/"}>
                <img src={logoutImg} alt="Imagem de logout"/>
            </Link>
        </Container>
    )
}

//Styled Components
const Container = styled.header`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 25px;

    img {
        width: 30px;
        cursor: pointer;
    }

    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`