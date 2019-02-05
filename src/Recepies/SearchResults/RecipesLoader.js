import React from 'react';
import ContentLoader from 'react-content-loader';

const RecipesLoader = props => (
  <ContentLoader 
    height={360}
    width={400}
    speed={2}
    primaryColor="#f5f5f5"
    secondaryColor="#dcd9dc"
    {...props}
  >
    <rect x="0" y="15" rx="4" ry="4" width="60" height="60" /> 
    <rect x="70" y="15" rx="3" ry="3" width="560" height="60" /> 
    <rect x="0" y="85" rx="3" ry="3" width="60" height="60" /> 
    <rect x="70" y="85" rx="3" ry="3" width="560" height="60" /> 
    <rect x="0" y="155" rx="3" ry="3" width="60" height="60" /> 
    <rect x="70" y="155" rx="3" ry="3" width="560" height="60" />
  </ContentLoader>
);
export default RecipesLoader;