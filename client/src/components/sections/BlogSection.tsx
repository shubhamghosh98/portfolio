import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const staticPosts = [
  {
    title: "How I earned my first bounty",
    link: "https://ghoshshubham.medium.com/how-i-earned-my-first-bounty-7578b45b3f2b",
    pubDate: "2022-04-10",
    description: "This is a writeup about Captcha bypass."
  },
  {
    title: "A tale of my first ATO (Account Takeover)",
    link: "https://ghoshshubham.medium.com/a-tale-of-my-first-ato-account-takeover-901c79a6b26a",
    pubDate: "2022-04-15",
    description: "ATO in ecommerce app."
  },
  {
    title: "How I got CEH (Certified Ethical Hacker) Master Certified. (Resources included)",
    link: "https://ghoshshubham.medium.com/how-i-got-ceh-certified-ethical-hacker-master-certified-resources-included-52c6a8a3733e",
    pubDate: "2022-07-15",
    description: "All about CEH"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <p className="text-sm text-muted-foreground">{new Date(post.pubDate).toLocaleDateString()}</p>
              </div>
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center mt-4"
              >
                Read Article
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.a
            href="https://ghoshshubham.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-full transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <ArrowUpRight className="h-5 w-5 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}