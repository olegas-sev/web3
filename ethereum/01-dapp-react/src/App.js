import { useState } from "react"
import { ethers } from "ethers"
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"
import "./App.css"

const greeterAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

function App() {
    const [greeting, setGreetingValue] = useState("")

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }
    async function fetchGreeting() {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(
                greeterAddress,
                Greeter.abi,
                provider
            )
            try {
                const data = await contract.greet()
                console.log("data: ", data)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
    async function setGreeting() {
        // Guard clause
        if (!greeting) return
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            // Make provider
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            // Get signer through provider
            const signer = provider.getSigner()
            // Make a contract
            const contract = new ethers.Contract(
                greeterAddress,
                Greeter.abi,
                signer
            )
            // Make a transaction
            const transaction = await contract.setGreeting(greeting)
            setGreetingValue("")
            await transaction.wait()
            fetchGreeting()
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={fetchGreeting}>Fetch greeting</button>
                <button onClick={setGreeting}>Set greeting</button>
                <input
                    onChange={(e) => setGreetingValue(e.target.value)}
                    placeholder="Set greeting"
                    type="text"
                    value={greeting}
                />
            </header>
        </div>
    )
}

export default App
