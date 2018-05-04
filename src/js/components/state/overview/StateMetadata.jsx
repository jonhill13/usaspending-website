/**
 * StateMetadata.jsx
 * Created by Lizzie Salita 5/3/18
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    stateProfile: PropTypes.object
};

export default class StateMetadata extends React.PureComponent {
    render() {
        return (
            <div className="state-overview__metadata">
                <div className="state-overview__totals">
                    <h4 className="state-overview__heading">
                        Total Awarded Amount
                    </h4>
                    <div className="state-overview__total-amount">
                        {this.props.stateProfile.totalPrimeAmount}
                    </div>
                    <div>
                        from <span className="state-overview__total">{this.props.stateProfile.totalPrimeAwards}</span> awards
                    </div>
                    <div className="state-overview__subawards">
                        of this, <span className="state-overview__total">{this.props.stateProfile.totalSubAmount}</span>&nbsp;
                        was distributed as <span className="state-overview__total">{this.props.stateProfile.totalSubAwards}</span> sub-awards
                    </div>
                </div>
                <div className="state-overview__details">
                    <h4 className="state-overview__heading">
                        Details
                    </h4>
                    <table className="state-overview__table">
                        <tbody>
                            <tr>
                                <td>
                                    Population
                                </td>
                                <td>
                                    {this.props.stateProfile.population}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Awarded Amount Per Capita
                                </td>
                                <td>
                                    {this.props.stateProfile.awardAmountPerCapita}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Median Household Income
                                </td>
                                <td>
                                    {this.props.stateProfile.medianHouseholdIncome}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

StateMetadata.propTypes = propTypes;