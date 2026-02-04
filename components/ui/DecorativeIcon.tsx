interface DecorativeIconProps {
  type: 'brain' | 'network';
  className?: string;
}

export default function DecorativeIcon({ type, className = '' }: DecorativeIconProps) {
  // Cerveau avec circuits - Mission
  if (type === 'brain') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cerveau principal */}
        <path
          d="M100 40C75 40 55 60 55 85C55 95 58 104 63 111C58 118 55 127 55 137C55 157 71 173 91 173C95 173 99 172 103 171C107 172 111 173 115 173C135 173 151 157 151 137C151 127 148 118 143 111C148 104 151 95 151 85C151 60 131 40 106 40H100Z"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          style={{
            animation: 'drawPath 2s ease-in-out forwards',
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
        />
        
        {/* Circuits */}
        <circle cx="80" cy="85" r="8" fill="#00A3E0">
          <animate attributeName="r" from="0" to="8" dur="0.5s" begin="0.5s" fill="freeze" />
        </circle>
        <circle cx="120" cy="85" r="8" fill="#40E0D0">
          <animate attributeName="r" from="0" to="8" dur="0.5s" begin="0.7s" fill="freeze" />
        </circle>
        <circle cx="100" cy="120" r="8" fill="#6B3FA0">
          <animate attributeName="r" from="0" to="8" dur="0.5s" begin="0.9s" fill="freeze" />
        </circle>
        
        {/* Lignes de connexion */}
        <line x1="80" y1="85" x2="120" y2="85" stroke="#00A3E0" strokeWidth="2" opacity="0.5">
          <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="1s" begin="1.1s" fill="freeze" />
        </line>
        <line x1="80" y1="85" x2="100" y2="120" stroke="#6B3FA0" strokeWidth="2" opacity="0.5">
          <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="1s" begin="1.3s" fill="freeze" />
        </line>
        <line x1="120" y1="85" x2="100" y2="120" stroke="#40E0D0" strokeWidth="2" opacity="0.5">
          <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="1s" begin="1.5s" fill="freeze" />
        </line>
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="50%" stopColor="#00A3E0" />
            <stop offset="100%" stopColor="#40E0D0" />
          </linearGradient>
        </defs>
        
        <style>{`
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
    );
  }

  // Réseau neuronal - Vision
  if (type === 'network') {
    const nodes = [
      { cx: 50, cy: 50, delay: 0.2, color: '#6B3FA0' },
      { cx: 150, cy: 50, delay: 0.3, color: '#00A3E0' },
      { cx: 50, cy: 150, delay: 0.4, color: '#40E0D0' },
      { cx: 150, cy: 150, delay: 0.5, color: '#6B3FA0' },
      { cx: 100, cy: 100, delay: 0.6, color: '#00A3E0' },
      { cx: 100, cy: 50, delay: 0.7, color: '#40E0D0' },
      { cx: 50, cy: 100, delay: 0.8, color: '#6B3FA0' },
      { cx: 150, cy: 100, delay: 0.9, color: '#00A3E0' },
      { cx: 100, cy: 150, delay: 1.0, color: '#40E0D0' },
    ];

    const connections = [
      { x1: 50, y1: 50, x2: 100, y2: 100 },
      { x1: 150, y1: 50, x2: 100, y2: 100 },
      { x1: 50, y1: 150, x2: 100, y2: 100 },
      { x1: 150, y1: 150, x2: 100, y2: 100 },
      { x1: 100, y1: 50, x2: 100, y2: 100 },
      { x1: 50, y1: 100, x2: 100, y2: 100 },
      { x1: 150, y1: 100, x2: 100, y2: 100 },
      { x1: 100, y1: 150, x2: 100, y2: 100 },
    ];

    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connexions */}
        {connections.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#gradient2)"
            strokeWidth="2"
            opacity="0.3"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0 200"
              to="200 0"
              dur="1s"
              begin={`${1.2 + i * 0.1}s`}
              fill="freeze"
            />
          </line>
        ))}
        
        {/* Nœuds */}
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill={node.color}
          >
            <animate
              attributeName="r"
              from="0"
              to="6"
              dur="0.4s"
              begin={`${node.delay}s`}
              fill="freeze"
            />
          </circle>
        ))}
        
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="50%" stopColor="#00A3E0" />
            <stop offset="100%" stopColor="#40E0D0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return null;
}
