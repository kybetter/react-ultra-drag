!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-ultra-drag"]=t(require("react")):e["react-ultra-drag"]=t(e.React)}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2),i=r(n);t.default=i.default},function(e,t){"use strict";function o(){var e,t,o="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(o+="-"),o+=(12===e?4:16===e?3&t|8:t).toString(16);return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),c=o(8),l=r(c),p=o(6),h=r(p),f=o(1),d=r(f),m=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.removeEvent=function(){o.props.attachedTo.removeEventListener("mousemove",o.mouseMoveListener),o.props.attachedTo.removeEventListener("mouseup",o.mouseUpListener)},o._onCompUP=function(e){o.preId=o.id},o._onUp=function(e){o._onMove(e),o.clicked=null,o.preId=""},o.cursorX=0,o.cursorY=0,o.clicked=null,o.id=(0,d.default)(),o.preId="",o.moveInterval=0,o.frameRect={width:0,height:0,left:0,top:0},o.props.bound&&o.updateBound(o.props.bound,!1),o.state={cursor:""},o.mouseMoveListener=o._onMove.bind(o),o.mouseUpListener=o._onUp.bind(o),o}return s(t,e),a(t,[{key:"getBounder",value:function(){return this.frameRect}},{key:"updateBound",value:function(e,t){if(e){var o=this.frameRect;o.top,o.left,o.width,o.height;"number"==typeof e.top&&(this.frameRect.top=e.top),"number"==typeof e.left&&(this.frameRect.left=e.left),"number"==typeof e.width&&(this.frameRect.width=e.width),"number"==typeof e.height&&(this.frameRect.height=e.height)}t&&this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props.attachedTo;this.props.enableDrag&&(e.addEventListener("mousemove",this.mouseMoveListener),e.addEventListener("mouseup",this.mouseUpListener))}},{key:"componentWillUnmount",value:function(){this.props.attachedTo.removeEventListener("mousemove",this.mouseMoveListener),this.props.attachedTo.removeEventListener("mouseup",this.mouseUpListener)}},{key:"getRightBottom",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:10,height:10,right:-10,bottom:-10,cursor:"se-resize"}})}},{key:"getRight",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:20,top:0,right:-10,bottom:10,cursor:"ew-resize"}})}},{key:"getLeft",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:20,top:0,left:-10,bottom:10,cursor:"ew-resize"}})}},{key:"getBottom",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",height:20,left:0,bottom:-10,right:10,cursor:"ns-resize"}})}},{key:"getTop",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",height:20,right:10,top:-10,left:10,cursor:"ns-resize"}})}},{key:"componentWillReceiveProps",value:function(e){e.enableDrag&&this.allowDrag(),e.left!=this.props.bound.left||e.top!=this.props.bound.top||e.width!=this.props.bound.width||e.height!=this.props.bound.height}},{key:"allowDrag",value:function(){var e=this.props.attachedTo;this.props.attachedTo.removeEventListener("mousemove",this.mouseMoveListener),this.props.attachedTo.removeEventListener("mouseup",this.mouseUpListener),this.props.enableDrag&&(e.addEventListener("mousemove",this.mouseMoveListener),e.addEventListener("mouseup",this.mouseUpListener))}},{key:"render",value:function(){var e=this,t=this.props,o=t.style,r=t.contentStyle,n=(t.minWidth,t.minHeight,t.animate,t.cursorRemap),i=t.children;t.bound,t.onChange,u({},this.frameRect);this.setFramerect(this.frameRect,this.state.cursor);var s=this.state.cursor;if(n){var a=n.call(this,s);a&&"string"==typeof a&&(s=a)}var c={cursor:s,clicked:this.clicked,frameRect:this.frameRect};l.default.Children.map(i,function(e){return"string"==typeof e?e:l.default.cloneElement(e,{dnrState:c})});return l.default.createElement("div",{ref:function(t){e.frame=t},onMouseDownCapture:this._onDown.bind(this),onMouseUp:this._onCompUP.bind(this,this.id),style:u({position:"absolute",margin:0,padding:0,cursor:this.state.cursor},o,this.frameRect,this.clicked?{}:{})},l.default.createElement("div",{className:"contentClassName",style:u({position:"absolute",width:"100%",top:0,bottom:0},r)},this.props.children),this.props.resizeIcon?this.props.resizeIcon:null,this.props.enableDrag?this.getRightBottom():null,this.props.enableDrag?this.getBottom():null,this.props.enableDrag?this.getLeft():null,this.props.enableDrag?this.getTop():null,this.props.enableDrag?this.getRight():null)}},{key:"setFramerect",value:function(e,t){if(this.clicked){var o=this.hitEdges,r=this.clicked.boundingBox;if(o.top||o.bottom||o.left||o.right){if(o.right&&(e.width=Math.max((this.cursorX-r.left)/this.props.scale,this.props.minWidth)),o.bottom&&(e.height=Math.max((this.cursorY-r.top)/this.props.scale,this.props.minHeight)),o.left){var n=r.right-this.cursorX;n>this.props.minWidth&&(e.width=n/this.props.scale,e.left=this.clicked.frameLeft+(this.cursorX-this.clicked.x)/this.props.scale)}if(o.top){var i=r.bottom-this.cursorY;i>this.props.minHeight&&(e.height=i/this.props.scale,e.top=this.clicked.frameTop+(this.cursorY-this.clicked.y)/this.props.scale)}}else"move"===t&&(e.top=this.clicked.frameTop+(this.cursorY-this.clicked.y)/this.props.scale,e.left=this.clicked.frameLeft+(this.cursorX-this.clicked.x)/this.props.scale)}}},{key:"getFrameRect",value:function(){return this.frame.getBoundingClientRect()}},{key:"getDOMFrame",value:function(){return this.frame}},{key:"getTitleRect",value:function(){return this.title.getBoundingClientRect()}},{key:"_cursorStatus",value:function(e){var t=this.getFrameRect();if(this.cursorX=e.clientX,this.cursorY=e.clientY,!this.clicked){var o=this.props.dragSize,r=this.cursorY<=t.top+o,n=this.cursorY>=t.bottom-o,i=this.cursorX<=t.left+o,s=this.cursorX>=t.right-o,u="default";return this.props.enableDrag&&(r||n||i||s?s&&n?u="se-resize":s||i?u="ew-resize":(n||r)&&(u="ns-resize"):u="move"),this.hitEdges={top:r,bottom:n,left:i,right:s},u!==this.state.cursor&&this.setState({cursor:u}),u}}},{key:"_onDown",value:function(e){e.stopPropagation(),e.preventDefault(),this._cursorStatus(e);var t=this.getFrameRect();this.clicked={x:e.clientX,y:e.clientY,boundingBox:t,frameTop:this.frame.offsetTop,frameLeft:this.frame.offsetLeft}}},{key:"_onMove",value:function(e){if(e.stopPropagation(),e.preventDefault(),this.props.enableDrag){var t=this._cursorStatus(e);if(this.clicked&&this.props.hasOwnProperty("onMove")&&this.props.onMove){var o=u({},this.frameRect);this.setFramerect(o,t),this.props.onMove(o)}}else"default"!==this.state.cursor&&this.setState({cursor:"default"});null!==this.clicked&&this.props.enableDrag&&this.forceUpdate()}}]),t}(l.default.Component);t.default=m,m.propTypes={titleBar:h.default.oneOfType([h.default.object,h.default.string]),style:h.default.object,contentClassName:h.default.object,contentStyle:h.default.object,titleStyle:h.default.object,minWidth:h.default.number,minHeight:h.default.number,dragSize:h.default.number,animate:h.default.bool,onChange:h.default.func,onMove:h.default.func,cursorRemap:h.default.func,bound:h.default.object.isRequired,attachedTo:h.default.object,scale:h.default.number,moveInterval:h.default.number,enableDrag:h.default.bool,resizeIcon:h.default.object},m.defaultProps={minWidth:20,minHeight:20,dragSize:10,animate:!0,attachedTo:window,scale:.5,enableDrag:!0,onChange:null,onMove:null,bound:{},resizeIcon:null,moveInterval:40}},function(e,t){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,o){"use strict";function r(e,t,o,r,i,s,u,a){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,r,i,s,u,a],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(e){};e.exports=r},function(e,t,o){"use strict";var r=o(3),n=o(4),i=o(7);e.exports=function(){function e(e,t,o,r,s,u){u!==i&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=r,o.PropTypes=o,o}},function(e,t,o){e.exports=o(5)()},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o},function(t,o){t.exports=e}])});