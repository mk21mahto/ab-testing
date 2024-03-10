import React from 'react';
import { analyticsApi, isFirstAppearance } from './BlogApi';

const Blog = () => {

  const variant = isFirstAppearance()

  const handleSignUpClick = () => {
    analyticsApi.trackSignUp(variant);
  };

  return (
    <div>
      <h2>Blog</h2>
      <div>
      {variant === 'true' ? 'Meet the app that has 18 million users.' : 'Meet the app that revolutionized reading.'}
      </div>
    <div>
      Thanks a lot for reading the article!
    </div>
      <button onClick={handleSignUpClick}>Sign up for Blinkist</button>
    </div>
  );
};

export default Blog;
