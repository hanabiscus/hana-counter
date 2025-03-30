"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify/utils";
import { Box, ThemeProvider } from "@mui/material";
import { authButtonBoxTheme, authButtonTheme } from "@/const/constants";

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
          <div className="p-[5px]">
            <ThemeProvider theme={authButtonBoxTheme}>
              <Box onClick={signOut} sx={authButtonTheme}>
                <div className="text-[#333333] flex justify-center">
                  {"ログアウト"}
                </div>
              </Box>
            </ThemeProvider>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default AuthButton;
