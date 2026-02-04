'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    if (!consent) {
      setStatus('error');
      setMessage('Veuillez accepter la politique de confidentialité');
      return;
    }

    // Envoi
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Merci ! Vous êtes inscrit à notre newsletter 🎉');
        setEmail('');
        setConsent(false);
      } else {
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Impossible de vous inscrire pour le moment');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-raleway" id="newsletter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#00A3E0] to-[#40E0D0] text-white text-xs font-semibold rounded-full mb-4">
            <Mail className="w-3 h-3 inline mr-1" />
            Newsletter
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Restez informé des{' '}
            <span className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] text-transparent bg-clip-text">
              nouveautés
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Recevez nos articles, conseils et offres exclusives directement dans votre boîte mail.
            <br />
            Pas de spam, promis !
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ email */}
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Votre adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#00A3E0] focus:outline-none transition-colors text-gray-900"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
            </div>

            {/* Checkbox RGPD */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#00A3E0] border-gray-300 rounded focus:ring-[#00A3E0]"
                disabled={status === 'loading' || status === 'success'}
              />
              <label htmlFor="newsletter-consent" className="text-sm text-gray-600">
                J'accepte de recevoir les communications de NeuroInk et j'ai lu la{' '}
                <a
                  href="/confidentialite"
                  target="_blank"
                  className="text-[#00A3E0] hover:underline"
                >
                  politique de confidentialité
                </a>
                . *
              </label>
            </div>

            {/* Message de statut */}
            {message && (
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{message}</p>
              </div>
            )}

            {/* Bouton */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                status === 'loading' || status === 'success'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] hover:shadow-xl hover:scale-105'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Inscription en cours...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Inscrit avec succès !
                </>
              ) : (
                <>
                  S'inscrire à la newsletter
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Note RGPD */}
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Vos données sont protégées conformément au RGPD
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
