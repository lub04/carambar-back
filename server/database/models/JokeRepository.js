const AbstractRepository = require("./AbstractRepository");

class JokeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "joke" as configuration
    super({ table: "joke" });
  }

  // The C of CRUD - Create operation

  async create(joke) {
    // Execute the SQL INSERT query to add a new joke to the "joke" table
    const [result] = await this.database.query(
      `insert into ${this.table} (question, answer) values (?, ?)`,
      [joke.question, joke.answer]
    );

    // Return the ID of the newly inserted joke
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific joke by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the joke
    return rows;
  }

  async readRandom() {
    const [rows] = await this.database.query(
      `select * from ${this.table} order by rand() limit 1`
    );
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all jokes from the "joke" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of jokes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing joke

  // async update(joke) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an joke by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = JokeRepository;
