import React from 'react';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-gray-500 py-12 px-8 border-t border-gray-100 font-sans max-w-7xl mt-10 mx-auto">
               
                <div className="grid grid-cols-4 gap-8 mb-12">

                    <div>
                        <div className="h-8 mb-4">
                            <img className='h-full w-auto object-contain' src={Logo} alt="Logo-Name" />
                        </div>

                        <p className="text-sm text-[#64748b] mb-6">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex gap-4 text-sm font-semibold text-gray-600">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-900 mb-4">PRODUCT</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <a href="#">Home</a>
                            <a href="#">Technologies</a>
                            <a href="#">Projects</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-900 mb-4">COMPANY</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-900 mb-4">LEGAL</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-6 flex justify-between text-xs text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;