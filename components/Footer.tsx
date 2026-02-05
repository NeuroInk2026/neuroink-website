import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F0D15] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-neuroink_png.png"
                alt="NeuroInk"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-white/70 mb-4 font-raleway max-w-md">
              NeuroInk démocratise l&apos;intelligence artificielle avec des contenus accessibles à tous.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/neuroinkai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/neuroink.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 font-raleway">Navigation</h3>
            <ul className="space-y-2 font-raleway">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/livres" className="text-white/70 hover:text-white transition-colors">
                  Livres
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-white/70 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4 font-raleway">Légal</h3>
            <ul className="space-y-2 font-raleway">
              <li>
                <Link href="/mentions-legales" className="text-white/70 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-white/70 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-white/70 hover:text-white transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 text-sm font-raleway">
          <p>© {new Date().getFullYear()} NeuroInk. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
