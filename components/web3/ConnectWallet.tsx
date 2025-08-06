/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { createWalletClient, custom, WalletClient } from "viem";
import { sepolia } from "viem/chains";

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface ConnectWalletProps {
  address: `0x${string}` | null,
  setAddress: (address: (`0x${string}` | null)) => void
}

export default function ConnectWallet({ address, setAddress }: ConnectWalletProps) {
  const [error, setError] = useState<string | null>(null);

  async function connect() {
    setError(null);

    if (typeof window.ethereum === "undefined") {
      setError("MetaMask is not installed. Please install it to connect.");
      return;
    }

    const client: WalletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum),
    });

    try {
      console.log("Connecting wallet...");
      const [connectedAddress] = await client.requestAddresses();
      setAddress(connectedAddress);
      console.log(`Wallet connected at ${connectedAddress}`);
    } catch (err) {
      console.error("Connection failed:", err);
      setError("User rejected the connection request.");
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={connect}
        disabled={!!address}
        className="h-10 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-muted text-black dark:text-white font-medium rounded-md text-sm transition-colors disabled:cursor-not-allowed"
      >
        {address ? "Connected!" : "Connect Wallet"}
      </button>

      {/* Show connected address in a dropdown or tooltip style */}
      {address && (
        <div className="absolute top-12 right-0 bg-popover border border-border rounded-md p-2 text-xs text-popover-foreground shadow-lg z-10 min-w-[200px]">
          <p className="text-green-600 dark:text-green-400">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        </div>
      )}
      
      {/* Show errors in a similar style */}
      {error && (
        <div className="absolute top-12 right-0 bg-popover border border-border rounded-md p-2 text-xs text-destructive shadow-lg z-10 min-w-[200px]">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}