import {
  TextInput,
  Button,
  Group,
  PasswordInput,
  Space,
  Modal,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ArrowBigRight } from 'tabler-icons-react';
import { useState } from 'react';

export default function Login() {
  const [resetPasswordOpened, setResetPasswordOpened] = useState(false);

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const resetForm = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div style={{ position: 'relative' }}>
      {/* TODO: Insert overlay here */}
      {/* <LoadingOverlay visible={authMutation.isLoading} /> */}
      <Modal
        opened={resetPasswordOpened}
        onClose={() => setResetPasswordOpened(false)}
        title="Reset your password"
      >
        <form
          onSubmit={resetForm.onSubmit((values) => {
            // TODO: handle reset password
            console.log(values);
          })}
        >
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...resetForm.getInputProps('email')}
          />
          <Space h="sm" />
          <Group position="right" mt="md">
            <Button type="submit">
              <ArrowBigRight size={28} strokeWidth={2} color={'white'} />
            </Button>
          </Group>
        </form>
      </Modal>

      <form
        onSubmit={loginForm.onSubmit((values) => {
          // TODO: handle login

          localStorage.setItem('access-token', 'asd');
          window.location.href = '/';
        })}
      >
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...loginForm.getInputProps('email')}
        />
        <Space h="sm" />
        <PasswordInput
          placeholder="Password"
          label="Password"
          required
          {...loginForm.getInputProps('password')}
        />
        <Space h="xs" />

        <Group position="apart" mt="md">
          <Button
            variant="subtle"
            size="xs"
            onClick={() => setResetPasswordOpened(true)}
          >
            (forgot my password)
          </Button>
          <Button type="submit">
            <ArrowBigRight size={28} strokeWidth={2} color={'white'} />
          </Button>
        </Group>
      </form>
    </div>
  );
}
