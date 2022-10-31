//import React, { Component } from "react";

//stateless functional component

const NavBar = ({totalCounters}) =>{
    console.log('NavBar-Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </a>
            </div>
        </nav>

    );
}


export default NavBar;

//instead of vv. using classes is fine, but because there are only properties being read and and it is "just"
//a stateless functional component, you can move it into an arrow function like above as well
//in the sfc you'll need to pass "props" as a parameter and remove "this."
//but lifecycle hooks won't work in stateless components

// class NavBar extends Component {

//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                     </a>
//                 </div>
//             </nav>

//         );
//     }
// }

// export default NavBar;