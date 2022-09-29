import { Grid, createStyles } from '@mantine/core';
import AppState from '../../services/states';
import { AddFeatureCard } from '../Features/AddFeatureCard';
import { FeatureCard } from '../Features/FeatureCard';

const Main = () => {
  const { classes } = useStyles();
  const appState = AppState.useContainer();

  return (
    <Grid>
      {appState.data.map((item, index) => (
        <Grid.Col sx={12} sm={6} lg={4} key={index} className={classes.gridCol}>
          <FeatureCard key={index} feature={item} />
        </Grid.Col>
      ))}
      <Grid.Col sx={12} sm={6} lg={4} className={classes.gridCol}>
        <AddFeatureCard />
      </Grid.Col>
    </Grid>
  );
};

const useStyles = createStyles(() => ({
  gridCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default Main;
