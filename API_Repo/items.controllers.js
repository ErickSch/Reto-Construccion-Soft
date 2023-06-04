import {connectDB} from "./db.js";


const pool = await connectDB();
export const getPeople = async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM People2;');
    const people = result.recordset;
    res.json(people);
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).json({ message: 'Error fetching people' });
  }
};

export const getOnePeople = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.request().query(`SELECT * FROM People2 WHERE Id = ${id};`);
    const person = result.recordset[0];

    res.status(200).json(person);
  } catch (error) {
    console.error('Error fetching person:', error);
    res.status(500).json({ message: 'Error fetching person' });
  }
};

export const postPeople = async (req, res) => {
  console.log(req.body);
  const data = req.body;

  const name = data.Name;
  const age = data.Age;
  const city = data.City;

  pool.query(`INSERT INTO People2 (Name, Age, City) VALUES ('${name}', ${age}, '${city}');`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  });
};


export const deletePeople = async (req, res) => {
  try {
    const id = req.params.id;

    await pool.query(`DELETE FROM People2 WHERE Id = '${id}'`);

    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ message: 'Error deleting person' });
  }
};

export const updatePeople = async (req, res) => {
  try {
    const id = req.params.id;
    const { Name, Age, City } = req.body;

    await pool.query(
      `UPDATE People2 SET Name='${Name}', Age='${Age}', City='${City}' WHERE Id='${id}'`
    );

    res.status(200).json({ message: 'Person updated successfully' });
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ message: 'Error updating person' });
  }
};

  
