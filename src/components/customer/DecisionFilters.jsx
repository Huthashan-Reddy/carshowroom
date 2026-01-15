export default function DecisionFilters() {
  return (
    <div className="filters">
      <label><input type="checkbox" /> ULEZ Compliant</label>
      <label><input type="checkbox" /> Electric Range &gt; 300km</label>
      <label><input type="checkbox" /> Family Friendly</label>
    </div>
  );
}
