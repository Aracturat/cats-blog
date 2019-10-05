import React from "react"
import { Link } from "gatsby"

export function Layout({ children }) {
  return (
    <div style={{ width: 800, margin: "0 auto" }}>
      <header>
        <ul>
          <li><Link to="/">Главная страница</Link></li>
          <li><Link to="/about">О блоге</Link></li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  )
}
