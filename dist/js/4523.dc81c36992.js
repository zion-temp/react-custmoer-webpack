(self.webpackChunkreact_custmoer_webpack=self.webpackChunkreact_custmoer_webpack||[]).push([[4523],{4523:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(7294),r=n(1788),i=n(5697),u=n.n(i),s=1073741823,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function a(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,o){t=n,e.forEach((function(e){return e(t,o)}))}}}const p=o.createContext||function(t,e){var n,i,p="__create-react-context-"+(c["__global_unique_id__"]=(c.__global_unique_id__||0)+1)+"__",l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=a(e.props.value),e}(0,r.Z)(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,o=this.props.value,r=t.value;((i=o)===(u=r)?0!==i||1/i==1/u:i!=i&&u!=u)?n=0:(n="function"==typeof e?e(o,r):s,0!=(n|=0)&&this.emitter.set(t.value,n))}var i,u},o.render=function(){return this.props.children},n}(o.Component);l.childContextTypes=((n={})[p]=u().object.isRequired,n);var f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}(0,r.Z)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?s:e},o.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?s:t},o.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},o.getValue=function(){return this.context[p]?this.context[p].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return f.contextTypes=((i={})[p]=u().object,i),{Provider:l,Consumer:f}}}}]);
//# sourceMappingURL=4523.dc81c36992.js.map