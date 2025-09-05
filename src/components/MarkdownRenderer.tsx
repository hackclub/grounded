import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  title?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-8">
        {title && (
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-emerald-400">{title}</h1>
            <hr className="my-4 border-slate-700" />
          </div>
        )}
        <article className="prose prose-invert prose-emerald max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default MarkdownRenderer;