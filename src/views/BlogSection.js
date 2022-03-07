import React, { useState, useEffect } from 'react';
import { StyledHeading } from 'components/atoms/Heading/Heading.styles';
import styled from 'styled-components';
import NewsArticle from 'components/organisms/NewsArticle';
import { blogposts } from '../data/blogposts';

const Wrapper = styled.div`
  margin: 15px;
`;

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(blogposts);
    console.log(blogposts);
  }, []);

  return (
    <Wrapper>
      <StyledHeading size="xl" color="main">
        News
      </StyledHeading>
      {posts.map((post) => (
        <NewsArticle title={post.title} content={post.content} />
      ))}
    </Wrapper>
  );
};

export default BlogSection;
