import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Solar Energy is the Future of Australian Homes",
      excerpt: "Discover how solar energy is transforming Australian households with lower bills, energy independence, and environmental benefits.",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      category: "Residential Solar",
    },
    {
      title: "Maximising ROI with Commercial Solar Installations",
      excerpt: "Learn how businesses across Australia are reducing operational costs and increasing profitability through strategic solar investments.",
      date: "March 10, 2025",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      category: "Commercial Solar",
    },
    {
      title: "How Hybrid Solar Systems Work",
      excerpt: "Understanding the technology behind hybrid solar systems and how they provide energy security and savings.",
      date: "March 5, 2025",
      author: "Emma Williams",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
      category: "Technology",
    },
    {
      title: "Federal Battery Rebate 2025: Complete Guide",
      excerpt: "Everything you need to know about accessing up to $18,600 in government incentives for solar battery installations.",
      date: "February 28, 2025",
      author: "David Thompson",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      category: "Incentives",
    },
    {
      title: "Solar Panel Maintenance: Best Practices for 2025",
      excerpt: "Expert tips on maintaining your solar system for optimal performance and longevity throughout the year.",
      date: "February 20, 2025",
      author: "Lisa Martinez",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      category: "Maintenance",
    },
    {
      title: "Top 5 Solar Trends Shaping Australia's Energy Future",
      excerpt: "From smart inverters to community solar projects, explore the innovations revolutionizing renewable energy.",
      date: "February 15, 2025",
      author: "James Anderson",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
      category: "Industry Trends",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-light to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-4">Insights & Updates</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed with the latest solar news, energy-saving tips, and sustainability trends
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 hover:border-secondary">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="pt-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button variant="link" className="p-0 text-secondary hover:text-primary group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="heading-lg mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest solar insights, industry news, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;