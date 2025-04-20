import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Balance: a
    .model({
      recordId: a.id().required(),
      income: a.integer().required(),
      expenditure: a.integer().required(),
      balanceDate: a.string().required(),
      balanceMonth: a.string().required(),
      balanceYear: a.string().required(),
      recordOwner: a.string().required(),
    })
    .identifier(["recordId"])
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema: schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
