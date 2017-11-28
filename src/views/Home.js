import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { previousPage, nextPage } from '../actions/index';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            text: [],
            currentWordPosition: 0,
            pageSlip: 500
        }
    }
    
    componentWillMount() {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ligula orci. Praesent quis purus neque. Duis quis libero vel velit feugiat maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus libero quam, tincidunt in dignissim sed, blandit ut mi. Nam id eros tempor, varius elit ac, sodales risus. Vestibulum a suscipit mi. Etiam ac purus dictum, iaculis nisl in, egestas odio.'
        this.setState({
            text: text.split(' ')
        })
    }
    
    componentDidMount() {
        this.showText()
    }
    
    render() {
        const { text, currentWordPosition } = this.state
        const currentWord = text[currentWordPosition]
        return (
            <div>
                {currentWord}
                {/*
                Echtamos ahí na página {this.props.page}
                <div><button onClick={this.props.dispatchPreviousPage}>Página anterior</button></div>
                <div><button onClick={this.props.dispatchNextPage}>Página seguinte</button></div>
                */}
            </div>
        )
    }
    
    showText() {
        setInterval(() => {
            this.setState({
                currentWordPosition: this.state.currentWordPosition + 1
            })
        }, this.state.pageSlip)
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