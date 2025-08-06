// File: app/(tabs)/swap/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { PublicClient } from '@/lib/viem'; // Import our read-only client
import { formatEther } from 'viem'; // A helper to format the balance nicely

// 1. Define the props the page will receive from the layout
interface SwapPageProps {
  address: `0x${string}` | null;
}

// 2. Accept the 'address' prop
export default function SwapPage({ address }: SwapPageProps) {

  console.log("SWAP address:", address);
  // 3. Create a local state to store the user's balance
  const [balance, setBalance] = useState<string | null>(null);

  console.log("SWAP address:", address);

  // 4. Use useEffect to fetch the balance whenever the address changes
  useEffect(() => {
    // Make sure we have an address before trying to fetch
    if (address) {
      const fetchBalance = async () => {
        try {
          // Use our publicClient to get the balance from the blockchain
          const userBalance = await PublicClient.getBalance({ 
            address: address 
          });
          
          // The balance is a huge number (in wei), so we format it
          const formattedBalance = formatEther(userBalance);
          
          // Store the formatted balance in our state
          setBalance(formattedBalance);
        } catch (error) {
          console.error("Failed to fetch balance:", error);
          setBalance(null); // Reset balance on error
        }
      };

      fetchBalance();
    } else {
      // If the user disconnects, reset the balance
      setBalance(null);
    }
  }, [address]); // This array means "re-run this effect when 'address' changes"

  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-400">Swap</h1>
      
      {/* 5. Display the user's address and balance */}
      {address ? (
        <div className="mt-4 p-4 rounded-lg bg-gray-800">
          <p>Your Address: {address}</p>
          <p>Your Balance: {balance ? `${parseFloat(balance).toFixed(4)} ETH` : 'Loading...'}</p>
        </div>
      ) : (
        <p className="mt-4">Please connect your wallet to see your balance.</p>
      )}

      {/* The rest of your swap UI will go here */}
    </div>
  );
}