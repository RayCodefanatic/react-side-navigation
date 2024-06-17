import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {item.title}
      </div>
      {isOpen && (
        <div className="accordion-body">
          {item.childrens.map((child, index) => (
            <NavLink key={index} to={child.path} className="nav-link">
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
