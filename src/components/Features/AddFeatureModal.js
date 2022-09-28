import {
  Modal,
  Button,
  Group,
  TextInput,
  Space,
  Checkbox,
  Textarea,
  createStyles,
} from '@mantine/core';
import { ArrowBigRight } from 'tabler-icons-react';
import { useForm } from '@mantine/form';
import AppState from '../../services/states';

export default function AddFeatureModal({ opened, setOpened }) {
  const { classes } = useStyles();
  const appState = AppState.useContainer();

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      visible: false,
      allowVoting: false,
    },

    validate: {
      title: (value) => {
        if (!value) {
          return 'Title is required';
        }
      },
      description: (value) => {
        if (!value) {
          return 'Description is required';
        }
      },
    },
  });

  const handleSubmit = (values) => {
    //Add new feature on appState.data

    const newArray = [
      ...appState.data,
      {
        id: appState.data.length + 1,
        image:
          'http://stratnor.com/wp-content/themes/stratnor/images/no-image.png',
        titñe: values.title,
        description: values.description,
      },
    ];
    appState.setData(newArray);
    setOpened(false);
  };
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add a new feature"
    >
      {/* TODO: ADD LOADERHERE */}
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="Title"
          placeholder="Title"
          required
          {...form.getInputProps('title')}
        />
        <Space h="xs" />
        <Textarea
          label="Description"
          placeholder="Explain your new feature"
          required
          {...form.getInputProps('description')}
        />
        <Space h="xs" />
        <Checkbox
          label="Visible for pushers"
          className={classes.checkbox}
          {...form.getInputProps('visible')}
        />
        <Checkbox
          label="Allow voting"
          className={classes.checkbox}
          {...form.getInputProps('allowVoting')}
        />

        <Group position="right" mt="md">
          <Button type="submit">
            <ArrowBigRight size={28} strokeWidth={2} color={'white'} />
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

const useStyles = createStyles(() => ({
  checkbox: {
    marginTop: '8px',
  },
}));
