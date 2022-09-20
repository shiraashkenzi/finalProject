import { useEffect, useState } from "react";
import {useParams, useHistory} from 'react-router-dom'

import axios from 'axios';



function UserComp(props) {

  const { id } = useParams()

  let history = useHistory();

  const [user, setUser] = useState({ FirstName : '', LastName : '', Age : 0})


  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/persons/" + id);
    setUser(resp.data)
    
  }, [])

  const update = async () =>
  {
    let obj = { fname :user.FirstName,
                lname : user.LastName,
                age : user.Age
              }

    let resp = await axios.put("http://localhost:8000/api/persons/" + id, obj);
    alert( resp.data)
    history.push("/")
  }

  const deleteUser = async () =>
  {
  

    let resp = await axios.delete("http://localhost:8000/api/persons/" + id);
    alert( resp.data)
    history.push("/")
  }

  return (
    <div className="App">
        <h3>User Data</h3>

       
          First Name : <input value={user.FirstName} onChange={e => setUser({...user, FirstName : e.target.value}) } type="text" name="fname" /><br/>
          Last Name : <input value={user.LastName} onChange={e => setUser({...user, LastName : e.target.value}) } type="text" name="lname" /><br/>
          Age : <input value={user.Age} type="text" onChange={e => setUser({...user, Age : e.target.value}) } name="age" /><br/>

          <input type="button" value="Update" onClick={update} />
          <input type="button" value="Delete" onClick={deleteUser}  />


       

    </div>
  );
}

export default UserComp;
