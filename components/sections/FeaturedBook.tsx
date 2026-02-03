'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Download, BookOpen, Star, Check, Smartphone, GraduationCap } from 'lucide-react';

const bookFeatures = [
  "Comment les machines apprennent vraiment - sans mathématiques complexes",
  "Les applications concrètes : santé, éducation, transports, créativité",
  "Les enjeux éthiques : biais algorithmiques, vie privée, emplois du futur",
  "Comment vous préparer professionnellement à l'ère de l'IA",
  "Votre projet personnel avec l'IA : outils, ressources, plan d'action",
];

// Liens de vente - TOUS LES LIENS
const AMAZON_PAPIER = "https://www.amazon.fr/LOdyss%C3%A9e-lIA-jours-lint%C3%A9lligence-artificielle/dp/2387132181/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1252RDQQBDUA5&dib=eyJ2IjoiMSJ9.AgZ-KjKbCqebj-OkCiNmKw.A64H6Q_3IG__jYrNriE2P-iUMgiXcVAOWVuIcYyAPaY&dib_tag=se&keywords=L%27Odyss%C3%A9e+de+l%27IA+en+30+jours&qid=1766146359&s=books&sprefix=l%27odyss%C3%A9e+de+l%27ia+en+30+jours%2Cstripbooks%2C127&sr=1-1";
const AMAZON_EBOOK = "https://www.amazon.fr/-/en/Franklin-KAMCHE-ebook/dp/B0GCKWK3YL/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.UYYmzETBgKLpPQtQrQBFmzTp-Rl6KZhaBRC18juye28.Ra6Vx0u31ESWFWPVJohc9FfbKJXf40v_tdliKgyDTPE&qid=1766865210&sr=1-1";
const CULTURA = "https://www.cultura.com/p-l-odyssee-de-l-ia-en-30-jours-apprendre-l-intelligence-artificielle-pas-a-pas-maitriser-chatgpt-machine-learning-and-ia-generative-sans-prerequis-9782387132185.html";
const FNAC = "https://www.fnac.com/a22464504/Franklin-Kamche-L-Odyssee-de-l-IA-en-30-jours-Apprendre-l-intelligence-artificielle-pas-a-pas";
const PUBLISHROOM = "https://www.publishroom.com/pratique/1818-54175-lodyssee-de-lia-en-30-jours-apprendre-lintelligence-artificielle-pas-a-pas.html#/543-version-papier";

export default function FeaturedBook() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, #6B3FA0 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)', color: '#6B3FA0' }}>
            <Star className="w-4 h-4" />
            Livre vedette
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-4 rounded-2xl blur-2xl opacity-30" style={{ backgroundColor: '#6B3FA0' }} />
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1" style={{ boxShadow: '0 25px 50px -12px rgba(107, 63, 160, 0.4)' }}>
                  {!imageError ? (
                    <Image src="/images/couverture-odyssee-ia.jpg" alt="L'Odyssée de l'IA en 30 jours - Couverture" width={400} height={600} className="w-full h-auto" priority onError={() => setImageError(true)} />
                  ) : (
                    <div className="w-full aspect-[2/3] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}>
                      <div className="text-center text-white p-8">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-xl font-bold font-raleway">L'Odyssée de l'IA</p>
                        <p className="text-sm opacity-80 font-raleway">en 30 jours</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* Badge CNAM - HAUT DROITE (priorité visuelle) */}
                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-full font-semibold text-white text-xs sm:text-sm shadow-lg font-raleway flex items-center gap-1.5" style={{ backgroundColor: '#6B3FA0' }}>
                  <GraduationCap className="w-4 h-4" />
                  <span className="hidden sm:inline">Acquis par le Conservatoire National des Arts et Métiers</span>
                  <span className="sm:hidden">Acquis par le CNAM</span>
                </div>
                {/* Badge Disponible - BAS DROITE */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full font-semibold text-white text-sm shadow-lg font-raleway flex items-center gap-2" style={{ backgroundColor: '#40E0D0' }}>
                  <Check className="w-4 h-4" />
                  Disponible
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
                L'Odyssée de l'IA en 30 jours : Apprendre l'intelligence artificielle pas à pas
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-raleway">
                Maîtriser ChatGPT, Machine Learning et IA générative sans prérequis
              </p>
            </div>

            {/* Badge CNAM texte - sous le titre */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-raleway"
                style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)', color: '#6B3FA0' }}
              >
                <GraduationCap className="w-4 h-4" />
                Recommandé et acquis par la bibliothèque du CNAM Paris
              </span>
            </motion.div>

            <div className="p-5 rounded-xl border-l-4" style={{ backgroundColor: 'rgba(107, 63, 160, 0.05)', borderLeftColor: '#6B3FA0' }}>
              <p className="text-lg italic text-gray-700 font-raleway leading-relaxed">
                "Et si 30 jours suffisaient pour comprendre la révolution qui transforme notre monde ?"
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed font-raleway">
              Ce livre vous emmène dans une odyssée fascinante au cœur de l'IA. Chaque jour, un chapitre. Chaque chapitre, une découverte. Sans jargon technique. Sans prérequis.
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 font-raleway flex items-center gap-2">
                <span style={{ color: '#6B3FA0' }}>✦</span>
                Ce que vous découvrirez
              </h3>
              <ul className="space-y-2.5">
                {bookFeatures.map((feature, index) => (
                  <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.1 }} className="flex items-start gap-3 text-gray-600 font-raleway">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#40E0D0' }} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 py-4 border-y border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-raleway">
                <BookOpen className="w-4 h-4" style={{ color: '#00A3E0' }} />
                512 pages
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-raleway">
                <span className="font-medium">ISBN:</span> 978-2-38713-218-5
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-3xl font-bold font-raleway" style={{ color: '#6B3FA0' }}>39,90 €</p>
                  <p className="text-sm text-gray-500 font-raleway">Version papier</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold font-raleway" style={{ color: '#00A3E0' }}>19,90 €</p>
                  <p className="text-sm text-gray-500 font-raleway">Version ebook</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={AMAZON_PAPIER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 font-raleway group" style={{ backgroundColor: '#6B3FA0' }}>
                    <ShoppingCart className="w-5 h-5" />
                    Commander (papier)
                  </a>
                  <a href={AMAZON_EBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 hover:shadow-lg font-raleway group" style={{ borderColor: '#00A3E0', color: '#00A3E0' }}>
                    <Smartphone className="w-5 h-5" />
                    Commander (ebook)
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-500 font-raleway mb-3">Également disponible sur :</p>
                  <div className="flex flex-wrap gap-2">
                    <a href={FNAC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Fnac</a>
                    <a href={CULTURA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Cultura</a>
                    <a href={PUBLISHROOM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Publishroom</a>
                  </div>
                </div>
              </div>

              <a href="/extrait-odyssee-ia.pdf" download="extrait-odyssee-ia.pdf" className="inline-flex items-center gap-2 text-sm font-raleway transition-colors hover:underline" style={{ color: '#6B3FA0' }}>
                <Download className="w-4 h-4" />
                Télécharger un extrait gratuit (PDF)
              </a>
            </div>

            <div className="p-4 rounded-xl text-sm text-gray-600 font-raleway" style={{ backgroundColor: 'rgba(0, 163, 224, 0.08)' }}>
              <strong className="font-semibold" style={{ color: '#00A3E0' }}>Pour qui ?</strong>
              {' '}Étudiants, professionnels, entrepreneurs, enseignants ou simplement curieux. Aucun prérequis technique nécessaire.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
