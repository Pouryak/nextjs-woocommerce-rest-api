import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";
import Main from "../src/components/layout/Main";

const MyAccount = () => {
  const { isSignedIn, singOut } = useAuth();
  const router = useRouter();

  return (
    <Main>
      <div className="container mx-auto farsi-text">
        {isSignedIn ? <p>My account</p> : router.push("/login")}
      </div>
    </Main>
  );
};

export default MyAccount;
