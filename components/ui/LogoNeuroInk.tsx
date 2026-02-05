'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoNeuroInkProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  showText?: boolean;
}

const sizeMap = {
  xs: { img: { w: 40, h: 40 }, text: 'text-lg' },
  sm: { img: { w: 50, h: 50 }, text: 'text-xl' },
  md: { img: { w: 60, h: 60 }, text: 'text-2xl' },
  lg: { img: { w: 80, h: 80 }, text: 'text-3xl' },
};

export default function LogoNeuroInk({
  size = 'md',
  variant = 'default',
  showText = true,
}: LogoNeuroInkProps) {
  const [imgError, setImgError] = useState(false);
  const { img, text } = sizeMap[size];

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="NeuroInk - Accueil">
      {/* Image logo */}
      {!imgError ? (
        <Image
          src="/images/logo-neuroink.png"
          alt="NeuroInk"
          width={img.w}
          height={img.h}
          className="object-contain"
          onError={() => setImgError(true)}
          priority
          unoptimized
        />
      ) : showText ? (
        <span className={`font-raleway font-extrabold tracking-tight ${text}`}>
          <span style={{ color: variant === 'white' ? '#FFFFFF' : '#00A3E0' }}>
            NEURO
          </span>
          <span style={{ color: variant === 'white' ? '#E0E0E0' : '#6B3FA0' }}>
            INK
          </span>
        </span>
      ) : null}
    </Link>
  );
}
