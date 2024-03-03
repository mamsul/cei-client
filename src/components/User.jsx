import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { USER_MUTATION } from "../graphql/mutations";
import ErrorBox from "./ErrorBox";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

export default function User() {
  const [user, { loading, error, data }] = useMutation(USER_MUTATION);
  const token = Cookies.get("token");

  const [email] = useState("abc@mail.com");
  const [memberNo, setMemberNo] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (data?.user) {
      setAmount(data?.user?.post?.amount);
      setMemberNo(data?.user?.memberNo);
    }
  }, [data]);

  const handleGetUser = () => {
    user({ variables: { tokenId: token ?? "", email } });
  };

  if (!token || token == undefined) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!loading && error && (
        <ErrorBox message={error?.message ?? "something wrong!"} />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 320,
          gap: 20,
        }}
      >
        <div
          style={{
            height: 40,
            backgroundColor: "#D0D4CA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
            width: "100%",
          }}
        >
          <span>{email}</span>
        </div>

        <input
          type="email"
          placeholder="memberNo"
          readOnly
          required
          value={memberNo}
          style={{
            width: 300,
            height: 50,
            padding: "0 10px 0 10px",
          }}
        />
        <input
          type="email"
          placeholder="amount"
          readOnly
          required
          value={amount ? amount.toFixed(2) : ""}
          style={{
            width: 300,
            height: 50,
            padding: "0 10px 0 10px",
          }}
        />

        <button
          style={{ marginTop: 20 }}
          disabled={loading}
          onClick={() => handleGetUser()}
        >
          {loading ? "Loading..." : "Get User Data"}
        </button>
      </div>
    </>
  );
}
