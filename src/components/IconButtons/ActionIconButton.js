import { ActionIcon } from '@mantine/core';

export function ActionIconButton({ children }) {
  return (
    <ActionIcon
      variant="default"
      radius="md"
      size={35}
      style={{
        width: 40,
      }}
    >
      {children}
    </ActionIcon>
  );
}
