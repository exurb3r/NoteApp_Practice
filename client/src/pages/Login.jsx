import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Login.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      username,
      password,
    });

    // navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

    <main className="login-page">
      <div className="login-container">
        <section className="login-card">

          <header className="login-card__header">
            <h1>Welcome to Note App</h1>
          </header>

          <div className="login-card__body">
            <form className="login-form" onSubmit={handleSubmit}>

              <div className="form-fields">

                <div className="form-group">
                  <input
                    placeholder="Username"
                    id="username"
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder="Password"
                    id="password"
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

              </div>

              <div className="form-actions">
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>

            </form>
          </div>

        </section>
      </div>
    </main>
    </>
  );
}