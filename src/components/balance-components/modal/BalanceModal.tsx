"use client";

import Modal from "@mui/material/Modal";
import BalanceTextFields from "./balance-text-fields/BalanceTextFields";
import BalanceDatePicker from "./date-picker/BalanceDatePicker";
import { useIsBalanceOpenState } from "@/hooks/useBalanceModal";
import CancelButton from "./buttons/CancelButton";

const BalanceModal = () => {
  const isBalanceModalOpen = useIsBalanceOpenState();

  return (
    <Modal open={isBalanceModalOpen}>
      <div className="h-svh flex flex-wrap justify-center items-center">
        <div className="h-[270px] w-[300px] bg-[#bfc5ca] rounded-md">
          <BalanceTextFields />
          <BalanceDatePicker />
          <div className="flex justify-end items-end">
            <div>
              <CancelButton />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BalanceModal;
