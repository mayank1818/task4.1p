import React from 'react';
import {Button, Header, Search} from "semantic-ui-react";
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <Header as='h2' block size={'huge'} className={'signup'}>
                <Header as={'h1'}>
                    SIGN UP FOR NEWS LETTER
                    </Header>
                <Search placeholder='Search...' />
                <Button primary>
                    Subscribe
                </Button>
            </Header>
        </div>
    );
};

export default SignUp;