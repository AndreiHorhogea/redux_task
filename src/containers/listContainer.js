import { connect } from 'react-redux';
import List from '../components/List';

function mapStateToProps (state) {
    return {
        items: state.items,
        itemToDelete: state.itemToDelete
    };
}

export default connect(mapStateToProps)(List);