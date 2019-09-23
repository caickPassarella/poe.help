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

export default { getLeagues, getActs, getAct, getUsersByService, registerUser };