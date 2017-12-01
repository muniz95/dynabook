import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { startSlip, pauseSlip, stopSlip } from '../actions/index';

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
                    <h1 onClick={() => this.pauseText()} class="current-word">{currentWord}</h1>
                </div>
            :
                <div>
                    <h1 onClick={() => this.showText()} class="current-word">{currentWord}</h1>
                </div>
        return (
            <div>
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
    dispatchStartSlip: () => {
        dispatch(startSlip());
    },
    dispatchPauseSlip: () => {
        dispatch(pauseSlip());
    },
    dispatchStopSlip: () => {
        dispatch(stopSlip());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)