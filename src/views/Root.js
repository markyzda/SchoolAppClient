import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/GlobalStyle.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import UserProvider from 'providers/UserProvider';
import { Wrapper } from './Wrapper.styles';
import AddUserForm from './AddUserForm';
import theme from 'assets/theme';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UserProvider>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUserForm />} />
              <Route path="/" exact element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </UserProvider>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);

export default Root;
