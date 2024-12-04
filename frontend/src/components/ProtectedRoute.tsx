import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProp {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProp) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }

  return navigate("/signin");
};
