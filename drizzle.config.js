/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Database_owner:OAMDiabmU54G@ep-yellow-sun-a50hy8ef.us-east-2.aws.neon.tech/Database?sslmode=require',
    }
  };