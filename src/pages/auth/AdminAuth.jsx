import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";

export default function AdminAuth() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <AuthForm role="Admin" onSuccess={() => navigate("/admin")} />
    </div>
  );
}
