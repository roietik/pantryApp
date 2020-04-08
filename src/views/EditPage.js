import React, { Component } from 'react';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import CrudTemplate from 'templates/CrudTemplate';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import Button from 'components/atoms/Button/Button';
import { editItem as editItemAction } from 'actions';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons';

const InputAddItem = styled(Input)`
  margin: 6px 0;
`;

const Back = styled(Link)`
  justify-self: left;
  align-self: center;
  width: 50px;
  height: 50px;
  line-height: 67px;
  font-weight: 300;
  border-radius: 50%;
  margin: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  margin-top: 108px;
`;

const FormWrapper = styled(Form)`
  padding-top: 15px;
  display: grid;
`;

const SubmitWrapper = styled.div`
  text-align: right;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Submit = styled(Button)`
  justify-self: right;
  align-self: center;
  height: 42px;
  width: 246px;
  font-size: 16px;
  outline: none;
`;

const Hiden = styled(InputAddItem)`
  display: none;
`;

class EditPage extends Component {
  state = {
    item: [''],
    limited: '',
    limitedRes: '',
    redirectToPantry: false,
  };

  componentDidMount() {
    const { match, data } = this.props;
    const [pantryRes] = data.filter((item) => Number(item.id) === Number(match.params.id));
    const limited = data.filter((item) => Number(item.quantity) < Number(item.limit) / 2);
    this.setState(
      {
        limited,
      },
      () => {
        const { limited: limit } = this.state;
        const [limitedRes] = limit.splice(match.params.id, 1);
        this.setState({ limitedRes });
      },
    );

    const { limitedRes } = this.state;

    switch (match.path) {
      case routes.pantryEdit:
        this.setState({ item: pantryRes });
        break;
      case routes.shoppingListEdit:
        this.setState({
          item: limitedRes,
        });
        break;
      default:
        break;
    }
  }

  initValues = () => {
    const { item, limitedRes } = this.state;
    const { match } = this.props;

    let res;

    if (match.path === '/shopping-list/edit/:id') {
      res = {
        id: limitedRes.id,
        name: limitedRes.name,
        quantity: Number(limitedRes.quantity),
        category: limitedRes.category,
        limit: Number(limitedRes.limit),
        j: limitedRes.j,
      };
    } else {
      res = {
        id: item.id,
        name: item.name,
        quantity: Number(item.quantity),
        category: item.category,
        limit: Number(item.limit),
        j: item.j,
      };
    }
    return res;
  };

  handleRedirect = () => {
    this.setState({ redirectToPantry: true });
  };

  render() {
    const { editItem } = this.props;
    const { redirectToPantry } = this.state;

    if (redirectToPantry === true) {
      return <Redirect to="/pantry" />;
    }

    return (
      <>
        <CrudTemplate>
          <HeaderTitle>
            <Icon icon={faEdit} size="1x" />
            Edit Item
          </HeaderTitle>
          <Formik
            enableReinitialize
            initialValues={this.initValues()}
            onSubmit={(values, { setSubmitting }) => {
              editItem(values);
              setSubmitting(false);
              this.handleRedirect();
            }}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <FormWrapper>
                <Hiden
                  type="text"
                  name="id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.id || ''}
                  disabled
                  required
                />
                <InputAddItem
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name || ''}
                  required
                />
                <InputAddItem
                  type="text"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity || ''}
                  required
                />
                <InputAddItem
                  type="text"
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category || ''}
                  required
                />
                <InputAddItem
                  type="text"
                  name="limit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.limit || ''}
                  required
                />
                <Select
                  name="j"
                  values={values.j}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <SubmitWrapper>
                  <Back to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                  </Back>
                  <Submit type="submit" secondary={1} disabled={isSubmitting}>
                    Submit
                  </Submit>
                </SubmitWrapper>
              </FormWrapper>
            )}
          </Formik>
        </CrudTemplate>
      </>
    );
  }
}

EditPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ).isRequired,
  editItem: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = (dispatch) => ({
  editItem: (item) => dispatch(editItemAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
