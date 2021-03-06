/**
  * ReferencedAwardsTable.jsx
  * Created by Lizzie Salita 2/19/19
  **/

import React from 'react';
import PropTypes from 'prop-types';

import { referencedAwardsColumns } from 'dataMapping/awardsv2/referencedAwards';

import Pagination from 'components/sharedComponents/Pagination';
import StateLandingTableSorter from 'components/stateLanding/table/StateLandingTableSorter';
import ResultsTableNoResults from 'components/search/table/ResultsTableNoResults';
import ResultsTableLoadingMessage from 'components/search/table/ResultsTableLoadingMessage';
import ResultsTableErrorMessage from 'components/search/table/ResultsTableErrorMessage';

const propTypes = {
    tableType: PropTypes.string,
    results: PropTypes.array,
    counts: PropTypes.object,
    inFlight: PropTypes.bool,
    error: PropTypes.bool,
    page: PropTypes.number,
    limit: PropTypes.number,
    sort: PropTypes.string,
    order: PropTypes.string,
    changePage: PropTypes.func,
    updateSort: PropTypes.func
};

export default class ReferencedAwardsTable extends React.Component {
    generateHeaderCells() {
        return referencedAwardsColumns[this.props.tableType].map((col) => (
            <th
                className="referenced-awards-table__head-cell"
                key={col.field}>
                <div className={col.name === 'obligatedAmount' ? 'header-cell header-cell_right' : 'header-cell'}>
                    <div className="header-cell__text">
                        <div className="header-cell__title">
                            {col.label}
                        </div>
                    </div>
                    <StateLandingTableSorter
                        field={col.field}
                        label={col.label}
                        active={{ field: this.props.sort, direction: this.props.order }}
                        setSort={this.props.updateSort} />
                </div>
            </th>
        ));
    }
    generateRows() {
        return this.props.results.map((row) => {
            const columns = referencedAwardsColumns[this.props.tableType];
            return (
                <tr
                    className="referenced-awards-table__body-row"
                    key={`row-${row.internalId}`}>
                    {columns.map((col) => {
                        let data = row[col.name];
                        if (col.name === 'piid') {
                            data = (<a href={`/#/award_v2/${row.internalId}`}>{row[col.name]}</a>);
                        }
                        if (col.name === 'agency' && row.agencyId) {
                            data = (<a href={`/#/agency/${row.agencyId}`}>{row[col.name]}</a>);
                        }
                        return (
                            <td
                                className={`referenced-awards-table__body-cell ${col.name === 'obligatedAmount' ? 'recipient-list__body-cell_right' : ''}`}
                                key={`${row.internalId}-${col.name}`}>
                                {data || '--'}
                            </td>
                        );
                    })}
                </tr>
            );
        });
    }

    render() {
        let message = null;
        let content = null;

        if (this.props.inFlight) {
            message = (<ResultsTableLoadingMessage />);
            content = null;
        }
        else if (this.props.error) {
            message = (<ResultsTableErrorMessage />);
            content = null;
        }
        else if (this.props.results.length > 0) {
            message = null;
            content = (
                <table className="referenced-awards-table">
                    <thead className="referenced-awards-table__head">
                        <tr className="referenced-awards-table__head-row">
                            {this.generateHeaderCells()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateRows()}
                    </tbody>
                </table>
            );
        }
        else {
            message = (<ResultsTableNoResults />);
            content = null;
        }


        const totalItems = (this.props.counts && this.props.counts[this.props.tableType]) || 0;

        return (
            <div className="referenced-awards-results">
                <Pagination
                    totalItems={totalItems}
                    pageSize={this.props.limit}
                    pageNumber={this.props.page}
                    onChangePage={this.props.changePage} />
                {content}
                <div className="results-table-message-container">
                    {message}
                </div>
                <Pagination
                    totalItems={totalItems}
                    pageSize={this.props.limit}
                    pageNumber={this.props.page}
                    onChangePage={this.props.changePage} />
            </div>
        );
    }
}

ReferencedAwardsTable.propTypes = propTypes;
