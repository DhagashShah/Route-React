import React from "react"
import { Link, Route } from "react-router-dom"
import Product from "../pages/Product"
import ProductDetail from "../pages/ProductDetail"
export default function Header() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Routing-Demo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/welcome">Welcome</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/header/product">Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Route path="/header/product" >
                <Product />
            </Route>
            {/* <Route path="/header/product/:id">
                <ProductDetail />
            </Route> */}
        </div>
    )
}