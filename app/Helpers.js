import emailjs from '@emailjs/browser';

// Constants
export const SWEETHEART_MESSAGES = [
  'BE MINE', 'LOVE YOU', 'CUTIE PIE', 'BABY', 'XOXO',
  'HUG ME', 'TYDJ', 'KISS ME', 'MY LOVE', 'FOREVER', 
  'YOU & ME', 'SAY YES', 'BABYHIPPO', 'SMILE'
];

export const SWEETHEART_COLORS = [
  'bg-pink-300', 'bg-purple-300', 'bg-yellow-200', 
  'bg-green-200', 'bg-blue-200', 'bg-orange-200'
];

export const CORRECT_PASSWORD = '021426';

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

// Email sending function using EmailJS
export async function sendSurveyEmail(surveyAnswers) {
  // EmailJS configuration - GET THESE FROM YOUR EMAILJS DASHBOARD
  const SERVICE_ID = 'service_8sy9ujo';      // e.g., 'service_abc123'
  const TEMPLATE_ID = 'template_p0ew6qg';    // e.g., 'template_xyz789'
  const PUBLIC_KEY = 'n0qtos-mbm6K38ePg';      // e.g., 'abcDEF123xyz'

  const templateParams = {
    wakeup: surveyAnswers.q1,
    lunch: surveyAnswers.q2,
    ideal_date: surveyAnswers.q3,
    dinner: surveyAnswers.q4,
    favorite_color: surveyAnswers.q5,
    romantic_gesture: surveyAnswers.q6,
    special_request: surveyAnswers.q7,
    date: new Date().toLocaleString()
  };

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log('Email sent successfully!', result.text);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}