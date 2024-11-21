import React, { useState } from "react";
import { useAuth } from "../../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../../services/MockData";
import Button from "../../components/atoms/Button/Button";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import FormField from "../../components/atoms/FormField/FormField";
import Title from "../../components/atoms/Title/Title";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.name === name && u.password === password,
    );

    if (user) {
      login(user.name);
      setError("");
      navigate("/account");
    } else {
      setError("Invalid name or password. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex items-center justify-center min-h-screen bg-gray-100 p-6"
    >
      <div className="p-8 bg-white rounded-md shadow-md max-w-xs w-full flex flex-col">
        <Title children="Login" />

        <FormField
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <ErrorMessage error={error} />}

        <Button type="submit" children="Login" color="blue" />
      </div>
    </form>
  );
}
