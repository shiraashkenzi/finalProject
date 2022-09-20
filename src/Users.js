import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';



function UsersComp() {

  const [users, setUsers] = useState([])


  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/persons");
    setUsers(resp.data)
  }, [])

  return (
    <div className="App">
        <h3>Users List</h3>

        <table border="1">
          <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>

          {
            users.map(item =>
              {
                return <tr key={item._id}>
                  <td><Link to={"/user/" + item._id}> {item.FirstName}</Link></td>
                  <td>{item.LastName}</td>
                  <td>{item.Age}</td>
                </tr>
              })
          }

        </table>

    </div>
  );
}

export default UsersComp;
