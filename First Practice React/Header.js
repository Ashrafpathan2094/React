import React from 'react';

export default function Header() {
    return (
        <header class="header">
            <nav class="navbar">
                <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
                class="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}