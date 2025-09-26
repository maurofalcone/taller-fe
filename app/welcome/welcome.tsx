import { useState } from "react";
import { submitTransaction, type TransactionDetail } from "~/api/postAmount";

export function Welcome() {
  const [formData, setFormData] = useState<TransactionDetail>({
    amount: 0,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <form
        className="bg-white  flex flex-col gap-1"
        onSubmit={async (e) => {
          e.preventDefault();
          await submitTransaction(formData);
          // redirect or setup a success screen.
        }}
      >
        <label className="text-black">Amount</label>
        <input
          className="bg-blue-50 text-black"
          name="amount"
          onChange={handleChange}
        />
        <label className="text-black">Description</label>
        <input
          placeholder="Transaction description"
          className="bg-blue-50 text-black"
          name="description"
          onChange={handleChange}
        />
        <button className="bg-green-300 " type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
