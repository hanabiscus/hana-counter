import { defineAuth, secret } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        scopes: ["email"],
        attributeMapping: {
          email: "email",
        },
      },
      callbackUrls: ["https://hana-counter.net", "https://localhost:3000"],
      logoutUrls: ["https://hana-counter.net", "https://localhost:3000"],
    },
  },
});
