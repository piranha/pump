;goog.provide("module$ReactDOMComponent");
var module$ReactDOMComponent = {};
goog.require("module$mixInto");
goog.require("module$merge");
goog.require("module$keyOf");
goog.require("module$invariant");
goog.require("module$flattenChildren");
goog.require("module$escapeTextForBrowser");
goog.require("module$ReactPerf");
goog.require("module$ReactMount");
goog.require("module$ReactMultiChild");
goog.require("module$ReactEventEmitter");
goog.require("module$ReactComponent");
goog.require("module$DOMPropertyOperations");
goog.require("module$DOMProperty");
goog.require("module$CSSPropertyOperations");
var CSSPropertyOperations$$module$ReactDOMComponent = module$CSSPropertyOperations;
var DOMProperty$$module$ReactDOMComponent = module$DOMProperty;
var DOMPropertyOperations$$module$ReactDOMComponent = module$DOMPropertyOperations;
var ReactComponent$$module$ReactDOMComponent = module$ReactComponent;
var ReactEventEmitter$$module$ReactDOMComponent = module$ReactEventEmitter;
var ReactMultiChild$$module$ReactDOMComponent = module$ReactMultiChild;
var ReactMount$$module$ReactDOMComponent = module$ReactMount;
var ReactPerf$$module$ReactDOMComponent = module$ReactPerf;
var escapeTextForBrowser$$module$ReactDOMComponent = module$escapeTextForBrowser;
var flattenChildren$$module$ReactDOMComponent = module$flattenChildren;
var invariant$$module$ReactDOMComponent = module$invariant;
var keyOf$$module$ReactDOMComponent = module$keyOf;
var merge$$module$ReactDOMComponent = module$merge;
var mixInto$$module$ReactDOMComponent = module$mixInto;
var putListener$$module$ReactDOMComponent = ReactEventEmitter$$module$ReactDOMComponent.putListener;
var deleteListener$$module$ReactDOMComponent = ReactEventEmitter$$module$ReactDOMComponent.deleteListener;
var registrationNames$$module$ReactDOMComponent = ReactEventEmitter$$module$ReactDOMComponent.registrationNames;
var CONTENT_TYPES$$module$ReactDOMComponent = {"string":true, "number":true};
var STYLE$$module$ReactDOMComponent = keyOf$$module$ReactDOMComponent({style:null});
function assertValidProps$$module$ReactDOMComponent(props) {
  if(!props) {
    return
  }
  invariant$$module$ReactDOMComponent(props.children == null || props.dangerouslySetInnerHTML == null);
  invariant$$module$ReactDOMComponent(props.style == null || typeof props.style === "object")
}
function ReactDOMComponent$$module$ReactDOMComponent(tag, omitClose) {
  this._tagOpen = "<" + tag;
  this._tagClose = omitClose ? "" : "</" + tag + ">";
  this.tagName = tag.toUpperCase()
}
ReactDOMComponent$$module$ReactDOMComponent.Mixin = {mountComponent:ReactPerf$$module$ReactDOMComponent.measure("ReactDOMComponent", "mountComponent", function(rootID, transaction, mountDepth) {
  ReactComponent$$module$ReactDOMComponent.Mixin.mountComponent.call(this, rootID, transaction, mountDepth);
  assertValidProps$$module$ReactDOMComponent(this.props);
  return this._createOpenTagMarkup() + this._createContentMarkup(transaction) + this._tagClose
}), _createOpenTagMarkup:function() {
  var props = this.props;
  var ret = this._tagOpen;
  for(var propKey in props) {
    if(!props.hasOwnProperty(propKey)) {
      continue
    }
    var propValue = props[propKey];
    if(propValue == null) {
      continue
    }
    if(registrationNames$$module$ReactDOMComponent[propKey]) {
      putListener$$module$ReactDOMComponent(this._rootNodeID, propKey, propValue)
    }else {
      if(propKey === STYLE$$module$ReactDOMComponent) {
        if(propValue) {
          propValue = props.style = merge$$module$ReactDOMComponent(props.style)
        }
        propValue = CSSPropertyOperations$$module$ReactDOMComponent.createMarkupForStyles(propValue)
      }
      var markup = DOMPropertyOperations$$module$ReactDOMComponent.createMarkupForProperty(propKey, propValue);
      if(markup) {
        ret += " " + markup
      }
    }
  }
  var escapedID = escapeTextForBrowser$$module$ReactDOMComponent(this._rootNodeID);
  return ret + " " + ReactMount$$module$ReactDOMComponent.ATTR_NAME + '="' + escapedID + '">'
}, _createContentMarkup:function(transaction) {
  var innerHTML = this.props.dangerouslySetInnerHTML;
  if(innerHTML != null) {
    if(innerHTML.__html != null) {
      return innerHTML.__html
    }
  }else {
    var contentToUse = CONTENT_TYPES$$module$ReactDOMComponent[typeof this.props.children] ? this.props.children : null;
    var childrenToUse = contentToUse != null ? null : this.props.children;
    if(contentToUse != null) {
      return escapeTextForBrowser$$module$ReactDOMComponent(contentToUse)
    }else {
      if(childrenToUse != null) {
        var mountImages = this.mountChildren(flattenChildren$$module$ReactDOMComponent(childrenToUse), transaction);
        return mountImages.join("")
      }
    }
  }
  return""
}, receiveProps:function(nextProps, transaction) {
  assertValidProps$$module$ReactDOMComponent(nextProps);
  ReactComponent$$module$ReactDOMComponent.Mixin.receiveProps.call(this, nextProps, transaction)
}, updateComponent:ReactPerf$$module$ReactDOMComponent.measure("ReactDOMComponent", "updateComponent", function(transaction, prevProps) {
  ReactComponent$$module$ReactDOMComponent.Mixin.updateComponent.call(this, transaction, prevProps);
  this._updateDOMProperties(prevProps);
  this._updateDOMChildren(prevProps, transaction)
}), _updateDOMProperties:function(lastProps) {
  var nextProps = this.props;
  var propKey;
  var styleName;
  var styleUpdates;
  for(propKey in lastProps) {
    if(nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
      continue
    }
    if(propKey === STYLE$$module$ReactDOMComponent) {
      var lastStyle = lastProps[propKey];
      for(styleName in lastStyle) {
        if(lastStyle.hasOwnProperty(styleName)) {
          styleUpdates = styleUpdates || {};
          styleUpdates[styleName] = ""
        }
      }
    }else {
      if(registrationNames$$module$ReactDOMComponent[propKey]) {
        deleteListener$$module$ReactDOMComponent(this._rootNodeID, propKey)
      }else {
        if(DOMProperty$$module$ReactDOMComponent.isStandardName[propKey] || DOMProperty$$module$ReactDOMComponent.isCustomAttribute(propKey)) {
          ReactComponent$$module$ReactDOMComponent.DOMIDOperations.deletePropertyByID(this._rootNodeID, propKey)
        }
      }
    }
  }
  for(propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps[propKey];
    if(!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
      continue
    }
    if(propKey === STYLE$$module$ReactDOMComponent) {
      if(nextProp) {
        nextProp = nextProps.style = merge$$module$ReactDOMComponent(nextProp)
      }
      if(lastProp) {
        for(styleName in lastProp) {
          if(lastProp.hasOwnProperty(styleName) && !nextProp.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = ""
          }
        }
        for(styleName in nextProp) {
          if(nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = nextProp[styleName]
          }
        }
      }else {
        styleUpdates = nextProp
      }
    }else {
      if(registrationNames$$module$ReactDOMComponent[propKey]) {
        putListener$$module$ReactDOMComponent(this._rootNodeID, propKey, nextProp)
      }else {
        if(DOMProperty$$module$ReactDOMComponent.isStandardName[propKey] || DOMProperty$$module$ReactDOMComponent.isCustomAttribute(propKey)) {
          ReactComponent$$module$ReactDOMComponent.DOMIDOperations.updatePropertyByID(this._rootNodeID, propKey, nextProp)
        }
      }
    }
  }
  if(styleUpdates) {
    ReactComponent$$module$ReactDOMComponent.DOMIDOperations.updateStylesByID(this._rootNodeID, styleUpdates)
  }
}, _updateDOMChildren:function(lastProps, transaction) {
  var nextProps = this.props;
  var lastContent = CONTENT_TYPES$$module$ReactDOMComponent[typeof lastProps.children] ? lastProps.children : null;
  var nextContent = CONTENT_TYPES$$module$ReactDOMComponent[typeof nextProps.children] ? nextProps.children : null;
  var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
  var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
  var lastChildren = lastContent != null ? null : lastProps.children;
  var nextChildren = nextContent != null ? null : nextProps.children;
  var lastHasContentOrHtml = lastContent != null || lastHtml != null;
  var nextHasContentOrHtml = nextContent != null || nextHtml != null;
  if(lastChildren != null && nextChildren == null) {
    this.updateChildren(null, transaction)
  }else {
    if(lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent("")
    }
  }
  if(nextContent != null) {
    if(lastContent !== nextContent) {
      this.updateTextContent("" + nextContent)
    }
  }else {
    if(nextHtml != null) {
      if(lastHtml !== nextHtml) {
        ReactComponent$$module$ReactDOMComponent.DOMIDOperations.updateInnerHTMLByID(this._rootNodeID, nextHtml)
      }
    }else {
      if(nextChildren != null) {
        this.updateChildren(flattenChildren$$module$ReactDOMComponent(nextChildren), transaction)
      }
    }
  }
}, unmountComponent:function() {
  ReactEventEmitter$$module$ReactDOMComponent.deleteAllListeners(this._rootNodeID);
  ReactComponent$$module$ReactDOMComponent.Mixin.unmountComponent.call(this);
  this.unmountChildren()
}};
mixInto$$module$ReactDOMComponent(ReactDOMComponent$$module$ReactDOMComponent, ReactComponent$$module$ReactDOMComponent.Mixin);
mixInto$$module$ReactDOMComponent(ReactDOMComponent$$module$ReactDOMComponent, ReactDOMComponent$$module$ReactDOMComponent.Mixin);
mixInto$$module$ReactDOMComponent(ReactDOMComponent$$module$ReactDOMComponent, ReactMultiChild$$module$ReactDOMComponent.Mixin);
module$ReactDOMComponent.module$exports = ReactDOMComponent$$module$ReactDOMComponent;
if(module$ReactDOMComponent.module$exports) {
  module$ReactDOMComponent = module$ReactDOMComponent.module$exports
}
