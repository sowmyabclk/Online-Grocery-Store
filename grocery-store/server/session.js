const { v4: uuidv4 } = require('uuid');

const sessions = {};

const uuid = () => {
  const uId = uuidv4();
  return uId;
};

const addSession = ( sessionData ) => {
  const id = uuid();
  sessions[id] = { ...sessionData, id };
  return sessions[id];
};

const deleteSession = (id) => {
  const session = sessions[id];
  delete sessions[id];
  return session;
};

const validateSession = (sid) => {
  if(!sid || !sessions[sid] ) {
    return false;
  }
  return true;
}

const canReadUser = ({ sid, username }) => {
  if(!sid || !username || !sessions[sid].username === username) {
    return false;
  }
  return true;
};

const getSession = (sid) => {
  return sessions[sid];
};


const session = {
  sessions,
  addSession,
  deleteSession,
  validateSession,
  canReadUser,
  getSession,
  getSession
};

module.exports = session;