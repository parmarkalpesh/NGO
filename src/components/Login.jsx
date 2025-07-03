import { useState } from 'react'
import { Github } from 'lucide-react'
import googleLogo from '../assets/google-logo.svg'

const Login = () => {
  const [warning, setWarning] = useState('')

  const handleClick = (provider) => {
    setWarning(`${provider} login coming soon!`)
    setTimeout(() => setWarning(''), 3000)
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Sign in to <span className="text-blue-600">SkillHub</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2 mb-8 text-sm">
          Track your skills, join the community, and grow faster.
        </p>

        {/* Google Sign-in */}
        <button
          onClick={() => handleClick('Google')}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-4 rounded-lg hover:shadow-md hover:border-blue-600 transition-all duration-300 mb-4"
        >
          <img src={googleLogo} alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* GitHub Sign-in */}
        <button
          onClick={() => handleClick('GitHub')}
          className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </button>

        {/* Warning Message */}
        {warning && (
          <div className="mt-4 text-sm text-yellow-600 dark:text-yellow-400 text-center">
            ⚠️ {warning}
          </div>
        )}
      </div>
    </section>
  )
}

export default Login
