import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import { Link } from 'react-router-dom';
import BlogSection from 'views/BlogSection';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-user">Add User</Link>
    </nav>
    {children}
    <BlogSection />
  </Wrapper>
);

export default MainTemplate;
