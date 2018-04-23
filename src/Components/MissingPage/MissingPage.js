import React from "react";
import { Link } from 'react-router-dom';

import "./MissingPage.css";

const MissingPage = () => {
  return (
    <div className="missing-page">
      <h1>Page not found</h1>

      <Link to="/" className="missing-page-link"> Go Back </Link>
    </div>
  );
};

export default MissingPage;