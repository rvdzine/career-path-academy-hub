"use client";

import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import hero from "@/components/assets/hero.png";
import BrochureDialog from "@/components/pages/BrochureDialog";
import { FaDownload } from "react-icons/fa";

const CourseHero = () => {
    const params = useParams();
    const courseId = params?.courseId as string;
    const isMasterCourse = courseId === "master-digital-marketing";

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
        <>
            <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4 animate-fade-in-left">
                            {isMasterCourse && (
                                <Badge className="bg-[#2F4C99] animate-bounce-gentle">
                                    #Internship Guarantee Program
                                </Badge>
                            )}
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#EA2525] to-[#AA2526] bg-clip-text text-transparent animate-pulse-soft">
                                    {courseName}
                                </h1>
                                <p className="text-xl text-[#64748B] text-muted-foreground leading-relaxed">
                                    Boost your business growth with iDigitalStudies’ Digital
                                    Marketing Course for Business Owners. Practical, hands-on training to grow sales and online
                                    presence.                                
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.2s]">
                                {/* Brochure download button */}
                                <BrochureDialog courseTitle="Master in Digital Marketing">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-md"
                                    >
                                        <FaDownload className="text-sm" />
                                        Download Brochure
                                    </Button>
                                </BrochureDialog>

                                {/* <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[#EA2525] to-[#AA2526] hover:from-[#EA2525] hover:to-[#AA2526] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    asChild
                                >
                                    <Link href="/courses">Explore Courses</Link>
                                </Button> */}

                            </div>
                        </div>

                        <div className="relative animate-fade-in-right">
                            <div className="relative z-10 group">
                                <img
                                    src={hero.src}
                                    alt="Digital Marketing Training"
                                    className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl -z-10 animate-pulse-soft"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 animate-bounce-gentle"></div>
                            <div className="absolute top-10 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40 animate-bounce-gentle [animation-delay:1s]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseHero;
