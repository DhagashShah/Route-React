import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="my-5">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>Welcome To The World Of React Js</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    To Explore Routing <cite title="Source Title"><Link to="/header">Click Here</Link></cite>
                </figcaption>
            </figure>
        </div>
    )
}

export default Welcome
