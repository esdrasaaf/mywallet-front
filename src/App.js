import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/styles/GlobalStyle'
import Registers from './pages/Home/Registers'
import SignIn from './pages/Login/SignIn'
import SignUp from './pages/Login/SIgnUp'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/home" element={<Registers/>}/>
            </Routes>
        </BrowserRouter>
    )
}