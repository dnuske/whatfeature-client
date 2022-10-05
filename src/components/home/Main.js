import { Grid, createStyles, Text, Badge } from '@mantine/core';

import AppState from '../../services/states';
import { AddFeatureCard } from '../Features/AddFeatureCard';
import { FeatureCard } from '../Features/FeatureCard';

function NoFeature() {
  const { classes } = useStyles();

  return (
    <div className={classes.noFeatureBox}>
      <img
        src="/assets/img/img1.png"
        alt="No features"
        style={{
          width: '50%',
          maxWidth: '600px',
        }}
      />
      <Text size="xl" weight={500}>
        Oh no, you don{`'`}t have any features yet!
      </Text>
      <Badge
        color="indigo"
        variant="light"
        size="xl"
        style={{
          marginTop: '30px',
          cursor: 'pointer',
        }}
      >
        Create your first Feature here
      </Badge>
    </div>
  );
}

function NoProyect() {
  const { classes } = useStyles();
  return (
    <div className={classes.noFeatureBox}>
      <img
        src="/assets/img/img2.jpg"
        alt="No features"
        style={{
          width: '50%',
          maxWidth: '600px',
        }}
      />
      <Text size="xl" weight={500}>
        Start your proyect now,
        <Badge
          color="indigo"
          variant="light"
          size="xl"
          style={{
            marginTop: '30px',
            cursor: 'pointer',
          }}
        >
          Become a founder
        </Badge>
      </Text>
    </div>
  );
}

const Main = () => {
  const { classes } = useStyles();
  const appState = AppState.useContainer();

  // TODO:  This is a temporary solution to get the features to render.
  if (appState.data.length > 0) {
    return (
      <Grid>
        {appState.data.map((item, index) => (
          <Grid.Col
            sx={12}
            sm={6}
            lg={4}
            key={index}
            className={classes.gridCol}
          >
            <FeatureCard key={index} feature={item} />
          </Grid.Col>
        ))}
        <Grid.Col sx={12} sm={6} lg={4} className={classes.gridCol}>
          <AddFeatureCard />
        </Grid.Col>
      </Grid>
    );
  } else {
    return (
      <>
        <NoFeature />
        {/* <NoProyect /> */}
      </>
    );
  }
};

const useStyles = createStyles(() => ({
  gridCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFeatureBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  badgeButton: {
    marginTop: '200px',
  },
}));

export default Main;
