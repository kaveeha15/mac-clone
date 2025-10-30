const Nav = () => {
    return (
        <div className="navContainer">
            <div className="logo">
                <img src="/logo.svg" alt="appleLogo" />
            </div>
            <div className="linkContainer">
                <ul>
                    {
                        [{ label: "store" },
                        { label: "mac" },
                        { label: "iphone" },
                        { label: "watch" },
                        { label: "vision" },
                        { label: "airpods" }
                        ].map(({label})=>(
                            <li key={label}>{label}</li>
                        ))
                    }
                </ul>
            </div>
                <div className="btn">
                <button><img src="search.svg" alt="search" /></button>
                <button><img src="cart.svg" alt="cart" /></button>
                </div>
        </div>
    );
}

export default Nav;