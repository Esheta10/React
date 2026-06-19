import {UserMenu} from './UserMenu'

export const NavigationBar = ({user}) => {
    return (
        <div>
            <h3>Navigation Bar</h3>
            <UserMenu user={user} />
        </div>
    );
}