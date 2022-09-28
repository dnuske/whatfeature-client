import { ActionIcon, createStyles } from '@mantine/core';
import { ArrowBigTop } from 'tabler-icons-react';

export function UpIconButton({ vote, upVote }) {
  const { classes } = useStyles();
  return (
    <ActionIcon
      variant="default"
      radius="md"
      sx={vote && upVote && { backgroundColor: '#2D8632' }}
      size={35}
      style={{
        width: 40,
      }}
    >
      <ArrowBigTop
        size={35}
        strokeWidth={1.5}
        color={vote && upVote ? 'white' : '#2d8632'}
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
