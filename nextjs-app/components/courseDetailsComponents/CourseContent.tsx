"use client";

import { useState } from "react";

const CourseContent = () => {
    const [openModule, setOpenModule] = useState<number | null>(1);

    const modules = [
        {
            id: 1,
            title: "Introduction to Digital Marketing",
            sections: [
                "Build a strong foundation",
                "Understand the digital ecosystem",
            ],
        },
        {
            id: 2,
            title: "Website Planning & Creation",
            sections: [
                "Domain & Hosting Basics",
                "CMS Overview (WordPress, Shopify, Wix)",
                "Building a Business Website (Hands-on)",
                "Landing Page Design Principles",
                "Tracking Setup (GA, GTM, Pixel)",
            ],
        },
        {
            id: 3,
            title: "Search Engine Optimization (SEO)",
            sections: [
                "Keyword Research & Competitor Analysis",
                "On-Page SEO (Title, Meta, Content)",
                "Technical SEO (Speed, Mobile, Schema)",
                "Off-Page SEO (Link Building)",
                "Local SEO (Google My Business)",
                "Analytics & Reporting (Rank Tracking)",
            ],
        },
    ];

    return (
        <div>
            <h3 className="text-red-600 font-semibold text-lg mb-2">
                Course content
            </h3>
            <h1 className='text-2xl md:text-3xl font-bold text-[#4B444D] mb-6'>
                Your program is divided into 8 carefully structured modules with 10+
                live projects, 20+ assignments, and 24+ hours of hands-on practice.
            </h1>

            <div className="space-y-4">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="border rounded-md overflow-hidden"
                    >
                        <button
                            onClick={() =>
                                setOpenModule(openModule === module.id ? null : module.id)
                            }
                            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200"
                        >
                            <span className="font-medium">{module.title}</span>
                            <span>{openModule === module.id ? "-" : "+"}</span>
                        </button>

                        {openModule === module.id && (
                            <ul className="px-6 py-4 space-y-2 bg-white text-gray-600">
                                {module.sections.map((s, idx) => (
                                    <li key={idx}>📘 {s}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
