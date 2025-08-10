import React from 'react';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const blogs = [
  {
    title: 'The Importance of Learning English: A Gateway to Global Opportunities',
    date: 'August 8, 2023',
    image: 'https://img.freepik.com/premium-photo/high-school-students-working-international-flags-board_53876-78434.jpg',
  },
  {
    title: 'Choosing the Right English Course: A Guide for Language Learners',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/young-woman-teaching-kids-english-class-online_23-2148962943.jpg',
  },
  {
    title: 'Mastering English Pronunciation: Tips for Confident Speech',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/adorable-little-boy-doing-online-session-speech-therapy_23-2149110201.jpg',
  },
  {
    title: 'Effective Strategies for Learning English Vocabulary',
    date: 'August 9, 2023',
    image: 'https://img.freepik.com/free-photo/kids-classroom-taking-english-class_23-2149402648.jpg',
  },
];

const Blog = () => {
  return (
    <section className="p-5 bg-white text-center dark:bg-base-100 rounded-2xl border-1 border-gray-50">
      <Fade direction="down" triggerOnce>
        <h2 className="text-4xl font-bold mb-2 text-base-200 dark:text-base-content">Latest Blog</h2>
      </Fade>

      <Slide direction="up" triggerOnce>
        <p className="text-base-200 mb-10 max-w-2xl mx-auto dark:text-base-content">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in English.
        </p>
      </Slide>

      <Zoom cascade damping={0.2} triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {blogs.map((blog, index) => (
            <div key={index} className="text-left border-1 border-gray-100 p-3 rounded-2xl shadow-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded shadow-sm mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-light text-md text-base-200 dark:text-base-content">{blog.title}</h3>
              <p className="text-sm text-base-200 dark:text-base-content mt-2 font-light">{blog.date}</p>
            </div>
          ))}
        </div>
      </Zoom>
    </section>
  );
};

export default Blog;