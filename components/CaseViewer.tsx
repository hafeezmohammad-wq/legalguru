
import React, { useState } from 'react';
import { Case } from '../types';
import { generateCaseSummary, answerLegalQuestion } from '../services/geminiService';

interface CaseViewerProps {
  data: Case;
  onBack: () => void;
}

const CaseViewer: React.FC<CaseViewerProps> = ({ data, onBack }) => {
  const [activeTab, setActiveTab] = useState<'text' | 'holdings' | 'history' | 'references' | 'details'>('text');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [userQuestion, setUserQuestion] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const handleGenerateSummary = async () => {
    setIsLoadingAi(true);
    const summary = await generateCaseSummary(data.fullText);
    setAiResponse(summary);
    setIsLoadingAi(false);
  };

  const handleAskQuestion = async () => {
    if (!userQuestion.trim()) return;
    setIsLoadingAi(true);
    const answer = await answerLegalQuestion(data.fullText, userQuestion);
    setAiResponse(answer);
    setIsLoadingAi(false);
  };

  const getHoldings = () => {
    if (data.id === '1') {
      return [
        { principle: 'Nature of Jurisdiction', summary: 'Jurisdiction is a radical and crucial question of competence. If a court lacks jurisdiction, the proceedings are a nullity, however well-conducted or brilliantly decided they may be.' },
        { principle: 'Constitutional Limitations on Judicial Power', summary: 'Section 6(6)(d) of the 1979 Constitution limits the judicial powers of the court, precluding it from entertaining actions relating to existing laws made between Jan 1966 and Oct 1979 for determining the competence of the maker.' },
        { principle: 'Supremacy of Decrees and Ouster Clauses', summary: 'Under the Federal Military Government (Supremacy and Enforcement of Powers) Act, clear ouster clauses in Decrees must be religiously obeyed by courts, effectively barring inquiry into the validity of specific executive acts like land forfeiture.' },
        { principle: 'Validation of Executive Acts', summary: 'Decree No. 17 and No. 18 of 1977 validated Edicts and subsidiary instruments (such as the 1976 Land Order) made by Military Governors, removing them from the ambit of judicial review.' }
      ];
    }
    if (data.id === '3') {
      return [
        { principle: 'Intention to Create Legal Relations', summary: 'An undertaking by a bank to pay insurance premiums on a mortgaged property is merely a device to protect its investment and is not intended to confer a right of action on the mortgagor.' },
        { principle: 'Consideration for Ancillary Agreements', summary: 'Interest charged on a primary overdraft facility cannot constitute valid consideration for a separate, distinct undertaking unless expressly agreed by the parties.' },
        { principle: 'Discharge by Performance (Liquidation)', summary: 'A contract for the maintenance of insurance on a mortgaged property becomes automatically discharged once the underlying mortgage debt or overdraft is liquidated.' },
        { principle: 'Strict Proof of Special Damages', summary: 'Special damages must be claimed specially and proved strictly. A court cannot award more than the sum insured, nor can it award damages for items not expressly covered by the policy.' }
      ];
    }
    return [
      { principle: 'Ratio Decidendi', summary: 'The core legal principle upon which the court based its final decision.' },
      { principle: 'Standard of Proof', summary: 'The burden of proof required to establish the claims made by the parties.' }
    ];
  };

  const getHistory = () => {
    const history = [];
    if (data.id === '1') {
      history.push({ level: 'Supreme Court', status: 'Appeal Allowed (Judgment Set Aside for lack of Jurisdiction)', color: 'bg-blue-600' });
      history.push({ level: 'Court of Appeal (Akpata, J.C.A.)', status: 'Appeal Dismissed (Affirmed Jurisdiction)', color: 'bg-blue-400' });
      history.push({ level: 'High Court of Lagos (Balogun, J.)', status: 'Trial Court - Judgment for Plaintiff', color: 'bg-blue-200' });
      return history;
    }
    if (data.id === '3') {
      history.push({ level: 'Court of Appeal', status: 'Appeal Allowed (Judgment Set Aside)', color: 'bg-blue-600' });
      history.push({ level: 'Yola High Court (Mubi J.)', status: 'Trial Court - Judgment for Respondent', color: 'bg-blue-200' });
      return history;
    }
    history.push({ level: data.court, status: 'Final Determination', color: 'bg-blue-500' });
    return history;
  };

  const getReferences = () => {
    if (data.id === '1') {
      return {
        statutes: [
          'Constitution of the Federal Republic of Nigeria 1979, S. 6(6)(d), 236',
          'States (Creation and Transitional Provisions) Act No. 17 of 1977',
          'Tribunals or Inquiries (Validation) Act No. 18 of 1977',
          'Determination of Certain Interests in Lands Edict No. 3 of 1976',
          'Registration of Titles Law'
        ],
        cases: [
          'Madukolu v. Nkemdilim (1962) 1 All N.L.R. 587',
          'Uwaifo v. Attorney-General of Bendel State (1982) 7 S.C. 124',
          'Joseph Mangtup Din v. Attorney-General of the Federation (1988) 4 LGR 147',
          'Peenok Investments Ltd v. Hotel Presidential Ltd (1983) 4 N.C.L.R. 122'
        ],
        regulations: ['Determination of Interests in State Lands Order LSLN No. 9 of 1976'],
        textbooks: ['de Smith, Judicial Review of Administrative Action', 'Words and Phrases Legally Defined']
      };
    }
    if (data.id === '3') {
      return {
        statutes: ['Insurance Policy No F/84/5829/HQ', 'Finance Act'],
        cases: [
          'Opara v. D.S. Nigeria Ltd (1995) 4 LGR 440',
          'NNB Ltd v. Odiase (1993) 8 LGR 235',
          'Temco Eng. Co. Ltd v. S.B.N. Ltd (1995) 5 LGR 607'
        ],
        regulations: ['Banking Regulations'],
        textbooks: ['Chitty on Contracts', 'Halsbury’s Laws of England']
      };
    }
    return { statutes: [], cases: [], regulations: [], textbooks: [] };
  };

  const references = getReferences();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="text-sm text-blue-600 hover:text-blue-800 mb-2 flex items-center">
          ← Back to Search
        </button>
        <h1 className="text-2xl font-bold text-gray-900 font-serif">{data.title}</h1>
        <div className="mt-1 flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="font-bold text-blue-700">{data.citation}</span>
          <span>•</span>
          <span>{data.court}</span>
          <span>•</span>
          <span>{data.date}</span>
          <span>•</span>
          <span>Hon. Justice {data.judge}</span>
        </div>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200">
          <div className="border-b border-gray-200 flex overflow-x-auto bg-gray-50">
            {[
              { id: 'text', label: 'Full Text' },
              { id: 'holdings', label: 'Holdings / Held' },
              { id: 'history', label: 'Case History' },
              { id: 'references', label: 'References' },
              { id: 'details', label: 'Counsel & Details' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white border-t-2 border-blue-600 text-blue-700 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 p-8 overflow-y-auto max-h-[80vh] bg-white">
            {activeTab === 'text' && (
              <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-gray-800">
                {data.fullText}
              </div>
            )}

            {activeTab === 'holdings' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">Ratio Decidendi & Legal Principles</h3>
                {getHoldings().map((h, i) => (
                  <div key={i} className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <h4 className="font-bold text-blue-900 mb-1">{h.principle}</h4>
                    <p className="text-blue-800 leading-relaxed">{h.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="py-4">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Judicial Journey</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-12">
                    {getHistory().map((item, i) => (
                      <div key={i} className="relative pl-12">
                        <div className={`absolute left-0 w-8 h-8 rounded-full ${item.color} border-4 border-white shadow-sm z-10 flex items-center justify-center`}>
                          <span className="text-white text-xs">{i + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{item.level}</h4>
                          <p className="text-gray-600">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'references' && (
              <div className="space-y-10">
                {references.statutes.length > 0 && (
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center border-b pb-2">Statutes & Decrees</h3>
                    <ul className="space-y-2">
                      {references.statutes.map((s, i) => <li key={i} className="text-gray-700 bg-gray-50 p-3 rounded-md">{s}</li>)}
                    </ul>
                  </section>
                )}
                {references.cases.length > 0 && (
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center border-b pb-2">Cases Cited</h3>
                    <ul className="space-y-2">
                      {references.cases.map((c, i) => <li key={i} className="text-gray-700 italic bg-gray-50 p-3 rounded-md">{c}</li>)}
                    </ul>
                  </section>
                )}
                {references.textbooks.length > 0 && (
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center border-b pb-2">Textbooks</h3>
                    <ul className="space-y-2">
                      {references.textbooks.map((t, i) => <li key={i} className="text-gray-700 bg-gray-50 p-3 rounded-md">{t}</li>)}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Judicial Panel</h3>
                  <div className="bg-gray-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Lead Judgment</h4>
                      <p className="text-gray-900 font-bold">Hon. Justice {data.judge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Full Panel</h4>
                      <ul className="text-gray-900 font-medium space-y-1">
                        {data.id === '1' ? (
                          <>
                            <li>Justice Bello, C.J.N.</li>
                            <li>Justice Obaseki, J.S.C.</li>
                            <li>Justice Eso, J.S.C.</li>
                            <li>Justice Nnamani, J.S.C.</li>
                            <li>Justice Karibi-Whyte, J.S.C.</li>
                            <li>Justice Belgore, J.S.C.</li>
                          </>
                        ) : (
                          <li>Panel Members As Cited</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Counsel Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Appellant Side</h4>
                      <p className="text-gray-900 font-medium">{data.id === '1' ? 'Mrs. Akinsanya (Solicitor-General)' : 'Counsel as per brief'}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-slate-500">
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Respondent Side</h4>
                      <p className="text-gray-900 font-medium">{data.id === '1' ? 'Chief F.R.A. Williams, S.A.N.' : 'Counsel as per brief'}</p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          <div className="bg-slate-900 rounded-xl shadow-lg p-6 text-white sticky top-24">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">✨</span>
              <h3 className="font-bold text-lg">LegalGuru AI</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">Analyze this judgment with Gemini 3 Flash.</p>
            <div className="space-y-3">
              <button onClick={handleGenerateSummary} disabled={isLoadingAi} className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold transition-colors disabled:opacity-50 flex items-center justify-center">
                {isLoadingAi ? 'Analyzing...' : 'Summarize Ratio'}
              </button>
              <div className="border-t border-slate-700 pt-3 mt-4">
                <textarea value={userQuestion} onChange={(e) => setUserQuestion(e.target.value)} className="w-full bg-slate-800 text-white text-sm rounded-lg border border-slate-700 p-3 mb-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={3} placeholder="Ask about this case..." />
                <button onClick={handleAskQuestion} disabled={isLoadingAi || !userQuestion} className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-bold disabled:opacity-50 transition-all">Ask AI</button>
              </div>
            </div>
            {aiResponse && (
              <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30 text-sm text-gray-200">
                <div className="font-bold text-blue-400 mb-2">Analysis Result</div>
                <div className="whitespace-pre-wrap leading-relaxed">{aiResponse}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseViewer;
