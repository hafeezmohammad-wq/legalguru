
import React, { useState } from 'react';

const Subscription: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const subscriptionItems = [
    { id: 'judgments', label: 'Judgments & Legal Reviews', description: 'Weekly digests of landmark cases and expert analysis.' },
    { id: 'jobs', label: 'Job Openings & Career Alerts', description: 'Instant notifications for new legal roles in your preferred regions.' },
    { id: 'briefs', label: 'Hold My Brief Notifications', description: 'Be the first to know when new representation briefs are posted.' },
    { id: 'compliance', label: 'Compliance & Regulatory Updates', description: 'Monthly newsletters on changes to Nigerian corporate and tax laws.' },
    { id: 'insights', label: 'Thought Leadership Articles', description: 'Monthly collection of top-read legal insights and practice notes.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
          <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscription Confirmed!</h2>
          <p className="text-gray-600 mb-6">You have successfully updated your preferences. You will start receiving updates soon.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-blue-600 font-semibold hover:underline"
          >
            Manage other settings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Subscription Center</h1>
        <p className="mt-4 text-xl text-gray-500">Choose the legal updates that matter most to your practice.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Your Details</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Subscription Preferences</h2>
            <div className="grid gap-4">
              {subscriptionItems.map((item) => (
                <label key={item.id} className="relative flex items-start p-4 cursor-pointer hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
                  <div className="flex items-center h-5">
                    <input
                      name={item.id}
                      type="checkbox"
                      className="focus:ring-blue-500 h-5 w-5 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <span className="font-bold text-gray-900">{item.label}</span>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Frequency</h2>
            <div className="flex flex-wrap gap-4">
              {['Instant', 'Daily Digest', 'Weekly Summary'].map((freq) => (
                <label key={freq} className="flex items-center">
                  <input name="frequency" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" defaultChecked={freq === 'Weekly Summary'} />
                  <span className="ml-2 text-sm text-gray-700">{freq}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-gray-50 px-8 py-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
