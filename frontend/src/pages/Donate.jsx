import { useState, useEffect } from 'react';

function Donate() {
  const [donationType, setDonationType] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    if (!date) {
      setError('Please select a date');
      return;
    }
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }
    if (!donationType) {
      setError('Please select a donation type');
      return;
    }
    if (donationType === 'money' && !amount) {
      setError('Please select a donation amount');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          date,
          location,
          donationType,
          amount: donationType === 'money' ? Number(amount) : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit donation');
      }

      setSuccess('Thank you! Your donation has been submitted successfully.');
      setShowPopup(true);
      setName('');
      setPhone('');
      setDate('');
      setLocation('');
      setDonationType('');
      setAmount('');
    } catch (error) {
      setError(error.message || 'Server error, please try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hide popup after 2 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 p-4 sm:p-6">
      {/* Main Content with Conditional Blur */}
      <div className={`w-full max-w-2xl transition-all duration-300 ${showPopup ? 'filter blur-sm' : ''}`}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 m-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Support Our Cause
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}
          {success && !showPopup && (
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
                Your name helps us acknowledge your contribution.
              </p>
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError('');
                  setSuccess('');
                }}
                placeholder="Enter your 10-digit phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700"
                required
                pattern="\d{10}"
                aria-describedby="phoneHelp"
              />
              <p id="phoneHelp" className="text-xs text-gray-500 mt-1">
                We’ll use this to contact you if needed.
              </p>
            </div>

            {/* Date Field */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Donation Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setError('');
                  setSuccess('');
                }}
                min={today}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 appearance-none"
                required
                aria-describedby="dateHelp"
              />
              <p id="dateHelp" className="text-xs text-gray-500 mt-1">
                Select a date starting from today.
              </p>
            </div>

            {/* Location Field */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setError('');
                  setSuccess('');
                }}
                placeholder="Enter your city or location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700"
                required
                aria-describedby="locationHelp"
              />
              <p id="locationHelp" className="text-xs text-gray-500 mt-1">
                Where are you donating from?
              </p>
            </div>

            {/* Donation Type Selection */}
            <div>
              <label
                htmlFor="donationType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                What would you like to donate?
              </label>
              <select
                id="donationType"
                value={donationType}
                onChange={(e) => {
                  setDonationType(e.target.value);
                  setError('');
                  setSuccess('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700"
                required
                aria-describedby="donationTypeHelp"
              >
                <option value="" disabled>
                  Select donation type
                </option>
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="money">Money</option>
                <option value="education">Educational Supplies</option>
                <option value="medical">Medical Supplies</option>
              </select>
              <p id="donationTypeHelp" className="text-xs text-gray-500 mt-1">
                Choose the type of donation to support those in need.
              </p>
            </div>

            {/* Amount Selection */}
            {donationType === 'money' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {[100, 250, 500, 1000].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setAmount(value);
                        setError('');
                        setSuccess('');
                      }}
                      className={`py-2 px-4 border rounded-lg text-sm font-medium transition-colors ${
                        amount === value
                          ? 'bg-[#004B8D] text-white border-[#004B8D]'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-[#FFDE73] hover:text-gray-800'
                      }`}
                    >
                      ₹{value}
                    </button>
                  ))}
                </div>
                <p id="amountHelp" className="text-xs text-gray-500 mt-1">
                  Select an amount to contribute.
                </p>
              </div>
            )}

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
                'Donate Now'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#004B8D] text-white p-6 rounded-lg shadow-2xl text-center animate-fade-in">
            <h3 className="text-xl font-bold">Thank You For Donating To Us</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;