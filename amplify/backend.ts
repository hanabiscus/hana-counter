import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend = defineBackend({ auth, data });

const domainName = "auth.hana-counter.net";

backend.addOutput({
  custom: {
    domain: domainName,
  },
});
