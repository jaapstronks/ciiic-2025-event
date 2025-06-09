import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/Layout';
import { components } from '../content/mdx-components';
import { mdxFiles } from '../content/mdx-files';
import type {
  Frontmatter,
  NavSession,
  MDXModule,
} from '../types';
import SEO from '../components/SEO';

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
        const module = mdxFiles[filePath] as MDXModule;
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
      const module = mod as MDXModule;
      return {
        id,
        title:
          module.frontmatter?.title || 'Untitled Session',
        sessionCode: module.frontmatter?.sessionCode,
      };
    });
    sessions.sort(
      (a, b) => getSessionOrder(a) - getSessionOrder(b)
    );
    setAllSessions(sessions);
  }, []);

  // Helper function to get session order
  function getSessionOrder(session: NavSession): number {
    if (session.id === 'opening') return 0;
    if (session.id === 'wrap-up') return 100;

    const code = session.sessionCode;
    if (!code) return 50;

    const [block, letter] = code.split('');
    return parseInt(block) * 10 + letter.charCodeAt(0) - 65;
  }

  if (loading) {
    return (
      <Layout>
        <div className="container session-detail-page">
          <div className="content-wrapper">
            <div className="content">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!MDXContent) {
    return (
      <Layout>
        <div className="container session-detail-page">
          <div className="content-wrapper">
            <div className="content">
              <h1>Session Not Found</h1>
              <p>
                The requested session could not be found.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={frontmatter?.title || 'Session'}
        description={frontmatter?.intro || ''}
      />
      <div className="container session-detail-page">
        <div className="content-wrapper">
          <div className="content">
            <h1>{frontmatter?.title}</h1>
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
            <MDXProvider components={components}>
              <MDXContent />
            </MDXProvider>
          </div>
        </div>
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
    </Layout>
  );
}
