"use client";

import Modal from "@mui/material/Modal";
import BalanceTextFields from "./balance-text-fields/BalanceTextFields";
import BalanceDatePicker from "./balance-date-picker/BalanceDatePicker";
import { useIsBalanceOpenState } from "@/hooks/useBalanceModal";
import BalanceModalCancelButton from "./buttons/balance-modal-cancel-button/BalanceModalCancelButton";
import BalanceUpdateButton from "./buttons/balance-update-button/BalanceUpdateButton";
import { balanceModalProps } from "@/const/types";
import BalanceDeleteButton from "./buttons/balance-delete-button/BalanceDeleteButton";

const BalanceModal = (props: balanceModalProps) => {
  const isBalanceModalOpen = useIsBalanceOpenState();

  return (
    <Modal open={isBalanceModalOpen}>
      <div className="h-svh flex flex-wrap justify-center items-center">
        <div className="h-[280px] w-[350px] bg-[#555555] rounded-2xl shadow-xl">
          <div className="h-[30px] flex justify-end items-center">
            <BalanceModalCancelButton />
          </div>
          <BalanceTextFields />
          <BalanceDatePicker />
          <div className="h-[30px] flex justify-end items-end">
            {props.isCreate ? null : <BalanceDeleteButton />}
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
