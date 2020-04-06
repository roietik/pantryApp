import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainList from 'components/molecules/MainList';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  state = {
    data: '',
    limits: [],
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data }, () => {
      const { data: dataState } = this.state;
      const limits = dataState.filter((item) => item.quantity < item.limit / 2);
      this.setState({ limits });
    });
  }

  render() {
    const { limits } = this.state;
    return <MainList data={limits} page="shopping-list" />;
  }
}

const mapStateToProps = ({ data }) => ({ data });

ShoppingList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(ShoppingList);
