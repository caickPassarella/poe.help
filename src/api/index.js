import { POE_API_URL, POE_HELP_API } from '../constants';

async function makeRequest({url, options}) {
  try {
    const data = await fetch(url, options);
    if (options.method !== 'POST') return data.json();
  } catch(err) {
    console.error(`Failed to make a request to ${options.method} ${url}`, err);
  }
}

function getLeagues() {
  const options = {
    url: `${POE_API_URL}/leagues`,
    options: {
      method: 'GET'
    }
  }

  return makeRequest(options);
}

function getActs() {
  const data = require('../data/acts.json');
  return data.acts;
}

function getAct(act) {
  const data = require('../data/acts.json');
  return data.acts.filter(act => act.id = act)
}

function getUsersByService(service) {
  const options = {
    url: `${POE_HELP_API}/users/${service}`,
    options: {
      method: 'GET'
    }
  }

  return makeRequest(options);
}

function getUserByName(name) {
  const options = {
    url: `${POE_HELP_API}/user/${name}`,
    options: {
      method: 'GET'
    }
  }

  return makeRequest(options);
}

function updateUser(user, payload) {
  const options = {
    url: `${POE_HELP_API}/user/${user}`,
    options: {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    }
  }

  return makeRequest(options);
}

function updateServices(user, payload) {
  console.log(payload);
  const options = {
    url: `${POE_HELP_API}/user/services/${user}`,
    options: {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    }
  }

  return makeRequest(options);
}

function registerUser(user) {
  const options = {
    url: `${POE_HELP_API}/users`,
    options: {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    }
  }

  return makeRequest(options);
}

export {
  getLeagues,
  getActs,
  getAct,
  getUsersByService,
  getUserByName,
  registerUser,
  updateUser,
  updateServices
};