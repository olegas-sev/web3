import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import Image from "next/image"

export default function Home() {
    const { isAuthenticated, logout } = useMoralis()
    if (!isAuthenticated) return <Login />

    return (
        <div className="h-screen">
            <Head>
                <title>Metaverse chat dapplication</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex absolute w-full justify-between p-3 items-center z-50 ">
                <h1 className="text-white">
                    Welcome to the decentralized application!
                </h1>
                <button
                    onClick={logout}
                    className="hover:bg-[#333] bg-[#2c2c2c] rounded-lg px-8 py-3 font-semibold text-white"
                >
                    Logout
                </button>
            </div>
            <div className="w-full h-screen">
                <Image src="/img/bg.jpg" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}
