import {
  Image,
  Modal,
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  Divider,
  TextInput,
  ActionIcon,
  useMantineTheme,
  Textarea,
} from '@mantine/core';
import { DownIconButton } from '../IconButtons/DownIconButton';
import { UpIconButton } from '../IconButtons/UpIconButton';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';

export function ShowFeature({ open, setOpen, feature }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      title={feature.title}
      size="lg"
    >
      <Paper withBorder radius="md" className={classes.card}>
        <Image
          src={feature.image}
          alt={feature.title}
          sx={{
            marginBottom: '1rem',
          }}
        />

        <Text size="xl" weight={500} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" mt="sm" color="dimmed">
          {feature.description}
        </Text>

        <Divider my="xs" />
        <Text
          sx={{
            marginBottom: '10px',
          }}
        >
          Express your vote:
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <UpIconButton
            id={feature.id}
            vote={feature.vote}
            upVote={feature.upVote}
            isRounded
          />
          <DownIconButton
            id={feature.id}
            vote={feature.vote}
            upVote={feature.upVote}
            isRounded
          />
        </div>
        <Divider
          my="xs"
          style={{
            marginTop: '20px',
          }}
        />
        <Text>Share your opinion to the developers:</Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Textarea
            size="md"
            placeholder="Search questions"
            rightSectionWidth={42}
            sx={{
              width: '90%',
            }}
          />
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            <IconArrowRight size={18} stroke={1.5} />
          </ActionIcon>
        </div>
      </Paper>
    </Modal>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));
