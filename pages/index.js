import React from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Input from '../components/Input'
const Homepage = ({ t }) => {
  const ref = React.createRef()
  const onClick = () => {
    console.log(ref)
  }
  return (
    <React.Fragment>
      <main>
        <Header title={t('h1')} />
        <div>
          <Input ref={ref}></Input>
          <button onClick={onClick}>Show Ref</button>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
