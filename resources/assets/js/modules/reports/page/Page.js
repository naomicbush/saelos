import React from 'react'
import PropTypes from 'prop-types'
import List from './panels/list'
import Record from './panels/record'

const Page = (props) => ([
    <List key={0} {...props} />,
    <Record key={1} dispatch={props.dispatch} />
])

Page.propTypes = {
  reports: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isPosting: PropTypes.bool,
  pagination: PropTypes.object.isRequired,
  firstReportId: PropTypes.number.isRequired
};

export default Page;