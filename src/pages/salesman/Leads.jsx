import LeadCard from "../../components/salesman/LeadCard";
import LeadTimeline from "../../components/salesman/LeadTimeline";

export default function Leads() {
  const leads = [
    { id: 1, name: "Rahul", car: "Model X", score: 85 },
    { id: 2, name: "Anjali", car: "Model Y", score: 60 }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>📥 Lead Inbox</h2>

      {leads.map((lead) => (
        <div key={lead.id}>
          <LeadCard lead={lead} />
          <LeadTimeline />
        </div>
      ))}
    </div>
  );
}
