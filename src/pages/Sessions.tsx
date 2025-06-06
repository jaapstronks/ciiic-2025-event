import { useState, useEffect } from 'react';
import SessionCard from '../components/SessionCard';
import SEO from '../components/SEO';

interface Session {
  id: string;
  title: string;
  content: string;
  featuredImage: string;
  location?: string;
  sessionCode?: string;
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

// Helper function to get session order
const getSessionOrder = (session: Session): number => {
  if (session.id === 'opening') return 0;
  if (session.id === 'wrap-up') return 100;

  const code = session.sessionCode;
  if (!code) return 50; // Default middle position for sessions without codes

  const [block, letter] = code.split('');
  return parseInt(block) * 10 + letter.charCodeAt(0) - 65; // A=0, B=1, C=2
};

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
          const locationMatch = content.match(
            /location:\s*['"](.+?)['"]/
          );
          const sessionCodeMatch = content.match(
            /sessionCode:\s*['"](.+?)['"]/
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
            location: locationMatch
              ? locationMatch[1]
              : undefined,
            sessionCode: sessionCodeMatch
              ? sessionCodeMatch[1]
              : undefined,
          });
        }

        // Sort sessions by their order
        loadedSessions.sort(
          (a, b) => getSessionOrder(a) - getSessionOrder(b)
        );
        setSessions(loadedSessions);
      } catch (error) {
        console.error('Error loading sessions:', error);
      }
    };

    loadSessions();
  }, []);

  return (
    <>
      <SEO
        title="Sessions"
        description="Browse all sessions from the CIIIC Annual Meet-Up 2025. Discover talks, workshops, and more."
        image={undefined}
      />
      <div className="container sessions-container">
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
                  location={session.location}
                  sessionCode={session.sessionCode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
