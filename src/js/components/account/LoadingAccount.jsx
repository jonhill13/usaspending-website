/**
 * LoadingAccount.jsx
 * Created by Kevin Li 3/24/17
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../sharedComponents/header/Header';
import Footer from '../sharedComponents/Footer';
import Error from '../sharedComponents/Error';

const propTypes = {
    account: PropTypes.object
};

export default class LoadingAccount extends React.Component {
    render() {
        return (
            <div className="usa-da-account-page">
                <Header />
                <main
                    id="main-content"
                    className="main-content">
                    <div className="wrapper">
                        <Error
                            title="Loading..."
                            message="" />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

LoadingAccount.propTypes = propTypes;
