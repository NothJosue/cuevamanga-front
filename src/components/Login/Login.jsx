import {Header} from "../Header/Header.jsx";

export function Login() {
    return (
        <>
            <main
                className="w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('./src/assets/fondo_login.png')]">
                <div className="p-8">
                    <a href="./Inicio.jsx">
                        <button className="w-16 h-12 text-white bg-yellow-500 rounded-lg hover:bg-orange-400 cursor-pointer">Inicio</button>
                    </a>
                </div>
                <div className="flex justify-end items-center text-3xl">
                    <div className="m-24 w-80">
                        <h2 className="text-orange-400 text-5xl text-center pb-8">Iniciar Sesión</h2>
                        <div className="flex flex-col">
                            <label className="text-white">correo electrónico<span
                                className="text-orange-400">*</span></label>
                            <input
                                className="bg-[#FFF3D4] rounded-lg border-b-2 border-b-fuchsia-900  outline-0 hover:bg-gray-300 "/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">contraseña<span className="text-orange-400">*</span></label>
                            <input
                                className="bg-[#FFF3D4] rounded-lg border-b-2 border-b-fuchsia-900  outline-0 hover:bg-gray-300"/>
                        </div>
                        <div className="flex flex-col items-center pt-4">
                            <button
                                className="w-44 h-14 rounded-lg bg-[#D0A22A] text-white  cursor-pointer hover:bg-[#FFE08D] hover:text-gray-600 ">Ingresar
                            </button>
                            <span className="text-gray-200">¿No tienes una cuenta?</span>
                            <a href="./Register.jsx" className="text-[#F6B200] hover:text-[#F90]">Registrarte</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}