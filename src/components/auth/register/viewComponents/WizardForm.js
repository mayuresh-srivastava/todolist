import React from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

const WizardForm = (props) => {
    const { page, nextPage, previousPage, onSubmit } = props.wizardFormProps

    return (
      <>
        { page === 1 && <WizardFormFirstPage onSubmit={nextPage} /> }
        { page === 2 && <WizardFormSecondPage previousPage={previousPage} onSubmit={nextPage} /> }
        { page === 3 && <WizardFormThirdPage previousPage={previousPage} onSubmit={onSubmit} /> }
      </>
    )
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WizardForm;
