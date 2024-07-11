import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InviteGuestsModal from './InviteGuestsModal';
import ConfirmTravelModal from './ConfirmTravelModal';
import PlaceDestinationAndDateInput from './PlaceDestinationAndDateInput';
import InviteGuestsInput from './InviteGuestsInput';

const CreateTravelPage = () => {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTravelModalOpen, setIsConfirmTravelModalOpen] =
    useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const navigate = useNavigate();

  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestsInput = () => {
    setIsGuestsInputOpen(false);
  };

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestsModal = () => {
    setIsGuestsModalOpen(false);
  };

  const openConfirmTravelModal = () => {
    setIsConfirmTravelModalOpen(true);
  };

  const closeConfirmTravelModal = () => {
    setIsConfirmTravelModalOpen(false);
  };

  const addNewEmailToInvite = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if (!email || emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite((emails) => [...emails, email]);

    event.currentTarget.reset();
  };

  const removeEmailFromInvite = (email: string) => {
    setEmailsToInvite((emails) => emails.filter((e) => e !== email));
  };

  const createTravel = () => {
    navigate('/travels/123');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-square bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <PlaceDestinationAndDateInput
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsInput
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmTravelModal={openConfirmTravelModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br />
          com nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvite={removeEmailFromInvite}
          addNewEmailToInvite={addNewEmailToInvite}
        />
      )}

      {isConfirmTravelModalOpen && (
        <ConfirmTravelModal
          closeConfirmTravelModal={closeConfirmTravelModal}
          addNewEmailToInvite={addNewEmailToInvite}
          createTravel={createTravel}
        />
      )}
    </div>
  );
};

export default CreateTravelPage;
