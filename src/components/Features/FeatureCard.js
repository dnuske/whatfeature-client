import { Card, Image, Text, Group, Button, createStyles } from '@mantine/core';
import { useState } from 'react';
import { Edit, Trash } from 'tabler-icons-react';
import { ActionIconButton } from '../IconButtons/ActionIconButton';
import { DownIconButton } from '../IconButtons/DownIconButton';
import { UpIconButton } from '../IconButtons/UpIconButton';
import { ShowFeature } from './ShowFeature';

export function FeatureCard({ feature }) {
  const { classes } = useStyles();
  const [openShowFeatureModal, setOpenShowFeatureModal] = useState(false);

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={feature.image} alt={feature.title} height={150} />
        </Card.Section>

        <Card.Section mt="md" className={classes.section}>
          <Group position="apart">
            <Text size="lg" weight={500}>
              {feature.title}
            </Text>
          </Group>
          <Text size="sm" mt="xs">
            {feature.description.substring(0, 170) + '...'}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button
            radius="md"
            className={classes.iconButton}
            onClick={() => setOpenShowFeatureModal(true)}
          >
            Join discussion
          </Button>
          {false ? (
            // If user is Founder
            <>
              <ActionIconButton>
                <Edit size={35} strokeWidth={1.5} className={classes.icons} />
              </ActionIconButton>
              <ActionIconButton>
                <Trash
                  size={35}
                  strokeWidth={1.5}
                  color={'#FF4747'}
                  className={classes.icons}
                />
              </ActionIconButton>
            </>
          ) : (
            // If user is Pusher
            <>
              <UpIconButton
                id={feature.id}
                vote={feature.vote}
                upVote={feature.upVote}
              />
              <DownIconButton
                id={feature.id}
                vote={feature.vote}
                upVote={feature.upVote}
              />
            </>
          )}
        </Group>
      </Card>
      <ShowFeature
        open={openShowFeatureModal}
        setOpen={setOpenShowFeatureModal}
        feature={feature}
      />
    </>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: 350,
    height: 370,
    cursor: 'pointer',
    '&:hover': {
      transition: 'all 0.35s ease-in-out',
      transform: 'scale(1.04)',
    },
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    height: '140px',
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  icons: {
    padding: 2,
  },

  iconButton: {
    flex: 1,
  },
}));
