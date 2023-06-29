import { useState, useEffect } from "react";

type TableItemType = {
  ispb: string;
  name: string;
  code: number;
};

export default function UseEffectExample() {
  const [tableData, setTableData] = useState<TableItemType[]>();

  function handleGetBanks() {
    fetch("https://brasilapi.com.br/api/banks/v1")
      .then((response) => response.json())
      .then((data) => {
        const banks = data.slice(0, 10);
        setTableData(banks);
      })
      .catch((error) => {
        console.error("Ocorreu um erro na requisição:", error);
      });
  }

  useEffect(() => {
    handleGetBanks();
  }, []);

  return (
    <span>
      {tableData &&
        tableData.map(({ ...row }) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <span key={row.ispb}>{row.name}</span>
            </div>
          );
        })}
    </span>
  );
}
