/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { createWalletClient, custom, WalletClient, hexToString, parseEther } from "viem";
import { sepolia } from "viem/chains";

// It's good practice to declare the window.ethereum type for TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface ConnectWalletProps{
  address:`0x${string}` | null,
  setAddress:(address : (`0x${string}` | null))=>void
}

export default function ConnectWallet({address,setAddress} : ConnectWalletProps) {
  // State to store the connected wallet address
  // const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function connect() {
    // Reset previous errors
    setError(null);

    // Ensure window.ethereum is available
    if (typeof window.ethereum === "undefined") {
      setError("MetaMask is not installed. Please install it to connect.");
      return;
    }

    // Create the client inside the handler to ensure `window` is available
    const client: WalletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum),
    });

    try {
      console.log("Connecting wallet...");
      const [connectedAddress] = await client.requestAddresses();
      
      // Update state with the connected address
      setAddress(connectedAddress);
      console.log(`Wallet connected at ${connectedAddress}`);

    } catch (err) {
      console.error("Connection failed:", err);
      setError("User rejected the connection request.");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={connect}
        disabled={!!address} // Disable button after connecting
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
      >
        {address ? "Connected!" : "Connect Wallet"}
      </button>

      {/* Display the connected address or any errors */}
      {address && <p className="mt-2 text-green-600">Connected: {address}</p>}
      {error && <p className="mt-2 text-red-600">Error: {error}</p>}
    </div>
  );
}