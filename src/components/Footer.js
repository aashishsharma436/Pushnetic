import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Pushnetic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

