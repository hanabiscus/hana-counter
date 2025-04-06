import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Balance: a
    .model({
      recordId: a.id().required(),
      expenditure: a.integer().required(),
      income: a.integer().required(),
      date: a.string().required(),
      recordOwner: a.string().required(),
    })
    .identifier(["recordId"])
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
