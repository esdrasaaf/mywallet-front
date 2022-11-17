import styled from 'styled-components'
import Footer from '../../constants/Footer'
import Header from '../../constants/Header'

export default function RegistersPage () {
    return (
        <Container>
            <Header/>

            <RegistersList>

            </RegistersList>

            <Footer/>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: #9056BF;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const RegistersList = styled.ul`
    width: 90vw;
    height: 100%;
    background: #FFFFFF;
    border-radius: 5px;
`