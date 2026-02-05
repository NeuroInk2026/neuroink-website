'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle, Linkedin, Instagram, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    rgpd: false
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      alert('Veuillez accepter la politique de confidentialité');
      return;
    }
    
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: 'general', message: '', rgpd: false });
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">Contactez-nous</h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Une question ? Une suggestion ? Un partenariat ? Écrivez-nous !
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 font-raleway flex items-center gap-2" style={{ color: '#0F0D15' }}>
                  <MessageCircle className="w-6 h-6" style={{ color: '#6B3FA0' }} />
                  Envoyez-nous un message
                </h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#40E0D0' }} />
                    <h3 className="text-xl font-bold mb-2 font-raleway" style={{ color: '#40E0D0' }}>Message envoyé !</h3>
                    <p className="text-gray-600 font-raleway">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : status === 'error' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-3xl">⚠️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-raleway text-red-600">Erreur d'envoi</h3>
                    <p className="text-gray-600 font-raleway mb-4">Une erreur s'est produite. Veuillez réessayer.</p>
                    <button onClick={() => setStatus('idle')} className="px-6 py-2 rounded-full font-raleway text-white" style={{ backgroundColor: '#6B3FA0' }}>
                      Réessayer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">Nom complet *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-raleway" placeholder="Votre nom" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">Email *</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-raleway" placeholder="votre@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">Sujet *</label>
                      <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-raleway">
                        <option value="general">Question générale</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="presse">Presse</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-raleway">Message *</label>
                      <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={5} maxLength={2000} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-raleway resize-none" placeholder="Votre message (max 2000 caractères)"></textarea>
                      <p className="text-xs text-gray-500 mt-1 font-raleway text-right">{formData.message.length} / 2000</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="rgpd" checked={formData.rgpd} onChange={e => setFormData({...formData, rgpd: e.target.checked})} className="mt-1" />
                      <label htmlFor="rgpd" className="text-sm text-gray-600 font-raleway">
                        J'accepte que mes données soient utilisées pour traiter ma demande conformément à la <a href="/confidentialite" className="underline" style={{ color: '#6B3FA0' }}>politique de confidentialité</a>
                      </label>
                    </div>

                    <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl disabled:opacity-50 font-raleway" style={{ backgroundColor: '#6B3FA0' }}>
                      {status === 'sending' ? 'Envoi en cours...' : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 font-raleway flex items-center gap-2" style={{ color: '#0F0D15' }}>
                  <Mail className="w-5 h-5" style={{ color: '#6B3FA0' }} />
                  Email direct
                </h3>
                <a href="mailto:neuroink.official@gmail.com" className="text-lg font-medium font-raleway hover:underline" style={{ color: '#6B3FA0' }}>
                  neuroink.official@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>Suivez-nous</h3>
                <div className="space-y-3">
                  <a href="https://www.linkedin.com/company/neuroinkai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-all group">
                    <Linkedin className="w-6 h-6" style={{ color: '#6B3FA0' }} />
                    <div>
                      <p className="font-medium font-raleway group-hover:text-purple-600">LinkedIn</p>
                      <p className="text-sm text-gray-500 font-raleway">@neuroinkai</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
                  </a>

                  <a href="https://www.instagram.com/neuroink.official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-all group">
                    <Instagram className="w-6 h-6" style={{ color: '#6B3FA0' }} />
                    <div>
                      <p className="font-medium font-raleway group-hover:text-purple-600">Instagram</p>
                      <p className="text-sm text-gray-500 font-raleway">@neuroink.official</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
                  </a>

                  <a href="https://linktr.ee/neuroink" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-all group">
                    <div className="w-6 h-6 flex items-center justify-center font-bold" style={{ color: '#6B3FA0' }}>🔗</div>
                    <div>
                      <p className="font-medium font-raleway group-hover:text-purple-600">Linktree</p>
                      <p className="text-sm text-gray-500 font-raleway">Tous nos liens</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
