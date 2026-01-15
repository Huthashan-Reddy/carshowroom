import TestDriveCalendar from "../../components/customer/TestDriveCalendar";
import WhatsAppButton from "../../components/customer/WhatsAppButton";

export default function BookTestDrive() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>📅 Book a Test Drive</h2>
      <h3>Select a date and time that suits you.</h3>

      <TestDriveCalendar />
      <WhatsAppButton />
    </div>
  );
}
