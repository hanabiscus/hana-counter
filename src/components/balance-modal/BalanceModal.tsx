"use client";

import Modal from "@mui/material/Modal";
import BalanceTextFields from "./balance-text-fields/BalanceTextFields";
import BalanceDatePicker from "./balance-date-picker/BalanceDatePicker";
import { useIsBalanceOpenState } from "@/hooks/useBalanceModal";
import BalanceModalCancelButton from "./buttons/balance-modal-cancel-button/BalanceModalCancelButton";
import BalanceUpdateButton from "./buttons/balance-update-button/BalanceUpdateButton";

const BalanceModal = () => {
  const isBalanceModalOpen = useIsBalanceOpenState();

  return (
    <Modal open={isBalanceModalOpen}>
      <div className="h-svh flex flex-wrap justify-center items-center">
        <div className="h-[260px] w-[300px] bg-[#bfc5ca] rounded-2xl shadow-xl">
          <BalanceTextFields />
          <BalanceDatePicker />
          <div className="h-[40px] flex justify-end items-end">
            <div>
              <BalanceModalCancelButton />
            </div>
            <div>
              <BalanceUpdateButton />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BalanceModal;
