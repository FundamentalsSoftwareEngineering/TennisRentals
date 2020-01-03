import { push } from 'react-router-redux'

export const navigateToHomeAction = () => {
    console.log('intra', push('/'));
    push('/');
};