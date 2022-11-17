
function Header() {
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

function MainContent() {
    return (
        <div>
            <h1>Reasons I Love React</h1>
            <ul>
                <li>It is a Very Hireabele Skill</li>
                <li>It is Free to Use</li>
                <li>It is Constantly Being Upgraded</li>
            </ul>

        </div>

    )
}


function Footer() {
    return (
        <footer>
            &copy; Ashraf Khan Copyright
        </footer>
    )
}


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));







