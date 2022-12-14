import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import BASE_URL from "../../constants/url"
import axios from "axios"


export default function SignUpPage () {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')

    function postRegister (e) {
        e.preventDefault()
        if (confirmedPass !== password) {
            return alert(`Algo deu errado! Dados do perfil inválidos`)
        }
        const promisse = axios.post(`${BASE_URL}/sign-up`, {name, email, password})

        promisse.then((res) => {
            navigate("/")
            console.log(res.data)
        })

        promisse.catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <Container>
            <h1>My Wallet</h1>

            <FormContainer onSubmit={postRegister}>
                <input required type="text" onChange={(e) => setName(e.target.value)} placeholder={"Digite o seu nome"}/>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder={"E-mail"}/>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder={"Senha"}/>
                <input required type="password" onChange={(e) => setConfirmedPass(e.target.value)} placeholder={"Confirme a senha"}/>
                <button> Logar </button>
            </FormContainer>

            <Link to={"/"}>Já possui uma conta? Logue aqui!</Link>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: #9056BF;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 25px;
        font-family: 'Nova Square', sans-serif;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 40px;
        line-height: 50px;
    }

    a {
        margin-top: 36px;
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;

    input {
        box-sizing: border-box;
        padding: 16px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        font-size: 20px;

        &::placeholder {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
    }

    button {
        box-sizing: border-box;
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        padding: 12px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: white;
    }
`