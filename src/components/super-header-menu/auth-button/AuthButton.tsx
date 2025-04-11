"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { AuthEventData } from "@aws-amplify/ui";
import { I18n } from "aws-amplify/utils";
import CircularProgress from "@mui/material/CircularProgress";
import { useIsLogoutState, useSetLogout } from "@/hooks/useLogout";

import outputs from "@/../amplify_outputs.json";

if (process.env.AUTH_OAUTH_DOMAIN) {
  outputs.auth.oauth.domain = process.env.AUTH_OAUTH_DOMAIN;
}
Amplify.configure(outputs, { ssr: true });

I18n.putVocabulariesForLanguage("ja", {
  "Sign In with Google": "ログイン",
});

const AuthButton = () => {
  const logoutState = useIsLogoutState();
  const logout: () => void = useSetLogout();

  const handleSignOut = (
    signOut: ((data?: AuthEventData) => void) | undefined
  ) => {
    logout();

    const signOutGoogle = signOut;
    if (signOutGoogle != undefined) {
      signOutGoogle();
    }
  };

  return (
    <>
      {logoutState ? (
        <div className="h-[45px] m-[10px] flex justify-center">
          <CircularProgress color="secondary" size={30} />
        </div>
      ) : (
        <Authenticator socialProviders={["google"]} hideSignUp>
          {({ signOut }) => (
            <div className="flex justify-center">
              <button
                onClick={() => handleSignOut(signOut)}
                className="bg-[#cccccc] h-[45px] w-[140px] m-[10px] border-[2px] border-[#666666] rounded-[30px]"
              >
                <div className="text-[16px] text-[#333333] p-[2px] flex justify-center">
                  {"ログアウト"}
                </div>
              </button>
            </div>
          )}
        </Authenticator>
      )}
    </>
  );
};

export default AuthButton;
