import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from '../src/GlobalStyle';
import { Themes } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ThemeProvider theme={Themes}>
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="*" element={story()} />
        </Routes>
      </Router>
    </RecoilRoot>
  </ThemeProvider>
));
