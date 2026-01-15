export default function LeadCard({ lead }) {
  return (
    <div className="card">
      <h3>{lead.name}</h3>
      <p>Interested In: {lead.car}</p>
      <p>Lead Score: 🔥 {lead.score}</p>

      <button>Claim Lead</button>
    </div>
  );
}
