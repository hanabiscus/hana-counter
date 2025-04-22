"use client";

import { JSX } from "react";
import Modal from "@mui/material/Modal";
import BalanceTextFields from "./balance-text-fields/BalanceTextFields";
import BalanceDatePicker from "./balance-date-picker/BalanceDatePicker";
import {
  useCreateBalance,
  useIsBalanceModalOpen,
} from "@/hooks/useBalanceModal";
import BalanceModalCancelButton from "./buttons/balance-modal-cancel-button/BalanceModalCancelButton";
import BalanceUpdateButton from "./buttons/balance-update-button/BalanceUpdateButton";
import BalanceDeleteButton from "./buttons/balance-delete-button/BalanceDeleteButton";

const BalanceModal: () => JSX.Element = () => {
  const isBalanceModalOpen: boolean = useIsBalanceModalOpen();
  const isCreateBalance: boolean = useCreateBalance()[0];

  return (
    <Modal open={isBalanceModalOpen}>
      <div className="h-svh flex flex-wrap justify-center items-center">
        <div className="h-[310px] w-[350px] bg-[#444444] rounded-2xl shadow-xl">
          <div className="h-[30px] flex justify-end items-center">
            <BalanceModalCancelButton />
          </div>
          <BalanceTextFields />
          <BalanceDatePicker />
          <div className="h-[60px] flex justify-end items-end">
            {isCreateBalance ? null : <BalanceDeleteButton />}
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
