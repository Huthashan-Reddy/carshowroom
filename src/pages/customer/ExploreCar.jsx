import Car360Viewer from "../../components/customer/Car360Viewer";
import CarConfigurator from "../../components/customer/CarConfigurator";
import FeatureHotspots from "../../components/customer/FeatureHotspots";
import DecisionFilters from "../../components/customer/DecisionFilters";
import ComparisonTable from "../../components/customer/ComparisonTable";
import TradeInTool from "../../components/customer/TradeInTool";
import FinanceCalculator from "../../components/customer/FinanceCalculator";
import ReserveCar from "../../components/customer/ReserveCar";
import TestDriveCalendar from "../../components/customer/TestDriveCalendar";
import WhatsAppButton from "../../components/customer/WhatsAppButton";



export default function ExploreCar() {
  return (
    <div style={{ padding: "40px", color: "#217526" }}>
      <h2>🔍 Explore Cars</h2>
      <h3>Experience the car from every angle.</h3>
      <Car360Viewer />
      <FeatureHotspots />

      <h3 style={{ marginTop: "50px" }}>Customize Your Car</h3>
      <CarConfigurator />
    </div>
  );
}


