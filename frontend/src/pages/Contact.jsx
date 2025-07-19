import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form');
      }

      setSuccess('Thank you! Your message has been sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError(error.message || 'Server error, please try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 m-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-sm text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
                setSuccess('');
              }}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700"
              required
              aria-describedby="nameHelp"
            />
            <p id="nameHelp" className="text-xs text-gray-500 mt-1">
              Your name helps us address you properly.
            </p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
                setSuccess('');
              }}
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700"
              required
              aria-describedby="emailHelp"
            />
            <p id="emailHelp" className="text-xs text-gray-500 mt-1">
              We’ll use this to respond to your inquiry.
            </p>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError('');
                setSuccess('');
              }}
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 min-h-[120px]"
              required
              aria-describedby="messageHelp"
            />
            <p id="messageHelp" className="text-xs text-gray-500 mt-1">
              Tell us how we can assist you.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-medium text-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-[#004B8D] hover:bg-[#FFDE73] hover:text-gray-800'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;