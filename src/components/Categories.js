import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <h1>{categories}</h1>
      <button type="button">Check Status</button>
    </div>
  );
};

export default Categories;
