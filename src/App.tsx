import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Code2, 
  Palette, 
  Compass, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  MonitorPlay,
  Lightbulb,
  FileCode,
  LayoutDashboard
} from 'lucide-react';

interface ProjectIdea {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  gradient: string;
}

const IDEAS: ProjectIdea[] = [
  {
    id: 'saas-dashboard',
    category: 'Productivity & Analytics',
    title: 'Modern Analytics Dashboard',
    description: 'Real-time metrics, interactive chart visualizations, team collaboration, and export tools.',
    badge: 'Popular',
    icon: LayoutDashboard,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'creative-studio',
    category: 'Creative & Design',
    title: 'Design System & Studio',
    description: 'Component playground, color palette generator, typography tester, and CSS code export.',
    badge: 'Creative',
    icon: Palette,
    gradient: 'from-fuchsia-600 to-pink-600'
  },
  {
    id: 'smart-tools',
    category: 'Developer & Utility',
    title: 'Developer Utilities Hub',
    description: 'Regex tester, JSON formatter, API request simulator, and markdown live preview editor.',
    badge: 'Utility',
    icon: Code2,
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'workflow-kanban',
    category: 'Task Management',
    title: 'Interactive Project Board',
    description: 'Drag-and-drop task boards, sprints, tags, progress tracking, and filtering system.',
    badge: 'Workflow',
    icon: Layers,
    gradient: 'from-amber-600 to-orange-600'
  }
];

export default function App() {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  const activeIdea = IDEAS.find((item) => item.id === selectedIdea);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-base tracking-tight text-white">Workspace Hub</span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Ready to Build
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Environment Active
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Tell me what you'd like to create or customize</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            What are we building <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">today?</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your environment is fully initialized with React 19, Tailwind CSS, Lucide icons, and Motion. 
            Describe your idea, pick a starter blueprint, or tell me your specific workflow.
          </p>
        </div>

        {/* Blueprint Starters */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Featured Concept Blueprints
              </h2>
            </div>
            <span className="text-xs text-slate-400">Click any card to view starter brief</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IDEAS.map((idea) => {
              const Icon = idea.icon;
              const isSelected = selectedIdea === idea.id;
              return (
                <div
                  key={idea.id}
                  onClick={() => setSelectedIdea(idea.id === selectedIdea ? null : idea.id)}
                  className={`group relative rounded-2xl border p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between text-left ${
                    isSelected 
                      ? 'bg-slate-900/90 border-indigo-500 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500' 
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${idea.gradient} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {idea.badge}
                      </span>
                    </div>

                    <h3 className="font-semibold text-slate-100 text-base mb-1 group-hover:text-white transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {idea.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
                    <span>{isSelected ? 'Selected' : 'View details'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Idea Details Modal / Banner */}
        {activeIdea && (
          <div className="mt-8 p-6 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">{activeIdea.category}</span>
                  <span className="text-slate-600">•</span>
                  <h4 className="text-lg font-bold text-white">{activeIdea.title}</h4>
                </div>
                <p className="text-sm text-slate-300 max-w-2xl">
                  Ready to turn this into reality? Just type: <span className="text-indigo-300 font-mono text-xs bg-slate-900 px-2 py-0.5 rounded border border-indigo-800">"Build the {activeIdea.title}"</span> or describe any customization.
                </p>
              </div>
              <button
                onClick={() => handleCopyPrompt(`Build a complete ${activeIdea.title} with modern interactive features, state management, and responsive layout.`)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 active:scale-95"
              >
                {copiedText ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    Copied Request!
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Copy Prompt
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Quick Capabilities Indicator */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <MonitorPlay className="w-5 h-5 mx-auto mb-2 text-indigo-400" />
            <div className="text-xs font-semibold text-slate-200">Interactive Web Apps</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Rich UI & animated UX</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <LayoutDashboard className="w-5 h-5 mx-auto mb-2 text-purple-400" />
            <div className="text-xs font-semibold text-slate-200">Dashboards & Portals</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Data filtering & analytics</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <Lightbulb className="w-5 h-5 mx-auto mb-2 text-amber-400" />
            <div className="text-xs font-semibold text-slate-200">Custom Business Tools</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Calculators, generators, editors</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <FileCode className="w-5 h-5 mx-auto mb-2 text-emerald-400" />
            <div className="text-xs font-semibold text-slate-200">Full React Ecosystem</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Modern hooks & Tailwind v4</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        Workspace Hub • Type your prompt below to start building your application
      </footer>
    </div>
  );
}
