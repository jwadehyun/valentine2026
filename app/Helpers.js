// Constants
export const SWEETHEART_MESSAGES = [
  'BE MINE', 'LOVE YOU', 'CUTIE PIE', 'SWEET', 'XOXO',
  'HUG ME', 'TRUE LOVE', 'KISS ME', 'MY LOVE', 'SO FINE',
  'FOREVER', 'YOU & ME', 'SAY YES', 'BE TRUE', 'SMILE'
];

export const SWEETHEART_COLORS = [
  'bg-pink-300', 'bg-purple-300', 'bg-yellow-200', 
  'bg-green-200', 'bg-blue-200', 'bg-orange-200'
];

export const CORRECT_PASSWORD = 'valentine2026';

// Helper function to generate sweethearts
export function generateSweethearts(count = 15) {
  return [...Array(count)].map((_, i) => ({
    id: i,
    message: SWEETHEART_MESSAGES[Math.floor(Math.random() * SWEETHEART_MESSAGES.length)],
    color: SWEETHEART_COLORS[Math.floor(Math.random() * SWEETHEART_COLORS.length)],
    left: Math.random() * 100,
    duration: 8 + Math.random() * 7,
    delay: Math.random() * 5
  }));
}

// Email sending function
export function sendSurveyEmail(surveyAnswers) {
  const recipientEmail = 'your-email@example.com'; // Change this to your email
  const subject = 'Valentine Survey Results - They Said YES! 💝';
  const body = `
Survey Results:
===============

Question 1: What's your favorite color?
Answer: ${surveyAnswers.q1}

Question 2: What's your favorite type of flower?
Answer: ${surveyAnswers.q2}

Question 3: What's your ideal date activity?
Answer: ${surveyAnswers.q3}

Response to Valentine Question: YES! 💚

Date: ${new Date().toLocaleString()}
  `;
  
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, '_blank');
}