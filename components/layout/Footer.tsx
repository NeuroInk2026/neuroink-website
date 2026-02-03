'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/neuroinkai',
  instagram: 'https://www.instagram.com/neuroink.official',
  linktree: 'https://linktr.ee/neuroink',
};

const LINKEDIN_FRANKLIN = 'https://www.linkedin.com/in/franklin-kamche';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, #6B3FA0 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {!logoError ? (
                <Image src="/images/logo-neuroink.png" alt="NeuroInk" width={180} height={90} className="h-16 w-auto" onError={() => setLogoError(true)} />
              ) : (
                <span className="text-3xl font-bold font-raleway">
                  <span style={{ color: '#00A3E0' }}>NEURO</span>
                  <span style={{ color: '#6B3FA0' }}>INK</span>
                </span>
              )}
            </Link>
            <p className="text-white/70 text-sm mb-6 font-raleway leading-relaxed">
              NeuroInk démocratise l'intelligence artificielle avec des livres et formations accessibles à tous.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(0, 163, 224, 0.1)' }}>
                <Linkedin className="w-5 h-5" style={{ color: '#00A3E0' }} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)' }}>
                <Instagram className="w-5 h-5" style={{ color: '#6B3FA0' }} />
              </a>
              <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 text-lg" style={{ backgroundColor: 'rgba(64, 224, 208, 0.1)', color: '#40E0D0' }}>
                🔗
              </a>
            </div>
          </div>

          {/* Navigation - EN TURQUOISE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway" style={{ color: '#40E0D0' }}>Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Accueil</Link></li>
              <li><Link href="/livres" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Livres</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Blog</Link></li>
              <li><Link href="/formations" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Formations</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Contact</Link></li>
            </ul>
          </div>

          {/* Informations - EN TURQUOISE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway" style={{ color: '#40E0D0' }}>Informations</h3>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">Politique de confidentialité</Link></li>
              <li><Link href="/cgv" className="text-white/70 hover:text-white transition-colors text-sm font-raleway">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-raleway text-center sm:text-left">
            © {currentYear} NeuroInk - Tous droits réservés
          </p>
          <p className="text-white/50 text-sm font-raleway text-center sm:text-right">
            Créé avec ♥ par{' '}
            <a href={LINKEDIN_FRANKLIN} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline" style={{ color: '#40E0D0' }}>
              Franklin KAMCHE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
