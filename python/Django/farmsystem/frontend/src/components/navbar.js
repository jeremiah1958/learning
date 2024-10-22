import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';


const Navbar = () => {
  const { user, setUser, setIsAuthenticated, isAuthenticated} = useContext(UserContext);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false); // For SignUp modal
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState(''); // For SignUp
  const [signUpPassword, setSignUpPassword] = useState(''); // For SignUp
  const [confirmPassword, setConfirmPassword] = useState(''); // Confirm password


  // Function to handle Sign In button click
  const handleSignInBtn = () => {
    setShowModal(true); // Show the login modal
  };

  // Function to handle Sign Up button click
  const handleSignUpBtn = () => {
    setShowSignUpModal(true); // Show the signup modal
  };

  // Function to handle sign-in from modal
  const handleSignIn = async () => {
    if (email === "" || password === "") {
      alert("All fields are required for login");
      return;
    }

    const result = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });

    const data = await result.json();
    if (result.status == 200) {
      setIsAuthenticated(true);
      setShowModal(false); // Close the modal on successful sign-in
    } else {
      console.log(data)
      alert("Invalid credentials");
    }
  };

  // Function to handle sign-up from modal
  const handleSignUp = async () => {
    if (signUpEmail === "" || signUpPassword === "" || confirmPassword === "") {
      alert("All fields are required for signup");
      return;
    }
    if (signUpPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const result = await fetch("http://127.0.0.1:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: signUpEmail, password: signUpPassword })
    });

    const data = await result.json();
    if (data.status == 201) { // Assuming 201 for successful user creation
      alert("Signup successful! Please log in.");
      setShowSignUpModal(false); // Close modal on successful signup
    } else {
      alert("Signup failed");
    }
  };

  // Function to handle sign out
  const handleSignOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    setEmail(''); // Reset email
    setPassword(''); // Reset password
  };

  return (
    <nav>
      <ul>
        <div>
          <li><Link to="/">Farm Info</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/irrigation">Irrigation</Link></li>
          <li><Link to="/farmers">Farmers</Link></li>
          <li><Link to="/financial-records">Financial Records</Link></li>
          <li><Link to="/harvests">Harvests</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
        </div>
        <div className="navbar__login">
          {
            isAuthenticated ? (
              <button className="navbar__sign-out-cta" onClick={handleSignOut}>
                Sign out
              </button>
            ) : (
              <div className="navbar__cta-div">
                <button className="navbar__sign-in-cta" onClick={handleSignInBtn}>
                  Login
                </button>
                <button className='navbar__sign-up-cta' onClick={handleSignUpBtn}>
                  Sign Up
                </button>
              </div>
            )
          }
        </div>
      </ul>

      {/* Login Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => setShowSignUpModal(false)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        nav {
          background: linear-gradient(120deg, #4CAF50, #8BC34A);
          padding: 1em;
          border-bottom: 3px solid #2E7D32;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-between;
        }
        ul div{
          display:flex;
        }
        .navbar__sign-out-cta {
          background-color: red;
          border-radius:1em;
          padding: .5em 1em;
        }
        .navbar__cta-div{
          display:flex;
          gap:0.5em;
        }
        .navbar__sign-in-cta {
          background-color: #eff1ff;
          padding: .5em 1em;
          border-radius: 1em;
        }
        .navbar__sign-up-cta {
          background-color: #4d4c4c;
          opacity: .6;
          color: white;
          padding: .5em 1em;
          border-radius: 1em;
        }
        li {
          margin-right: 15px;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-family: 'Arial', sans-serif;
        }
        a:hover {
          text-decoration: underline;
        }
        body {
          background-image: url('https://www.transparenttextures.com/patterns/grass.png');
          background-color: #F1F8E9;
        }
        /* Modal styling */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
        .modal-content input {
          display: block;
          margin: 10px 0;
          padding: 10px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .modal-content button {
          padding: 10px 20px;
          margin-top: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .modal-content button:hover {
          background-color: #45a049;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Function to handle Sign In button click
//   const handleSignInBtn = () => {
//     setShowModal(true); // Show the modal when login is clicked
//   };

//   // Function to handle sign-in from modal
//   const handleSignIn = async () => {
//     // Perform authentication logic here (e.g., validate user)
//     // check if the fields have values
//     if(email=="" || password==""){
//       alert("All fields are required")
//       return
//     }

//      var result = await fetch("http://127.0.0.1:8000/api/login/", {
//       method: "POST",
//       headers:{
//         "Content-Type":"application/json",
//       },
//       body: JSON.stringify({email, password})
//     })
//     var data = await result.json()
//     if(data.status == 200){
//       setIsAuthenticated(true)
//     }else{
//       alert("Invalid credentials")
//     }
//     // if (email === "test@example.com" && password === "password") { // Example credentials
//     //   setIsAuthenticated(true);
//     //   setShowModal(false); // Close modal on successful sign-in
//     // } else {
//     //   alert("Invalid credentials");
//     // }
//   };
 
//   // Function to handle sign out
//   const handleSignOut = () => {
//     setIsAuthenticated(false);
//     setEmail(''); // Reset email
//     setPassword(''); // Reset password
//   };

//   return (
//     <nav>
//       <ul>
//         <div>
//           <li><Link to="/">Farm Info</Link></li>
//           <li><Link to="/plants">Plants</Link></li>
//           <li><Link to="/irrigation">Irrigation</Link></li>
//           <li><Link to="/farmers">Farmers</Link></li>
//           <li><Link to="/financial-records">Financial Records</Link></li>
//           <li><Link to="/harvests">Harvests</Link></li>
//           <li><Link to="/medicines">Medicines</Link></li>
//         </div>
//         <div className="navbar__login">
//           {
//             isAuthenticated ? (
//               <button className="navbar__sign-out-cta" onClick={handleSignOut}>
//                 Sign out
//               </button>
//             ) : (
//               <div className ="navbar__cta-div">
//                 <button className="navbar__sign-in-cta" onClick={handleSignInBtn}>
//                   Login
//                 </button>
//                 <button className='navbar__sign-up-cta' onClick={handleSignUpBtn}>
//                   sign up
//                 </button>
//               </div>
//             )
//           }
//         </div>
//       </ul>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Login</h2>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleSignIn}>Sign In</button>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         nav {
//           background: linear-gradient(120deg, #4CAF50, #8BC34A); /* Green field colors */
//           padding: 1em;
//           border-bottom: 3px solid #2E7D32; /* Darker green for a farming feel */
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }
//         ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           justify-content: space-between;
//         }
//         ul div{
//           display:flex;
//         }
//         .navbar__sign-out-cta {
//           background-color: red;
//           padding: .5em 1em;
//         }
//         .navbar__cta-div{
//           display:flex;
//           gap:0.5em;
//         }
//         .navbar__sign-in-cta {
//           background-color: #eff1ff;
//           padding: .5em 1em;
//           border-radius: 1em;
//         }
//         .navbar__sign-up-cta{
//           background-color: #4d4c4c;
//           opacity:.6;
//           color:white;
//           padding: .5em 1em;
//           border-radius: 1em;
//         }

//         li {
//           margin-right: 15px;
//         }
//         a {
//           color: white;
//           text-decoration: none;
//           font-weight: bold;
//           font-family: 'Arial', sans-serif;
//         }
//         a:hover {
//           text-decoration: underline;
//         }
//         body {
//           background-image: url('https://www.transparenttextures.com/patterns/grass.png');
//           background-color: #F1F8E9;
//         }
//         /* Modal styling */
//         .modal {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .modal-content {
//           background-color: white;
//           padding: 20px;
//           border-radius: 5px;
//           text-align: center;
//         }
//         .modal-content input {
//           display: block;
//           margin: 10px 0;
//           padding: 10px;
//           width: 100%;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//         }
//         .modal-content button {
//           padding: 10px 20px;
//           margin-top: 10px;
//           background-color: #4CAF50;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .modal-content button:hover {
//           background-color: #45a049;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;




