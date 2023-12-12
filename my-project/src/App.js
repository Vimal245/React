import React from 'react';
import './App.css';

export default function App() {

  return (
    <div class="hello">

      <div class="top">
        <header>
          <center><h1>User Details</h1></center>
          <hr />
        </header>
      </div>
      <form class="form" >
        <label For="fname">First name: </label>
        <input type="text" id="fname" name="fname" required /><br />

        <label For="lname">Last name: </label>
        <input type="text" id="lname" name="lname" required /><br />

        <label For="dob">Date of Birth: </label>
        <input type="date" id="dob" name="dob" required /><br />

        <label For="Gender" required>Gender: </label>
        <select name="Gender" id="Gender" required>
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select><br /><br />

        <label For="phno">Phone number: </label>
        <input type="tel" id="phno" name="phno" required /><br />

        <label For="email">Email: </label>
        <input type="email" id="email" name="email" required /><br />


        <label For="clg">College : </label>
        <input type="text" id="clg" name="clg" required /><br />

        <label For="city" required>City: </label>
        <select name="city" id="city" required>
          <option value="Select">Select</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Trichy">Trichy</option>
          <option value="Karur">Karur</option>
          <option value="Chennai">Chennai</option>
        </select><br /><br />
        
        <label For="State" required>State: </label>
        <select name="State" id="State" required>
          <option value="Select">Select</option>
          <option value="TamilNadu">TamilNadu</option>
          <option value="kerala">Keralam</option>
          <option value="Karnataka">Karnataka</option>
          <option value="AndhraPradesh">AndhraPradesh</option>
        </select><br /><br />

        <label for="img1">Image :</label>
        <input type="file" id="img1" name="img1" required/><br />

        <button type="submit" onClick={window.alert("FORM UPDATED")}>Submit Form</button>

      </form>
    </div>
  );
}