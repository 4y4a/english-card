export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const logIn = () => ({
    type: SIGN_IN
});

export const logOut = () => ({
    type: SIGN_OUT
});