import axios from "axios";
import {useState} from "react";
import {URL_CREATE} from "../../configs/constants.js";

export function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    // desestructuración de objetos
    const {name, email, password} = user;

    const onSubmit = async (e) => {
        e.preventDefault(); // Evita que los parametros sean URL
        await axios.post(URL_CREATE, user);
    }

    function onInputChange(e) {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    return (
        <>
            <main
                className="w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('./src/assets/fondo_register.png')]">
                <div className="p-8">
                    <a href="./Inicio.jsx">
                        <button
                            className="w-16 h-12 text-white bg-yellow-500 rounded-lg hover:bg-orange-400 cursor-pointer">Inicio
                        </button>
                    </a>
                </div>
                <form onSubmit={onSubmit} className="flex justify-start items-centertext-3xl">
                    <div className="h-full w-80">
                        <h2 className="text-orange-400 text-5xl text-center pb-8">Registro</h2>
                        <div className="flex flex-col pb-8 pl-8">
                            <label className="text-white">Nombre<span
                                className="text-orange-400">*</span></label>
                            <input
                                type="text" required name="name" value={name} onChange={onInputChange}
                                className="h-8 bg-[#FFF3D4] rounded-lg border-b-2 border-b-fuchsia-900  outline-0 hover:bg-gray-300 "/>
                        </div>
                        <div className="flex flex-col pb-8 pl-8">
                            <label className="text-white">Correo electrónico<span
                                className="text-orange-400">*</span></label>
                            <input
                                type="email" required name="email" value={email} onChange={onInputChange}
                                className="h-8 bg-[#FFF3D4] rounded-lg border-b-2 border-b-fuchsia-900  outline-0 hover:bg-gray-300 "/>
                        </div>
                        <div className="flex flex-col pb-8 pl-8">
                            <label className="text-white">Contraseña<span className="text-orange-400">*</span></label>
                            <input
                                type="password" required name="password" value={password} onChange={onInputChange}
                                className="h-8 bg-[#FFF3D4] rounded-lg border-b-2 border-b-fuchsia-900  outline-0 hover:bg-gray-300"/>
                        </div>
                        <div className="flex flex-col items-center pt-4">
                            <button
                                className="w-44 h-14 rounded-lg bg-[#D0A22A] text-white  cursor-pointer hover:bg-[#FFE08D] hover:text-gray-600 "
                                type="submit">Registrar
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}