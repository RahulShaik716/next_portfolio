import { Check } from "@geist-ui/icons";
import { Dispatch, SetStateAction } from "react";

export default function SuccessModal({
  message,
  showModal,
}: {
  message: string;
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-20 flex  justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-prose h-fit bg-white rounded-lg">
        <div className="flex flex-col items-center p-4 gap-y-4">
          <div className="p-2 bg-slate-200 rounded-full">
            <Check color="green" size={32} />
          </div>
          <p className="font-bold text-lg"> {message} </p>
          <button
            className="font-semibold bg-black text-white px-4 py-2 rounded-md"
            onClick={() => showModal(false)}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
