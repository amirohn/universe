import Header from "../organisms/header";
import Footer from "../organisms/footer";
import React from "react";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
