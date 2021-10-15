import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <CircularProgress />
    </div>
  );
};
export default Loading;
