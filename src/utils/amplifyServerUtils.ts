import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { COOKIES_AGE } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
  runtimeOptions: {
    cookies: {
      domain: process.env.AUTH_COOKIE_DOMAIN,
      sameSite: "strict",
      maxAge: COOKIES_AGE,
    },
  },
});
