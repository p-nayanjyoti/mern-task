import React from "react";
import {} from "antd";

const FormElement =({handleSubmit,name, setName}) =>(
    <form onsubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Enter Name" value={name}  
          style={{width:"50%"}}
          autoFocus
          required
          />
          <br/>
          <button className="btn btn-primary mt-1">Submit</button>
          <button className="btn btn-danger mt-1" onClick={()=> setName("")}>Cancel</button>
        </div>
    </form>
);

export default FormElement;