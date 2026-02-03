'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Sparkles, Shield } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email) {
      setErrorMessage('Veuillez entrer votre adresse email');
      setStatus('error');
      return;
    }
    
    if (!rgpdConsent) {
      setErrorMessage('Veuillez accepter la politique de confidentialité');
      setStatus('error');
      return;
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Veuillez entrer une adresse email valide');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Intégration Mailchimp via API route
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, rgpdConsent }),
      // });
      
      // Simulation pour la démo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setEmail('');
      setRgpdConsent(false);
      
      // Reset après 5 secondes
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      {/* Fond décoratif */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6B3FA0 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#00A3E0' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 font-raleway"
            style={{ backgroundColor: 'rgba(0, 163, 224, 0.1)', color: '#00A3E0' }}
          >
            <Mail className="w-4 h-4" />
            Newsletter
          </span>

          {/* Titre */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
            Restez informé des{' '}
            <span style={{ color: '#6B3FA0' }}>nouveautés</span>
          </h2>

          {/* Sous-titre */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-raleway">
            Recevez nos articles, conseils et offres exclusives directement dans votre boîte mail. 
            Pas de spam, promis !
          </p>

          {/* Formulaire */}
          <div 
            className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl"
            style={{ backgroundColor: '#ffffff' }}
          >
            {status === 'success' ? (
              /* Message de succès */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(64, 224, 208, 0.15)' }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: '#40E0D0' }} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-raleway" style={{ color: '#0F0D15' }}>
                  Inscription réussie !
                </h3>
                <p className="text-gray-600 font-raleway">
                  Merci ! Vous recevrez bientôt nos prochaines actualités.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ email */}
                <div className="relative">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail 
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Votre adresse email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none transition-all duration-300 font-raleway text-gray-800 placeholder:text-gray-400"
                      style={{ 
                        borderColor: status === 'error' ? '#ef4444' : undefined,
                      }}
                      disabled={status === 'loading'}
                      aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                    />
                  </div>
                </div>

                {/* Checkbox RGPD */}
                <div className="flex items-start gap-3 text-left">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="rgpd-consent"
                      checked={rgpdConsent}
                      onChange={(e) => {
                        setRgpdConsent(e.target.checked);
                        if (status === 'error') setStatus('idle');
                      }}
                      className="sr-only peer"
                      disabled={status === 'loading'}
                    />
                    <label
                      htmlFor="rgpd-consent"
                      className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer flex items-center justify-center transition-all duration-200 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-offset-2"
                      style={{ 
                        backgroundColor: rgpdConsent ? '#6B3FA0' : 'transparent',
                      }}
                    >
                      {rgpdConsent && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </label>
                  </div>
                  <label htmlFor="rgpd-consent" className="text-sm text-gray-600 font-raleway cursor-pointer">
                    J'accepte de recevoir les communications de NeuroInk et j'ai lu la{' '}
                    <a 
                      href="/confidentialite" 
                      className="underline hover:no-underline transition-all"
                      style={{ color: '#6B3FA0' }}
                    >
                      politique de confidentialité
                    </a>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Message d'erreur */}
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="newsletter-error"
                    className="flex items-center gap-2 text-red-500 text-sm font-raleway"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed font-raleway flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: '#6B3FA0' }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Inscription en cours...
                    </>
                  ) : (
                    <>
                      S'inscrire à la newsletter
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Note RGPD */}
                <p className="text-xs text-gray-500 font-raleway flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  Vos données sont protégées conformément au RGPD
                </p>
              </form>
            )}
          </div>

          {/* Avantages */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Sparkles, text: 'Contenus exclusifs' },
              { icon: Mail, text: 'Pas de spam' },
              { icon: Shield, text: 'Désinscription facile' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-2 text-gray-500 text-sm font-raleway"
                >
                  <Icon className="w-4 h-4" style={{ color: '#40E0D0' }} />
                  {item.text}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
