import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "../lib/useUser";

const Checkout = () => {
  const { user } = useUser({
    redirectTo: "/checkout",
    redirectIfFound: true,
  });
  const router = useRouter();

  useEffect(() => {
    if (!user || user.isLoggedIn === false) {
      router.push("/login");
    }
  }, [user]);

  return <p>checkout page</p>;
};

export default Checkout;
