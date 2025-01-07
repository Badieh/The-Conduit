import { useState } from "react";
import { useRegisterMutation } from "../api/RegisterApi";
import AuthErrors from "../components/AuthErrors";

export default function Register() {
  const registerMutation = useRegisterMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmitRegister(e: any) {
    e.preventDefault();
    registerMutation.mutate({ email, password, username });
  }
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            {registerMutation.isError && (
              <AuthErrors
                errors={registerMutation.error.response.data.errors.body}
              />
            )}

            <form onSubmit={handleSubmitRegister}>
              <fieldset className="form-group">
                <input
                  id="username"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  id="email"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  id="password"
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
