import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Frontmatter = {
  title?: string;
  featuredImage?: string;
  [key: string]: unknown;
};

type MDXModule = {
  default: React.ComponentType;
  frontmatter?: Frontmatter;
};

// Restore the working glob and lookup key
const mdxFiles = import.meta.glob('../content/*.mdx');

console.log('mdxFiles keys:', Object.keys(mdxFiles));

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();
  const [MDXComponent, setMDXComponent] =
    useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] =
    useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      setLoading(true);
      const filePath = `../content/${id}.mdx`;
      console.log('Looking for filePath:', filePath);
      if (mdxFiles[filePath]) {
        const mod = (await mdxFiles[
          filePath
        ]()) as MDXModule;
        setMDXComponent(() => mod.default);
        setFrontmatter(mod.frontmatter || {});
      } else {
        setMDXComponent(null);
        setFrontmatter(null);
      }
      setLoading(false);
    };
    if (id) loadSession();
  }, [id]);

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

  if (!MDXComponent) {
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
    <div className="container session-detail-page">
      <div className="content-wrapper">
        <div className="content">
          {frontmatter?.featuredImage && (
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.title || ''}
              style={{
                width: '100%',
                borderRadius: '8px',
                marginBottom: '2rem',
              }}
            />
          )}
          {frontmatter?.title && (
            <h1>{frontmatter.title}</h1>
          )}
          <MDXComponent />
        </div>
      </div>
    </div>
  );
}
