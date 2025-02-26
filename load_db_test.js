import sql from 'k6/x/sql'
import driver from 'k6/x/sql/driver/postgres'
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const db = sql.open(driver,'postgres://postgres:1234@127.0.0.1:5432/postgres?sslmode=disable')

function generateRandomUser() {
    const username = faker.internet.username(); // Generate random username
    const email = faker.internet.email();       // Generate random email
    const age = faker.number.int({ min: 0, max: 100 }); // Generate random age between 18 and 80
    return { username, email, age };
  }

// export function setup() {
//   db.exec(`
//     CREATE TABLE IF NOT EXISTS loadtest
//       (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) NOT NULL,
//         email VARCHAR(50),
//         age INTEGER
//       );
//   `);
// }

export default function(){
    const { username, email, age } = generateRandomUser();
    const query = `INSERT INTO  loadtest (username, email, age) VALUES ($1, $2, $3);`;
  //const params = [username, email, age];
  const res = db.query(query,username,email,age);
//   console.log(res.status)
//   console.log(res)
}


export function teardown() {
  db.close();
}

   
    
       


