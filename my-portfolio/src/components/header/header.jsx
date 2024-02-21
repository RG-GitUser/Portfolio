import React from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, setCurrentPage] = React.useState("About");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }; 

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        rel="noreferrer"
                        target="_blank"
                        href="" //insert github repo here
                    >
                        <span className="content is-large">Your Name</span>
                    </a>
                </div>
            </nav>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* Call the renderPage function passing in the currentPage */}
            <main>
                <div className="container">{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;

