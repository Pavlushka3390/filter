import React from 'react';
import './ProjectList.css';

function ProjectList({ projects }) {
  let index = 0;

  return (
    projects.map((item) => (
      <div className='project__img' key={index++}>
        <img src={item.img} alt='' />
      </div>
    ))
  );
}

export default ProjectList;