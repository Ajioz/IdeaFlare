const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mongodb://127.0.0.1:",
        mongodb_password: "27017",
        mongodb_cluster: "",
        mongodb_database: "idealflare",
      },
    };
  }
  return {
    env: {
      mongodb_username: "mongodb+srv://ajioz",
      mongodb_password: "Onoriode1@",
      mongodb_cluster: "cluster0.wu3eq.mongodb.net",
      mongodb_database: "idealflare?retryWrites=true&w=majority",
    },
  };
};

// mongodb://127.0.0.1:27017/idealflare
// mongodb+srv://ajioz:Onoriode1@cluster0.wu3eq.mongodb.net/jobsAPI?retryWrites=true&w=majority
