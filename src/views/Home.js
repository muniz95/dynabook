import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { previousPage, nextPage } from '../actions/index';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            text: [],
            currentWordPosition: 0,
            pageSlip: 500,
            isReading: false,
            intervalId: 0
        }
    }
    
    componentWillMount() {
        // const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ligula orci. Praesent quis purus neque. Duis quis libero vel velit feugiat maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus libero quam, tincidunt in dignissim sed, blandit ut mi. Nam id eros tempor, varius elit ac, sodales risus. Vestibulum a suscipit mi. Etiam ac purus dictum, iaculis nisl in, egestas odio.'
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        this.setState({
            text: text.split(' ')
        })
    }
    
    componentDidMount() {
        // this.showText()
    }
    
    render() {
        const { text, currentWordPosition, isReading } = this.state
        const currentWord = text[currentWordPosition]
        const button = isReading
            ? 
                <div>
                    <button onClick={() => this.pauseText()}>Pausar</button>
                </div>
            :
                <div>
                    <button onClick={() => this.showText()}>Iniciar</button>
                </div>
        return (
            <div>
                <h1 class="current-word">{currentWord}</h1>
                {/*
                Echtamos ahí na página {this.props.page}
                <div><button onClick={this.props.dispatchPreviousPage}>Página anterior</button></div>
                <div><button onClick={this.props.dispatchNextPage}>Página seguinte</button></div>
                */}
                { button }
            </div>
        )
    }
    
    showText() {
        this.setState({
            isReading: true
        })
        const intervalId = setInterval(() => {
            const { currentWordPosition, text } = this.state
            if (currentWordPosition < text.length - 1) {
                this.setState({
                    currentWordPosition: this.state.currentWordPosition + 1
                })
            } else {
                this.setState({currentWordPosition: 0})
                this.pauseText()
            }
        }, this.state.pageSlip)
        this.setState({intervalId})
    }
    
    pauseText() {
        this.setState({
            isReading: false
        })
        clearInterval(this.state.intervalId)
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