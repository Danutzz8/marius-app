import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import  { SingInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
	<SingInAndSignUpContainer>
		<SignIn />
		<SignUp />
	</SingInAndSignUpContainer>
);

export default SignInAndSignUpPage;
