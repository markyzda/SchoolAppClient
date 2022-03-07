import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0px 10px;
`;

const ArticleContent = (props) => {
  return (
    <Container>
      <p>{props.content}</p>
      {props.img ? <img src={props.img.url} alt={props.img.alt} /> : null}
    </Container>
  );
};

export default ArticleContent;
