import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"
import { UserInfoContext } from '../contexts/userInfo'
import BASE_URL from "../constants/url"

export function XButton ( { id }) {
    const { config, setStatus } = useContext(UserInfoContext)
    const token = config.headers.Authorization

    const headers = { 
        id, 
        token
    }

    function deleteRegister () {
        const promisse = axios.delete(`${BASE_URL}/registers`, { headers })

        promisse.then(() => {
            setStatus([])
        })

        promisse.catch((err) => {
            alert(err.data)
        })
    }

    return (
        <Button onClick={deleteRegister}>X</Button>
    )
}

//Styled COmponents
const Button = styled.button`
    border: none;
    background: none;
    color: gray;
    text-align: end;
    margin-left: 5px;
    margin-right: 5px;
`