import { useRouter } from "next/router";
import useUser from "../lib/useUser";
import Main from "../src/components/layout/Main";

const MyAccount = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user || user.isLoggedIn === false) {
    router.push("/login");
  }

  return (
    <Main>
      <div className="container mx-auto farsi-text">
        <p>My account</p>
      </div>
    </Main>
  );
};

export default MyAccount;
