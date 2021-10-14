import React, { useState } from 'react';

import { SearchBar } from '..';
import background from '../../assets/2.jpg';
import { styled } from '@mui/system';
import { useMediaQuery } from '@mui/material';

const HeroSection: React.FC = () => {
  const [value, setValue] = useState('');

  const styles = {
    minWidth: '60vw',
    minHeight: '4rem',
    color: 'darkblue',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5rem',
    fontSize: '10rem',
    fontWeight: 500,
    boxShadow: '3',
    background: `white`,
  };

  const inputStyles = {
    fontSize: '2.5rem',
    fontWeight: 300,
    width: '100%',
    caretColor: 'darkblue',
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        minWidth: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              display: 'flex',
              padding: '5rem',
            }}>
            <div
              style={{
                background: '#ff4a4a',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'BLACK',
                padding: '8px 1px 8px 8px',
              }}>
              ANIME
            </div>
            <div
              style={{
                background: '#1c4b41',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'WHITE',
                padding: '8px 8px 8px 1px',
              }}>
              BASE
            </div>
          </div>
        </div>

        <div>
          <SearchBar
            value={value}
            setValue={setValue}
            styles={styles}
            inputStyles={inputStyles}
            searchIconFontSize="large"
            placeholderText="Search Anime or Mangas..."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
