import { useState } from "react";

export default function E1(){
    const [employees,setEmployees]=useState([]);
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [role,setRole] = useState("");
    const [editId,setEditId] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        if(editId){
            const updateEmployee = employees.map(employee => employee.id === editId ? {...employee,fname,lname,title,description,role} : employee);
            setEmployees(updateEmployee);
            setEditId(null);
        }else{
            const newEmployee = {
                id: Date.now(), fname,lname,title,description,role
            }
            const updateEmployee = [...employees,newEmployee];
            setEmployees(updateEmployee);
        }
        setFname("");
        setLname("");
        setTitle("");
        setDescription("");
        setRole("");
    }

    function handleEdit(employee){
        setEditId(employee.id);
        setFname(employee.fname);
        setLname(employee.lname);
        setTitle(employee.title);
        setDescription(employee.description);
        setRole(employee.role);
    }

    function handleDelete(id){
        const updateEmployee = employees.filter(employee => employee.id !== id);
        setEmployees(updateEmployee);
    }
    return(
        <>
        <center>
        <h1>EMPLOYEE MANAGEMENT PROJECT</h1>
       
        <form onSubmit={handleSubmit}>
            First Name: <input type="text"
            value={fname}
            required
            onChange={(e)=>setFname(e.target.value)}/><br/><br/>
            
            Last Name: <input type="text"
            value={lname}
            required
            onChange={(e)=>setLname(e.target.value)}/><br/><br/>

            Job Title: <input type="text"
            value={title}
            required
            onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
            
            Job Description: <input type="text"
            value={description}
            required
            onChange={(e)=>setDescription(e.target.value)}/><br/><br/>

            Job Role: <input type="text"
            value={role}
            required
            onChange={(e)=>setRole(e.target.value)}/><br/><br/>

            <button type="submit">{editId ? "Update Employee" : "Add Employee"}</button>
        </form>
        
        <br/>
        <br/>
        <table border="1">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job Title</th>
                <th>Job Description</th>
                <th>Job Role</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                    <tr key={employee.id}>
                        <td>{employee.fname}</td>
                        <td>{employee.lname}</td>
                        <td>{employee.title}</td>
                        <td>{employee.description}</td>
                        <td>{employee.role}</td>
                        <td><button onClick={()=>handleEdit(employee)}>Edit</button>
                        <button onClick={()=>handleDelete(employee.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </center>
        </>
    )
}