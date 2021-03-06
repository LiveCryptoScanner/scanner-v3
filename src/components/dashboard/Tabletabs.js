import * as React from 'react';
import { useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Dashboard, Settings, Person } from '@mui/icons-material';

import PairMenu from '@/src/components/dashboard/pair-menu';
import Exchange from '@/src/components/dashboard/exchange';
import MainTabs from '@/src/components/dashboard/main-tabs';
import SelectMA from '@/src/components/dashboard/select-ma';
import SelectLength1 from '@/src/components/dashboard/select-length-1';
import SelectLength2 from '@/src/components/dashboard/select-length-2';


function IndicatorSettings({ selectedMainTab }) {
  if (selectedMainTab === 'Price To MA') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, mt: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
          <SelectLength2 />
        </Box>
      </Paper>
    );
  } else if (selectedMainTab === 'MA Cross') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, mt: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
        </Box>
      </Paper>
    )
  }
  return <></>;
}


export default function IconTabs() {
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(selectedMainTab);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box sx={{border: 0, ml: 1}}>
          <Button variant="outlined" startIcon={<Dashboard />} sx={{ marginRight: 3, width: 144 }}>
            Standard
          </Button>
          <Button variant="outlined" startIcon={<Settings />} sx={{ marginRight: 3, width: 144 }}>
            Customize
          </Button>
          <Button variant="outlined" startIcon={<Person />} sx={{ marginRight: 3, width: 144 }}>
            Profile
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{border: 0, ml: 1, mt: 1, textAlign: 'right'}}>
          <Paper>
            <PairMenu />
            <Exchange />
            <MainTabs />
          </Paper>
          <IndicatorSettings selectedMainTab={selectedMainTab} />
        </Box>
      </Grid>
    </Grid>
  );
}
