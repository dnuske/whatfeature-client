import {
  Modal,
  Button,
  Group,
  TextInput,
  Space,
  Textarea,
} from '@mantine/core';
import { ArrowBigRight } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

export default function RecommendFeatureModal({ opened, setOpened }) {
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
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
    console.log(values);
    setOpened(false);
  };
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Recommend a feature"
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
          placeholder="Explain your feature request"
          required
          {...form.getInputProps('description')}
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
