import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({
  content,
}: MarkdownContentProps) {
  return (
    <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-400">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
