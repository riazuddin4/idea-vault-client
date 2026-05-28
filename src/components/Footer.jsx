
const Footer = () => {
    return (
        // <footer className="bg-white border-t border-slate-200 py-12">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        //             <div className="flex flex-col items-center md:items-start gap-2">
        //                 <span className="text-2xl font-black tracking-tighter text-blue-600">Ideas</span>
        //                 <p className="text-sm text-slate-500 font-medium">© 2026 Ideas Inc. All rights reserved.</p>
        //             </div>

        //             <div className="flex items-center gap-8 text-sm font-bold text-slate-600">
        //                 <a
        //                     href="#"
        //                     className="hover:text-blue-600 transition-colors"
        //                 >
        //                     Privacy Policy
        //                 </a>
        //                 <a
        //                     href="#"
        //                     className="hover:text-blue-600 transition-colors"
        //                 >
        //                     Terms of Service
        //                 </a>
        //                 <a
        //                     href="#"
        //                     className="hover:text-blue-600 transition-colors"
        //                 >
        //                     Contact Support
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        <footer className="bg-[#050B1A] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">


                <div>
                    <h2 className="text-2xl font-bold text-indigo-400 mb-3">
                        IdeaVault
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A platform to share, validate, and refine innovative startup ideas
                        with the community.
                    </p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Browse Ideas
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Submit Idea
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Tech
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                AI
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Health
                            </a>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>

                    <div className="flex items-center gap-4 mb-4">
                        
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932z" />
                            </svg>
                        </a>

                       
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24">
                                <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.95c.6.1.82-.26.82-.58v-2.03c-3.26.71-3.95-1.57-3.95-1.57-.55-1.4-1.34-1.78-1.34-1.78-1.1-.76.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .1-.78.42-1.32.76-1.62-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.2a11.5 11.5 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.65.24 2.87.12 3.17.76.82 1.22 1.87 1.22 3.15 0 4.52-2.74 5.5-5.36 5.8.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                            </svg>
                        </a>

                       
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24">
                                <path d="M2 4h20v16H2V4zm10 9L4 6v12h16V6l-8 7z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-gray-400 text-sm">
                        contact@ideavault.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;