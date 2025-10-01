import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const blogs = [
    {
        slug: "digital-marketing-trends-2025",
        title: "Top Digital Marketing Trends in 2025",
        excerpt: "Discover the latest strategies dominating the digital marketing landscape in 2025...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
        slug: "seo-strategies-beginners",
        title: "SEO Strategies for Beginners",
        excerpt: "A complete beginner-friendly guide to help your website rank higher on Google...",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        slug: "content-marketing-secrets",
        title: "Secrets of Content Marketing",
        excerpt: "Content is king, but strategy is queen. Learn the secrets of creating content that converts...",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    },
];

const BlogIndex = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Latest <span className="text-[#EA2525]">Blogs</span>
                </h2>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.slug}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-block bg-[#EA2525] text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10 mb-10 ">
                    <Link to='/blog'><Button className="bg-[#EA2525] hover:bg-red-600 px-5 py-6 text-lg font-semibold">View More Blogs</Button></Link>
                </div>
            </div>
        </section>

    );
};

export default BlogIndex;