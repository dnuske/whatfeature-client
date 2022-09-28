import { Card, createStyles, Text } from '@mantine/core';
import React from 'react';
import { CirclePlus } from 'tabler-icons-react';

export function AddFeatureCard() {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section}>
        <div className={classes.sectionContent}>
          <CirclePlus size={60} strokeWidth={1.5} />
          <Text size="xs" transform="uppercase">
            Add new feature...
          </Text>
        </div>
      </Card.Section>
    </Card>
  );
}

// Styles
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#E0E0E0',
    width: 350,
    height: 370,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
