"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify/utils";

import outputs from "@/../amplify_outputs.json";

outputs.auth.oauth.domain = outputs.custom.domain;
Amplify.configure(outputs, { ssr: true });

I18n.putVocabulariesForLanguage("ja", {
  "Sign In with Google": "ログイン",
});

const AuthButton = () => {
  return (
    <div className="w-15">
      <Authenticator socialProviders={["google"]} hideSignUp>
        {({ signOut }) => (
          <div className="flex justify-center">
            <button
              onClick={signOut}
              className="bg-[#cccccc] h-[45px] w-[130px] m-[7px] border-[2px] border-[#666666] rounded-[30px]"
            >
              <div className="text-[#333333] flex justify-center">
                {"ログアウト"}
              </div>
            </button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default AuthButton;
