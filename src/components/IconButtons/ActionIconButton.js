import { ActionIcon } from '@mantine/core';

export function ActionIconButton({ children, color, onClick }) {
  return (
    <ActionIcon
      variant="default"
      radius="md"
      size={35}
      onClick={onClick}
      style={{
        width: 40,
        backgroundColor: color ? color : 'transparent',
      }}
    >
      {children}
    </ActionIcon>
  );
}
