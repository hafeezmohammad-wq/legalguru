import React from 'react';
import { MOCK_JOBS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <div className="text-center py-10">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Legal Careers</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
          Explore job openings and career opportunities across law firms, corporations, and government agencies.
        </p>
      </div>

      <div className="space-y-6">
        {MOCK_JOBS.map((job) => (
          <div key={job.id} className="bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {job.title}
                </h3>
                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                  job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {job.type}
                </span>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-blue-600 font-semibold">{job.company}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-600 mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                  <span className="mx-2">•</span>
                  <span>Posted {job.postedDate}</span>
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800 focus:outline-none">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;