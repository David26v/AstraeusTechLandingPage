export const Logo = ({ size = "w-10 h-10" }) => {
    return (
      <div className={`${size} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
  
          {/* A letter with gradient */}
          <path
            d="M15 85 L35 15 L50 15 L70 85 L55 85 L50 65 L35 65 L30 85 Z M38 50 L47 50 L42.5 30 Z"
            fill="url(#logoGradient)"
          />
  
          {/* T letter with gradient */}
          <path
            d="M45 15 L85 15 L85 30 L72 30 L72 85 L57 85 L57 30 L45 30 Z"
            fill="url(#logoGradient2)"
          />
  
          {/* Decorative star */}
          <circle
            cx="80"
            cy="20"
            r="3"
            fill="#fbbf24"
            className="animate-pulse"
          />
        </svg>
      </div>
    );
  };
  