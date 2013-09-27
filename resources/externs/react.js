/**
 * @fileoverview Externs for React 0.4.0
 *
 * @see http://facebook.github.io/react/
 * @see http://facebook.github.io/react/docs/api.html
 * @externs
 */

/**
 * @type {Object}
 * @const
 */
var React = {};

/**
 * @param {boolean} shouldUseTouch
 */
React.initializeTouchEvents = function(shouldUseTouch) {};

/**
 * @param {Function} method
 */
React.autoBind = function(method) {};

/**
 * @param {Object} specification
 * @return {function(
      Object=,
      (string|React.ReactComponent|Array.<React.ReactComponent>)=
    ): React.ReactComponent}
 */
React.createClass = function(specification) {};

/**
 * @param {React.ReactComponent} container
 * @param {Element} mountPoint
 * @return {React.ReactComponent}
 */
React.renderComponent = function(container, mountPoint) {};

/**
 * @param {Element} container
 */
React.unmountAndReleaseReactRootNode = function(container) {};

/**
 * @param {React.ReactComponent} component
 * @param {Function} callback
 */
React.renderComponentToString = function(component, callback) {};

/**
 * @interface
 */
React.ReactComponent = function() {};

/**
 * @type {Object}
 */
React.ReactComponent.prototype.props;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.state;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.refs;

/**
 * @type {Object}
 * @protected
 */
React.ReactComponent.prototype.propTypes;

/**
 * @param {Object} nextProps
 */
React.ReactComponent.prototype.setProps = function(nextProps) {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getDefaultProps = function() {};

/**
 * @return {Element}
 * @protected
 */
React.ReactComponent.prototype.getDOMNode = function() {};

/**
 * @param {Object} nextProps
 * @protected
 */
React.ReactComponent.prototype.replaceProps = function(nextProps) {};

/**
 * @param {React.ReactComponent} targetComponent
 * @return {React.ReactComponent}
 * @protected
 */
React.ReactComponent.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @protected
 */
React.ReactComponent.prototype.forceUpdate = function() {};

/**
 * @param {Object} nextState
 * @protected
 */
React.ReactComponent.prototype.setState = function(nextState) {};

/**
 * @param {Object} nextState
 * @protected
 */
React.ReactComponent.prototype.replaceState = function(nextState) {};

/**
 * @param {Element} element
 * @protected
 */
React.ReactComponent.prototype.componentDidMount = function(element) {};

/**
 * @param {Object} nextProps
 * @protected
 */
React.ReactComponent.prototype.componentWillReceiveProps = function(
  nextProps) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
React.ReactComponent.prototype.shouldComponentUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
React.ReactComponent.prototype.componentWillUpdate = function(
  nextProps, nextState) {};

/**
 * @return {React.ReactComponent}
 * @protected
 */
React.ReactComponent.prototype.render = function() {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @param {Element} element
 * @protected
 */
React.ReactComponent.prototype.componentDidUpdate = function(
  prevProps, prevState, element) {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentWillUnmount = function() {};

/**
 * @type {Object}
 * @const
 */
React.DOM = {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.input = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.sup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.wbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {string|React.ReactComponent|Array.<React.ReactComponent>=} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.text = function(props, children) {};