class LazyLoad extends Component {
  constructor(p){
    super(p)
    this.state = { loaded:0 }
    this._scroll = this._scroll.bind(this)
  }
  _scroll(){
    let el = DOM.findDOMNode(this)
    let {top} = el.getBoundingClientRect()
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    if(top < (viewportHeight + this.props.top)) {
      window.removeEventListener('scroll', this._scroll)
      this.setState({loaded:1})
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this._trackYPosition)
    this._scroll()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this._trackYPosition)
  }
  render(){
    let {children} = this.props,
        {loaded} = this.state
    return <div>
        {loaded && children}
    </div>
  }
}

LazyLoad.defaultProps = {
  top: 100
}
