import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Video from '../components/Video';
import Speaker, {
  SpeakerContainer,
} from '../components/Speaker';

type Frontmatter = {
  title?: string;
  featuredImage?: string;
  intro?: string;
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
    <div className="container session-detail-page">
      <div className="content-wrapper">
        <div className="content">
          {frontmatter?.title && (
            <h1 style={{ marginBottom: '1.5rem' }}>
              {frontmatter.title}
            </h1>
          )}
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
                marginBottom: '1.5rem',
              }}
            />
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
          {/* Speakers will be rendered by MDX content, so just render the rest of the content here */}
          <MDXProvider components={components}>
            <MDXContent />
          </MDXProvider>
        </div>
      </div>
    </div>
  );
}
