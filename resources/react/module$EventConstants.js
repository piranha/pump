;goog.provide("module$EventConstants");
var module$EventConstants = {};
goog.require("module$keyMirror");
var keyMirror$$module$EventConstants = module$keyMirror;
var PropagationPhases$$module$EventConstants = keyMirror$$module$EventConstants({bubbled:null, captured:null});
var topLevelTypes$$module$EventConstants = keyMirror$$module$EventConstants({topBlur:null, topChange:null, topClick:null, topCompositionEnd:null, topCompositionStart:null, topCompositionUpdate:null, topCopy:null, topCut:null, topDOMCharacterDataModified:null, topDoubleClick:null, topDrag:null, topDragEnd:null, topDragEnter:null, topDragExit:null, topDragLeave:null, topDragOver:null, topDragStart:null, topDrop:null, topFocus:null, topInput:null, topKeyDown:null, topKeyPress:null, topKeyUp:null, topMouseDown:null, 
topMouseMove:null, topMouseOut:null, topMouseOver:null, topMouseUp:null, topPaste:null, topScroll:null, topSelectionChange:null, topSubmit:null, topTouchCancel:null, topTouchEnd:null, topTouchMove:null, topTouchStart:null, topWheel:null});
var EventConstants$$module$EventConstants = {topLevelTypes:topLevelTypes$$module$EventConstants, PropagationPhases:PropagationPhases$$module$EventConstants};
module$EventConstants.module$exports = EventConstants$$module$EventConstants;
if(module$EventConstants.module$exports) {
  module$EventConstants = module$EventConstants.module$exports
}
