import { ActionIcon, createStyles } from '@mantine/core';
import { ArrowBigDown } from 'tabler-icons-react';

export function DownIconButton({ vote, upVote }) {
  const { classes } = useStyles();

  return (
    <ActionIcon
      variant="default"
      radius="md"
      size={35}
      sx={vote && !upVote && { backgroundColor: '#FF4747' }}
      style={{
        width: 40,
      }}
    >
      <ArrowBigDown
        size={35}
        strokeWidth={1.5}
        color={vote && !upVote ? 'white' : '#FF4747'}
        className={classes.icons}
      />
    </ActionIcon>
  );
}

const useStyles = createStyles(() => ({
  icons: {
    padding: 2,
  },
}));
