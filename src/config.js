export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-2",
      BUCKET: "practice-notes-upload"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://sldu6ui1y8.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_sCR52nwRJ",
      APP_CLIENT_ID: "6m2vl8jpg59mt4e8otkiuic2s",
      IDENTITY_POOL_ID: "eu-west-2:84af3939-2fce-4a3f-910b-748c879e41b7"
    }
  };