;goog.provide("module$SimpleEventPlugin");
var module$SimpleEventPlugin = {};
goog.require("module$keyOf");
goog.require("module$invariant");
goog.require("module$SyntheticWheelEvent");
goog.require("module$SyntheticUIEvent");
goog.require("module$SyntheticTouchEvent");
goog.require("module$SyntheticMutationEvent");
goog.require("module$SyntheticMouseEvent");
goog.require("module$SyntheticKeyboardEvent");
goog.require("module$SyntheticFocusEvent");
goog.require("module$SyntheticEvent");
goog.require("module$SyntheticClipboardEvent");
goog.require("module$EventPropagators");
goog.require("module$EventConstants");
var EventConstants$$module$SimpleEventPlugin = module$EventConstants;
var EventPropagators$$module$SimpleEventPlugin = module$EventPropagators;
var SyntheticClipboardEvent$$module$SimpleEventPlugin = module$SyntheticClipboardEvent;
var SyntheticEvent$$module$SimpleEventPlugin = module$SyntheticEvent;
var SyntheticFocusEvent$$module$SimpleEventPlugin = module$SyntheticFocusEvent;
var SyntheticKeyboardEvent$$module$SimpleEventPlugin = module$SyntheticKeyboardEvent;
var SyntheticMouseEvent$$module$SimpleEventPlugin = module$SyntheticMouseEvent;
var SyntheticMutationEvent$$module$SimpleEventPlugin = module$SyntheticMutationEvent;
var SyntheticTouchEvent$$module$SimpleEventPlugin = module$SyntheticTouchEvent;
var SyntheticUIEvent$$module$SimpleEventPlugin = module$SyntheticUIEvent;
var SyntheticWheelEvent$$module$SimpleEventPlugin = module$SyntheticWheelEvent;
var invariant$$module$SimpleEventPlugin = module$invariant;
var keyOf$$module$SimpleEventPlugin = module$keyOf;
var topLevelTypes$$module$SimpleEventPlugin = EventConstants$$module$SimpleEventPlugin.topLevelTypes;
var eventTypes$$module$SimpleEventPlugin = {blur:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onBlur:true}), captured:keyOf$$module$SimpleEventPlugin({onBlurCapture:true})}}, click:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onClick:true}), captured:keyOf$$module$SimpleEventPlugin({onClickCapture:true})}}, copy:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onCopy:true}), captured:keyOf$$module$SimpleEventPlugin({onCopyCapture:true})}}, 
cut:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onCut:true}), captured:keyOf$$module$SimpleEventPlugin({onCutCapture:true})}}, doubleClick:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDoubleClick:true}), captured:keyOf$$module$SimpleEventPlugin({onDoubleClickCapture:true})}}, drag:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDrag:true}), captured:keyOf$$module$SimpleEventPlugin({onDragCapture:true})}}, dragEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragEnd:true}), 
captured:keyOf$$module$SimpleEventPlugin({onDragEndCapture:true})}}, dragEnter:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragEnter:true}), captured:keyOf$$module$SimpleEventPlugin({onDragEnterCapture:true})}}, dragExit:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragExit:true}), captured:keyOf$$module$SimpleEventPlugin({onDragExitCapture:true})}}, dragLeave:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragLeave:true}), captured:keyOf$$module$SimpleEventPlugin({onDragLeaveCapture:true})}}, 
dragOver:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragOver:true}), captured:keyOf$$module$SimpleEventPlugin({onDragOverCapture:true})}}, dragStart:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDragStart:true}), captured:keyOf$$module$SimpleEventPlugin({onDragStartCapture:true})}}, drop:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDrop:true}), captured:keyOf$$module$SimpleEventPlugin({onDropCapture:true})}}, DOMCharacterDataModified:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onDOMCharacterDataModified:true}), 
captured:keyOf$$module$SimpleEventPlugin({onDOMCharacterDataModifiedCapture:true})}}, focus:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onFocus:true}), captured:keyOf$$module$SimpleEventPlugin({onFocusCapture:true})}}, input:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onInput:true}), captured:keyOf$$module$SimpleEventPlugin({onInputCapture:true})}}, keyDown:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onKeyDown:true}), captured:keyOf$$module$SimpleEventPlugin({onKeyDownCapture:true})}}, 
keyPress:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onKeyPress:true}), captured:keyOf$$module$SimpleEventPlugin({onKeyPressCapture:true})}}, keyUp:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onKeyUp:true}), captured:keyOf$$module$SimpleEventPlugin({onKeyUpCapture:true})}}, mouseDown:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onMouseDown:true}), captured:keyOf$$module$SimpleEventPlugin({onMouseDownCapture:true})}}, mouseMove:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onMouseMove:true}), 
captured:keyOf$$module$SimpleEventPlugin({onMouseMoveCapture:true})}}, mouseUp:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onMouseUp:true}), captured:keyOf$$module$SimpleEventPlugin({onMouseUpCapture:true})}}, paste:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onPaste:true}), captured:keyOf$$module$SimpleEventPlugin({onPasteCapture:true})}}, scroll:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onScroll:true}), captured:keyOf$$module$SimpleEventPlugin({onScrollCapture:true})}}, 
submit:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onSubmit:true}), captured:keyOf$$module$SimpleEventPlugin({onSubmitCapture:true})}}, touchCancel:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onTouchCancel:true}), captured:keyOf$$module$SimpleEventPlugin({onTouchCancelCapture:true})}}, touchEnd:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onTouchEnd:true}), captured:keyOf$$module$SimpleEventPlugin({onTouchEndCapture:true})}}, touchMove:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onTouchMove:true}), 
captured:keyOf$$module$SimpleEventPlugin({onTouchMoveCapture:true})}}, touchStart:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onTouchStart:true}), captured:keyOf$$module$SimpleEventPlugin({onTouchStartCapture:true})}}, wheel:{phasedRegistrationNames:{bubbled:keyOf$$module$SimpleEventPlugin({onWheel:true}), captured:keyOf$$module$SimpleEventPlugin({onWheelCapture:true})}}};
var topLevelEventsToDispatchConfig$$module$SimpleEventPlugin = {topBlur:eventTypes$$module$SimpleEventPlugin.blur, topClick:eventTypes$$module$SimpleEventPlugin.click, topCopy:eventTypes$$module$SimpleEventPlugin.copy, topCut:eventTypes$$module$SimpleEventPlugin.cut, topDoubleClick:eventTypes$$module$SimpleEventPlugin.doubleClick, topDOMCharacterDataModified:eventTypes$$module$SimpleEventPlugin.DOMCharacterDataModified, topDrag:eventTypes$$module$SimpleEventPlugin.drag, topDragEnd:eventTypes$$module$SimpleEventPlugin.dragEnd, 
topDragEnter:eventTypes$$module$SimpleEventPlugin.dragEnter, topDragExit:eventTypes$$module$SimpleEventPlugin.dragExit, topDragLeave:eventTypes$$module$SimpleEventPlugin.dragLeave, topDragOver:eventTypes$$module$SimpleEventPlugin.dragOver, topDragStart:eventTypes$$module$SimpleEventPlugin.dragStart, topDrop:eventTypes$$module$SimpleEventPlugin.drop, topFocus:eventTypes$$module$SimpleEventPlugin.focus, topInput:eventTypes$$module$SimpleEventPlugin.input, topKeyDown:eventTypes$$module$SimpleEventPlugin.keyDown, 
topKeyPress:eventTypes$$module$SimpleEventPlugin.keyPress, topKeyUp:eventTypes$$module$SimpleEventPlugin.keyUp, topMouseDown:eventTypes$$module$SimpleEventPlugin.mouseDown, topMouseMove:eventTypes$$module$SimpleEventPlugin.mouseMove, topMouseUp:eventTypes$$module$SimpleEventPlugin.mouseUp, topPaste:eventTypes$$module$SimpleEventPlugin.paste, topScroll:eventTypes$$module$SimpleEventPlugin.scroll, topSubmit:eventTypes$$module$SimpleEventPlugin.submit, topTouchCancel:eventTypes$$module$SimpleEventPlugin.touchCancel, 
topTouchEnd:eventTypes$$module$SimpleEventPlugin.touchEnd, topTouchMove:eventTypes$$module$SimpleEventPlugin.touchMove, topTouchStart:eventTypes$$module$SimpleEventPlugin.touchStart, topWheel:eventTypes$$module$SimpleEventPlugin.wheel};
var SimpleEventPlugin$$module$SimpleEventPlugin = {eventTypes:eventTypes$$module$SimpleEventPlugin, executeDispatch:function(event, listener, domID) {
  var returnValue = listener(event, domID);
  if(returnValue === false) {
    event.stopPropagation();
    event.preventDefault()
  }
}, extractEvents:function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
  var dispatchConfig = topLevelEventsToDispatchConfig$$module$SimpleEventPlugin[topLevelType];
  if(!dispatchConfig) {
    return null
  }
  var EventConstructor;
  switch(topLevelType) {
    case topLevelTypes$$module$SimpleEventPlugin.topInput:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topSubmit:
      EventConstructor = SyntheticEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topKeyDown:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topKeyPress:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topKeyUp:
      EventConstructor = SyntheticKeyboardEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topBlur:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topFocus:
      EventConstructor = SyntheticFocusEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topClick:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDoubleClick:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDrag:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragEnd:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragEnter:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragExit:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragLeave:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragOver:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDragStart:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topDrop:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topMouseDown:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topMouseMove:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topMouseUp:
      EventConstructor = SyntheticMouseEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topDOMCharacterDataModified:
      EventConstructor = SyntheticMutationEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topTouchCancel:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topTouchEnd:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topTouchMove:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topTouchStart:
      EventConstructor = SyntheticTouchEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topScroll:
      EventConstructor = SyntheticUIEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topWheel:
      EventConstructor = SyntheticWheelEvent$$module$SimpleEventPlugin;
      break;
    case topLevelTypes$$module$SimpleEventPlugin.topCopy:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topCut:
    ;
    case topLevelTypes$$module$SimpleEventPlugin.topPaste:
      EventConstructor = SyntheticClipboardEvent$$module$SimpleEventPlugin;
      break
  }
  invariant$$module$SimpleEventPlugin(EventConstructor);
  var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent);
  EventPropagators$$module$SimpleEventPlugin.accumulateTwoPhaseDispatches(event);
  return event
}};
module$SimpleEventPlugin.module$exports = SimpleEventPlugin$$module$SimpleEventPlugin;
if(module$SimpleEventPlugin.module$exports) {
  module$SimpleEventPlugin = module$SimpleEventPlugin.module$exports
}
