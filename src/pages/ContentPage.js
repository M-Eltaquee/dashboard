import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import classes from './ContentPage.module.css';
const ContentPage = () => {
  const params = useParams();
  const history = useHistory();
  const pagesNames = [
    'authentication',

    'database',

    'storage',

    'hosting',

    'functions',

    'machine-learning',
  ];
  if (!pagesNames.includes(params.label)) {
    return history.replace('/');
  }
  return (
    <div className={classes.content}>
      ContentPage
      {params.label}
    </div>
  );
};

export default ContentPage;
