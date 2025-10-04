import { useState } from 'react';
import { Menu, X, Brain, Zap, Database, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const products = [
    {
      icon: Brain,
      title: 'AI Agent Solutions',
      description: 'Intelligent autonomous agents powering workflow automation and strategic decision support',
      color: 'from-rose-400 to-pink-500',
      link: 'https://chatbot.ai-mindflicker.com',
      openInModal: true
    },
    {
      icon: Brain,
      title: 'Neural Insights',
      description: 'Advanced neural network models delivering predictive analytics and intelligent decision-making capabilities',
      color: 'from-emerald-400 to-teal-500',
      link: '#neural-insights'
    },
    {
      icon: Zap,
      title: 'Custom ML Solutions',
      description: 'Tailored machine learning and deep learning solutions engineered for your specific business scenarios and data',
      color: 'from-amber-400 to-orange-500',
      link: '#custom-ml-solutions'
    },
    {
      icon: Database,
      title: 'DataForge AI',
      description: 'Intelligent data processing and transformation platform for seamless data pipeline optimization',
      color: 'from-sky-400 to-blue-500',
      link: '#dataforge-ai'
    },
    {
      icon: TrendingUp,
      title: 'Vision Analytics',
      description: 'Enterprise-grade computer vision solutions for real-time image and video intelligence',
      color: 'from-violet-400 to-purple-500',
      link: '#vision-analytics'
    }
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime' },
    { value: '10M+', label: 'API Calls Daily' },
    { value: '50+', label: 'AI Models' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                FlashPointAI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-emerald-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/50">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-slate-900/95 border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block hover:text-emerald-400 transition-colors">Home</a>
              <a href="#products" className="block hover:text-emerald-400 transition-colors">Products</a>
              <a href="#about" className="block hover:text-emerald-400 transition-colors">About</a>
              <a href="#contact" className="block hover:text-emerald-400 transition-colors">Contact</a>
              <button className="w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Next-Generation
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering enterprises with cutting-edge machine learning tools and intelligent automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-2xl shadow-emerald-500/50 flex items-center space-x-2 text-lg font-semibold">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-lg font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Industry-leading AI tools designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const isExternalLink = product.link.startsWith('http');
              const handleClick = (e: React.MouseEvent) => {
                if (product.openInModal) {
                  e.preventDefault();
                  setModalOpen(true);
                }
              };
              
              return (
                <a
                  key={index}
                  href={product.link}
                  onClick={handleClick}
                  {...(isExternalLink && !product.openInModal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                    {product.title}
                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Leading the <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Revolution</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We specialize in developing innovative machine learning solutions that drive business growth and operational excellence. Our team of experts combines cutting-edge research with practical implementation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From predictive analytics to computer vision, we deliver scalable AI tools that integrate seamlessly into your existing infrastructure.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-teal-400 mb-2">200+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises leveraging our AI solutions to drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-2xl shadow-emerald-500/50 text-lg font-semibold">
                Contact Sales
              </button>
              <button className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-lg font-semibold">
                View Documentation
              </button>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-2">Contact Email</p>
              <a 
                href="mailto:flashpointai@163.com" 
                className="text-emerald-400 hover:text-emerald-300 text-lg font-medium transition-colors"
              >
                flashpointai@163.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold">FlashPointAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Next-generation AI and machine learning solutions for enterprises
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setModalOpen(true); }} className="hover:text-emerald-400 transition-colors">AI Agent Solutions</a></li>
                <li><a href="#neural-insights" className="hover:text-emerald-400 transition-colors">Neural Insights</a></li>
                <li><a href="#custom-ml-solutions" className="hover:text-emerald-400 transition-colors">Custom ML Solutions</a></li>
                <li><a href="#dataforge-ai" className="hover:text-emerald-400 transition-colors">DataForge AI</a></li>
                <li><a href="#vision-analytics" className="hover:text-emerald-400 transition-colors">Vision Analytics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="hover:text-emerald-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 FlashPointAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative w-[95vw] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-900/80 hover:bg-gray-900 text-white flex items-center justify-center transition-all shadow-lg"
              aria-label="关闭"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://chatbot.ai-mindflicker.com"
              className="w-full h-full border-0"
              title="AI Agent Solutions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
