import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownControl extends Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  render() {
    const { name, prettyName, options } = this.props;
    const selectId = `${name}-select`;
    const controlClass = `${name}-control`;
    const dropdownId = `${name}-dropdown`;
    return (
      <div className={controlClass}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id={dropdownId}>
            {prettyName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              options.map((index, value) => (
                <Dropdown.Item href="#">{value}</Dropdown.Item>
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

DropdownControl.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  prettyName: PropTypes.string.isRequired,
};

export default DropdownControl;
