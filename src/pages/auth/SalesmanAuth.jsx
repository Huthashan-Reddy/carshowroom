import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";

export default function SalesmanAuth() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <AuthForm role="Salesman" onSuccess={() => navigate("/salesman")} />
    </div>
  );
}
