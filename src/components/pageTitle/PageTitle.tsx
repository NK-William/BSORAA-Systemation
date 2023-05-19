import React from "react";
import "./pageTitle.css";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="pageTitle__container">
      <div className="pageTitle__dark-overlay" />
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
