import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { URL_CREATE } from "../../configs/constants.js";

export function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(null);

    let navigation = useNavigate();

    const { name, email, password } = user;

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);

        try {
            await axios.post(URL_CREATE, user);
            navigation("/login");

        } catch (error) {
            console.error(error);
            setErrorMessage("Usuario incorrecto o datos inválidos. Por favor verifica tu información.");

            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    }

    function onInputChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <>
            <main className="relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('./src/assets/fondo_register.png')] flex flex-col justify-center items-center">

                <div className="absolute top-8 left-8">
                    <Link to="/">
                        <button className="w-16 h-12 text-white bg-yellow-500 rounded-lg hover:bg-orange-400 cursor-pointer shadow-md font-bold transition-colors">
                            Inicio
                        </button>
                    </Link>
                </div>

                <form onSubmit={onSubmit} className="bg-black/60 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20">
                    <div className="w-80">
                        <h2 className="text-orange-400 text-5xl text-center pb-8 font-bold drop-shadow-md">Registro</h2>

                        <div className="flex flex-col pb-6">
                            <label className="text-white font-medium mb-1">Nombre <span className="text-orange-400">*</span></label>
                            <input
                                type="text"
                                required
                                name="name"
                                value={name}
                                onChange={onInputChange}
                                className="h-10 px-3 bg-[#FFF3D4] rounded-lg border-b-4 border-fuchsia-900 text-gray-800 outline-none focus:border-orange-400 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col pb-6">
                            <label className="text-white font-medium mb-1">Correo electrónico <span className="text-orange-400">*</span></label>
                            <input
                                type="email"
                                required
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                className="h-10 px-3 bg-[#FFF3D4] rounded-lg border-b-4 border-fuchsia-900 text-gray-800 outline-none focus:border-orange-400 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col pb-8">
                            <label className="text-white font-medium mb-1">Contraseña <span className="text-orange-400">*</span></label>
                            <input
                                type="password"
                                required
                                name="password"
                                value={password}
                                onChange={onInputChange}
                                className="h-10 px-3 bg-[#FFF3D4] rounded-lg border-b-4 border-fuchsia-900 text-gray-800 outline-none focus:border-orange-400 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col items-center">
                            <button
                                className="w-full h-12 rounded-lg bg-[#D0A22A] text-white font-bold text-lg cursor-pointer hover:bg-[#b88e23] shadow-lg active:scale-95 transition-all"
                                type="submit">
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>

                {errorMessage && (
                    <div className="fixed bottom-5 animate-bounce-in z-50">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-xl max-w-md flex flex-col items-start">
                            <span className="font-bold text-lg mb-1">Error al registrarse</span>
                            <span className="text-sm text-red-600 opacity-90">{errorMessage}</span>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}