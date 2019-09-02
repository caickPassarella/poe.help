import { POE_API_URL } from '../constants';


  function makeRequest({url, options}) {
    return fetch(url, options)
      .then(data => data.json())
      .catch(err => console.error(`Failed to make a request to ${options.method} ${url}`, err));
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
    return data.acts.filter(act => act.id = act);
  }

export default { getLeagues, getActs, getAct };