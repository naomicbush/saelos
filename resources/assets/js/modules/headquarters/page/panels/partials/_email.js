import React from 'react'
import PropTypes from 'prop-types'
import * as MDIcons from 'react-icons/lib/md'
import _ from 'lodash'

class Email extends React.Component {
  render() {
    const { quota, total } = this.props
    const percent = _.floor((total/quota)*100)

    return (
      <div className="card">
        <div className="card-header" id="headingEmail">
          <h6 className="mb-0" data-toggle="collapse" data-target="#collapseEmail" aria-expanded="false" aria-controls="collapseEmail">
            <MDIcons.MdKeyboardArrowDown /> Email <span className="text-muted font-weight-normal">({percent}%)</span>
          </h6>
        </div>

        <div id="collapseEmail" className="collapse mh-200" aria-labelledby="headingEmail">
          <div className="card-body border-bottom">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </div>
        </div>
      </div>
    )
  }
}

Email.propTypes = {
  quota: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default Email