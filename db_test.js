import sql from 'k6/x/sql'
import driver from 'k6/x/sql/driver/postgres'

const db = sql.open(driver, "postgres://postgres:1234@127.0.0.1:5432/postgres?sslmode=disable");
export default function () {
   /* db.exec(`
      INSERT INTO users (id ,name,email) VALUES 
       ('1','Peter', 'Pan'),
      ('2','Wendy', 'Darling'),
      ('3','Tinker', 'Bell'),
      ('4','James', 'Hook')
    `); */
    let res = db.query(`SELECT * FROM users WHERE name='Tinker'`)
    console.log(res)
  
    db.close();

  }