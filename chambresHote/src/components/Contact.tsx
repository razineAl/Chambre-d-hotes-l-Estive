import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    room: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Merci pour votre demande ! Nous vous contacterons sous peu.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkin: '',
      checkout: '',
      room: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Contactez-nous</h1>
          <p className="text-xl text-emerald-100">Nous sommes à votre écoute pour organiser votre séjour</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Demande de réservation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-stone-700 mb-2">
                    Arrivée *
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    value={formData.checkin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-stone-700 mb-2">
                    Départ *
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    required
                    value={formData.checkout}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>


              <div className='my-14'>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Dites-nous en plus sur vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition-colors"
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Informations pratiques</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Adresse</h3>
                  <p className="text-stone-600">
                    34 Chemin Chez Coudey - lieu dit plagnes<br />
                    63690 Singles<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Téléphone</h3>
                  <p className="text-stone-600">+33 6 63 81 55 10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Email</h3>
                  <p className="text-stone-600">chambresdhotesestive63@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Horaires</h3>
                  <p className="text-stone-600">
                    Check-in: 16h00 - 19h00<br />
                    Check-out: avant 10h00<br/>
                    Petit dej: 8h00 - 9h30<br />
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden h-64 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.736391329875!2d2.5572482751376495!3d45.575739425991294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f77f7c6a22bdd9%3A0x6e9f363913fba8fd!2s34%20Chem.%20Chez%20Coudey%2C%2063690%20Singles!5e0!3m2!1sfr!2sfr!4v1774480063128!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation de L'Estive"
              />
            </div>

          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
              <h3 className="font-medium text-stone-800 mb-2">Bon à savoir</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Arrivée tardive possible sur demande</li>
                <li>• Parking gratuit sur place</li>
                <li>• Piscine chauffée</li>
                <li>• Chien accepté seulement dans la chambre épervière sans supplément</li>
                <li>• Petit-déjeuner servi de 8h à 9h30</li>
              </ul>
            </div>
      </section>
    </div>
  );
}