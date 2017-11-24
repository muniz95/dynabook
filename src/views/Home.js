import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { previousPage, nextPage } from '../actions/index';

class Home extends Component {
    render() {
        return (
            <div>
                Echtamos ahí na página {this.props.page}
                <div><button onClick={this.props.dispatchPreviousPage}>Página anterior</button></div>
                <div><button onClick={this.props.dispatchNextPage}>Página seguinte</button></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { page } = state;
    return {
        page
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPreviousPage: () => {
        dispatch(previousPage());
    },
    dispatchNextPage: () => {
        dispatch(nextPage());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)