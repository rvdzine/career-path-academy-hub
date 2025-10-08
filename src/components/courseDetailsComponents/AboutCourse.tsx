import { useParams } from 'react-router-dom'

const AboutCourse = () => {
    const { courseId } = useParams();

    const courseNames: Record<string, string> = {
        "master-digital-marketing": "Master in Digital Marketing (With Guaranteed Internship)",
        "specialist-digital-marketing": "Specialist in Digital Marketing",
        "business-owner-course": "Professional & Business Owner Course (1:1 Learning)",
        "foundation-digital-marketing": "Foundation in Digital Marketing",
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
                        This program is designed for absolute beginners as well as working
                        professionals who want to advance their career in digital marketing.
                        You’ll learn everything from the fundamentals to advanced strategies
                        including SEO, social media marketing, performance marketing, content
                        strategy, web analytics, and more with practical, hands-on training
                        and real-world projects.
                    </p>
                    <h3 className="font-semibold mt-6">By the end of the course, you will:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Plan and execute complete digital marketing campaigns.</li>
                        <li>Run paid ads on Google, Meta, and LinkedIn.</li>
                        <li>Build SEO-optimized websites and landing pages.</li>
                        <li>Analyze data and optimize campaigns using Google Analytics.</li>
                        <li>
                            Gain confidence through a guaranteed internship with real industry
                            projects.
                        </li>
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
