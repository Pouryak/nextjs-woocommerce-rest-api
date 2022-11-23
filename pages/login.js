import { useState } from "react";
import useUser from "../lib/useUser";
import Form from "../src/components/Form";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: "/my-account",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    const body = {
      username,
      password,
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (errors) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(errors.message);
    }
  }

  return (
    <>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default Login;
