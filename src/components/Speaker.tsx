import React from 'react';
import './Speaker.css';

interface SpeakerProps {
  name: string;
  image?: string;
  title: string;
}

const defaultImage = '/images/ramaers.jpeg';

const Speaker: React.FC<SpeakerProps> = ({
  name,
  image = defaultImage,
  title,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.5rem',
      width: '100%',
    }}
  >
    <img
      src={image}
      alt={name}
      style={{
        width: 64,
        height: 64,
        objectFit: 'cover',
        borderRadius: 8,
        background: '#eee',
        flexShrink: 0,
      }}
    />
    <div>
      <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        {name}
      </div>
      <div
        style={{
          color: '#555',
          fontSize: '0.95rem',
          fontFamily: 'JetBrains Mono, monospace',
          marginTop: 2,
        }}
      >
        {title}
      </div>
    </div>
  </div>
);

// Create a container component for speakers
export const SpeakerContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="speaker-container">{children}</div>
);

export default Speaker;
