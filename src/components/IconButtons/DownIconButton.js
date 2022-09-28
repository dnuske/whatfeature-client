import { ActionIcon, createStyles } from '@mantine/core';
import { ArrowBigDown } from 'tabler-icons-react';
import AppState from '../../services/states';

export function DownIconButton({ id, vote, upVote }) {
  const { classes } = useStyles();
  const appState = AppState.useContainer();

  // Create a function called handleChangeVote that iterate appState.data and change the vote and upVote value of the item with the id passed in props
  const handleChangeVote = () => {
    // remplace the item in the array
    const newData = appState.data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          vote: true,
          upVote: false,
        };
      }
      return item;
    });

    // update the state
    appState.setData(newData);
  };

  return (
    <ActionIcon
      variant="transparent"
      radius="md"
      size={35}
      sx={vote && !upVote && { backgroundColor: '#FF4747' }}
      style={{
        width: 40,
        border: '1px solid #CED4DA',
      }}
      onClick={handleChangeVote}
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
