import { useState } from 'react'
import { Star, GitFork, Code, History, Settings, Bug } from 'lucide-react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github'

SyntaxHighlighter.registerLanguage('javascript', js)

const fileTree = [
  { name: 'index.js', content: `console.log("Hello SkillHub");` },
  { name: 'App.jsx', content: `const App = () => <h1>Hello App</h1>` },
  { name: 'README.md', content: `# My SkillHub Repo\nThis is a sample README.` },
]

const Repository = () => {
  const [activeTab, setActiveTab] = useState('code')
  const [activeFile, setActiveFile] = useState(fileTree[0])

  return (
    <section className="min-h-screen px-6 py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto border-b pb-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">KrutikNaina / skillhub-repo</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition">
              <Star size={16} /> Star
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition">
              <GitFork size={16} /> Fork
            </button>
          </div>
        </div>

        {/* Tab Nav */}
        <div className="flex gap-6 mt-4 border-b">
          {[
            { key: 'code', label: 'Code', icon: <Code size={16} /> },
            { key: 'commits', label: 'Commits', icon: <History size={16} /> },
            { key: 'issues', label: 'Issues', icon: <Bug size={16} /> },
            { key: 'settings', label: 'Settings', icon: <Settings size={16} /> },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 border-b-2 ${
                activeTab === tab.key
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent hover:border-gray-400'
              } flex items-center gap-2 text-sm transition`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* File Tree */}
        {activeTab === 'code' && (
          <>
            <div className="w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Files</h3>
              <ul className="space-y-2">
                {fileTree.map((file, idx) => (
                  <li
                    key={idx}
                    onClick={() => setActiveFile(file)}
                    className={`cursor-pointer p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 ${
                      activeFile.name === file.name
                        ? 'bg-blue-200 dark:bg-blue-800'
                        : ''
                    }`}
                  >
                    📄 {file.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* File Viewer */}
            <div className="w-2/3 p-4 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold mb-2">{activeFile.name}</h4>
              <SyntaxHighlighter language="javascript" style={github} customStyle={{ background: 'transparent' }}>
                {activeFile.content}
              </SyntaxHighlighter>
            </div>
          </>
        )}

        {activeTab === 'commits' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p>🕒 3 days ago: Initial commit</p>
            <p>🛠️ 1 day ago: Added file viewer</p>
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="text-gray-400">🚧 Issues feature coming soon.</div>
        )}

        {activeTab === 'settings' && (
          <div className="text-gray-400">⚙️ Settings for repo owner only (future).</div>
        )}
      </div>
    </section>
  )
}

export default Repository
