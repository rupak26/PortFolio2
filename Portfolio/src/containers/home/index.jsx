import React from 'react';

const Home = () => {
    const redirectToContact = () => {
        window.location.href = '/contact';
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Greeting */}
                    <div className="space-y-4">
                        <p className="text-cyan-400 text-lg font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
                        
                        {/* Main heading with typing animation */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Hello, I'm Rupok
                            </span>
                            <br />
                            <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-normal mt-4 block">
                                Backend Developer
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Crafting robust server-side solutions and scalable architectures. Let's build something extraordinary together.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
                        <button
                            onClick={redirectToContact}
                            className="group relative px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 active:translate-y-0"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get in Touch
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{zIndex: -1}}></div>
                        </button>

                        <a
                            href="/RUPAK_BISWAS.pdf"
                            download
                            className="group px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold text-cyan-400 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                        >
                            Download Resume
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                            </svg>
                        </a>
                    </div>

                    {/* Social proof or stats */}
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-12 text-slate-400 border-t border-slate-700">
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-white">5+</p>
                            <p className="text-sm text-slate-500">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                            <p className="text-sm text-slate-500">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-white">30+</p>
                            <p className="text-sm text-slate-500">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default Home;