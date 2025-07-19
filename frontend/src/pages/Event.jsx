import React from 'react';
import { Link } from 'react-router-dom';

function Event() {
  // Sample event data (replace with your actual data or API fetch)
  const events = [
    {
      id: 1,
      title: 'Food Drive',
      location: 'Rajkot, Gujrat',
      image: '/asset/food.png',
    },
    {
      id: 2,
      title: 'Educational Workshop',
      location: 'Jamnagar, Gujrat',
      image: '/asset/education.png',
    },
    {
      id: 3,
      title: 'Medical Camp',
      location: 'Bhuj, Gujrat',
      image: '/asset/medical.png',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-gray-200 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          All Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300"
            >
              {/* Event Image */}
              <div className="h-48 w-full">
                <img
                  src={event.image}
                  alt={`${event.title} event`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x192?text=Event';
                  }}
                />
              </div>
              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Location:</strong> {event.location}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;