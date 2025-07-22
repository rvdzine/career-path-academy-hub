
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2024",
      excerpt: "Discover the latest SEO techniques that will help your website rank higher in search results and drive more organic traffic.",
      author: "Amit Sharma",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "SEO",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "The Power of Video Marketing in Digital Strategy",
      excerpt: "Learn how video content can transform your digital marketing efforts and engage your audience more effectively.",
      author: "Priya Patel",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Video Marketing",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Social Media Trends That Will Shape 2024",
      excerpt: "Stay ahead of the curve with these emerging social media trends that every marketer should know about.",
      author: "Rahul Kumar",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Social Media",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Email Marketing Best Practices for Higher ROI",
      excerpt: "Maximize your email marketing ROI with these proven strategies and techniques that drive conversions.",
      author: "Neha Singh",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Email Marketing",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Google Ads Optimization: Tips from the Experts",
      excerpt: "Learn advanced Google Ads optimization techniques to improve your ad performance and reduce costs.",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Google Ads",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Content Marketing Strategy: From Planning to Execution",
      excerpt: "A comprehensive guide to creating and executing a successful content marketing strategy for your business.",
      author: "David Wilson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Content Marketing",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "SEO", "Social Media", "Email Marketing", "Google Ads", "Content Marketing", "Video Marketing"];

  const BlogCard = ({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) => (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <img 
            src={post.image} 
            alt={post.title}
            className={`w-full object-cover ${featured ? 'h-64 md:h-full' : 'h-48'}`}
          />
        </div>
        <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            {featured && <Badge variant="outline">Featured</Badge>}
          </div>
          
          <h2 className={`font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </h2>
          
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in digital marketing from our expert team
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
          <div className="grid gap-6">
            <BlogCard post={blogPosts[0]} featured={true} />
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
