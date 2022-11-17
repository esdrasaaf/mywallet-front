import styled from "styled-components"

export default function Output () {
    return (
        <Container>
            <h1>Nova saída</h1>
            <FormContainer>
                <input placeholder="Valor"/>
                <input placeholder="Descrição"/>
                <button> Salvar saída </button>
            </FormContainer>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: #9056BF;
    height: 100vh;
    width: 100vw;

    h1 {
        padding: 25px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    input {
        box-sizing: border-box;
        padding: 15px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        font-size: 20px;

        &::placeholder {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            line-height: 23px;
            color: #000000;
        }
    }

    button {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        width: 326px;
        height: 46px;
        border: none;
        background: #A328D6;
        border-radius: 5px;
    }
`