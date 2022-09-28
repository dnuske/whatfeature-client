import { useState } from 'react';
import { createContainer } from 'unstated-next';

export function useAppState() {
  // modal management
  let [globalModalOpen, setGlobalModalOpen] = useState(false);

  const openGlobalModal = () => {
    setGlobalModalOpen(true);
  };
  const closeGlobalModal = () => {
    setGlobalModalOpen(false);
  };

  const [data, setData] = useState(dataMockUp);

  return {
    globalModalOpen,
    openGlobalModal,
    closeGlobalModal,
    data,
    setData,
  };
}

const AppState = createContainer(useAppState);

const dataMockUp = [
  {
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: true,
  },
  {
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: true,
  },
  {
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: false,
  },
  {
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
  },
];

export default AppState;
