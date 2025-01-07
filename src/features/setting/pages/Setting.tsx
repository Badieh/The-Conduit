import { paths } from "@/routes/AppRouter";
import { useUserStore } from "@/stores/UserStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSettingMutation } from "../api/SettingApi";

export default function Setting() {
  const user = useUserStore((state) => state.user);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState(user?.bio);
  const [image, setImage] = useState(user?.image);

  const navigate = useNavigate();
  const settingMutation = useSettingMutation();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    settingMutation.mutate({ email, username, password, bio, image });
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            {!username && (
              <ul className="error-messages">
                <li>That name is required</li>
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    value={image ?? ""}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    // rows="8"
                    placeholder="Short bio about you"
                    value={bio ?? ""}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
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
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  function logout() {
    useUserStore.setState({ user: null });
    navigate(paths.home.getHref());
    toast.success("Logout successfully");
  }
}
