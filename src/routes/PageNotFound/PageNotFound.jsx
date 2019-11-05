import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/commonComponent/ErrorBoundary/ErrorBoundary';
// import styles from './PageNotFound.scss';

const PageNotFound = () => (
  <ErrorBoundary>
    <Header />
    <article>
      <span>404 ERROR</span>
      <span>Page Not Found</span>
    </article>
    <Footer />
  </ErrorBoundary>
);

export default PageNotFound;
