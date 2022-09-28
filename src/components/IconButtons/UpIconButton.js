import { ActionIcon, createStyles } from '@mantine/core';
import AppState from '../../services/states';
import { ArrowBigTop } from 'tabler-icons-react';

export function UpIconButton({ id, vote, upVote }) {
  const { classes } = useStyles();
  const appState = AppState.useContainer();

  // const handleChangeVote = () => {
  //   appState.data.filter((item) => item.id === id)[0].vote = true;
  //   appState.data.filter((item) => item.id === id)[0].upVote = true;

  //   // remplace the item in the array
  //   const newData = appState.data.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         vote: true,
  //         upVote: true,
  //       };
  //     }
  //     return item;
  //   });

  //   // update the state
  //   appState.setData(newData);
  // };

  return (
    <ActionIcon
      variant="default"
      radius="md"
      sx={vote && upVote && { backgroundColor: '#2D8632' }}
      size={35}
      style={{
        width: 40,
      }}
      // onClick={handleChangeVote}
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
