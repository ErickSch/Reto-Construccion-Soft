import { json } from "express";
import Item from "./item.model.js";
import sql from "mssql";
import {connectDB} from "./db.js";


// export const getItems = (req, res) => res.send("GET items");

const pool = await connectDB();

export const getItems = async (req, res) => {
  const result = await pool.request().query("SELECT * FROM Products;");
  res.json(result.recordset)
  // console.log(result.recordset);
  console.log(result.recordset[0]);
  // pool.query("SELECT * FROM products;", (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
};

// export const getInfoEmpleados = async (req, res) => {
//   const result = await pool.request().query("SELECT * FROM Employees;");
//   res.json(result.recordset)
//   console.log(result.recordset[0]);

// }

// { ID: 1, Name: 'John Smith', Age: 30, City: 'New York' },
export const getPeople = async (req, res) => {
  
  const result = await pool.request().query("SELECT * FROM People2;");
  res.json(result.recordset)
  // console.log(result.recordset);

}

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
  
export const getItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.send(item);
};

export const postItem = async (req, res) => {
    const newItem = new Item(req.body);
    // // console.log(json.toString(req.body));
    // // res.send(req.body);
    // await newItem.save();
    // res.send(newItem); 

    // const newPrueba = new Prueba(req.body);
    // console.log(json.toString(req.body));
    // res.send(req.body);
    console.log(newItem);
    console.log(newItem.palabra);
    console.log(newItem.numero);

    pool.query(`INSERT INTO prueba VALUES (${newItem.numero}, '${newItem.palabra}');`, (error, results) => {
    // pool.query('INSERT INTO prueba VALUES (5, Klauss)', (error, results) => {
      if (error) {
        throw error
      }
      // res.status(200).json(results.rows)
    });

    return res.redirect('http://127.0.0.1:5500/front/index.html'); 
    // await newItem.save();
    // res.send(newItem);
};

export const putItems = async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    });
    res.send(item);
};

export const deleteItems = async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.send(item);
};