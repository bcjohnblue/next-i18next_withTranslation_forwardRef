import React from 'react';
import { withTranslation } from '../i18n'

const Input = (props, ref) => {
  return (
    <input ref={ref} type="text" />
  )
}

const WrappedInput = withTranslation('common', { withRef: true })(Input);
export default WrappedInput;
