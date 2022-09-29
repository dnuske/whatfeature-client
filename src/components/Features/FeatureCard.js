import {
  Card,
  Image,
  Text,
  Group,
  Button,
  createStyles,
  Badge,
} from '@mantine/core';
import Link from 'next/link';
import { Edit, Trash, BookUpload } from 'tabler-icons-react';
import { ActionIconButton } from '../IconButtons/ActionIconButton';
import { DownIconButton } from '../IconButtons/DownIconButton';
import { UpIconButton } from '../IconButtons/UpIconButton';

export function FeatureCard({ feature }) {
  const { classes } = useStyles();

  const badgeStatus = (status) => {
    switch (status) {
      case 'draft':
        return <Badge color="dark">Draft</Badge>;
      case 'voting':
        return <Badge color="indigo">Voting</Badge>;
      case 'in-progress':
        return <Badge color="orange">In Progress</Badge>;
      case 'done':
        return <Badge color="teal">Done</Badge>;
      default:
        return <Badge color="dark">Draft</Badge>;
    }
  };

  return (
    <>
      <Link href={`/${feature.id}`}>
        <Card withBorder radius="md" p="md" className={classes.card}>
          {!!feature.image && (
            <Card.Section>
              <Image src={feature.image} alt={feature.title} height={150} />
            </Card.Section>
          )}

          <Card.Section
            mt="md"
            className={classes.section}
            style={{
              height: !!feature.image ? '140px' : '307px',
              paddingTop: !!feature.image ? '' : '10px',
            }}
          >
            <Group position="apart">
              <Text size="lg" weight={500}>
                {feature.title}
              </Text>
              {badgeStatus(feature.status)}
            </Group>
            <Text size="sm" mt="xs">
              {feature.description.substring(0, 170) + '...'}
            </Text>
          </Card.Section>

          <Group mt="xs">
            {true ? (
              // If user is Founder
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '100%',
                }}
              >
                {feature.vote && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Badge
                      color="teal"
                      style={{
                        marginTop: '-1px',
                        marginBottom: '1px',
                      }}
                    >
                      VOTE UP: 100
                    </Badge>
                    <Badge color="red">VOTE DOWN: 41</Badge>
                  </div>
                )}
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <Link href={`/${feature.id}`}>
                    <ActionIconButton color={'#228BE6'}>
                      <BookUpload
                        size={35}
                        strokeWidth={1.5}
                        className={classes.icons}
                        color="white"
                      />
                    </ActionIconButton>
                  </Link>
                  <ActionIconButton>
                    <Edit
                      size={35}
                      strokeWidth={1.5}
                      className={classes.icons}
                    />
                  </ActionIconButton>
                  <ActionIconButton>
                    <Trash
                      size={35}
                      strokeWidth={1.5}
                      color={'#FF4747'}
                      className={classes.icons}
                    />
                  </ActionIconButton>
                </div>
              </div>
            ) : (
              // If user is Pusher
              <>
                <Button radius="md" className={classes.iconButton}>
                  Join discussion
                </Button>
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
      </Link>
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
    width: 350,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
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
