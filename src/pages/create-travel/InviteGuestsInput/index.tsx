import { ArrowRight, UserRound } from 'lucide-react';

type InviteGuestsInputProps = {
  emailsToInvite: string[];
  openGuestsModal: () => void;
  openConfirmTravelModal: () => void;
};

const InviteGuestsInput = ({
  emailsToInvite,
  openGuestsModal,
  openConfirmTravelModal,
}: InviteGuestsInputProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRound className="size-5 text-zinc-400" />
        {emailsToInvite.length ? (
          <p className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s).
          </p>
        ) : (
          <p className="text-lg text-zinc-400 flex-1">Quem estará na viagem?</p>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        onClick={openConfirmTravelModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
};

export default InviteGuestsInput;
