import BulkUploader from "../../components/admin/BulkUploader";
import VINDecoder from "../../components/admin/VINDecoder";
import ReconTracker from "../../components/admin/ReconTracker";
import PriceAging from "../../components/admin/PriceAging";

export default function Inventory() {
  return (
    <div className="admin-scope">
      <h2>🚗 Inventory Management</h2>
      <BulkUploader />
      <VINDecoder />
      <ReconTracker />
      <PriceAging />
    </div>
  );
}
