(self.webpackChunkreact_custmoer_webpack=self.webpackChunkreact_custmoer_webpack||[]).push([[9680],{2639:(e,r,t)=>{"use strict";t.d(r,{H:()=>n});var n="undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry},9991:(e,r,t)=>{"use strict";var n=t(8949);if(!t(7294).useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available")},5811:(e,r,t)=>{"use strict";t.d(r,{G:()=>i});var n=t(9933);function i(e){var r=new Map,t=1,i=new e((function(e){var t=r.get(e);t&&(t.reaction.dispose(),r.delete(e))}));return{addReactionToTrack:function(e,a,o){var u=t++;return i.register(o,u,e),e.current=(0,n.Uy)(a),e.current.finalizationRegistryCleanupToken=u,r.set(u,e.current),e.current},recordReactionAsCommitted:function(e){i.unregister(e),e.current&&e.current.finalizationRegistryCleanupToken&&r.delete(e.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}}}]);
//# sourceMappingURL=9680.9c3b076547.js.map