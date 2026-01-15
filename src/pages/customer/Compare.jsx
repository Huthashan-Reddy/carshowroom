import DecisionFilters from "../../components/customer/DecisionFilters";
import ComparisonTable from "../../components/customer/ComparisonTable";

export default function Compare() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>📊 Compare Cars</h2>
      <h3>Compare models side by side to choose the best one.</h3>

      <DecisionFilters />
      <ComparisonTable />
    </div>
  );
}
