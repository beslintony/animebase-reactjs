import * as React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};
export default Loading;
