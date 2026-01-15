import FinanceCalculator from "../../components/customer/FinanceCalculator";
import ReserveCar from "../../components/customer/ReserveCar";

export default function Finance() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>💰 Finance Options</h2>
      <h3>Plan your purchase with transparent pricing.</h3>

      <FinanceCalculator />
      <ReserveCar />
    </div>
  );
}
