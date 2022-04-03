import React from 'react';
import {useStateContext} from "../state/StateContext";

function Profile(props) {
    const {state:{user,boards}} = useStateContext()
    return (
        <div>
            {user?.userName}
            Boards:{boards?.length}
        </div>
    );
}

export default Profile;