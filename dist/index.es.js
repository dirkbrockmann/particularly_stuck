(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ji = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function re(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ta(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Dr(t) {
  let e, n, r;
  t.length !== 2 ? (e = re, n = (s, c) => re(t(s), c), r = (s, c) => t(s) - c) : (e = t === re || t === ta ? t : ea, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && r(s[f - 1], c) > -r(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function ea() {
  return 0;
}
function na(t) {
  return t === null ? NaN : +t;
}
const ra = Dr(re), ia = ra.right;
Dr(na).center;
const aa = Math.sqrt(50), oa = Math.sqrt(10), sa = Math.sqrt(2);
function fe(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= aa ? 10 : a >= oa ? 5 : a >= sa ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? fe(t, e, n * 2) : [s, c, u];
}
function ca(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? fe(e, t, n) : fe(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Ze(t, e, n) {
  return e = +e, t = +t, n = +n, fe(t, e, n)[2];
}
function ua(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Ze(e, t, n) : Ze(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Kt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function fa(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var la = { value: () => {
} };
function vn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ie(n);
}
function ie(t) {
  this._ = t;
}
function ha(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ie.prototype = vn.prototype = {
  constructor: ie,
  on: function(t, e) {
    var n = this._, r = ha(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = da(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Gn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Gn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ie(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function da(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Gn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = la, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var We = "http://www.w3.org/1999/xhtml";
const Un = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: We,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xe(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Un.hasOwnProperty(e) ? { space: Un[e], local: t } : t;
}
function pa(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === We && e.documentElement.namespaceURI === We ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function ba(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function qr(t) {
  var e = xe(t);
  return (e.local ? ba : pa)(e);
}
function ga() {
}
function xn(t) {
  return t == null ? ga : function() {
    return this.querySelector(t);
  };
}
function ya(t) {
  typeof t != "function" && (t = xn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new I(r, this._parents);
}
function _a(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ma() {
  return [];
}
function Hr(t) {
  return t == null ? ma : function() {
    return this.querySelectorAll(t);
  };
}
function wa(t) {
  return function() {
    return _a(t.apply(this, arguments));
  };
}
function va(t) {
  typeof t == "function" ? t = wa(t) : t = Hr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new I(r, i);
}
function Br(t) {
  return function() {
    return this.matches(t);
  };
}
function Xr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var xa = Array.prototype.find;
function Ma(t) {
  return function() {
    return xa.call(this.children, t);
  };
}
function $a() {
  return this.firstElementChild;
}
function Aa(t) {
  return this.select(t == null ? $a : Ma(typeof t == "function" ? t : Xr(t)));
}
var Ta = Array.prototype.filter;
function Pa() {
  return Array.from(this.children);
}
function Sa(t) {
  return function() {
    return Ta.call(this.children, t);
  };
}
function Ea(t) {
  return this.selectAll(t == null ? Pa : Sa(typeof t == "function" ? t : Xr(t)));
}
function Na(t) {
  typeof t != "function" && (t = Br(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new I(r, this._parents);
}
function Gr(t) {
  return new Array(t.length);
}
function Oa() {
  return new I(this._enter || this._groups.map(Gr), this._parents);
}
function le(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
le.prototype = {
  constructor: le,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function za(t) {
  return function() {
    return t;
  };
}
function Ia(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new le(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function ka(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, f = a.length, h = new Array(l), p;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (h[s] = p = o.call(c, c.__data__, s, e) + "", u.has(p) ? i[s] = c : u.set(p, c));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (c = u.get(p)) ? (r[s] = c, c.__data__ = a[s], u.delete(p)) : n[s] = new le(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(h[s]) === c && (i[s] = c);
}
function Ca(t) {
  return t.__data__;
}
function Ra(t, e) {
  if (!arguments.length) return Array.from(this, Ca);
  var n = e ? ka : Ia, r = this._parents, i = this._groups;
  typeof t != "function" && (t = za(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], f = i[u], h = f.length, p = Fa(t.call(l, l && l.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), v = o[u] = new Array(d), g = c[u] = new Array(h);
    n(l, f, _, v, g, p, e);
    for (var x = 0, A = 0, b, m; x < d; ++x)
      if (b = _[x]) {
        for (x >= A && (A = x + 1); !(m = v[A]) && ++A < d; ) ;
        b._next = m || null;
      }
  }
  return o = new I(o, r), o._enter = s, o._exit = c, o;
}
function Fa(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function La() {
  return new I(this._exit || this._groups.map(Gr), this._parents);
}
function Da(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function qa(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], f = u.length, h = s[c] = new Array(f), p, d = 0; d < f; ++d)
      (p = u[d] || l[d]) && (h[d] = p);
  for (; c < i; ++c)
    s[c] = n[c];
  return new I(s, this._parents);
}
function Ha() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ba(t) {
  t || (t = Xa);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new I(i, this._parents).order();
}
function Xa(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ga() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ua() {
  return Array.from(this);
}
function Ya() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ka() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Va() {
  return !this.node();
}
function Za(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Wa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ja(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qa(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ja(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function to(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function eo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function no(t, e) {
  var n = xe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ja : Wa : typeof e == "function" ? n.local ? eo : to : n.local ? ja : Qa)(n, e));
}
function Ur(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ro(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function io(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ao(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function oo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ro : typeof e == "function" ? ao : io)(t, e, n ?? "")) : At(this.node(), t);
}
function At(t, e) {
  return t.style.getPropertyValue(e) || Ur(t).getComputedStyle(t, null).getPropertyValue(e);
}
function so(t) {
  return function() {
    delete this[t];
  };
}
function co(t, e) {
  return function() {
    this[t] = e;
  };
}
function uo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function fo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? so : typeof e == "function" ? uo : co)(t, e)) : this.node()[t];
}
function Yr(t) {
  return t.trim().split(/^|\s+/);
}
function Mn(t) {
  return t.classList || new Kr(t);
}
function Kr(t) {
  this._node = t, this._names = Yr(t.getAttribute("class") || "");
}
Kr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Vr(t, e) {
  for (var n = Mn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Zr(t, e) {
  for (var n = Mn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function lo(t) {
  return function() {
    Vr(this, t);
  };
}
function ho(t) {
  return function() {
    Zr(this, t);
  };
}
function po(t, e) {
  return function() {
    (e.apply(this, arguments) ? Vr : Zr)(this, t);
  };
}
function bo(t, e) {
  var n = Yr(t + "");
  if (arguments.length < 2) {
    for (var r = Mn(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? po : e ? lo : ho)(n, e));
}
function go() {
  this.textContent = "";
}
function yo(t) {
  return function() {
    this.textContent = t;
  };
}
function _o(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function mo(t) {
  return arguments.length ? this.each(t == null ? go : (typeof t == "function" ? _o : yo)(t)) : this.node().textContent;
}
function wo() {
  this.innerHTML = "";
}
function vo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function xo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Mo(t) {
  return arguments.length ? this.each(t == null ? wo : (typeof t == "function" ? xo : vo)(t)) : this.node().innerHTML;
}
function $o() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ao() {
  return this.each($o);
}
function To() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Po() {
  return this.each(To);
}
function So(t) {
  var e = typeof t == "function" ? t : qr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Eo() {
  return null;
}
function No(t, e) {
  var n = typeof t == "function" ? t : qr(t), r = e == null ? Eo : typeof e == "function" ? e : xn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Oo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function zo() {
  return this.each(Oo);
}
function Io() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ko() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Co(t) {
  return this.select(t ? ko : Io);
}
function Ro(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Lo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Do(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function qo(t, e, n) {
  return function() {
    var r = this.__on, i, a = Fo(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ho(t, e, n) {
  var r = Lo(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? qo : Do, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Wr(t, e, n) {
  var r = Ur(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Bo(t, e) {
  return function() {
    return Wr(this, t, e);
  };
}
function Xo(t, e) {
  return function() {
    return Wr(this, t, e.apply(this, arguments));
  };
}
function Go(t, e) {
  return this.each((typeof e == "function" ? Xo : Bo)(t, e));
}
function* Uo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Jr = [null];
function I(t, e) {
  this._groups = t, this._parents = e;
}
function Bt() {
  return new I([[document.documentElement]], Jr);
}
function Yo() {
  return this;
}
I.prototype = Bt.prototype = {
  constructor: I,
  select: ya,
  selectAll: va,
  selectChild: Aa,
  selectChildren: Ea,
  filter: Na,
  data: Ra,
  enter: Oa,
  exit: La,
  join: Da,
  merge: qa,
  selection: Yo,
  order: Ha,
  sort: Ba,
  call: Ga,
  nodes: Ua,
  node: Ya,
  size: Ka,
  empty: Va,
  each: Za,
  attr: no,
  style: oo,
  property: fo,
  classed: bo,
  text: mo,
  html: Mo,
  raise: Ao,
  lower: Po,
  append: So,
  insert: No,
  remove: zo,
  clone: Co,
  datum: Ro,
  on: Ho,
  dispatch: Go,
  [Symbol.iterator]: Uo
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Jr);
}
function Ko(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Je(t, e) {
  if (t = Ko(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Vo = { passive: !1 }, Ct = { capture: !0, passive: !1 };
function qe(t) {
  t.stopImmediatePropagation();
}
function Mt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Zo(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", Mt, Ct);
  "onselectstart" in e ? n.on("selectstart.drag", Mt, Ct) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Wo(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Mt, Ct), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Vt = (t) => () => t;
function Qe(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Qe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Jo(t) {
  return !t.ctrlKey && !t.button;
}
function Qo() {
  return this.parentNode;
}
function jo(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ts() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function es() {
  var t = Jo, e = Qo, n = jo, r = ts, i = {}, a = vn("start", "drag", "end"), o = 0, s, c, u, l, f = 0;
  function h(b) {
    b.on("mousedown.drag", p).filter(r).on("touchstart.drag", v).on("touchmove.drag", g, Vo).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(b, m) {
    if (!(l || !t.call(this, b, m))) {
      var P = A(this, e.call(this, b, m), b, m, "mouse");
      P && (S(b.view).on("mousemove.drag", d, Ct).on("mouseup.drag", _, Ct), Zo(b.view), qe(b), u = !1, s = b.clientX, c = b.clientY, P("start", b));
    }
  }
  function d(b) {
    if (Mt(b), !u) {
      var m = b.clientX - s, P = b.clientY - c;
      u = m * m + P * P > f;
    }
    i.mouse("drag", b);
  }
  function _(b) {
    S(b.view).on("mousemove.drag mouseup.drag", null), Wo(b.view, u), Mt(b), i.mouse("end", b);
  }
  function v(b, m) {
    if (t.call(this, b, m)) {
      var P = b.changedTouches, E = e.call(this, b, m), N = P.length, H, V;
      for (H = 0; H < N; ++H)
        (V = A(this, E, b, m, P[H].identifier, P[H])) && (qe(b), V("start", b, P[H]));
    }
  }
  function g(b) {
    var m = b.changedTouches, P = m.length, E, N;
    for (E = 0; E < P; ++E)
      (N = i[m[E].identifier]) && (Mt(b), N("drag", b, m[E]));
  }
  function x(b) {
    var m = b.changedTouches, P = m.length, E, N;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), E = 0; E < P; ++E)
      (N = i[m[E].identifier]) && (qe(b), N("end", b, m[E]));
  }
  function A(b, m, P, E, N, H) {
    var V = a.copy(), w = Je(H || P, m), B, O, R;
    if ((R = n.call(b, new Qe("beforestart", {
      sourceEvent: P,
      target: h,
      identifier: N,
      active: o,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), E)) != null)
      return B = R.x - w[0] || 0, O = R.y - w[1] || 0, function Yt(at, st, wt) {
        var C = w, De;
        switch (at) {
          case "start":
            i[N] = Yt, De = o++;
            break;
          case "end":
            delete i[N], --o;
          // falls through
          case "drag":
            w = Je(wt || st, m), De = o;
            break;
        }
        V.call(
          at,
          b,
          new Qe(at, {
            sourceEvent: st,
            subject: R,
            target: h,
            identifier: N,
            active: De,
            x: w[0] + B,
            y: w[1] + O,
            dx: w[0] - C[0],
            dy: w[1] - C[1],
            dispatch: V
          }),
          E
        );
      };
  }
  return h.filter = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Vt(!!b), h) : t;
  }, h.container = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Vt(b), h) : e;
  }, h.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Vt(b), h) : n;
  }, h.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Vt(!!b), h) : r;
  }, h.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? h : b;
  }, h.clickDistance = function(b) {
    return arguments.length ? (f = (b = +b) * b, h) : Math.sqrt(f);
  }, h;
}
function $n(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Qr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Xt() {
}
var Rt = 0.7, he = 1 / Rt, $t = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ns = /^#([0-9a-f]{3,8})$/, rs = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), is = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), as = new RegExp(`^rgba\\(${$t},${$t},${$t},${Ft}\\)$`), os = new RegExp(`^rgba\\(${G},${G},${G},${Ft}\\)$`), ss = new RegExp(`^hsl\\(${Ft},${G},${G}\\)$`), cs = new RegExp(`^hsla\\(${Ft},${G},${G},${Ft}\\)$`), Yn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
$n(Xt, lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Kn,
  // Deprecated! Use color.formatHex.
  formatHex: Kn,
  formatHex8: us,
  formatHsl: fs,
  formatRgb: Vn,
  toString: Vn
});
function Kn() {
  return this.rgb().formatHex();
}
function us() {
  return this.rgb().formatHex8();
}
function fs() {
  return jr(this).formatHsl();
}
function Vn() {
  return this.rgb().formatRgb();
}
function lt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ns.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Zn(e) : n === 3 ? new z(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Zt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Zt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rs.exec(t)) ? new z(e[1], e[2], e[3], 1) : (e = is.exec(t)) ? new z(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = as.exec(t)) ? Zt(e[1], e[2], e[3], e[4]) : (e = os.exec(t)) ? Zt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ss.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, 1) : (e = cs.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, e[4]) : Yn.hasOwnProperty(t) ? Zn(Yn[t]) : t === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function Zn(t) {
  return new z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Zt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new z(t, e, n, r);
}
function ls(t) {
  return t instanceof Xt || (t = lt(t)), t ? (t = t.rgb(), new z(t.r, t.g, t.b, t.opacity)) : new z();
}
function de(t, e, n, r) {
  return arguments.length === 1 ? ls(t) : new z(t, e, n, r ?? 1);
}
function z(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
$n(z, de, Qr(Xt, {
  brighter(t) {
    return t = t == null ? he : Math.pow(he, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(ft(this.r), ft(this.g), ft(this.b), pe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wn,
  // Deprecated! Use color.formatHex.
  formatHex: Wn,
  formatHex8: hs,
  formatRgb: Jn,
  toString: Jn
}));
function Wn() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function hs() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jn() {
  const t = pe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ft(this.r)}, ${ft(this.g)}, ${ft(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ft(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ut(t) {
  return t = ft(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Qn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new L(t, e, n, r);
}
function jr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xt || (t = lt(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new L(o, s, c, t.opacity);
}
function ds(t, e, n, r) {
  return arguments.length === 1 ? jr(t) : new L(t, e, n, r ?? 1);
}
function L(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
$n(L, ds, Qr(Xt, {
  brighter(t) {
    return t = t == null ? he : Math.pow(he, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new z(
      He(t >= 240 ? t - 240 : t + 120, i, r),
      He(t, i, r),
      He(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(jn(this.h), Wt(this.s), Wt(this.l), pe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${jn(this.h)}, ${Wt(this.s) * 100}%, ${Wt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function jn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function He(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const An = (t) => () => t;
function ps(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function bs(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function gs(t) {
  return (t = +t) == 1 ? ti : function(e, n) {
    return n - e ? bs(e, n, t) : An(isNaN(e) ? n : e);
  };
}
function ti(t, e) {
  var n = e - t;
  return n ? ps(t, n) : An(isNaN(t) ? e : t);
}
const ot = function t(e) {
  var n = gs(e);
  function r(i, a) {
    var o = n((i = de(i)).r, (a = de(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = ti(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ys(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function _s(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ms(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Me(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function ws(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function F(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function vs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Me(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var je = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Be = new RegExp(je.source, "g");
function xs(t) {
  return function() {
    return t;
  };
}
function Ms(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ei(t, e) {
  var n = je.lastIndex = Be.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = je.exec(t)) && (i = Be.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: F(r, i) })), n = Be.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ms(c[0].x) : xs(e) : (e = c.length, function(u) {
    for (var l = 0, f; l < e; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Me(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? An(e) : (n === "number" ? F : n === "string" ? (r = lt(e)) ? (e = r, ot) : ei : e instanceof lt ? ot : e instanceof Date ? ws : _s(e) ? ys : Array.isArray(e) ? ms : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? vs : F)(t, e);
}
function $s(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var tr = 180 / Math.PI, tn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ni(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * tr,
    skewX: Math.atan(c) * tr,
    scaleX: o,
    scaleY: s
  };
}
var Jt;
function As(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? tn : ni(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ts(t) {
  return t == null || (Jt || (Jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jt.setAttribute("transform", t), !(t = Jt.transform.baseVal.consolidate())) ? tn : (t = t.matrix, ni(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ri(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var _ = p.push("translate(", null, e, null, n);
      d.push({ i: _ - 4, x: F(u, f) }, { i: _ - 2, x: F(l, h) });
    } else (f || h) && p.push("translate(" + f + e + h + n);
  }
  function o(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: F(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: F(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: F(u, f) }, { i: _ - 2, x: F(l, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, f, h), o(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(p) {
      for (var d = -1, _ = h.length, v; ++d < _; ) f[(v = h[d]).i] = v.x(p);
      return f.join("");
    };
  };
}
var Ps = ri(As, "px, ", "px)", "deg)"), Ss = ri(Ts, ", ", ")", ")");
function Qt(t, e) {
  e === void 0 && (e = t, t = Me);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Tt = 0, Ot = 0, Et = 0, ii = 1e3, be, zt, ge = 0, ht = 0, $e = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, ai = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ae() {
  return ht || (ai(Es), ht = Lt.now() + $e);
}
function Es() {
  ht = 0;
}
function Dt() {
  this._call = this._time = this._next = null;
}
Dt.prototype = oi.prototype = {
  constructor: Dt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ae() : +n) + (e == null ? 0 : +e), !this._next && zt !== this && (zt ? zt._next = this : be = this, zt = this), this._call = t, this._time = n, en();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, en());
  }
};
function oi(t, e, n) {
  var r = new Dt();
  return r.restart(t, e, n), r;
}
function Ns() {
  Ae(), ++Tt;
  for (var t = be, e; t; )
    (e = ht - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Tt;
}
function er() {
  ht = (ge = Lt.now()) + $e, Tt = Ot = 0;
  try {
    Ns();
  } finally {
    Tt = 0, zs(), ht = 0;
  }
}
function Os() {
  var t = Lt.now(), e = t - ge;
  e > ii && ($e -= e, ge = t);
}
function zs() {
  for (var t, e = be, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : be = n);
  zt = t, en(r);
}
function en(t) {
  if (!Tt) {
    Ot && (Ot = clearTimeout(Ot));
    var e = t - ht;
    e > 24 ? (t < 1 / 0 && (Ot = setTimeout(er, t - Lt.now() - $e)), Et && (Et = clearInterval(Et))) : (Et || (ge = Lt.now(), Et = setInterval(Os, ii)), Tt = 1, ai(er));
  }
}
function nr(t, e, n) {
  var r = new Dt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Is(t, e, n) {
  var r = new Dt(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Ae() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var ks = vn("start", "end", "cancel", "interrupt"), Cs = [], si = 0, rr = 1, nn = 2, ae = 3, ir = 4, rn = 5, oe = 6;
function Te(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  Rs(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ks,
    tween: Cs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: si
  });
}
function Tn(t, e) {
  var n = D(t, e);
  if (n.state > si) throw new Error("too late; already scheduled");
  return n;
}
function K(t, e) {
  var n = D(t, e);
  if (n.state > ae) throw new Error("too late; already running");
  return n;
}
function D(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Rs(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = oi(a, 0, n.time);
  function a(u) {
    n.state = rr, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, f, h, p;
    if (n.state !== rr) return c();
    for (l in r)
      if (p = r[l], p.name === n.name) {
        if (p.state === ae) return nr(o);
        p.state === ir ? (p.state = oe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < e && (p.state = oe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (nr(function() {
      n.state === ae && (n.state = ir, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = nn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === nn) {
      for (n.state = ae, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (p = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = rn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === rn && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = oe, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Fs(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > nn && r.state < rn, r.state = oe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Ls(t) {
  return this.each(function() {
    Fs(this, t);
  });
}
function Ds(t, e) {
  var n, r;
  return function() {
    var i = K(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function qs(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = K(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Hs(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Ds : qs)(n, t, e));
}
function Pn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[e];
  };
}
function ci(t, e) {
  var n;
  return (typeof e == "number" ? F : e instanceof lt ? ot : (n = lt(e)) ? (e = n, ot) : ei)(t, e);
}
function Bs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Gs(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Us(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ys(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Ks(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Vs(t, e) {
  var n = xe(t), r = n === "transform" ? Ss : ci;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Ks : Ys)(n, r, Pn(this, "attr." + t, e)) : e == null ? (n.local ? Xs : Bs)(n) : (n.local ? Us : Gs)(n, r, e));
}
function Zs(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ws(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Js(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Ws(t, a)), n;
  }
  return i._value = e, i;
}
function Qs(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Zs(t, a)), n;
  }
  return i._value = e, i;
}
function js(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = xe(t);
  return this.tween(n, (r.local ? Js : Qs)(r, e));
}
function tc(t, e) {
  return function() {
    Tn(this, t).delay = +e.apply(this, arguments);
  };
}
function ec(t, e) {
  return e = +e, function() {
    Tn(this, t).delay = e;
  };
}
function nc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tc : ec)(e, t)) : D(this.node(), e).delay;
}
function rc(t, e) {
  return function() {
    K(this, t).duration = +e.apply(this, arguments);
  };
}
function ic(t, e) {
  return e = +e, function() {
    K(this, t).duration = e;
  };
}
function ac(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rc : ic)(e, t)) : D(this.node(), e).duration;
}
function oc(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    K(this, t).ease = e;
  };
}
function sc(t) {
  var e = this._id;
  return arguments.length ? this.each(oc(e, t)) : D(this.node(), e).ease;
}
function cc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    K(this, t).ease = n;
  };
}
function uc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(cc(this._id, t));
}
function fc(t) {
  typeof t != "function" && (t = Br(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new tt(r, this._parents, this._name, this._id);
}
function lc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, f = o[s] = new Array(l), h, p = 0; p < l; ++p)
      (h = c[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = e[s];
  return new tt(o, this._parents, this._name, this._id);
}
function hc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function dc(t, e, n) {
  var r, i, a = hc(e) ? Tn : K;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function pc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? D(this.node(), n).on.on(t) : this.each(dc(n, t, e));
}
function bc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function gc() {
  return this.on("end.remove", bc(this._id));
}
function yc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = xn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, Te(u[h], e, n, h, u, D(l, n)));
  return new tt(a, this._parents, e, n);
}
function _c(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Hr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), p, d = D(l, n), _ = 0, v = h.length; _ < v; ++_)
          (p = h[_]) && Te(p, e, n, _, h, d);
        a.push(h), o.push(l);
      }
  return new tt(a, o, e, n);
}
var mc = Bt.prototype.constructor;
function wc() {
  return new mc(this._groups, this._parents);
}
function vc(t, e) {
  var n, r, i;
  return function() {
    var a = At(this, t), o = (this.style.removeProperty(t), At(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function ui(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xc(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = At(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Mc(t, e, n) {
  var r, i, a;
  return function() {
    var o = At(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), At(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function $c(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = K(this, t), u = c.on, l = c.value[a] == null ? s || (s = ui(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function Ac(t, e, n) {
  var r = (t += "") == "transform" ? Ps : ci;
  return e == null ? this.styleTween(t, vc(t, r)).on("end.style." + t, ui(t)) : typeof e == "function" ? this.styleTween(t, Mc(t, r, Pn(this, "style." + t, e))).each($c(this._id, t)) : this.styleTween(t, xc(t, r, e), n).on("end.style." + t, null);
}
function Tc(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Pc(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Tc(t, o, n)), r;
  }
  return a._value = e, a;
}
function Sc(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Pc(t, e, n ?? ""));
}
function Ec(t) {
  return function() {
    this.textContent = t;
  };
}
function Nc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Oc(t) {
  return this.tween("text", typeof t == "function" ? Nc(Pn(this, "text", t)) : Ec(t == null ? "" : t + ""));
}
function zc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ic(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && zc(i)), e;
  }
  return r._value = t, r;
}
function kc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ic(t));
}
function Cc() {
  for (var t = this._name, e = this._id, n = fi(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = D(c, e);
        Te(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new tt(r, this._parents, t, n);
}
function Rc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = K(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var Fc = 0;
function tt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function fi() {
  return ++Fc;
}
var Z = Bt.prototype;
tt.prototype = {
  constructor: tt,
  select: yc,
  selectAll: _c,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: fc,
  merge: lc,
  selection: wc,
  transition: Cc,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: pc,
  attr: Vs,
  attrTween: js,
  style: Ac,
  styleTween: Sc,
  text: Oc,
  textTween: kc,
  remove: gc,
  tween: Hs,
  delay: nc,
  duration: ac,
  ease: sc,
  easeVarying: uc,
  end: Rc,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Lc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Dc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lc
};
function qc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Hc(t) {
  var e, n;
  t instanceof tt ? (e = t._id, t = t._name) : (e = fi(), (n = Dc).time = Ae(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Te(c, t, e, u, o, n || qc(c, e));
  return new tt(r, this._parents, t, e);
}
Bt.prototype.interrupt = Ls;
Bt.prototype.transition = Hc;
const an = Math.PI, on = 2 * an, ct = 1e-6, Bc = on - ct;
function li(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Xc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return li;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class hi {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? li : Xc(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, f = s - n, h = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ct) if (!(Math.abs(f * c - u * l) > ct) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - s, _ = c * c + u * u, v = p * p + d * d, g = Math.sqrt(_), x = Math.sqrt(h), A = a * Math.tan((an - Math.acos((_ + h - v) / (2 * g * x))) / 2), b = A / x, m = A / g;
      Math.abs(b - 1) > ct && this._append`L${e + b * l},${n + b * f}`, this._append`A${a},${a},0,0,${+(f * p > l * d)},${this._x1 = e + m * c},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > ct || Math.abs(this._y1 - l) > ct) && this._append`L${u},${l}`, r && (h < 0 && (h = h % on + on), h > Bc ? this._append`A${r},${r},0,1,${f},${e - s},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > ct && this._append`A${r},${r},0,${+(h >= an)},${f},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new hi();
}
q.prototype = hi.prototype;
function Gc(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ye(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Pt(t) {
  return t = ye(Math.abs(t)), t ? t[1] : NaN;
}
function Uc(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Yc(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Kc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _e(t) {
  if (!(e = Kc.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Sn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
_e.prototype = Sn.prototype;
function Sn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Sn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vc(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var di;
function Zc(t, e) {
  var n = ye(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (di = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + ye(t, Math.max(0, e + a - 1))[0];
}
function ar(t, e) {
  var n = ye(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const or = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Gc,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ar(t * 100, e),
  r: ar,
  s: Zc,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function sr(t) {
  return t;
}
var cr = Array.prototype.map, ur = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Wc(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? sr : Uc(cr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? sr : Yc(cr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = _e(f);
    var h = f.fill, p = f.align, d = f.sign, _ = f.symbol, v = f.zero, g = f.width, x = f.comma, A = f.precision, b = f.trim, m = f.type;
    m === "n" ? (x = !0, m = "g") : or[m] || (A === void 0 && (A = 12), b = !0, m = "g"), (v || h === "0" && p === "=") && (v = !0, h = "0", p = "=");
    var P = _ === "$" ? n : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", E = _ === "$" ? r : /[%p]/.test(m) ? o : "", N = or[m], H = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function V(w) {
      var B = P, O = E, R, Yt, at;
      if (m === "c")
        O = N(w) + O, w = "";
      else {
        w = +w;
        var st = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : N(Math.abs(w), A), b && (w = Vc(w)), st && +w == 0 && d !== "+" && (st = !1), B = (st ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + B, O = (m === "s" ? ur[8 + di / 3] : "") + O + (st && d === "(" ? ")" : ""), H) {
          for (R = -1, Yt = w.length; ++R < Yt; )
            if (at = w.charCodeAt(R), 48 > at || at > 57) {
              O = (at === 46 ? i + w.slice(R + 1) : w.slice(R)) + O, w = w.slice(0, R);
              break;
            }
        }
      }
      x && !v && (w = e(w, 1 / 0));
      var wt = B.length + w.length + O.length, C = wt < g ? new Array(g - wt + 1).join(h) : "";
      switch (x && v && (w = e(C + w, C.length ? g - O.length : 1 / 0), C = ""), p) {
        case "<":
          w = B + w + O + C;
          break;
        case "=":
          w = B + C + w + O;
          break;
        case "^":
          w = C.slice(0, wt = C.length >> 1) + B + w + O + C.slice(wt);
          break;
        default:
          w = C + B + w + O;
          break;
      }
      return a(w);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function l(f, h) {
    var p = u((f = _e(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Pt(h) / 3))) * 3, _ = Math.pow(10, -d), v = ur[8 + d / 3];
    return function(g) {
      return p(_ * g) + v;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var jt, Pe, pi;
Jc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Jc(t) {
  return jt = Wc(t), Pe = jt.format, pi = jt.formatPrefix, jt;
}
function Qc(t) {
  return Math.max(0, -Pt(Math.abs(t)));
}
function jc(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pt(e) / 3))) * 3 - Pt(Math.abs(t)));
}
function tu(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Pt(e) - Pt(t)) + 1;
}
function eu(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function nu(t) {
  return function() {
    return t;
  };
}
function ru(t) {
  return +t;
}
var fr = [0, 1];
function vt(t) {
  return t;
}
function sn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : nu(isNaN(e) ? NaN : 0.5);
}
function iu(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function au(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = sn(i, r), a = n(o, a)) : (r = sn(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function ou(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = sn(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = ia(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function su(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function cu() {
  var t = fr, e = fr, n = Me, r, i, a, o = vt, s, c, u;
  function l() {
    var h = Math.min(t.length, e.length);
    return o !== vt && (o = iu(t[0], t[h - 1])), s = h > 2 ? ou : au, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(t.map(r), e, n)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(e, t.map(r), F)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, ru), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = $s, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : vt, l()) : o !== vt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, l()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, l();
  };
}
function uu() {
  return cu()(vt, vt);
}
function fu(t, e, n, r) {
  var i = ua(t, e, n), a;
  switch (r = _e(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = jc(i, o)) && (r.precision = a), pi(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = tu(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Qc(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pe(r);
}
function lu(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return ca(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return fu(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Ze(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function U() {
  var t = uu();
  return t.copy = function() {
    return su(t, U());
  }, eu.apply(t, arguments), lu(t);
}
var te = de(), hu = Math.PI / 3, du = Math.PI * 2 / 3;
function pu(t) {
  var e;
  return t = (0.5 - t) * Math.PI, te.r = 255 * (e = Math.sin(t)) * e, te.g = 255 * (e = Math.sin(t + hu)) * e, te.b = 255 * (e = Math.sin(t + du)) * e, te + "";
}
function It(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
It.prototype = {
  constructor: It,
  scale: function(t) {
    return t === 1 ? this : new It(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new It(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
It.prototype;
var bi = typeof global == "object" && global && global.Object === Object && global, bu = typeof self == "object" && self && self.Object === Object && self, nt = bi || bu || Function("return this")(), Y = nt.Symbol, gi = Object.prototype, gu = gi.hasOwnProperty, yu = gi.toString, Nt = Y ? Y.toStringTag : void 0;
function _u(t) {
  var e = gu.call(t, Nt), n = t[Nt];
  try {
    t[Nt] = void 0;
    var r = !0;
  } catch {
  }
  var i = yu.call(t);
  return r && (e ? t[Nt] = n : delete t[Nt]), i;
}
var mu = Object.prototype, wu = mu.toString;
function vu(t) {
  return wu.call(t);
}
var xu = "[object Null]", Mu = "[object Undefined]", lr = Y ? Y.toStringTag : void 0;
function yt(t) {
  return t == null ? t === void 0 ? Mu : xu : lr && lr in Object(t) ? _u(t) : vu(t);
}
function dt(t) {
  return t != null && typeof t == "object";
}
var $u = "[object Symbol]";
function Se(t) {
  return typeof t == "symbol" || dt(t) && yt(t) == $u;
}
function Ee(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var k = Array.isArray, hr = Y ? Y.prototype : void 0, dr = hr ? hr.toString : void 0;
function yi(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return Ee(t, yi) + "";
  if (Se(t))
    return dr ? dr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Au = /\s/;
function Tu(t) {
  for (var e = t.length; e-- && Au.test(t.charAt(e)); )
    ;
  return e;
}
var Pu = /^\s+/;
function Su(t) {
  return t && t.slice(0, Tu(t) + 1).replace(Pu, "");
}
function et(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var pr = NaN, Eu = /^[-+]0x[0-9a-f]+$/i, Nu = /^0b[01]+$/i, Ou = /^0o[0-7]+$/i, zu = parseInt;
function Iu(t) {
  if (typeof t == "number")
    return t;
  if (Se(t))
    return pr;
  if (et(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = et(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Su(t);
  var n = Nu.test(t);
  return n || Ou.test(t) ? zu(t.slice(2), n ? 2 : 8) : Eu.test(t) ? pr : +t;
}
var ku = 1 / 0, Cu = 17976931348623157e292;
function Xe(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Iu(t), t === ku || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Cu;
  }
  return t === t ? t : 0;
}
function _i(t) {
  return t;
}
var Ru = "[object AsyncFunction]", Fu = "[object Function]", Lu = "[object GeneratorFunction]", Du = "[object Proxy]";
function mi(t) {
  if (!et(t))
    return !1;
  var e = yt(t);
  return e == Fu || e == Lu || e == Ru || e == Du;
}
var Ge = nt["__core-js_shared__"], br = function() {
  var t = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function qu(t) {
  return !!br && br in t;
}
var Hu = Function.prototype, Bu = Hu.toString;
function _t(t) {
  if (t != null) {
    try {
      return Bu.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Xu = /[\\^$.*+?()[\]{}|]/g, Gu = /^\[object .+?Constructor\]$/, Uu = Function.prototype, Yu = Object.prototype, Ku = Uu.toString, Vu = Yu.hasOwnProperty, Zu = RegExp(
  "^" + Ku.call(Vu).replace(Xu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wu(t) {
  if (!et(t) || qu(t))
    return !1;
  var e = mi(t) ? Zu : Gu;
  return e.test(_t(t));
}
function Ju(t, e) {
  return t == null ? void 0 : t[e];
}
function mt(t, e) {
  var n = Ju(t, e);
  return Wu(n) ? n : void 0;
}
var cn = mt(nt, "WeakMap"), gr = function() {
  try {
    var t = mt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Qu(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var ju = 9007199254740991, tf = /^(?:0|[1-9]\d*)$/;
function Ne(t, e) {
  var n = typeof t;
  return e = e ?? ju, !!e && (n == "number" || n != "symbol" && tf.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function ef(t, e, n) {
  e == "__proto__" && gr ? gr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Oe(t, e) {
  return t === e || t !== t && e !== e;
}
var nf = Object.prototype, rf = nf.hasOwnProperty;
function af(t, e, n) {
  var r = t[e];
  (!(rf.call(t, e) && Oe(r, n)) || n === void 0 && !(e in t)) && ef(t, e, n);
}
var of = 9007199254740991;
function En(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= of;
}
function Gt(t) {
  return t != null && En(t.length) && !mi(t);
}
function sf(t, e, n) {
  if (!et(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Gt(n) && Ne(e, n.length) : r == "string" && e in n) ? Oe(n[e], t) : !1;
}
var cf = Object.prototype;
function wi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || cf;
  return t === n;
}
function uf(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var ff = "[object Arguments]";
function yr(t) {
  return dt(t) && yt(t) == ff;
}
var vi = Object.prototype, lf = vi.hasOwnProperty, hf = vi.propertyIsEnumerable, Nn = yr(/* @__PURE__ */ function() {
  return arguments;
}()) ? yr : function(t) {
  return dt(t) && lf.call(t, "callee") && !hf.call(t, "callee");
};
function df() {
  return !1;
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, _r = xi && typeof module == "object" && module && !module.nodeType && module, pf = _r && _r.exports === xi, mr = pf ? nt.Buffer : void 0, bf = mr ? mr.isBuffer : void 0, un = bf || df, gf = "[object Arguments]", yf = "[object Array]", _f = "[object Boolean]", mf = "[object Date]", wf = "[object Error]", vf = "[object Function]", xf = "[object Map]", Mf = "[object Number]", $f = "[object Object]", Af = "[object RegExp]", Tf = "[object Set]", Pf = "[object String]", Sf = "[object WeakMap]", Ef = "[object ArrayBuffer]", Nf = "[object DataView]", Of = "[object Float32Array]", zf = "[object Float64Array]", If = "[object Int8Array]", kf = "[object Int16Array]", Cf = "[object Int32Array]", Rf = "[object Uint8Array]", Ff = "[object Uint8ClampedArray]", Lf = "[object Uint16Array]", Df = "[object Uint32Array]", M = {};
M[Of] = M[zf] = M[If] = M[kf] = M[Cf] = M[Rf] = M[Ff] = M[Lf] = M[Df] = !0;
M[gf] = M[yf] = M[Ef] = M[_f] = M[Nf] = M[mf] = M[wf] = M[vf] = M[xf] = M[Mf] = M[$f] = M[Af] = M[Tf] = M[Pf] = M[Sf] = !1;
function qf(t) {
  return dt(t) && En(t.length) && !!M[yt(t)];
}
function Hf(t) {
  return function(e) {
    return t(e);
  };
}
var Mi = typeof exports == "object" && exports && !exports.nodeType && exports, kt = Mi && typeof module == "object" && module && !module.nodeType && module, Bf = kt && kt.exports === Mi, Ue = Bf && bi.process, wr = function() {
  try {
    var t = kt && kt.require && kt.require("util").types;
    return t || Ue && Ue.binding && Ue.binding("util");
  } catch {
  }
}(), vr = wr && wr.isTypedArray, $i = vr ? Hf(vr) : qf, Xf = Object.prototype, Gf = Xf.hasOwnProperty;
function Ai(t, e) {
  var n = k(t), r = !n && Nn(t), i = !n && !r && un(t), a = !n && !r && !i && $i(t), o = n || r || i || a, s = o ? uf(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || Gf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ne(u, c))) && s.push(u);
  return s;
}
function Ti(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Uf = Ti(Object.keys, Object), Yf = Object.prototype, Kf = Yf.hasOwnProperty;
function Vf(t) {
  if (!wi(t))
    return Uf(t);
  var e = [];
  for (var n in Object(t))
    Kf.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function ze(t) {
  return Gt(t) ? Ai(t) : Vf(t);
}
function Zf(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Wf = Object.prototype, Jf = Wf.hasOwnProperty;
function Qf(t) {
  if (!et(t))
    return Zf(t);
  var e = wi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Jf.call(t, r)) || n.push(r);
  return n;
}
function jf(t) {
  return Gt(t) ? Ai(t, !0) : Qf(t);
}
var tl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, el = /^\w*$/;
function On(t, e) {
  if (k(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Se(t) ? !0 : el.test(t) || !tl.test(t) || e != null && t in Object(e);
}
var qt = mt(Object, "create");
function nl() {
  this.__data__ = qt ? qt(null) : {}, this.size = 0;
}
function rl(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var il = "__lodash_hash_undefined__", al = Object.prototype, ol = al.hasOwnProperty;
function sl(t) {
  var e = this.__data__;
  if (qt) {
    var n = e[t];
    return n === il ? void 0 : n;
  }
  return ol.call(e, t) ? e[t] : void 0;
}
var cl = Object.prototype, ul = cl.hasOwnProperty;
function fl(t) {
  var e = this.__data__;
  return qt ? e[t] !== void 0 : ul.call(e, t);
}
var ll = "__lodash_hash_undefined__";
function hl(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = qt && e === void 0 ? ll : e, this;
}
function pt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = nl;
pt.prototype.delete = rl;
pt.prototype.get = sl;
pt.prototype.has = fl;
pt.prototype.set = hl;
function dl() {
  this.__data__ = [], this.size = 0;
}
function Ie(t, e) {
  for (var n = t.length; n--; )
    if (Oe(t[n][0], e))
      return n;
  return -1;
}
var pl = Array.prototype, bl = pl.splice;
function gl(t) {
  var e = this.__data__, n = Ie(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : bl.call(e, n, 1), --this.size, !0;
}
function yl(t) {
  var e = this.__data__, n = Ie(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function _l(t) {
  return Ie(this.__data__, t) > -1;
}
function ml(t, e) {
  var n = this.__data__, r = Ie(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function rt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = dl;
rt.prototype.delete = gl;
rt.prototype.get = yl;
rt.prototype.has = _l;
rt.prototype.set = ml;
var Ht = mt(nt, "Map");
function wl() {
  this.size = 0, this.__data__ = {
    hash: new pt(),
    map: new (Ht || rt)(),
    string: new pt()
  };
}
function vl(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ke(t, e) {
  var n = t.__data__;
  return vl(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function xl(t) {
  var e = ke(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ml(t) {
  return ke(this, t).get(t);
}
function $l(t) {
  return ke(this, t).has(t);
}
function Al(t, e) {
  var n = ke(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function it(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = wl;
it.prototype.delete = xl;
it.prototype.get = Ml;
it.prototype.has = $l;
it.prototype.set = Al;
var Tl = "Expected a function";
function zn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Tl);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (zn.Cache || it)(), n;
}
zn.Cache = it;
var Pl = 500;
function Sl(t) {
  var e = zn(t, function(r) {
    return n.size === Pl && n.clear(), r;
  }), n = e.cache;
  return e;
}
var El = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nl = /\\(\\)?/g, Ol = Sl(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(El, function(n, r, i, a) {
    e.push(i ? a.replace(Nl, "$1") : r || n);
  }), e;
});
function Ce(t) {
  return t == null ? "" : yi(t);
}
function Re(t, e) {
  return k(t) ? t : On(t, e) ? [t] : Ol(Ce(t));
}
function Ut(t) {
  if (typeof t == "string" || Se(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function In(t, e) {
  e = Re(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Ut(e[n++])];
  return n && n == r ? t : void 0;
}
function zl(t, e, n) {
  var r = t == null ? void 0 : In(t, e);
  return r === void 0 ? n : r;
}
function kn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var xr = Y ? Y.isConcatSpreadable : void 0;
function Il(t) {
  return k(t) || Nn(t) || !!(xr && t && t[xr]);
}
function kl(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = Il), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? kn(i, s) : i[i.length] = s;
  }
  return i;
}
function Cl(t) {
  var e = t == null ? 0 : t.length;
  return e ? kl(t) : [];
}
var Rl = Ti(Object.getPrototypeOf, Object);
function Fl(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Ll(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, Fl(t, e, n);
}
var Dl = "\\ud800-\\udfff", ql = "\\u0300-\\u036f", Hl = "\\ufe20-\\ufe2f", Bl = "\\u20d0-\\u20ff", Xl = ql + Hl + Bl, Gl = "\\ufe0e\\ufe0f", Ul = "\\u200d", Yl = RegExp("[" + Ul + Dl + Xl + Gl + "]");
function Pi(t) {
  return Yl.test(t);
}
function Kl(t) {
  return t.split("");
}
var Si = "\\ud800-\\udfff", Vl = "\\u0300-\\u036f", Zl = "\\ufe20-\\ufe2f", Wl = "\\u20d0-\\u20ff", Jl = Vl + Zl + Wl, Ql = "\\ufe0e\\ufe0f", jl = "[" + Si + "]", fn = "[" + Jl + "]", ln = "\\ud83c[\\udffb-\\udfff]", th = "(?:" + fn + "|" + ln + ")", Ei = "[^" + Si + "]", Ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", Oi = "[\\ud800-\\udbff][\\udc00-\\udfff]", eh = "\\u200d", zi = th + "?", Ii = "[" + Ql + "]?", nh = "(?:" + eh + "(?:" + [Ei, Ni, Oi].join("|") + ")" + Ii + zi + ")*", rh = Ii + zi + nh, ih = "(?:" + [Ei + fn + "?", fn, Ni, Oi, jl].join("|") + ")", ah = RegExp(ln + "(?=" + ln + ")|" + ih + rh, "g");
function oh(t) {
  return t.match(ah) || [];
}
function sh(t) {
  return Pi(t) ? oh(t) : Kl(t);
}
function ch(t) {
  return function(e) {
    e = Ce(e);
    var n = Pi(e) ? sh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Ll(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var uh = ch("toUpperCase");
function fh(t) {
  return uh(Ce(t).toLowerCase());
}
function lh() {
  this.__data__ = new rt(), this.size = 0;
}
function hh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function dh(t) {
  return this.__data__.get(t);
}
function ph(t) {
  return this.__data__.has(t);
}
var bh = 200;
function gh(t, e) {
  var n = this.__data__;
  if (n instanceof rt) {
    var r = n.__data__;
    if (!Ht || r.length < bh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new it(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function j(t) {
  var e = this.__data__ = new rt(t);
  this.size = e.size;
}
j.prototype.clear = lh;
j.prototype.delete = hh;
j.prototype.get = dh;
j.prototype.has = ph;
j.prototype.set = gh;
function ki(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function Ci() {
  return [];
}
var yh = Object.prototype, _h = yh.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, Ri = Mr ? function(t) {
  return t == null ? [] : (t = Object(t), ki(Mr(t), function(e) {
    return _h.call(t, e);
  }));
} : Ci, mh = Object.getOwnPropertySymbols, wh = mh ? function(t) {
  for (var e = []; t; )
    kn(e, Ri(t)), t = Rl(t);
  return e;
} : Ci;
function Fi(t, e, n) {
  var r = e(t);
  return k(t) ? r : kn(r, n(t));
}
function $r(t) {
  return Fi(t, ze, Ri);
}
function vh(t) {
  return Fi(t, jf, wh);
}
var hn = mt(nt, "DataView"), dn = mt(nt, "Promise"), pn = mt(nt, "Set"), Ar = "[object Map]", xh = "[object Object]", Tr = "[object Promise]", Pr = "[object Set]", Sr = "[object WeakMap]", Er = "[object DataView]", Mh = _t(hn), $h = _t(Ht), Ah = _t(dn), Th = _t(pn), Ph = _t(cn), W = yt;
(hn && W(new hn(new ArrayBuffer(1))) != Er || Ht && W(new Ht()) != Ar || dn && W(dn.resolve()) != Tr || pn && W(new pn()) != Pr || cn && W(new cn()) != Sr) && (W = function(t) {
  var e = yt(t), n = e == xh ? t.constructor : void 0, r = n ? _t(n) : "";
  if (r)
    switch (r) {
      case Mh:
        return Er;
      case $h:
        return Ar;
      case Ah:
        return Tr;
      case Th:
        return Pr;
      case Ph:
        return Sr;
    }
  return e;
});
var Nr = nt.Uint8Array, Sh = "__lodash_hash_undefined__";
function Eh(t) {
  return this.__data__.set(t, Sh), this;
}
function Nh(t) {
  return this.__data__.has(t);
}
function me(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new it(); ++e < n; )
    this.add(t[e]);
}
me.prototype.add = me.prototype.push = Eh;
me.prototype.has = Nh;
function Oh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function zh(t, e) {
  return t.has(e);
}
var Ih = 1, kh = 2;
function Li(t, e, n, r, i, a) {
  var o = n & Ih, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var f = -1, h = !0, p = n & kh ? new me() : void 0;
  for (a.set(t, e), a.set(e, t); ++f < s; ) {
    var d = t[f], _ = e[f];
    if (r)
      var v = o ? r(_, d, f, e, t, a) : r(d, _, f, t, e, a);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Oh(e, function(g, x) {
        if (!zh(p, x) && (d === g || i(d, g, n, r, a)))
          return p.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), h;
}
function Di(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Ch(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Rh = 1, Fh = 2, Lh = "[object Boolean]", Dh = "[object Date]", qh = "[object Error]", Hh = "[object Map]", Bh = "[object Number]", Xh = "[object RegExp]", Gh = "[object Set]", Uh = "[object String]", Yh = "[object Symbol]", Kh = "[object ArrayBuffer]", Vh = "[object DataView]", Or = Y ? Y.prototype : void 0, Ye = Or ? Or.valueOf : void 0;
function Zh(t, e, n, r, i, a, o) {
  switch (n) {
    case Vh:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Kh:
      return !(t.byteLength != e.byteLength || !a(new Nr(t), new Nr(e)));
    case Lh:
    case Dh:
    case Bh:
      return Oe(+t, +e);
    case qh:
      return t.name == e.name && t.message == e.message;
    case Xh:
    case Uh:
      return t == e + "";
    case Hh:
      var s = Di;
    case Gh:
      var c = r & Rh;
      if (s || (s = Ch), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Fh, o.set(t, e);
      var l = Li(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case Yh:
      if (Ye)
        return Ye.call(t) == Ye.call(e);
  }
  return !1;
}
var Wh = 1, Jh = Object.prototype, Qh = Jh.hasOwnProperty;
function jh(t, e, n, r, i, a) {
  var o = n & Wh, s = $r(t), c = s.length, u = $r(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in e : Qh.call(e, h)))
      return !1;
  }
  var p = a.get(t), d = a.get(e);
  if (p && d)
    return p == e && d == t;
  var _ = !0;
  a.set(t, e), a.set(e, t);
  for (var v = o; ++f < c; ) {
    h = s[f];
    var g = t[h], x = e[h];
    if (r)
      var A = o ? r(x, g, h, e, t, a) : r(g, x, h, t, e, a);
    if (!(A === void 0 ? g === x || i(g, x, n, r, a) : A)) {
      _ = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (_ && !v) {
    var b = t.constructor, m = e.constructor;
    b != m && "constructor" in t && "constructor" in e && !(typeof b == "function" && b instanceof b && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(e), _;
}
var td = 1, zr = "[object Arguments]", Ir = "[object Array]", ee = "[object Object]", ed = Object.prototype, kr = ed.hasOwnProperty;
function nd(t, e, n, r, i, a) {
  var o = k(t), s = k(e), c = o ? Ir : W(t), u = s ? Ir : W(e);
  c = c == zr ? ee : c, u = u == zr ? ee : u;
  var l = c == ee, f = u == ee, h = c == u;
  if (h && un(t)) {
    if (!un(e))
      return !1;
    o = !0, l = !1;
  }
  if (h && !l)
    return a || (a = new j()), o || $i(t) ? Li(t, e, n, r, i, a) : Zh(t, e, c, n, r, i, a);
  if (!(n & td)) {
    var p = l && kr.call(t, "__wrapped__"), d = f && kr.call(e, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, v = d ? e.value() : e;
      return a || (a = new j()), i(_, v, n, r, a);
    }
  }
  return h ? (a || (a = new j()), jh(t, e, n, r, i, a)) : !1;
}
function Cn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !dt(t) && !dt(e) ? t !== t && e !== e : nd(t, e, n, r, Cn, i);
}
var rd = 1, id = 2;
function ad(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new j(), f;
      if (!(f === void 0 ? Cn(u, c, rd | id, r, l) : f))
        return !1;
    }
  }
  return !0;
}
function qi(t) {
  return t === t && !et(t);
}
function od(t) {
  for (var e = ze(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, qi(i)];
  }
  return e;
}
function Hi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function sd(t) {
  var e = od(t);
  return e.length == 1 && e[0][2] ? Hi(e[0][0], e[0][1]) : function(n) {
    return n === t || ad(n, t, e);
  };
}
function cd(t, e) {
  return t != null && e in Object(t);
}
function Bi(t, e, n) {
  e = Re(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Ut(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && En(i) && Ne(o, i) && (k(t) || Nn(t)));
}
function ud(t, e) {
  return t != null && Bi(t, e, cd);
}
var fd = 1, ld = 2;
function hd(t, e) {
  return On(t) && qi(e) ? Hi(Ut(t), e) : function(n) {
    var r = zl(n, t);
    return r === void 0 && r === e ? ud(n, t) : Cn(e, r, fd | ld);
  };
}
function dd(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function pd(t) {
  return function(e) {
    return In(e, t);
  };
}
function bd(t) {
  return On(t) ? dd(Ut(t)) : pd(t);
}
function Rn(t) {
  return typeof t == "function" ? t : t == null ? _i : typeof t == "object" ? k(t) ? hd(t[0], t[1]) : sd(t) : bd(t);
}
function gd(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var yd = gd();
function _d(t, e) {
  return t && yd(t, e, ze);
}
function md(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Gt(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Fn = md(_d);
function wd(t) {
  return typeof t == "function" ? t : _i;
}
function bt(t, e) {
  var n = k(t) ? Qu : Fn;
  return n(t, wd(e));
}
function vd(t, e) {
  return Ee(e, function(n) {
    return [n, t[n]];
  });
}
function xd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Md = "[object Map]", $d = "[object Set]";
function Ad(t) {
  return function(e) {
    var n = W(e);
    return n == Md ? Di(e) : n == $d ? xd(e) : vd(e, t(e));
  };
}
var Xi = Ad(ze);
function Td(t, e) {
  var n = [];
  return Fn(t, function(r, i, a) {
    e(r, i, a) && n.push(r);
  }), n;
}
function xt(t, e) {
  var n = k(t) ? ki : Td;
  return n(t, Rn(e));
}
function Pd(t, e) {
  var n = -1, r = Gt(t) ? Array(t.length) : [];
  return Fn(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function St(t, e) {
  var n = k(t) ? Ee : Pd;
  return n(t, Rn(e));
}
var Sd = Object.prototype, Ed = Sd.hasOwnProperty;
function Nd(t, e) {
  return t != null && Ed.call(t, e);
}
function Gi(t, e) {
  return t != null && Bi(t, e, Nd);
}
var Od = "[object Boolean]";
function zd(t) {
  return t === !0 || t === !1 || dt(t) && yt(t) == Od;
}
function Id(t, e, n, r) {
  if (!et(t))
    return t;
  e = Re(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Ut(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = et(l) ? l : Ne(e[i + 1]) ? [] : {});
    }
    af(s, c, u), s = s[c];
  }
  return t;
}
function kd(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = In(t, o);
    n(s, o) && Id(a, Re(o, t), s);
  }
  return a;
}
function Ui(t, e) {
  if (t == null)
    return {};
  var n = Ee(vh(t), function(r) {
    return [r];
  });
  return e = Rn(e), kd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Cd = Math.ceil, Rd = Math.max;
function Fd(t, e, n, r) {
  for (var i = -1, a = Rd(Cd((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Ld(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && sf(e, n, r) && (n = r = void 0), e = Xe(e), n === void 0 ? (n = e, e = 0) : n = Xe(n), r = r === void 0 ? e < n ? 1 : -1 : Xe(r), Fd(e, n, r);
  };
}
var we = Ld();
function Dd() {
  var t = arguments, e = Ce(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
const qd = (t, e, n = 12, r = 12) => {
  const i = U().domain([0, n]).range([0, t]), a = U().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return we((n + 1) * (r + 1)).map(function(c) {
        return { m: c % (n + 1), n: Math.floor(c / (n + 1)), x: i(c % (n + 1)), y: a(Math.floor(c / (n + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const l = Cl(St(u, function(f) {
        return St(
          c,
          function(h) {
            return { x: i(h), y: a(f) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Hd = "_widget_18g36_1", Bd = "_label_18g36_19", Xd = "_lit_18g36_24", Gd = "_button_18g36_29", Ud = "_symbol_18g36_29", Yd = "_radio_18g36_29", Kd = "_radiobutton_18g36_29", Vd = "_selected_18g36_35", Zd = "_toggle_18g36_35", Wd = "_slider_18g36_44", Jd = "_track_18g36_44", Qd = "_track_overlay_18g36_48", jd = "_handle_18g36_55", y = {
  widget: Hd,
  label: Bd,
  lit: Xd,
  button: Gd,
  symbol: Ud,
  radio: Yd,
  radiobutton: Kd,
  selected: Vd,
  toggle: Zd,
  slider: Wd,
  track: Jd,
  track_overlay: Qd,
  handle: jd
}, Ln = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Dn = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, t0 = (t = 1) => {
  const e = q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, e0 = (t = 1) => {
  const e = q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, n0 = (t = 1) => {
  const e = q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, r0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, i0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, a0 = (t = 1) => {
  const e = q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, o0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, s0 = (t = 1) => {
  var e = q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, c0 = (t = 1) => {
  const e = q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, bn = (t) => {
  switch (t) {
    case "play":
      return t0;
    case "forward":
      return e0;
    case "back":
      return n0;
    case "pause":
      return r0;
    case "reload":
      return i0;
    case "capture":
      return a0;
    case "rewind":
      return o0;
    case "stop":
      return s0;
    case "push":
      return c0;
  }
}, qn = () => {
  const t = "button";
  var e = Ln(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, l = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % l.length, u(), S(this.parentNode).select("." + y.symbol).attr("d", bn(l[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % l.length, u(), d.select("#button_" + e).select("." + y.symbol).attr("d", bn(l[f])(r * n));
    }
  };
}, u0 = () => {
  const t = "slider", e = Pe(".3f");
  var n = Ln(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, l = function(g) {
  }, f = function(g) {
  }, h = [0, 1], p = 0, d = null, _ = U().domain(h).range([0, r]).clamp(!0);
  const v = function(g, x, A = h) {
    const b = g.select("#slider_" + n);
    _.domain(A), p = x, b.selectAll("." + y.handle).transition().attr("cx", _(x)), o && b.select("." + y.label).text(d + " = " + e(p)), l(), f();
  };
  return {
    type: t,
    scale: _,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return l = g, this;
      l(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: v,
    click: v
  };
}, f0 = () => {
  const t = "toggle";
  var e = Ln(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(f) {
  }, c = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    click: function() {
      c = !c;
      const f = S(this.parentNode);
      f.select("." + y.handle).transition().attr("cx", c ? 2 * n : 0), f.classed(y.selected, c), s();
    },
    reset: function(f, h) {
      c = h;
      const p = f.select("#toggle_" + e);
      p.selectAll("." + y.handle).transition().attr("cx", c ? 2 * n : 0), p.classed(y.selected, c), s();
    }
  };
}, l0 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = S(a).attr("class", y.widget + " " + y.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(y.lit, !0), S(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(y.lit, !1), S(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), o.append("path").attr("d", bn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const c = Dn(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Yi = (t, e) => {
  const n = q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, h0 = (t, e) => {
  const n = Pe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(c).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Yi(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", y.track_overlay).on("click", function(d) {
    const _ = Je(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
  }).call(
    es().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var l, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Kt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Kt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Kt([t.girth() / 2, t.knob()]) + 7 : -Kt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", y.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + f + ")"), c;
}, d0 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(o).attr("class", y.widget + " " + y.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Yi(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Dn(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, p0 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = fa(o), c = U().domain([0, o - 1]).range([0, t.size()]), u = U().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(l).attr("class", y.widget + " " + y.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (v) => "b" + v).attr("transform", (v) => t.orientation() == "vertical" ? "translate(0," + u(v) + ")" : "translate(" + c(v) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), p.attr("class", y.background).on("mouseover", function() {
    S(this).classed(y.lit, !0), S(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(y.lit, !1), S(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), d.attr("class", y.symbol), d.filter((v) => v == t.value()).classed(y.selected, !0), h.on("click", t.click);
  const _ = Dn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", y.label).text(function(v, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), l;
}, Ke = (t, e) => {
  switch (t.type) {
    case "button":
      return l0(t);
    case "slider":
      return h0(t);
    case "radio":
      return p0(t);
    case "toggle":
      return d0(t);
  }
}, b0 = (t, e) => {
  const n = qd(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = S("#" + t).classed("explorable " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height);
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && a.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && a.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: n };
}, T = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_knob: 14,
    slider_girth: 12,
    slider_anchor: { x: 1, y: 4 },
    toggle_anchor: { x: 1.5, y: 11.5 },
    toggle_gap: 6,
    toggle_label_pos: "right",
    playbutton_size: 100,
    playbutton_anchor: { x: 3, y: 1.5 },
    backbutton_anchor: { x: 10, y: 1.5 },
    resetbutton_anchor: { x: 8, y: 1.5 }
  },
  simulation: {
    delay: 10,
    color_fixed: "darkred",
    color_free: "rgb(120,120,120)",
    colormap: "sinebow",
    color_period: 1e3
  }
}, $ = {
  N: 300,
  dt: 1,
  L: 64,
  agentsize: 0.5,
  speed: {
    range: [0, 1.4],
    default: 0.8
  },
  wiggle: {
    range: [0, 1],
    default: 0.8
  },
  attraction: {
    range: [0, 0.5],
    default: 0.1
  },
  twist: {
    range: [0, 0.5],
    default: 0
  },
  twist_mix: {
    range: [0, 1],
    default: 0
  },
  hide_particles: {
    default: !1
  },
  orlis_switch: {
    default: !1
  }
}, Ki = (t) => St(
  Xi(t),
  (e) => {
    e[1].id = e[0], Gi(e[1], "label") || (e[1].label = Dd(fh(e[0]), /_/g, " "));
  }
), Vi = (t) => St(Xi(t), (e) => e[1]), Zi = (t, e) => bt(t, (n, r) => n.widget = e[r]), g0 = (t) => Ui(t, (e) => Gi(e, "range")), y0 = (t) => Ui(t, (e) => zd(e.default));
U().domain([0, 360]).range([0, 2 * Math.PI]);
U().range([0, 360]).domain([0, 2 * Math.PI]);
const Ve = (t, e) => {
  const n = t.x - e.x, r = t.y - e.y;
  return Math.sqrt(n * n + r * r);
}, Hn = g0($), Bn = y0($);
Ki(Hn);
Ki(Bn);
const Wi = Vi(Hn), Ji = Vi(Bn), se = St(
  Wi,
  (t) => u0().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size).girth(T.widgets.slider_girth).knob(T.widgets.slider_knob)
), ce = St(
  Ji,
  (t) => f0().id(t.id).label(t.label).value(t.default)
);
Zi(Ji, ce);
Zi(Wi, se);
const Q = qn().actions(["play", "pause"]).id("play"), Fe = qn().actions(["back"]), Le = qn().actions(["rewind"]), _0 = [Q, Fe, Le], m0 = (t, e) => {
  const n = e.position(T.widgets.slider_anchor.x, we(se.length).map((i) => T.widgets.slider_anchor.y + T.widgets.slider_gap * i)), r = e.position(
    we(ce.length).map(
      (i) => T.widgets.toggle_anchor.x + T.widgets.toggle_gap * i
    ),
    T.widgets.toggle_anchor.y
  );
  se.forEach((i, a) => i.position(n[a])), ce.forEach((i, a) => i.position(r[a]).labelposition(T.widgets.toggle_label_pos)), Q.position(e.position(T.widgets.playbutton_anchor.x, T.widgets.playbutton_anchor.y)).size(T.widgets.playbutton_size), Le.position(e.position(T.widgets.backbutton_anchor.x, T.widgets.backbutton_anchor.y)), Fe.position(e.position(T.widgets.resetbutton_anchor.x, T.widgets.resetbutton_anchor.y)), t.selectAll(null).data(se).enter().append(Ke), t.selectAll(null).data(ce).enter().append(Ke), t.selectAll(null).data(_0).enter().append(Ke);
}, w0 = (t) => {
  bt(Hn, (e) => e.widget.reset(t, e.default)), bt(Bn, (e) => e.widget.reset(t, e.default));
}, J = $.L, v0 = $.N, gn = $.dt, Cr = { x: 0, y: 0 }, Rr = Math.sqrt(gn);
var gt = [];
const x0 = () => {
  const t = Math.random() * 2 * Math.PI;
  gt.push({
    x: J * Math.cos(t),
    y: J * Math.sin(t),
    state: 1,
    polarity: Math.random()
  });
}, M0 = () => {
  $.timer = {}, $.tick = 0, gt = we(v0).map(function(t, e) {
    return {
      x: 2 * J * (Math.random() - 0.5),
      y: 2 * J * (Math.random() - 0.5),
      state: 1,
      polarity: Math.random()
    };
  }), gt.push({ x: 0, y: 0, state: 0, t: 0 });
}, $0 = () => {
  $.tick++;
  const t = $.speed.widget.value(), e = $.attraction.widget.value(), n = $.wiggle.widget.value(), r = $.twist.widget.value(), i = xt(gt, (o) => o.state == 1), a = xt(gt, (o) => o.state == 0);
  return bt(i, (o) => {
    const s = o.polarity < $.twist_mix.widget.value() ? 1 : -1, c = Ve(o, Cr);
    let u = t * gn * ((-e * o.x + s * r * o.y) / c) + n * (Math.random() - 0.5) * Rr * Math.sqrt(t), l = t * gn * ((-e * o.y - s * r * o.x) / c) + n * (Math.random() - 0.5) * Rr * Math.sqrt(t), f = o.x + u, h = o.y + l;
    (f < -J || f > J) && (u *= -1), (h < -J || h > J) && (l *= -1), o.x += u, o.y += l;
  }), bt(i, (o) => {
    xt(a, (c) => Ve(o, c) < 2 * $.agentsize * 0.9).length > 0 && (o.state = 0, o.t = $.tick, x0());
  }), xt(a, (o) => Ve(o, Cr) > J - 3).length > 0;
}, ne = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, A0 = {
  roma: Qt(ot, ne.romaO),
  vik: Qt(ot, ne.vikO),
  broc: Qt(ot, ne.brocO),
  bam: Qt(ot, ne.bamO),
  sinebow: pu
}, ve = $.L;
$.N;
const yn = U().domain([-ve, ve]), _n = U().domain([-ve, ve]), T0 = A0[T.simulation.colormap];
var mn, wn, X, ue;
const Xn = () => {
  X.clearRect(0, 0, mn, wn);
  const t = xt(gt, (r) => r.state == 0), e = xt(gt, (r) => r.state == 1), n = ue.display_size.width / (2 * $.L);
  $.hide_particles.widget.value() == !1 && bt(e, (r) => {
    X.beginPath(), X.arc(yn(r.x), _n(r.y), $.agentsize * n, 0, 2 * Math.PI, !1), X.fillStyle = T.simulation.color_free, X.fill();
  }), bt(t, (r) => {
    X.beginPath(), X.arc(yn(r.x), _n(r.y), $.agentsize * n, 0, 2 * Math.PI, !1), X.fillStyle = $.orlis_switch.widget.value() ? T0(r.t % T.simulation.color_period / T.simulation.color_period) : T.simulation.color_fixed, X.fill();
  });
}, P0 = (t, e) => {
  ue = e, mn = ue.display_size.width, wn = ue.display_size.height, yn.range([0, mn]), _n.range([0, wn]), X = t.node().getContext("2d"), Xn();
}, S0 = (t, e) => {
  Xn();
}, E0 = (t, e) => {
  Xn();
};
function N0(t, e, n) {
  let r = !1;
  r = $0(), S0(), r && (e.select("#button_play").transition(1e3).style("opacity", 0), e.select("#button_play").style("pointer-events", "none"), Q.press(e));
}
function Qi(t, e, n) {
  e.select("#button_play").transition(1e3).style("opacity", 1), e.select("#button_play").style("pointer-events", null), M0(), P0(t, n);
}
function Fr(t, e) {
  E0();
}
var Lr = {};
const O0 = (t, e, n) => {
  Q.value() == 1 ? Lr = Is(() => N0(t, e), T.simulation.delay) : Lr.stop();
}, z0 = (t, e, n) => {
  Le.update(() => w0(e)), Q.update(() => O0(t, e)), Fe.update(() => Qi(t, e, n)), $.hide_particles.widget.update(() => Fr()), $.orlis_switch.widget.update(() => Fr());
}, I0 = {
  name: "@explorables/particularly_stuck",
  title: "Particularly Stuck",
  subtitle: "Diffusion Limited Aggregation",
  description: "This explorable illustrates a model for fractal growth patterns in natural systems based on the aggregation of randomly moving particles.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function k0(t, e = ji) {
  const n = b0(t, e), r = n.display, i = n.controls, a = n.grid;
  return m0(i, a), z0(r, i, e), Qi(r, i, e), {
    halt() {
      Q.value() === 1 && Q.press(i);
    },
    reset() {
      Q.value() === 1 && Q.press(i), Le.press(i), Fe.press(i);
    },
    config: e,
    meta: I0
  };
}
export {
  ji as config,
  k0 as default,
  k0 as load,
  I0 as meta
};
