import React, { useEffect } from "react";
import CategoryComponent from "../../components/categories/CategoryComponent";

const CategoryScreen = () => {
  useEffect(() => {
    document.title = "Categories";
  }, []);
  return (
    <div>
      <CategoryComponent />
    </div>
  );
};

export default CategoryScreen;
