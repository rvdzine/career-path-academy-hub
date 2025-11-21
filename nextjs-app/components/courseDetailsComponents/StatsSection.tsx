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
            <div className="bg-gradient-to-br from-gray-50 via-red-50 to-orange-50 mt-16 py-16 px-4 border-y border-gray-200">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#EA2525]">
                            <h3 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                                6
                            </h3>
                            <p className="text-lg font-semibold text-[#4B444D]">Modules</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#EA2525]">
                            <h3 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                                8
                            </h3>
                            <p className="text-lg font-semibold text-[#4B444D]">
                                Course Duration in <b className="text-[#EA2525]">Weeks</b>
                            </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#EA2525]">
                            <h3 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                                2
                            </h3>
                            <p className="text-lg font-semibold text-[#4B444D]">Live projects</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#EA2525]">
                            <h3 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent">
                                1,312+
                            </h3>
                            <p className="text-lg font-semibold text-[#4B444D]">Students Enrolled</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;
