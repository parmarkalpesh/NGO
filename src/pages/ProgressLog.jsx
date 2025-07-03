import React from 'react'

const mockLogs = [
  {
    id: 1,
    date: '2025-06-30',
    content: 'Completed React Router setup for SkillHub!',
    media: null,
  },
  {
    id: 2,
    date: '2025-06-29',
    content: 'Designed profile page UI and added static data.',
    media: '/progress/design-preview.png',
  },
  {
    id: 3,
    date: '2025-06-28',
    content: 'Started working on repository viewer page.',
    media: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
]

const ProgressLog = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">📅 My Learning Timeline</h2>

        <ul className="space-y-6">
          {mockLogs.map((log) => (
            <li key={log.id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{log.date}</p>
              <p className="text-lg">{log.content}</p>

              {/* Media */}
              {log.media && (
                <div className="mt-4">
                  {log.media.endsWith('.png') || log.media.endsWith('.jpg') ? (
                    <img src={log.media} alt="Progress media" className="rounded-lg w-full max-w-md" />
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        src={log.media}
                        title="Progress video"
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProgressLog
