import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";



import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <CreateDeck />
        <NotFound />
      </div>
    </div>
  );
}

export default Layout;
