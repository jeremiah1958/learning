import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Farm Info</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li><Link to="/irrigation">Irrigation</Link></li>
        <li><Link to="/farmers">Farmers</Link></li>
        <li><Link to="/financial-records">Financial Records</Link></li>
        <li><Link to="/harvests">Harvests</Link></li>
        <li><Link to="/medicines">Medicines</Link></li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #333;
          padding: 1em;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        li {
          margin-right: 15px;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
