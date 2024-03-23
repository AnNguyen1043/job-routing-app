import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function BasicPagination() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#C62828',
  //     },
  //     secondary: {
  //       main: '#FFC400',
  //     },
  //   },
  // });

  return (
    // <ThemeProvider theme={theme}>
      <Stack alignItems="center" spacing={2}>
        <Pagination count={4} color= "secondary" />
      </Stack>
    // </ThemeProvider>
  );
}