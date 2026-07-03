function Navbar({ logout }) {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                background: "#2563eb",
                color: "white"
            }}
        >

            <h2>Task Management</h2>

            <button
                onClick={logout}
                style={{
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>

        </div>

    );

}

export default Navbar;