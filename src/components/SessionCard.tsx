import { Link } from 'react-router-dom';

interface SessionCardProps {
  id: string;
  title: string;
  featuredImage: string;
}

export default function SessionCard({
  id,
  title,
  featuredImage,
}: SessionCardProps) {
  return (
    <Link to={`/sessions/${id}`} className="session-card">
      <div className="session-card-image">
        <img src={featuredImage} alt={title} />
      </div>
      <h2 className="session-card-title">{title}</h2>
    </Link>
  );
}
