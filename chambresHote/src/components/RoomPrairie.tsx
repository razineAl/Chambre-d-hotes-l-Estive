import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Maximize, Wifi, Waves, ShowerHead, Sparkles } from 'lucide-react';
import pfp from '../assets/gentiane2_bis.jpg';
import eperviere from '../assets/orchidee7.jpg';
import orchidee from '../assets/orchidee2.jpg';
import bain from "../assets/sb_gentiane2.jpg"
import bain2 from "../assets/sb_gentiane.jpg"
import gentiane from "../assets/gentiane1.jpg"
import gentiane2 from "../assets/gentiane2.jpg"
import { ImageLightbox } from './ImageLightbox';
import { useState } from 'react';

export function RoomPrairie() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    { icon: Users, label: '2 personnes' },
    { icon: Maximize, label: '28 m²' },
    { icon: Wifi, label: 'WiFi gratuit' },
    { icon: Waves, label: 'Accés piscine' },
    { icon: ShowerHead, label: 'Douche italienne' },
    { icon: Sparkles, label: 'Décoration design' },
  ];

  const openLightbox = (index: number) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
  
    const goToPrevious = () => {
      setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };
  
    const goToNext = () => {
      setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };
  
    const galleryImages = [
      {
        src: gentiane,
        alt: 'Détail rustique'
      },
      {
        src: bain,
        alt: 'Coin lecture'
      },
      {
        src: gentiane2,
        alt: 'Coin lecture'
      }
    ];

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src={pfp}
          alt="Chambre Prairie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Chambre Gentiane</h1>
            <p className="text-xl text-stone-200">Design moderne au cœur de la nature</p>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Élégance contemporaine</h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                La Chambre Prairie incarne l'harmonie parfaite entre design moderne et nature
                environnante. Spacieuse et lumineuse, elle offre un confort optimal avec son
                mobilier contemporain et ses équipements haut de gamme.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                Le lit king-size avec sa literie premium vous promet des nuits de rêve. Les grandes
                baies vitrées donnent sur les prairies fleuries et laissent entrer une lumière
                naturelle exceptionnelle tout au long de la journée.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                L'espace de travail moderne, la machine Nespresso et la salle de bain design avec
                douche à effet pluie font de cette chambre un lieu idéal aussi bien pour les séjours
                de détente que pour les escapades professionnelles au vert.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                  <feature.icon className="h-6 w-6 text-emerald-700" />
                  <span className="text-stone-800">{feature.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-serif text-stone-800 mb-4">Salle de bain</h3>
              <div className="rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src={bain}
                  alt="Salle de bain Chambre Prairie"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Booking */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white border border-stone-200 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="text-4xl font-serif text-stone-800 mb-2">75€</div>
                <div className="text-stone-600">par nuit (2 personnes) </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border-t border-stone-200 pt-4">
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Inclus dans le tarif</h3>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Petit-déjeuner gourmand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>WiFi haut débit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Parking privé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Accès à la piscine chauffée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Accès au jardin</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-lg transition-colors"
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-serif text-stone-800 mb-8">Autres photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
      
            {/* Lightbox */}
            {lightboxOpen && (
              <ImageLightbox
                images={galleryImages}
                currentIndex={currentImageIndex}
                onClose={closeLightbox}
                onPrevious={goToPrevious}
                onNext={goToNext}
              />
            )}

      {/* Other Rooms */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-stone-800 mb-8">Nos autres chambres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/chambre-eperviere"
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={orchidee}
                  alt="Chambre eperviere"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-stone-800 mb-2">Chambre épervière</h3>
                <p className="text-stone-600">Vue panoramique sur les sommets alpins</p>
              </div>
            </Link>

            <Link
              to="/chambre-orchidee"
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={eperviere}
                  alt="Chambre Orchidée"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-stone-800 mb-2">Chambre Orchidée</h3>
                <p className="text-stone-600">Ambiance chaleureuse avec vue sur le jardin</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}