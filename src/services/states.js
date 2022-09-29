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
    id: 1,
    image:
      'https://elcomercio.pe/resizer/KiDlhvA-I_SxBwbOLevRM2dDy9s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YUGZJTJH7JGGXGCVMVNO42SKMU.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: true,
    status: 'done',
  },
  {
    id: 2,
    image:
      'https://concepto.de/wp-content/uploads/2019/02/bosque-de-coniferas-1-e1550494832285.jpg',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    vote: true,
    upVote: true,
    status: 'voting',
  },
  {
    id: 3,
    image:
      'https://www.userlike.com/api/proxy/resize/best-chatbots-2018/best-chatbots-2018.png?height=720',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales...',
    status: 'in-progress',
    status: 'in-progress',
    vote: true,
    upVote: true,
  },
  {
    id: 4,
    image:
      'https://statics.eleconomista.com.ar/2022/06/crop/62aa9a31ba89c__950x512.webp',
    title: 'Calendario de Crons',
    description:
      'El objetivo es implementar un Calendario de Cronohooks, una implementación propia que permita visualizar tu propio cronograma sin complicaciones, pero con un feature para implementar en entornos reales',
  },
];

export default AppState;
