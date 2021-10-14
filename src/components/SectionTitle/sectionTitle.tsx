import { Grid, Typography } from '@mui/material';

import React from 'react';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Grid)(({ theme }) => ({
  margin: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'space-between',
  minWidth: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SectionHeader = styled('div')(({ theme }) => ({
  borderLeft: '3px solid #2c2b2a',
  paddingLeft: '10px',
  marginLeft: '15px',
  marginRight: '25px',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const ViewMore = styled('button')(({ theme }) => ({
  border: 'none',
  padding: '7px 10px',
  backgroundColor: '#5856d6',
  color: '#f1f3f5',
  borderRadius: '3px',

  cursor: 'pointer',
  outline: '0',

  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',

  textDecoration: 'none',
}));

interface SectionTitleProps {
  link?: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, link }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <Typography sx={{ color: 'grey', fontWeight: 600, fontSize: '1.2rem' }}>
          {title}
        </Typography>
        {link && <ViewMore>View More</ViewMore>}
      </SectionHeader>
    </SectionContainer>
  );
};

export default SectionTitle;
