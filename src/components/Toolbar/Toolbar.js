
import React from 'react';
import './Toolbar.css';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className='toolbar'>
      {filters.map((item) => (
        <button
          onClick={onSelectFilter}
          key={item}
          className={item === selected ? 'active' : ''}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;