import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Mountain } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Chambre épervière', path: '/chambre-eperviere' },
    { name: 'Chambre Gentiane', path: '/chambre-gentiane' },
    { name: 'Chambre Orchidée', path: '/chambre-orchidee' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-emerald-700" />
              <div>
                <div className="font-serif text-2xl text-stone-800">L'Estive</div>
                <div className="text-xs text-stone-600">Chambres d'Hôtes</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-emerald-700 font-medium'
                      : 'text-stone-600 hover:text-emerald-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-emerald-700 font-medium bg-emerald-50'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="h-6 w-6 text-emerald-500" />
                <span className="font-serif text-xl text-white">L'Estive</span>
              </div>
              <p className="text-sm">
                Chambres d'hôtes de charme au cœur des montagnes.
                Une expérience authentique et chaleureuse.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-emerald-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>34 Chemin Chez Coudey - lieu dit plagnes</li>
                <li>63690 Singles, France</li>
                <li>Tél: +33 6 63 81 55 10</li>
                <li>chambresdhotesestive63@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm">
            <p>© 2026 Chambres d'Hôtes L'Estive. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
