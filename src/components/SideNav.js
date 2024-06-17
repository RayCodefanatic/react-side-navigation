import React, { useState } from 'react';
import Accordion from './Accordion';
import NavLinkItem from './NavLinkItem';
//import './SideNav.css';

const navConfig = [
  {
    title: 'APPLICATION',
    childrens: [
      {
        title: 'Application Analysis',
        path: 'applicationAnalysis',
      },
    ],
  },
  {
    title: 'TRANSACTIONS',
    childrens: [
      {
        title: 'Transaction Detail',
        path: 'transDetailedReport',
      },
    ],
  },
  {
    title: 'FUNDING',
    childrens: [
      {
        title: 'Summary Report',
        path: 'summaryReport',
      },
    ],
  },
  {
    title: 'Download Center',
    path: 'downloadcenter',
  },
  {
    title: 'Website User Activity',
    path: 'webUserActivity',
  },
];

const SideNav = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-nav-container">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`side-nav ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <nav>
            {navConfig.map((item, index) =>
              item.childrens ? (
                <Accordion key={index} item={item} />
              ) : (
                <NavLinkItem key={index} item={item} />
              )
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default SideNav;
