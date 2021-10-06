import { Grid, Paper } from '@mui/material';

import React from 'react';
import noResultsFound from '../../assets/lost.svg';

const NoResultsFound: React.FC = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <img src={noResultsFound} alt="No Results Found" />
        </Grid>
        <Grid item>
          <p>No Results Found</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default NoResultsFound;
