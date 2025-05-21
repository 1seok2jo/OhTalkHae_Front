import { Outlet, Link } from 'react-router-dom'
function MainLayout() {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout
