import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Video from '../components/Video';
import Speaker, {
  SpeakerContainer,
} from '../components/Speaker';
import SEO from '../components/SEO';
import { speakers } from '../data/speakers';

type Frontmatter = {
  title?: string;
  featuredImage?: string;
  intro?: string;
  location?: string;
  sessionCode?: string;
  speakers?: string[];
  [key: string]: unknown;
};

type MDXModule = {
  default: React.ComponentType;
  frontmatter?: Frontmatter;
};

const mdxFiles = import.meta.glob<MDXModule>(
  '../content/*.mdx',
  {
    eager: true,
  }
);

const components = {
  Video,
  Speaker,
  SpeakerContainer,
};

// Helper function to get session order (copied from Sessions.tsx)
type NavSession = {
  id: string;
  title: string;
  sessionCode?: string;
};
function getSessionOrder(session: NavSession): number {
  // Special ordering for opening, keynote, and program overview
  if (session.id === 'opening') return 0;
  if (session.id === 'keynote-jeremy-dalton') return 1;
  if (session.id === 'program-overview') return 2;
  if (session.id === 'wrap-up') return 100;

  // For other sessions, use the session code
  const code = session.sessionCode;
  if (!code) return 50;
  const [block, letter] = code.split('');
  return parseInt(block) * 10 + letter.charCodeAt(0) - 65;
}

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();
  const [MDXContent, setMDXContent] =
    useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] =
    useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState(true);
  const [allSessions, setAllSessions] = useState<
    NavSession[]
  >([]);

  useEffect(() => {
    const loadSession = async () => {
      setLoading(true);
      const filePath = `../content/${id}.mdx`;
      console.log('Loading file:', filePath);
      console.log(
        'Available files:',
        Object.keys(mdxFiles)
      );
      console.log('File exists:', !!mdxFiles[filePath]);

      if (mdxFiles[filePath]) {
        const module = mdxFiles[filePath];
        console.log('Module:', module);
        setFrontmatter(module.frontmatter ?? null);
        setMDXContent(() => module.default);
      } else {
        console.log('File not found:', filePath);
        setFrontmatter(null);
        setMDXContent(null);
      }
      setLoading(false);
    };

    if (id) loadSession();
  }, [id]);

  useEffect(() => {
    // Load all session frontmatters for navigation
    const sessions: NavSession[] = Object.entries(
      mdxFiles
    ).map(([path, mod]) => {
      const id =
        path.split('/').pop()?.replace('.mdx', '') || '';
      return {
        id,
        title: mod.frontmatter?.title || 'Untitled Session',
        sessionCode: mod.frontmatter?.sessionCode as
          | string
          | undefined,
      };
    });
    sessions.sort(
      (a, b) => getSessionOrder(a) - getSessionOrder(b)
    );
    setAllSessions(sessions);
  }, []);

  // Helper to extract the intro paragraph from frontmatter or content
  // (for now, we expect a frontmatter.intro or will extract the first paragraph in the MDX files manually)

  if (loading) {
    return (
      <div className="container session-detail-page">
        <div className="content-wrapper">
          <div className="content">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!MDXContent) {
    return (
      <div className="container session-detail-page">
        <div className="content-wrapper">
          <div className="content">
            <h1>Session Not Found</h1>
            <p>The requested session could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={frontmatter?.title || 'Session'}
        description={frontmatter?.intro || 'CIIIC session'}
        image={frontmatter?.featuredImage}
      />
      <div className="container session-detail-page">
        <div className="content-wrapper">
          <div className="content">
            {frontmatter?.title && (
              <h1 style={{ marginBottom: '1.5rem' }}>
                {frontmatter.sessionCode &&
                  `${frontmatter.sessionCode}: `}
                {frontmatter.title}
              </h1>
            )}
            {frontmatter?.featuredImage && (
              <div style={{ position: 'relative' }}>
                <img
                  src={frontmatter.featuredImage}
                  alt={frontmatter.title || ''}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                  }}
                />
                {frontmatter.location && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontFamily:
                        'JetBrains Mono, monospace',
                      fontSize: '0.9rem',
                    }}
                  >
                    {frontmatter.location}
                  </div>
                )}
              </div>
            )}
            {/* Introduction paragraph, if present in frontmatter.intro */}
            {frontmatter?.intro && (
              <p
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '2rem',
                  color: '#222',
                }}
              >
                {frontmatter.intro}
              </p>
            )}
            {/* Render speakers from frontmatter */}
            {frontmatter?.speakers &&
              frontmatter.speakers.length > 0 && (
                <SpeakerContainer>
                  {frontmatter.speakers.map((id) => {
                    const speaker = speakers[id];
                    return speaker ? (
                      <Speaker
                        key={id}
                        name={speaker.name}
                        title={speaker.title}
                        image={speaker.image}
                      />
                    ) : null;
                  })}
                </SpeakerContainer>
              )}
            {/* Speakers will be rendered by MDX content, so just render the rest of the content here */}
            <MDXProvider components={components}>
              <MDXContent />
            </MDXProvider>
          </div>
        </div>
        {/* Navigation for previous/next session */}
        <div
          className="session-nav"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          {allSessions.length > 0 &&
            id &&
            (() => {
              const idx = allSessions.findIndex(
                (s) => s.id === id
              );
              const prev =
                idx > 0 ? allSessions[idx - 1] : null;
              const next =
                idx < allSessions.length - 1
                  ? allSessions[idx + 1]
                  : null;
              return (
                <>
                  <div>
                    {prev && (
                      <Link to={`/sessions/${prev.id}`}>
                        ← {prev.title}
                      </Link>
                    )}
                  </div>
                  <div>
                    {next && (
                      <Link to={`/sessions/${next.id}`}>
                        {next.title} →
                      </Link>
                    )}
                  </div>
                </>
              );
            })()}
        </div>
      </div>
    </>
  );
}
