import { Link } from "react-router";

function Header() {
    const linkStyle= {
        textDecoration: "none",
    }
    const h3Style= {
        margin: "5px",
        marginBottom: "10px",
        display: 'inline-block'
    }
    return (
        <div>
            <div >
                <h3 style={h3Style}>
                    <Link style={linkStyle}  to="/">Home</Link>
                </h3>
                <h3 style={h3Style}>
                    <Link style={linkStyle} to="/amthal">Amthal</Link>
                </h3>
            </div>
        </div>
    );
}

export default Header;