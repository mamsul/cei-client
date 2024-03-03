import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { AUTH_MUTATION } from "../graphql/mutations";
import ErrorBox from "./ErrorBox";
import { useNavigate } from "react-router-dom";
import { setToken } from "../lib/utils";

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("abc@mail.com");
  const [auth, { loading, error, data }] = useMutation(AUTH_MUTATION);

  useEffect(() => {
    if (data?.auth) {
      setToken({ token: data?.auth?.token, expired: data?.auth?.expired });
      navigate("/user");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth({ variables: { email } });
  };

  return (
    <div style={{ width: 320 }}>
      {!loading && error && <ErrorBox message={error.message} />}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 30 }}
      >
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: 300,
            height: 50,
            padding: "0 10px 0 10px",
          }}
        />
        <div>
          <button disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
