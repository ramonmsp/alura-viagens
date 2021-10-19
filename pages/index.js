import React from 'react';

import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import TravelForm from '../src/components/forms/patterns/TravelForm';

export default function Home() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column
          offset={{
            md: 1,
            lg: 2,
          }}
          value={{
            xs: 12,
            md: 10,
            lg: 8,
          }}
        >
          <Box
            backgroundColor="white"
          >
            <TravelForm />
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
