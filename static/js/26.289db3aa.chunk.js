(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26,32],{174:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r(31),c=r(81),i=r.n(c),o=r(171),u=r(117),s=r(233),f=r(120),l=r(215),d=r(239),b=r(220),O=(r(104),r(61)),j=r(62),p=r(84),h=r.n(p),y=r(0),g=r.n(y),v=10,k=10,m=2,x=5;e.default=g.a.memo((function(t){var e=t.timeseries,r=t.date,c=Object(y.useRef)([]),p=Object(y.useMemo)((function(){var t=r||Object(a.h)(),c=Object.keys(e||{}).filter((function(e){return e<=t})),i=c[c.length-1],o=Object(O.a)(Object(j.a)(Object(a.k)(i),n.k),{representation:"date"});return c.filter((function(t){return t>=o}))}),[e,r]);return Object(y.useEffect)((function(){var t=p.length,r=100-k,i=75-m,O=Object(s.a)().clamp(!0).domain(t?[Object(a.k)(p[0]),Object(a.k)(p[t-1])]:[]).range([x,r]);c.current.forEach((function(r,c){var s,j=Object(l.a)(r),h=n.n[c],y=n.s[h].color,g=Object(o.a)(p,(function(t){return Math.abs(Object(a.i)(e[t],"delta",h))})),k=Object(f.a)().clamp(!0).domain([-g,g]).range([i,v]),m=Object(d.a)().curve(b.a).x((function(t){return O(Object(a.k)(t))})).y((function(t){return k(Object(a.i)(e[t],"delta",h))}));j.selectAll("path").data(t?[p]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",y+"99").attr("stroke-width",2.5).attr("d",m).attr("stroke-dasharray",(function(){return s=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",s).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(l.a)(this).attr("d"),r=m(t);return Object(u.interpolatePath)(e,r)}))})),j.selectAll("circle").data(t?[p[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",y).attr("r",2.5).attr("cx",(function(t){return O(Object(a.k)(t))})).attr("cy",(function(t){return k(Object(a.i)(e[t],"delta",h))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return O(Object(a.k)(t))})).attr("cy",(function(t){return k(Object(a.i)(e[t],"delta",h))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return O(Object(a.k)(t))})).attr("cy",(function(t){return k(Object(a.i)(e[t],"delta",h))}))}))}))}),[p,e]),g.a.createElement("div",{className:"Minigraph"},n.n.map((function(t,e){return g.a.createElement("div",{key:t,className:i()("svg-parent")},g.a.createElement("svg",{ref:function(t){c.current[e]=t},width:100,height:75,viewBox:"0 0 ".concat(100," ").concat(75),preserveAspectRatio:"xMidYMid meet"}))})))}),(function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!h()(e.stateCode,t.stateCode)&&!!h()(e.date,t.date)))}))},84:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,a,c;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(a=n;0!==a--;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,c[a]))return!1;for(a=n;0!==a--;){var i=c[a];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=26.289db3aa.chunk.js.map