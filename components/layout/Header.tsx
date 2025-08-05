import Link from 'next/link';
import ConnectWallet from '@/components/web3/ConnectWallet'; // We'll use the wallet button component here

export default function Header() {
  return (
    // The main header container with a bottom border
    <header className="border-b border-gray-700 bg-gray-900">
      {/* Navigation container to center content and add padding */}
      <nav className="container mx-auto flex items-center justify-between p-4">
        
        {/* Left side of the navbar */}
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-yellow-400">DeFi DEX</h1>
          {/* Links for navigation */}
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            <Link href="/swap" className="hover:text-white transition-colors">Swap</Link>
            <Link href="/liquidity" className="hover:text-white transition-colors">Liquidity</Link>
            <Link href="/Create-Exchange" className="hover:text-white transition-colors">Create Exchange</Link>
          </div>
        </div>
        
        {/* Right side of the navbar */}
        <div>
          <ConnectWallet />
        </div>
      </nav>
    </header>
  );
}
