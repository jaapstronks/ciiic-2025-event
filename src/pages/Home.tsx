import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import SessionCard from '../components/SessionCard';

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

export default function Home() {
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
    <div className="container">
      <div className="content-wrapper">
        <div className="content">
          <h1>CIIIC Annual Meet-Up 2025</h1>

          <div className="video-section">
            <VideoPlayer
              playbackId="78Xt01600lBARM004ycsUYwdmIorcQaVN1bBUBm29QpShA"
              title="Ride The Immersive Wave"
              description="The introduction video of CIIIC Annual Meet-Up 2025"
              transcript="Hello? The third digital wave is in motion. Immersive. Expansive. Propelled by AI, it moves faster. Already reshaping how we engage with the world. It's not a trend, not a trick of light, but as a force for impact. This is not just about technology. It's about how we create meaning. To see history through new eyes. To train empathy through experience. To build not just tools, but trust. To guide this wave, the Netherlands launched CIIIC, the Creative Industries Immersive Impact Coalition, a national program to turn potential into practice. We invest in people, training skills, growing talent and sharing knowledge. We support makers and public organisations alike. And we build towards access for all so everyone can take part. CIIIC connects labs, studios, schools, ministries. Because only together can we make the impact that matters. From immersive classrooms to safer streets. From cultural storytelling to therapeutic environments. The third wave is global and it is moving fast. Dive in, sign up for our calls, build with us. Let's shape this wave together."
            />
          </div>

          <div className="intro-text">
            <p>
              Welcome to the report of the first annual
              CIIIC meetup, where researchers, makers, and
              policymakers came together to shape the future
              of immersive experiences in the Netherlands.
              Explore the sessions below, or visit our{' '}
              <Link to="/gallery">photo gallery</Link> and{' '}
              <Link to="/videos">video collection</Link> for
              more insights from the event.
            </p>
          </div>

          <h2>Sessions</h2>
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
  );
}
