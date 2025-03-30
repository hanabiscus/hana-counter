import { defineBackend, secret } from "@aws-amplify/backend";
import { auth } from "./auth/resource";

const backend = defineBackend({ auth });

const domainName = secret("COGNITO_CUSTOM_DOMAIN");

backend.addOutput({
  custom: {
    domain: domainName,
  },
});
