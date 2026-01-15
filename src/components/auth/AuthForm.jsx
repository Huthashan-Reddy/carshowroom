import { useState } from "react";

export default function AuthForm({ role, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(role, email, password);
    onSuccess();
  };

  return (
    <form className="auth-form" onSubmit={submitHandler}>
      <h2>{role} {isLogin ? "Login" : "Register"}</h2>

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="switch-text" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "No account? Register" : "Already have an account? Login"}
      </p>
      <button type="submit">
        {isLogin ? "Login" : "Register"}
      </button>

      
    </form>
  );
}
