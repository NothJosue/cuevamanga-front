import { useState } from "react";
import axios from "axios";
import { URL_VALIDATE_LOGIN } from "../../configs/constants.js";
import { Link, useNavigate } from "react-router";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(null);

    let navigate = useNavigate();

    let { email, password } = user;

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);

        try {
            const response = await axios.post(URL_VALIDATE_LOGIN,user);

            if (response.data === true) {
                navigate("/");
            } else {
                triggerError("Correo o contraseña incorrectos.");
            }

        } catch (e) {
            console.error(e);
            triggerError("Error al conectar con el servidor.");
        }
    }

    const triggerError = (msg) => {
        setErrorMessage(msg);
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000);
    }

    function onInputChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <>
            <main className="relative w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('./src/assets/fondo_login.png')] flex flex-col justify-center items-center">

                <div className="absolute top-8 left-8">
                    <Link to="/">
                        <button className="w-16 h-12 text-white bg-yellow-500 rounded-lg hover:bg-orange-400 cursor-pointer shadow-md font-bold transition-colors">
                            Inicio
                        </button>
                    </Link>
                </div>

                <form onSubmit={onSubmit} className="bg-black/60 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20">
                    <div className="w-80">
                        <h2 className="text-orange-400 text-5xl text-center pb-8 font-bold drop-shadow-md">Iniciar Sesión</h2>

                        <div className="flex flex-col pb-6">
                            <label className="text-white font-medium mb-1">Correo electrónico <span className="text-orange-400">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                required
                                onChange={onInputChange}
                                className="h-10 px-3 bg-[#FFF3D4] rounded-lg border-b-4 border-fuchsia-900 text-gray-800 outline-none focus:border-orange-400 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col pb-6">
                            <label className="text-white font-medium mb-1">Contraseña <span className="text-orange-400">*</span></label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                required
                                onChange={onInputChange}
                                className="h-10 px-3 bg-[#FFF3D4] rounded-lg border-b-4 border-fuchsia-900 text-gray-800 outline-none focus:border-orange-400 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col items-center pt-2">
                            <button
                                className="w-full h-12 rounded-lg bg-[#D0A22A] text-white font-bold text-lg cursor-pointer hover:bg-[#b88e23] shadow-lg active:scale-95 transition-all"
                                type="submit">
                                Ingresar
                            </button>

                            <div className="mt-4 text-center">
                                <span className="text-gray-200 text-sm">¿No tienes una cuenta? </span>
                                <Link to="/register" className="text-[#F6B200] hover:text-[#F90] font-bold text-sm ml-1 transition-colors">
                                    Registrarte
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
                {errorMessage && (
                    <div className="fixed bottom-5 animate-bounce-in z-50">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-xl max-w-md flex flex-col items-start">
                            <span className="font-bold text-lg mb-1">¡Login fallido!</span>
                            <span className="text-sm text-red-600 opacity-90">{errorMessage}</span>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}