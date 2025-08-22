import { withGuestGate } from '../../../hoc/withGuestGate'
import { Welcome } from './Welcome'

const WelcomePage = withGuestGate(Welcome)
export default WelcomePage
