import React from 'react';
import { CardWrapper } from 'components/molecules/CardWrapper.styles';
import { StyledHeading } from 'components/atoms/Heading/Heading.styles';
import ArticleContent from 'components/molecules/ArticleContent';

const NewsArticle = ({ title, content }) => {
  return (
    <CardWrapper>
      <StyledHeading size="l" color="main">
        {title}
      </StyledHeading>
      <p>Category</p>
      <ArticleContent content={content} />
      <button>Read more</button>
    </CardWrapper>
  );
};

export default NewsArticle;
