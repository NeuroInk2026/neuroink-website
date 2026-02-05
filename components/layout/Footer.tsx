'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/neuroinkai',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/neuroink.official',
      icon: Instagram,
    },
    {
      name: 'Linktree',
      href: 'https://linktr.ee/neuroink',
      icon: ExternalLink,
    },
  ];

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Livres', href: '/livres' },
    { name: 'Blog', href: '/blog' },
    { name: 'Formations', href: '/formations' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0F0D15] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo et description - LOGO 200px */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo-neuroink.png"
                alt="NeuroInk"
                width={200}
                height={200}
                className="w-[200px] h-auto"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              NeuroInk démocratise l'intelligence artificielle à travers des livres et des formations clairs, progressifs et accessibles à tous.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#40E0D0] font-bold text-lg mb-6 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#40E0D0] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-[#40E0D0] font-bold text-lg mb-6 uppercase tracking-wide">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#00A3E0] p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} NeuroInk - Tous droits réservés
            </p>

            {/* Liens légaux */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#40E0D0] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
