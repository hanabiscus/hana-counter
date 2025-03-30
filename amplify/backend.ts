import { defineBackend, secret } from "@aws-amplify/backend";
import { auth } from "./auth/resource";

const backend = defineBackend({ auth });

const domainName = "auth.hana-counter.net";

backend.addOutput({
  custom: {
    domain: domainName,
  },
});
