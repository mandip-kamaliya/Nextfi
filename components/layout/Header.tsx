import Link from 'next/link';
import ConnectWallet from '@/components/web3/ConnectWallet';
import { ModeToggle } from '../mode-toggle';

interface HeaderProps {
  address: `0x${string}` | null,
  setAddress: (address: (`0x${string}` | null)) => void
}

export default function Header({ address, setAddress }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card/95 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between p-4">
        
        <div className="flex items-center gap-8">
          {/* Keep yellow branding but make it theme-aware */}
          <h1 className="text-xl font-bold text-yellow-500 dark:text-yellow-400">
            DeFi DEX
          </h1>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/swap" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Swap
            </Link>
            <Link 
              href="/liquidity" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Liquidity
            </Link>
            <Link 
              href="/Create-Exchange" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Create Exchange
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ConnectWallet address={address} setAddress={setAddress} />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}