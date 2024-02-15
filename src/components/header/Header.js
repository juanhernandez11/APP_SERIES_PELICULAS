import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://cdn.milenio.com/uploads/media/2021/10/16/escudo-america-png.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Inicio</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Peliculas</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Series</span></Link>
            </div>
        </div>
    )
}

export default Header