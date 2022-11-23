import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "../lib/useUser";
import Main from "../src/components/layout/Main";

const MyAccount = () => {
  const { user } = useUser({
    redirectTo: "/my-account",
    redirectIfFound: true,
  });
  const router = useRouter();

  useEffect(() => {
    if (!user || user.isLoggedIn === false) {
      router.push("/login");
    }
  }, [user]);

  return (
    <Main>
      <div className="container mx-auto farsi-text">
        <p>My account</p>
      </div>
    </Main>
  );
};

export default MyAccount;
