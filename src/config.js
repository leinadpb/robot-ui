const git = {
  version: process.env.GIT_VERSION,
  commitHash: process.env.GIT_COMMITHASH,
  branch: process.env.GIT_BRANCH,
};

const local = {
  apiGateway: {
    URL: 'http://localhost:9801',
  },
  git,
};

const heroku = {
  apiGateway: {
    URL: 'https://robi-api.herokuapp.com',
  },
  git,
};

const config = process.env.REACT_APP_STAGE === 'heroku' ? heroku : local;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
