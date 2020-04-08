import React from 'react';
import { connect } from 'react-redux';
import MainList from 'components/molecules/MainList';
import PropTypes from 'prop-types';

const Pantry = ({ data }) => {
  return (
    <>
      <MainList data={data} page="pantry" />
    </>
  );
};

const mapStateToProps = ({ data }) => ({ data });

Pantry.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Pantry);
