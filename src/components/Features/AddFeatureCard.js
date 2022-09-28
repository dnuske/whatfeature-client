import { Card, createStyles, Text } from '@mantine/core';
import React, { useState } from 'react';
import { CirclePlus } from 'tabler-icons-react';
import AddFeatureModal from './AddFeatureModal';
import RecommendFeatureModal from './RecommendFeatureModal';

export function AddFeatureCard() {
  const { classes } = useStyles();

  // Modal States
  const [openedCreate, setOpenedCreate] = useState(false);
  const [openedRecommend, setOpenedRecommend] = useState(false);

  // ONLY FOR TEST, REMOVE THIS LATER
  const [isAdmin, setisAdmin] = useState(true);

  const handleAddFeature = () => {
    setOpenedCreate(true);
  };

  const handleRecommendFeature = () => {
    setOpenedRecommend(true);
  };

  return (
    <>
      <Card
        withBorder
        radius="md"
        p="md"
        className={classes.card}
        onClick={isAdmin === true ? handleAddFeature : handleRecommendFeature}
      >
        <Card.Section className={classes.section}>
          <div className={classes.sectionContent}>
            <CirclePlus size={75} strokeWidth={1.7} color="#1F1F1F" />
            <Text size="md" transform="uppercase" color="#1F1F1F">
              {isAdmin ? 'Add new feature...' : 'Recommend a feature...'}
            </Text>
          </div>
        </Card.Section>
      </Card>
      <AddFeatureModal opened={openedCreate} setOpened={setOpenedCreate} />
      <RecommendFeatureModal
        opened={openedRecommend}
        setOpened={setOpenedRecommend}
      />
    </>
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
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #1F1F1F',
      transition: 'all 0.35s ease-in-out',
      transform: 'scale(1.02)',
    },
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
