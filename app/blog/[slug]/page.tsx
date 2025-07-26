'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import NavBar from '@/components/portfolio/NavBar';
import Footer from '@/components/portfolio/Footer';
import { BlogPost, getBlogPost } from '@/lib/blog';
import 'highlight.js/styles/github.css';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const foundPost = getBlogPost(slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 w-1/2"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <article className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="outline" className="mb-8 bg-white hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                {post.featured && (
                  <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                )}
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Published
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Published {formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {post.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    code: ({ className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic">
                        {children}
                      </blockquote>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4 space-y-2">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-700">{children}</li>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link href="/blog">
                  <Button variant="outline" className="bg-white hover:bg-gray-50">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                <div className="text-gray-500 text-sm">
                  Last updated: {formatDate(post.updatedAt)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}