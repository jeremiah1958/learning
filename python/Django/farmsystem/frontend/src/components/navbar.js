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
          background: linear-gradient(120deg, #4CAF50, #8BC34A); /* Green field colors */
          padding: 1em;
          border-bottom: 3px solid #2E7D32; /* Darker green for a farming feel */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
          font-weight: bold;
          font-family: 'Arial', sans-serif;
        }
        a:hover {
          text-decoration: underline;
        }
        /* Add a subtle grass texture background to the body */
        body {
          background-image: url('https://www.transparenttextures.com/patterns/grass.png'); /* Subtle grass texture */
          background-color: #F1F8E9; /* Light green background */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
