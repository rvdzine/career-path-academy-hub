"use client";

import { useParams } from 'next/navigation'

const AboutCourse = () => {
    const params = useParams();
    const courseId = params?.courseId as string;

    const courseNames: Record<string, string> = {
        "master-in-digital-marketing-course": "Master in Digital Marketing Course at idigitalstudies",
        "specialist-in-digital-marketing": "Digital Marketing Specialist Course at iDigitalStudies",
        "digital-marketing-course-for-business-owners": "Best Digital Marketing Course for Business Owners",
        "foundation-in-digital-marketing": "Digital Marketing Course for Beginners",
        "customised-digital-marketing": "Customised Course in Digital Marketing",
        "degree-digital-marketing": "Degree in Digital Marketing",
    };

    const courseName = courseNames[courseId || ""] || "Course";

    return (
        <section className='w-full max-w-6xl mx-auto space-y-8'>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left - Description */}
                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-[#EA2525] font-bold text-sm uppercase tracking-wider mb-2">
                            About course
                        </h3>
                        <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4B444D] to-[#EA2525] bg-clip-text text-transparent mb-6'>{courseName}</h1>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-base">
                            Running a business today without digital skills is like driving blindfolded; you'll miss
                            opportunities, waste money, and struggle to stay ahead. That's where iDigitalStudies' Digital
                            Marketing Course for Business Owners steps in. Designed exclusively for entrepreneurs, start-
                            up founders, and small business owners, this program helps you master the skills needed to
                            take control of your online growth.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-[#EA2525] shadow-sm">
                        <h3 className="font-bold text-lg text-[#4B444D] mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#EA2525] rounded-full"></span>
                            Why Business Owners Need Digital Marketing Training?
                        </h3>
                        <p className='text-gray-700 mb-4 leading-relaxed'>Hiring agencies can be expensive, and relying solely on freelancers doesn't guarantee results.
                        By learning digital marketing yourself, you gain the power to</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">✓</span>
                                <span className="text-gray-700">Generate consistent leads without burning your budget.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">✓</span>
                                <span className="text-gray-700">Improve brand visibility on Google, social media, and email campaigns.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">✓</span>
                                <span className="text-gray-700">Track ROI with real-time analytics instead of guesswork.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">✓</span>
                                <span className="text-gray-700">Stay ahead of competitors by adapting quickly to market trends.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-[#EA2525] shadow-sm">
                        <h3 className="font-bold text-lg text-[#4B444D] mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#EA2525] rounded-full"></span>
                            What Makes iDigitalStudies Different?
                        </h3>
                        <p className='text-gray-700 mb-4 leading-relaxed'>At iDigitalStudies, we don't just teach you the theory, we walk you through <b className="text-[#EA2525]">practical business-
                        driven strategies.</b> Our <b className="text-[#EA2525]">USP (Unique Selling Proposition)</b> lies in:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">→</span>
                                <span className="text-gray-700"><b className="text-[#4B444D]">Tailored for business owners</b> – Focused modules on lead generation, customer
                                retention, and sales growth.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">→</span>
                                <span className="text-gray-700"><b className="text-[#4B444D]">Hands-on learning</b> – Real-time projects so you can apply tactics directly to your
                                business.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">→</span>
                                <span className="text-gray-700"><b className="text-[#4B444D]">Expert mentors</b> – Trainers with years of experience in helping businesses scale online.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#EA2525] font-bold mt-1">→</span>
                                <span className="text-gray-700"><b className="text-[#4B444D]">Affordable and flexible</b> – Learn at your pace without breaking the bank.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right - Highlights */}
                <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-[#EA2525] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">✓</span>
                            </div>
                            <p className="font-bold text-[#4B444D]">Gov. Approved Certificate</p>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                            Earn a Certificate upon completion
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">📚</span>
                            </div>
                            <p className="font-bold text-[#4B444D]">Online / Offline Classes</p>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                            Start instantly and learn at your own pace
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">∞</span>
                            </div>
                            <p className="font-bold text-[#4B444D]">Lifetime Accessibility</p>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                            Set and maintain flexible deadlines
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">🎯</span>
                            </div>
                            <p className="font-bold text-[#4B444D]">Beginner Level</p>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">
                            No prior experience required
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">🌐</span>
                            </div>
                            <p className="font-bold text-[#4B444D]">Course Language</p>
                        </div>
                        <p className="text-sm text-gray-600 ml-13">English & Hindi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCourse;
