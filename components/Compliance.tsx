
import React from 'react';
import { MOCK_COMPLIANCE_RESOURCES, MOCK_COMPLIANCE_ARTICLES } from '../constants';

const Compliance: React.FC = () => {
  const categories = [
    { name: 'Anti-Money Laundering', count: 12, icon: '🏦' },
    { name: 'Tax Compliance', count: 8, icon: '📄' },
    { name: 'Data Protection', count: 5, icon: '🔒' },
    { name: 'Corporate Secretarial', count: 15, icon: '🏢' },
    { name: 'Energy & Extractives', count: 6, icon: '🛢️' },
    { name: 'Employment Law', count: 10, icon: '⚖️' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 pb-32">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl text-center">
            Compliance & Governance Hub
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl text-center leading-relaxed">
            The professional's toolkit for navigating Nigeria's evolving regulatory landscape. Access checklists, insights, and interactive compliance tools.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((cat) => (
            <button key={cat.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-center">
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-xs font-bold text-gray-900 leading-tight mb-1">{cat.name}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{cat.count} Resources</div>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Resources List */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Compliance Tools & Checklists
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {MOCK_COMPLIANCE_RESOURCES.map((resource) => (
                <div key={resource.id} className="bg-white overflow-hidden shadow-sm rounded-xl hover:shadow-md transition-all border border-gray-200">
                  <div className="px-6 py-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        resource.type === 'Checklist' ? 'bg-amber-100 text-amber-800' :
                        resource.type === 'Tool' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {resource.type}
                      </span>
                      <span className="text-gray-400 text-xs font-medium uppercase">{resource.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex-1">{resource.description}</p>
                    <div className="mt-6">
                      <button className="w-full py-2 px-4 bg-slate-50 border border-gray-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Checklist Online
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel: Insights & Expert Contact */}
          <div className="w-full lg:w-96 flex-shrink-0 space-y-8">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">💡</span>
                Compliance Insights
              </h3>
              <div className="space-y-6">
                {MOCK_COMPLIANCE_ARTICLES.map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{article.date}</p>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{article.excerpt}</p>
                    <div className="mt-2 h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-blue-600 font-bold text-sm hover:underline flex items-center justify-center">
                View More Articles
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </section>

            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Compliance Audit?</h3>
              <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                Connect with our certified compliance experts for an end-to-end audit of your data protection, AML, or corporate governance frameworks.
              </p>
              <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-bold hover:bg-gray-100 shadow-sm transition-all">
                Request Expert Consultation
              </button>
            </section>
            
            <section className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-3 underline decoration-blue-500">Other Relevant Matters</h4>
              <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  PITA & PAYE Remittance Timelines
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Intellectual Property Maintenance (Trademark Renewals)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Consumer Protection & FCCPC Regulations
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Industrial Inspectorate Division (IID) Compliance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Local Content (NOGICD) Compliance for Oil & Gas
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-16 bg-white p-12 rounded-2xl text-center border border-gray-200 shadow-sm">
          <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a Compliance Officer?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto italic">Browse our Careers section to hire certified compliance professionals or post an opening for your organization.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-800 font-bold transition-colors">
              Go to Careers
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 font-bold transition-colors">
              Post a Job Opening
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Compliance;
