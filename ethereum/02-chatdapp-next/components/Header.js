import Image from "next/image"
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername"

function Header() {
    const { user } = useMoralis()
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
            <div className="grid grid-cols-4 items-end lg:items-center">
                <div className="col-span-4 text-left lg:text-center">
                    {/* Avatar */}
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">Welcome to decentralized area</h1>
                    <h2 className="text-5xl font-bold truncate">
                        {user.get("username")}
                    </h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
