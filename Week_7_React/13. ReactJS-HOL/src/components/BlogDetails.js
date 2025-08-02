import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schewzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div className="column">
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <strong>{blog.title}</strong>
          <p><em>{blog.author}</em></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
