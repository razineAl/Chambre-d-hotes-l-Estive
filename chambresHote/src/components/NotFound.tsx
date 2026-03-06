import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-stone-800 mb-4">404</h1>
        <h2 className="text-2xl text-stone-700 mb-4">Page non trouvée</h2>
        <p className="text-stone-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Home className="h-5 w-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
