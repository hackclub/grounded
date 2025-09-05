import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownGuideProps {
  guidePath: string;
  title?: string;
}

const MarkdownGuide: React.FC<MarkdownGuideProps> = ({ guidePath, title }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(guidePath);
        
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.status}`);
        }
        
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError('Failed to load the guide. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [guidePath]);

  if (loading) {
    return <div className="text-center p-8 text-slate-300">Loading guide...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-400">{error}</div>;
  }

  return <MarkdownRenderer title={title} content={content} />;
};

export default MarkdownGuide;