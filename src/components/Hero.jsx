import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../assets/app-launch.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-24 flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-20">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900 dark:text-white">
            Share Surplus Food <br /> with <span className="text-green-600">NGOConnect</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            A platform to reduce food waste and help those in need by connecting donors with NGOs and hungry individuals.
          </p>
          <h2 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">
            We help you{' '}
            <span className="text-green-600 font-bold">
              <Typewriter
                words={['donate easily', 'track food sharing', 'support communities']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            🍱 Donate Food Now
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={heroImage}
            alt="NGOConnect Hero"
            className="w-full max-w-md bg-transparent"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;