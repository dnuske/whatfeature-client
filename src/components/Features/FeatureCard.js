import { Card, Image, Text, Group, Button, createStyles } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';
import { ActionIconButton } from '../IconButtons/ActionIconButton';
import { DownIconButton } from '../IconButtons/DownIconButton';
import { UpIconButton } from '../IconButtons/UpIconButton';

export function FeatureCard({ id, image, title, description, vote, upVote }) {
  const { classes } = useStyles();

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={150} />
        </Card.Section>

        <Card.Section mt="md" className={classes.section}>
          <Group position="apart">
            <Text size="lg" weight={500}>
              {title}
            </Text>
          </Group>
          <Text size="sm" mt="xs">
            {description.substring(0, 170) + '...'}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button radius="md" className={classes.iconButton}>
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
              <UpIconButton id={id} vote={vote} upVote={upVote} />
              <DownIconButton id={id} vote={vote} upVote={upVote} />
            </>
          )}
        </Group>
      </Card>
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
