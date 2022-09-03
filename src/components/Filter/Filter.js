import React, { useState } from 'react';
import './Filter.css';
import ProjectList from '../Projectlist/Projectlist.js';
import Toolbar from '../Toolbar/Toolbar';

function Filter({ projectList }) {
  const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (ent) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    
    ent.target.classList.add('active');

    const select = ent.target.textContent;
    
    if (select === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(item => item.category === select)
      );
    }

    setSelected(select);

    console.log(select);
  }

  return (
    <div className='container'>
      <Toolbar 
        filters={filterButtonList}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='gallery'>
        <ProjectList projects={filteredListProjects} /> 
      </div>
    </div>
    );
}

export default Filter;