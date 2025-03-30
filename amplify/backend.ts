import { defineBackend, secret } from "@aws-amplify/backend";
import { auth } from "./auth/resource";

const backend = defineBackend({ auth });

const domainName = "https://auth.hana-counter.net";

backend.addOutput({
  custom: {
    domain: domainName,
  },
});
