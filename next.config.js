const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ajioz",
        mongodb_password: "Onorxxxiode1",
        mongodb_cluster: "xxx",
        mongodb_database: "idealflare-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "ajxxxioz",
      mongodb_password: "Onorxxxiode1",
      mongodb_cluster: "xxx",
      mongodb_database: "idealflare",
    },
  };
};

// mongodb://127.0.0.1:27017/idealflare
// mongodb+srv://ajioz:Onoriode1@cluster0.wu3eq.mongodb.net/jobsAPI?retryWrites=true&w=majority
