'use client';

import { motion } from 'framer-motion';

interface DecorativeIconProps {
  type: 'brain' | 'network' | 'globe';
  className?: string;
}

export default function DecorativeIcon({ type, className = '' }: DecorativeIconProps) {
  // Cerveau avec circuits - Mission
  if (type === 'brain') {
    return (
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cerveau principal */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          d="M100 40C75 40 55 60 55 85C55 95 58 104 63 111C58 118 55 127 55 137C55 157 71 173 91 173C95 173 99 172 103 171C107 172 111 173 115 173C135 173 151 157 151 137C151 127 148 118 143 111C148 104 151 95 151 85C151 60 131 40 106 40H100Z"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Circuits */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          cx="80"
          cy="85"
          r="8"
          fill="#00A3E0"
        />
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          cx="120"
          cy="85"
          r="8"
          fill="#40E0D0"
        />
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          cx="100"
          cy="120"
          r="8"
          fill="#6B3FA0"
        />
        
        {/* Lignes de connexion */}
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          x1="80"
          y1="85"
          x2="120"
          y2="85"
          stroke="#00A3E0"
          strokeWidth="2"
          opacity="0.5"
        />
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
          x1="80"
          y1="85"
          x2="100"
          y2="120"
          stroke="#6B3FA0"
          strokeWidth="2"
          opacity="0.5"
        />
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          x1="120"
          y1="85"
          x2="100"
          y2="120"
          stroke="#40E0D0"
          strokeWidth="2"
          opacity="0.5"
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="50%" stopColor="#00A3E0" />
            <stop offset="100%" stopColor="#40E0D0" />
          </linearGradient>
        </defs>
      </motion.svg>
    );
  }

  // Réseau neuronal - Vision
  if (type === 'network') {
    return (
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nœuds du réseau */}
        {[
          { cx: 50, cy: 50, delay: 0.2 },
          { cx: 150, cy: 50, delay: 0.3 },
          { cx: 50, cy: 150, delay: 0.4 },
          { cx: 150, cy: 150, delay: 0.5 },
          { cx: 100, cy: 100, delay: 0.6 },
          { cx: 100, cy: 50, delay: 0.7 },
          { cx: 50, cy: 100, delay: 0.8 },
          { cx: 150, cy: 100, delay: 0.9 },
          { cx: 100, cy: 150, delay: 1.0 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
            viewport={{ once: true }}
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill={i % 3 === 0 ? '#6B3FA0' : i % 3 === 1 ? '#00A3E0' : '#40E0D0'}
          />
        ))}
        
        {/* Connexions */}
        {[
          { x1: 50, y1: 50, x2: 100, y2: 100 },
          { x1: 150, y1: 50, x2: 100, y2: 100 },
          { x1: 50, y1: 150, x2: 100, y2: 100 },
          { x1: 150, y1: 150, x2: 100, y2: 100 },
          { x1: 100, y1: 50, x2: 100, y2: 100 },
          { x1: 50, y1: 100, x2: 100, y2: 100 },
          { x1: 150, y1: 100, x2: 100, y2: 100 },
          { x1: 100, y1: 150, x2: 100, y2: 100 },
        ].map((line, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
            viewport={{ once: true }}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
        ))}
        
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="50%" stopColor="#00A3E0" />
            <stop offset="100%" stopColor="#40E0D0" />
          </linearGradient>
        </defs>
      </motion.svg>
    );
  }

  // Globe connecté - Alternatif
  if (type === 'globe') {
    return (
      <motion.svg
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Globe */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          cx="100"
          cy="100"
          r="60"
          stroke="url(#gradient3)"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Méridiens */}
        <motion.ellipse
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          cx="100"
          cy="100"
          rx="30"
          ry="60"
          stroke="#00A3E0"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <motion.ellipse
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          viewport={{ once: true }}
          cx="100"
          cy="100"
          rx="60"
          ry="30"
          stroke="#40E0D0"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        
        {/* Points de connexion */}
        {[
          { cx: 100, cy: 40, delay: 1 },
          { cx: 130, cy: 70, delay: 1.1 },
          { cx: 130, cy: 130, delay: 1.2 },
          { cx: 100, cy: 160, delay: 1.3 },
          { cx: 70, cy: 130, delay: 1.4 },
          { cx: 70, cy: 70, delay: 1.5 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: point.delay }}
            viewport={{ once: true }}
            cx={point.cx}
            cy={point.cy}
            r="4"
            fill="#6B3FA0"
          />
        ))}
        
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="100%" stopColor="#40E0D0" />
          </linearGradient>
        </defs>
      </motion.svg>
    );
  }

  return null;
}
