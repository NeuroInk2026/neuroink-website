'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Livres', href: '/livres' },
    { name: 'Blog', href: '/blog' },
    { name: 'Formations', href: '/formations' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ],
  social: [
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
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0D15] text-white font-raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-neuroink.png"
                alt="NeuroInk"
                width={120}
                height={120}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Démocratiser l'intelligence artificielle auprès du public francophone
              à travers des livres clairs, progressifs et accessibles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NeuroInk - Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
