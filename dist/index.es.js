(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_19jk0_1,._controlPanel_19jk0_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_19jk0_1>canvas,._displayPanel_19jk0_1>svg,._controlPanel_19jk0_8>svg,._controlPanel_19jk0_8>canvas{display:block;box-sizing:border-box}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Du = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Qe(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Lu(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Eo(t) {
  let e, n, r;
  t.length !== 2 ? (e = Qe, n = (s, c) => Qe(t(s), c), r = (s, c) => t(s) - c) : (e = t === Qe || t === Lu ? t : qu, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function qu() {
  return 0;
}
function Xu(t) {
  return t === null ? NaN : +t;
}
const Bu = Eo(Qe), Hu = Bu.right;
Eo(Xu).center;
const Uu = Math.sqrt(50), Yu = Math.sqrt(10), Gu = Math.sqrt(2);
function fn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Uu ? 10 : a >= Yu ? 5 : a >= Gu ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? fn(t, e, n * 2) : [s, c, u];
}
function Vu(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? fn(e, t, n) : fn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function wr(t, e, n) {
  return e = +e, t = +t, n = +n, fn(t, e, n)[2];
}
function Ku(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? wr(e, t, n) : wr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Wu = { value: () => {
} };
function Oo() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new tn(n);
}
function tn(t) {
  this._ = t;
}
function Zu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
tn.prototype = Oo.prototype = {
  constructor: tn,
  on: function(t, e) {
    var n = this._, r = Zu(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Ju(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Bi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Bi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new tn(t);
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
function Ju(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Bi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Wu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var xr = "http://www.w3.org/1999/xhtml";
const Hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function zn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Hi.hasOwnProperty(e) ? { space: Hi[e], local: t } : t;
}
function Qu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === xr && e.documentElement.namespaceURI === xr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function tc(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function zo(t) {
  var e = zn(t);
  return (e.local ? tc : Qu)(e);
}
function ec() {
}
function ai(t) {
  return t == null ? ec : function() {
    return this.querySelector(t);
  };
}
function nc(t) {
  typeof t != "function" && (t = ai(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new D(r, this._parents);
}
function rc(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ic() {
  return [];
}
function Co(t) {
  return t == null ? ic : function() {
    return this.querySelectorAll(t);
  };
}
function ac(t) {
  return function() {
    return rc(t.apply(this, arguments));
  };
}
function oc(t) {
  typeof t == "function" ? t = ac(t) : t = Co(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new D(r, i);
}
function Io(t) {
  return function() {
    return this.matches(t);
  };
}
function Ro(t) {
  return function(e) {
    return e.matches(t);
  };
}
var sc = Array.prototype.find;
function uc(t) {
  return function() {
    return sc.call(this.children, t);
  };
}
function cc() {
  return this.firstElementChild;
}
function lc(t) {
  return this.select(t == null ? cc : uc(typeof t == "function" ? t : Ro(t)));
}
var fc = Array.prototype.filter;
function hc() {
  return Array.from(this.children);
}
function dc(t) {
  return function() {
    return fc.call(this.children, t);
  };
}
function pc(t) {
  return this.selectAll(t == null ? hc : dc(typeof t == "function" ? t : Ro(t)));
}
function gc(t) {
  typeof t != "function" && (t = Io(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new D(r, this._parents);
}
function jo(t) {
  return new Array(t.length);
}
function yc() {
  return new D(this._enter || this._groups.map(jo), this._parents);
}
function hn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
hn.prototype = {
  constructor: hn,
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
function bc(t) {
  return function() {
    return t;
  };
}
function _c(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new hn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function vc(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new hn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function mc(t) {
  return t.__data__;
}
function wc(t, e) {
  if (!arguments.length) return Array.from(this, mc);
  var n = e ? vc : _c, r = this._parents, i = this._groups;
  typeof t != "function" && (t = bc(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = xc(t.call(l, l && l.__data__, u, r)), g = d.length, b = s[u] = new Array(g), m = o[u] = new Array(g), w = c[u] = new Array(f);
    n(l, h, b, m, w, d, e);
    for (var p = 0, M = 0, y, v; p < g; ++p)
      if (y = b[p]) {
        for (p >= M && (M = p + 1); !(v = m[M]) && ++M < g; ) ;
        y._next = v || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = c, o;
}
function xc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Mc() {
  return new D(this._exit || this._groups.map(jo), this._parents);
}
function Ac(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function $c(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new D(s, this._parents);
}
function Nc() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Tc(t) {
  t || (t = Sc);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new D(i, this._parents).order();
}
function Sc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function kc() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Pc() {
  return Array.from(this);
}
function Ec() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Oc() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function zc() {
  return !this.node();
}
function Cc(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ic(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Rc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function jc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Fc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Dc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Lc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function qc(t, e) {
  var n = zn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Rc : Ic : typeof e == "function" ? n.local ? Lc : Dc : n.local ? Fc : jc)(n, e));
}
function Fo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Xc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Bc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Hc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Uc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Xc : typeof e == "function" ? Hc : Bc)(t, e, n ?? "")) : Wt(this.node(), t);
}
function Wt(t, e) {
  return t.style.getPropertyValue(e) || Fo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Yc(t) {
  return function() {
    delete this[t];
  };
}
function Gc(t, e) {
  return function() {
    this[t] = e;
  };
}
function Vc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Kc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Yc : typeof e == "function" ? Vc : Gc)(t, e)) : this.node()[t];
}
function Do(t) {
  return t.trim().split(/^|\s+/);
}
function oi(t) {
  return t.classList || new Lo(t);
}
function Lo(t) {
  this._node = t, this._names = Do(t.getAttribute("class") || "");
}
Lo.prototype = {
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
function qo(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Xo(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Wc(t) {
  return function() {
    qo(this, t);
  };
}
function Zc(t) {
  return function() {
    Xo(this, t);
  };
}
function Jc(t, e) {
  return function() {
    (e.apply(this, arguments) ? qo : Xo)(this, t);
  };
}
function Qc(t, e) {
  var n = Do(t + "");
  if (arguments.length < 2) {
    for (var r = oi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Jc : e ? Wc : Zc)(n, e));
}
function tl() {
  this.textContent = "";
}
function el(t) {
  return function() {
    this.textContent = t;
  };
}
function nl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function rl(t) {
  return arguments.length ? this.each(t == null ? tl : (typeof t == "function" ? nl : el)(t)) : this.node().textContent;
}
function il() {
  this.innerHTML = "";
}
function al(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ol(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function sl(t) {
  return arguments.length ? this.each(t == null ? il : (typeof t == "function" ? ol : al)(t)) : this.node().innerHTML;
}
function ul() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cl() {
  return this.each(ul);
}
function ll() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fl() {
  return this.each(ll);
}
function hl(t) {
  var e = typeof t == "function" ? t : zo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function dl() {
  return null;
}
function pl(t, e) {
  var n = typeof t == "function" ? t : zo(t), r = e == null ? dl : typeof e == "function" ? e : ai(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function gl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function yl() {
  return this.each(gl);
}
function bl() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function _l() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function vl(t) {
  return this.select(t ? _l : bl);
}
function ml(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function wl(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function xl(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Ml(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Al(t, e, n) {
  return function() {
    var r = this.__on, i, a = wl(e);
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
function $l(t, e, n) {
  var r = xl(t + ""), i, a = r.length, o;
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
  for (s = e ? Al : Ml, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Bo(t, e, n) {
  var r = Fo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Nl(t, e) {
  return function() {
    return Bo(this, t, e);
  };
}
function Tl(t, e) {
  return function() {
    return Bo(this, t, e.apply(this, arguments));
  };
}
function Sl(t, e) {
  return this.each((typeof e == "function" ? Tl : Nl)(t, e));
}
function* kl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Ho = [null];
function D(t, e) {
  this._groups = t, this._parents = e;
}
function Ee() {
  return new D([[document.documentElement]], Ho);
}
function Pl() {
  return this;
}
D.prototype = Ee.prototype = {
  constructor: D,
  select: nc,
  selectAll: oc,
  selectChild: lc,
  selectChildren: pc,
  filter: gc,
  data: wc,
  enter: yc,
  exit: Mc,
  join: Ac,
  merge: $c,
  selection: Pl,
  order: Nc,
  sort: Tc,
  call: kc,
  nodes: Pc,
  node: Ec,
  size: Oc,
  empty: zc,
  each: Cc,
  attr: qc,
  style: Uc,
  property: Kc,
  classed: Qc,
  text: rl,
  html: sl,
  raise: cl,
  lower: fl,
  append: hl,
  insert: pl,
  remove: yl,
  clone: vl,
  datum: ml,
  on: $l,
  dispatch: Sl,
  [Symbol.iterator]: kl
};
function El(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], Ho);
}
function si(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Uo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Oe() {
}
var ve = 0.7, dn = 1 / ve, Gt = "\\s*([+-]?\\d+)\\s*", me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ol = /^#([0-9a-f]{3,8})$/, zl = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), Cl = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), Il = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${me}\\)$`), Rl = new RegExp(`^rgba\\(${et},${et},${et},${me}\\)$`), jl = new RegExp(`^hsl\\(${me},${et},${et}\\)$`), Fl = new RegExp(`^hsla\\(${me},${et},${et},${me}\\)$`), Ui = {
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
si(Oe, Et, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: Dl,
  formatHsl: Ll,
  formatRgb: Gi,
  toString: Gi
});
function Yi() {
  return this.rgb().formatHex();
}
function Dl() {
  return this.rgb().formatHex8();
}
function Ll() {
  return Yo(this).formatHsl();
}
function Gi() {
  return this.rgb().formatRgb();
}
function Et(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ol.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Vi(e) : n === 3 ? new R(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Fe(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Fe(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = zl.exec(t)) ? new R(e[1], e[2], e[3], 1) : (e = Cl.exec(t)) ? new R(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Il.exec(t)) ? Fe(e[1], e[2], e[3], e[4]) : (e = Rl.exec(t)) ? Fe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = jl.exec(t)) ? Zi(e[1], e[2] / 100, e[3] / 100, 1) : (e = Fl.exec(t)) ? Zi(e[1], e[2] / 100, e[3] / 100, e[4]) : Ui.hasOwnProperty(t) ? Vi(Ui[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Vi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Fe(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new R(t, e, n, r);
}
function ql(t) {
  return t instanceof Oe || (t = Et(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function pn(t, e, n, r) {
  return arguments.length === 1 ? ql(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
si(R, pn, Uo(Oe, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ve : Math.pow(ve, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(kt(this.r), kt(this.g), kt(this.b), gn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ki,
  // Deprecated! Use color.formatHex.
  formatHex: Ki,
  formatHex8: Xl,
  formatRgb: Wi,
  toString: Wi
}));
function Ki() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}`;
}
function Xl() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}${Tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wi() {
  const t = gn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${kt(this.r)}, ${kt(this.g)}, ${kt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function gn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function kt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Tt(t) {
  return t = kt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Zi(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new V(t, e, n, r);
}
function Yo(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof Oe || (t = Et(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new V(o, s, c, t.opacity);
}
function Bl(t, e, n, r) {
  return arguments.length === 1 ? Yo(t) : new V(t, e, n, r ?? 1);
}
function V(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
si(V, Bl, Uo(Oe, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ve : Math.pow(ve, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new R(
      or(t >= 240 ? t - 240 : t + 120, i, r),
      or(t, i, r),
      or(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(Ji(this.h), De(this.s), De(this.l), gn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = gn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ji(this.h)}, ${De(this.s) * 100}%, ${De(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ji(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function De(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function or(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ui = (t) => () => t;
function Hl(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ul(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Yl(t) {
  return (t = +t) == 1 ? Go : function(e, n) {
    return n - e ? Ul(e, n, t) : ui(isNaN(e) ? n : e);
  };
}
function Go(t, e) {
  var n = e - t;
  return n ? Hl(t, n) : ui(isNaN(t) ? e : t);
}
const Mt = function t(e) {
  var n = Yl(e);
  function r(i, a) {
    var o = n((i = pn(i)).r, (a = pn(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Go(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Gl(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Vl(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Kl(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Cn(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Wl(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Y(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Zl(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Cn(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Mr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sr = new RegExp(Mr.source, "g");
function Jl(t) {
  return function() {
    return t;
  };
}
function Ql(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Vo(t, e) {
  var n = Mr.lastIndex = sr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Mr.exec(t)) && (i = sr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Y(r, i) })), n = sr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ql(c[0].x) : Jl(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function Cn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ui(e) : (n === "number" ? Y : n === "string" ? (r = Et(e)) ? (e = r, Mt) : Vo : e instanceof Et ? Mt : e instanceof Date ? Wl : Vl(e) ? Gl : Array.isArray(e) ? Kl : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Zl : Y)(t, e);
}
function tf(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Qi = 180 / Math.PI, Ar = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ko(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Qi,
    skewX: Math.atan(c) * Qi,
    scaleX: o,
    scaleY: s
  };
}
var Le;
function ef(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ar : Ko(e.a, e.b, e.c, e.d, e.e, e.f);
}
function nf(t) {
  return t == null || (Le || (Le = document.createElementNS("http://www.w3.org/2000/svg", "g")), Le.setAttribute("transform", t), !(t = Le.transform.baseVal.consolidate())) ? Ar : (t = t.matrix, Ko(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Wo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var b = d.push("translate(", null, e, null, n);
      g.push({ i: b - 4, x: Y(u, h) }, { i: b - 2, x: Y(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: b - 4, x: Y(u, h) }, { i: b - 2, x: Y(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, b = f.length, m; ++g < b; ) h[(m = f[g]).i] = m.x(d);
      return h.join("");
    };
  };
}
var rf = Wo(ef, "px, ", "px)", "deg)"), af = Wo(nf, ", ", ")", ")");
function qe(t, e) {
  e === void 0 && (e = t, t = Cn);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Zt = 0, fe = 0, se = 0, Zo = 1e3, yn, he, bn = 0, Ot = 0, In = 0, we = typeof performance == "object" && performance.now ? performance : Date, Jo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Rn() {
  return Ot || (Jo(of), Ot = we.now() + In);
}
function of() {
  Ot = 0;
}
function xe() {
  this._call = this._time = this._next = null;
}
xe.prototype = Qo.prototype = {
  constructor: xe,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Rn() : +n) + (e == null ? 0 : +e), !this._next && he !== this && (he ? he._next = this : yn = this, he = this), this._call = t, this._time = n, $r();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $r());
  }
};
function Qo(t, e, n) {
  var r = new xe();
  return r.restart(t, e, n), r;
}
function sf() {
  Rn(), ++Zt;
  for (var t = yn, e; t; )
    (e = Ot - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Zt;
}
function ta() {
  Ot = (bn = we.now()) + In, Zt = fe = 0;
  try {
    sf();
  } finally {
    Zt = 0, cf(), Ot = 0;
  }
}
function uf() {
  var t = we.now(), e = t - bn;
  e > Zo && (In -= e, bn = t);
}
function cf() {
  for (var t, e = yn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : yn = n);
  he = t, $r(r);
}
function $r(t) {
  if (!Zt) {
    fe && (fe = clearTimeout(fe));
    var e = t - Ot;
    e > 24 ? (t < 1 / 0 && (fe = setTimeout(ta, t - we.now() - In)), se && (se = clearInterval(se))) : (se || (bn = we.now(), se = setInterval(uf, Zo)), Zt = 1, Jo(ta));
  }
}
function ea(t, e, n) {
  var r = new xe();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function lf(t, e, n) {
  var r = new xe(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Rn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var ff = Oo("start", "end", "cancel", "interrupt"), hf = [], ts = 0, na = 1, Nr = 2, en = 3, ra = 4, Tr = 5, nn = 6;
function jn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  df(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ff,
    tween: hf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ts
  });
}
function ci(t, e) {
  var n = Z(t, e);
  if (n.state > ts) throw new Error("too late; already scheduled");
  return n;
}
function it(t, e) {
  var n = Z(t, e);
  if (n.state > en) throw new Error("too late; already running");
  return n;
}
function Z(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function df(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Qo(a, 0, n.time);
  function a(u) {
    n.state = na, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== na) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === en) return ea(o);
        d.state === ra ? (d.state = nn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = nn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ea(function() {
      n.state === en && (n.state = ra, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Nr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Nr) {
      for (n.state = en, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Tr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Tr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = nn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function pf(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Nr && r.state < Tr, r.state = nn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function gf(t) {
  return this.each(function() {
    pf(this, t);
  });
}
function yf(t, e) {
  var n, r;
  return function() {
    var i = it(this, t), a = i.tween;
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
function bf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = it(this, t), o = a.tween;
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
function _f(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? yf : bf)(n, t, e));
}
function li(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[e];
  };
}
function es(t, e) {
  var n;
  return (typeof e == "number" ? Y : e instanceof Et ? Mt : (n = Et(e)) ? (e = n, Mt) : Vo)(t, e);
}
function vf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function mf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function xf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Mf(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Af(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function $f(t, e) {
  var n = zn(t), r = n === "transform" ? af : es;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Af : Mf)(n, r, li(this, "attr." + t, e)) : e == null ? (n.local ? mf : vf)(n) : (n.local ? xf : wf)(n, r, e));
}
function Nf(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Tf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Sf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Tf(t, a)), n;
  }
  return i._value = e, i;
}
function kf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Nf(t, a)), n;
  }
  return i._value = e, i;
}
function Pf(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = zn(t);
  return this.tween(n, (r.local ? Sf : kf)(r, e));
}
function Ef(t, e) {
  return function() {
    ci(this, t).delay = +e.apply(this, arguments);
  };
}
function Of(t, e) {
  return e = +e, function() {
    ci(this, t).delay = e;
  };
}
function zf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ef : Of)(e, t)) : Z(this.node(), e).delay;
}
function Cf(t, e) {
  return function() {
    it(this, t).duration = +e.apply(this, arguments);
  };
}
function If(t, e) {
  return e = +e, function() {
    it(this, t).duration = e;
  };
}
function Rf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Cf : If)(e, t)) : Z(this.node(), e).duration;
}
function jf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    it(this, t).ease = e;
  };
}
function Ff(t) {
  var e = this._id;
  return arguments.length ? this.each(jf(e, t)) : Z(this.node(), e).ease;
}
function Df(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    it(this, t).ease = n;
  };
}
function Lf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Df(this._id, t));
}
function qf(t) {
  typeof t != "function" && (t = Io(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new dt(r, this._parents, this._name, this._id);
}
function Xf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new dt(o, this._parents, this._name, this._id);
}
function Bf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Hf(t, e, n) {
  var r, i, a = Bf(e) ? ci : it;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function Uf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Z(this.node(), n).on.on(t) : this.each(Hf(n, t, e));
}
function Yf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Gf() {
  return this.on("end.remove", Yf(this._id));
}
function Vf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ai(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, jn(u[f], e, n, f, u, Z(l, n)));
  return new dt(a, this._parents, e, n);
}
function Kf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Co(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = Z(l, n), b = 0, m = f.length; b < m; ++b)
          (d = f[b]) && jn(d, e, n, b, f, g);
        a.push(f), o.push(l);
      }
  return new dt(a, o, e, n);
}
var Wf = Ee.prototype.constructor;
function Zf() {
  return new Wf(this._groups, this._parents);
}
function Jf(t, e) {
  var n, r, i;
  return function() {
    var a = Wt(this, t), o = (this.style.removeProperty(t), Wt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function ns(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Wt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function th(t, e, n) {
  var r, i, a;
  return function() {
    var o = Wt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Wt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function eh(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = it(this, t), u = c.on, l = c.value[a] == null ? s || (s = ns(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function nh(t, e, n) {
  var r = (t += "") == "transform" ? rf : es;
  return e == null ? this.styleTween(t, Jf(t, r)).on("end.style." + t, ns(t)) : typeof e == "function" ? this.styleTween(t, th(t, r, li(this, "style." + t, e))).each(eh(this._id, t)) : this.styleTween(t, Qf(t, r, e), n).on("end.style." + t, null);
}
function rh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ih(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && rh(t, o, n)), r;
  }
  return a._value = e, a;
}
function ah(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, ih(t, e, n ?? ""));
}
function oh(t) {
  return function() {
    this.textContent = t;
  };
}
function sh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function uh(t) {
  return this.tween("text", typeof t == "function" ? sh(li(this, "text", t)) : oh(t == null ? "" : t + ""));
}
function ch(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function lh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && ch(i)), e;
  }
  return r._value = t, r;
}
function fh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, lh(t));
}
function hh() {
  for (var t = this._name, e = this._id, n = rs(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = Z(c, e);
        jn(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new dt(r, this._parents, t, n);
}
function dh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = it(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var ph = 0;
function dt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function rs() {
  return ++ph;
}
var ot = Ee.prototype;
dt.prototype = {
  constructor: dt,
  select: Vf,
  selectAll: Kf,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: qf,
  merge: Xf,
  selection: Zf,
  transition: hh,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: Uf,
  attr: $f,
  attrTween: Pf,
  style: nh,
  styleTween: ah,
  text: uh,
  textTween: fh,
  remove: Gf,
  tween: _f,
  delay: zf,
  duration: Rf,
  ease: Ff,
  easeVarying: Lf,
  end: dh,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function gh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var yh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gh
};
function bh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function _h(t) {
  var e, n;
  t instanceof dt ? (e = t._id, t = t._name) : (e = rs(), (n = yh).time = Rn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && jn(c, t, e, u, o, n || bh(c, e));
  return new dt(r, this._parents, t, e);
}
Ee.prototype.interrupt = gf;
Ee.prototype.transition = _h;
function vh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function _n(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Jt(t) {
  return t = _n(Math.abs(t)), t ? t[1] : NaN;
}
function mh(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function wh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var xh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vn(t) {
  if (!(e = xh.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new fi({
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
vn.prototype = fi.prototype;
function fi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Mh(t) {
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
var is;
function Ah(t, e) {
  var n = _n(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (is = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + _n(t, Math.max(0, e + a - 1))[0];
}
function ia(t, e) {
  var n = _n(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const aa = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: vh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ia(t * 100, e),
  r: ia,
  s: Ah,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function oa(t) {
  return t;
}
var sa = Array.prototype.map, ua = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $h(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? oa : mh(sa.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? oa : wh(sa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = vn(h);
    var f = h.fill, d = h.align, g = h.sign, b = h.symbol, m = h.zero, w = h.width, p = h.comma, M = h.precision, y = h.trim, v = h.type;
    v === "n" ? (p = !0, v = "g") : aa[v] || (M === void 0 && (M = 12), y = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var S = b === "$" ? n : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = b === "$" ? r : /[%p]/.test(v) ? o : "", O = aa[v], q = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(_) {
      var z = S, A = P, C, $t, F;
      if (v === "c")
        A = O(_) + A, _ = "";
      else {
        _ = +_;
        var B = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : O(Math.abs(_), M), y && (_ = Mh(_)), B && +_ == 0 && g !== "+" && (B = !1), z = (B ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + z, A = (v === "s" ? ua[8 + is / 3] : "") + A + (B && g === "(" ? ")" : ""), q) {
          for (C = -1, $t = _.length; ++C < $t; )
            if (F = _.charCodeAt(C), 48 > F || F > 57) {
              A = (F === 46 ? i + _.slice(C + 1) : _.slice(C)) + A, _ = _.slice(0, C);
              break;
            }
        }
      }
      p && !m && (_ = e(_, 1 / 0));
      var U = z.length + _.length + A.length, E = U < w ? new Array(w - U + 1).join(f) : "";
      switch (p && m && (_ = e(E + _, E.length ? w - A.length : 1 / 0), E = ""), d) {
        case "<":
          _ = z + _ + A + E;
          break;
        case "=":
          _ = z + E + _ + A;
          break;
        case "^":
          _ = E.slice(0, U = E.length >> 1) + z + _ + A + E.slice(U);
          break;
        default:
          _ = E + z + _ + A;
          break;
      }
      return a(_);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function l(h, f) {
    var d = u((h = vn(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(Jt(f) / 3))) * 3, b = Math.pow(10, -g), m = ua[8 + g / 3];
    return function(w) {
      return d(b * w) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Xe, as, os;
Nh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Nh(t) {
  return Xe = $h(t), as = Xe.format, os = Xe.formatPrefix, Xe;
}
function Th(t) {
  return Math.max(0, -Jt(Math.abs(t)));
}
function Sh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Jt(e) / 3))) * 3 - Jt(Math.abs(t)));
}
function kh(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Jt(e) - Jt(t)) + 1;
}
function Ph(t, e) {
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
function Eh(t) {
  return function() {
    return t;
  };
}
function Oh(t) {
  return +t;
}
var ca = [0, 1];
function Ht(t) {
  return t;
}
function Sr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Eh(isNaN(e) ? NaN : 0.5);
}
function zh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Ch(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Sr(i, r), a = n(o, a)) : (r = Sr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Ih(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Sr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Hu(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Rh(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function jh() {
  var t = ca, e = ca, n = Cn, r, i, a, o = Ht, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Ht && (o = zh(t[0], t[f - 1])), s = f > 2 ? Ih : Ch, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), Y)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Oh), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = tf, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ht, l()) : o !== Ht;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Fh() {
  return jh()(Ht, Ht);
}
function Dh(t, e, n, r) {
  var i = Ku(t, e, n), a;
  switch (r = vn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Sh(i, o)) && (r.precision = a), os(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = kh(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Th(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return as(r);
}
function Lh(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Vu(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Dh(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = wr(o, s, n), u === c)
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
function ze() {
  var t = Fh();
  return t.copy = function() {
    return Rh(t, ze());
  }, Ph.apply(t, arguments), Lh(t);
}
var Be = pn(), qh = Math.PI / 3, Xh = Math.PI * 2 / 3;
function Bh(t) {
  var e;
  return t = (0.5 - t) * Math.PI, Be.r = 255 * (e = Math.sin(t)) * e, Be.g = 255 * (e = Math.sin(t + qh)) * e, Be.b = 255 * (e = Math.sin(t + Xh)) * e, Be + "";
}
function de(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
de.prototype = {
  constructor: de,
  scale: function(t) {
    return t === 1 ? this : new de(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new de(this.k, this.x + this.k * t, this.y + this.k * e);
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
de.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function rn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ss(t) {
  let e, n, r;
  t.length !== 2 ? (e = rn, n = (s, c) => rn(t(s), c), r = (s, c) => t(s) - c) : (e = t === rn || t === Hh ? t : Uh, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Uh() {
  return 0;
}
function Yh(t) {
  return t === null ? NaN : +t;
}
const Gh = ss(rn), Vh = Gh.right;
ss(Yh).center;
const Kh = Math.sqrt(50), Wh = Math.sqrt(10), Zh = Math.sqrt(2);
function mn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Kh ? 10 : a >= Wh ? 5 : a >= Zh ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? mn(t, e, n * 2) : [s, c, u];
}
function Jh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? mn(e, t, n) : mn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function kr(t, e, n) {
  return e = +e, t = +t, n = +n, mn(t, e, n)[2];
}
function Qh(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? kr(e, t, n) : kr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function He(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function td(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ed = { value: () => {
} };
function hi() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new an(n);
}
function an(t) {
  this._ = t;
}
function nd(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
an.prototype = hi.prototype = {
  constructor: an,
  on: function(t, e) {
    var n = this._, r = nd(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = rd(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = la(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = la(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new an(t);
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
function rd(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function la(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ed, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Pr = "http://www.w3.org/1999/xhtml";
const fa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), fa.hasOwnProperty(e) ? { space: fa[e], local: t } : t;
}
function id(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Pr && e.documentElement.namespaceURI === Pr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function ad(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function us(t) {
  var e = Fn(t);
  return (e.local ? ad : id)(e);
}
function od() {
}
function di(t) {
  return t == null ? od : function() {
    return this.querySelector(t);
  };
}
function sd(t) {
  typeof t != "function" && (t = di(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new L(r, this._parents);
}
function ud(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function cd() {
  return [];
}
function cs(t) {
  return t == null ? cd : function() {
    return this.querySelectorAll(t);
  };
}
function ld(t) {
  return function() {
    return ud(t.apply(this, arguments));
  };
}
function fd(t) {
  typeof t == "function" ? t = ld(t) : t = cs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new L(r, i);
}
function ls(t) {
  return function() {
    return this.matches(t);
  };
}
function fs(t) {
  return function(e) {
    return e.matches(t);
  };
}
var hd = Array.prototype.find;
function dd(t) {
  return function() {
    return hd.call(this.children, t);
  };
}
function pd() {
  return this.firstElementChild;
}
function gd(t) {
  return this.select(t == null ? pd : dd(typeof t == "function" ? t : fs(t)));
}
var yd = Array.prototype.filter;
function bd() {
  return Array.from(this.children);
}
function _d(t) {
  return function() {
    return yd.call(this.children, t);
  };
}
function vd(t) {
  return this.selectAll(t == null ? bd : _d(typeof t == "function" ? t : fs(t)));
}
function md(t) {
  typeof t != "function" && (t = ls(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new L(r, this._parents);
}
function hs(t) {
  return new Array(t.length);
}
function wd() {
  return new L(this._enter || this._groups.map(hs), this._parents);
}
function wn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
wn.prototype = {
  constructor: wn,
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
function xd(t) {
  return function() {
    return t;
  };
}
function Md(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new wn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function Ad(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new wn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function $d(t) {
  return t.__data__;
}
function Nd(t, e) {
  if (!arguments.length) return Array.from(this, $d);
  var n = e ? Ad : Md, r = this._parents, i = this._groups;
  typeof t != "function" && (t = xd(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = Td(t.call(l, l && l.__data__, u, r)), g = d.length, b = s[u] = new Array(g), m = o[u] = new Array(g), w = c[u] = new Array(f);
    n(l, h, b, m, w, d, e);
    for (var p = 0, M = 0, y, v; p < g; ++p)
      if (y = b[p]) {
        for (p >= M && (M = p + 1); !(v = m[M]) && ++M < g; ) ;
        y._next = v || null;
      }
  }
  return o = new L(o, r), o._enter = s, o._exit = c, o;
}
function Td(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Sd() {
  return new L(this._exit || this._groups.map(hs), this._parents);
}
function kd(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Pd(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, g = 0; g < h; ++g)
      (d = u[g] || l[g]) && (f[g] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new L(s, this._parents);
}
function Ed() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Od(t) {
  t || (t = zd);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new L(i, this._parents).order();
}
function zd(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Cd() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Id() {
  return Array.from(this);
}
function Rd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function jd() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Fd() {
  return !this.node();
}
function Dd(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ld(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Xd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Bd(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Hd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ud(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Yd(t, e) {
  var n = Fn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? qd : Ld : typeof e == "function" ? n.local ? Ud : Hd : n.local ? Bd : Xd)(n, e));
}
function ds(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Gd(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Vd(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Kd(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Wd(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Gd : typeof e == "function" ? Kd : Vd)(t, e, n ?? "")) : Qt(this.node(), t);
}
function Qt(t, e) {
  return t.style.getPropertyValue(e) || ds(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Zd(t) {
  return function() {
    delete this[t];
  };
}
function Jd(t, e) {
  return function() {
    this[t] = e;
  };
}
function Qd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function t0(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Zd : typeof e == "function" ? Qd : Jd)(t, e)) : this.node()[t];
}
function ps(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new gs(t);
}
function gs(t) {
  this._node = t, this._names = ps(t.getAttribute("class") || "");
}
gs.prototype = {
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
function ys(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function bs(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function e0(t) {
  return function() {
    ys(this, t);
  };
}
function n0(t) {
  return function() {
    bs(this, t);
  };
}
function r0(t, e) {
  return function() {
    (e.apply(this, arguments) ? ys : bs)(this, t);
  };
}
function i0(t, e) {
  var n = ps(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? r0 : e ? e0 : n0)(n, e));
}
function a0() {
  this.textContent = "";
}
function o0(t) {
  return function() {
    this.textContent = t;
  };
}
function s0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function u0(t) {
  return arguments.length ? this.each(t == null ? a0 : (typeof t == "function" ? s0 : o0)(t)) : this.node().textContent;
}
function c0() {
  this.innerHTML = "";
}
function l0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function f0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function h0(t) {
  return arguments.length ? this.each(t == null ? c0 : (typeof t == "function" ? f0 : l0)(t)) : this.node().innerHTML;
}
function d0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function p0() {
  return this.each(d0);
}
function g0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function y0() {
  return this.each(g0);
}
function b0(t) {
  var e = typeof t == "function" ? t : us(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function _0() {
  return null;
}
function v0(t, e) {
  var n = typeof t == "function" ? t : us(t), r = e == null ? _0 : typeof e == "function" ? e : di(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function m0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function w0() {
  return this.each(m0);
}
function x0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function M0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function A0(t) {
  return this.select(t ? M0 : x0);
}
function $0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function N0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function T0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function S0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function k0(t, e, n) {
  return function() {
    var r = this.__on, i, a = N0(e);
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
function P0(t, e, n) {
  var r = T0(t + ""), i, a = r.length, o;
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
  for (s = e ? k0 : S0, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function _s(t, e, n) {
  var r = ds(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function E0(t, e) {
  return function() {
    return _s(this, t, e);
  };
}
function O0(t, e) {
  return function() {
    return _s(this, t, e.apply(this, arguments));
  };
}
function z0(t, e) {
  return this.each((typeof e == "function" ? O0 : E0)(t, e));
}
function* C0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var vs = [null];
function L(t, e) {
  this._groups = t, this._parents = e;
}
function Ce() {
  return new L([[document.documentElement]], vs);
}
function I0() {
  return this;
}
L.prototype = Ce.prototype = {
  constructor: L,
  select: sd,
  selectAll: fd,
  selectChild: gd,
  selectChildren: vd,
  filter: md,
  data: Nd,
  enter: wd,
  exit: Sd,
  join: kd,
  merge: Pd,
  selection: I0,
  order: Ed,
  sort: Od,
  call: Cd,
  nodes: Id,
  node: Rd,
  size: jd,
  empty: Fd,
  each: Dd,
  attr: Yd,
  style: Wd,
  property: t0,
  classed: i0,
  text: u0,
  html: h0,
  raise: p0,
  lower: y0,
  append: b0,
  insert: v0,
  remove: w0,
  clone: A0,
  datum: $0,
  on: P0,
  dispatch: z0,
  [Symbol.iterator]: C0
};
function I(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], vs);
}
function R0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function ha(t, e) {
  if (t = R0(t), e === void 0 && (e = t.currentTarget), e) {
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
const j0 = { passive: !1 }, Me = { capture: !0, passive: !1 };
function ur(t) {
  t.stopImmediatePropagation();
}
function Vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function F0(t) {
  var e = t.document.documentElement, n = I(t).on("dragstart.drag", Vt, Me);
  "onselectstart" in e ? n.on("selectstart.drag", Vt, Me) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function D0(t, e) {
  var n = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Vt, Me), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ue = (t) => () => t;
function Er(t, {
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
Er.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function L0(t) {
  return !t.ctrlKey && !t.button;
}
function q0() {
  return this.parentNode;
}
function X0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function B0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function H0() {
  var t = L0, e = q0, n = X0, r = B0, i = {}, a = hi("start", "drag", "end"), o = 0, s, c, u, l, h = 0;
  function f(y) {
    y.on("mousedown.drag", d).filter(r).on("touchstart.drag", m).on("touchmove.drag", w, j0).on("touchend.drag touchcancel.drag", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(y, v) {
    if (!(l || !t.call(this, y, v))) {
      var S = M(this, e.call(this, y, v), y, v, "mouse");
      S && (I(y.view).on("mousemove.drag", g, Me).on("mouseup.drag", b, Me), F0(y.view), ur(y), u = !1, s = y.clientX, c = y.clientY, S("start", y));
    }
  }
  function g(y) {
    if (Vt(y), !u) {
      var v = y.clientX - s, S = y.clientY - c;
      u = v * v + S * S > h;
    }
    i.mouse("drag", y);
  }
  function b(y) {
    I(y.view).on("mousemove.drag mouseup.drag", null), D0(y.view, u), Vt(y), i.mouse("end", y);
  }
  function m(y, v) {
    if (t.call(this, y, v)) {
      var S = y.changedTouches, P = e.call(this, y, v), O = S.length, q, X;
      for (q = 0; q < O; ++q)
        (X = M(this, P, y, v, S[q].identifier, S[q])) && (ur(y), X("start", y, S[q]));
    }
  }
  function w(y) {
    var v = y.changedTouches, S = v.length, P, O;
    for (P = 0; P < S; ++P)
      (O = i[v[P].identifier]) && (Vt(y), O("drag", y, v[P]));
  }
  function p(y) {
    var v = y.changedTouches, S = v.length, P, O;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), P = 0; P < S; ++P)
      (O = i[v[P].identifier]) && (ur(y), O("end", y, v[P]));
  }
  function M(y, v, S, P, O, q) {
    var X = a.copy(), _ = ha(q || S, v), z, A, C;
    if ((C = n.call(y, new Er("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: O,
      active: o,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), P)) != null)
      return z = C.x - _[0] || 0, A = C.y - _[1] || 0, function $t(F, B, U) {
        var E = _, ar;
        switch (F) {
          case "start":
            i[O] = $t, ar = o++;
            break;
          case "end":
            delete i[O], --o;
          // falls through
          case "drag":
            _ = ha(U || B, v), ar = o;
            break;
        }
        X.call(
          F,
          y,
          new Er(F, {
            sourceEvent: B,
            subject: C,
            target: f,
            identifier: O,
            active: ar,
            x: _[0] + z,
            y: _[1] + A,
            dx: _[0] - E[0],
            dy: _[1] - E[1],
            dispatch: X
          }),
          P
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Ue(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ue(y), f) : e;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ue(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ue(!!y), f) : r;
  }, f.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function gi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ms(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ie() {
}
var Ae = 0.7, xn = 1 / Ae, Kt = "\\s*([+-]?\\d+)\\s*", $e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", U0 = /^#([0-9a-f]{3,8})$/, Y0 = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), G0 = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), V0 = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${$e}\\)$`), K0 = new RegExp(`^rgba\\(${nt},${nt},${nt},${$e}\\)$`), W0 = new RegExp(`^hsl\\(${$e},${nt},${nt}\\)$`), Z0 = new RegExp(`^hsla\\(${$e},${nt},${nt},${$e}\\)$`), da = {
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
gi(Ie, zt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pa,
  // Deprecated! Use color.formatHex.
  formatHex: pa,
  formatHex8: J0,
  formatHsl: Q0,
  formatRgb: ga,
  toString: ga
});
function pa() {
  return this.rgb().formatHex();
}
function J0() {
  return this.rgb().formatHex8();
}
function Q0() {
  return ws(this).formatHsl();
}
function ga() {
  return this.rgb().formatRgb();
}
function zt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = U0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ya(e) : n === 3 ? new j(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ye(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ye(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Y0.exec(t)) ? new j(e[1], e[2], e[3], 1) : (e = G0.exec(t)) ? new j(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = V0.exec(t)) ? Ye(e[1], e[2], e[3], e[4]) : (e = K0.exec(t)) ? Ye(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = W0.exec(t)) ? va(e[1], e[2] / 100, e[3] / 100, 1) : (e = Z0.exec(t)) ? va(e[1], e[2] / 100, e[3] / 100, e[4]) : da.hasOwnProperty(t) ? ya(da[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function ya(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ye(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new j(t, e, n, r);
}
function tp(t) {
  return t instanceof Ie || (t = zt(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function Or(t, e, n, r) {
  return arguments.length === 1 ? tp(t) : new j(t, e, n, r ?? 1);
}
function j(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
gi(j, Or, ms(Ie, {
  brighter(t) {
    return t = t == null ? xn : Math.pow(xn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Pt(this.r), Pt(this.g), Pt(this.b), Mn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ba,
  // Deprecated! Use color.formatHex.
  formatHex: ba,
  formatHex8: ep,
  formatRgb: _a,
  toString: _a
}));
function ba() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}`;
}
function ep() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}${St((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _a() {
  const t = Mn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pt(this.r)}, ${Pt(this.g)}, ${Pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Mn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function St(t) {
  return t = Pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function va(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new K(t, e, n, r);
}
function ws(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ie || (t = zt(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new K(o, s, c, t.opacity);
}
function np(t, e, n, r) {
  return arguments.length === 1 ? ws(t) : new K(t, e, n, r ?? 1);
}
function K(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
gi(K, np, ms(Ie, {
  brighter(t) {
    return t = t == null ? xn : Math.pow(xn, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new j(
      cr(t >= 240 ? t - 240 : t + 120, i, r),
      cr(t, i, r),
      cr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(ma(this.h), Ge(this.s), Ge(this.l), Mn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Mn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ma(this.h)}, ${Ge(this.s) * 100}%, ${Ge(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ma(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ge(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const yi = (t) => () => t;
function rp(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ip(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ap(t) {
  return (t = +t) == 1 ? xs : function(e, n) {
    return n - e ? ip(e, n, t) : yi(isNaN(e) ? n : e);
  };
}
function xs(t, e) {
  var n = e - t;
  return n ? rp(t, n) : yi(isNaN(t) ? e : t);
}
const An = function t(e) {
  var n = ap(e);
  function r(i, a) {
    var o = n((i = Or(i)).r, (a = Or(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = xs(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function op(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function sp(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function up(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = bi(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function cp(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function G(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function lp(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = bi(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, lr = new RegExp(zr.source, "g");
function fp(t) {
  return function() {
    return t;
  };
}
function hp(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ms(t, e) {
  var n = zr.lastIndex = lr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = zr.exec(t)) && (i = lr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: G(r, i) })), n = lr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? hp(c[0].x) : fp(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function bi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? yi(e) : (n === "number" ? G : n === "string" ? (r = zt(e)) ? (e = r, An) : Ms : e instanceof zt ? An : e instanceof Date ? cp : sp(e) ? op : Array.isArray(e) ? up : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? lp : G)(t, e);
}
function dp(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var wa = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $s(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * wa,
    skewX: Math.atan(c) * wa,
    scaleX: o,
    scaleY: s
  };
}
var Ve;
function pp(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? As : $s(e.a, e.b, e.c, e.d, e.e, e.f);
}
function gp(t) {
  return t == null || (Ve || (Ve = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ve.setAttribute("transform", t), !(t = Ve.transform.baseVal.consolidate())) ? As : (t = t.matrix, $s(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ns(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var b = d.push("translate(", null, e, null, n);
      g.push({ i: b - 4, x: G(u, h) }, { i: b - 2, x: G(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: G(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: G(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, g) {
    if (u !== h || l !== f) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: b - 4, x: G(u, h) }, { i: b - 2, x: G(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var g = -1, b = f.length, m; ++g < b; ) h[(m = f[g]).i] = m.x(d);
      return h.join("");
    };
  };
}
var yp = Ns(pp, "px, ", "px)", "deg)"), bp = Ns(gp, ", ", ")", ")"), te = 0, pe = 0, ue = 0, Ts = 1e3, $n, ge, Nn = 0, Ct = 0, Dn = 0, Ne = typeof performance == "object" && performance.now ? performance : Date, Ss = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function _i() {
  return Ct || (Ss(_p), Ct = Ne.now() + Dn);
}
function _p() {
  Ct = 0;
}
function Tn() {
  this._call = this._time = this._next = null;
}
Tn.prototype = ks.prototype = {
  constructor: Tn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? _i() : +n) + (e == null ? 0 : +e), !this._next && ge !== this && (ge ? ge._next = this : $n = this, ge = this), this._call = t, this._time = n, Cr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cr());
  }
};
function ks(t, e, n) {
  var r = new Tn();
  return r.restart(t, e, n), r;
}
function vp() {
  _i(), ++te;
  for (var t = $n, e; t; )
    (e = Ct - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --te;
}
function xa() {
  Ct = (Nn = Ne.now()) + Dn, te = pe = 0;
  try {
    vp();
  } finally {
    te = 0, wp(), Ct = 0;
  }
}
function mp() {
  var t = Ne.now(), e = t - Nn;
  e > Ts && (Dn -= e, Nn = t);
}
function wp() {
  for (var t, e = $n, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : $n = n);
  ge = t, Cr(r);
}
function Cr(t) {
  if (!te) {
    pe && (pe = clearTimeout(pe));
    var e = t - Ct;
    e > 24 ? (t < 1 / 0 && (pe = setTimeout(xa, t - Ne.now() - Dn)), ue && (ue = clearInterval(ue))) : (ue || (Nn = Ne.now(), ue = setInterval(mp, Ts)), te = 1, Ss(xa));
  }
}
function Ma(t, e, n) {
  var r = new Tn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var xp = hi("start", "end", "cancel", "interrupt"), Mp = [], Ps = 0, Aa = 1, Ir = 2, on = 3, $a = 4, Rr = 5, sn = 6;
function Ln(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  Ap(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: xp,
    tween: Mp,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ps
  });
}
function vi(t, e) {
  var n = J(t, e);
  if (n.state > Ps) throw new Error("too late; already scheduled");
  return n;
}
function at(t, e) {
  var n = J(t, e);
  if (n.state > on) throw new Error("too late; already running");
  return n;
}
function J(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Ap(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ks(a, 0, n.time);
  function a(u) {
    n.state = Aa, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== Aa) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === on) return Ma(o);
        d.state === $a ? (d.state = sn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = sn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Ma(function() {
      n.state === on && (n.state = $a, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ir, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ir) {
      for (n.state = on, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Rr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Rr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = sn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function $p(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Ir && r.state < Rr, r.state = sn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Np(t) {
  return this.each(function() {
    $p(this, t);
  });
}
function Tp(t, e) {
  var n, r;
  return function() {
    var i = at(this, t), a = i.tween;
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
function Sp(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = at(this, t), o = a.tween;
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
function kp(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Tp : Sp)(n, t, e));
}
function mi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[e];
  };
}
function Es(t, e) {
  var n;
  return (typeof e == "number" ? G : e instanceof zt ? An : (n = zt(e)) ? (e = n, An) : Ms)(t, e);
}
function Pp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ep(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Op(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function zp(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Cp(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Ip(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Rp(t, e) {
  var n = Fn(t), r = n === "transform" ? bp : Es;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Ip : Cp)(n, r, mi(this, "attr." + t, e)) : e == null ? (n.local ? Ep : Pp)(n) : (n.local ? zp : Op)(n, r, e));
}
function jp(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Fp(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Dp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Fp(t, a)), n;
  }
  return i._value = e, i;
}
function Lp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && jp(t, a)), n;
  }
  return i._value = e, i;
}
function qp(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Fn(t);
  return this.tween(n, (r.local ? Dp : Lp)(r, e));
}
function Xp(t, e) {
  return function() {
    vi(this, t).delay = +e.apply(this, arguments);
  };
}
function Bp(t, e) {
  return e = +e, function() {
    vi(this, t).delay = e;
  };
}
function Hp(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Xp : Bp)(e, t)) : J(this.node(), e).delay;
}
function Up(t, e) {
  return function() {
    at(this, t).duration = +e.apply(this, arguments);
  };
}
function Yp(t, e) {
  return e = +e, function() {
    at(this, t).duration = e;
  };
}
function Gp(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Up : Yp)(e, t)) : J(this.node(), e).duration;
}
function Vp(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    at(this, t).ease = e;
  };
}
function Kp(t) {
  var e = this._id;
  return arguments.length ? this.each(Vp(e, t)) : J(this.node(), e).ease;
}
function Wp(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    at(this, t).ease = n;
  };
}
function Zp(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Wp(this._id, t));
}
function Jp(t) {
  typeof t != "function" && (t = ls(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new pt(r, this._parents, this._name, this._id);
}
function Qp(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new pt(o, this._parents, this._name, this._id);
}
function tg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function eg(t, e, n) {
  var r, i, a = tg(e) ? vi : at;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function ng(t, e) {
  var n = this._id;
  return arguments.length < 2 ? J(this.node(), n).on.on(t) : this.each(eg(n, t, e));
}
function rg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ig() {
  return this.on("end.remove", rg(this._id));
}
function ag(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = di(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Ln(u[f], e, n, f, u, J(l, n)));
  return new pt(a, this._parents, e, n);
}
function og(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = cs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, g = J(l, n), b = 0, m = f.length; b < m; ++b)
          (d = f[b]) && Ln(d, e, n, b, f, g);
        a.push(f), o.push(l);
      }
  return new pt(a, o, e, n);
}
var sg = Ce.prototype.constructor;
function ug() {
  return new sg(this._groups, this._parents);
}
function cg(t, e) {
  var n, r, i;
  return function() {
    var a = Qt(this, t), o = (this.style.removeProperty(t), Qt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Os(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function lg(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Qt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function fg(t, e, n) {
  var r, i, a;
  return function() {
    var o = Qt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Qt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function hg(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = at(this, t), u = c.on, l = c.value[a] == null ? s || (s = Os(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function dg(t, e, n) {
  var r = (t += "") == "transform" ? yp : Es;
  return e == null ? this.styleTween(t, cg(t, r)).on("end.style." + t, Os(t)) : typeof e == "function" ? this.styleTween(t, fg(t, r, mi(this, "style." + t, e))).each(hg(this._id, t)) : this.styleTween(t, lg(t, r, e), n).on("end.style." + t, null);
}
function pg(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function gg(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && pg(t, o, n)), r;
  }
  return a._value = e, a;
}
function yg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, gg(t, e, n ?? ""));
}
function bg(t) {
  return function() {
    this.textContent = t;
  };
}
function _g(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function vg(t) {
  return this.tween("text", typeof t == "function" ? _g(mi(this, "text", t)) : bg(t == null ? "" : t + ""));
}
function mg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function wg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && mg(i)), e;
  }
  return r._value = t, r;
}
function xg(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, wg(t));
}
function Mg() {
  for (var t = this._name, e = this._id, n = zs(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = J(c, e);
        Ln(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new pt(r, this._parents, t, n);
}
function Ag() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = at(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var $g = 0;
function pt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function zs() {
  return ++$g;
}
var st = Ce.prototype;
pt.prototype = {
  constructor: pt,
  select: ag,
  selectAll: og,
  selectChild: st.selectChild,
  selectChildren: st.selectChildren,
  filter: Jp,
  merge: Qp,
  selection: ug,
  transition: Mg,
  call: st.call,
  nodes: st.nodes,
  node: st.node,
  size: st.size,
  empty: st.empty,
  each: st.each,
  on: ng,
  attr: Rp,
  attrTween: qp,
  style: dg,
  styleTween: yg,
  text: vg,
  textTween: xg,
  remove: ig,
  tween: kp,
  delay: Hp,
  duration: Gp,
  ease: Kp,
  easeVarying: Zp,
  end: Ag,
  [Symbol.iterator]: st[Symbol.iterator]
};
function Ng(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Tg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ng
};
function Sg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function kg(t) {
  var e, n;
  t instanceof pt ? (e = t._id, t = t._name) : (e = zs(), (n = Tg).time = _i(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Ln(c, t, e, u, o, n || Sg(c, e));
  return new pt(r, this._parents, t, e);
}
Ce.prototype.interrupt = Np;
Ce.prototype.transition = kg;
const jr = Math.PI, Fr = 2 * jr, Nt = 1e-6, Pg = Fr - Nt;
function Cs(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Eg(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Cs;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Is {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Cs : Eg(e);
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
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, h = s - n, f = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > Nt) if (!(Math.abs(h * c - u * l) > Nt) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - o, g = i - s, b = c * c + u * u, m = d * d + g * g, w = Math.sqrt(b), p = Math.sqrt(f), M = a * Math.tan((jr - Math.acos((b + f - m) / (2 * w * p))) / 2), y = M / p, v = M / w;
      Math.abs(y - 1) > Nt && this._append`L${e + y * l},${n + y * h}`, this._append`A${a},${a},0,0,${+(h * d > l * g)},${this._x1 = e + v * c},${this._y1 = n + v * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - l) > Nt) && this._append`L${u},${l}`, r && (f < 0 && (f = f % Fr + Fr), f > Pg ? this._append`A${r},${r},0,1,${h},${e - s},${n - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : f > Nt && this._append`A${r},${r},0,${+(f >= jr)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Q() {
  return new Is();
}
Q.prototype = Is.prototype;
function Og(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Sn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ee(t) {
  return t = Sn(Math.abs(t)), t ? t[1] : NaN;
}
function zg(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Cg(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Ig = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kn(t) {
  if (!(e = Ig.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new wi({
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
kn.prototype = wi.prototype;
function wi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
wi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Rg(t) {
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
var Rs;
function jg(t, e) {
  var n = Sn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Rs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Sn(t, Math.max(0, e + a - 1))[0];
}
function Na(t, e) {
  var n = Sn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ta = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Og,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Na(t * 100, e),
  r: Na,
  s: jg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Sa(t) {
  return t;
}
var ka = Array.prototype.map, Pa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fg(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Sa : zg(ka.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Sa : Cg(ka.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = kn(h);
    var f = h.fill, d = h.align, g = h.sign, b = h.symbol, m = h.zero, w = h.width, p = h.comma, M = h.precision, y = h.trim, v = h.type;
    v === "n" ? (p = !0, v = "g") : Ta[v] || (M === void 0 && (M = 12), y = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var S = b === "$" ? n : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = b === "$" ? r : /[%p]/.test(v) ? o : "", O = Ta[v], q = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(_) {
      var z = S, A = P, C, $t, F;
      if (v === "c")
        A = O(_) + A, _ = "";
      else {
        _ = +_;
        var B = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : O(Math.abs(_), M), y && (_ = Rg(_)), B && +_ == 0 && g !== "+" && (B = !1), z = (B ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + z, A = (v === "s" ? Pa[8 + Rs / 3] : "") + A + (B && g === "(" ? ")" : ""), q) {
          for (C = -1, $t = _.length; ++C < $t; )
            if (F = _.charCodeAt(C), 48 > F || F > 57) {
              A = (F === 46 ? i + _.slice(C + 1) : _.slice(C)) + A, _ = _.slice(0, C);
              break;
            }
        }
      }
      p && !m && (_ = e(_, 1 / 0));
      var U = z.length + _.length + A.length, E = U < w ? new Array(w - U + 1).join(f) : "";
      switch (p && m && (_ = e(E + _, E.length ? w - A.length : 1 / 0), E = ""), d) {
        case "<":
          _ = z + _ + A + E;
          break;
        case "=":
          _ = z + E + _ + A;
          break;
        case "^":
          _ = E.slice(0, U = E.length >> 1) + z + _ + A + E.slice(U);
          break;
        default:
          _ = E + z + _ + A;
          break;
      }
      return a(_);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function l(h, f) {
    var d = u((h = kn(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(ee(f) / 3))) * 3, b = Math.pow(10, -g), m = Pa[8 + g / 3];
    return function(w) {
      return d(b * w) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Ke, qn, js;
Dg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Dg(t) {
  return Ke = Fg(t), qn = Ke.format, js = Ke.formatPrefix, Ke;
}
function Lg(t) {
  return Math.max(0, -ee(Math.abs(t)));
}
function qg(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ee(e) / 3))) * 3 - ee(Math.abs(t)));
}
function Xg(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ee(e) - ee(t)) + 1;
}
function Bg(t, e) {
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
function Hg(t) {
  return function() {
    return t;
  };
}
function Ug(t) {
  return +t;
}
var Ea = [0, 1];
function Ut(t) {
  return t;
}
function Dr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Hg(isNaN(e) ? NaN : 0.5);
}
function Yg(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Gg(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Dr(i, r), a = n(o, a)) : (r = Dr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Vg(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Dr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Vh(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Kg(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Wg() {
  var t = Ea, e = Ea, n = bi, r, i, a, o = Ut, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Ut && (o = Yg(t[0], t[f - 1])), s = f > 2 ? Vg : Gg, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), G)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Ug), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = dp, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ut, l()) : o !== Ut;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Zg() {
  return Wg()(Ut, Ut);
}
function Jg(t, e, n, r) {
  var i = Qh(t, e, n), a;
  switch (r = kn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = qg(i, o)) && (r.precision = a), js(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Xg(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Lg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return qn(r);
}
function Qg(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Jh(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Jg(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = kr(o, s, n), u === c)
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
function ne() {
  var t = Zg();
  return t.copy = function() {
    return Kg(t, ne());
  }, Bg.apply(t, arguments), Qg(t);
}
function ye(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
ye.prototype = {
  constructor: ye,
  scale: function(t) {
    return t === 1 ? this : new ye(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ye(this.k, this.x + this.k * t, this.y + this.k * e);
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
ye.prototype;
var Fs = typeof global == "object" && global && global.Object === Object && global, ty = typeof self == "object" && self && self.Object === Object && self, yt = Fs || ty || Function("return this")(), rt = yt.Symbol, Ds = Object.prototype, ey = Ds.hasOwnProperty, ny = Ds.toString, ce = rt ? rt.toStringTag : void 0;
function ry(t) {
  var e = ey.call(t, ce), n = t[ce];
  try {
    t[ce] = void 0;
    var r = !0;
  } catch {
  }
  var i = ny.call(t);
  return r && (e ? t[ce] = n : delete t[ce]), i;
}
var iy = Object.prototype, ay = iy.toString;
function oy(t) {
  return ay.call(t);
}
var sy = "[object Null]", uy = "[object Undefined]", Oa = rt ? rt.toStringTag : void 0;
function ae(t) {
  return t == null ? t === void 0 ? uy : sy : Oa && Oa in Object(t) ? ry(t) : oy(t);
}
function re(t) {
  return t != null && typeof t == "object";
}
var cy = "[object Symbol]";
function Xn(t) {
  return typeof t == "symbol" || re(t) && ae(t) == cy;
}
function Ls(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var W = Array.isArray, za = rt ? rt.prototype : void 0, Ca = za ? za.toString : void 0;
function qs(t) {
  if (typeof t == "string")
    return t;
  if (W(t))
    return Ls(t, qs) + "";
  if (Xn(t))
    return Ca ? Ca.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var ly = /\s/;
function fy(t) {
  for (var e = t.length; e-- && ly.test(t.charAt(e)); )
    ;
  return e;
}
var hy = /^\s+/;
function dy(t) {
  return t && t.slice(0, fy(t) + 1).replace(hy, "");
}
function ie(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ia = NaN, py = /^[-+]0x[0-9a-f]+$/i, gy = /^0b[01]+$/i, yy = /^0o[0-7]+$/i, by = parseInt;
function _y(t) {
  if (typeof t == "number")
    return t;
  if (Xn(t))
    return Ia;
  if (ie(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ie(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = dy(t);
  var n = gy.test(t);
  return n || yy.test(t) ? by(t.slice(2), n ? 2 : 8) : py.test(t) ? Ia : +t;
}
var vy = 1 / 0, my = 17976931348623157e292;
function fr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = _y(t), t === vy || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * my;
  }
  return t === t ? t : 0;
}
function wy(t) {
  return t;
}
var xy = "[object AsyncFunction]", My = "[object Function]", Ay = "[object GeneratorFunction]", $y = "[object Proxy]";
function Xs(t) {
  if (!ie(t))
    return !1;
  var e = ae(t);
  return e == My || e == Ay || e == xy || e == $y;
}
var hr = yt["__core-js_shared__"], Ra = function() {
  var t = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ny(t) {
  return !!Ra && Ra in t;
}
var Ty = Function.prototype, Sy = Ty.toString;
function Lt(t) {
  if (t != null) {
    try {
      return Sy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ky = /[\\^$.*+?()[\]{}|]/g, Py = /^\[object .+?Constructor\]$/, Ey = Function.prototype, Oy = Object.prototype, zy = Ey.toString, Cy = Oy.hasOwnProperty, Iy = RegExp(
  "^" + zy.call(Cy).replace(ky, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ry(t) {
  if (!ie(t) || Ny(t))
    return !1;
  var e = Xs(t) ? Iy : Py;
  return e.test(Lt(t));
}
function jy(t, e) {
  return t == null ? void 0 : t[e];
}
function oe(t, e) {
  var n = jy(t, e);
  return Ry(n) ? n : void 0;
}
var Lr = oe(yt, "WeakMap"), Fy = 9007199254740991, Dy = /^(?:0|[1-9]\d*)$/;
function xi(t, e) {
  var n = typeof t;
  return e = e ?? Fy, !!e && (n == "number" || n != "symbol" && Dy.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Mi(t, e) {
  return t === e || t !== t && e !== e;
}
var Ly = 9007199254740991;
function Ai(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ly;
}
function Bn(t) {
  return t != null && Ai(t.length) && !Xs(t);
}
function qy(t, e, n) {
  if (!ie(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Bn(n) && xi(e, n.length) : r == "string" && e in n) ? Mi(n[e], t) : !1;
}
var Xy = Object.prototype;
function By(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Xy;
  return t === n;
}
function Hy(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Uy = "[object Arguments]";
function ja(t) {
  return re(t) && ae(t) == Uy;
}
var Bs = Object.prototype, Yy = Bs.hasOwnProperty, Gy = Bs.propertyIsEnumerable, $i = ja(/* @__PURE__ */ function() {
  return arguments;
}()) ? ja : function(t) {
  return re(t) && Yy.call(t, "callee") && !Gy.call(t, "callee");
};
function Vy() {
  return !1;
}
var Hs = typeof exports == "object" && exports && !exports.nodeType && exports, Fa = Hs && typeof module == "object" && module && !module.nodeType && module, Ky = Fa && Fa.exports === Hs, Da = Ky ? yt.Buffer : void 0, Wy = Da ? Da.isBuffer : void 0, qr = Wy || Vy, Zy = "[object Arguments]", Jy = "[object Array]", Qy = "[object Boolean]", tb = "[object Date]", eb = "[object Error]", nb = "[object Function]", rb = "[object Map]", ib = "[object Number]", ab = "[object Object]", ob = "[object RegExp]", sb = "[object Set]", ub = "[object String]", cb = "[object WeakMap]", lb = "[object ArrayBuffer]", fb = "[object DataView]", hb = "[object Float32Array]", db = "[object Float64Array]", pb = "[object Int8Array]", gb = "[object Int16Array]", yb = "[object Int32Array]", bb = "[object Uint8Array]", _b = "[object Uint8ClampedArray]", vb = "[object Uint16Array]", mb = "[object Uint32Array]", $ = {};
$[hb] = $[db] = $[pb] = $[gb] = $[yb] = $[bb] = $[_b] = $[vb] = $[mb] = !0;
$[Zy] = $[Jy] = $[lb] = $[Qy] = $[fb] = $[tb] = $[eb] = $[nb] = $[rb] = $[ib] = $[ab] = $[ob] = $[sb] = $[ub] = $[cb] = !1;
function wb(t) {
  return re(t) && Ai(t.length) && !!$[ae(t)];
}
function xb(t) {
  return function(e) {
    return t(e);
  };
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, be = Us && typeof module == "object" && module && !module.nodeType && module, Mb = be && be.exports === Us, dr = Mb && Fs.process, La = function() {
  try {
    var t = be && be.require && be.require("util").types;
    return t || dr && dr.binding && dr.binding("util");
  } catch {
  }
}(), qa = La && La.isTypedArray, Ys = qa ? xb(qa) : wb, Ab = Object.prototype, $b = Ab.hasOwnProperty;
function Nb(t, e) {
  var n = W(t), r = !n && $i(t), i = !n && !r && qr(t), a = !n && !r && !i && Ys(t), o = n || r || i || a, s = o ? Hy(t.length, String) : [], c = s.length;
  for (var u in t)
    $b.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xi(u, c))) && s.push(u);
  return s;
}
function Tb(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Sb = Tb(Object.keys, Object), kb = Object.prototype, Pb = kb.hasOwnProperty;
function Eb(t) {
  if (!By(t))
    return Sb(t);
  var e = [];
  for (var n in Object(t))
    Pb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ni(t) {
  return Bn(t) ? Nb(t) : Eb(t);
}
var Ob = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zb = /^\w*$/;
function Ti(t, e) {
  if (W(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Xn(t) ? !0 : zb.test(t) || !Ob.test(t) || e != null && t in Object(e);
}
var Te = oe(Object, "create");
function Cb() {
  this.__data__ = Te ? Te(null) : {}, this.size = 0;
}
function Ib(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Rb = "__lodash_hash_undefined__", jb = Object.prototype, Fb = jb.hasOwnProperty;
function Db(t) {
  var e = this.__data__;
  if (Te) {
    var n = e[t];
    return n === Rb ? void 0 : n;
  }
  return Fb.call(e, t) ? e[t] : void 0;
}
var Lb = Object.prototype, qb = Lb.hasOwnProperty;
function Xb(t) {
  var e = this.__data__;
  return Te ? e[t] !== void 0 : qb.call(e, t);
}
var Bb = "__lodash_hash_undefined__";
function Hb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Te && e === void 0 ? Bb : e, this;
}
function It(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
It.prototype.clear = Cb;
It.prototype.delete = Ib;
It.prototype.get = Db;
It.prototype.has = Xb;
It.prototype.set = Hb;
function Ub() {
  this.__data__ = [], this.size = 0;
}
function Hn(t, e) {
  for (var n = t.length; n--; )
    if (Mi(t[n][0], e))
      return n;
  return -1;
}
var Yb = Array.prototype, Gb = Yb.splice;
function Vb(t) {
  var e = this.__data__, n = Hn(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Gb.call(e, n, 1), --this.size, !0;
}
function Kb(t) {
  var e = this.__data__, n = Hn(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Wb(t) {
  return Hn(this.__data__, t) > -1;
}
function Zb(t, e) {
  var n = this.__data__, r = Hn(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = Ub;
bt.prototype.delete = Vb;
bt.prototype.get = Kb;
bt.prototype.has = Wb;
bt.prototype.set = Zb;
var Se = oe(yt, "Map");
function Jb() {
  this.size = 0, this.__data__ = {
    hash: new It(),
    map: new (Se || bt)(),
    string: new It()
  };
}
function Qb(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Un(t, e) {
  var n = t.__data__;
  return Qb(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function t1(t) {
  var e = Un(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function e1(t) {
  return Un(this, t).get(t);
}
function n1(t) {
  return Un(this, t).has(t);
}
function r1(t, e) {
  var n = Un(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function _t(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = Jb;
_t.prototype.delete = t1;
_t.prototype.get = e1;
_t.prototype.has = n1;
_t.prototype.set = r1;
var i1 = "Expected a function";
function Si(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(i1);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Si.Cache || _t)(), n;
}
Si.Cache = _t;
var a1 = 500;
function o1(t) {
  var e = Si(t, function(r) {
    return n.size === a1 && n.clear(), r;
  }), n = e.cache;
  return e;
}
var s1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u1 = /\\(\\)?/g, c1 = o1(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(s1, function(n, r, i, a) {
    e.push(i ? a.replace(u1, "$1") : r || n);
  }), e;
});
function l1(t) {
  return t == null ? "" : qs(t);
}
function Gs(t, e) {
  return W(t) ? t : Ti(t, e) ? [t] : c1(l1(t));
}
function Yn(t) {
  if (typeof t == "string" || Xn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Vs(t, e) {
  e = Gs(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Yn(e[n++])];
  return n && n == r ? t : void 0;
}
function f1(t, e, n) {
  var r = t == null ? void 0 : Vs(t, e);
  return r === void 0 ? n : r;
}
function Ks(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Xa = rt ? rt.isConcatSpreadable : void 0;
function h1(t) {
  return W(t) || $i(t) || !!(Xa && t && t[Xa]);
}
function d1(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = h1), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Ks(i, s) : i[i.length] = s;
  }
  return i;
}
function p1(t) {
  var e = t == null ? 0 : t.length;
  return e ? d1(t) : [];
}
function g1() {
  this.__data__ = new bt(), this.size = 0;
}
function y1(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function b1(t) {
  return this.__data__.get(t);
}
function _1(t) {
  return this.__data__.has(t);
}
var v1 = 200;
function m1(t, e) {
  var n = this.__data__;
  if (n instanceof bt) {
    var r = n.__data__;
    if (!Se || r.length < v1 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new _t(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ft(t) {
  var e = this.__data__ = new bt(t);
  this.size = e.size;
}
ft.prototype.clear = g1;
ft.prototype.delete = y1;
ft.prototype.get = b1;
ft.prototype.has = _1;
ft.prototype.set = m1;
function w1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function x1() {
  return [];
}
var M1 = Object.prototype, A1 = M1.propertyIsEnumerable, Ba = Object.getOwnPropertySymbols, $1 = Ba ? function(t) {
  return t == null ? [] : (t = Object(t), w1(Ba(t), function(e) {
    return A1.call(t, e);
  }));
} : x1;
function N1(t, e, n) {
  var r = e(t);
  return W(t) ? r : Ks(r, n(t));
}
function Ha(t) {
  return N1(t, Ni, $1);
}
var Xr = oe(yt, "DataView"), Br = oe(yt, "Promise"), Hr = oe(yt, "Set"), Ua = "[object Map]", T1 = "[object Object]", Ya = "[object Promise]", Ga = "[object Set]", Va = "[object WeakMap]", Ka = "[object DataView]", S1 = Lt(Xr), k1 = Lt(Se), P1 = Lt(Br), E1 = Lt(Hr), O1 = Lt(Lr), xt = ae;
(Xr && xt(new Xr(new ArrayBuffer(1))) != Ka || Se && xt(new Se()) != Ua || Br && xt(Br.resolve()) != Ya || Hr && xt(new Hr()) != Ga || Lr && xt(new Lr()) != Va) && (xt = function(t) {
  var e = ae(t), n = e == T1 ? t.constructor : void 0, r = n ? Lt(n) : "";
  if (r)
    switch (r) {
      case S1:
        return Ka;
      case k1:
        return Ua;
      case P1:
        return Ya;
      case E1:
        return Ga;
      case O1:
        return Va;
    }
  return e;
});
var Wa = yt.Uint8Array, z1 = "__lodash_hash_undefined__";
function C1(t) {
  return this.__data__.set(t, z1), this;
}
function I1(t) {
  return this.__data__.has(t);
}
function Pn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new _t(); ++e < n; )
    this.add(t[e]);
}
Pn.prototype.add = Pn.prototype.push = C1;
Pn.prototype.has = I1;
function R1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function j1(t, e) {
  return t.has(e);
}
var F1 = 1, D1 = 2;
function Ws(t, e, n, r, i, a) {
  var o = n & F1, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & D1 ? new Pn() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var g = t[h], b = e[h];
    if (r)
      var m = o ? r(b, g, h, e, t, a) : r(g, b, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!R1(e, function(w, p) {
        if (!j1(d, p) && (g === w || i(g, w, n, r, a)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === b || i(g, b, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function L1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function q1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var X1 = 1, B1 = 2, H1 = "[object Boolean]", U1 = "[object Date]", Y1 = "[object Error]", G1 = "[object Map]", V1 = "[object Number]", K1 = "[object RegExp]", W1 = "[object Set]", Z1 = "[object String]", J1 = "[object Symbol]", Q1 = "[object ArrayBuffer]", t_ = "[object DataView]", Za = rt ? rt.prototype : void 0, pr = Za ? Za.valueOf : void 0;
function e_(t, e, n, r, i, a, o) {
  switch (n) {
    case t_:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Q1:
      return !(t.byteLength != e.byteLength || !a(new Wa(t), new Wa(e)));
    case H1:
    case U1:
    case V1:
      return Mi(+t, +e);
    case Y1:
      return t.name == e.name && t.message == e.message;
    case K1:
    case Z1:
      return t == e + "";
    case G1:
      var s = L1;
    case W1:
      var c = r & X1;
      if (s || (s = q1), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= B1, o.set(t, e);
      var l = Ws(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case J1:
      if (pr)
        return pr.call(t) == pr.call(e);
  }
  return !1;
}
var n_ = 1, r_ = Object.prototype, i_ = r_.hasOwnProperty;
function a_(t, e, n, r, i, a) {
  var o = n & n_, s = Ha(t), c = s.length, u = Ha(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : i_.call(e, f)))
      return !1;
  }
  var d = a.get(t), g = a.get(e);
  if (d && g)
    return d == e && g == t;
  var b = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var w = t[f], p = e[f];
    if (r)
      var M = o ? r(p, w, f, e, t, a) : r(w, p, f, t, e, a);
    if (!(M === void 0 ? w === p || i(w, p, n, r, a) : M)) {
      b = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (b && !m) {
    var y = t.constructor, v = e.constructor;
    y != v && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (b = !1);
  }
  return a.delete(t), a.delete(e), b;
}
var o_ = 1, Ja = "[object Arguments]", Qa = "[object Array]", We = "[object Object]", s_ = Object.prototype, to = s_.hasOwnProperty;
function u_(t, e, n, r, i, a) {
  var o = W(t), s = W(e), c = o ? Qa : xt(t), u = s ? Qa : xt(e);
  c = c == Ja ? We : c, u = u == Ja ? We : u;
  var l = c == We, h = u == We, f = c == u;
  if (f && qr(t)) {
    if (!qr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new ft()), o || Ys(t) ? Ws(t, e, n, r, i, a) : e_(t, e, c, n, r, i, a);
  if (!(n & o_)) {
    var d = l && to.call(t, "__wrapped__"), g = h && to.call(e, "__wrapped__");
    if (d || g) {
      var b = d ? t.value() : t, m = g ? e.value() : e;
      return a || (a = new ft()), i(b, m, n, r, a);
    }
  }
  return f ? (a || (a = new ft()), a_(t, e, n, r, i, a)) : !1;
}
function ki(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !re(t) && !re(e) ? t !== t && e !== e : u_(t, e, n, r, ki, i);
}
var c_ = 1, l_ = 2;
function f_(t, e, n, r) {
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
      var l = new ft(), h;
      if (!(h === void 0 ? ki(u, c, c_ | l_, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Zs(t) {
  return t === t && !ie(t);
}
function h_(t) {
  for (var e = Ni(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Zs(i)];
  }
  return e;
}
function Js(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function d_(t) {
  var e = h_(t);
  return e.length == 1 && e[0][2] ? Js(e[0][0], e[0][1]) : function(n) {
    return n === t || f_(n, t, e);
  };
}
function p_(t, e) {
  return t != null && e in Object(t);
}
function g_(t, e, n) {
  e = Gs(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Yn(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ai(i) && xi(o, i) && (W(t) || $i(t)));
}
function y_(t, e) {
  return t != null && g_(t, e, p_);
}
var b_ = 1, __ = 2;
function v_(t, e) {
  return Ti(t) && Zs(e) ? Js(Yn(t), e) : function(n) {
    var r = f1(n, t);
    return r === void 0 && r === e ? y_(n, t) : ki(e, r, b_ | __);
  };
}
function m_(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function w_(t) {
  return function(e) {
    return Vs(e, t);
  };
}
function x_(t) {
  return Ti(t) ? m_(Yn(t)) : w_(t);
}
function M_(t) {
  return typeof t == "function" ? t : t == null ? wy : typeof t == "object" ? W(t) ? v_(t[0], t[1]) : d_(t) : x_(t);
}
function A_(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var $_ = A_();
function N_(t, e) {
  return t && $_(t, e, Ni);
}
function T_(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Bn(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var S_ = T_(N_);
function k_(t, e) {
  var n = -1, r = Bn(t) ? Array(t.length) : [];
  return S_(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function eo(t, e) {
  var n = W(t) ? Ls : k_;
  return n(t, M_(e));
}
var P_ = Math.ceil, E_ = Math.max;
function O_(t, e, n, r) {
  for (var i = -1, a = E_(P_((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function z_(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && qy(e, n, r) && (n = r = void 0), e = fr(e), n === void 0 ? (n = e, e = 0) : n = fr(n), r = r === void 0 ? e < n ? 1 : -1 : fr(r), O_(e, n, r);
  };
}
var C_ = z_();
const I_ = (t, e, n = 12, r = 12) => {
  const i = ne().domain([0, n]).range([0, t]), a = ne().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return C_((n + 1) * (r + 1)).map(function(o) {
        return { m: o % (n + 1), n: Math.floor(o / (n + 1)), x: i(o % (n + 1)), y: a(Math.floor(o / (n + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const c = p1(eo(s, function(u) {
        return eo(
          o,
          function(l) {
            return { x: i(l), y: a(u) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, R_ = "_widget_9wct0_49", j_ = "_label_9wct0_69", F_ = "_lit_9wct0_74", D_ = "_button_9wct0_78", L_ = "_symbol_9wct0_78", q_ = "_radio_9wct0_79", X_ = "_radiobutton_9wct0_79", B_ = "_selected_9wct0_85", H_ = "_toggle_9wct0_86", U_ = "_slider_9wct0_95", Y_ = "_track_9wct0_95", G_ = "_track_overlay_9wct0_100", V_ = "_handle_9wct0_108", x = {
  widget: R_,
  label: j_,
  lit: F_,
  button: D_,
  symbol: L_,
  radio: q_,
  radiobutton: X_,
  selected: B_,
  toggle: H_,
  slider: U_,
  track: Y_,
  track_overlay: G_,
  handle: V_
}, Pi = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, Ei = (t, e, n) => {
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
}, K_ = (t = 1) => {
  const e = Q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, W_ = (t = 1) => {
  const e = Q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Z_ = (t = 1) => {
  const e = Q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, J_ = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = Q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Q_ = (t = 1) => {
  const e = Q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, tv = (t = 1) => {
  const e = Q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, ev = (t = 1) => {
  const e = Q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, nv = (t = 1) => {
  var e = Q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, rv = (t = 1) => {
  const e = Q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Ur = (t) => {
  switch (t) {
    case "play":
      return K_;
    case "forward":
      return W_;
    case "back":
      return Z_;
    case "pause":
      return J_;
    case "reload":
      return Q_;
    case "capture":
      return tv;
    case "rewind":
      return ev;
    case "stop":
      return nv;
    case "push":
      return rv;
  }
}, Oi = () => {
  const t = "button";
  var e = Pi(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(f) {
  }, l = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % l.length, u(), I(this.parentNode).select("." + x.symbol).attr("d", Ur(l[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % l.length, u(), f.select("#button_" + e).select("." + x.symbol).attr("d", Ur(l[h])(r * n));
    }
  };
}, iv = () => {
  const t = "slider", e = qn(".3f");
  var n = Pi(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = 4, l = null, h = function(p) {
  }, f = function(p) {
  }, d = [0, 1], g = 0, b = null, m = ne().domain(d).range([0, r]).clamp(!0);
  const w = function(p, M, y = d) {
    const v = p.select("#slider_" + n);
    m.domain(y), g = M, v.selectAll("." + x.handle).transition().attr("cx", m(M)), o && v.select("." + x.label).text(b + " = " + e(g)), h(), f();
  };
  return {
    type: t,
    scale: m,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? b : (b = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    girth: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    knob: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    show: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    labelpadding: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return h = p, this;
      h(p);
    },
    update_end: function(p) {
      if (typeof p == "function")
        return f = p, this;
      f(p);
    },
    range: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? g : (g = p, this);
    },
    reset: w,
    click: w
  };
}, av = () => {
  const t = "toggle";
  var e = Pi(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, c = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? c : (c = u, this);
    },
    click: function() {
      c = !c;
      const u = I(this.parentNode);
      u.select("." + x.handle).transition().attr("cx", c ? 2 * n : 0), u.classed(x.selected, c), s();
    },
    reset: function(u, l) {
      c = l;
      const h = u.select("#toggle_" + e);
      h.selectAll("." + x.handle).transition().attr("cx", c ? 2 * n : 0), h.classed(x.selected, c), s();
    }
  };
}, ov = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = I(a).attr("class", x.widget + " " + x.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", x.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), o.append("path").attr("d", Ur(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", x.symbol), r) {
    const c = Ei(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", x.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Qs = (t, e) => {
  const n = Q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, sv = (t, e) => {
  const n = qn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = I(c).attr("class", x.widget + " " + x.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, l = (w) => {
    const p = w && w.sourceEvent ? w.sourceEvent : w;
    return p ? p.clientX != null ? p.clientX : p.touches && p.touches.length ? p.touches[0].clientX : p.changedTouches && p.changedTouches.length ? p.changedTouches[0].clientX : null : null;
  }, h = (w, p) => {
    const M = l(w);
    if (M == null) return null;
    const y = p.getBoundingClientRect(), v = M - y.left, S = p.width && p.width.baseVal ? p.width.baseVal.value : y.width, P = y.width ? S / y.width : 1;
    return v * P - u;
  };
  s.append("path").attr("d", Qs(t.size(), t.girth())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", x.track_overlay).on("click", function(w) {
    const p = h(w, this);
    if (p == null) return;
    const M = Math.max(0, Math.min(t.size(), p));
    t.value(o.invert(M)), t.update(), t.update_end(), s.selectAll("." + x.handle).attr("cx", o(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + n(t.value()));
  }).call(
    H0().on("drag", function(w) {
      const p = h(w, this);
      if (p == null) return;
      const M = Math.max(0, Math.min(t.size(), p));
      t.value(o.invert(M)), t.update(), s.selectAll("." + x.handle).attr("cx", o(t.value())), t.show() && s.select("." + x.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(w) {
      t.update_end();
    })
  );
  var f, d, g, b = "bottom";
  const m = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? d = t.labelposition().match(/bottom/i) != null ? He([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + m : -He([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - m : d = t.labelposition().match(/bottom/i) != null ? He([t.girth() / 2, t.knob()]) + 7 + m : -He([t.girth() / 2, t.knob()]) - 7 - m, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", b = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", x.label).style("text-anchor", g).style("alignment-baseline", b).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + d + ")"), c;
}, uv = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = I(o).attr("class", x.widget + " " + x.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(x.selected, t.value() == 1);
  if (s.append("path").attr("d", Qs(2 * t.size(), 2 * t.size())).attr("class", x.track), s.append("circle").attr("class", x.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", x.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Ei(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", x.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, cv = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = td(o), c = ne().domain([0, o - 1]).range([0, t.size()]), u = ne().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = I(l).attr("class", x.widget + " " + x.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + x.radiobutton).data(s).enter().append("g").attr("class", x.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + u(b) + ")" : "translate(" + c(b) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), f.attr("class", x.background).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), d.attr("class", x.symbol), d.filter((b) => b == t.value()).classed(x.selected, !0), h.on("click", t.click);
  const g = Ei(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", x.label).text(function(b, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), l;
}, gr = (t, e) => {
  switch (t.type) {
    case "button":
      return ov(t);
    case "slider":
      return sv(t);
    case "radio":
      return cv(t);
    case "toggle":
      return uv(t);
  }
}, lv = "_displayPanel_19jk0_1", fv = "_controlPanel_19jk0_8", no = {
  displayPanel: lv,
  controlPanel: fv
}, hv = (t, e) => {
  const n = I_(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  );
  console.log(t);
  const r = El("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", no.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + no.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && s.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && o.style("border", e.display_border), e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (c) => "translate(" + c.x + "," + c.y + ")").style("fill", "black"), { display: o, controls: s, grid: n };
};
var tu = typeof global == "object" && global && global.Object === Object && global, dv = typeof self == "object" && self && self.Object === Object && self, vt = tu || dv || Function("return this")(), At = vt.Symbol, eu = Object.prototype, pv = eu.hasOwnProperty, gv = eu.toString, le = At ? At.toStringTag : void 0;
function yv(t) {
  var e = pv.call(t, le), n = t[le];
  try {
    t[le] = void 0;
    var r = !0;
  } catch {
  }
  var i = gv.call(t);
  return r && (e ? t[le] = n : delete t[le]), i;
}
var bv = Object.prototype, _v = bv.toString;
function vv(t) {
  return _v.call(t);
}
var mv = "[object Null]", wv = "[object Undefined]", ro = At ? At.toStringTag : void 0;
function qt(t) {
  return t == null ? t === void 0 ? wv : mv : ro && ro in Object(t) ? yv(t) : vv(t);
}
function Rt(t) {
  return t != null && typeof t == "object";
}
var xv = "[object Symbol]";
function Gn(t) {
  return typeof t == "symbol" || Rt(t) && qt(t) == xv;
}
function Vn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var H = Array.isArray, io = At ? At.prototype : void 0, ao = io ? io.toString : void 0;
function nu(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return Vn(t, nu) + "";
  if (Gn(t))
    return ao ? ao.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Mv = /\s/;
function Av(t) {
  for (var e = t.length; e-- && Mv.test(t.charAt(e)); )
    ;
  return e;
}
var $v = /^\s+/;
function Nv(t) {
  return t && t.slice(0, Av(t) + 1).replace($v, "");
}
function gt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var oo = NaN, Tv = /^[-+]0x[0-9a-f]+$/i, Sv = /^0b[01]+$/i, kv = /^0o[0-7]+$/i, Pv = parseInt;
function Ev(t) {
  if (typeof t == "number")
    return t;
  if (Gn(t))
    return oo;
  if (gt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = gt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Nv(t);
  var n = Sv.test(t);
  return n || kv.test(t) ? Pv(t.slice(2), n ? 2 : 8) : Tv.test(t) ? oo : +t;
}
var Ov = 1 / 0, zv = 17976931348623157e292;
function yr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ev(t), t === Ov || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * zv;
  }
  return t === t ? t : 0;
}
function ru(t) {
  return t;
}
var Cv = "[object AsyncFunction]", Iv = "[object Function]", Rv = "[object GeneratorFunction]", jv = "[object Proxy]";
function iu(t) {
  if (!gt(t))
    return !1;
  var e = qt(t);
  return e == Iv || e == Rv || e == Cv || e == jv;
}
var br = vt["__core-js_shared__"], so = function() {
  var t = /[^.]+$/.exec(br && br.keys && br.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Fv(t) {
  return !!so && so in t;
}
var Dv = Function.prototype, Lv = Dv.toString;
function Xt(t) {
  if (t != null) {
    try {
      return Lv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var qv = /[\\^$.*+?()[\]{}|]/g, Xv = /^\[object .+?Constructor\]$/, Bv = Function.prototype, Hv = Object.prototype, Uv = Bv.toString, Yv = Hv.hasOwnProperty, Gv = RegExp(
  "^" + Uv.call(Yv).replace(qv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vv(t) {
  if (!gt(t) || Fv(t))
    return !1;
  var e = iu(t) ? Gv : Xv;
  return e.test(Xt(t));
}
function Kv(t, e) {
  return t == null ? void 0 : t[e];
}
function Bt(t, e) {
  var n = Kv(t, e);
  return Vv(n) ? n : void 0;
}
var Yr = Bt(vt, "WeakMap"), uo = function() {
  try {
    var t = Bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Wv(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Zv = 9007199254740991, Jv = /^(?:0|[1-9]\d*)$/;
function Kn(t, e) {
  var n = typeof t;
  return e = e ?? Zv, !!e && (n == "number" || n != "symbol" && Jv.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Qv(t, e, n) {
  e == "__proto__" && uo ? uo(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Wn(t, e) {
  return t === e || t !== t && e !== e;
}
var tm = Object.prototype, em = tm.hasOwnProperty;
function nm(t, e, n) {
  var r = t[e];
  (!(em.call(t, e) && Wn(r, n)) || n === void 0 && !(e in t)) && Qv(t, e, n);
}
var rm = 9007199254740991;
function zi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rm;
}
function Re(t) {
  return t != null && zi(t.length) && !iu(t);
}
function im(t, e, n) {
  if (!gt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Re(n) && Kn(e, n.length) : r == "string" && e in n) ? Wn(n[e], t) : !1;
}
var am = Object.prototype;
function au(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || am;
  return t === n;
}
function om(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var sm = "[object Arguments]";
function co(t) {
  return Rt(t) && qt(t) == sm;
}
var ou = Object.prototype, um = ou.hasOwnProperty, cm = ou.propertyIsEnumerable, su = co(/* @__PURE__ */ function() {
  return arguments;
}()) ? co : function(t) {
  return Rt(t) && um.call(t, "callee") && !cm.call(t, "callee");
};
function lm() {
  return !1;
}
var uu = typeof exports == "object" && exports && !exports.nodeType && exports, lo = uu && typeof module == "object" && module && !module.nodeType && module, fm = lo && lo.exports === uu, fo = fm ? vt.Buffer : void 0, hm = fo ? fo.isBuffer : void 0, Gr = hm || lm, dm = "[object Arguments]", pm = "[object Array]", gm = "[object Boolean]", ym = "[object Date]", bm = "[object Error]", _m = "[object Function]", vm = "[object Map]", mm = "[object Number]", wm = "[object Object]", xm = "[object RegExp]", Mm = "[object Set]", Am = "[object String]", $m = "[object WeakMap]", Nm = "[object ArrayBuffer]", Tm = "[object DataView]", Sm = "[object Float32Array]", km = "[object Float64Array]", Pm = "[object Int8Array]", Em = "[object Int16Array]", Om = "[object Int32Array]", zm = "[object Uint8Array]", Cm = "[object Uint8ClampedArray]", Im = "[object Uint16Array]", Rm = "[object Uint32Array]", N = {};
N[Sm] = N[km] = N[Pm] = N[Em] = N[Om] = N[zm] = N[Cm] = N[Im] = N[Rm] = !0;
N[dm] = N[pm] = N[Nm] = N[gm] = N[Tm] = N[ym] = N[bm] = N[_m] = N[vm] = N[mm] = N[wm] = N[xm] = N[Mm] = N[Am] = N[$m] = !1;
function jm(t) {
  return Rt(t) && zi(t.length) && !!N[qt(t)];
}
function Fm(t) {
  return function(e) {
    return t(e);
  };
}
var cu = typeof exports == "object" && exports && !exports.nodeType && exports, _e = cu && typeof module == "object" && module && !module.nodeType && module, Dm = _e && _e.exports === cu, _r = Dm && tu.process, ho = function() {
  try {
    var t = _e && _e.require && _e.require("util").types;
    return t || _r && _r.binding && _r.binding("util");
  } catch {
  }
}(), po = ho && ho.isTypedArray, lu = po ? Fm(po) : jm, Lm = Object.prototype, qm = Lm.hasOwnProperty;
function fu(t, e) {
  var n = H(t), r = !n && su(t), i = !n && !r && Gr(t), a = !n && !r && !i && lu(t), o = n || r || i || a, s = o ? om(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || qm.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Kn(u, c))) && s.push(u);
  return s;
}
function hu(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Xm = hu(Object.keys, Object), Bm = Object.prototype, Hm = Bm.hasOwnProperty;
function Um(t) {
  if (!au(t))
    return Xm(t);
  var e = [];
  for (var n in Object(t))
    Hm.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Zn(t) {
  return Re(t) ? fu(t) : Um(t);
}
function Ym(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Gm = Object.prototype, Vm = Gm.hasOwnProperty;
function Km(t) {
  if (!gt(t))
    return Ym(t);
  var e = au(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Vm.call(t, r)) || n.push(r);
  return n;
}
function Wm(t) {
  return Re(t) ? fu(t, !0) : Km(t);
}
var Zm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jm = /^\w*$/;
function Ci(t, e) {
  if (H(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Gn(t) ? !0 : Jm.test(t) || !Zm.test(t) || e != null && t in Object(e);
}
var ke = Bt(Object, "create");
function Qm() {
  this.__data__ = ke ? ke(null) : {}, this.size = 0;
}
function tw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ew = "__lodash_hash_undefined__", nw = Object.prototype, rw = nw.hasOwnProperty;
function iw(t) {
  var e = this.__data__;
  if (ke) {
    var n = e[t];
    return n === ew ? void 0 : n;
  }
  return rw.call(e, t) ? e[t] : void 0;
}
var aw = Object.prototype, ow = aw.hasOwnProperty;
function sw(t) {
  var e = this.__data__;
  return ke ? e[t] !== void 0 : ow.call(e, t);
}
var uw = "__lodash_hash_undefined__";
function cw(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = ke && e === void 0 ? uw : e, this;
}
function jt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
jt.prototype.clear = Qm;
jt.prototype.delete = tw;
jt.prototype.get = iw;
jt.prototype.has = sw;
jt.prototype.set = cw;
function lw() {
  this.__data__ = [], this.size = 0;
}
function Jn(t, e) {
  for (var n = t.length; n--; )
    if (Wn(t[n][0], e))
      return n;
  return -1;
}
var fw = Array.prototype, hw = fw.splice;
function dw(t) {
  var e = this.__data__, n = Jn(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : hw.call(e, n, 1), --this.size, !0;
}
function pw(t) {
  var e = this.__data__, n = Jn(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function gw(t) {
  return Jn(this.__data__, t) > -1;
}
function yw(t, e) {
  var n = this.__data__, r = Jn(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = lw;
mt.prototype.delete = dw;
mt.prototype.get = pw;
mt.prototype.has = gw;
mt.prototype.set = yw;
var Pe = Bt(vt, "Map");
function bw() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (Pe || mt)(),
    string: new jt()
  };
}
function _w(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Qn(t, e) {
  var n = t.__data__;
  return _w(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function vw(t) {
  var e = Qn(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function mw(t) {
  return Qn(this, t).get(t);
}
function ww(t) {
  return Qn(this, t).has(t);
}
function xw(t, e) {
  var n = Qn(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function wt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = bw;
wt.prototype.delete = vw;
wt.prototype.get = mw;
wt.prototype.has = ww;
wt.prototype.set = xw;
var Mw = "Expected a function";
function Ii(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Mw);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Ii.Cache || wt)(), n;
}
Ii.Cache = wt;
var Aw = 500;
function $w(t) {
  var e = Ii(t, function(r) {
    return n.size === Aw && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Nw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tw = /\\(\\)?/g, Sw = $w(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Nw, function(n, r, i, a) {
    e.push(i ? a.replace(Tw, "$1") : r || n);
  }), e;
});
function tr(t) {
  return t == null ? "" : nu(t);
}
function er(t, e) {
  return H(t) ? t : Ci(t, e) ? [t] : Sw(tr(t));
}
function je(t) {
  if (typeof t == "string" || Gn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ri(t, e) {
  e = er(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[je(e[n++])];
  return n && n == r ? t : void 0;
}
function kw(t, e, n) {
  var r = t == null ? void 0 : Ri(t, e);
  return r === void 0 ? n : r;
}
function du(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Pw = hu(Object.getPrototypeOf, Object);
function Ew(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Ow(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, Ew(t, e, n);
}
var zw = "\\ud800-\\udfff", Cw = "\\u0300-\\u036f", Iw = "\\ufe20-\\ufe2f", Rw = "\\u20d0-\\u20ff", jw = Cw + Iw + Rw, Fw = "\\ufe0e\\ufe0f", Dw = "\\u200d", Lw = RegExp("[" + Dw + zw + jw + Fw + "]");
function pu(t) {
  return Lw.test(t);
}
function qw(t) {
  return t.split("");
}
var gu = "\\ud800-\\udfff", Xw = "\\u0300-\\u036f", Bw = "\\ufe20-\\ufe2f", Hw = "\\u20d0-\\u20ff", Uw = Xw + Bw + Hw, Yw = "\\ufe0e\\ufe0f", Gw = "[" + gu + "]", Vr = "[" + Uw + "]", Kr = "\\ud83c[\\udffb-\\udfff]", Vw = "(?:" + Vr + "|" + Kr + ")", yu = "[^" + gu + "]", bu = "(?:\\ud83c[\\udde6-\\uddff]){2}", _u = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kw = "\\u200d", vu = Vw + "?", mu = "[" + Yw + "]?", Ww = "(?:" + Kw + "(?:" + [yu, bu, _u].join("|") + ")" + mu + vu + ")*", Zw = mu + vu + Ww, Jw = "(?:" + [yu + Vr + "?", Vr, bu, _u, Gw].join("|") + ")", Qw = RegExp(Kr + "(?=" + Kr + ")|" + Jw + Zw, "g");
function t3(t) {
  return t.match(Qw) || [];
}
function e3(t) {
  return pu(t) ? t3(t) : qw(t);
}
function n3(t) {
  return function(e) {
    e = tr(e);
    var n = pu(e) ? e3(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Ow(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var r3 = n3("toUpperCase");
function i3(t) {
  return r3(tr(t).toLowerCase());
}
function a3() {
  this.__data__ = new mt(), this.size = 0;
}
function o3(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function s3(t) {
  return this.__data__.get(t);
}
function u3(t) {
  return this.__data__.has(t);
}
var c3 = 200;
function l3(t, e) {
  var n = this.__data__;
  if (n instanceof mt) {
    var r = n.__data__;
    if (!Pe || r.length < c3 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new wt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ht(t) {
  var e = this.__data__ = new mt(t);
  this.size = e.size;
}
ht.prototype.clear = a3;
ht.prototype.delete = o3;
ht.prototype.get = s3;
ht.prototype.has = u3;
ht.prototype.set = l3;
function wu(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function xu() {
  return [];
}
var f3 = Object.prototype, h3 = f3.propertyIsEnumerable, go = Object.getOwnPropertySymbols, Mu = go ? function(t) {
  return t == null ? [] : (t = Object(t), wu(go(t), function(e) {
    return h3.call(t, e);
  }));
} : xu, d3 = Object.getOwnPropertySymbols, p3 = d3 ? function(t) {
  for (var e = []; t; )
    du(e, Mu(t)), t = Pw(t);
  return e;
} : xu;
function Au(t, e, n) {
  var r = e(t);
  return H(t) ? r : du(r, n(t));
}
function yo(t) {
  return Au(t, Zn, Mu);
}
function g3(t) {
  return Au(t, Wm, p3);
}
var Wr = Bt(vt, "DataView"), Zr = Bt(vt, "Promise"), Jr = Bt(vt, "Set"), bo = "[object Map]", y3 = "[object Object]", _o = "[object Promise]", vo = "[object Set]", mo = "[object WeakMap]", wo = "[object DataView]", b3 = Xt(Wr), _3 = Xt(Pe), v3 = Xt(Zr), m3 = Xt(Jr), w3 = Xt(Yr), ut = qt;
(Wr && ut(new Wr(new ArrayBuffer(1))) != wo || Pe && ut(new Pe()) != bo || Zr && ut(Zr.resolve()) != _o || Jr && ut(new Jr()) != vo || Yr && ut(new Yr()) != mo) && (ut = function(t) {
  var e = qt(t), n = e == y3 ? t.constructor : void 0, r = n ? Xt(n) : "";
  if (r)
    switch (r) {
      case b3:
        return wo;
      case _3:
        return bo;
      case v3:
        return _o;
      case m3:
        return vo;
      case w3:
        return mo;
    }
  return e;
});
var xo = vt.Uint8Array, x3 = "__lodash_hash_undefined__";
function M3(t) {
  return this.__data__.set(t, x3), this;
}
function A3(t) {
  return this.__data__.has(t);
}
function En(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++e < n; )
    this.add(t[e]);
}
En.prototype.add = En.prototype.push = M3;
En.prototype.has = A3;
function $3(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function N3(t, e) {
  return t.has(e);
}
var T3 = 1, S3 = 2;
function $u(t, e, n, r, i, a) {
  var o = n & T3, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & S3 ? new En() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var g = t[h], b = e[h];
    if (r)
      var m = o ? r(b, g, h, e, t, a) : r(g, b, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!$3(e, function(w, p) {
        if (!N3(d, p) && (g === w || i(g, w, n, r, a)))
          return d.push(p);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === b || i(g, b, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function Nu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function k3(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var P3 = 1, E3 = 2, O3 = "[object Boolean]", z3 = "[object Date]", C3 = "[object Error]", I3 = "[object Map]", R3 = "[object Number]", j3 = "[object RegExp]", F3 = "[object Set]", D3 = "[object String]", L3 = "[object Symbol]", q3 = "[object ArrayBuffer]", X3 = "[object DataView]", Mo = At ? At.prototype : void 0, vr = Mo ? Mo.valueOf : void 0;
function B3(t, e, n, r, i, a, o) {
  switch (n) {
    case X3:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case q3:
      return !(t.byteLength != e.byteLength || !a(new xo(t), new xo(e)));
    case O3:
    case z3:
    case R3:
      return Wn(+t, +e);
    case C3:
      return t.name == e.name && t.message == e.message;
    case j3:
    case D3:
      return t == e + "";
    case I3:
      var s = Nu;
    case F3:
      var c = r & P3;
      if (s || (s = k3), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= E3, o.set(t, e);
      var l = $u(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case L3:
      if (vr)
        return vr.call(t) == vr.call(e);
  }
  return !1;
}
var H3 = 1, U3 = Object.prototype, Y3 = U3.hasOwnProperty;
function G3(t, e, n, r, i, a) {
  var o = n & H3, s = yo(t), c = s.length, u = yo(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : Y3.call(e, f)))
      return !1;
  }
  var d = a.get(t), g = a.get(e);
  if (d && g)
    return d == e && g == t;
  var b = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var w = t[f], p = e[f];
    if (r)
      var M = o ? r(p, w, f, e, t, a) : r(w, p, f, t, e, a);
    if (!(M === void 0 ? w === p || i(w, p, n, r, a) : M)) {
      b = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (b && !m) {
    var y = t.constructor, v = e.constructor;
    y != v && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (b = !1);
  }
  return a.delete(t), a.delete(e), b;
}
var V3 = 1, Ao = "[object Arguments]", $o = "[object Array]", Ze = "[object Object]", K3 = Object.prototype, No = K3.hasOwnProperty;
function W3(t, e, n, r, i, a) {
  var o = H(t), s = H(e), c = o ? $o : ut(t), u = s ? $o : ut(e);
  c = c == Ao ? Ze : c, u = u == Ao ? Ze : u;
  var l = c == Ze, h = u == Ze, f = c == u;
  if (f && Gr(t)) {
    if (!Gr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new ht()), o || lu(t) ? $u(t, e, n, r, i, a) : B3(t, e, c, n, r, i, a);
  if (!(n & V3)) {
    var d = l && No.call(t, "__wrapped__"), g = h && No.call(e, "__wrapped__");
    if (d || g) {
      var b = d ? t.value() : t, m = g ? e.value() : e;
      return a || (a = new ht()), i(b, m, n, r, a);
    }
  }
  return f ? (a || (a = new ht()), G3(t, e, n, r, i, a)) : !1;
}
function ji(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Rt(t) && !Rt(e) ? t !== t && e !== e : W3(t, e, n, r, ji, i);
}
var Z3 = 1, J3 = 2;
function Q3(t, e, n, r) {
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
      var l = new ht(), h;
      if (!(h === void 0 ? ji(u, c, Z3 | J3, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Tu(t) {
  return t === t && !gt(t);
}
function t2(t) {
  for (var e = Zn(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Tu(i)];
  }
  return e;
}
function Su(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function e2(t) {
  var e = t2(t);
  return e.length == 1 && e[0][2] ? Su(e[0][0], e[0][1]) : function(n) {
    return n === t || Q3(n, t, e);
  };
}
function n2(t, e) {
  return t != null && e in Object(t);
}
function ku(t, e, n) {
  e = er(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = je(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && zi(i) && Kn(o, i) && (H(t) || su(t)));
}
function r2(t, e) {
  return t != null && ku(t, e, n2);
}
var i2 = 1, a2 = 2;
function o2(t, e) {
  return Ci(t) && Tu(e) ? Su(je(t), e) : function(n) {
    var r = kw(n, t);
    return r === void 0 && r === e ? r2(n, t) : ji(e, r, i2 | a2);
  };
}
function s2(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function u2(t) {
  return function(e) {
    return Ri(e, t);
  };
}
function c2(t) {
  return Ci(t) ? s2(je(t)) : u2(t);
}
function Fi(t) {
  return typeof t == "function" ? t : t == null ? ru : typeof t == "object" ? H(t) ? o2(t[0], t[1]) : e2(t) : c2(t);
}
function l2(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var f2 = l2();
function h2(t, e) {
  return t && f2(t, e, Zn);
}
function d2(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Re(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Di = d2(h2);
function p2(t) {
  return typeof t == "function" ? t : ru;
}
function Ft(t, e) {
  var n = H(t) ? Wv : Di;
  return n(t, p2(e));
}
function g2(t, e) {
  return Vn(e, function(n) {
    return [n, t[n]];
  });
}
function y2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var b2 = "[object Map]", _2 = "[object Set]";
function v2(t) {
  return function(e) {
    var n = ut(e);
    return n == b2 ? Nu(e) : n == _2 ? y2(e) : g2(e, t(e));
  };
}
var Pu = v2(Zn);
function m2(t, e) {
  var n = [];
  return Di(t, function(r, i, a) {
    e(r, i, a) && n.push(r);
  }), n;
}
function Yt(t, e) {
  var n = H(t) ? wu : m2;
  return n(t, Fi(e));
}
function w2(t, e) {
  var n = -1, r = Re(t) ? Array(t.length) : [];
  return Di(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function nr(t, e) {
  var n = H(t) ? Vn : w2;
  return n(t, Fi(e));
}
var x2 = Object.prototype, M2 = x2.hasOwnProperty;
function A2(t, e) {
  return t != null && M2.call(t, e);
}
function Eu(t, e) {
  return t != null && ku(t, e, A2);
}
var $2 = "[object Boolean]";
function N2(t) {
  return t === !0 || t === !1 || Rt(t) && qt(t) == $2;
}
function T2(t, e, n, r) {
  if (!gt(t))
    return t;
  e = er(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = je(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = gt(l) ? l : Kn(e[i + 1]) ? [] : {});
    }
    nm(s, c, u), s = s[c];
  }
  return t;
}
function S2(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = Ri(t, o);
    n(s, o) && T2(a, er(o, t), s);
  }
  return a;
}
function Ou(t, e) {
  if (t == null)
    return {};
  var n = Vn(g3(t), function(r) {
    return [r];
  });
  return e = Fi(e), S2(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var k2 = Math.ceil, P2 = Math.max;
function E2(t, e, n, r) {
  for (var i = -1, a = P2(k2((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function O2(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && im(e, n, r) && (n = r = void 0), e = yr(e), n === void 0 ? (n = e, e = 0) : n = yr(n), r = r === void 0 ? e < n ? 1 : -1 : yr(r), E2(e, n, r);
  };
}
var Qr = O2();
function z2() {
  var t = arguments, e = tr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
const k = {
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
}, T = {
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
}, zu = (t) => nr(
  Pu(t),
  (e) => {
    e[1].id = e[0], Eu(e[1], "label") || (e[1].label = z2(i3(e[0]), /_/g, " "));
  }
), Cu = (t) => nr(Pu(t), (e) => e[1]), Iu = (t, e) => Ft(t, (n, r) => n.widget = e[r]), C2 = (t) => Ou(t, (e) => Eu(e, "range")), I2 = (t) => Ou(t, (e) => N2(e.default));
ze().domain([0, 360]).range([0, 2 * Math.PI]);
ze().range([0, 360]).domain([0, 2 * Math.PI]);
const mr = (t, e) => {
  const n = t.x - e.x, r = t.y - e.y;
  return Math.sqrt(n * n + r * r);
}, Li = C2(T), qi = I2(T);
zu(Li);
zu(qi);
const Ru = Cu(Li), ju = Cu(qi), un = nr(
  Ru,
  (t) => iv().id(t.id).label(t.label).range(t.range).value(t.default).size(k.widgets.slider_size).girth(k.widgets.slider_girth).knob(k.widgets.slider_knob)
), cn = nr(
  ju,
  (t) => av().id(t.id).label(t.label).value(t.default)
);
Iu(ju, cn);
Iu(Ru, un);
const lt = Oi().actions(["play", "pause"]).id("play"), rr = Oi().actions(["back"]), ir = Oi().actions(["rewind"]), R2 = [lt, rr, ir], j2 = (t, e) => {
  const n = e.position(k.widgets.slider_anchor.x, Qr(un.length).map((i) => k.widgets.slider_anchor.y + k.widgets.slider_gap * i)), r = e.position(
    Qr(cn.length).map(
      (i) => k.widgets.toggle_anchor.x + k.widgets.toggle_gap * i
    ),
    k.widgets.toggle_anchor.y
  );
  un.forEach((i, a) => i.position(n[a])), cn.forEach((i, a) => i.position(r[a]).labelposition(k.widgets.toggle_label_pos)), lt.position(e.position(k.widgets.playbutton_anchor.x, k.widgets.playbutton_anchor.y)).size(k.widgets.playbutton_size), ir.position(e.position(k.widgets.backbutton_anchor.x, k.widgets.backbutton_anchor.y)), rr.position(e.position(k.widgets.resetbutton_anchor.x, k.widgets.resetbutton_anchor.y)), t.selectAll(null).data(un).enter().append(gr), t.selectAll(null).data(cn).enter().append(gr), t.selectAll(null).data(R2).enter().append(gr);
}, F2 = (t) => {
  Ft(Li, (e) => e.widget.reset(t, e.default)), Ft(qi, (e) => e.widget.reset(t, e.default));
}, ct = T.L, D2 = T.N, ti = T.dt, To = { x: 0, y: 0 }, So = Math.sqrt(ti);
var Dt = [];
const L2 = () => {
  const t = Math.random() * 2 * Math.PI;
  Dt.push({
    x: ct * Math.cos(t),
    y: ct * Math.sin(t),
    state: 1,
    polarity: Math.random()
  });
}, q2 = () => {
  T.timer = {}, T.tick = 0, Dt = Qr(D2).map(function(t, e) {
    return {
      x: 2 * ct * (Math.random() - 0.5),
      y: 2 * ct * (Math.random() - 0.5),
      state: 1,
      polarity: Math.random()
    };
  }), Dt.push({ x: 0, y: 0, state: 0, t: 0 });
}, X2 = () => {
  T.tick++;
  const t = T.speed.widget.value(), e = T.attraction.widget.value(), n = T.wiggle.widget.value(), r = T.twist.widget.value(), i = Yt(Dt, (o) => o.state == 1), a = Yt(Dt, (o) => o.state == 0);
  return Ft(i, (o) => {
    const s = o.polarity < T.twist_mix.widget.value() ? 1 : -1, c = mr(o, To);
    let u = t * ti * ((-e * o.x + s * r * o.y) / c) + n * (Math.random() - 0.5) * So * Math.sqrt(t), l = t * ti * ((-e * o.y - s * r * o.x) / c) + n * (Math.random() - 0.5) * So * Math.sqrt(t), h = o.x + u, f = o.y + l;
    (h < -ct || h > ct) && (u *= -1), (f < -ct || f > ct) && (l *= -1), o.x += u, o.y += l;
  }), Ft(i, (o) => {
    Yt(a, (c) => mr(o, c) < 2 * T.agentsize * 0.9).length > 0 && (o.state = 0, o.t = T.tick, L2());
  }), Yt(a, (o) => mr(o, To) > ct - 3).length > 0;
}, Je = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, B2 = {
  roma: qe(Mt, Je.romaO),
  vik: qe(Mt, Je.vikO),
  broc: qe(Mt, Je.brocO),
  bam: qe(Mt, Je.bamO),
  sinebow: Bh
}, On = T.L;
T.N;
const ei = ze().domain([-On, On]), ni = ze().domain([-On, On]), H2 = B2[k.simulation.colormap];
var ri, ii, tt, ln;
const Xi = () => {
  tt.clearRect(0, 0, ri, ii);
  const t = Yt(Dt, (r) => r.state == 0), e = Yt(Dt, (r) => r.state == 1), n = ln.display_size.width / (2 * T.L);
  T.hide_particles.widget.value() == !1 && Ft(e, (r) => {
    tt.beginPath(), tt.arc(ei(r.x), ni(r.y), T.agentsize * n, 0, 2 * Math.PI, !1), tt.fillStyle = k.simulation.color_free, tt.fill();
  }), Ft(t, (r) => {
    tt.beginPath(), tt.arc(ei(r.x), ni(r.y), T.agentsize * n, 0, 2 * Math.PI, !1), tt.fillStyle = T.orlis_switch.widget.value() ? H2(r.t % k.simulation.color_period / k.simulation.color_period) : k.simulation.color_fixed, tt.fill();
  });
}, U2 = (t, e) => {
  ln = e, ri = ln.display_size.width, ii = ln.display_size.height, ei.range([0, ri]), ni.range([0, ii]), tt = t.node().getContext("2d"), Xi();
}, Y2 = (t, e) => {
  Xi();
}, G2 = (t, e) => {
  Xi();
};
function V2(t, e, n) {
  let r = !1;
  r = X2(), Y2(), r && (e.select("#button_play").transition(1e3).style("opacity", 0), e.select("#button_play").style("pointer-events", "none"), lt.press(e));
}
function Fu(t, e, n) {
  e.select("#button_play").transition(1e3).style("opacity", 1), e.select("#button_play").style("pointer-events", null), q2(), U2(t, n);
}
function ko(t, e) {
  G2();
}
var Po = {};
const K2 = (t, e, n) => {
  lt.value() == 1 ? Po = lf(() => V2(t, e), k.simulation.delay) : Po.stop();
}, W2 = (t, e, n) => {
  ir.update(() => F2(e)), lt.update(() => K2(t, e)), rr.update(() => Fu(t, e, n)), T.hide_particles.widget.update(() => ko()), T.orlis_switch.widget.update(() => ko());
}, Z2 = {
  name: "@explorables/particularly_stuck",
  title: "Particularly Stuck",
  subtitle: "Diffusion Limited Aggregation",
  description: "This explorable illustrates a model for fractal growth patterns in natural systems based on the aggregation of randomly moving particles.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function J2(t, e = Du) {
  const n = hv(t, e), r = n.display, i = n.controls, a = n.grid;
  return j2(i, a), W2(r, i, e), Fu(r, i, e), {
    halt() {
      lt.value() === 1 && lt.press(i);
    },
    reset() {
      lt.value() === 1 && lt.press(i), ir.press(i), rr.press(i);
    },
    config: e,
    meta: Z2
  };
}
export {
  Du as config,
  J2 as default,
  J2 as load,
  Z2 as meta
};
