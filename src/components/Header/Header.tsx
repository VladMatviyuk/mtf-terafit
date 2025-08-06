import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLink = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Запрет скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center p-6 bg-black relative z-50">
      {/* Логотип */}
      <div className="text-2xl font-bold text-white">
        <span className="text-red-600">Т</span>ерафит
      </div>

      {/* Бургер-иконка */}
      <button
        className="md:hidden z-50 text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
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

      {/* Фон с плавным затемнением (overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-30 animate-fade-in"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Мобильное меню — выезжающее справа */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black z-40 transform transition-all duration-500 ease-out shadow-2xl ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuClick}
      >
        {/* Контент меню */}
        <div className="flex flex-col p-8 h-full pt-24">
          <div className="space-y-10">
            {[
              { href: "#features", label: "Преимущества" },
              { href: "#modular", label: "Модульность" },
              { href: "#gallery", label: "Галерея" },
              { href: "#docs", label: "Документы" },
              { href: "#contact", label: "Контакты" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-white text-xl font-medium hover:text-red-500 transition-all duration-500 delay-${
                  100 + index * 50
                } block transform translate-y-2 opacity-0 animate-slide-in`}
                style={{
                  animationDelay: `${100 + index * 50}ms`,
                }}
                onClick={handleClickLink}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Десктопное меню */}
      <div className="hidden md:flex space-x-8 text-white">
        <a
          href="#features"
          className="hover:text-red-500 transition-colors duration-300"
        >
          Преимущества
        </a>
        <a
          href="#modular"
          className="hover:text-red-500 transition-colors duration-300"
        >
          Модульность
        </a>
        <a
          href="#gallery"
          className="hover:text-red-500 transition-colors duration-300"
        >
          Галерея
        </a>
        <a
          href="#docs"
          className="hover:text-red-500 transition-colors duration-300"
        >
          Документация
        </a>
        <a
          href="#contact"
          className="hover:text-red-500 transition-colors duration-300"
        >
          Контакты
        </a>
      </div>
    </nav>
  );
};
