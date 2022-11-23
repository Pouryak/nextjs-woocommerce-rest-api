import withSession from "../../lib/session";
import authenticate from "../../lib/authenticate";

export default withSession(async (req, res) => {
  try {
    //we check that the user exists on server and store tokens and login data in session
    const { username, password } = await req.body;
    const data = await authenticate(username, password);

    // Temporary wrong user,pass error prevention
    if (data?.errors) {
      return;
    }

    const user = { isLoggedIn: true, ...data };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
