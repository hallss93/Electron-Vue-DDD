import LandingPage from './landingPage/router'
export default [{
  path: '/',
  name: 'LandingPage',
  component: LandingPage
}, {
  path: '*',
  redirect: '/'
}]