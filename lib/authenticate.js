import fetchJson from "./fetchJson";
export default async function authentication(username, password) {
  const query = `
  mutation LOGIN($input: LoginInput!) {
    login(input: $input) {
      authToken
      refreshToken
      user {
        email
        firstName
        lastName
        username
        avatar {
          url
        }
        databaseId
        id
        name
        registeredDate
      }
    }
  }
`;
  const variables = {
    input: {
      username,
      password,
    },
  };

  // Uncomment below lines for your real world implementation
  const data = await fetchJson(process.env.GRAPHQL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return data;
}
