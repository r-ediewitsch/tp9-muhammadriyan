import { useState } from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (category) => {
    setActiveTab(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">Riyan Satrio</span>
        </div>

        <nav className="hidden md:block ml-auto">
          <ul className="flex space-x-12">
            {['Home', 'Profile', 'Contact', 'About Me'].map((category) => (
              <li key={category}>
                <a
                  href={`#${category}`}
                  className={`font-medium hover:text-white transition-colors ${
                    activeTab === category ? 'text-white' : 'text-blue-100'
                  }`}
                  onClick={() => handleNavClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden flex items-center p-1 bg-blue-700 rounded-lg" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg overflow-hidden">
          <nav className="container mx-auto px-4 py-2">
            <ul className="space-y-3">
              {['home', 'profile', 'contact', 'About Me'].map((category) => (
                <li key={category} className="border-b border-gray-100 pb-2">
                  <a
                    href={`#${category}`}
                    className={`block py-2 font-medium hover:text-black ${
                      activeTab === category ? 'text-black' : 'text-gray-700'
                    }`}
                    onClick={() => handleNavClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}