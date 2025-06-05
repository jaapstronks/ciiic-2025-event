import { useState, useEffect } from 'react';
import SessionCard from '../components/SessionCard';

interface Session {
  id: string;
  title: string;
  content: string;
  featuredImage: string;
}

// Import all MDX files from the content directory
const markdownFiles = import.meta.glob<string>(
  '../content/*.mdx',
  {
    query: '?raw',
    import: 'default',
  }
);

const defaultImage =
  '/images/03_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0904.jpeg';

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const loadedSessions: Session[] = [];

        // Load each markdown file
        for (const [path, loadFile] of Object.entries(
          markdownFiles
        )) {
          const content = await loadFile();
          const titleMatch = content.match(
            /title:\s*['"](.+?)['"]/
          );
          const imageMatch = content.match(
            /featuredImage:\s*['"](.+?)['"]/
          );
          const id =
            path.split('/').pop()?.replace('.mdx', '') ||
            '';

          loadedSessions.push({
            id,
            title: titleMatch
              ? titleMatch[1]
              : 'Untitled Session',
            content,
            featuredImage: imageMatch
              ? imageMatch[1]
              : defaultImage,
          });
        }

        setSessions(loadedSessions);
      } catch (error) {
        console.error('Error loading sessions:', error);
      }
    };

    loadSessions();
  }, []);

  return (
    <div className="container sessions-page">
      <div className="content-wrapper">
        <div className="content">
          <h1>Sessions</h1>
          <div className="sessions-grid">
            {sessions.map((session) => (
              <SessionCard
                key={session.id}
                id={session.id}
                title={session.title}
                featuredImage={session.featuredImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
