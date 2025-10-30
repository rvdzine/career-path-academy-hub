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
                <div className="md:col-span-2 space-y-4">
                    <h3 className="text-red-600 font-semibold text-lg mb-2">
                        About course
                    </h3>
                    <h1 className='text-2xl md:text-3xl font-bold text-[#4B444D] mb-6'>{courseName}</h1>
                    <p className="text-gray-600">
                        Running a business today without digital skills is like driving blindfolded; you'll miss
                        opportunities, waste money, and struggle to stay ahead. That’s where iDigitalStudies’ Digital
                        Marketing Course for Business Owners steps in. Designed exclusively for entrepreneurs, start-
                        up founders, and small business owners, this program helps you master the skills needed to
                        take control of your online growth.
                    </p>
                    <h3 className="font-semibold mt-6">Why Business Owners Need Digital Marketing Training?</h3>
                    <p className='text-gray-600'>Hiring agencies can be expensive, and relying solely on freelancers doesn’t guarantee results.
                    By learning digital marketing yourself, you gain the power to</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Generate consistent leads without burning your budget.</li>
                        <li>Improve brand visibility on Google, social media, and email campaigns.</li>
                        <li>Track ROI with real-time analytics instead of guesswork..</li>
                        <li>Stay ahead of competitors by adapting quickly to market trends.</li>
                    </ul>
                    <h3 className="font-semibold mt-6">What Makes iDigitalStudies Different?</h3>
                    <p className='text-gray-600'>At iDigitalStudies, we don’t just teach you the theory, we walk you through <b>practical business-
                    driven strategies.</b> Our <b>USP (Unique Selling Proposition)</b> lies in:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li><b>Tailored for business owners</b> – Focused modules on lead generation, customer
                        retention, and sales growth.</li>
                        <li><b>Hands-on learning </b>– Real-time projects so you can apply tactics directly to your
                        business.</li>
                        <li><b>Expert mentors </b>– Trainers with years of experience in helping businesses scale online.</li>
                        <li><b>Affordable and flexible </b>– Learn at your pace without breaking the bank.</li>
                    </ul>
                </div>

                {/* Right - Highlights */}
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-md shadow-sm">
                        <p className="font-semibold">Gov. Approved Certificate</p>
                        <p className="text-sm text-gray-600">
                            Earn a Certificate upon completion
                        </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-md shadow-sm">
                        <p className="font-semibold">Online / Offline Classes</p>
                        <p className="text-sm text-gray-600">
                            Start instantly and learn at your own pace
                        </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-md shadow-sm">
                        <p className="font-semibold">Lifetime Accessibility</p>
                        <p className="text-sm text-gray-600">
                            Set and maintain flexible deadlines
                        </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-md shadow-sm">
                        <p className="font-semibold">Beginner Level</p>
                        <p className="text-sm text-gray-600">
                            No prior experience required
                        </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-md shadow-sm">
                        <p className="font-semibold">Course Language</p>
                        <p className="text-sm text-gray-600">English & Hindi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCourse;
