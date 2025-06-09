import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import SessionCard from '../components/SessionCard';
import SEO from '../components/SEO';

interface Session {
  id: string;
  title: string;
  content: string;
  featuredImage: string;
  location?: string;
  sessionCode?: string;
  speakers?: string[];
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
  // Special ordering for opening, keynote, and program overview
  if (session.id === 'opening') return 0;
  if (session.id === 'keynote-jeremy-dalton') return 1;
  if (session.id === 'program-overview') return 2;
  if (session.id === 'wrap-up') return 100;

  // For other sessions, use the session code
  const code = session.sessionCode;
  if (!code) return 50; // Default middle position for sessions without codes

  const [block, letter] = code.split('');
  return parseInt(block) * 10 + letter.charCodeAt(0) - 65; // A=0, B=1, C=2
};

export default function Home() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

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
            speakers:
              content
                .match(/speakers:\s*\[(.*?)\]/)?.[1]
                .split(',')
                .map((s) =>
                  s
                    .trim()
                    .replace(/['"]/g, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase()
                ) || undefined,
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
        title="CIIIC Meet-Up 2025 - reports and media"
        description="Report and highlights from the first annual CIIIC meetup, where researchers, makers, and policymakers shape the future of immersive experiences in the Netherlands."
        image="https://meetup2025.ciiic.nl/images/CIIIC-ogimage.jpeg"
      />
      <div className="container">
        <div className="content-wrapper">
          <div className="content">
            {/* Hero Section */}
            <div className="hero-section">
              <div className="hero-content">
                <h1>CIIIC Annual Meet-Up 2025</h1>
                <p className="hero-subtitle">
                  Shaping the future of immersive
                  experiences in the Netherlands
                </p>
                <div className="cta-buttons">
                  <Link
                    to="/sessions"
                    className="cta-button primary"
                  >
                    Explore Sessions
                  </Link>
                  <Link
                    to="/videos"
                    className="cta-button secondary"
                  >
                    Watch Videos
                  </Link>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="/images/CIIIC-ogimage.jpeg"
                  alt="CIIIC Annual Meet-Up 2025"
                  className="poster-image"
                />
                <p className="hero-credit">
                  Photo:{' '}
                  <a
                    href="https://benhoudijk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ben Houdijk
                  </a>
                </p>
              </div>
            </div>

            {/* Introduction Section with Video */}
            <div className="intro-section">
              <div className="intro-content">
                <h2>Event Summary</h2>
                <p>
                  The Creative Industries Immersive Impact
                  Coalition (CIIIC) hosted its first Annual
                  Meet-Up, bringing together creators,
                  researchers, businesses, and policymakers
                  from the Dutch immersive industry.
                </p>
                <p>
                  The event explored new opportunities in
                  immersive experiences (IX) and civic
                  engagement through a series of
                  presentations, workshops, and discussions.
                  Speakers and participants examined both
                  the innovative potential and societal
                  impact of immersive technologies.
                </p>
                <p>
                  The program included interactive breakout
                  sessions where participants engaged with
                  CIIIC calls and labs, followed by
                  networking opportunities throughout the
                  day.
                </p>
              </div>
              <div className="intro-video">
                <h2>Meet-Up After Movie</h2>
                <div className="video-container">
                  <VideoPlayer
                    playbackId="EQ01PCb702XETEQZayVmS01oyFgABnGMbx4i6GvV27F61U"
                    title="Meet-Up After Movie"
                    description="Watch the after movie of the CIIIC Annual Meet-Up 2025"
                    transcript="Speaker 1 There are significant challenges in the adoption of IX technologies. So keeping your user at the center of your experience as you explore this technology will be absolutely key to its success. For me as a maker, as a creator of these works, it's making the audience member central in the piece. I can tell a different type of stories that I can't tell on an opera stage.  So I think the key to success for IX is the combination of technology. Cross-sexual collaboration, finding ways in which IX can really make a meaningful difference in healthcare, in media, culture, education. Learning from the development in the technology, I think that's the key. The key to success is time and persistence. We're in for the long run. Make it time."
                  />
                </div>
              </div>
            </div>

            {/* Poster Section */}
            <div className="poster-section">
              <div className="poster-container">
                <img
                  src="/images/illustrations/poster.jpg"
                  alt="CIIIC Annual Meet-Up 2025 Poster"
                  className="poster-image"
                  onClick={() => setIsLightboxOpen(true)}
                />
                <p className="poster-credit">
                  Illustration by{' '}
                  <a
                    href="https://suusvandenakker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suus van den Akker
                  </a>
                </p>
              </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
              <div
                className="lightbox"
                onClick={() => setIsLightboxOpen(false)}
              >
                <div className="lightbox-content">
                  <img
                    src="/images/illustrations/poster.jpg"
                    alt="CIIIC Annual Meet-Up 2025 Poster"
                  />
                  <button
                    className="lightbox-close"
                    onClick={() => setIsLightboxOpen(false)}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Sessions Section */}
            <div className="sessions-section">
              <h2>Explore the Sessions</h2>
              <p className="section-intro">
                Browse through the session summaries and
                recordings from the event. Each session
                covers different aspects of immersive
                technology and its applications.
              </p>
              <div className="sessions-grid">
                {sessions.map((session) => (
                  <SessionCard
                    key={session.id}
                    id={session.id}
                    title={session.title}
                    featuredImage={session.featuredImage}
                    location={session.location}
                    sessionCode={session.sessionCode}
                    speakerIds={session.speakers}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
