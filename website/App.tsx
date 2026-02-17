
import React, { useState } from 'react';
import { Instagram, Share2 } from 'lucide-react';
import { SocialButton } from './components/SocialButton';

// Custom Discord Icon SVG since it's not in the standard Lucide set
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const App: React.FC = () => {
  const [isDone, setIsDone] = useState(false);

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => {
        console.error("Failed to copy:", err);
        alert("Failed to copy link.");
      });
  };

  const handleShare = async () => {
    // Standardizing the URL to ensure it is absolute and valid
    const url = window.location.href;
    const shareData = {
      title: "E-CHUDAI BY ZAY",
      url: url,
    };

    // Check if sharing is supported and if the data is valid for sharing
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // If the user cancels or an error occurs (like "Invalid URL"), fall back to copy
        console.warn("Navigator share failed, falling back to clipboard:", err);
        copyToClipboard();
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      copyToClipboard();
    }
  };

  const handleActionClick = () => {
    setIsDone(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[40vh] custom-gradient flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        
        <div className="relative z-10 text-center space-y-2 animate-in fade-in zoom-in duration-700">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase flex items-center justify-center gap-2">
            E-CHUDAI <span className="text-4xl md:text-6xl">🔥</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold tracking-widest uppercase opacity-90">
            BY ZAY
          </p>
        </div>
      </section>

      {/* Links Section */}
      <main className="w-full max-w-md px-6 py-12 flex flex-col gap-6">
        <SocialButton
          label="JOIN DISCORD"
          href="https://discord.gg/Cazu4g3AE"
          colorClass="bg-[#441091]"
          icon={<DiscordIcon className="w-8 h-8 text-white" />}
        />

        <SocialButton
          label="JOIN BROAD"
          href="https://www.instagram.com/channel/Abaj2x0en9BU9MmJ/"
          colorClass="bg-[#a2008b]" 
          icon={<Instagram className="w-8 h-8 text-white" />}
          isInstagram
        />

        <SocialButton
          label={isDone ? "RAW KI MAA KI CHUDAI DONE SUCCESSFULLY 😂✅" : "CLICK FOR RAW KI MAA KI CHUDAI"}
          onClick={handleActionClick}
          colorClass={isDone ? "bg-green-600" : "bg-red-600"}
          isTextOnly
        />

        <div className="mt-8 flex justify-center">
           <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors font-medium text-sm"
          >
            <Share2 size={18} />
            SHARE THIS PAGE
          </button>
        </div>
      </main>

      <footer className="mt-auto py-8 text-gray-300 text-xs font-bold tracking-widest uppercase">
        © 2024 ZAY PRODUCTIONS
      </footer>
    </div>
  );
};

export default App;
