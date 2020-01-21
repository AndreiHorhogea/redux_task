import Form from '../components/Form';
import { connect } from 'react-redux';
import {addItem, removeItem} from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        add: item => dispatch(addItem(item)),
        remove: item => dispatch(removeItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Form);