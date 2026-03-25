import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Wifi, Coffee, ParkingSquare, Trees, Mountain, ChefHat, Waves, Utensils } from 'lucide-react';
import piscine from '../assets/piscine.jpg';
import maison from "../assets/maison.jpg";
import maison2 from "../assets/maison2.jpg";
import principal from "../assets/principal.jpg";
import eperviere from '../assets/eperviere3.jpg';
import gentiane from '../assets/gentiane1.jpg';
import orchidee from '../assets/orchidee1.jpg';
import cuisine from '../assets/cuisine.jpg';

export function Home() {
  const rooms = [
    {
      name: 'Chambre Orchidée',
      description: 'Vue panoramique sur les sommets alpins',
      image: eperviere,
      path: '/chambre-orchidee',
    },
    {
      name: 'Chambre Gentiane',
      description: 'Ambiance chaleureuse avec vue sur le jardin',
      image:gentiane,
      path: '/chambre-gentiane',
    },
    {
      name: 'Chambre épervière',
      description: 'Design moderne au cœur de la nature',
      image:orchidee,
      path: '/chambre-eperviere',
    },
  ];

  const amenities = [
    { icon: Wifi, label: 'WiFi Gratuit' },
    { icon: Coffee, label: 'Petit-déjeuner' },
    { icon: ParkingSquare, label: 'Parking privé' },
    { icon: Waves, label: 'Piscine chauffée' },
    { icon: Trees, label: 'Jardin' },
    { icon: Mountain, label: 'Vue montagne' },
    { icon: Utensils, label: 'Cuisine équipée' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638893054175-a5b0bf5837dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFscGluZXxlbnwxfHx8fDE3NzE3NzAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Paysage montagnard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-serif text-5xl md:text-7xl mb-4">Chambres d'Hôtes L'Estive</h1>
            <p className="text-xl md:text-2xl mb-8 text-stone-200">
              Un havre de paix au cœur des montagnes
            </p>
            <Link
              to="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Réserver votre séjour
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-stone-800 mb-6">Bienvenue à L'Estive</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Nichées au cœur des Alpes, nos chambres d'hôtes vous offrent une expérience unique
            alliant confort moderne et charme authentique. Profitez de la beauté des montagnes,
            de l'air pur et de notre hospitalité chaleureuse pour un séjour inoubliable.
          </p>
        </div>
      </section>


      {/* Rooms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-stone-800 text-center mb-12">Nos Chambres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link
                key={room.path}
                to={room.path}
                className="group bg-stone-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-stone-800 mb-2">{room.name}</h3>
                  <p className="text-stone-600">{room.description}</p>
                  <span className="inline-block mt-4 text-emerald-600 group-hover:text-emerald-700">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl text-stone-800 text-center mb-12">Services & Équipements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <amenity.icon className="h-8 w-8 text-emerald-700" />
              </div>
              <p className="text-sm text-stone-700">{amenity.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pool Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl text-stone-800 mb-6">Notre Piscine Chauffée</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                Profitez de notre magnifique piscine chauffée avec vue imprenable sur les montagnes.
                Ouverte de mai à septembre, elle est l'endroit idéal pour vous détendre après une
                journée de randonnée.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                Entourée de transats confortables et d'un espace solarium aménagé, la piscine vous
                offre un moment de relaxation dans un cadre exceptionnel. Des serviettes de piscine
                sont mises à disposition gratuitement.
              </p>
              <ul className="space-y-2 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Piscine chauffée à 28°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Transats et parasols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Serviettes de piscine fournies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Vue panoramique sur les montagnes</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={piscine}
                  alt="Piscine chauffée avec vue montagne"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Outdoor Kitchen Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={cuisine}
                alt="Cuisine extérieure équipée"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">Espace petit déjeuner</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-4">
              Commencez vos journées en douceur dans notre espace petit-déjeuner dédié, 
              niché au cœur du jardin avec une vue imprenable sur les montagnes. 
              C'est l'endroit idéal pour savourer un café frais et un croissant croustillant 
              tout en profitant des premiers rayons du soleil alpin.

            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-4"> 
              Une table accueillante, entourée par la nature, vous invite à prendre le temps de vous 
              réveiller paisiblement avant de partir à l'aventure. Que ce soit dans la fraîcheur matinale 
              ou sous la douceur des premières heures, c'est l'endroit parfait pour faire le plein d'énergie 
              en toute sérénité.

            </p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Ustensiles et vaisselle fournis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Grande table conviviale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Vue panoramique sur les montagnes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src={maison2}
          alt="Maison"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Prêt pour l'évasion ?</h2>
            <p className="text-xl mb-8">Contactez-nous pour réserver votre séjour</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-stone-800 hover:bg-stone-100 px-8 py-3 rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}