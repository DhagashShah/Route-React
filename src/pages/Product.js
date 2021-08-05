import React from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

const Product = () => {
    return (
        <div className="container my-3">
            <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Iphone</div>
                        <Link to="/header/product/1">Click Here</Link>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Samsung</div>
                        <Link to="/header/product/2">Click Here</Link>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">One Plus</div>
                        <Link to="/header/product/3">Click Here</Link>
                    </div>
                </li>
            </ol>
            <Route path="/header/product/1">
                <h3 className="my-3">Iphone Works...</h3>
            </Route>

            <Route path="/header/product/2">
                <h3 className="my-3">Samsung Works...</h3>
            </Route>

            <Route path="/header/product/3">
                <h3 className="my-3">One Plus Works...</h3>
            </Route>
        </div>
    )
}

export default Product
