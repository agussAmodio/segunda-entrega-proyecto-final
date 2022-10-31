const config = {
  mongoDB: {
    uri: "mongodb://localhost:27017/ecommerce",
    options: {
      serverSelectionTimeoutMS: 4000,
    },
  },
  fileSystem: {
    path: "./DB",
  },
  firebase: {
    type: "service_account",
    project_id: "proyectocoder-d6028",
    private_key_id: "a2c1747ff51028e0c0498d28041faed2ac6e5d1c",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtEFvDYg0007oc\nf6QHyL3a3DR/M+P0anC7Sp80KfXCOgFufP2/IoGJGgc0SatZIbsnz/OgVFDrgnRz\nwSNps6sjIVBVnA55Nyq9sPKeVjVC2zxos3k9FADI80YFgw9SnBdzrki2EEEAc0Tn\nS9tAXoD2N8Ia7EceMNpwuE06i39Fz5JkTndbiRZShRBNxb5k81cwBGxiaeDvtsw8\nd0a5dngK4f7gZwwZeTfLULDjhXBz+tF6TjJ8lOwzLMiwNTmYkDabgDsm7cC6CpeZ\nFUuAsdOqtFYEjx/gtZm+htocXnUGBafW+0NNtZdCT8+ltHhUfFtiB22qqyuNXpzE\nUNmStIaDAgMBAAECggEAReXiYKAbC7337Ko397GZRRxTgEQRDQKLXbXZbjyHAW8v\n999zw/UNI5sgj6q/EodPEySODXJ+74nmAzFp2yNGLRQIB039uIDrIcY4KzZ4+s8A\np1BvyXIJ7zZHqZ1kmbN7eLjlKIVvXQ4fvWEQ8xBKTw7OtTiAmabG6aB16PKzoqXJ\nmDBaXRJUGG+CNjivhxDSB8422jbAU5seoo0UMy2mHRcp2GuZFOqaEP6rEfy+SBdt\nScCNUG1OaUCRcifzt62VSYV9VvxbI0BKZw5sYoWlLIBEoBkZpJ8J33S7/2ihgNzP\nQ9kbLuLRlSBLaHNW6OgLv9I25GYpnP650p9RJ8eV9QKBgQD5H+8YkfvGtx5my/Qc\n46Pn/SIInJxeQOt6IvPGVp8xIMyE7PeA4REhITJyGY7DmY7udQ2mHSRpITBj5LXW\n8QYAu2rHh8O1UMBUEPzft6aWfhMaEhNPT3zPiO7gD3iCX0LcbBOq0iVum0HvlHpD\nZ7x3wU2W+N1PW9h4HYA+rtWqZQKBgQDzmzbzFnYeMCSUHW7AELCnhzEuSnzojKlB\nsIoVHorReSjunNwqRTp0o4YrVP3mA6/CLRJMW7H/5KvGvDsBwzsozf8XNbaXm6rB\nIebXOnDWD/LLZkuzc5whhxufuQrl5MBXjdkpUVx4wFwXeWuoPWKDrhtlHD0hgxuo\nP0dqxz6qxwKBgQDsZeYvrY96YJfjuhPaOhV19ZmPDHXBZt9MldA3XElRiCsq0+aF\nEI19n4/L//6eE6AzHTYndC3x6MGPeR8oaKxmk3HfBzCqZIcs/rXG4PGeiuI7cf2K\n3AW2tdzfFy8mn5jFq3T6OtG0ZHWsD3v5bH3GMdMbuOng/WmriWsBkExGlQKBgQCQ\nIEbUb3eWyLj7gKZjr/w0QcIRNzTLiV0iZkZr1FQhNuPGuLtxrt+03oKk5HYLPicg\nZPYsgxu+4BXZUMhAdLdtnuLLYpYTAKB3/4zJzeOwYmMtf+pN05qOI5duWlZeSYaa\nxmuzDFX/gx95K/dL5HWCnuHKYniweRdF5ZplTFiBRQKBgDoYX/Y3xPueJgl14Tv2\npdrJOxV0c2eOcQrN0voDUD8ckWTFAMDohmcEPs1ItTU1DphLZM2WEkyuPOVEheQ6\nkKHBOdCQYt+EbqBQM1o26xsCUu31S0FSY0XjaYEZFsMwAdZLNwu6LQKKiFpOOKSN\nSC8MksHloFysOmaMATOvTtW2\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-p3c6t@proyectocoder-d6028.iam.gserviceaccount.com",
    client_id: "114173482343397715651",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p3c6t%40proyectocoder-d6028.iam.gserviceaccount.com",
  },
};

export default config;
