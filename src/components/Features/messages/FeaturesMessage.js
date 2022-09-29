import React from 'react';
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import {
  Text,
  ActionIcon,
  Textarea,
  useMantineTheme,
  createStyles,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Divider,
  Space,
} from '@mantine/core';

import { IconArrowRight } from '@tabler/icons';

function CommentHtml() {
  const useStyles = createStyles((theme) => ({
    comment: {
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    },

    body: {
      paddingLeft: 54,
      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },

    content: {
      '& > p:last-child': {
        marginBottom: 0,
      },
    },
  }));

  const dataMock = {
    postedAt: '10 minutes ago',
    body: '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
    author: {
      name: 'Jacob Warnhalter',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  };

  const { classes } = useStyles();
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.comment}
      style={{
        marginTop: '1rem',
        maxWidth: '600px',
      }}
    >
      <Group>
        <Avatar
          src={dataMock.author.image}
          alt={dataMock.author.name}
          radius="xl"
        />
        <div>
          <Text size="sm">{dataMock.author.name}</Text>
          <Text size="xs" color="dimmed">
            {dataMock.postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: dataMock.body }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}

export function FeaturesMessage() {
  const theme = useMantineTheme();
  const [value, onChange] = useState();
  return (
    <>
      <Text>Share your opinion to the developers:</Text>
      <Space h="md" />
      <small>Comment as Daniel</small>
      <div>
        <RichTextEditor value={value} onChange={onChange} id="rte" />
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      </div>
      <CommentHtml />
      <CommentHtml />
      <CommentHtml />
    </>
  );
}
