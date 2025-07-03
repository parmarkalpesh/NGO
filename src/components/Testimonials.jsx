const testimonials = [
  {
    name: 'Aarav Mehta',
    title: 'Frontend Developer',
    quote:
      'SkillHub helped me stay consistent with daily learning. The progress streaks and logs really kept me accountable!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Riya Shah',
    title: 'UI/UX Designer',
    quote:
      'I loved being able to showcase my growth visually. It’s like a GitHub for skills — and it keeps me motivated every day!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Kunal Patel',
    title: 'AI Enthusiast',
    quote:
      'I track my machine learning journey daily here. Collaborating with others keeps learning fun and social!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

const Testimonials = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          What <span className="text-blue-600">Learners Say</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Hear from real users who are building habits and skills with SkillHub.
        </p>
      </div>

      <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
