import { useMantineTheme, Tabs, Space, Paper } from '@mantine/core';
import StyledTabs from './AuthTabs';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function AuthBox() {
  const theme = useMantineTheme();

  const [activeTab, setActiveTab] = useState(1);

  return (
    <Paper
      shadow="sm"
      radius="md"
      p="sm"
      sx={{ maxWidth: 400, marginTop: 100 }}
      mx="auto"
      withBorder
    >
      <StyledTabs
        defaultValue="Login"
        active={activeTab}
        onTabChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Tab value="Login">Log In</Tabs.Tab>
          <Tabs.Tab value="SignUp">Sign Up</Tabs.Tab>
        </Tabs.List>
        <Space h="md" />
        <Tabs.Panel value="Login">
          <Login />
        </Tabs.Panel>
        <Tabs.Panel value="SignUp">
          <Signup />
        </Tabs.Panel>
      </StyledTabs>
    </Paper>
  );
}
