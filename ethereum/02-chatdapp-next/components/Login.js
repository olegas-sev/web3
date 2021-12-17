import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const { authenticate, isAuthenticating } = useMoralis()
    return (
        <div className="bg-black relative text-white w-full h-screen bg-gradient-to-b  from-black to-fuchsia-900">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
                <Image
                    className="object-cover rounded-full"
                    src="/img/logo.jpeg"
                    height={200}
                    width={200}
                />

                <button
                    onClick={() => {
                        if (window.ethereum == undefined) {
                            window.open("https://metamask.io/")
                        } else authenticate()
                    }}
                    className={`bg-fuchsia-500 rounded-lg p-5 font-semibold ${
                        isAuthenticating ? "cursor-not-allowed opacity-50" : ""
                    }`}
                >
                    Sign in using METAMASK
                </button>
            </div>
        </div>
    )
}

export default Login
