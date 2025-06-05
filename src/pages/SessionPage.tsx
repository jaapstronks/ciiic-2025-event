import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

type Frontmatter = {
  title?: string;
  featuredImage?: string;
  [key: string]: unknown;
};

const mdxFiles = import.meta.glob('../content/*.mdx', {
  query: '?raw',
  import: 'default',
});

console.log('mdxFiles keys:', Object.keys(mdxFiles));

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [frontmatter, setFrontmatter] =
    useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      setLoading(true);
      const filePath = `../content/${id}.mdx`;
      console.log('Loading file:', filePath);

      if (mdxFiles[filePath]) {
        try {
          // Get the raw content
          const rawContent = (await mdxFiles[
            filePath
          ]()) as string;

          // Extract frontmatter
          const frontmatterMatch = rawContent.match(
            /^---\n([\s\S]*?)\n---/
          );

          if (frontmatterMatch) {
            const frontmatterContent = frontmatterMatch[1];
            const titleMatch = frontmatterContent.match(
              /title:\s*['"](.*?)['"]/
            );
            const imageMatch = frontmatterContent.match(
              /featuredImage:\s*['"](.*?)['"]/
            );

            const extractedFrontmatter: Frontmatter = {
              title: titleMatch ? titleMatch[1] : undefined,
              featuredImage: imageMatch
                ? imageMatch[1]
                : undefined,
            };

            console.log(
              'Extracted frontmatter:',
              extractedFrontmatter
            );
            setFrontmatter(extractedFrontmatter);

            // Remove frontmatter from content
            const contentWithoutFrontmatter =
              rawContent.replace(
                /^---\n[\s\S]*?\n---\n/,
                ''
              );
            setContent(contentWithoutFrontmatter);
          }
        } catch (error) {
          console.error('Error loading session:', error);
          setContent('');
          setFrontmatter(null);
        }
      } else {
        console.log('File not found:', filePath);
        setContent('');
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

  if (!content) {
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
                marginBottom: '2rem',
              }}
            />
          )}
          {frontmatter?.title && (
            <h1 style={{ marginBottom: '2rem' }}>
              {frontmatter.title}
            </h1>
          )}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
