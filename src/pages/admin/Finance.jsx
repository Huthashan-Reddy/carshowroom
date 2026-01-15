import ProfitCalculator from "../../components/admin/ProfitCalculator";
import LeadSourceChart from "../../components/admin/LeadSourceChart";

export default function Finance() {
  return (
    <div className="admin-scope">
      <h2>📈 Business Intelligence</h2>
      <ProfitCalculator />
      <LeadSourceChart />
    </div>
  );
}
