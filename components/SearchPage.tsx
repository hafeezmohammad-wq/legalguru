
import React, { useState, useEffect } from 'react';
import { MOCK_CASES, MOCK_STATUTES, MOCK_RULES, MOCK_TEMPLATES, MOCK_REGULATIONS, COURTS } from '../constants';
import { Case, Statute } from '../types';

interface SearchPageProps {
  initialQuery: string;
  onCaseSelect: (caseId: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ initialQuery, onCaseSelect }) => {
  const [activeTab, setActiveTab] = useState<'judgments' | 'statutes' | 'regulations' | 'rules' | 'templates'>('judgments');
  const [query, setQuery] = useState(initialQuery);
  const [caseResults, setCaseResults] = useState<Case[]>(MOCK_CASES);
  const [statuteResults, setStatuteResults] = useState<Statute[]>(MOCK_STATUTES);
  const [regulationResults, setRegulationResults] = useState<Statute[]>(MOCK_REGULATIONS);
  const [ruleResults, setRuleResults] = useState<Statute[]>(MOCK_RULES);
  const [templateResults, setTemplateResults] = useState<Statute[]>(MOCK_TEMPLATES);
  const [selectedCourt, setSelectedCourt] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    setIsThinking(true);
    const timer = setTimeout(() => {
      const lowerQ = query.toLowerCase();

      if (activeTab === 'judgments') {
        let filtered = MOCK_CASES;
        if (query) {
          filtered = filtered.filter(c => 
            c.title.toLowerCase().includes(lowerQ) || 
            c.summary.toLowerCase().includes(lowerQ) ||
            c.tags.some(t => t.toLowerCase().includes(lowerQ))
          );
        }
        if (selectedCourt) {
          filtered = filtered.filter(c => c.court === selectedCourt);
        }
        setCaseResults(filtered);
      } else if (activeTab === 'statutes') {
        let filtered = MOCK_STATUTES;
        if (query) {
          filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(lowerQ) || 
            s.category.toLowerCase().includes(lowerQ)
          );
        }
        setStatuteResults(filtered);
      } else if (activeTab === 'regulations') {
        let filtered = MOCK_REGULATIONS;
        if (query) {
          filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(lowerQ) || 
            s.category.toLowerCase().includes(lowerQ)
          );
        }
        setRegulationResults(filtered);
      } else if (activeTab === 'rules') {
        let filtered = MOCK_RULES;
        if (query) {
          filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(lowerQ) || 
            s.category.toLowerCase().includes(lowerQ)
          );
        }
        setRuleResults(filtered);
      } else if (activeTab === 'templates') {
        let filtered = MOCK_TEMPLATES;
        if (query) {
          filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(lowerQ) || 
            s.category.toLowerCase().includes(lowerQ)
          );
        }
        setTemplateResults(filtered);
      }

      setIsThinking(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, selectedCourt, activeTab]);

  const getResultCount = () => {
    if (activeTab === 'judgments') return caseResults.length;
    if (activeTab === 'statutes') return statuteResults.length;
    if (activeTab === 'regulations') return regulationResults.length;
    if (activeTab === 'rules') return ruleResults.length;
    return templateResults.length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      
      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {[
            { id: 'judgments', label: 'Case Law' },
            { id: 'statutes', label: 'Statutes' },
            { id: 'regulations', label: 'Regulations' },
            { id: 'rules', label: 'Rules of Court' },
            { id: 'templates', label: 'Templates & Forms' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
            
            {(activeTab === 'judgments' || activeTab === 'rules') && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Court / Jurisdiction</label>
                <select 
                  value={selectedCourt}
                  onChange={(e) => setSelectedCourt(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                >
                  <option value="">All</option>
                  {COURTS.map(court => (
                    <option key={court} value={court}>{court}</option>
                  ))}
                  <option value="State High Courts">State High Courts</option>
                </select>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year of Enactment
              </label>
              <div className="flex space-x-2">
                <input type="number" placeholder="From" className="w-1/2 p-2 border rounded text-sm" />
                <input type="number" placeholder="To" className="w-1/2 p-2 border rounded text-sm" />
              </div>
            </div>

            <button 
              onClick={() => {setSelectedCourt(''); setQuery('');}}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1">
          <div className="mb-6">
             <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder={`Search ${activeTab === 'judgments' ? 'cases' : activeTab === 'statutes' ? 'acts' : activeTab === 'regulations' ? 'regulations' : activeTab === 'rules' ? 'court rules' : 'templates'}...`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
             </div>
          </div>

          <div className="mb-4 text-sm text-gray-500">
            {isThinking ? 'Searching...' : `Found ${getResultCount()} results`}
          </div>

          <div className="space-y-4">
            {activeTab === 'judgments' && caseResults.map((c) => (
              <div key={c.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 
                      onClick={() => onCaseSelect(c.id)}
                      className="text-xl font-bold text-blue-700 hover:underline cursor-pointer mb-1"
                    >
                      {c.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">{c.citation} • {c.court} • {c.date}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Judgment
                  </span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{c.summary}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {c.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {activeTab === 'statutes' && statuteResults.map((s) => (
              <LibraryCard key={s.id} item={s} />
            ))}

            {activeTab === 'regulations' && regulationResults.map((s) => (
              <LibraryCard key={s.id} item={s} />
            ))}

            {activeTab === 'rules' && ruleResults.map((r) => (
              <LibraryCard key={r.id} item={r} />
            ))}

            {activeTab === 'templates' && templateResults.map((t) => (
              <LibraryCard key={t.id} item={t} />
            ))}
            
            {!isThinking && getResultCount() === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LibraryCard: React.FC<{ item: Statute }> = ({ item }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">Year: {item.year} • Category: {item.category}</p>
      </div>
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.type === 'Act' ? 'bg-purple-100 text-purple-800' : 
        item.type === 'Rule' ? 'bg-orange-100 text-orange-800' : 
        item.category.includes('CBN') || item.category.includes('NMDPRA') || item.category.includes('AML') ? 'bg-indigo-100 text-indigo-800' :
        'bg-green-100 text-green-800'
      }`}>
        {item.category.includes('CBN') || item.category.includes('NMDPRA') ? 'Regulation' : item.type}
      </span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center text-xs text-gray-400">
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        Read-only access enabled
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
        View Full Document
      </button>
    </div>
  </div>
);

export default SearchPage;
