
import React from 'react';
import { MOCK_BRIEFS } from '../constants';

const HoldBrief: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gray-50">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Hold My Brief
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Outsource representation in other jurisdictions. Connect, delegate, and collaborate with verified practitioners.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Post a New Brief
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm overflow-hidden rounded-xl border border-gray-200">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Available & Recent Briefs</h3>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  {MOCK_BRIEFS.filter(b => b.status === 'Open').length} Open
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  {MOCK_BRIEFS.filter(b => b.status !== 'Open').length} Filled
                </span>
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              {MOCK_BRIEFS.map((brief) => (
                <li key={brief.id} className={brief.status !== 'Open' ? 'bg-gray-50/50' : 'bg-white'}>
                  <div className="block hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer">
                    <div className="px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className={`text-sm font-bold truncate ${brief.status === 'Open' ? 'text-blue-700' : 'text-gray-500'}`}>
                            {brief.title}
                          </p>
                          {brief.status === 'Open' && (
                            <span className="ml-2 flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                          )}
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-bold rounded-full ${
                            brief.status === 'Open' ? 'bg-green-100 text-green-800' : 
                            brief.status === 'Assigned' ? 'bg-amber-100 text-amber-800' :
                            'bg-slate-200 text-slate-600'
                          }`}>
                            {brief.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 sm:flex sm:justify-between items-center">
                        <div className="sm:flex items-center space-x-4">
                          <p className="flex items-center text-xs text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {brief.court}
                          </p>
                          <p className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {brief.location}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between sm:mt-0 sm:justify-end">
                           <div className="flex items-center text-sm font-bold text-slate-900 mr-6">
                            <span className="text-gray-400 text-xs font-normal mr-1">Apperance Fee:</span>
                            {brief.fee}
                          </div>
                          <button 
                            disabled={brief.status !== 'Open'}
                            className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                              brief.status === 'Open' 
                                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {brief.status === 'Open' ? 'Apply Now' : brief.status === 'Assigned' ? 'In Progress' : 'Closed'}
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-gray-400 flex items-center">
                        <span className="font-bold text-gray-500 mr-1">Posted by:</span> {brief.requester} 
                        <span className="mx-2">•</span>
                        <span className="font-bold text-gray-500 mr-1">Court Date:</span> {brief.date}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <span className="mr-2">🛡️</span> Verified Status
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Only verified legal practitioners with active NBA stamps can apply for briefs on this platform.
            </p>
            <button className="w-full bg-blue-600 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
              Verify My Profile
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4">Brief Categories</h4>
            <div className="space-y-2">
              {['Litigation', 'Corporate/Commercial', 'Criminal', 'Probate', 'ADR'].map(cat => (
                <div key={cat} className="flex items-center justify-between text-sm py-2 border-b border-gray-50 last:border-0 cursor-pointer hover:text-blue-600">
                  <span>{cat}</span>
                  <span className="text-gray-400 font-medium">→</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-900 text-sm mb-2 flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
               </svg>
               Important Notice
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              Always confirm the status of the case and get specific instructions from the lead counsel before the court date. Payments are escrowed until the appearance is confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldBrief;
