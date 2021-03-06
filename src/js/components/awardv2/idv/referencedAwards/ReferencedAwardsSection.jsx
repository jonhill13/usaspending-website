/**
  * ReferencedAwardsSection.jsx
  * Created by Lizzie Salita 2/14/19
  **/

import React from 'react';
import PropTypes from 'prop-types';

import ResultsTableTabs from 'components/search/table/ResultsTableTabs';
import ReferencedAwardsTable from './ReferencedAwardsTable';

const propTypes = {
    results: PropTypes.array,
    counts: PropTypes.object,
    inFlight: PropTypes.bool,
    error: PropTypes.bool,
    page: PropTypes.number,
    limit: PropTypes.number,
    sort: PropTypes.string,
    order: PropTypes.string,
    tableType: PropTypes.string,
    tableTypes: PropTypes.array,
    switchTab: PropTypes.func,
    changePage: PropTypes.func,
    updateSort: PropTypes.func
};

export default class ReferencedAwardsSection extends React.Component {
    render() {
        let tabs = null;
        if (this.props.counts) {
            tabs = (
                <ResultsTableTabs
                    active={this.props.tableType}
                    switchTab={this.props.switchTab}
                    types={this.props.tableTypes}
                    counts={this.props.counts} />
            );
        }
        return (
            <div id="idv-referenced-awards" className="referenced-awards">
                <div className="award-viz">
                    <div className="award-viz__heading">
                        <div className="award-viz__icon">
                            <img src="img/icon-hierarchy.png" alt="pedigree chart" />
                        </div>
                        <h3 className="award-viz__title">Awards that Reference this IDV</h3>
                    </div>
                    <hr />
                    <div className="referenced-awards__content">
                        {tabs}
                        <ReferencedAwardsTable
                            {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

ReferencedAwardsSection.propTypes = propTypes;
