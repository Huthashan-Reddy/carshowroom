export default function BulkUploader() {
  return (
    <div className="card">
      <h3>📂 Bulk Upload Vehicles</h3>
      <input type="file" accept=".csv,.xml" />
      <button>Upload</button>
    </div>
  );
}
