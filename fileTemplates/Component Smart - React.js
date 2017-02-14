import React, {PropTypes, Component} from 'react';
import connect from 'react-redux';
//import { provideHooks } from 'redial';

//@provideHooks()
class $NAME extends Component {

static propTypes = {};

    render() {
    <div>
        //Content go there
    </div>
    }
} 

const mapStateToProps = () => {
    return {
        //field: field
    }
};

export default connect(mapStateToProps,{/*Some actions*/})($NAME);