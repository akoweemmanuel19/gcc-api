module.exports = {
    HOST: "postgres://dbp_user:uQYcCYFLaynYhwFsi4c5r3kuJXXsvBPl@dpg-clot1mhoh6hc73bnh040-a.oregon-postgres.render.com",
    USER: "dbp_user",
    PASSWORD: "uQYcCYFLaynYhwFsi4c5r3kuJXXsvBPl",
    DB: "dbp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };