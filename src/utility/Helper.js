
export function authHeader() {
    let userStr = localStorage.getItem('user');
    if (userStr) {
        try {
            let user = JSON.parse(userStr);
            if (user && user.token) {
                return { 'Authorization': 'Bearer ' + user.token };
            }
        }
        catch (ex) { };
    }

    return null;
}