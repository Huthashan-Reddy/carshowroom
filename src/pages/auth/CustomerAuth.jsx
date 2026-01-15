import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";

export default function CustomerAuth() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <AuthForm role="Customer" onSuccess={() => navigate("/customer")} />
    </div>
  );
}
