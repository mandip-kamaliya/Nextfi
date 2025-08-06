"use client";

import Header from "@/components/layout/Header";
import { useState } from "react";

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use camelCase for the setter function: setAddress
  const [address, setAddress] = useState<`0x${string}` | null>(null);
console.log("PARENT LAYOUT address:", address);
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      {/* Pass the prop with the correct casing: setAddress */}
      <Header address={address} setAddress={setAddress} />
      
      <main className="p-4 sm:p-6 lg:p-8">
        {address ? (
          // @ts-expect-error err 
          <children.type {...children.props} address={address} />
        ) : (
          // @ts-expect-error err
          <children.type {...children.props} />
        )}
      </main>
    </div>
  );
}