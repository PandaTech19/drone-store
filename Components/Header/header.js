import Link from "next/link";
import { Navbar, Nav } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function header() {

    return (

        <div className="Navbar-container">

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand><Link passHref href="/">
                    <img className="log" src="/final.jpg" alt="logo" />
                    </Link></Navbar.Brand>

                <Navbar.Toggle className="toggle-btn" aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className="collapse" id="responsive-navbar-nav">

                    <Nav className="Navbar">

                        <Link passHref href="/Page1/Top5"><nav className="b">Products</nav></Link>

                        <Link passHref href="/Page2/Info"><nav className="b">Info</nav></Link>

                        <Link passHref href="/Page3/Benefits"><nav className="b">Benefits</nav></Link>

                        <Link passHref href="/Page4/Store"><nav className="b">Store</nav></Link>

                        <Link passHref href="/Page5/contacts"><nav className="b">Contacts</nav></Link>


                    </Nav>

                    <div className="search-box">

                        <button type="submit" className="btn-search">

                            <BsSearch className="search-icon" />

                        </button>

                        {/*<Link passHref href='/Results/Respage' as={`/Results/${search}`}>



                        </Link>*/}

                        <input /*value={search}  onChange={(e) => setsearch(e.target.value) */ type="text" className="input-search" placeholder="Type to Search..." required / >

                    </div>




                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}