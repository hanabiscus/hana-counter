// "use client";

// import { JSX, useEffect } from "react";
// import { useBalanceData } from "@/hooks/useBalance";
// import { annuallyBalanceArrayType, balanceDTOType } from "@/const/types";

// const AnnuallyBalanceSummary: () => JSX.Element = () => {
//   const allBalanceData: balanceDTOType = useBalanceData()[0];

//   console.log(allBalanceData);

//   const annuallyBalanceArray: annuallyBalanceArrayType = [];

//   useEffect(() => {
//     const allBalanceDataGroupByBalanceYear: balanceDTOType[] = [];
//     const nMap = new Map();

//     for (let index = 0; index < allBalanceData.length; index++) {
//       const balanceRecord = allBalanceData[index];

//       if (nMap.get(balanceRecord.balanceDate.slice(0, 4))) {
//         const tempArray = nMap.get(balanceRecord.balanceDate.slice(0, 4));
//         tempArray.push(balanceRecord);
//         nMap.set(balanceRecord.balanceDate.slice(0, 4), tempArray);
//       } else {
//         nMap.set(balanceRecord.balanceDate.slice(0, 4), [balanceRecord]);
//       }
//     }

//     for (const allBalancePerBalanceYear of nMap.values()) {
//       allBalanceDataGroupByBalanceYear.push(allBalancePerBalanceYear);
//     }

//     console.log(allBalanceDataGroupByBalanceYear);

//     for (let i = 0; allBalanceDataGroupByBalanceYear.length; i++) {
//       let balance: number = 0;
//       let balanceYear: string = "";
//       for (let j = 0; j < allBalanceDataGroupByBalanceYear[i].length; j++) {
//         balance +=
//           allBalanceDataGroupByBalanceYear[i][j].income -
//           allBalanceDataGroupByBalanceYear[i][j].expenditure;

//         balanceYear = allBalanceDataGroupByBalanceYear[i][j].balanceDate.slice(
//           0,
//           4
//         );
//       }
//       annuallyBalanceArray.push({ balance: balance, balanceYear: balanceYear });
//     }
//   }, [allBalanceData]);

//   return <></>;
// };

// export default AnnuallyBalanceSummary;
