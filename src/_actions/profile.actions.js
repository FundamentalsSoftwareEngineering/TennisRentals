import { profileConstants } from '../_constants';



const updateProfile = (username, email, password, firstName, lastName) => ({
    type: profileConstants.UPDATE_PROFILE,
    payload: {username, email, password, firstName, lastName},
});

export const profileActions = {
    updateProfile,
};

