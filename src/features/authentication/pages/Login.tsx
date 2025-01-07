import { useState } from "react";
import AuthErrors from "../components/AuthErrors";
import { useLoginMutation } from "../api/LoginApi";
import { Link } from "react-router";
import { paths } from "@/routes/AppRouter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLoginMutation();
  async function handleSubmitLogin(e: any) {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={paths.register.getHref()}>Need an account?</Link>
            </p>

            {loginMutation.isError && (
              <AuthErrors
                errors={loginMutation.error.response.data.errors.body}
              />
            )}

            <form onSubmit={handleSubmitLogin}>
              <fieldset className="form-group">
                <input
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
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
