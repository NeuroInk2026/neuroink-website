'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoNeuroInkProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  showImage?: boolean;
}

const sizeMap = {
  sm: { text: 'text-xl', img: { w: 120, h: 35 } },
  md: { text: 'text-2xl', img: { w: 150, h: 44 } },
  lg: { text: 'text-3xl', img: { w: 180, h: 52 } },
};

export default function LogoNeuroInk({ 
  size = 'md', 
  variant = 'default',
  showImage = true 
}: LogoNeuroInkProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { text, img } = sizeMap[size];

  return (
    <Link href="/" className="flex items-center gap-2 relative" aria-label="NeuroInk - Accueil">
      {/* Image logo - essaie de charger */}
      {showImage && !imgError && (
        <Image
          src="/images/logo-neuroink.png"
          alt="NeuroInk"
          width={img.w}
          height={img.h}
          className={`object-contain transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          priority
          unoptimized
        />
      )}

      {/* Texte logo - TOUJOURS visible si image pas chargée */}
      {(!imgLoaded || imgError) && (
        <span className={`font-raleway font-extrabold tracking-tight ${text}`}>
          <span style={{ color: variant === 'white' ? '#FFFFFF' : '#00A3E0' }}>
            NEURO
          </span>
          <span style={{ color: variant === 'white' ? '#E0E0E0' : '#6B3FA0' }}>
            INK
          </span>
        </span>
      )}
    </Link>
  );
}
