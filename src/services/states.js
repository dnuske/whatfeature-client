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

  return {
    globalModalOpen,
    openGlobalModal,
    closeGlobalModal,
  };
}

const AppState = createContainer(useAppState);

export default AppState;
