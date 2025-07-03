import { useState } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import avatar from '../assets/krutik-naina.jpg' // ✅ import the image


const Profile = () => {
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <section className="w-full min-h-screen px-6 py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Profile Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-28 h-28 rounded-full mx-auto shadow-lg"
                />

                <h1 className="text-3xl font-bold mt-4">Krutik Naina</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    MERN Developer | Learning & Building at SkillHub 🚀
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="https://github.com/KrutikNaina" target="_blank" rel="noreferrer">
                        <Github className="hover:text-blue-600 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <Linkedin className="hover:text-blue-600 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <Twitter className="hover:text-blue-600 transition" />
                    </a>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-6 mb-10">
                {['projects', 'starred', 'followers'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === tab
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'projects' && 'My Projects'}
                        {tab === 'starred' && 'Starred'}
                        {tab === 'followers' && 'Followers'}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeTab === 'projects' && (
                    <>
                        <Card title="Portfolio Website" desc="Built with React & Tailwind" />
                        <Card title="SkillHub" desc="Skill showcase platform (WIP)" />
                    </>
                )}
                {activeTab === 'starred' && (
                    <>
                        <Card title="VedAI" desc="Spiritual AI chatbot using Gita/Vedas" />
                        <Card title="TravelBot" desc="Telegram AI Travel Guide" />
                    </>
                )}
                {activeTab === 'followers' && (
                    <>
                        <Card title="@dev_meena" desc="Follows you • MERN Learner" />
                        <Card title="@ai_sakshi" desc="Follows you • UI/UX Enthusiast" />
                    </>
                )}
            </div>
        </section>
    )
}

const Card = ({ title, desc }) => (
    <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{desc}</p>
    </div>
)

export default Profile
