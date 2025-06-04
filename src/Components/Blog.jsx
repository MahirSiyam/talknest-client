import React from 'react';

const blogs = [
  {
    title: 'The Importance of Learning English: A Gateway to Global Opportunities',
    date: 'August 8, 2023',
    image: 'https://img.freepik.com/premium-photo/high-school-students-working-international-flags-board_53876-78434.jpg?ga=GA1.1.609713635.1748710786&semt=ais_hybrid&w=740',
  },
  {
    title: 'Choosing the Right English Course: A Guide for Language Learners',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/young-woman-teaching-kids-english-class-online_23-2148962943.jpg?ga=GA1.1.609713635.1748710786&semt=ais_hybrid&w=740',
  },
  {
    title: 'Mastering English Pronunciation: Tips for Confident Speech',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/adorable-little-boy-doing-online-session-speech-therapy_23-2149110201.jpg?ga=GA1.1.609713635.1748710786&semt=ais_hybrid&w=740',
  },
  {
    title: 'Effective Strategies for Learning English Vocabulary',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/kids-classroom-taking-english-class_23-2149402648.jpg?ga=GA1.1.609713635.1748710786&semt=ais_hybrid&w=740',
  },
];

const Blog = () => {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">Latest Blog</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in English.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {blogs.map((blog, index) => (
          <div key={index} className="text-left">
            <img src={blog.image} alt={blog.title} className="rounded shadow-sm mb-4 w-full h-48 object-cover" />
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
