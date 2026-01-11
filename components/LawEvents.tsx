
import React from 'react';

const MOCK_EVENTS = [
  {
    id: '1',
    title: 'NBA Section on Business Law (SBL) Annual Conference',
    date: 'July 15-17, 2025',
    location: 'Eko Hotels, Lagos',
    type: 'Conference',
    description: 'The premier gathering for business law practitioners in Nigeria, focusing on current trends in corporate law and investment.',
    organizer: 'NBA-SBL'
  },
  {
    id: '2',
    title: 'CIArb Nigeria Branch Annual Conference',
    date: 'November 5-6, 2025',
    location: 'Transcorp Hilton, Abuja',
    type: 'Conference',
    description: 'Exploring the future of Alternative Dispute Resolution (ADR) and arbitration in the Nigerian commercial space.',
    organizer: 'CIArb Nigeria'
  },
  {
    id: '3',
    title: 'Legal Tech & AI in Nigerian Practice',
    date: 'May 20, 2025',
    location: 'Virtual / Webinar',
    type: 'Webinar',
    description: 'A deep dive into how generative AI is transforming litigation and legal research for Nigerian lawyers.',
    organizer: 'LegalGuru Insights'
  },
  {
    id: '4',
    title: 'Taxation Law Masterclass',
    date: 'June 12, 2025',
    location: 'Port Harcourt',
    type: 'Workshop',
    description: 'Practical training on the 2024 Finance Act and its implications for corporate tax compliance.',
    organizer: 'CITN'
  }
];

const LawEvents: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Community & Growth</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Law Events & Webinars
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Connect with peers and experts at upcoming legal conferences, workshops, and virtual sessions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                  event.type === 'Conference' ? 'bg-orange-100 text-orange-800' : 
                  event.type === 'Webinar' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {event.type}
                </span>
                <span className="text-sm font-bold text-slate-900">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {event.location}
                <span className="mx-2">•</span>
                <span>By {event.organizer}</span>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  View Agenda
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Hosting an Event?</h3>
        <p className="mb-6 opacity-90">Partner with LegalGuru to reach over 50,000 legal practitioners across Nigeria.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
          Submit Your Event
        </button>
      </div>
    </div>
  );
};

export default LawEvents;
