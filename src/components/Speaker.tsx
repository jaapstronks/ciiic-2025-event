import React from 'react';

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
      marginBottom: '1rem',
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
      }}
    />
    <div>
      <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        {name}
      </div>
      <div style={{ color: '#555', fontSize: '0.95rem' }}>
        {title}
      </div>
    </div>
  </div>
);

export default Speaker;
