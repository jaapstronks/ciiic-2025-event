import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Video from '../components/Video';

type Frontmatter = {
  title?: string;
  featuredImage?: string;
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
};

console.log('Available MDX files:', Object.keys(mdxFiles));

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();
  const [MDXContent, setMDXContent] =
    useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] =
    useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState(true);

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
    <div className="container session-detail-page">
      <div className="content-wrapper">
        <div className="content">
          {frontmatter?.featuredImage && (
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.title || ''}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
          )}
          {frontmatter?.title && (
            <h1 style={{ marginBottom: '2rem' }}>
              {frontmatter.title}
            </h1>
          )}
          <MDXProvider components={components}>
            <MDXContent />
          </MDXProvider>
        </div>
      </div>
    </div>
  );
}
