import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserInfoContext } from "../contexts/userInfo"
import logoutImg from '../assets/images/logoutwhite.png'
import axios from 'axios'
import BASE_URL from '../constants/url'

export default function Header ({username}) {
    const navigate = useNavigate()
    const {config} =  useContext(UserInfoContext)

    function logout () {
        const promisse = axios.post(`${BASE_URL}/logout`, null, config)

        promisse.then((res) => {
            navigate("/")
        })

        promisse.catch((err) => {
            alert(err.data)
        })
    }

    return (
        <Container>
            <h1> Olá, {username}</h1>
            <img onClick={logout} src={logoutImg} alt="Imagem de logout"/>
        </Container>
    )
}

//Styled Components
const Container = styled.header`
    box-sizing: border-box;
    width: 100%;
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