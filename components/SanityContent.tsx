'use client';

import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-10 mb-4 font-raleway" style={{ color: '#0F0D15' }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 font-raleway" style={{ color: '#6B3FA0' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-6 mb-3 font-raleway" style={{ color: '#0F0D15' }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4 font-raleway">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 pl-4 my-4 italic text-gray-600 font-raleway"
        style={{ borderLeftColor: '#40E0D0' }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold" style={{ color: '#0F0D15' }}>
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline transition-colors"
        style={{ color: '#6B3FA0' }}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 font-raleway">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 font-raleway">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-6 rounded-xl overflow-hidden">
          <Image
            src={value.asset.url || ''}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center font-raleway">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

interface SanityContentProps {
  content: any;
}

export default function SanityContent({ content }: SanityContentProps) {
  if (!content) return null;
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
