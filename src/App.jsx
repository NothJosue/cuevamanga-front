import {Login} from "./components/Login/Login.jsx";
import {Register} from "./components/Register/Register.jsx";
import {Route, Routes} from "react-router";
import {Inicio} from "./components/Inicio/Inicio.jsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App
