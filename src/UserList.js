import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUser(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {listOfUser.map((item) => (
        <Table key={item.id} striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.address.city}</td>
              <td>{item.email}</td>
              <td>
                <a href={item.website} target="_blank">
                  {item.website}
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default UserList;
