import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const { authenticate } = useMoralis()
    return (
        <div className="bg-black relative text-white">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
                <Image
                    className="object-cover rounded-full"
                    src="/img/logo.jpeg"
                    height={200}
                    width={200}
                />
                <button
                    onClick={authenticate}
                    className="bg-[#2c2c2c] rounded-lg p-5 font-semibold animate-pulse"
                >
                    Login to the METAVERSE
                </button>
            </div>
            <div className="w-full h-screen">
                <Image src="/img/bg.jpg" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
