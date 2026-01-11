
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchPage from './components/SearchPage';
import CaseViewer from './components/CaseViewer';
import Directory from './components/Directory';
import AdminDashboard from './components/AdminDashboard';
import ThoughtLeadership from './components/ThoughtLeadership';
import Compliance from './components/Compliance';
import HoldBrief from './components/HoldBrief';
import Careers from './components/Careers';
import Subscription from './components/Subscription';
import LawEvents from './components/LawEvents';
import { MOCK_CASES } from './constants';
import { Case } from './types';

// Routing types
type Page = 'home' | 'search' | 'case' | 'directory' | 'careers' | 'admin' | 'insights' | 'compliance' | 'briefs' | 'subscription' | 'events';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    // Reset search query when navigating away from search context unless explicit
    if (page !== 'search') setSearchQuery('');
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleCaseSelect = (caseId: string) => {
    setSelectedCaseId(caseId);
    setCurrentPage('case');
  };

  const getActiveCase = (): Case | undefined => {
    return MOCK_CASES.find(c => c.id === selectedCaseId);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onSearch={handleSearch} onNavigate={handleNavigate} />;
      case 'search':
        return (
          <SearchPage 
            initialQuery={searchQuery} 
            onCaseSelect={handleCaseSelect} 
          />
        );
      case 'case':
        const caseData = getActiveCase();
        return caseData ? (
          <CaseViewer 
            data={caseData} 
            onBack={() => setCurrentPage('search')} 
          />
        ) : <div>Case not found</div>;
      case 'directory':
        return <Directory />;
      case 'careers':
        return <Careers />;
      case 'insights':
        return <ThoughtLeadership onNavigate={handleNavigate} />;
      case 'events':
        return <LawEvents />;
      case 'compliance':
        return <Compliance />;
      case 'briefs':
        return <HoldBrief />;
      case 'admin':
        return <AdminDashboard />;
      case 'subscription':
        return <Subscription />;
      default:
        return <Hero onSearch={handleSearch} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {/* Main Content Area */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center">
              <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              LegalGuru
            </h3>
            <p className="text-sm">The leading platform for Nigerian legal research and professional networking.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavigate('search')} className="hover:text-white transition-colors">Case Law & Statutes</button></li>
              <li><button onClick={() => handleNavigate('insights')} className="hover:text-white transition-colors">Thought Leadership</button></li>
              <li><button onClick={() => handleNavigate('compliance')} className="hover:text-white transition-colors">Compliance Tools</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Network</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavigate('directory')} className="hover:text-white transition-colors">Find a Lawyer</button></li>
              <li><button onClick={() => handleNavigate('briefs')} className="hover:text-white transition-colors">Outsource Briefs</button></li>
              <li><button onClick={() => handleNavigate('careers')} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => handleNavigate('events')} className="hover:text-white transition-colors font-medium text-blue-400">Law Events</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Updates</h4>
            <p className="text-sm mb-4 italic">Stay connected with our evolving legal ecosystem.</p>
            <button 
              onClick={() => handleNavigate('subscription')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all shadow-md flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Manage Subscriptions
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div>&copy; 2025 LegalGuru. All rights reserved.</div>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
