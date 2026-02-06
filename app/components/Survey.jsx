import React from 'react';
import FallingSweethearts from '../FallingSweethearts';

export default function SurveyScreen({ surveyAnswers, onSurveyChange, onSubmit, sweethearts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4 relative">
      <FallingSweethearts sweethearts={sweethearts} />
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full relative z-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">📋 Valentine's Survey</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              1. What time should we wake up?
            </label>
            <input
              type="text"
              value={surveyAnswers.q1}
              onChange={(e) => onSurveyChange('q1', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              2. What should we eat for lunch?
            </label>
            <input
              type="text"
              value={surveyAnswers.q2}
              onChange={(e) => onSurveyChange('q2', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              3. What's your ideal date activity?
            </label>
            <textarea
              value={surveyAnswers.q3}
              onChange={(e) => onSurveyChange('q3', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 h-24"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              4. What should we eat for dinner?
            </label>
            <textarea
              value={surveyAnswers.q4}
              onChange={(e) => onSurveyChange('q4', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 h-24"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              5. What is your favorite color?
            </label>
            <textarea
              value={surveyAnswers.q5}
              onChange={(e) => onSurveyChange('q5', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 h-24"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              6. What is your favorite romantic gesture? 
            </label>
            <textarea
              value={surveyAnswers.q6}
              onChange={(e) => onSurveyChange('q6', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 h-24"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              7. Please share if you have any other special requests! 
            </label>
            <textarea
              value={surveyAnswers.q7}
              onChange={(e) => onSurveyChange('q7', e.target.value)}
              className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 h-24"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
}