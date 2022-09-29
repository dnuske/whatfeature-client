import { ActionIcon, createStyles } from '@mantine/core';
import AppState from '../../services/states';
import { ArrowBigTop, H1 } from 'tabler-icons-react';

export function UpIconButton({ id, vote, upVote, isRounded }) {
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
          upVote: true,
        };
      }
      return item;
    });

    // update the state
    appState.setData(newData);
  };

  return (
    <>
      {isRounded ? (
        <ActionIcon
          variant="transparent"
          radius="xl"
          sx={vote && upVote && { backgroundColor: '#2D8632' }}
          size={90}
          style={{
            border: '1px solid #CED4DA',
          }}
          onClick={handleChangeVote}
        >
          <ArrowBigTop
            size={80}
            strokeWidth={1.5}
            color={vote && upVote ? 'white' : '#2d8632'}
            className={classes.icons}
          />
        </ActionIcon>
      ) : (
        <ActionIcon
          variant="transparent"
          radius="md"
          sx={vote && upVote && { backgroundColor: '#2D8632' }}
          size={35}
          style={{
            width: 40,
            border: '1px solid #CED4DA',
          }}
          onClick={handleChangeVote}
        >
          <ArrowBigTop
            size={35}
            strokeWidth={1.5}
            color={vote && upVote ? 'white' : '#2d8632'}
            className={classes.icons}
          />
        </ActionIcon>
      )}
    </>
  );
}

const useStyles = createStyles(() => ({
  icons: {
    padding: 2,
  },
}));
