import { Grid, createStyles } from '@mantine/core';
import React from 'react';
import { AddFeatureCard } from './AddFeatureCard';
import { FeatureCard } from './FeatureCard';

const Main = () => {
  const data = [
    {
      image:
        'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
      title: 'Calendario de Crons',
      description:
        'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    },
    {
      image:
        'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
      title: 'Calendario de Crons',
      description:
        'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    },
    {
      image:
        'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
      title: 'Calendario de Crons',
      description:
        'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    },
    {
      image:
        'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
      title: 'Calendario de Crons',
      description:
        'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    },
  ];

  const { classes } = useStyles();
  return (
    <Grid>
      {data.map((item, index) => (
        <Grid.Col sx={12} sm={6} lg={4} key={index} className={classes.gridCol}>
          <FeatureCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            timeRemaining={item.timeRemaining}
          />
        </Grid.Col>
      ))}
      <Grid.Col span={4} className={classes.gridCol}>
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
