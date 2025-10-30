"use client";

import { useEffect, useState } from "react";

const StatsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const translateX = -(currentIndex * (100 / visibleCount));

    return (
        <>
            {/* Stats Section */}
            <div className="bg-[#F1F0F0] mt-16 py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#020817]">
                    <div>
                        <h3 className="text-5xl font-bold mb-2">6</h3>
                        <p className="text-lg">Modules</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold mb-2">8</h3>
                        <p className="text-lg">Course Duration in <b>Weeks</b></p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold mb-2">2</h3>
                        <p className="text-lg">Live projects</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold mb-2">1,312+</h3>
                        <p className="text-lg">Students Enrolled</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;
