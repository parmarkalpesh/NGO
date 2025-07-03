import { useEffect, useState } from 'react'
import aboutImage1 from '../assets/engineer.svg'
import aboutImage2 from '../assets/genius.svg'

const About = () => {
  const images = [aboutImage1, aboutImage2]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full min-h-screen py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-20 flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={images[currentImage]}
            alt="About SkillHub"
            className="w-full max-w-md bg-transparent transition-all duration-700 ease-in-out"
          />
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why <span className="text-blue-600">SkillHub</span>?
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            SkillHub isn’t just a platform — it’s your personal growth partner.
            Track your progress, build habits, and collaborate with mentors and peers
            who are on the same journey as you.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>📈 Track daily skill logs and milestones</li>
            <li>🤝 Collaborate on skill projects with others</li>
            <li>🌟 Build a public skill profile like GitHub, but for growth</li>
            <li>🧠 Learn with accountability and progress streaks</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            🔍 Explore Skills
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
