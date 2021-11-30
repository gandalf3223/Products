import http from 'k6/http';
import { sleep } from 'k6';

// export default function () {
//   http.get('https://test.k6.io');
//   sleep(1);
// }


/*
"k6 run --vus 1000 --iterations 10000 script.js"
This command would create 1000 concurrent sessions (virtual users),
and would run this single requests 10 times for each virtual user, hence 10,000 iterations.
*/


// export const options = {
//   stages: [
//     { duration: '3m', target: 100 }, // stay at 100 users for 10 minutes
//   ],
// };

export const options = {
vus: 1000, // stay at 100 users for 10 minutes
duration: '5m',

};

//Load test for '/Product/:productID'
export default function() {
  // const url = 'http://localhost:3000/products/1/styles'
  // const url = 'http://localhost:3000/products/1/'
  // const url = 'http://localhost:3000/products/'
  const url = 'http://localhost:3000/products/1/related'

  const payload = {};
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  http.get(url, payload, params);
};