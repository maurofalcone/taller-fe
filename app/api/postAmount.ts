export interface TransactionDetail {
  amount: number;
  description: string;
}

export const submitTransaction = async (data: TransactionDetail) => {
  try {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const d = await response.json();
    return d;
  } catch (error) {
    console.log(error);
  }
};
