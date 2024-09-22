import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const allIcons = {
  ...solidIcons,
  ...regularIcons,
  ...brandIcons,
};

export const IconSelector = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIcons = Object.keys(allIcons).filter((iconName) =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >

      <input
        type="text"
        placeholder="Buscar íconos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', color:'black', width:"80%", margin:"0 auto", textAlign:"center" }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-around" }}>
        {filteredIcons.map((iconName) => (
          <div
            key={iconName}
            onClick={() => onSelect(allIcons[iconName])}
            style={{ margin: '10px', cursor: 'pointer', textAlign: 'center',color:'black' }}
          >
            <FontAwesomeIcon icon={allIcons[iconName]} size="lg" color='var(--color-secondary'/>

            {/* <div>{iconName.replace('fa', '')}</div> */}

          </div>
        ))}
      </div>
    </div>
  );
};
