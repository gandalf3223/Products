import http from 'k6/http';
import { sleep } from 'k6';


/*
"k6 run --vus 1000 --iterations 10000 script.js"
This command would create 1000 concurrent sessions (virtual users),
and would run this single requests 10 times for each virtual user, hence 10,000 iterations.
*/


export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000, // x RPS, since timeUnit is the default 1s
      duration: '30s',
      preAllocatedVUs: 1000,
      maxVUs: 1000,
    },
  },
};


//Load test
export default function() {
  // const url = 'http://localhost:3000/products/1/styles'
  const url = 'http://localhost:3000/products/1/'
  // const url = 'http://localhost:3000/products/'
  // const url = 'http://localhost:3000/products/1/related'

  const payload = {};
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  http.get(url, payload, params);
};