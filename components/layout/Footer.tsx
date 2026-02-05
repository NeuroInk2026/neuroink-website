'use client';

import Link from 'next/link';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import LogoNeuroInk from '@/components/ui/LogoNeuroInk';

const footerNavLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/livres', label: 'Livres' },
  { href: '/blog', label: 'Blog' },
  { href: '/formations', label: 'Formations' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions legales' },
  { href: '/confidentialite', label: 'Politique de confidentialite' },
  { href: '/cgv', label: 'CGV' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/neuroinkai',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://www.instagram.com/neuroink.official',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://linktr.ee/neuroink',
    label: 'Linktree',
    icon: ExternalLink,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0D15] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Colonne 1 : Logo image uniquement + Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <LogoNeuroInk size="lg" showText={false} />
            </div>
            <p className="text-gray-400 text-sm font-raleway leading-relaxed">
              NeuroInk democratise l&apos;intelligence artificielle a travers
              des livres et des formations clairs, progressifs et accessibles a
              tous.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-raleway font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#40E0D0' }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00A3E0] transition-colors duration-200 text-sm font-raleway"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Legal */}
          <div>
            <h3 className="font-raleway font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#40E0D0' }}>
              Informations legales
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00A3E0] transition-colors duration-200 text-sm font-raleway"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Reseaux sociaux */}
          <div>
            <h3 className="font-raleway font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#40E0D0' }}>
              Suivez-nous
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-[#00A3E0]/20 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#00A3E0] transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-xs font-raleway">
                Contact : neuroink.official@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Separateur */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs font-raleway">
              &copy; 2026 NeuroInk - Tous droits reserves
            </p>
            <p className="text-gray-600 text-xs font-raleway">
              Fait avec passion pour la democratisation de l&apos;IA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
