import { Link } from 'react-router-dom';

interface SessionCardProps {
  id: string;
  title: string;
  featuredImage: string;
  location?: string;
  sessionCode?: string;
}

export default function SessionCard({
  id,
  title,
  featuredImage,
  location,
  sessionCode,
}: SessionCardProps) {
  return (
    <Link to={`/sessions/${id}`} className="session-card">
      <div
        className="session-card-image"
        style={{ position: 'relative' }}
      >
        <img src={featuredImage} alt={title} />
        {location && (
          <div
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
            }}
          >
            {location}
          </div>
        )}
      </div>
      <h2 className="session-card-title">
        {sessionCode && `${sessionCode}: `}
        {title}
      </h2>
    </Link>
  );
}
