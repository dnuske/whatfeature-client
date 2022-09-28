import {
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Avatar,
} from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';

import { UserCircle, FingerprintOff } from 'tabler-icons-react';
import { useStylesNav } from './useStylesNav';

export default function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStylesNav();
  const [accessToken] = useLocalStorage({ key: 'access-token' });

  const userActions = [
    {
      icon: FingerprintOff,
      title: 'Log out',
      onClick: () => {
        handleLogOut();
      },
    },
  ];

  const handleLogOut = () => {
    localStorage.removeItem('access-token');
    window.location.reload();
  };

  const linksUser = userActions.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group
        noWrap
        align="flex-start"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={item.onClick}
      >
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <Text size="sm" weight={500}>
          {item.title}
        </Text>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          {/* TODO: PUT IR LOGO HERE */}
          LOGO HERE
          {/* TODO: HERE PUT UR's ROUTES */}
          {accessToken && (
            <Group
              sx={{ height: '100%' }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <a href="#" className={classes.link}>
                Home
              </a>
              <a href="#" className={classes.link}>
                Learn
              </a>
              <a href="#" className={classes.link}>
                Academy
              </a>
            </Group>
          )}
          {/* This is for mobile menu */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
          {!accessToken ? (
            <>
              <Group className={classes.hiddenMobile}>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </Group>
            </>
          ) : (
            // TODO: Handle de user logged in
            <Group className={classes.hiddenMobile}>
              <HoverCard
                width={250}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Button variant="default">
                    {/* // TODO: Hanlde the user photo and name */}
                    <Avatar alt={'user.name'} radius="xl" size={35} />
                    <Text
                      size="sm"
                      sx={{
                        marginRight: '5px',
                      }}
                    >
                      Hi, Daniel
                    </Text>

                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Button>
                </HoverCard.Target>

                {/* TODO: HERE U CAN SET THE USER ACTIONS */}
                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text weight={500}>User actions</Text>
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />

                  <SimpleGrid cols={1} spacing={0}>
                    {linksUser}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          )}
        </Group>
      </Header>

      {/* MOBILE DRAWER */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
          {!accessToken && (
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          )}

          {accessToken && (
            <>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  {/* // TODO: Hanlde the user photo and name */}
                  <Avatar alt={'user.name'} radius="xl" size={35} />
                  <Text
                    size="sm"
                    sx={{
                      marginRight: '5px',
                    }}
                  >
                    Hi, Dani
                  </Text>

                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{linksUser}</Collapse>
              <a href="#" className={classes.link}>
                Home
              </a>
              <a href="#" className={classes.link}>
                Learn
              </a>
              <a href="#" className={classes.link}>
                Academy
              </a>
            </>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
