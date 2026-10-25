
function withAuth(Component) {
    return function (props) {

        let isLoggedin = true;
        if (isLoggedin) {
            return <Component {...props} />
        }

        return <p>Please login</p>
    }
}

export default withAuth