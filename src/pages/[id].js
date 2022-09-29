import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AppState from '../services/states';
import {
  Image,
  Modal,
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  Divider,
  TextInput,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { DownIconButton } from '../components/IconButtons/DownIconButton';
import { UpIconButton } from '../components/IconButtons/UpIconButton';
import { FeaturesMessage } from '../components/features/messages/FeaturesMessage';

const FeaturePage = () => {
  const router = useRouter();

  const { id } = router.query;

  const appState = AppState.useContainer();

  // get de object from appState.data
  const feature = {
    id: 1,
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: true,
    status: 'done',
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        style={{
          padding: '1rem',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '300px',
          }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <Text size="xl" weight={500} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" mt="sm" color="dimmed">
          {feature.description}
        </Text>

        <Divider my="xs" />
        <Text
          sx={{
            marginBottom: '10px',
          }}
        >
          Express your vote:
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <UpIconButton
            id={feature.id}
            vote={feature.vote}
            upVote={feature.upVote}
            isRounded
          />
          <DownIconButton
            id={feature.id}
            vote={feature.vote}
            upVote={feature.upVote}
            isRounded
          />
        </div>
        <Divider
          my="xs"
          style={{
            marginTop: '20px',
          }}
        />
        <FeaturesMessage id={id} />
      </Paper>
    </>
  );
};

export default FeaturePage;
