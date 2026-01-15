export default function WhatsAppChat({ name, car }) {
  return (
    <a
      href={`https://wa.me/919999999999?text=Hi ${name}, I saw you were interested in ${car}.`}
      target="_blank"
      rel="noreferrer"
    >
      <button>💬 WhatsApp Customer</button>
    </a>
  );
}
