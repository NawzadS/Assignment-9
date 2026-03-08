import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { ArticlesProvider } from "../context/ArticlesContext";
import App from "../App";

function renderApp(initialEntries = ["/"]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <AuthProvider>
        <ArticlesProvider>
          <App />
        </ArticlesProvider>
      </AuthProvider>
    </MemoryRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("renders home page on default route", () => {
  renderApp();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test("renders login page on /login route", () => {
  renderApp(["/login"]);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("redirects unauthenticated user from saved page to login page", () => {
  renderApp(["/saved"]);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
