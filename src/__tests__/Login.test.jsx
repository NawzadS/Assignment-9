import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../components/Login";

function renderLogin() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </MemoryRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("shows error for invalid login", () => {
  renderLogin();

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "wrong" },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "wrong" },
  });

  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
});
