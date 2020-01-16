import { profileConstants } from '../_constants';



const updateProfile = (id, username, email, password, firstName, lastName) => ({
    type: profileConstants.UPDATE_PROFILE,
    payload: {id, username, email, password, firstName, lastName},
});

export const profileActions = {
    updateProfile,
};

