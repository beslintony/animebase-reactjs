import React, { useState } from 'react';

import { SearchBar } from '..';

const HeroSection: React.FC = () => {
  const [value, setValue] = useState('');
  const styles = {
    minWidth: '18rem',
    minHeight: '8ch',
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        // background: 'black',
        // color: 'white',
      }}>
      <div>ANIMEBASE</div>
      <div>
        <SearchBar value={value} setValue={setValue} styles={styles} />
      </div>
    </section>
  );
};

export default HeroSection;
