import {
  Card,
  Image,
  Text,
  Group,
  Button,
  ActionIcon,
  createStyles,
} from '@mantine/core';
import { ArrowBigTop, ArrowBigDown, Edit, Trash } from 'tabler-icons-react';

export function FeatureCard({ image, title, description }) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={150} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
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
        <Button radius="md" style={{ flex: 1 }}>
          Join discussion
        </Button>
        {true ? (
          // If user is Founder
          <>
            <ActionIcon
              variant="default"
              radius="md"
              size={35}
              style={{
                width: 40,
              }}
            >
              <Edit size={35} strokeWidth={1.5} className={classes.icons} />
            </ActionIcon>
            <ActionIcon
              variant="default"
              radius="md"
              size={35}
              style={{
                width: 40,
              }}
            >
              <Trash
                size={35}
                strokeWidth={1.5}
                color={'#bf4041'}
                className={classes.icons}
              />
            </ActionIcon>
          </>
        ) : (
          // If user is Pusher
          <>
            <ActionIcon
              variant="default"
              radius="md"
              size={35}
              style={{
                width: 40,
              }}
            >
              <ArrowBigTop
                size={35}
                strokeWidth={1.5}
                color={'#2d8632'}
                className={classes.icons}
              />
            </ActionIcon>
            <ActionIcon
              variant="default"
              radius="md"
              size={35}
              style={{
                width: 40,
              }}
            >
              <ArrowBigDown
                size={35}
                strokeWidth={1.5}
                color={'#bf4041'}
                className={classes.icons}
              />
            </ActionIcon>
          </>
        )}
      </Group>
    </Card>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: 350,
    height: 370,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
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
}));
