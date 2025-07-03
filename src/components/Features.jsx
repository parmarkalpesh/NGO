import { Flame, CalendarCheck, Users, Activity } from 'lucide-react'

const features = [
  {
    title: 'Daily Skill Logs',
    description: 'Track your daily learning streak and never miss a beat.',
    icon: <CalendarCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'Collaboration',
    description: 'Work together with learners or mentors on shared goals.',
    icon: <Users className="w-10 h-10 text-green-600" />,
  },
  {
    title: 'Growth Insights',
    description: 'Visualize your progress over time with intuitive analytics.',
    icon: <Activity className="w-10 h-10 text-purple-600" />,
  },
  {
    title: 'Streak Motivation',
    description: 'Build momentum with powerful streak tracking and rewards.',
    icon: <Flame className="w-10 h-10 text-red-600" />,
  },
]

const Features = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Powerful <span className="text-blue-600">Features</span> for Lifelong Learners
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Everything you need to stay motivated, grow skills, and showcase progress.
        </p>
      </div>

      <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
