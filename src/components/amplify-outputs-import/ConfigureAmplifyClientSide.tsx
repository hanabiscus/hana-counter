import { Amplify } from "aws-amplify";

import outputs from "@/../amplify_outputs.json";

if (process.env.NEXT_PUBLIC_AUTH_OAUTH_DOMAIN) {
  outputs.auth.oauth.domain = process.env.NEXT_PUBLIC_AUTH_OAUTH_DOMAIN;
}
Amplify.configure(outputs, { ssr: true });

const ConfigureAmplifyClientSide = () => {
  return null;
};

export default ConfigureAmplifyClientSide;
