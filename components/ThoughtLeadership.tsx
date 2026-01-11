
import React from 'react';
import { MOCK_ARTICLES } from '../constants';

interface ThoughtLeadershipProps {
  onNavigate?: (page: string) => void;
}

const ThoughtLeadership: React.FC<ThoughtLeadershipProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Expert Insights</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Thought Leadership
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Stay informed with expert case notes, reviews, and practical insights into Nigerian jurisprudence.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {MOCK_ARTICLES.map((article) => (
          <div key={article.id} className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <div className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </div>
                </div>
                <div className="block mt-4">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center border-t border-gray-100 pt-6">
                <div className="flex-shrink-0">
                  <span className="sr-only">{article.author}</span>
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                    {article.author.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {article.author}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                </div>
                <div className="ml-auto">
                   <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                     Read Article →
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Events Section within Insights */}
      <div className="mt-20 border-t border-gray-200 pt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Upcoming Events & Webinars</h3>
            <p className="text-gray-500">Don't miss out on these networking and learning opportunities.</p>
          </div>
          {onNavigate && (
            <button 
              onClick={() => onNavigate('events')}
              className="hidden sm:block text-blue-600 font-semibold hover:underline"
            >
              View all events &rarr;
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <span className="text-xs font-bold text-orange-600 uppercase">July 2025</span>
            <h4 className="font-bold text-gray-900 mt-1 mb-2">NBA-SBL Annual Conference</h4>
            <p className="text-sm text-gray-500 mb-4">Eko Hotels, Lagos</p>
            <button 
              onClick={() => onNavigate && onNavigate('events')}
              className="text-sm text-blue-600 font-medium"
            >
              Details
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <span className="text-xs font-bold text-blue-600 uppercase">May 20, 2025</span>
            <h4 className="font-bold text-gray-900 mt-1 mb-2">Legal Tech & AI Webinar</h4>
            <p className="text-sm text-gray-500 mb-4">Virtual Session</p>
            <button 
              onClick={() => onNavigate && onNavigate('events')}
              className="text-sm text-blue-600 font-medium"
            >
              Details
            </button>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-white text-sm font-medium mb-3">Want more events?</p>
            <button 
              onClick={() => onNavigate && onNavigate('events')}
              className="bg-blue-600 text-white text-xs px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Full Calendar
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default ThoughtLeadership;
