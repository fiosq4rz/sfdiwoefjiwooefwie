var Ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(Q, sa, t) {
    if (t.get || t.set) throw new TypeError("ES3 does not support getters and setters.");
    Q != Array.prototype && Q != Object.prototype && (Q[sa] = t.value)
},
ab = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function ob() {
ob = function() {};
ab.Symbol || (ab.Symbol = pb)
}
var qb = 0;

function pb(Q) {
return "jscomp_symbol_" + (Q || "") + qb++
}

function Ae() {
ob();
var Q = ab.Symbol.iterator;
Q || (Q = ab.Symbol.iterator = ab.Symbol("iterator"));
"function" != typeof Array.prototype[Q] && Ba(Array.prototype, Q, {
    configurable: !0,
    writable: !0,
    value: function() {
        return Be(this)
    }
});
Ae = function() {}
}

function Be(Q) {
var sa = 0;
return Ce(function() {
    return sa < Q.length ? {
        done: !1,
        value: Q[sa++]
    } : {
        done: !0
    }
})
}

function Ce(Q) {
Ae();
Q = {
    next: Q
};
Q[ab.Symbol.iterator] = function() {
    return this
};
return Q
}

function De(Q, sa) {
Ae();
Q instanceof String && (Q += "");
var t = 0,
    W = {
        next: function() {
            if (t < Q.length) {
                var Y = t++;
                return {
                    value: sa(Y, Q[Y]),
                    done: !1
                }
            }
            W.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            };
            return W.next()
        }
    };
W[Symbol.iterator] = function() {
    return W
};
return W
}

function Ee(Q, sa) {
if (sa) {
    for (var t = ab, W = Q.split("."), Y = 0; Y < W.length - 1; Y++) {
        var O = W[Y];
        O in t || (t[O] = {});
        t = t[O]
    }
    W = W[W.length - 1];
    Y = t[W];
    O = sa(Y);
    O != Y && null != O && Ba(t, W, {
        configurable: !0,
        writable: !0,
        value: O
    })
}
}
Ee("Array.prototype.values", function(Q) {
return Q ? Q : function() {
    return De(this, function(Q, t) {
        return t
    })
}
});
Ee("Array.prototype.fill", function(Q) {
return Q ? Q : function(Q, t, W) {
    var Y = this.length || 0;
    0 > t && (t = Math.max(0, Y + t));
    if (null == W || W > Y) W = Y;
    W = Number(W);
    0 > W && (W = Math.max(0, Y + W));
    for (t = Number(t || 0); t < W; t++) this[t] = Q;
    return this
}
});
window.Runtime = function(Q, sa) {
function t(a, b) {
    this.files = {};
    this.root = "";
    a && this.load(a, b)
}

function W(a, b, c) {
    this.x = a;
    this.y = b;
    this.text = c
}

function Y() {
    this.pd = "";
    this.offset = this.S = 0;
    this.od = !1
}

function O() {
    this.Vd = []
}

function ba(a, b, c, d) {
    this.left = a ? a : 0;
    this.top = b ? b : 0;
    this.right = c ? c : 0;
    this.bottom = d ? d : 0
}

function ta() {
    this.y = this.x = 0
}

function Sa() {
    this.Gb = 12;
    this.se = 400;
    this.re = 0;
    this.qe = "Arial";
    this.dj = !1
}

function na(a, b) {
    this.app = a;
    this.Ca = b;
    this.ka = new O;
    this.vk = null
}

function ka(a, b, c) {
    this.app =
        a;
    this.width = b;
    this.height = c;
    this.canvas = document.createElement("canvas");
    this.canvas.width = b;
    this.canvas.height = c;
    this.Wd = this.canvas.getContext("2d")
}

function Ha() {
    this.aK = !!window.opr && !!opr.OQ || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
    this.$J = "undefined" !== typeof InstallTrigger;
    this.dK = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
    this.oo = !!document.documentMode;
    this.YJ = !this.oo && !!window.StyleMedia;
    (this.HB = !!window.chrome && !!window.chrome.webstore) || this.YJ || this.oo || this.$J || this.aK || this.dK || this.HD(Ha.LI);
    this.version = this.ID(navigator.userAgent) || this.ID(navigator.appVersion) || "Unknown version";
    this.HD(Ha.NI)
}

function ya() {
    this.Lu = null;
    this.height = this.width = 0;
    this.wg = null;
    this.Ca = this.color = 0;
    this.mJ = null;
    this.Yr = this.Iv = this.XJ = this.XA = this.Hd = 0;
    this.Ku = null;
    this.dj = !0
}

function V() {}

function rb() {
    this.Ca = 0;
    this.name = null;
    this.index = 0
}

function ga() {}

function sb() {}

function tb() {}

function ub() {}

function vb() {}

function wb() {}

function xb() {}

function yb() {}

function zb() {}

function Ab() {}

function Bb() {}

function Cb() {}

function Db() {}

function Eb() {}

function Fb() {}

function Gb() {}

function Hb() {}

function Ib() {}

function Jb() {}

function Kb() {}

function Lb() {}

function Mb() {}

function Nb() {}

function Ob() {}

function Pb() {}

function Qb() {}

function Rb() {}

function Sb() {}

function Tb() {}

function Ub() {}

function Vb() {}

function Wb() {}

function Xb() {}

function Yb() {}

function Zb() {}

function $b() {}

function ac() {}

function bc() {}

function cc() {}

function dc() {}

function L() {}

function wa() {}

function bb() {}

function L() {}

function ec() {}

function fc() {}

function gc() {}

function hc() {}

function ic() {}

function jc() {}

function kc() {}

function lc() {}

function mc() {}

function nc() {}

function oc() {}

function pc() {}

function qc() {}

function rc() {}

function sc() {}

function tc() {}

function uc() {}

function cb() {}

function vc() {}

function wc() {}

function xc() {}

function yc() {}

function zc() {}

function Ac() {}

function Bc() {}

function ea() {}

function db() {}

function xa() {}

function eb() {}

function Cc() {}

function Dc() {}

function Ec() {}

function Fc() {}

function Gc() {}

function Hc() {}

function Ic() {}

function Jc() {}

function Kc() {}

function Lc() {}

function Mc() {}

function Nc() {}

function Oc() {}

function Pc() {}

function Qc() {}

function Rc() {}

function Sc() {}

function Tc() {}

function Uc() {}

function Vc() {}

function Wc() {}

function fb() {
    oa.Xc.tK()
}

function Xc() {
    oa.Xc.yK()
}

function l(a, b, c, d) {
    (this.KB = !0 === d) ? (this.canvas = a.canvas, this.hs = a.hs) : "string" ===
    typeof a ? (this.canvas = document.getElementById(a), this.hs = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.hs = a);
    a = this.Qu = a.Qu || document.createElement("div");
    a.appendChild(this.canvas);
    this.hs.appendChild(a);
    a.style.overflow = "hidden";
    a.style.position = "relative";
    a.style.transform = "translateZ(0)";
    a.style.margin = "0";
    a.style.padding = "0";
    a.style.display = "block";
    a.style.boxSizing = "content-box";
    a.className = "MMFDiv";
    this.ZA = this.$A = this.lv = null;
    this.cm =
        0;
    this.appName = this.mv = null;
    this.qm = 0;
    this.xv = this.zB = null;
    this.Eo = 0;
    this.up = this.pc = this.Xg = this.Ub = this.ba = this.Wc = this.wv = null;
    this.ab = this.dE = 0;
    this.Yn = this.Zn = this.aD = this.pp = this.ro = null;
    this.Ee = this.Ib = this.Sx = 0;
    this.Da = this.file = this.frame = null;
    this.Xw = this.Yw = this.Yk = 0;
    this.ei = this.I = null;
    this.dw = !1;
    this.cB = this.Ff = this.bB = this.dB = this.eB = this.wa = this.oa = this.ao = this.$n = this.Zf = this.Yf = 0;
    this.Wn = this.Zw = this.$C = null;
    this.Of = this.Nf = this.KI = this.JI = this.Xn = 0;
    this.nc = null;
    this.mA = 0;
    this.cursor =
        "auto";
    this.ts = !1;
    this.zk = this.br = null;
    this.od = !1;
    this.Tj = this.Rj = 0;
    this.rw = this.mC = null;
    this.Ma = this.alpha = this.Zd = this.Yd = this.rA = 0;
    this.file = b;
    this.Dj = "";
    this.path = c;
    b = c.lastIndexOf("/");
    0 <= b && (this.Dj = c.substring(0, b + 1));
    this.pg = 0;
    this.I = null;
    this.Kh = this.Lh = this.jd = 0;
    this.Lk = !1;
    this.$a = [];
    this.Uo = -1;
    this.os = this.al = this.eD = this.gD = this.fD = this.dD = this.cD = 0;
    this.Xf = this.kd = this.Wx = this.transition = null;
    this.Cu = !1;
    this.Iq = new Ha;
    this.ah = this.$g = this.sf = null;
    this.zo = l.jk;
    this.ya = null;
    this.xn = this.Oh =
        0;
    this.nu = null;
    this.zh = this.yh = this.lk = this.kk = 0;
    this.ic = this.jc = 1;
    this.hasFocus = !0;
    this.lo = this.Du = !1;
    this.yv = this.ps = null;
    this.xr = -1;
    this.no = null;
    this.mo = 1E9;
    this.wr = null;
    0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.wr = window.location.href.substring(0, b + 6), this.xr = -1, this.mo = 25));
    this.ig = !1;
    this.MI = 3;
    this.In = new O;
    this.Wq = new O;
    this.Lb = [];
    this.de = 0;
    this.Se = null;
    this.iw = "Please touch the screen to start";
    this.fullScreen = !1;
    this.tE = "***version***";
    this.$x = this.Cp = 0;
    this.Mf = null
}

function Ta(a, b, c) {
    this.changedTouches = Array(1);
    this.changedTouches[0] = {
        pageX: a,
        pageY: b,
        target: c,
        identifier: l.zy
    }
}

function E(a) {
    this.app = a;
    this.s = null;
    this.MB = this.wc = this.rd = 0;
    this.Cr = !1;
    this.Wb = 0;
    this.Dr = null;
    this.po = this.qo = 0;
    this.aB = null;
    this.Nc = 0;
    this.Rn = this.zd = this.tb = null;
    this.RB = this.Rr = this.Uv = this.Tv = this.fj = this.ej = this.Cg = 0;
    this.ud = this.td = this.xo = this.fv = this.Tn = null;
    this.jo = this.ya = this.de = 0
}

function Z(a) {
    this.app = a;
    this.gb = null;
    this.yu = !1;
    this.xz = !0;
    this.zn = this.fn = null;
    this.jw = 0;
    this.wk = null;
    this.Wu = !1;
    this.gb = Array(Z.cd);
    this.fn = Array(Z.cd);
    this.zn = Array(Z.cd);
    this.yu = this.xz = !0;
    var b;
    for (b = 0; b < Z.cd; b++) this.gb[b] = null, this.fn[b] = 100, this.zn[b] = !1;
    this.jw = 100;
    b = new Audio;
    var c = Array(4);
    c[0] = b.canPlayType("audio/ogg");
    c[1] = b.canPlayType("audio/x-m4a");
    c[2] = b.canPlayType("audio/mpeg");
    c[3] = b.canPlayType("audio/wav");
    for (b = this.kw = this.ex = 0; 4 > b; b++) "probably" == c[b] && (this.ex |= 1 << b), "maybe" == c[b] && (this.kw |= 1 << b);
    for (; null != a.Da;) a = a.Da;
    this.context =
        a.up;
    this.Vl = a.dE;
    null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.Vl = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.Vl = 0), a.up = this.context, a.dE = this.Vl)
}

function Yc(a) {
    this.app = a
}

function Zc(a) {
    this.app = a;
    this.Mv = !1;
    this.D = null;
    this.context = this.app.context;
    this.lf = this.app.fD;
    this.color = this.app.eD;
    this.ui = this.app.cD;
    0 > this.ui && (this.ui = this.app.oa / 2);
    this.vi = this.app.dD;
    0 > this.vi && (this.vi = this.app.wa / 2);
    this.size =
        this.app.gD;
    this.Qw = 0;
    this.Qq = 25;
    this.Ne = 0;
    this.wg = new Image;
    var b = this;
    this.wg.onload = function() {
        b.Mv = !0
    };
    this.wg.src = this.app.Dj + "Preloader.png"
}

function $c(a) {
    this.app = a;
    this.context = this.app.context;
    this.width = 100;
    this.height = 12;
    this.position = 0;
    this.hI = 10526880;
    this.borderColor = 8421504;
    this.iI = 0;
    this.rect = new ba;
    this.rect.left = this.app.oa / 2 - this.width / 2;
    this.rect.top = this.app.wa / 2 - this.height / 2;
    this.rect.right = this.rect.left + this.width;
    this.rect.bottom = this.rect.top + this.height;
    this.reset()
}

function ad(a) {
    this.app =
        a;
    this.Mv = !1;
    this.Hc = new Ca;
    this.D = new l(this.app, this.app.file, this.app.path, !0);
    this.D.MD(this.app, this.app.os, 0, this.Hc, this.app.oa, this.app.wa);
    this.D.digest();
    this.D.dw = !1;
    this.D.si = !1;
    this.D.Ma &= ~l.xi;
    this.D.Rx();
    this.D.Vs(0, 0);
    this.D.wp();
    this.Hc.x = this.app.oa / 2 - this.D.frame.rd / 2;
    this.Hc.y = this.app.wa / 2 - this.D.frame.wc / 2;
    this.kM = 0 != (this.app.Ma & l.BE);
    this.app.$a.push(this.D);
    this.Xl = 0
}

function r(a) {
    this.app = a;
    this.WA = this.VA = this.ae = this.Fd = this.Br = this.ec = null;
    this.cc = Array(3);
    this.dc = Array(3);
    this.Ca = this.ya = this.Jf = this.If = 0;
    this.touches = Array(3);
    this.Au = !1;
    this.JB = !0;
    this.cf = this.xg = this.LB = 0
}

function h(a) {
    this.h = a;
    this.C = null;
    this.Rg = this.ob = this.Wm = this.Hx = this.Cb = this.Rc = this.Qc = this.Gx = this.xe = 0;
    this.i = this.T = null;
    this.oi = this.gp = this.ip = this.pl = this.pi = this.Ya = this.Fx = this.ni = this.hp = this.ql = this.ga = this.ca = this.Pd = this.Od = 0;
    this.Ds = this.yx = this.Es = null;
    this.Ks = this.zx = this.Pm = this.Lm = this.Rm = this.Nm = this.Om = this.Km = this.Qm = this.Mm = this.jl = this.fd = this.ll = this.kl = this.Hj = this.Gj =
        this.xD = this.Uf = this.li = this.ki = this.cp = this.hl = 0;
    this.ml = null;
    this.fa = this.Vm = this.Ns = this.Ms = this.Sm = this.Ax = this.BD = 0;
    this.Js = this.Um = this.va = null;
    this.yd = 0;
    this.Is = this.nl = null;
    this.Tm = 0;
    this.ol = null;
    this.Cc = 0;
    this.ss = null;
    this.An = !1;
    this.H = null;
    this.Jv = Array(2);
    this.Jh = !1;
    this.RA = 0;
    this.Ex = 255;
    this.us = this.NK = !1
}

function bd() {
    this.pI = null;
    this.Vz = this.Uz = this.Tz = this.rI = this.qI = this.En = 0
}

function M() {
    this.Pw = this.Ow = this.lb = this.Md = this.cb = this.ad = 0;
    this.Rf = !1;
    this.Qo = this.TC = this.UC = this.VC =
        this.xm = this.Ld = this.gs = this.wd = this.$c = this.vj = this.Gg = this.tj = this.Mw = this.Lw = this.Hg = 0;
    this.uj = this.ym = null;
    this.Nw = 0;
    this.sj = null
}

function Fe() {
    this.Qf = this.name = null
}

function Ge() {
    this.value = null;
    this.Ps = this.Qs = this.Sc = this.vb = 0
}

function He() {
    this.text = null;
    this.vb = 0
}

function Ie() {
    this.ka = this.values = null;
    this.Ca = 0
}

function ca() {
    this.HK = 0;
    this.FK = null;
    this.GK = 0;
    this.R = this.j = null
}

function u() {
    this.Li = this.Ah = this.Ud = null
}

function Ma() {
    this.xf = 0;
    this.Ki = this.yf = null
}

function cd() {
    this.Ql = this.pz =
        this.oz = this.pu = this.qu = 0;
    this.mk = null
}

function Ia() {
    this.a = null;
    this.zj = this.ws = this.Lg = 0;
    this.nx = !1;
    this.cl = 0;
    this.we = null;
    this.xs = this.vs = 0;
    this.$o = null;
    this.Fm = this.Dm = this.kf = this.Mg = this.nD = this.dl = this.Cm = this.Zo = this.mD = this.Em = this.yj = this.mx = 0;
    this.oD = -1
}

function dd(a, b) {
    this.ba = a;
    this.app = a.app;
    this.handle = b
}

function ed(a) {
    this.app = a;
    this.images = this.file = null;
    this.ff = this.kj = this.Hb = 0;
    this.bi = this.Lb = this.ci = this.nk = this.Kk = this.fi = this.Ta = this.Fa = this.Vk = null
}

function ha() {
    this.app = null;
    this.Ta = this.fh = this.eh = this.Ha = this.Ja = this.height = this.width = this.handle = 0;
    this.Qh = this.km = this.Ag = this.Ab = null;
    this.ud = this.td = this.Bb = 0
}

function fd(a) {
    this.app = a;
    this.es = this.fonts = this.file = null;
    this.Rh = 0;
    this.Fa = null;
    this.Bg = this.ce = 0;
    this.Ta = null;
    this.Ho = new za;
    this.Ho.Sq()
}

function za() {
    this.re = this.se = this.Gb = this.handle = this.Ta = 0;
    this.font = this.qe = null;
    this.dj = !1
}

function gd(a) {
    this.app = a;
    this.ul = null;
    this.Fo = this.kj = this.Hb = 0;
    this.file = this.Ta = this.Fa = this.fs = null
}

function Ua(a) {
    this.Xc =
        a;
    this.context = a.pc.context;
    this.Vl = a.pc.Vl;
    this.oJ = a.pc.oJ;
    this.type = 0;
    this.file = a.file;
    this.handle = -1;
    this.wb = this.source = null;
    this.Ta = 0;
    this.Cn = !1;
    this.Sh = 0;
    this.name = null;
    this.Qi = this.Hq = this.Ch = !1;
    this.frequency = 0;
    this.gain = this.response = null
}

function hd(a) {
    this.name = a;
    this.gL = [];
    this.position = 0;
    this.QB = !1
}

function R(a) {
    this.Xc = a;
    this.s = null;
    this.IC = this.Cg = 0;
    this.zw = Array(q.le + q.Uy);
    this.Do = this.Th = 0;
    this.Mk = this.og = this.sc = this.fc = this.Ob = this.$d = this.Kg = null;
    this.Oe = Array(q.le + 1);
    this.DD = !1;
    this.Ue = null;
    this.Wo = this.Yo = this.Vo = this.Xo = 0;
    this.fp = !1;
    this.Qg = null;
    this.Os = 0;
    this.Ls = Array(4);
    this.Jm = this.fl = this.Ej = !1;
    this.Hs = this.ii = this.el = this.Yb = 0;
    this.yD = this.Pg = !1;
    this.Ng = null;
    this.ep = this.qf = this.Og = 0;
    this.gl = this.ji = null;
    this.Ic = 0;
    this.Bc = !1;
    this.Cs = this.Dx = this.Dc = this.CD = 0;
    this.Cx = null;
    this.Bn = !1;
    this.Fj = null;
    this.IL = 0;
    this.il = null;
    this.Hu = !1;
    this.XB = 0
}

function F() {
    this.$l = this.Xi = this.La = this.Fe = this.ac = 0;
    this.ib = null
}

function T() {}

function Je() {
    this.OA = this.id = 0
}

function Ke() {
    this.rs =
        this.qs = 0
}

function Le(a, b, c, d, e) {
    this.KL = a;
    this.code = b;
    this.YK = c;
    this.XK = d;
    this.Zh = e
}

function Me() {
    this.gx = this.fx = this.wj = this.Bm = this.xj = this.Ig = 0;
    this.hx = this.Sf = !1;
    this.Aa = null
}

function gb() {
    this.next = null;
    this.type = 0;
    this.name = null;
    this.index = this.Jr = this.xp = this.oM = this.jd = 0;
    this.xu = !1
}

function Aa() {
    this.Fr = this.NB = this.Xv = this.Zv = this.Yv = this.Kf = this.gj = 0;
    this.Wv = null;
    this.Wv = Array(4);
    var a;
    for (a = 0; 4 > a; a++) this.Wv[a] = null
}

function id() {
    this.Fa = this.list = null;
    this.Er = this.Pf = 0
}

function X(a) {
    this.app =
        a;
    this.$q = this.Zq = this.y = this.x = 0;
    this.Eq = this.Am = this.zm = null;
    this.ne = !1;
    this.Xk = null;
    this.Cz = this.Bz = this.Ez = this.Dz = this.Az = this.Zd = this.Yd = this.Zr = this.Xr = this.Sj = this.Qj = this.Ma = this.Aw = 0;
    this.Qa = this.Nb = this.hc = null;
    this.angle = 0;
    this.scale = this.ic = this.jc = 1;
    this.Ja = this.Dp = 320;
    this.Ha = this.Fp = 240
}

function ia(a, b, c, d, e, f) {
    this.app = a;
    this.qK = d;
    this.gf = this.type = 0;
    this.x = b;
    this.y = c;
    this.height = this.width = 0;
    this.ee = null;
    this.Tl = !1;
    this.ed = null;
    this.borderWidth = 0;
    this.borderColor = this.Pu = this.sk =
        null;
    this.Zd = this.Yd = 0;
    this.j = this.body = null;
    if (d)
        if (this.ee = this.app.Wc.Gk(d.Kf), this.type = this.ee.Me, this.gf = this.ee.oc.NC, this.borderWidth = this.ee.oc.ds, this.AB = this.ee.oc.Lo, this.Yd = this.ee.Iw, this.Zd = this.ee.Jw, this.width = this.ee.oc.KC, this.height = this.ee.oc.LC, this.Tl = 0 != this.ee.oc.JC, this.sk = this.ee.oc.Dg, this.Pu = this.ee.oc.um, this.borderColor = this.ee.oc.cs, 1 == this.type) this.ed = this.app.ba.sb(this.ee.oc.Vh), this.width = this.ed.width, this.height = this.ed.height;
        else {
            if (32 <= this.type) {
                a = this.app.I;
                b = null;
                for (e = c = 0; e < a.ob; e++) {
                    for (; null == a.H[c];) c++;
                    b = a.H[c];
                    c++;
                    if (b.rK == d) break
                }
                this.j = b
            }
        }
    else {
        this.type = q.Wy;
        this.ed = e;
        this.width = this.ed.width;
        this.height = this.ed.height;
        this.x -= this.ed.Ja;
        this.y -= this.ed.Ha;
        switch (f) {
            case 0:
                this.gf = aa.$y;
                break;
            case 1:
                this.gf = aa.mq;
                break;
            case 2:
                this.gf = aa.fg;
                break;
            case 3:
                this.gf = aa.fu
        }
        this.Tl = !1
    }
}

function q() {
    this.Jw = this.Iw = this.$h = this.Me = this.Oo = 0;
    this.oc = this.Kw = null;
    this.SC = this.RC = 0
}

function jd() {
    this.Fg = this.zc = this.rj = 0;
    this.qj = this.Po = this.ai = null;
    this.Vq =
        0
}

function aa() {}

function kd() {
    this.Vh = 0
}

function Ja() {
    this.Vh = this.Lo = this.um = this.Dg = this.Mo = this.nj = this.Wh = this.cs = this.ds = 0
}

function z() {
    this.Eg = 0;
    this.Fw = null;
    this.yc = this.oj = 0;
    this.Zc = this.kb = this.mj = this.No = this.wm = this.hf = null;
    this.OC = this.PC = this.MC = 0;
    this.Ko = this.vm = null
}

function ld() {
    this.Kd = this.QC = this.Yh = this.Xh = 0;
    this.Gw = null
}

function md() {
    this.gA = this.hA = this.fA = 0
}

function ja() {
    this.pm = this.Lo = this.um = this.Dg = this.Mo = this.nj = this.Wh = this.cs = this.ds = this.pj = this.Uk = this.jf = this.Hw =
        this.Yh = this.Xh = 0;
    this.frames = null
}

function nd() {
    this.Yh = this.Xh = this.Kd = 0;
    this.text = null
}

function pa() {
    this.Xx = this.Bp = this.cn = 0;
    this.ti = null
}

function od() {
    this.Wk = this.Ww = this.Vw = 0;
    this.Xb = null
}

function G() {
    this.lc = this.Vb = 0;
    this.c = null;
    this.Av = this.xa = this.bc = this.vg = this.bf = this.Jk = 0;
    this.Kb = null;
    this.Bv = 0;
    this.tr = this.BB = null;
    this.ur = this.fm = 0;
    this.O = this.em = null;
    this.PJ = this.af = this.be = this.Ev = this.X = this.ta = this.J = this.K = this.ja = this.ia = this.m = this.ug = this.o = this.tg = 0;
    this.io = !1;
    this.F = this.N =
        this.ha = this.A = this.b = null
}

function pd() {
    this.Ox = !1;
    this.wg = null;
    this.pa = !1;
    this.za = null;
    this.ne = !0;
    this.jc = this.ic = 1;
    this.y = this.x = this.angle = 0;
    this.yl = null
}

function K() {
    this.Kd = this.Ca = 0;
    this.D = null;
    this.Uw = this.Tw = 0;
    this.WC = this.level = -1;
    this.hm = null;
    this.ne = !0
}

function qd() {
    this.fe = this.Oc = this.hi = 0;
    this.Ga = -1;
    this.nb = this.mb = 1;
    this.eb = this.gi = this.$ = this.Sa = this.Ua = 0;
    this.Ra = this.M = !1;
    this.Bj = this.Aj = 0;
    this.zs = -1;
    this.tx = this.rx = this.sx = this.qx = this.px = this.ys = 0
}

function da() {
    this.hd = this.gd =
        this.Sc = this.vb = this.sa = this.type = 0;
    this.yz = this.pa = !1;
    this.Cd = this.Pf = this.Tg = this.mp = this.Ec = 0;
    this.Pi = !1;
    this.za = this.la = null;
    this.Hd = 0;
    this.font = null;
    this.Xd = this.Pa = !1
}

function rd() {
    this.type = this.Ec = this.Fc = this.hd = this.gd = this.sa = this.sl = 0;
    this.pa = !0;
    this.Pf = 0;
    this.la = null;
    this.Cd = 0;
    this.za = null;
    this.Hd = 0;
    this.alpha = 1;
    this.tk = "source-over";
    this.Xd = !1
}

function sd() {
    this.type = this.Ec = this.Fc = this.hd = this.gd = this.sa = this.sl = 0;
    this.pa = !0;
    this.Pf = 0;
    this.la = null;
    this.Cd = 0;
    this.za = null;
    this.Hd = 0;
    this.alpha = 1;
    this.tk = "source-over";
    this.Xd = !1
}

function td() {
    this.ri = null;
    this.np = this.Fc = this.vb = this.Sc = 0;
    this.font = null;
    this.pa = !0;
    this.FD = this.Ca = 0;
    this.la = this.za = null;
    this.Pa = !1;
    this.rect = new ba;
    this.hd = this.gd = this.deltaY = 0;
    this.pb = null;
    this.Xd = !1
}

function ud() {
    this.hd = this.gd = 0;
    this.Nd = null;
    this.uk = 0;
    this.Yg = []
}

function vd(a, b) {
    this.ext = b.h.br.Hr(a);
    this.Cw = !1;
    this.Ew = this.Jo = this.dx = 0;
    this.Pa = !1;
    this.pa = !0;
    this.la = this.za = null
}

function Na() {}

function Oa() {
    this.hm = this.dir = this.y = this.x = 0;
    this.zu = !1
}

function wd(a) {
    a.file.v();
    this.it = a.file.v()
}

function Ne(a) {
    this.jd = a.file.w();
    this.Jr = a.file.w();
    this.Ui = a.file.v()
}

function Oe(a) {
    this.color = a.file.Pc()
}

function Pe(a) {
    this.Xl = a.file.w();
    this.vI = a.file.w()
}

function qa(a) {
    this.Ui = a.file.v();
    for (var b = a.file.S, c = 0, d;;) {
        c++;
        d = a.file.w();
        if (0 == d) break;
        d = a.file.v();
        6 < d && a.file.ma(d - 6)
    }
    a.file.seek(b);
    this.Ia = Array(c);
    for (b = 0; b < c; b++) this.Ia[b] = ea.create(a.file)
}

function Qe(a) {
    var b = a.file.v();
    a.file.ma(4);
    this.data = 0;
    6 < b && (this.data = a.file.S,
        a.file.ma(b - 6))
}

function la(a) {
    this.sg = a.file.v();
    this.HJ = a.file.v()
}

function Re(a) {
    a.file.ma(4);
    this.S = 0;
    this.id = a.file.v()
}

function Ka(a) {
    this.value = a.file.w();
    this.it = 0
}

function xd(a) {
    this.key = a.file.v()
}

function Se(a) {
    this.Mb = a.file.Z();
    this.Zh = a.file.Z();
    this.type = a.file.Z()
}

function ma() {}

function yd(a) {
    this.So = a.file.Z();
    this.$k = a.file.Z();
    this.ms = a.file.Z();
    this.ns = a.file.Z();
    this.ks = a.file.Z();
    this.$w = a.file.Z();
    this.js = a.file.w();
    this.ls = a.file.Z();
    this.To = a.file.Z();
    this.ax = a.file.Z()
}

function hb(a) {
    this.So = a.file.Z();
    this.$k = a.file.Z();
    this.ms = a.file.Z();
    this.ns = a.file.Z();
    this.ks = a.file.Z();
    this.$w = a.file.Z();
    this.js = a.file.w();
    this.ls = a.file.Z();
    this.To = a.file.Z();
    this.ax = a.file.Z();
    this.Kq = a.file.v();
    this.Kz = a.file.v()
}

function zd(a) {
    this.So = a.file.Z();
    this.$k = a.file.Z();
    this.ms = a.file.Z();
    this.ns = a.file.Z();
    this.ks = a.file.Z();
    this.$w = a.file.Z();
    this.js = a.file.w();
    this.ls = a.file.Z();
    this.To = a.file.Z();
    this.ax = a.file.Z();
    this.Kq = a.file.Z();
    this.Kz = a.file.Z();
    a.file.ma(4);
    a.file.v()
}

function Pa(a) {
    this.Qx = a.file.v();
    this.cE = a.file.v()
}

function fa(a) {
    this.value = a.file.v()
}

function Va(a) {
    this.Tb = a.file.ub()
}

function Te(a) {
    this.jd = a.file.w();
    this.Jr = a.file.w()
}

function Ue(a) {
    a.file.Z();
    a.file.Z();
    a.file.Z();
    a.file.Z()
}

function Wa() {
    this.qk = []
}

function Da(a) {
    this.Gp = this.Ep = 1;
    this.Rw = -1;
    this.Sw = this.Ox = !1;
    this.yk = this.xk = 0;
    if (!(this.Oa = a.getContext("2d"))) throw Error("Failed to init standard renderer");
}

function ua() {
    this.Kn = "";
    this.nA = this.zp = this.Ap = this.nE = this.oE = 0
}

function Ad() {}

function v() {
    this.l = this.to = this.so = this.Mr = 0;
    this.ua = this.SB = !1;
    this.Gh = this.tA = this.u = this.aa = null
}

function Bd(a) {
    this.app = a
}

function Qa() {}

function Cd() {
    this.TB = this.f = this.g = this.bb = 0
}

function Dd() {
    this.f = this.g = this.bb = 0
}

function Ed() {
    this.Db = this.xc = this.Fu = this.Af = 0;
    this.IK = null
}

function Fd() {
    this.f = this.g = this.Yq = this.Wa = 0
}

function Gd() {
    this.Db = this.xc = this.hj = 0
}

function Hd() {}

function Id() {
    this.f = this.g = this.Mn = this.bb = this.Wa = 0
}

function Jd() {
    this.hw;
    this.Pk = this.Rk = this.zg = this.Ke = this.L =
        0;
    this.te = null
}

function Kd() {
    this.f = this.g = this.bb = 0
}

function Ld() {
    this.gw = this.f = this.g = this.bb = 0
}

function Md() {
    this.hj;
    this.xc;
    this.Db
}

function Nd() {
    this.f = this.g = this.CA = this.Wa = this.bb = 0
}

function Od() {
    this.f = this.g = this.bb = 0
}

function Pd() {
    this.gc = this.f = this.g = this.bb = 0
}

function Qd() {
    this.Ok = this.Nk = this.f = this.g = this.bb = 0
}

function Rd() {
    this.jm = this.f = this.g = this.BA = this.Ln = this.Wa = 0
}

function Sd() {
    this.Lr = this.f = this.g = this.Ln = this.Wa = 0
}

function Td() {
    this.Kr = this.Pr = this.Qr = this.Nr = this.sd = this.fw =
        this.ea = this.da = this.Pk = this.Rk = this.zg = this.Ke = this.L = this.wE = this.ot = this.ay = 0
}

function Ud() {
    this.Lf = this.Qk = this.f = this.g = this.Wa = this.bb = 0
}

function Vd() {}

function Wd() {
    this.f = this.g = this.Wa = 0
}

function Xd(a, b) {
    var c = new Y;
    oa.Xc = new l(a, c, b);
    c.getFile(b, Yd)
}

function Yd() {
    oa.Xc.load()
}

function Xa() {
    oa.Xc.wp()
}

function Ca() {
    this.y = this.x = 0;
    this.visible = !0;
    this.children = [];
    this.ig = !1
}

function ra() {}

function B() {
    this.P = null;
    this.lineWidth = this.Ha = this.Ja = this.width = this.height = this.lineWidth = 0
}

function Ve() {
    this.P =
        null;
    this.angle = 0;
    this.jc = this.ic = 1;
    this.Vx = 0
}

function w() {
    this.a = null;
    this.W = this.$b = this.Zb = this.Rs = this.Ym = this.Xm = this.rl = 0;
    this.Ug = null
}

function Zd() {
    this.$r = 0;
    this.ka = null
}

function $d() {
    this.as = 0;
    this.values = null;
    this.Ca = 0
}

function Ea() {
    this.Qe = 0;
    this.ze = this.Va = null
}

function Ra(a) {
    this.app = a;
    this.Ck = null;
    this.bs = 0
}

function ib() {
    this.handle = 0
}

function Fa() {
    this.R = this.j = null
}

function ae() {}

function be() {}

function ce() {}

function jb() {
    this.element = null;
    this.Zz = !1
}

function S() {
    this.yw = 100;
    this.Wr =
        this.GC = this.HC = this.om = 0
}

function de() {
    this.rm = 0;
    this.Jd = null
}

function ee() {
    this.$B = this.aC = this.YB = this.ZB = this.wo = 0
}

function fe() {
    this.gC = this.fC = this.eC = this.hC = 0
}

function ge() {
    this.lC = this.jC = this.kC = this.iC = 0
}

function he() {
    this.FC = this.DC = this.xw = this.AC = this.BC = this.nm = 0;
    this.Za = null
}

function ie() {
    this.pw = this.cC = this.qw = this.lw = this.ow = this.nw = this.mw = this.dC = 0;
    this.ve = null
}

function je() {
    this.sC = this.rC = this.tC = this.qC = this.pC = this.uC = 0
}

function ke() {
    this.wC = this.vC = this.xC = this.ww = this.vw =
        this.yC = 0
}

function le() {}

function me() {
    this.Mc = null;
    this.data = 0
}

function D() {
    this.a = null;
    this.Kj = this.ye = this.Sg = this.Pb = this.Pe = this.kp = this.jp = 0
}

function va() {
    this.Rt = this.$p = this.Gl = this.Ly = this.Fl = this.aq = this.Zp = 0;
    this.Ei = !1
}

function ne() {
    this.bq = !1;
    this.Hl = null
}

function oe() {}

function pe() {
    this.Tt = this.eg = this.Ut = this.nh = 0
}

function qe() {
    this.cq = this.eq = this.Yt = this.Xt = this.Wt = this.Vt = 0
}

function re() {
    this.ke = this.dk = this.ck = this.th = this.sh = this.iq = this.rn = this.sn = this.Gc = 0;
    this.md = !1;
    this.Ka =
        null;
    this.rh = this.kq = this.jq = this.qh = 0;
    this.Ml = null;
    this.hq = !1
}

function N() {
    this.Jl = this.Py = this.Fi = this.wf = this.vf = this.Ad = this.Oy = this.Zt = this.Rd = this.qb = 0;
    this.Kl = null;
    this.au = this.$t = 0;
    this.ak = !1
}

function Ya() {
    this.Qy = this.bu = this.Ry = this.cu = this.bk = this.Ll = this.du = this.Bd = this.ph = 0
}

function Za() {}

function se(a) {
    this.Yc = a;
    this.oe = 0
}

function te() {
    this.R = this.j = null
}

function Ga() {
    this.Ix = 0;
    this.V = null;
    this.Jx = 0;
    this.U = !1;
    this.Lj = 0;
    this.Jj = !1;
    this.lp = 0
}

function La() {
    this.Kc = null;
    this.EB = 0;
    this.gm =
        this.Je = this.vc = null;
    this.pe = 0
}

function H() {
    this.button = {
        Nu: -1,
        background: null,
        gr: null,
        Ca: 0
    }
}

function J() {
    this.Qv = this.Pv = this.ng = this.Nn = this.FA = this.EA = this.HA = this.GA = this.IA = this.JA = this.LA = this.KA = this.DA = 0;
    this.kv = this.Zl = this.Vv = this.Px = this.mg = this.Lc = !1;
    this.Sv = this.Rv = this.y = this.x = this.qr = this.pr = this.or = this.nr = this.vo = this.uo = this.jj = this.ij = 0;
    this.zz = this.vz = !1;
    this.pk = 0;
    this.Nq = this.Mu = !1
}
var oa = this,
    n = {
        extend: function(a, b) {
            var c = Object.create(a.prototype || a);
            if (void 0 !== b && (b = b.prototype ||
                    b))
                for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
            return c
        },
        Tp: function(a) {
            return a >> 16
        },
        IG: function(a) {
            return a & 65535
        },
        KG: function(a, b) {
            return b << 16 | a & 65535
        },
        HR: function(a) {
            return a >>> 16 & 255
        },
        AR: function(a) {
            return a >>> 8 & 255
        },
        uR: function(a) {
            return a & 255
        },
        ZP: function(a, b, c) {
            return (a & 255) << 16 | (b & 255) << 8 | c & 255
        },
        mM: function(a) {
            return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
        },
        oI: function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        Ge: function(a) {
            var b = (a >>> 16 & 255).toString(16),
                c = (a >>> 8 & 255).toString(16);
            for (a =
                (a & 255).toString(16); 2 > b.length;) b = "0" + b;
            for (; 2 > c.length;) c = "0" + c;
            for (; 2 > a.length;) a = "0" + a;
            return "#" + b + c + a
        },
        Gd: function(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        },
        QQ: function(a) {
            return Math.round(a)
        },
        Lv: function(a) {
            return Math.ceil(a) == a
        },
        Tq: function(a, b, c, d, e) {
            ox = d / 2 * .5522848;
            oy = e / 2 * .5522848;
            xe = b + d;
            ye = c + e;
            xm = b + d / 2;
            ym = c + e / 2;
            a.beginPath();
            a.moveTo(b, ym);
            a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
            a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
            a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            a.bezierCurveTo(xm - ox, ye, b, ym +
                oy, b, ym);
            a.closePath()
        },
        iR: function(a, b) {
            a.beginPath();
            a.moveTo(b.left, b.top);
            a.lineTo(b.right, b.top);
            a.lineTo(b.right, b.bottom);
            a.lineTo(b.left, b.bottom);
            a.lineTo(b.left, b.top);
            a.closePath();
            a.stroke()
        },
        hR: function(a, b, c, d, e) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(d, e);
            a.closePath();
            a.stroke()
        },
        Vn: function(a, b) {
            for (var c = a.toString(); 4 > c.length;) c = "0" + c;
            return c + ("." + b)
        },
        xb: function(a, b) {
            if (a == b) return !0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            return a == b
        },
        ZC: function(a) {
            var b = a.lastIndexOf("\\");
            0 < b &&
                (a = a.substring(b + 1));
            return a
        },
        LG: 40,
        VH: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52],
        MR: function(a) {
            return a < n.LG ? n.VH[a] : Math.round(96 * a / 72)
        },
        Lp: 0,
        Mp: 0,
        Zj: 1,
        xt: 2,
        Kp: 8,
        zi: 4,
        sF: 32,
        wt: 1024,
        tF: 2048,
        AA: function(a, b, c, d, e, f) {
            if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
            e.dj || (a.font = e.qg());
            var g = 0,
                m = String.fromCharCode(10),
                p = String.fromCharCode(13),
                P = b.indexOf(m);
            if (0 <= P) {
                var I = new ba;
                I.aA(d);
                var h, k = 0,
                    l = 0,
                    q;
                do h = -1, k < b.length && (h = b.indexOf(p, k)), q = Math.max(P, h), h == P - 1 && P--, P = b.substring(k, P), h = n.Yl(a, P, c, I, f, e), l = Math.max(l, I.right - I.left), g += h, I.top += h, I.bottom = d.bottom, I.right = d.right, k = q + 1, P = -1, k < b.length ? P = b.indexOf(m, k) : (h = n.Yl(a, "", c, I, f, e), l = Math.max(l, I.right - I.left), g += h, I.top += h, I.bottom = d.bottom, I.right = d.right); while (0 <= P);
                k < b.length && (P = b.substring(k), h = n.Yl(a, P, c, I, f, e), l = Math.max(l, I.right - I.left), g += h);
                0 != (c & n.wt) && (d.right = d.left + l, d.bottom = I.bottom);
                return g
            }
            return g = n.Yl(a, b, c | n.tF,
                d, f, e)
        },
        lt: null,
        Yl: function(a, b, c, d, e, f) {
            0 == b.length && (b = " ");
            var g, m;
            g = f.Ze();
            m = f.dj ? f.measureText(" ") : a.measureText(" ").width;
            var p = d.right - d.left,
                h = 0,
                I = 0,
                l, k, q, r = 0,
                v = 0,
                z;
            null == n.lt && (n.lt = Array(100));
            var u, A, U = !1,
                C = !1,
                w = d.top;
            k = g;
            0 != (k & 1) && k++;
            var t = w;
            do {
                k = h;
                q = z = 0;
                v += g;
                do {
                    n.lt[z] = q;
                    z += 1;
                    l = I;
                    I = -1;
                    k < b.length && (I = b.indexOf(" ", k)); - 1 == I && (I = b.length);
                    if (I < k) {
                        q -= m;
                        break
                    }
                    A = b.substring(k, I);
                    u = f.dj ? f.measureText(A) : a.measureText(A).width;
                    if (q + u > p) {
                        z--;
                        if (0 < z) {
                            q -= m;
                            I = l;
                            break
                        }
                        for (l = k; l < I; l++) {
                            u = f.dj ?
                                f.measureText(b.substring(l, l + 1)) : a.measureText(b.substring(l, l + 1)).width;
                            if (q + u >= p) {
                                l--;
                                if (0 < l) {
                                    r = Math.max(q, r);
                                    0 == (c & n.wt) && (q = 0 != (c & n.Zj) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & n.xt) ? d.right - q : d.left, A = b.substring(k, l), e.push(new W(q, w, A)));
                                    I = l - 1;
                                    C = U = !0;
                                    break
                                }
                                I = l < b.length ? b.indexOf(" ", l) : -1;
                                U = !0;
                                0 <= I && (C = !0);
                                break
                            }
                            q += u
                        }
                    }
                    if (U) break;
                    q += u;
                    if (q + m > p) break;
                    q += m;
                    k = I + 1
                } while (1);
                if (0 == C) {
                    if (U) break;
                    r = Math.max(q, r);
                    if (0 == (c & n.wt))
                        for (q = 0 != (c & n.Zj) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & n.xt) ? d.right - q : d.left,
                            k = h, h = 0; h < z; h++) {
                            I = -1;
                            k < b.length && (I = b.indexOf(" ", k)); - 1 == I && (I = b.length);
                            if (I < k) break;
                            A = b.substring(k, I);
                            e.push(new W(q + n.lt[h], w, A));
                            k = I + 1
                        }
                }
                C = U = !1;
                w += g;
                h = I + 1
            } while (h < b.length);
            d.right = d.left + r;
            d.bottom = t + v;
            return v
        },
        Hh: function(a, b, c, d, e, f) {
            var g;
            if (e.dj)
                for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
            else
                for (a.font = e.qg(), a.fillStyle = n.Ge(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
        },
        cj: function(a, b) {
            var c = a.toString();
            if (0 !=
                (b & da.sy)) {
                var d = b & da.sy;
                if (c.length > d) c = c.substring(c.length - d);
                else
                    for (; c.length < d;) c = "0" + c
            }
            return c
        },
        $u: function(a, b) {
            var c;
            if (0 == (b & da.jF)) c = a.toString();
            else {
                var d = Math.floor(((b & da.hF) >> da.iF) + 1);
                c = -1;
                0 != (b & da.lF) ? c = (b & da.fF) >> da.gF : 0 != a && -1 < a && 1 > a && (c = d);
                c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
                var e, f, g;
                if (0 != (b & da.kF))
                    for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
                f = !1;
                "-" == c.charAt(0) && (f = !0, c = c.substr(1));
                for (; e < d;) c = "0" + c, e++;
                f && (c = "-" + c)
            }
            return c
        },
        pS: function(a,
            b) {
            for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0, e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
            return c
        }
    },
    ue = !1,
    $a = !1,
    kb = !1,
    lb = window.XMLHttpRequest ? new XMLHttpRequest : null;
if (lb && lb.overrideMimeType) try {
    $a = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && ($a = !1)
} catch (a) {} else {
    var ue = !0,
        mb = document.createElement("script");
    mb.type = "text/vbscript";
    mb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
    document.head.appendChild(mb)
}
if ($a) {
    var ve = new FileReader;
    try {
        ve.readAsBinaryString && (kb = !0)
    } catch (a) {}
    ve = null
}
lb = null;
Y.prototype = {
    ra: function() {
        return this.pd.charCodeAt(this.S++) & 255
    },
    getFile: function(a, b, c) {
        this.Iu = b;
        if (ue) try {
            var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
                e, f = d.length;
            f > c && (f = c);
            for (e = 0; e < f; e++) this.pd += String.fromCharCode(d[e]);
            this.end = this.pd.length;
            this.Iu()
        } catch (p) {} else {
            var g = new XMLHttpRequest;
            g.open("GET", a, !0);
            var m = this;
            $a ? (g.responseType = "blob", g.onload = function() {
                if (4 ==
                    g.readyState && 200 == g.status) {
                    var a = new FileReader;
                    a.onloadend = function() {
                        if (kb) m.pd += a.result;
                        else {
                            var b = new Uint8Array(a.result),
                                c;
                            for (c = 0; c < b.length; c++) m.pd += String.fromCharCode(b[c])
                        }
                        m.end = m.pd.length;
                        m.Iu()
                    };
                    kb ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
                }
            }) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function() {
                4 == g.readyState && 200 == g.status && (m.pd += g.responseText, m.end = m.pd.length, m.Iu())
            });
            g.send(null)
        }
    },
    UL: function(a) {
        this.pd = a;
        this.end = a.length;
        var b = this;
        this.ra = function() {
            return b.pd.charCodeAt(b.S++) & 255
        }
    },
    kg: function(a, b) {
        var c = new Y;
        c.pd = this.pd;
        c.offset = a;
        c.S = a;
        c.end = a + b;
        c.od = this.od;
        return c
    },
    TD: function(a) {
        this.od = a
    },
    VI: function() {
        var a = this.ra(),
            b = this.ra(),
            c = this.ra();
        255 == a && 254 == b ? (this.od = !0, this.S--) : 239 == a && 187 == b && 191 == c ? this.od = !1 : (this.od = !1, this.S -= 3)
    },
    ma: function(a) {
        this.S += a
    },
    Nh: function() {
        return this.S >= this.end
    },
    fb: function() {
        return this.ra()
    },
    v: function() {
        var a;
        a = this.ra();
        return 256 * this.ra() + a
    },
    Z: function() {
        var a;
        a = this.ra();
        a = 256 * this.ra() + a;
        return 32768 > a ? a : a - 65536
    },
    Gm: function() {
        var a;
        a = this.ra();
        return 256 * this.ra() + a
    },
    w: function() {
        var a, b, c;
        a = this.ra();
        b = this.ra();
        c = this.ra();
        a = 16777216 * this.ra() + 65536 * c + 256 * b + a;
        return 2147483647 >= a ? a : a - 4294967296
    },
    Pc: function() {
        var a, b, c;
        a = this.ra();
        b = this.ra();
        c = this.ra();
        this.ra();
        return 65536 * a + 256 * b + c
    },
    pD: function() {
        var a, b, c;
        a = this.ra();
        b = this.ra();
        c = this.ra();
        a = 16777216 * this.ra() + 65536 * c + 256 * b + a;
        2147483648 < a && (a -= 4294967295);
        return a / 65536
    },
    oL: function() {
        var a,
            b, c, d, e, f, g;
        a = this.ra();
        b = this.ra();
        c = this.ra();
        d = this.ra();
        e = this.ra();
        f = this.ra();
        g = this.ra();
        a = 72057594037927936 * this.ra() + 281474976710656 * g + 1099511627776 * f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
        0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
        return a / 4294967296
    },
    ub: function(a) {
        var b = "";
        if (this.od)
            if (1 > arguments.length) {
                if (this.Nh()) return b;
                c = this.S;
                for (b = this.Gm(); b && !this.Nh();) b = this.Gm();
                b = (this.S - c - 2) / 2;
                this.S = c;
                b = this.ub(b);
                this.ra();
                this.ra()
            } else {
                b = "";
                c = this.S;
                for (e = 0; e < a; e++) {
                    d = this.Gm();
                    if (0 == d) break;
                    b += String.fromCharCode(d)
                }
                this.S = c + 2 * a
            }
        else if (1 > arguments.length) {
            if (this.Nh()) return b;
            for (var c = this.S, b = this.ra(); b && !this.Nh();) b = this.ra();
            b = this.S - c - 1;
            this.S = c;
            b = this.ub(b);
            this.ra()
        } else {
            for (var d, c = this.S, e = 0; e < a; ++e) {
                d = this.ra();
                if (0 == d) break;
                b += String.fromCharCode(d)
            }
            this.S = c + a
        }
        return b
    },
    pL: function() {
        var a = this.S,
            b, c = "",
            d, e;
        if (0 == this.od) {
            if (this.Nh()) return;
            for (b = this.ra(); 10 != b && 13 != b && !this.Nh();) b = this.ra();
            d = this.S;
            this.S = a;
            e = 1;
            10 != b && 13 != b && (e = 0);
            d > a + e && (c = this.ub(d -
                a - e));
            if (10 == b || 13 == b) this.ra(), a = this.fb(), 10 == b && 13 != a && this.S--, 13 == b && 10 != a && this.S--
        } else {
            if (this.Nh()) return;
            for (b = this.Gm(); 10 != b && 13 != b && !this.Nh();) b = this.Gm();
            d = this.S;
            this.S = a;
            e = 2;
            10 != b && 13 != b && (e = 0);
            d > a + e && (c = this.ub((d - a - e) / 2));
            if (10 == b || 13 == b) this.S += 2, a = this.Gm(), 10 == b && 13 != a && (this.S -= 2), 13 == b && 10 != a && (this.S -= 2)
        }
        return c
    },
    seek: function(a) {
        a >= this.end && (a = this.end);
        this.S = a
    },
    eM: function(a) {
        var b = this.S,
            b = b - a;
        0 > b && (b = 0);
        this.S = b
    },
    tL: function(a) {
        var b, c = a.length;
        for (b = 0; b < c; b++) a[b] =
            this.ra()
    },
    qD: function(a) {
        var b = [],
            c;
        for (c = 0; c < a; c++) b[c] = this.ra();
        return b
    },
    ux: function() {
        var a = new Sa;
        a.ux(this);
        return a
    }
};
O.prototype = {
    add: function(a) {
        this.Vd.push(a)
    },
    WJ: function(a, b) {
        this.Vd.splice(a, 0, b)
    },
    get: function(a) {
        return a < this.Vd.length ? this.Vd[a] : null
    },
    put: function(a, b) {
        this.Vd[a] = b
    },
    set: function(a, b) {
        a < this.Vd.length && (this.Vd[a] = b)
    },
    bp: function(a) {
        a < this.Vd.length && this.Vd.splice(a, 1)
    },
    indexOf: function(a) {
        return this.Vd.indexOf(a)
    },
    contains: function(a) {
        return 0 <= this.Vd.indexOf(a)
    },
    rD: function(a) {
        a = this.Vd.indexOf(a);
        0 <= a && this.Vd.splice(a, 1)
    },
    size: function() {
        return this.Vd.length
    },
    clear: function() {
        this.Vd.length = 0
    }
};
ba.prototype = {
    load: function(a) {
        this.left = a.w();
        this.top = a.w();
        this.right = a.w();
        this.bottom = a.w()
    },
    aA: function(a) {
        this.left = a.left;
        this.right = a.right;
        this.top = a.top;
        this.bottom = a.bottom
    }
};
Sa.prototype = {
    qg: function() {
        var a;
        a = this.re ? "italic " : "normal ";
        var b = 100 * Math.floor(this.se / 100),
            b = Math.max(b, 100),
            b = Math.min(b, 900);
        a = a + (b + " ") + (this.Gb + "px ");
        return a += this.qe
    },
    Ze: function() {
        return this.Gb + Math.ceil(this.Gb / 8)
    },
    Y: function() {
        this.qe = "Arial";
        this.Gb = 13;
        this.se = 400;
        this.re = 0
    },
    ux: function(a) {
        this.Gb = a.w();
        0 > this.Gb && (this.Gb = -this.Gb);
        a.ma(12);
        this.se = a.w();
        this.re = a.fb();
        a.fb();
        a.fb();
        a.ma(5);
        this.qe = a.ub(32)
    }
};
na.separator = "{@24}";
na.Ey = 1;
na.pG = 2;
na.prototype = {
    op: function() {
        if (null != this.ka && null != this.vk) {
            var a = "",
                b;
            for (b = 0; b < this.ka.size(); b++) a += this.ka.get(b) + na.separator;
            localStorage.setItem(this.vk, a)
        }
    },
    Gr: function(a) {
        var b = !0;
        null != this.vk && n.xb(a,
            this.vk) && (b = !1);
        if (b)
            if (this.op(), this.vk = a, this.ka = new O, a = localStorage.getItem(this.vk))
                for (var b = 0, c = a.indexOf(na.separator, 0); 0 <= c;) this.ka.add(a.substring(b, c)), b = c + na.separator.length, c = a.indexOf(na.separator, b);
            else if (a = null, null == a && (b = this.app.tJ(this.vk), null != b && (a = b.open())), a)
            for (b = !1, a.VI(), "undefined" != typeof this.Ca && (this.Ca & na.Ey && (this.od = !1, b = !0), this.Ca & na.pG && (this.od = !0)); 0 == a.Nh();) {
                c = a.pL();
                b && (c = this.QI(c));
                if ("<" == c.substring(0, 1)) {
                    this.ka.clear();
                    break
                }
                if (null == c) break;
                this.ka.add(c)
            }
    },
    QI: function(a) {
        for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
        return b
    },
    er: function(a) {
        var b, c;
        for (b = 0; b < this.ka.size(); b++)
            if (c = this.ka.get(b), "[" == c.charAt(0)) {
                var d = c.lastIndexOf("]");
                if (1 <= d && (c = c.substring(1, d), n.xb(a, c))) return b
            } return -1
    },
    hv: function(a, b) {
        for (var c,
                d; a < this.ka.size(); a++) {
            c = this.ka.get(a);
            if ("[" == c.charAt(0)) break;
            d = c.indexOf("=");
            if (0 <= d) {
                for (var e = 0; e < d && 32 == c.charCodeAt(e);) e++;
                for (; d > e && 32 == c.charCodeAt(d - 1);) d--;
                if (d > e && (c = c.substring(0, d), n.xb(c, b))) return a
            }
        }
        return -1
    },
    Hk: function(a, b, c, d) {
        this.Gr(d);
        a = this.er(a);
        return 0 <= a && (a = this.hv(a + 1, b), 0 <= a) ? (b = this.ka.get(a), b.substring(b.indexOf("=") + 1)) : c
    },
    zl: function(a, b, c, d) {
        this.Gr(d);
        d = this.er(a);
        if (0 > d) this.ka.add("[" + a + "]"), this.ka.add(b + "=" + c);
        else if (a = this.hv(d + 1, b), 0 <= a) this.ka.set(a,
            b + "=" + c);
        else {
            for (a = d + 1; a < this.ka.size(); a++)
                if (d = this.ka.get(a), "[" == d.charAt(0)) {
                    d = b + "=" + c;
                    this.ka.WJ(a, d);
                    return
                } this.ka.add(b + "=" + c)
        }
    },
    pA: function(a, b, c) {
        this.Gr(c);
        a = this.er(a);
        0 <= a && (b = this.hv(a + 1, b), 0 <= b && this.ka.bp(b), this.op())
    },
    TI: function(a, b) {
        this.Gr(b);
        var c = this.er(a);
        if (0 <= c) {
            for (this.ka.bp(c);;) {
                c++;
                if (c >= this.ka.size()) break;
                if ("[" == this.ka.get(c).charAt(0)) break;
                this.ka.bp(c)
            }
            this.op()
        }
    }
};
ka.prototype = {
    measureText: function(a, b) {
        b = this.app.pv(b);
        if (b.dj) return b.measureText(a);
        this.Wd.font =
            b.qg();
        return this.Wd.measureText(a).width
    },
    Ws: function(a, b, c, d, e) {
        if (a == this.pK && b == this.lK && c == this.oK && d == this.mK && e == this.kK) return this.nK;
        var f = this.Wd;
        f.clearRect(0, 0, this.width, this.height);
        c || (c = new ba(0, 0, this.width, this.height));
        var g = [];
        d = this.app.pv(d);
        var m = n.AA(f, a, b, c, d, g);
        if (0 != m) {
            var p = 0;
            0 != (b & n.Kp) ? p = this.height - m : 0 != (b & n.zi) && (p = this.height / 2 - m / 2);
            n.Hh(f, 0, p, g, d, e, 0, 0)
        }
        this.pK = a;
        this.lK = b;
        this.oK = c;
        this.mK = d;
        this.kK = e;
        return this.nK = m
    },
    WB: function(a) {
        a ? (this.Wd.fillStyle = n.Ge(a),
            this.Wd.fillRect(0, 0, this.width, this.height)) : this.Wd.clearRect(0, 0, this.width, this.height)
    },
    Tr: function(a, b, c, d, e, f, g) {
        var m = [];
        c || (c = new ba(0, 0, this.width, this.height));
        e = this.app.pv(e);
        a = n.AA(this.Wd, a, b, c, e, m);
        if (0 != a) switch (c = 0, 0 != (b & n.Kp) ? c = this.height - a : 0 != (b & n.zi) && (c = this.height / 2 - a / 2), f) {
            case 1:
                n.Hh(this.Wd, 1, c + 1, m, e, g, 0, 0);
                n.Hh(this.Wd, 0, c, m, e, d, 0, 0);
                break;
            case 2:
                n.Hh(this.Wd, 1, c, m, e, g, 0, 0);
                n.Hh(this.Wd, 1, c + 2, m, e, g, 0, 0);
                n.Hh(this.Wd, 0, c + 1, m, e, g, 0, 0);
                n.Hh(this.Wd, 2, c + 1, m, e, g, 0, 0);
                n.Hh(this.Wd,
                    1, c + 1, m, e, d, 0, 0);
                break;
            case 0:
                n.Hh(this.Wd, 0, c, m, e, d, 0, 0)
        }
    },
    resize: function(a, b) {
        if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
    },
    Eb: function(a, b, c, d, e) {
        a.Cj(this.canvas, b, c, this.width, this.height, d, e)
    }
};
Ha.LI = [{
    Tb: navigator.userAgent,
    bd: "Chrome",
    mc: "Chrome"
}, {
    Tb: navigator.userAgent,
    bd: "OmniWeb",
    en: "OmniWeb/",
    mc: "OmniWeb"
}, {
    Tb: navigator.vendor,
    bd: "Apple",
    mc: "Safari",
    en: "Version"
}, {
    iL: window.opera,
    mc: "Opera",
    en: "Version"
}, {
    Tb: navigator.vendor,
    bd: "iCab",
    mc: "iCab"
}, {
    Tb: navigator.vendor,
    bd: "KDE",
    mc: "Konqueror"
}, {
    Tb: navigator.userAgent,
    bd: "Firefox",
    mc: "Firefox"
}, {
    Tb: navigator.vendor,
    bd: "Camino",
    mc: "Camino"
}, {
    Tb: navigator.userAgent,
    bd: "Netscape",
    mc: "Netscape"
}, {
    Tb: navigator.userAgent,
    bd: "MSIE",
    mc: "Explorer",
    en: "MSIE"
}, {
    Tb: navigator.userAgent,
    bd: "Gecko",
    mc: "Mozilla",
    en: "rv"
}, {
    Tb: navigator.userAgent,
    bd: "Mozilla",
    mc: "Netscape",
    en: "Mozilla"
}];
Ha.NI = [{
    Tb: navigator.platform,
    bd: "Win",
    mc: "Windows"
}, {
    Tb: navigator.platform,
    bd: "Mac",
    mc: "MacOS"
}, {
    Tb: navigator.userAgent,
    bd: "iPhone",
    mc: "iOS"
}, {
    Tb: navigator.userAgent,
    bd: "iPod",
    mc: "iOS"
}, {
    Tb: navigator.userAgent,
    bd: "iPad",
    mc: "iOS"
}, {
    Tb: navigator.userAgent,
    bd: "Android",
    mc: "Android"
}, {
    Tb: navigator.platform,
    bd: "Windows Phone",
    mc: "Windows Phone"
}, {
    Tb: navigator.platform,
    bd: "Linux",
    mc: "Linux"
}];
Ha.prototype = {
    HD: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b].Tb,
                d = a[b].iL;
            this.uE = a[b].en || a[b].mc;
            if (c) {
                if (-1 != c.indexOf(a[b].bd)) return a[b].mc
            } else if (d) return a[b].mc
        }
    },
    ID: function(a) {
        var b = a.indexOf(this.uE);
        if (-1 != b) return parseFloat(a.substring(b +
            this.uE.length + 1))
    }
};
n.TR = function(a, b, c, d) {
    var e = document.createElement("canvas");
    e.width = b.width;
    e.height = b.height;
    var f = e.getContext("2d");
    0 == b.Bb ? f.drawImage(b.Ab, 0, 0) : f.drawImage(a.ba.Lb[b.Bb], b.td, b.ud, b.width, b.height, 0, 0, b.width, b.height);
    var g = f.getImageData(0, 0, b.width, b.height),
        m = d >> 16 & 255,
        p = d >> 8 & 255;
    d &= 255;
    var h = c >> 16 & 255,
        l = c >> 8 & 255;
    c &= 255;
    var n, k, q;
    for (q = 0; q < b.height; q++)
        for (k = 0; k < b.width; k++) n = 4 * (q * b.width + k), g.data[n] == h && g.data[n + 1] == l && g.data[n + 2] == c && (g.data[n] = m, g.data[n + 1] = p, g.data[n +
            2] = d);
    f.putImageData(g, 0, 0);
    f = new ha;
    f.app = a;
    f.width = b.width;
    f.height = b.height;
    f.Ja = b.Ja;
    f.Ha = b.Ha;
    f.eh = b.eh;
    f.fh = b.fh;
    f.Ta = 0;
    f.Ab = e;
    f.Ag = b.Ag;
    f.km = b.km;
    f.Qh = b.Qh;
    return f
};
ya.NF = 1;
ya.kO = 2;
ya.MF = 4;
ya.IF = 8;
ya.prototype = {
    sI: function(a) {
        if (this.mJ != a.qe || this.Hd != a.Gb) return !1;
        var b = 0 != (this.XA & ya.NF),
            c = 0 != a.re;
        if (b != c) return !1;
        b = 0 != (this.XA & ya.MF);
        c = 400 < a.se;
        return b != c ? !1 : !0
    },
    Ze: function() {
        return this.height + this.XJ
    },
    measureText: function(a) {
        var b = 0,
            c = a.length,
            d, e;
        for (d = 0; d < c; d++) e = this.Lu.indexOf(a.charAt(d)),
            b = 0 <= e ? b + (this.Ku[e] + this.Iv) : b + this.width;
        return b
    },
    fillText: function(a, b, c, d) {
        var e = b.length,
            f, g, m, p, h = this.wg;
        if (0 == (this.Ca & ya.IF))
            for (f = 0; f < e; f++) p = this.Lu.indexOf(b.charAt(f)), 0 <= p ? (m = Math.floor(p / this.Yr), g = p - m * this.Yr, m *= this.height + 1, g *= this.width + 1, 0 == h.Bb ? a.drawImage(h.Ab, g, m, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ba.Lb[h.Bb], g + h.td, m + h.ud, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.Ku[p] + this.Iv) :
                (a.fillStyle = n.Ge(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
        else
            for (c += this.measureText(b), f = e - 1; 0 <= f; f--) p = this.Lu.indexOf(b.charAt(f)), 0 <= p ? (c -= this.Ku[p] + this.Iv, m = p / this.Yr, g = p - m * this.Yr, m *= this.height + 1, g *= this.width + 1, 0 == h.Bb ? a.drawImage(h.Ab, g, m, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ba.Lb[h.Bb], g + h.td, m + h.ud, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = n.Ge(this.color),
                a.fillRect(c, d, this.width, this.height))
    }
};
V.wi = 1;
V.KM = 17408;
V.JM = 17664;
V.DM = 17920;
V.BM = 18176;
V.CM = 18432;
V.EM = 18688;
V.MM = 18944;
V.HM = 19200;
V.FM = 19456;
V.GM = 19712;
V.NM = 19968;
V.OM = 20224;
V.IM = 20480;
V.LM = 20736;
V.xE = 983039;
V.create = function(a) {
    var b = !1,
        c = !1,
        d = !1,
        e = !1,
        f = !1,
        g = !1,
        m = !1,
        p = !1,
        h = !1,
        l = a.file.S,
        n = a.file.v(),
        k, q = a.file.w();
    switch (q) {
        case 65535:
            k = new ga;
            break;
        case 131071:
            k = new ga;
            break;
        case 262143:
            k = new ACT_SETVARG;
            break;
        case 327679:
            k = new ACT_SUBVARG;
            break;
        case 393215:
            k = new ACT_ADDVARG;
            break;
        case 458751:
            k =
                new ACT_GRPACTIVATE;
            break;
        case 524287:
            k = new ACT_GRPDEACTIVATE;
            break;
        case 983039:
            k = new ACT_STARTLOOP;
            break;
        case 1048575:
            k = new ACT_STOPLOOP;
            break;
        case 1114111:
            k = new ACT_SETLOOPINDEX;
            break;
        case 1179647:
            k = new ACT_RANDOMIZE;
            break;
        case 1310719:
            k = new ACT_SETGLOBALSTRING;
            break;
        case 1572863:
            k = new ga;
            break;
        case 1638399:
            k = new ga;
            break;
        case 1835007:
            k = new ACT_SETVARGCONST;
            b = !0;
            break;
        case 1900543:
            k = new ACT_SETVARG;
            break;
        case 1966079:
            k = new ACT_SETVARGCONST;
            b = !0;
            break;
        case 2031615:
            k = new ACT_SETVARG;
            break;
        case 2097151:
            k =
                new ACT_ADDVARGCONST;
            c = !0;
            break;
        case 2162687:
            k = new ACT_ADDVARG;
            break;
        case 2228223:
            k = new ACT_ADDVARGCONST;
            c = !0;
            break;
        case 2293759:
            k = new ACT_ADDVARG;
            break;
        case 2359295:
            k = new ACT_SUBVARGCONST;
            d = !0;
            break;
        case 2424831:
            k = new ACT_SUBVARG;
            break;
        case 2490367:
            k = new ACT_SUBVARGCONST;
            d = !0;
            break;
        case 2555903:
            k = new ACT_SUBVARG;
            break;
        case 65534:
            k = new ACT_PLAYSAMPLE;
            break;
        case 131070:
            k = new sb;
            break;
        case 327678:
            k = new ACT_PLAYLOOPSAMPLE;
            break;
        case 458750:
            k = new ACT_STOPSPESAMPLE;
            break;
        case 524286:
            k = new ACT_PAUSESAMPLE;
            break;
        case 589822:
            k = new ACT_RESUMESAMPLE;
            break;
        case 786430:
            k = new tb;
            break;
        case 851966:
            k = new ub;
            break;
        case 917502:
            k = new ACT_PAUSECHANNEL;
            break;
        case 983038:
            k = new ACT_RESUMECHANNEL;
            break;
        case 1048574:
            k = new ACT_STOPCHANNEL;
            break;
        case 1114110:
            k = new ACT_SETCHANNELPOS;
            break;
        case 1179646:
            k = new vb;
            break;
        case 1245182:
            k = new ga;
            break;
        case 1310718:
            k = new ACT_SETSAMPLEPOS;
            break;
        case 1376254:
            k = new wb;
            break;
        case 1441790:
            k = new ACT_SETSAMPLEVOL;
            break;
        case 1507326:
            k = new ga;
            break;
        case 1572862:
            k = new ga;
            break;
        case 1638398:
            k =
                new ACT_PAUSEALLCHANNELS;
            break;
        case 1703934:
            k = new ACT_RESUMEALLCHANNELS;
            break;
        case 2031614:
            k = new ACT_LOCKCHANNEL;
            break;
        case 2097150:
            k = new ACT_UNLOCKCHANNEL;
            break;
        case 2162686:
            k = new ACT_SETCHANNELFREQ;
            break;
        case 2228222:
            k = new ACT_SETSAMPLEFREQ;
            break;
        case 65533:
            k = new xb;
            break;
        case 131069:
            k = new ACT_PREVLEVEL;
            break;
        case 196605:
            k = new yb;
            break;
        case 262141:
            k = new ACT_PAUSEKEY;
            break;
        case 327677:
            k = new zb;
            break;
        case 393213:
            k = new ACT_RESTARTGAME;
            break;
        case 458749:
            k = new ACT_RESTARTLEVEL;
            break;
        case 524285:
            k = new Ab;
            break;
        case 589821:
            k = new Bb;
            break;
        case 655357:
            k = new ACT_CDISPLAYY;
            break;
        case 983037:
            k = new ACT_FULLSCREENMODE;
            break;
        case 1048573:
            k = new ACT_WINDOWEDMODE;
            break;
        case 1114109:
            k = new ACT_SETFRAMERATE;
            break;
        case 1179645:
            k = new ACT_PAUSEKEY;
            break;
        case 1245181:
            k = new ACT_PAUSEANYKEY;
            break;
        case 1310717:
            k = new ACT_SETVSYNCON;
            break;
        case 1376253:
            k = new ACT_SETVSYNCOFF;
            break;
        case 1441789:
            k = new ACT_SETVIRTUALWIDTH;
            break;
        case 1507325:
            k = new ACT_SETVIRTUALHEIGHT;
            break;
        case 1572861:
            k = new ACT_SETFRAMEBDKCOLOR;
            break;
        case 1638397:
            k =
                new ACT_DELCREATEDBKDAT;
            break;
        case 1703933:
            k = new ACT_DELALLCREATEDBKD;
            break;
        case 1769469:
            k = new ACT_SETFRAMEWIDTH;
            break;
        case 1835005:
            k = new ACT_SETFRAMEHEIGHT;
            break;
        case 2097149:
            k = new ACT_PLAYDEMO;
            break;
        case 2162685:
            k = new ga;
            break;
        case 2228221:
            k = new ga;
            break;
        case 2293757:
            k = new ga;
            break;
        case 2359293:
            k = new ga;
            break;
        case 2424829:
            k = new ga;
            break;
        case 65532:
            k = new ACT_SETTIMER;
            break;
        case 131068:
            k = new ACT_EVENTAFTER;
            break;
        case 196604:
            k = new ACT_NEVENTSAFTER;
            break;
        case 65530:
            k = new ACT_HIDECURSOR;
            break;
        case 131066:
            k =
                new ACT_SHOWCURSOR;
            break;
        case 65529:
            k = new ACT_SETSCORE;
            break;
        case 131065:
            k = new ACT_SETLIVES;
            break;
        case 196601:
            k = new ACT_NOINPUT;
            break;
        case 262137:
            k = new ACT_RESTINPUT;
            break;
        case 327673:
            k = new ACT_ADDSCORE;
            break;
        case 393209:
            k = new ACT_ADDLIVES;
            break;
        case 458745:
            k = new ACT_SUBSCORE;
            break;
        case 524281:
            k = new ACT_SUBLIVES;
            break;
        case 589817:
            k = new ACT_SETINPUT;
            break;
        case 655353:
            k = new ACT_SETINPUTKEY;
            break;
        case 720889:
            k = new ACT_SETPLAYERNAME;
            break;
        case 65531:
            k = new Cb;
            break;
        case 131067:
            k = new ACT_CREATEBYNAME;
            break;
        case 5242883:
            k = new ACT_STRDESTROY;
            break;
        case 5308419:
            k = new ACT_STRDISPLAY;
            break;
        case 5373955:
            k = new ACT_STRDISPLAYDURING;
            break;
        case 5439491:
            k = new ACT_STRSETCOLOUR;
            break;
        case 5505027:
            k = new ACT_STRSET;
            break;
        case 5570563:
            k = new ACT_STRPREV;
            break;
        case 5636099:
            k = new ACT_STRNEXT;
            break;
        case 5701635:
            k = new ACT_STRDISPLAYSTRING;
            break;
        case 5767171:
            k = new Db;
            break;
        case 5242882:
            k = new ACT_SPRPASTE;
            break;
        case 5308418:
            k = new ACT_SPRFRONT;
            break;
        case 5373954:
            k = new ACT_SPRBACK;
            break;
        case 5439490:
            k = new ACT_SPRADDBKD;
            break;
        case 5505026:
            k = new ACT_SPRREPLACECOLOR;
            break;
        case 5570562:
            k = new ACT_SPRSETSCALE;
            break;
        case 5636098:
            k = new ACT_SPRSETSCALEX;
            break;
        case 5701634:
            k = new ACT_SPRSETSCALEY;
            break;
        case 5767170:
            k = new ACT_SPRSETANGLE;
            break;
        case 5242887:
            k = new Eb;
            break;
        case 5308423:
            k = new Fb;
            break;
        case 5373959:
            k = new Gb;
            break;
        case 5439495:
            k = new ACT_CSETMIN;
            break;
        case 5505031:
            k = new Hb;
            break;
        case 5570567:
            k = new Ib;
            break;
        case 5636103:
            k = new ACT_CSETCOLOR2;
            break;
        case 5242884:
            k = new ACT_QASK;
            break;
        case 5242889:
            k = new ACT_CCARESTARTAPP;
            break;
        case 5308425:
            k = new ACT_CCARESTARTFRAME;
            break;
        case 5373961:
            k = new ACT_CCANEXTFRAME;
            break;
        case 5439497:
            k = new ACT_CCAPREVIOUSFRAME;
            break;
        case 5505033:
            k = new ACT_CCAENDAPP;
            break;
        case 5636105:
            k = new ACT_CCAJUMPFRAME;
            break;
        case 5701641:
            k = new ACT_CCASETGLOBALVALUE;
            break;
        case 5767177:
            k = new ACT_CCASHOW;
            break;
        case 5832713:
            k = new ACT_CCAHIDE;
            break;
        case 5898249:
            k = new ACT_CCASETGLOBALSTRING;
            break;
        case 5963785:
            k = new ACT_CCAPAUSEAPP;
            break;
        case 6029321:
            k = new ACT_CCARESUMEAPP;
            break;
        case 6094857:
            k = new ACT_CCASETWIDTH;
            break;
        case 6160393:
            k = new ACT_CCASETHEIGHT;
            break;
        default:
            switch (q & 4294901760) {
                case 65536:
                    k = new Jb;
                    break;
                case 131072:
                    k = new Kb;
                    break;
                case 196608:
                    k = new Lb;
                    break;
                case 262144:
                    k = new ACT_EXTSTOP;
                    break;
                case 327680:
                    k = new ACT_EXTSTART;
                    break;
                case 393216:
                    k = new Mb;
                    break;
                case 458752:
                    k = new ACT_EXTMAXSPEED;
                    break;
                case 524288:
                    k = new ACT_EXTWRAP;
                    break;
                case 589824:
                    k = new ACT_EXTBOUNCE;
                    break;
                case 655360:
                    k = new ACT_EXTREVERSE;
                    break;
                case 720896:
                    k = new ACT_EXTNEXTMOVE;
                    break;
                case 786432:
                    k = new ACT_EXTPREVMOVE;
                    break;
                case 851968:
                    k =
                        new Nb;
                    break;
                case 917504:
                    k = new ACT_EXTLOOKAT;
                    break;
                case 983040:
                    k = new ACT_EXTSTOPANIM;
                    break;
                case 1048576:
                    k = new ACT_EXTSTARTANIM;
                    break;
                case 1114112:
                    k = new Ob;
                    break;
                case 1179648:
                    k = new ACT_EXTFORCEDIR;
                    break;
                case 1245184:
                    k = new Pb;
                    break;
                case 1310720:
                    k = new ACT_EXTRESTANIM;
                    break;
                case 1376256:
                    k = new ACT_EXTRESTDIR;
                    break;
                case 1441792:
                    k = new ACT_EXTRESTSPEED;
                    break;
                case 1507328:
                    k = new Qb;
                    break;
                case 1572864:
                    k = new Rb;
                    break;
                case 1638400:
                    k = new ACT_EXTSHUFFLE;
                    break;
                case 1703936:
                    k = new Sb;
                    break;
                case 1769472:
                    k = new Tb;
                    break;
                case 1835008:
                    k = new Ub;
                    break;
                case 1900544:
                    k = new ACT_EXTSHOOT;
                    break;
                case 1966080:
                    k = new ACT_EXTSHOOTTOWARD;
                    break;
                case 2031616:
                    k = new Vb;
                    e = !0;
                    break;
                case 2097152:
                    k = new Xb;
                    f = !0;
                    break;
                case 2162688:
                    k = new Zb;
                    g = !0;
                    break;
                case 2228224:
                    k = new ACT_EXTDISPATCHVAR;
                    break;
                case 2293760:
                    k = new ACT_EXTSETFLAG;
                    m = !0;
                    break;
                case 2359296:
                    k = new ACT_EXTCLRFLAG;
                    p = !0;
                    break;
                case 2424832:
                    k = new ac;
                    h = !0;
                    break;
                case 2490368:
                    k = new ACT_EXTINKEFFECT;
                    break;
                case 2555904:
                    k = new ACT_EXTSETSEMITRANSPARENCY;
                    break;
                case 2621440:
                    k = new ACT_EXTFORCEFRAME;
                    break;
                case 2686976:
                    k = new ACT_EXTRESTFRAME;
                    break;
                case 2752512:
                    k = new ACT_EXTSETACCELERATION;
                    break;
                case 2818048:
                    k = new ACT_EXTSETDECELERATION;
                    break;
                case 2883584:
                    k = new ACT_EXTSETROTATINGSPEED;
                    break;
                case 2949120:
                    k = new ACT_EXTSETDIRECTIONS;
                    break;
                case 3014656:
                    k = new ACT_EXTBRANCHNODE;
                    break;
                case 3080192:
                    k = new ACT_EXTSETGRAVITY;
                    break;
                case 3145728:
                    k = new ACT_EXTGOTONODE;
                    break;
                case 3211264:
                    k = new ACT_EXTSETVARSTRING;
                    break;
                case 3276800:
                    k = new ACT_EXTSETFONTNAME;
                    break;
                case 3342336:
                    k = new ACT_EXTSETFONTSIZE;
                    break;
                case 3407872:
                    k =
                        new ACT_EXTSETBOLD;
                    break;
                case 3473408:
                    k = new ACT_EXTSETITALIC;
                    break;
                case 3538944:
                    k = new ACT_EXTSETUNDERLINE;
                    break;
                case 3604480:
                    k = new ga;
                    break;
                case 3670016:
                    k = new ACT_EXTSETTEXTCOLOR;
                    break;
                case 3735552:
                    k = new ACT_EXTSPRFRONT;
                    break;
                case 3801088:
                    k = new cc;
                    break;
                case 3866624:
                    k = new ACT_EXTMOVEBEFORE;
                    break;
                case 3932160:
                    k = new ACT_EXTMOVEAFTER;
                    break;
                case 3997696:
                    k = new ACT_EXTMOVETOLAYER;
                    break;
                case 4063232:
                    k = new ga;
                    break;
                case 4128768:
                    k = new ACT_EXTSETEFFECT;
                    break;
                case 4194304:
                    k = new ga;
                    break;
                case 4259840:
                    k = new dc;
                    break;
                case 4325376:
                    k = new ACT_EXTSETRGBCOEF;
                    break;
                case 4390912:
                    k = new ga;
                    break;
                case 4456448:
                    k = new ACT_EXTSETFRICTION;
                    break;
                case 4521984:
                    k = new ACT_EXTSETELASTICITY;
                    break;
                case 4587520:
                    k = new ACT_EXTAPPLYIMPULSE;
                    break;
                case 4653056:
                    k = new ACT_EXTAPPLYANGULARIMPULSE;
                    break;
                case 4718592:
                    k = new ACT_EXTAPPLYFORCE;
                    break;
                case 4784128:
                    k = new ACT_EXTAPPLYTORQUE;
                    break;
                case 4849664:
                    k = new ACT_EXTSETLINEARVELOCITY;
                    break;
                case 4915200:
                    k = new ACT_EXTSETANGULARVELOCITY;
                    break;
                case 4980736:
                    k = new ACT_EXTFOREACH;
                    break;
                case 5046272:
                    k =
                        new ACT_EXTFOREACH2;
                    break;
                case 5111808:
                    k = new ACT_EXTSTOPFORCE;
                    break;
                case 5177344:
                    k = new ACT_EXTSTOPTORQUE;
                    break;
                default:
                    k = new be
            }
    }
    if (null != k) {
        k.Ba = q;
        k.Xe = a.file.Z();
        k.yb = a.file.Z();
        k.Na = a.file.fb();
        k.We = a.file.fb();
        k.Dd = a.file.fb();
        k.Qn = a.file.fb();
        if (0 < k.Dd)
            for (k.B = Array(k.Dd), q = 0; q < k.Dd; q++) k.B[q] = Na.create(a);
        if (b || c || d) c = k.B[0], k.vd = c.value, c = k.B[1], k.value = c.Ia[0].value;
        if (e || f || g) b = null, c = k.B[0], 53 != c.code && (d = c.value, c = k.B[1], 0 <= d && 2 == c.Ia.length && (0 >= c.Ia[1].code || 1310720 <= c.Ia[1].code) && (65535 ==
            c.Ia[0].code || 1572863 == c.Ia[0].code) && (e ? (b = new Wb, b.vd = d, b.value = c.Ia[0].value) : f ? (b = new Yb, b.vd = d, b.value = c.Ia[0].value) : g && (b = new $b, b.vd = d, b.value = c.Ia[0].value)), null != b && (b.Ba = k.Ba, b.Xe = k.Xe, b.yb = k.yb, b.Na = k.Na, b.We = k.We, b.Dd = k.Dd, b.Qn = k.Qn, b.B = k.B, k = b));
        if (m || p || h) b = null, e = k.B[0], 2 == e.Ia.length && (0 >= e.Ia[1].code || 1310720 <= e.Ia[1].code) && 65535 == e.Ia[0].code && (m ? (b = new ACT_EXTSETFLAGCONST, b.P = 1 << e.Ia[0].value) : p ? (b = new ACT_EXTCLRFLAGCONST, b.P = 1 << e.Ia[0].value) : h && (b = new bc, b.P = 1 << e.Ia[0].value)),
            null != b && (b.Ba = k.Ba, b.Xe = k.Xe, b.yb = k.yb, b.Na = k.Na, b.We = k.We, b.Dd = k.Dd, b.Qn = k.Qn, b.B = k.B, k = b)
    }
    a.file.seek(l + n);
    return k
};
rb.gO = 1;
ga.prototype = {
    qa: function() {}
};
sb.prototype = {
    qa: function(a) {
        a.h.pc.Zs()
    }
};
tb.prototype = {
    qa: function(a) {
        var b = this.B[0],
            c = 0 != (b.cE & Pa.nH),
            d = a.jb(this.B[1]);
        a.h.pc.play(b.Qx, 1, d - 1, c)
    }
};
ub.prototype = {
    qa: function(a) {
        var b = this.B[0],
            c = 0 != (b.cE & Pa.nH),
            d = a.jb(this.B[1]),
            e = a.jb(this.B[2]);
        a.h.pc.play(b.Qx, e, d - 1, c)
    }
};
vb.prototype = {
    qa: function(a) {
        var b = a.jb(this.B[0]),
            c = a.jb(this.B[1]);
        0 <= c && 100 >= c && a.h.pc.cM(b - 1, c)
    }
};
wb.prototype = {
    qa: function(a) {
        var b = a.jb(this.B[0]);
        0 <= b && 100 >= b && a.h.pc.ZL(b)
    }
};
xb.prototype = {
    qa: function(a) {
        a.Cb = h.Xp;
        a.h.si = !0
    }
};
yb.prototype = {
    qa: function(a) {
        var b;
        if (26 == this.B[0].code) {
            if (b = this.B[0].value, -1 == a.h.mG(b)) return
        } else {
            b = a.jb(this.B[0]) - 1;
            if (0 > b || 4096 <= b) return;
            a.h.SQ && b++;
            b |= 32768
        }
        a.Cb = h.Wp;
        a.Wm = b;
        a.h.si = !0
    }
};
zb.prototype = {
    qa: function(a) {
        a.h.si = !0;
        a.h.KB && (a.Cb = h.Vp)
    }
};
Ab.prototype = {
    qa: function(a) {
        var b = new Oa;
        this.B[0].ap(a, 0, b);
        a.KD(b.x, b.y, b.hm,
            3)
    }
};
Bb.prototype = {
    qa: function(a) {
        var b = a.jb(this.B[0]);
        a.KD(b, 0, -1, 1)
    }
};
Cb.prototype = {
    qa: function(a) {
        var b = this.B[0],
            c = new Oa;
        b.ap(a, 17, c) && (c.zu ? (this.Na |= V.wi, a.i.Ej = !0) : this.Na &= ~V.wi, b = a.dv(b.Kq, b.Kz, c.x, c.y, c.dir, 0, c.hm, -1), 0 <= b && (b = a.H[b], a.i.am(b), b && 32 <= b.xa && a.$H(b), a.Rp(b) || null != a.fS && a.mi.mL(b)))
    }
};
Db.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.uv(this.B[0]), null == b.ri || null != b.ri && a != b.ri) && (b.pE(a), b.qM(-1))
    }
};
Eb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b &&
            (a = a.Hf(this.B[0]), b.Ru(a), b.Gn(a))
    }
};
Fb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.Hf(this.B[0]), b.BI(a))
    }
};
Gb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.Hf(this.B[0]), b.EI(a))
    }
};
Hb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.Hf(this.B[0]), b.DI(a))
    }
};
Ib.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (this.B[0].code == Na.lH ? (a = a.jb(this.B[0]), a = n.mM(a)) : a = this.B[0].color, b.CI(a))
    }
};
Jb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c =
                new Oa;
            this.B[0].ap(a, 1, c) && (h.Qb(b, c.x), h.Rb(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Jb(b) != c && (b.b.Sa = c, b.b.M = !0, b.A.V.Ae(c), 2 == b.xa && b.ha.Mi(0))))
        }
    }
};
Kb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.jb(this.B[0]), h.Qb(b, Math.floor(a)))
    }
};
Lb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.jb(this.B[0]), h.Rb(b, Math.floor(a)))
    }
};
Mb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.jb(this.B[0]), null != b.A && b.A.V.Be(a))
    }
};
Nb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null !=
            b && (a = 22 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].value, null != b.A && b.A.TL(b, a))
    }
};
Ob.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = 10 == this.B[0].code ? this.B[0].value : a.jb(this.B[0]), b.ha.Fq(a), b.b.M = !0)
    }
};
Pb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (a = a.jb(this.B[0]), b.ha.cI(a))
    }
};
Qb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c;
            c = 29 == this.B[0].code ? a.tv(this.B[0].value) : a.jb(this.B[0]);
            c &= 31;
            a.Jb(b) != c && (b.b.Sa = c, b.b.M = !0, b.A.V.Ae(c), 2 == b.xa && b.ha.Mi(0))
        }
    }
};
Rb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && (3 == b.xa ? 0 != (b.FD & h.vt) ? (b.F.Io(), b.F.W &= ~w.gg, b.X |= G.mh) : (b.X |= G.je, a.lg(b.Vb)) : 0 == (b.X & G.je) && (b.X |= G.je, 0 != (b.ta & z.ek) || 0 != (b.ta & z.gk) ? a.GB(b) : (b.io = !1, a.lg(b.Vb))))
    }
};
Sb.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && h.PK(a)
    }
};
Tb.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && h.QK(a)
    }
};
Ub.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && null != b.F && (b.F.Io(), b.F.W &= ~w.gg, 2 == this.B[0].code ? (b.F.rl = this.B[0].jd, b.F.Xm = this.B[0].jd) :
            (b.F.rl = a.jb(this.B[0]), b.F.Xm = b.F.rl))
    }
};
Vb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c;
            c = 53 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].value;
            0 <= c && null != b.N && (c >= b.N.Va.length && b.N.aj(c + 10), a = a.Hf(this.B[1]), b.N.Va[c] = a)
        }
    }
};
Wb.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && 0 <= this.vd && null != a.N && (this.vd >= a.N.Va.length && a.N.aj(this.vd + 10), a.N.Va[this.vd] = this.value)
    }
};
Xb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c;
            c = 53 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].value;
            0 <= c && null != b.N && (c >= b.N.Va.length && b.N.aj(c + 10), a = a.Hf(this.B[1]), b.N.Va[c] += a)
        }
    }
};
Yb.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && 0 <= this.vd && null != a.N && (this.vd >= a.N.Va.length && a.N.aj(this.vd + 10), a.N.Va[this.vd] += this.value)
    }
};
Zb.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c;
            c = 53 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].value;
            0 <= c && null != b.N && (c >= b.N.Va.length && b.N.aj(c + 10), a = a.Hf(this.B[1]), b.N.Va[c] -= a)
        }
    }
};
$b.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && 0 <= this.vd &&
            null != a.N && (this.vd >= a.N.Va.length && a.N.aj(this.vd + 10), a.N.Va[this.vd] -= this.value)
    }
};
ac.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        null != b && null != b.N && (a = 1 << a.jb(this.B[0]), b.N.Qe = 0 != (b.N.Qe & a) ? b.N.Qe & ~a : b.N.Qe | a)
    }
};
bc.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && null != a.N && (a.N.Qe = 0 != (a.N.Qe & this.P) ? a.N.Qe & ~this.P : a.N.Qe | this.P)
    }
};
cc.prototype = {
    qa: function(a) {
        a = a.i.zb(this);
        null != a && a.ge(0)
    }
};
dc.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b && null != b.F) {
            a = n.oI(255 - a.jb(this.B[0]),
                0, 255);
            var c = 0 == (b.F.Zb & w.st);
            b.F.Zb = b.F.Zb & w.hy | w.st;
            var d = 16777215;
            c || (d = b.F.$b);
            b.F.$b = a << 24 | d & 16777215;
            b.F.LK(b.F.Zb, b.F.$b)
        }
    }
};
L.Sy = 6;
L.ZE = -983041;
L.$E = -1507329;
L.aF = -1572865;
L.create = function(a) {
    var b = a.file.S,
        c = a.file.v(),
        d, e = a.file.w();
    switch (e) {
        case -2555905:
            d = new CND_RUNNINGAS;
            break;
        case -2490369:
            d = new CND_COMPAREGCONST_GT;
            break;
        case -2424833:
            d = new CND_COMPAREGCONST_GE;
            break;
        case -2359297:
            d = new CND_COMPAREGCONST_LT;
            break;
        case -2293761:
            d = new CND_COMPAREGCONST_LE;
            break;
        case -2228225:
            d = new CND_COMPAREGCONST_NE;
            break;
        case -2162689:
            d = new CND_COMPAREGCONST_EQ;
            break;
        case -2097153:
            d = new CND_COMPAREGCONST_GT;
            break;
        case -2031617:
            d = new CND_COMPAREGCONST_GE;
            break;
        case -1966081:
            d = new CND_COMPAREGCONST_LT;
            break;
        case -1900545:
            d = new CND_COMPAREGCONST_LE;
            break;
        case -1835009:
            d = new CND_COMPAREGCONST_NE;
            break;
        case -1769473:
            d = new CND_COMPAREGCONST_EQ;
            break;
        case -1703937:
            d = new wa;
            break;
        case -1638401:
            d = new CND_CHANCE;
            break;
        case -1572865:
            d = new wa;
            break;
        case -1507329:
            d = new wa;
            break;
        case -1441793:
            d = new CND_GROUPSTART;
            break;
        case -1245185:
            d =
                new CND_COMPAREGSTRING;
            break;
        case -983041:
            d = new CND_ONLOOP;
            break;
        case -720897:
            d = new CND_GROUPACTIVATED;
            break;
        case -655361:
            d = new wa;
            break;
        case -589825:
            d = new wa;
            break;
        case -524289:
            d = new wa;
            break;
        case -458753:
            d = new CND_COMPAREG;
            break;
        case -393217:
            d = new ec;
            break;
        case -327681:
            d = new fc;
            break;
        case -262145:
            d = new CND_REPEAT;
            break;
        case -196609:
            d = new CND_NOMORE;
            break;
        case -131073:
            d = new gc;
            break;
        case -65537:
            d = new wa;
            break;
        case -1:
            d = new bb;
            break;
        case -524290:
            d = new CND_SPCHANNELPAUSED;
            break;
        case -458754:
            d = new CND_NOSPCHANNELPLAYING;
            break;
        case -327682:
            d = new CND_SPSAMPAUSED;
            break;
        case -131074:
            d = new CND_NOSAMPLAYING;
            break;
        case -2:
            d = new CND_NOSPSAMPLAYING;
            break;
        case -458755:
            d = new CND_ENDOFPAUSE;
            break;
        case -393219:
            d = new CND_ISVSYNCON;
            break;
        case -327683:
            d = new CND_ISLADDER;
            break;
        case -262147:
            d = new CND_ISOBSTACLE;
            break;
        case -196611:
            d = new CND_QUITAPPLICATION;
            break;
        case -131075:
            d = new wa;
            break;
        case -65539:
            d = new bb;
            break;
        case -3:
            d = new hc;
            break;
        case -458756:
            d = new qc;
            break;
        case -393220:
            d = new pc;
            break;
        case -327684:
            d = new CND_ONEVENT;
            break;
        case -262148:
            d = new CND_TIMEOUT;
            break;
        case -196612:
            d = new CND_EVERY;
            break;
        case -131076:
            d = new CND_TIMER;
            break;
        case -65540:
            d = new CND_TIMERINF;
            break;
        case -4:
            d = new CND_TIMERSUP;
            break;
        case -720902:
            d = new CND_ONMOUSEWHEELDOWN;
            break;
        case -655366:
            d = new CND_ONMOUSEWHEELUP;
            break;
        case -589830:
            d = new CND_MOUSEON;
            break;
        case -524294:
            d = new CND_ANYKEY;
            break;
        case -458758:
            d = new ic;
            break;
        case -393222:
            d = new jc;
            break;
        case -327686:
            d = new CND_MCLICKINZONE;
            break;
        case -262150:
            d = new kc;
            break;
        case -196614:
            d = new lc;
            break;
        case -131078:
            d =
                new CND_MINZONE;
            break;
        case -65542:
            d = new mc;
            break;
        case -6:
            d = new nc;
            break;
        case -327687:
            d = new CND_JOYPUSHED;
            break;
        case -262151:
            d = new CND_NOMORELIVE;
            break;
        case -196615:
            d = new CND_JOYPRESSED;
            break;
        case -131079:
            d = new CND_LIVE;
            break;
        case -65543:
            d = new CND_SCORE;
            break;
        case -7:
            d = new CND_PLAYERPLAYING;
            break;
        case -1441797:
            d = new CND_CHOOSEALLINLINE;
            break;
        case -1376261:
            d = new CND_CHOOSEFLAGRESET;
            break;
        case -1310725:
            d = new CND_CHOOSEFLAGSET;
            break;
        case -1245189:
            d = new CND_CHOOSEVALUE;
            break;
        case -1179653:
            d = new CND_PICKFROMID;
            break;
        case -1114117:
            d = new CND_CHOOSEALLINZONE;
            break;
        case -1048581:
            d = new CND_CHOOSEALL;
            break;
        case -983045:
            d = new CND_CHOOSEZONE;
            break;
        case -917509:
            d = new CND_NUMOFALLOBJECT;
            break;
        case -851973:
            d = new CND_NUMOFALLZONE;
            break;
        case -786437:
            d = new CND_NOMOREALLZONE;
            break;
        case -720901:
            d = new CND_CHOOSEFLAGRESET_OLD;
            break;
        case -655365:
            d = new CND_CHOOSEFLAGSET_OLD;
            break;
        case -458757:
            d = new CND_CHOOSEVALUE_OLD;
            break;
        case -393221:
            d = new CND_PICKFROMID_OLD;
            break;
        case -327685:
            d = new CND_CHOOSEALLINZONE_OLD;
            break;
        case -262149:
            d =
                new CND_CHOOSEALL_OLD;
            break;
        case -196613:
            d = new CND_CHOOSEZONE_OLD;
            break;
        case -131077:
            d = new CND_NUMOFALLOBJECT_OLD;
            break;
        case -65541:
            d = new CND_NUMOFALLZONE_OLD;
            break;
        case -5:
            d = new CND_NOMOREALLZONE_OLD;
            break;
        case -5308409:
            d = new oc;
            break;
        case -5439484:
            d = new CND_QEQUAL;
            break;
        case -5373948:
            d = new CND_QFALSE;
            break;
        case -5308412:
            d = new CND_QEXACT;
            break;
        case -5505015:
            d = new CND_CCAISPAUSED;
            break;
        case -5439479:
            d = new CND_CCAISVISIBLE;
            break;
        case -5373943:
            d = new CND_CCAAPPFINISHED;
            break;
        case -5308407:
            d = new CND_CCAFRAMECHANGED;
            break;
        default:
            switch (e & 4294901760) {
                case -2818048:
                    d = new cb;
                    break;
                case -2752512:
                    d = new cb;
                    break;
                case -2686976:
                    d = new CND_EXTONLOOP;
                    break;
                case -2621440:
                    d = new CND_EXTISSTRIKEOUT;
                    break;
                case -2555904:
                    d = new CND_EXTISUNDERLINE;
                    break;
                case -2490368:
                    d = new CND_EXTISITALIC;
                    break;
                case -2424832:
                    d = new CND_EXTISBOLD;
                    break;
                case -2359296:
                    d = new CND_EXTCMPVARSTRING;
                    break;
                case -2293760:
                    d = new CND_EXTPATHNODENAME;
                    break;
                case -2228224:
                    d = new rc;
                    break;
                case -2162688:
                    d = new CND_EXTNOMOREOBJECT;
                    break;
                case -2097152:
                    d = new sc;
                    break;
                case -2031616:
                    d = new CND_EXTNOMOREZONE;
                    break;
                case -1966080:
                    d = new CND_EXTNUMBERZONE;
                    break;
                case -1900544:
                    d = new tc;
                    break;
                case -1835008:
                    d = new CND_EXTHIDDEN;
                    break;
                case -1769472:
                    d = new uc;
                    break;
                case -1703936:
                    d = new CND_EXTCMPVARFIXED;
                    break;
                case -1638400:
                    d = new vc;
                    break;
                case -1572864:
                    d = new CND_EXTFLAGRESET;
                    break;
                case -1507328:
                    d = new wc;
                    break;
                case -1441792:
                    d = new xc;
                    break;
                case -1376256:
                    d = new CND_EXTENDPATH;
                    break;
                case -1310720:
                    d = new CND_EXTPATHNODE;
                    break;
                case -1245184:
                    d = new CND_EXTCMPACC;
                    break;
                case -1179648:
                    d = new CND_EXTCMPDEC;
                    break;
                case -1114112:
                    d = new yc;
                    break;
                case -1048576:
                    d = new CND_EXTCMPY;
                    break;
                case -983040:
                    d = new CND_EXTCMPSPEED;
                    break;
                case -917504:
                    d = new CND_EXTCOLLISION;
                    break;
                case -851968:
                    d = new CND_EXTCOLBACK;
                    break;
                case -786432:
                    d = new CND_EXTOUTPLAYFIELD;
                    break;
                case -720896:
                    d = new CND_EXTINPLAYFIELD;
                    break;
                case -655360:
                    d = new CND_EXTISOUT;
                    break;
                case -589824:
                    d = new CND_EXTISIN;
                    break;
                case -524288:
                    d = new CND_EXTFACING;
                    break;
                case -458752:
                    d = new zc;
                    break;
                case -393216:
                    d = new CND_EXTBOUNCING;
                    break;
                case -327680:
                    d = new CND_EXTREVERSED;
                    break;
                case -262144:
                    d = new Ac;
                    break;
                case -196608:
                    d = new CND_EXTANIMPLAYING;
                    break;
                case -131072:
                    d = new Bc;
                    break;
                case -65536:
                    d = new CND_EXTCMPFRAME;
                    break;
                default:
                    d = new ce
            }
    }
    if (null != d && (d.Ba = e, d.Xe = a.file.Z(), d.yb = a.file.Z(), d.Na = a.file.fb(), d.We = a.file.fb(), d.Dd = a.file.fb(), d.Qn = a.file.fb(), d.lR = a.file.v(), 0 < d.Dd))
        for (d.B = Array(d.Dd), e = 0; e < d.Dd; e++) d.B[e] = Na.create(a);
    a.file.seek(b + c);
    return d
};
L.Tk = function(a) {
    return a.We & T.$j ? !1 : !0
};
L.sm = function(a) {
    return a.We & T.$j ? !0 : !1
};
L.Bw = function(a, b) {
    return a.We &
        T.$j ? !b : b
};
L.xI = function(a) {
    var b = a.i.Qg,
        c = b.Xi;
    a = b.Xi = a.Ya;
    if (a == c) return !1;
    a--;
    return a == c ? !1 : !0
};
L.ZQ = function(a, b) {
    var c, d = b.tr;
    if (null == d) d = new O, b.tr = d;
    else
        for (c = 0; c < d.size(); c++)
            if (d.get(c) == a) return !1;
    d.add(a);
    d = b.BB;
    if (null == d) return !0;
    for (c = 0; c < d.size(); c++)
        if (d.get(c) == a) return !1;
    return !0
};
L.XQ = function(a, b) {
    return 0 == b ? !1 : b == a.Ya || b == a.Ya - 1 ? !0 : !1
};
wa.prototype = {
    rb: function() {
        return !1
    },
    na: function() {
        return !1
    }
};
bb.prototype = {
    rb: function() {
        return !0
    },
    na: function() {
        return !0
    }
};
L.prototype = {
    Ak: function(a, b) {
        var c = a.i.Ef(this.yb),
            d = a.i.Ic,
            e = this.B[0],
            f;
        f = e.Ia[0];
        if (f.code != ea.yy && f.code != ea.EF || 0 != e.Ia[1].code)
            for (; null != c;) f = a.jb(e), 0 == b.Pn(c, f, e.Ui) && (d--, a.i.Ed()), c = a.i.Ye();
        else
            for (f = f.value; null != c;) 0 == b.Pn(c, f, e.Ui) && (d--, a.i.Ed()), c = a.i.Ye();
        return 0 != d ? !0 : !1
    },
    Bk: function(a, b) {
        for (var c = a.i.Ef(this.yb), d = a.i.Ic; null != c;) 0 == b.ar(c) && (d--, a.i.Ed()), c = a.i.Ye();
        return 0 != d ? !0 : !1
    },
    IB: function(a) {
        if (a.i.Pg) return a.i.Ef(this.yb), a.i.Ef(this.B[0].Mb), !1;
        var b = !1;
        0 != (this.We & T.$j) &&
            (b = !0);
        var c = a.i.Ef(this.yb);
        if (null == c) return L.sm(this);
        var d = a.i.Ic,
            e = this.B[0].Zh;
        0 <= e ? (a.Jv[0] = e, a.Jv[1] = this.B[0].Mb, e = a.Jv) : e = a.i.Ob[this.B[0].Mb & 32767].Aa;
        var f, g = new O,
            m, p;
        do {
            f = a.tm(c, c.b.Ga, c.b.Ua, c.b.mb, c.b.nb, c.o, c.m, e);
            if (null == f) 0 == b && (d--, a.i.Ed());
            else {
                c = !1;
                for (m = 0; m < f.size(); m++) p = f.get(m), 0 == (p.X & G.je) && (g.add(p), c = !0);
                1 == b ? 1 == c && (d--, a.i.Ed()) : 0 == c && (d--, a.i.Ed())
            }
            c = a.i.Ye()
        } while (null != c);
        if (0 == d) return !1;
        c = a.i.Ef(this.B[0].Mb);
        if (null == c) return !1;
        d = a.i.Ic;
        if (0 == b) {
            do {
                for (m = 0; m <
                    g.size() && (p = g.get(m), c != p); m++);
                m == g.size() && (d--, a.i.Ed());
                c = a.i.Ye()
            } while (null != c);
            return 0 != d ? !0 : !1
        }
        do {
            for (m = 0; m < g.size(); m++)
                if (p = g.get(m), c == p) {
                    d--;
                    a.i.Ed();
                    break
                } c = a.i.Ye()
        } while (null != c);
        return 0 != d ? !0 : !1
    }
};
ec.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        a = a.i.Qg;
        if (0 != (a.La & F.nn)) return !0;
        if (0 != (a.La & F.mn)) return !1;
        a.Xi = -2;
        a.La |= F.nn;
        return !0
    }
};
fc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        a = a.i.Qg;
        if (0 != (a.La & F.Pp)) return !1;
        a.La |= F.Pp;
        return !0
    }
};
gc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b = a.Hf(this.B[0]);
        a = a.Hf(this.B[1]);
        return h.Oq(b, a, this.B[1].Ui)
    }
};
hc.prototype = {
    rb: function(a) {
        return 2 < a.Ya ? !1 : !0
    },
    na: function(a) {
        return 2 < a.Ya ? !1 : !0
    }
};
ic.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b = 0;
        switch (this.B[0].key) {
            case 1:
                b = l.dd;
                break;
            case 2:
                b = l.hg;
                break;
            case 4:
                b = l.zq
        }
        return 0 == a.h.nc[b] ? L.sm(this) : L.Tk(this)
    }
};
jc.prototype = {
    rb: function(a) {
        if (a.i.Dc != this.B[0].value) return !1;
        var b = a.i.Dx,
            c = this.B[1];
        if (b == c.Zh) return a.i.am(a.i.Cx),
            !0;
        c = c.Mb;
        if (0 == (c & 32768)) return !1;
        var d = a.i.Ob[c & 32767],
            e;
        for (e = 0; e < d.Aa.length; e += 2)
            if (d.Aa[e] == b) return a.i.fJ(c), a.i.am(a.i.Cx), !0;
        return !1
    },
    na: function(a) {
        return a.i.Cs != this.B[0].value ? !1 : a.nB(this.B[1].Mb, !1)
    }
};
kc.prototype = {
    rb: function(a) {
        return this.B[0].value != a.i.Dc ? !1 : !0
    },
    na: function(a) {
        return this.B[0].value == a.i.Cs ? !0 : !1
    }
};
lc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        return a.nB(this.B[0].Mb, 0 != (this.We & T.$j))
    }
};
mc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        return L.Bw(this,
            a.h.nc[this.B[0].key])
    }
};
nc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        return 0 == a.h.nc[this.B[0].key] ? L.sm(this) : L.xI(a) ? L.Tk(this) : L.sm(this)
    }
};
oc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        for (var b = a.i.Ef(this.yb), c = a.i.Ic, d; null != b;) b = b.sa, d = a.Hf(this.B[0]), 0 == h.Oq(b, d, this.B[0].Ui) && (c--, a.i.Ed()), b = a.i.Ye();
        return 0 != c
    }
};
pc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b;
        b = 22 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].jd;
        var c = this.B[1];
        if (a.pi >=
            b) {
            if (c.value == a.Ya) return c.value = a.Ya + 1, !1;
            c.value = a.Ya + 1;
            return !0
        }
        return !1
    }
};
qc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b = this.B[1];
        if (0 == b.it) a = 22 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].jd, b.value = a, b.it = -1;
        else if (b.value -= a.ip, 0 >= b.value) return a = 22 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].jd, b.value += a, !0;
        return !1
    }
};
rc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        a.i.cA(this.yb, -1);
        if (0 == a.i.Ic) return !1;
        var b = a.random(a.i.Ic),
            b = a.i.cA(this.yb, b);
        a.i.hJ(this.yb,
            b);
        return !0
    }
};
sc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b = 0,
            c;
        c = this.yb;
        if (0 == (c & 32768)) c = a.T[c], b = c.Hg;
        else if (32767 != (c & 32767)) {
            var d = a.i.Ob[c & 32767],
                e;
            for (e = 0; e < d.Aa.length; e += 2) c = a.T[d.Aa[e + 1]], b += c.Hg
        }
        a = a.jb(this.B[0]);
        return h.Wz(b, a, this.B[0].Ui)
    }
};
tc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Bk(a, this)
    },
    na: function(a) {
        return this.Bk(a, this)
    },
    ar: function(a) {
        return L.Bw(this, 0 == (a.F.W & w.xh))
    }
});
uc.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b =
            a.i.Ef(this.yb);
        if (null == b) return !1;
        var c = a.i.Ic,
            d, e = this.B[1];
        do d = 53 == this.B[0].code ? a.jb(this.B[0]) : this.B[0].value, 0 <= d && null != b.N ? (b = d < b.N.Va.length ? b.N.lr(d) : 0, d = a.Hf(e), 0 == h.Oq(b, d, e.Ui) && (c--, a.i.Ed())) : (c--, a.i.Ed()), b = a.i.Ye(); while (null != b);
        return 0 != c
    }
};
cb.prototype = {
    rb: function(a) {
        return this.na(a)
    },
    na: function(a) {
        var b = a.i.Ef(this.yb);
        if (null == b) return !1;
        var c = a.i.Ic,
            d = this.B[0].value,
            e = this.B[1],
            f = e.Ia[0].value;
        do 0 <= d && null != b.N ? (b = d < b.N.Va.length ? b.N.lr(d) : 0, 0 == h.Oq(b, f, e.Ui) && (c--,
            a.i.Ed())) : (c--, a.i.Ed()), b = a.i.Ye(); while (null != b);
        return 0 != c
    }
};
vc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Ak(a, this)
    },
    na: function(a) {
        return this.Ak(a, this)
    },
    Pn: function(a, b) {
        return null != a.N && 0 != (a.N.Qe & 1 << (b & 31)) ? !0 : !1
    }
});
wc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Bk(a, this)
    },
    na: function(a) {
        return this.Bk(a, this)
    },
    ar: function(a) {
        return a.c.rk(a, a.b.Ga, a.b.Ua, a.b.mb, a.b.nb, a.o, a.m, 0, ra.hn) || a.c.rk(a, a.b.Ga, a.b.Ua, a.b.mb, a.b.nb, a.o, a.m, 0, ra.ie) ? L.Tk(this) : L.sm(this)
    }
});
xc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Ak(a, this)
    },
    na: function(a) {
        return this.Ak(a, this)
    },
    Pn: function(a, b) {
        var c = a.c.ca + b,
            d = a.o - a.ia;
        if (d <= c) return L.Tk(this);
        c = a.c.ca + a.c.kl - b;
        d += a.K;
        if (d >= c) return L.Tk(this);
        c = a.c.ga + b;
        d = a.m - a.ja;
        if (d <= c) return L.Tk(this);
        c = a.c.ga + a.c.ll - b;
        d += a.J;
        return d >= c ? L.Tk(this) : L.sm(this)
    }
});
yc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Ak(a, this)
    },
    na: function(a) {
        return this.Ak(a, this)
    },
    Pn: function(a, b, c) {
        return h.Wz(a.o, b, c)
    }
});
zc.prototype = n.extend(new L, {
    rb: function(a) {
        return this.Bk(a, this)
    },
    na: function(a) {
        return this.Bk(a, this)
    },
    ar: function(a) {
        return L.Bw(this, 0 == a.b.$)
    }
});
Ac.prototype = n.extend(new L, {
    rb: function(a) {
        return this.IB(a)
    },
    na: function(a) {
        return this.IB(a)
    }
});
Bc.prototype = n.extend(new L, {
    rb: function(a, b) {
        if ((10 == this.B[0].code ? this.B[0].value : a.jb(this.B[0])) != a.i.Dc) return !1;
        a.i.am(b);
        return !0
    },
    na: function(a) {
        return 10 == this.B[0].code ? this.Bk(a, this) : this.Ak(a, this)
    },
    ar: function(a) {
        return this.B[0].value != a.ha.cl ? !1 : 0 == a.ha.kf ? !0 : !1
    },
    Pn: function(a, b) {
        return b != a.ha.cl ? !1 : 0 == a.ha.kf ? !0 : !1
    }
});
ea.cO = 8960;
ea.eO = 9216;
ea.bO = 9472;
ea.fO = 9728;
ea.$N = 9984;
ea.dO = 10752;
ea.aO = 11008;
ea.Et = 262143;
ea.yy = 65535;
ea.EF = 1572863;
ea.create = function(a) {
    var b = a.S,
        c, d = a.w();
    switch (d) {
        case 0:
            c = new xa;
            break;
        case 131072:
            c = new Kc;
            break;
        case 262144:
            c = new Lc;
            break;
        case 393216:
            c = new Mc;
            break;
        case 524288:
            c = new Nc;
            break;
        case 655360:
            c = new EXP_MOD;
            break;
        case 786432:
            c = new EXP_POW;
            break;
        case 917504:
            c = new EXP_AND;
            break;
        case 1048576:
            c = new EXP_OR;
            break;
        case 1179648:
            c =
                new EXP_XOR;
            break;
        case 65535:
            c = new eb;
            break;
        case 131071:
            c = new Oc;
            break;
        case 196607:
            c = new EXP_VARGLO;
            break;
        case 262143:
            c = new Hc;
            break;
        case 327679:
            c = new Pc;
            break;
        case 393215:
            c = new EXP_VAL;
            break;
        case 458751:
        case 524287:
        case 589823:
        case 655359:
            c = new db;
            break;
        case 720895:
            c = new EXP_SIN;
            break;
        case 786431:
            c = new EXP_COS;
            break;
        case 851967:
            c = new EXP_TAN;
            break;
        case 917503:
            c = new EXP_SQR;
            break;
        case 983039:
            c = new EXP_LOG;
            break;
        case 1048575:
            c = new EXP_LN;
            break;
        case 1114111:
            c = new EXP_HEX;
            break;
        case 1179647:
            c = new EXP_BIN;
            break;
        case 1245183:
            c = new EXP_EXP;
            break;
        case 1310719:
            c = new EXP_LEFT;
            break;
        case 1376255:
            c = new EXP_RIGHT;
            break;
        case 1441791:
            c = new EXP_MID;
            break;
        case 1507327:
            c = new EXP_LEN;
            break;
        case 1572863:
            c = new Cc;
            break;
        case 1638399:
            c = new Gc;
            break;
        case 1900543:
            c = new EXP_INT;
            break;
        case 1966079:
            c = new EXP_ABS;
            break;
        case 2031615:
            c = new EXP_CEIL;
            break;
        case 2097151:
            c = new EXP_FLOOR;
            break;
        case 2162687:
            c = new EXP_ACOS;
            break;
        case 2228223:
            c = new EXP_ASIN;
            break;
        case 2293759:
            c = new EXP_ATAN;
            break;
        case 2359295:
            c = new EXP_NOT;
            break;
        case 2686975:
            c =
                new EXP_MIN;
            break;
        case 2752511:
            c = new EXP_MAX;
            break;
        case 2818047:
            c = new EXP_GETRGB;
            break;
        case 2883583:
            c = new EXP_GETRED;
            break;
        case 2949119:
            c = new EXP_GETGREEN;
            break;
        case 3014655:
            c = new EXP_GETBLUE;
            break;
        case 3080191:
            c = new EXP_LOOPINDEX;
            break;
        case 3145727:
            c = new EXP_NEWLINE;
            break;
        case 3211263:
            c = new EXP_ROUND;
            break;
        case 3276799:
            c = new EXP_STRINGGLO;
            break;
        case 3342335:
            c = new Fc;
            break;
        case 3407871:
            c = new EXP_LOWER;
            break;
        case 3473407:
            c = new EXP_UPPER;
            break;
        case 3538943:
            c = new EXP_FIND;
            break;
        case 3604479:
            c = new EXP_REVERSEFIND;
            break;
        case 3866623:
            c = new EXP_FLOATTOSTRING;
            break;
        case 3932159:
            c = new EXP_ATAN2;
            break;
        case 3997695:
            c = new xa;
            break;
        case 4063231:
            c = new db;
            break;
        case 4128767:
            c = new EXP_DISTANCE;
            break;
        case 4194303:
            c = new EXP_ANGLE;
            break;
        case 4259839:
            c = new EXP_RANGE;
            break;
        case 4325375:
            c = new EXP_RANDOMRANGE;
            break;
        case 4456447:
            c = new EXP_RUNTIMENAME;
            break;
        case -1:
            c = new Qc;
            break;
        case -65537:
            c = new Rc;
            break;
        case -131073:
            c = new EXP_VIRGULE;
            break;
        case 65534:
            c = new EXP_GETSAMPLEMAINVOL;
            break;
        case 131070:
            c = new EXP_GETSAMPLEVOL;
            break;
        case 196606:
            c = new EXP_GETCHANNELVOL;
            break;
        case 262142:
            c = new xa;
            break;
        case 327678:
            c = new EXP_GETSAMPLEPAN;
            break;
        case 393214:
            c = new EXP_GETCHANNELPAN;
            break;
        case 458750:
            c = new EXP_GETSAMPLEPOS;
            break;
        case 524286:
            c = new EXP_GETCHANNELPOS;
            break;
        case 589822:
            c = new EXP_GETSAMPLEDUR;
            break;
        case 655358:
            c = new EXP_GETCHANNELDUR;
            break;
        case 720894:
            c = new EXP_GETSAMPLEFREQ;
            break;
        case 786430:
            c = new EXP_GETCHANNELFREQ;
            break;
        case 65533:
            c = new EXP_GAMLEVEL;
            break;
        case 131069:
            c = new EXP_GAMNPLAYER;
            break;
        case 196605:
            c = new EXP_PLAYXLEFT;
            break;
        case 262141:
            c = new EXP_PLAYXRIGHT;
            break;
        case 327677:
            c = new EXP_PLAYYTOP;
            break;
        case 393213:
            c = new EXP_PLAYYBOTTOM;
            break;
        case 458749:
            c = new EXP_PLAYWIDTH;
            break;
        case 524285:
            c = new EXP_PLAYHEIGHT;
            break;
        case 589821:
            c = new EXP_GAMLEVELNEW;
            break;
        case 655357:
            c = new EXP_GETCOLLISIONMASK;
            break;
        case 720893:
            c = new EXP_FRAMERATE;
            break;
        case 786429:
            c = new EXP_GETVIRTUALWIDTH;
            break;
        case 851965:
            c = new EXP_GETVIRTUALHEIGHT;
            break;
        case 917501:
            c = new EXP_GETFRAMEBKDCOLOR;
            break;
        case 983037:
            c = new xa;
            break;
        case 1048573:
            c = new xa;
            break;
        case 1114109:
            c = new EXP_FRAMEALPHACOEF;
            break;
        case 1179645:
            c = new EXP_FRAMERGBCOEF;
            break;
        case 1245181:
            c = new xa;
            break;
        case 65532:
            c = new EXP_TIMVALUE;
            break;
        case 131068:
            c = new EXP_TIMCENT;
            break;
        case 196604:
            c = new EXP_TIMSECONDS;
            break;
        case 262140:
            c = new EXP_TIMHOURS;
            break;
        case 327676:
            c = new EXP_TIMMINITS;
            break;
        case 393212:
            c = new EXP_EVENTAFTER;
            break;
        case 65530:
            c = new Sc;
            break;
        case 131066:
            c = new Tc;
            break;
        case 196602:
            c = new EXP_MOUSEWHEELDELTA;
            break;
        case 65529:
            c = new EXP_PLASCORE;
            break;
        case 131065:
            c = new EXP_PLALIVES;
            break;
        case 196601:
            c = new EXP_GETINPUT;
            break;
        case 262137:
            c = new EXP_GETINPUTKEY;
            break;
        case 327673:
            c = new EXP_GETPLAYERNAME;
            break;
        case 65531:
            c = new EXP_CRENUMBERALL;
            break;
        case 5242883:
            c = new EXP_STRNUMBER;
            break;
        case 5308419:
            c = new EXP_STRGETCURRENT;
            break;
        case 5373955:
            c = new EXP_STRGETNUMBER;
            break;
        case 5439491:
            c = new EXP_STRGETNUMERIC;
            break;
        case 5505027:
            c = new EXP_STRGETNPARA;
            break;
        case 5242882:
            c = new EXP_GETRGBAT;
            break;
        case 5308418:
            c = new EXP_GETSCALEX;
            break;
        case 5373954:
            c = new EXP_GETSCALEY;
            break;
        case 5439490:
            c =
                new EXP_GETANGLE;
            break;
        case 5242887:
            c = new Uc;
            break;
        case 5308423:
            c = new EXP_CGETMIN;
            break;
        case 5373959:
            c = new EXP_CGETMAX;
            break;
        case 5439495:
            c = new EXP_CGETCOLOR1;
            break;
        case 5505031:
            c = new EXP_CGETCOLOR2;
            break;
        case 5242889:
            c = new EXP_CCAGETFRAMENUMBER;
            break;
        case 5308425:
            c = new EXP_CCAGETGLOBALVALUE;
            break;
        case 5373961:
            c = new EXP_CCAGETGLOBALSTRING;
            break;
        default:
            switch (d & 4294901760) {
                case 65536:
                    c = new Vc;
                    break;
                case 131072:
                    c = new EXP_EXTISPR;
                    break;
                case 196608:
                    c = new EXP_EXTSPEED;
                    break;
                case 262144:
                    c = new EXP_EXTACC;
                    break;
                case 327680:
                    c = new EXP_EXTDEC;
                    break;
                case 393216:
                    c = new EXP_EXTDIR;
                    break;
                case 458752:
                    c = new EXP_EXTXLEFT;
                    break;
                case 524288:
                    c = new EXP_EXTXRIGHT;
                    break;
                case 589824:
                    c = new EXP_EXTYTOP;
                    break;
                case 655360:
                    c = new EXP_EXTYBOTTOM;
                    break;
                case 720896:
                    c = new Wc;
                    break;
                case 786432:
                    c = new EXP_EXTIDENTIFIER;
                    break;
                case 851968:
                    c = new EXP_EXTFLAG;
                    break;
                case 917504:
                    c = new EXP_EXTNANI;
                    break;
                case 983040:
                    c = new EXP_EXTNOBJECTS;
                    break;
                case 1048576:
                    c = new Dc;
                    break;
                case 1114112:
                    c = new EXP_EXTGETSEMITRANSPARENCY;
                    break;
                case 1179648:
                    c =
                        new EXP_EXTNMOVE;
                    break;
                case 1245184:
                    c = new Ec;
                    break;
                case 1310720:
                    c = new EXP_EXTGETFONTNAME;
                    break;
                case 1376256:
                    c = new EXP_EXTGETFONTSIZE;
                    break;
                case 1441792:
                    c = new EXP_EXTGETFONTCOLOR;
                    break;
                case 1507328:
                    c = new EXP_EXTGETLAYER;
                    break;
                case 1572864:
                    c = new EXP_EXTGETGRAVITY;
                    break;
                case 1638400:
                    c = new EXP_EXTXAP;
                    break;
                case 1703936:
                    c = new EXP_EXTYAP;
                    break;
                case 1769472:
                    c = new EXP_EXTALPHACOEF;
                    break;
                case 1835008:
                    c = new EXP_EXTRGBCOEF;
                    break;
                case 1900544:
                    c = new xa;
                    break;
                case 1966080:
                    c = new Ic;
                    break;
                case 2031616:
                    c = new Jc;
                    break;
                case 2097152:
                    c = new EXP_EXTDISTANCE;
                    break;
                case 2162688:
                    c = new EXP_EXTANGLE;
                    break;
                case 2228224:
                    c = new EXP_EXTLOOPINDEX;
                    break;
                case 2293760:
                    c = new EXP_EXTGETFRICTION;
                    break;
                case 2359296:
                    c = new EXP_EXTGETRESTITUTION;
                    break;
                case 2424832:
                    c = new EXP_EXTGETDENSITY;
                    break;
                case 2490368:
                    c = new EXP_EXTGETVELOCITY;
                    break;
                case 2555904:
                    c = new EXP_EXTGETANGLE;
                    break;
                case 2621440:
                    c = new EXP_EXTWIDTH;
                    break;
                case 2686976:
                    c = new EXP_EXTHEIGHT;
                    break;
                case 2752512:
                    c = new EXP_EXTGETMASS;
                    break;
                case 2818048:
                    c = new EXP_EXTGETANGULARVELOCITY;
                    break;
                case 2883584:
                    c = new EXP_EXTGETNAME;
                    break;
                default:
                    c = new ae
            }
    }
    if (null != c && (c.code = d, 0 != d)) {
        var e = a.v(),
            f;
        switch (d) {
            case 262143:
                c.Tb = a.ub();
                break;
            case 65535:
                c.value = a.w();
                break;
            case 1572863:
                c.value = a.oL();
                break;
            case 1638399:
                a.ma(4);
                c.Uh = a.v();
                break;
            case 3342335:
                a.ma(4);
                c.Uh = a.v();
                break;
            default:
                if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == q.Xy) switch (c.Zh = a.Z(), c.Mb = a.Z(), d & 4294901760) {
                    case 1048576:
                        c.Uh = a.v();
                        break;
                    case 1245184:
                        c.Uh = a.v()
                }
        }
        a.seek(b + e)
    }
    return c
};
db.prototype = {
    evaluate: function(a) {
        a.va[a.fa] =
            ""
    }
};
xa.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = 0
    }
};
eb.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = this.value
    }
};
Cc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = this.value;
        a.Jh = !0
    }
};
Dc.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        null == b ? a.va[a.fa] = 0 : (b = null != b.N ? b.N.lr(this.Uh) : 0, n.Lv(b) || (a.Jh = !0), a.va[a.fa] = b)
    }
};
Ec.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        a.va[a.fa] = null == b ? "" : b.N.vB(this.Uh)
    }
};
Fc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = a.h.jB(this.Uh)
    }
};
Gc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] =
            a.h.kB(this.Uh)
    }
};
Hc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = this.Tb
    }
};
Ic.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        a.yd++;
        var c = a.vv();
        null != b && null != b.N && 0 <= c && c < b.N.Va.length ? (b = b.N.lr(c), n.Lv(b) || (a.Jh = !0), a.va[a.fa] = b) : a.va[a.fa] = 0
    }
};
Jc.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        a.yd++;
        var c = a.vv();
        a.va[a.fa] = null != b && null != b.N && 0 <= c && c < Ea.hz ? b.N.vB(c) : ""
    }
};
Kc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] += a.va[a.fa + 1]
    }
};
Lc.prototype = {
    evaluate: function(a) {
        a.An ? (a.yd++,
            a.nl[a.yd].evaluate(a), a.va[a.fa] = -a.va[a.fa]) : a.va[a.fa] -= a.va[a.fa + 1]
    }
};
Mc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] *= a.va[a.fa + 1]
    }
};
Nc.prototype = {
    evaluate: function(a) {
        var b = a.va[a.fa],
            c = a.va[a.fa + 1];
        a.va[a.fa] = 0 != c ? 0 == a.Jh ? n.Gd(b / c) : a.va[a.fa] / a.va[a.fa + 1] : 0
    }
};
Oc.prototype = {
    evaluate: function(a) {
        a.yd++;
        var b = a.vv();
        a.va[a.fa] = a.random(b)
    }
};
Pc.prototype = {
    evaluate: function(a) {
        a.yd++;
        var b = a.getExpression();
        a.va[a.fa] = b.toString()
    }
};
Qc.prototype = {
    evaluate: function(a) {
        a.yd++;
        a.va[a.fa] = a.getExpression()
    }
};
Rc.prototype = {
    evaluate: function() {}
};
Sc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = a.Yi()
    }
};
Tc.prototype = {
    evaluate: function(a) {
        a.va[a.fa] = a.Zi()
    }
};
Uc.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        null == b ? a.va[a.fa] = 0 : (a.va[a.fa] = b.sa, b.Pi && (a.Jh = !0))
    }
};
Vc.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        a.va[a.fa] = null == b ? 0 : b.m
    }
};
Wc.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        a.va[a.fa] = null == b ? 0 : b.o
    }
};
oa.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 291.2";
l.dg = 4;
l.dQ =
    770;
l.pn = 8;
l.wO = 2;
l.XF = 4;
l.xO = 8;
l.Cy = 16;
l.vO = 128;
l.uO = 256;
l.tO = 512;
l.WF = 1024;
l.sO = 2048;
l.UF = 1;
l.SF = 4;
l.TF = 8;
l.pO = 64;
l.nO = 128;
l.mO = 512;
l.oO = 1024;
l.VF = 4096;
l.rO = 4096;
l.qO = 8192;
l.cQ = 1;
l.wq = 0;
l.Pl = 1;
l.ku = 2;
l.Nl = 3;
l.vq = 4;
l.uq = 5;
l.Ol = 6;
l.gQ = 7;
l.Ky = 203;
l.uQ = 37;
l.GQ = 39;
l.JQ = 38;
l.rQ = 40;
l.dd = 200;
l.zq = 201;
l.hg = 202;
l.wQ = 96;
l.xQ = 97;
l.yQ = 98;
l.zQ = 99;
l.AQ = 100;
l.BQ = 101;
l.CQ = 102;
l.DQ = 103;
l.EQ = 104;
l.FQ = 105;
l.HQ = 83;
l.qQ = 68;
l.sQ = 69;
l.KQ = 88;
l.tQ = 123;
l.IQ = 16;
l.pQ = 17;
l.vQ = 18;
l.JN = 0;
l.EN = 1;
l.FN = 2;
l.GN = 3;
l.HN = 4;
l.IN = 5;
l.gy =
    4;
l.fN = 128;
l.zE = 1;
l.by = 4;
l.RM = 65536;
l.pt = 32768;
l.CE = 1048576;
l.BE = 8388608;
l.xi = 16777216;
l.AE = 33554432;
l.yE = 67108864;
l.ld = 10;
l.zy = 592880741;
l.jk = 1770410840;
l.MG = 300;
oa.loadApplication = fb;
oa.loadInfo = Xc;
l.prototype = {
    yK: function() {
        var a = this.no.w();
        0 > this.xr && (this.xr = a);
        a != this.xr && (this.no.TD(!0), a = this.no.ub(), window.open(this.wr + a, "_self"));
        this.mo = 25
    },
    load: function() {
        this.OK = this.file.v();
        this.Uq = 1;
        this.Ir = new Y;
        var a = this.file.w();
        this.Ir.getFile(this.path.substring(0, this.path.length - 1) + this.Uq.toString(),
            fb, a)
    },
    tK: function() {
        this.Uq++;
        if (this.Uq > this.OK) {
            var a = (new t(this.Ir.pd, "content")).file("Application.ccj").tz();
            this.Ir = null;
            this.file = new Y;
            this.file.UL(a);
            this.digest();
            this.Rx()
        } else a = this.file.w(), this.Ir.getFile(this.path.substring(0, this.path.length - 1) + this.Uq.toString(), fb, a)
    },
    digest: function() {
        this.file.seek(0);
        var a = this.file.qD(4);
        this.od = !1;
        80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.od = !0);
        this.file.TD(this.od);
        this.file.ma(8);
        this.file.ma(4);
        this.Wc = new jd;
        this.ba = new ed(this);
        this.Ub = new fd(this);
        this.Xg = new gd(this);
        this.pc = new Z(this);
        for (var b, c = 0; 32639 != c;)
            if (c = this.file.v(), this.file.v(), b = this.file.w(), 0 != b) {
                a = this.file.S + b;
                switch (c) {
                    case 8739:
                        this.sK();
                        this.lv = Array(this.Ff);
                        this.$A = Array(this.Ff);
                        this.ZA = Array(this.Ff);
                        this.mv = Array(this.Ff);
                        for (b = 0; b < this.Ff; b++) this.mv[b] = null;
                        break;
                    case 8773:
                        this.Ma = this.file.w();
                        this.file.w();
                        this.file.w();
                        this.file.v();
                        this.file.v();
                        break;
                    case 8740:
                        this.appName = this.file.ub();
                        break;
                    case 8774:
                        this.file.w();
                        break;
                    case 8750:
                        this.file.ub();
                        break;
                    case 8782:
                        this.iw = this.file.ub();
                        break;
                    case 8754:
                        this.xK();
                        break;
                    case 8755:
                        this.wK();
                        break;
                    case 8745:
                    case 8767:
                        this.br = new Ra(this);
                        this.br.FI(this.file);
                        this.Wc.di(this.file);
                        break;
                    case 8747:
                        this.uK(b);
                        break;
                    case 8778:
                        this.Uo = this.file.w();
                        this.cD = this.file.w();
                        this.dD = this.file.w();
                        this.fD = this.file.w();
                        this.gD = this.file.w();
                        this.eD = this.file.Pc();
                        this.al = this.file.w(); - 1 != this.al && (this.file.eM(4), this.al = this.file.Pc());
                        this.os = this.file.w();
                        this.dw = !0;
                        break;
                    case 13107:
                        this.lv[this.cm] =
                            this.file.S;
                        for (var d = 0; 32639 != d;)
                            if (d = this.file.v(), this.file.v(), b = this.file.w(), 0 != b) {
                                var e = this.file.S + b;
                                switch (d) {
                                    case 13108:
                                        0 == this.cm && (this.file.ma(8), this.file.Pc());
                                        break;
                                    case 13110:
                                        this.mv[this.cm] = this.file.ub();
                                        break;
                                    case 13129:
                                        this.$A[this.cm] = this.file.w();
                                        this.ZA[this.cm] = this.file.w();
                                        break;
                                    case 13128:
                                        var f = b / 6;
                                        for (b = 0; b < f; b++) {
                                            var g = this.file.v();
                                            this.file.ma(4);
                                            0 != g && (this.Lb[g] = 1, this.de = Math.max(this.de, g + 1))
                                        }
                                }
                                this.file.seek(e)
                            } this.cm++;
                        break;
                    case 8760:
                        d = this.file.w();
                        this.zk =
                            Array(d);
                        for (b = 0; b < d; b++) this.zk[b] = new Yc(this), this.zk[b].di();
                        break;
                    case 26214:
                        this.ba.di(this.file);
                        break;
                    case 26215:
                        this.Ub.di(this.file);
                        break;
                    case 26216:
                        this.Xg.di(this.file)
                }
                this.file.seek(a)
            } this.context = new Da(this.canvas);
        this.pc.aM(0 != (this.$n & l.WF));
        null == this.Da && (this.ue = new Ca)
    },
    MD: function(a, b, c, d, e, f) {
        this.Da = a;
        this.Yk = c;
        this.ue = d;
        this.Sx = b;
        this.Yw = e;
        this.Xw = f
    },
    UJ: function() {
        this.ig = !1;
        this.GD = 0;
        this.ML = this.NL = 1;
        this.PL = this.OL = this.oa / 2;
        this.RL = this.QL = this.wa / 2
    },
    Xs: function() {
        window.setTimeout(Xa.bind(this),
            20)
    },
    Rx: function() {
        (this.lo = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.Xg.Hb && (this.Se = new Ua(this), this.Se.CK());
        this.Im();
        this.nc = Array(l.Ky);
        var a;
        for (a = 0; a < l.Ky; a++) this.nc[a] = !1;
        this.canvas.Xc = this;
        if (null == this.Da) {
            var b = this;
            window.addEventListener("keypress", function(a) {
                b.XI(a)
            }, !1);
            window.addEventListener("keydown", function(a) {
                b.xA(a)
            }, !1);
            window.addEventListener("keyup", function(a) {
                b.yA(a)
            }, !1);
            window.addEventListener("blur",
                function() {
                    b.hasFocus = !1
                }, !1);
            window.addEventListener("focus", function() {
                b.hasFocus = !0
            }, !1);
            if (window !== window.top) try {
                var c = window.top;
                c.addEventListener("focus", function() {
                    b.hasFocus = !0;
                    b.canvas.focus()
                });
                c.addEventListener("blur", function() {
                    b.hasFocus = !1
                })
            } catch (d) {}
            window.addEventListener("resize", function() {
                b.Im()
            }, !1);
            document.addEventListener("blur", function() {
                b.hasFocus = !1
            }, !1);
            document.addEventListener("focus", function() {
                b.hasFocus = !0
            }, !1);
            document.addEventListener("fullscreenchange", function() {
                b.fullScreen =
                    document.rR;
                b.Im()
            }, !1);
            document.addEventListener("mozfullscreenchange", function() {
                b.fullScreen = document.mozFullScreen;
                b.Im()
            }, !1);
            document.addEventListener("webkitfullscreenchange", function() {
                b.fullScreen = document.webkitIsFullScreen;
                b.Im()
            }, !1);
            window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (this.canvas.setAttribute("style", "-ms-touch-action: none;"), this.canvas.setAttribute("style", "touch-action: none;")), this.canvas.addEventListener("pointerdown", function(a) {
                switch (a.pointerType) {
                    case "mouse":
                    case "pen":
                        b.sw(a,
                            !0);
                        break;
                    case "touch":
                        b.dt(a, !0)
                }
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("pointermove", function(a) {
                switch (a.pointerType) {
                    case "mouse":
                    case "pen":
                        b.yo(a, b.canvas);
                        break;
                    case "touch":
                        b.ct(a, !0)
                }
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("pointerup", function(a) {
                switch (a.pointerType) {
                    case "mouse":
                    case "pen":
                        b.tw(a);
                        break;
                    case "touch":
                        b.wl(a, !0)
                }
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("pointercancel", function(a) {
                switch (a.pointerType) {
                    case "touch":
                        b.wl(a,
                            !0)
                }
                a.preventDefault && a.preventDefault()
            }, !1)) : (this.canvas.addEventListener("mousemove", function(a) {
                b.yo(a, b.canvas);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("mousedown", function(a) {
                b.sw(a, !1);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("mouseup", function(a) {
                b.tw(a);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("mouseout", function(a) {
                b.nC(a);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("click",
                function(a) {
                    b.click(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("dblclick", function(a) {
                b.oA(a);
                a.preventDefault && a.preventDefault()
            }, !1));
            this.canvas.addEventListener("contextmenu", function(a) {
                a.preventDefault && a.preventDefault()
            }, !1);
            a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
            document.attachEvent ? document.attachEvent("on" + a, function(a) {
                b.oC(a)
            }) : document.addEventListener && document.addEventListener(a, function(a) {
                b.oC(a)
            }, !1);
            document.onselectstart =
                function() {
                    return !1
                };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Pj = this.eK();
            this.rf = new O;
            this.sf = Array(l.ld);
            this.Ri = Array(l.ld);
            this.bn = Array(l.ld);
            this.$g = Array(l.ld);
            this.ah = Array(l.ld);
            for (a = 0; a < l.ld; a++) this.sf[a] = l.jk, this.$g[a] = 0, this.ah[a] = 0, this.Ri[a] = !1, this.bn[a] = 0;
            this.Pj && !window.PointerEvent && (this.canvas.addEventListener("touchstart", function(a) {
                b.dt(a, !1);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("touchmove",
                function(a) {
                    b.ct(a, !1);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchend", function(a) {
                b.wl(a, !1);
                a.preventDefault && a.preventDefault()
            }, !1), this.canvas.addEventListener("touchcancel", function(a) {
                b.wl(a, !1);
                a.preventDefault && a.preventDefault()
            }, !1));
            window.focus();
            this.Xs()
        } else
            for (this.Pj = this.Da.Pj, this.rf = new O, this.sf = Array(l.ld), this.Ri = Array(l.ld), this.bn = Array(l.ld), this.$g = Array(l.ld), this.ah = Array(l.ld), a = 0; a < l.ld; a++) this.sf[a] = l.jk, this.$g[a] = 0, this.ah[a] =
                0, this.Ri[a] = !1, this.bn[a] = 0;
        this.ab = this.Tj = this.Rj = 0;
        this.Ee = -2;
        this.I = new h(this)
    },
    Im: function() {
        var a = this.oa,
            b = this.wa,
            c, d;
        this.fullScreen || this.$n & l.Cy ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
        c /= a;
        d /= b;
        if (this.Ma & l.zE || this.$n & l.Cy && this.$n & l.XF) c = d = Math.min(c, d);
        if (c != this.ic || d != this.jc) this.ic = c, this.jc = d, this.canvas.width = Math.floor(this.ic * a), this.canvas.height = Math.floor(this.jc * b), this.context.QD(this.ic,
            this.jc);
        this.I && this.I.Oi()
    },
    eK: function() {
        var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
            b = navigator.userAgent,
            c;
        for (c in a)
            if (0 <= b.indexOf(a[c])) return !0;
        return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1
    },
    Vi: function(a) {
        this.Wq.rD(a);
        this.Kh++
    },
    yn: function(a) {
        this.In.add(a);
        this.Lh++;
        this.yg = !0
    },
    wp: function() {
        this.wr && (this.mo--, 0 > this.mo && (this.mo = 1E9, this.no = new Y, this.no.getFile(this.wr + "info.dat", Xc)));
        this.jd = (new Date).getTime();
        if (this.fL(!1)) {
            if (this.yg) {
                if (null == this.ei) {
                    var a = this.pg;
                    this.dw ? (this.ei = 0 == this.Uo ? new Zc(this) : new ad(this), 0 == this.Uo && -1 != this.al && (a = this.al)) : this.ei = new $c(this);
                    this.hD = !1;
                    this.xx = !0;
                    null == this.Da && (this.frame.Cr ? this.context.Mq(0, 0, this.canvas.width, this.canvas.height) : this.context.Ac(0, 0, this.oa, this.wa, a), this.Xs());
                    return
                }
                if (null != this.ei && 0 == this.hD) {
                    this.hD = this.ei.load();
                    null == this.Da && this.Xs();
                    return
                }
                for (; 0 < this.In.size() && this.Wq.size() < this.MI;) a = this.In.get(0), this.Wq.add(a),
                    this.In.bp(0), a.Yu();
                this.pc.OI();
                a = !1;
                0 == this.In.size() && 0 == this.Wq.size() && (a = !0);
                null == this.ei || 0 == (this.Ma & l.xi) && 0 == (this.frame.jo & E.oG) || (this.xx || (this.ei.reset(), this.xx = !0), this.ei.step(), a = this.ei.Kv());
                a && (this.xx = !1, this.I.resume(), this.I.Eh(), this.yg = !1, this.ba.pf(), this.Xg.pf(), this.Ub.pf(), this.Kh = this.Lh = 0, this.Cu && (this.Cu = !1, 0 != this.I.Zu() ? this.ab = l.uq : (this.ab = l.Nl, this.gE(this.Xf), this.Xf = null)));
                null == this.Da && this.Xs()
            } else null == this.Da && (null == this.kd ? (this.context.Bs(0 != (this.Ma &
                l.by)), this.ps ? this.context.Cj(this.ps, 0, 0, this.oa, this.wa, 0, 0) : this.frame.Cr ? this.context.Mq(0, 0, this.oa, this.wa) : this.context.Ac(0, 0, this.oa, this.wa, this.pg), a = this.context.Oa, this.ig && (bRestore = !0, a.save(), a.translate(this.OL, this.QL), 0 != this.GD && a.rotate(.0174532925 * -this.GD), a.scale(Math.max(.001, this.ML), Math.max(.001, this.NL)), a.translate(-this.PL, -this.RL)), this.ue.Eb(this.context, 0, 0), this.ig && a.restore(), this.Oh && this.ya.Eb(this.context), this.$x && (this.$x--, this.jt || (a = new za, a.Sq(), a.Gb =
                16, this.jt = new ka(this, this.oa, 30), this.jt.WB(16711680), this.jt.Tr(window.FusionVersion, n.Zj | n.zi, null, 16777215, a, 1, 10526880)), this.jt.Eb(this.context, 0, 0, 0, 0))) : (this.context.Bs(), this.context.Cj(this.kd, 0, 0, this.oa, this.wa, 0, 0)), 0 != (this.ao & l.VF) && window.requestAnimationFrame ? window.requestAnimationFrame(Xa) : (a = (new Date).getTime() - this.jd, a = Math.max(1E3 / this.cB - a, 1), window.setTimeout(Xa, a)));
            return !0
        }
        this.MA();
        return !1
    },
    zA: function(a, b, c, d) {
        this.yg || (this.context.Bs(0 != (this.Ma & l.by)), null == this.kd ?
            (d || this.context.Ac(b, c, this.Yw, this.Xw, this.pg), this.context.clip(b, c, this.Yw, this.Xw), this.ue.Eb(this.context, 0, 0), this.context.sM()) : (this.context.Bs(), this.context.Cj(this.kd, b, c, this.oa, this.wa, 0, 0)))
    },
    lI: function() {
        0 == (this.Ma & l.CE) && (this.hasFocus ? this.Du && (this.I.resume(), this.Du = !1) : (this.I.pause(this.ao & l.TF), this.Du = !0))
    },
    fL: function(a) {
        this.lI();
        var b = !0,
            c = !0;
        do switch (this.ab) {
            case l.wq:
                if (this.SJ(), this.Ib = this.Sx, this.ab = 1, this.hK(), a) {
                    b = !1;
                    break
                }
            case l.Pl:
                this.jM();
                break;
            case l.ku:
                0 ==
                    this.DK() ? (this.aJ(), this.ab != l.Ol && this.ab != l.wq || this.On()) : b = !1;
                break;
            case l.Nl:
                this.I.Zu();
                0 != this.I.Cb ? this.hM() ? this.ab = l.vq : this.On() : b = !1;
                break;
            case l.vq:
                0 == this.EK() ? (this.NA(), this.ab != l.Ol && this.ab != l.wq || this.On()) : b = !1;
                break;
            case l.uq:
                this.On();
                break;
            default:
                b = !1
        }
        while (1 == b);
        this.ab == l.Ol && (c = !1);
        return c
    },
    MA: function() {
        null != this.pc && this.pc.Zs()
    },
    jM: function() {
        this.Ib != this.Ee && (this.frame = new E(this), this.frame.vK(this.Ib));
        this.pg = this.frame.MB;
        this.Ee = this.Ib;
        this.frame.ej = this.frame.fj =
            0;
        this.frame.Tv = this.frame.Uv = 0;
        this.frame.ED = !1;
        this.UJ();
        var a;
        null != this.Da ? this.Zf = this.Yf = 0 : (this.Yf = this.oa / 2 - this.frame.qo / 2, this.Zf = this.wa / 2 - this.frame.po / 2);
        for (a = 0; a < this.frame.Nc; a++) this.frame.tb[a].GI(this.Yf, this.Zf);
        this.frame.Wb & E.BG && (document.title = this.frame.aB);
        this.ps = null;
        this.frame.Wb & E.CG && (this.ps = this.Xf);
        this.frame.Wb & E.DG && (this.frame.Cr = !0);
        this.I.WL(this.frame);
        this.I.TJ(null != this.frame.Tn);
        this.ab = l.Nl;
        null != this.frame.Tn ? this.yg ? this.Cu = !0 : 0 != this.I.Zu() ? this.ab =
            l.uq : (this.ab = l.Nl, this.gE(this.Xf), this.Xf = null) : this.Xf = null;
        this.yg ? this.I.pause(!0) : this.I.Eh()
    },
    wD: function() {
        null != this.Da ? this.Zf = this.Yf = 0 : (this.Yf = this.oa / 2 - this.frame.qo / 2, this.Zf = this.wa / 2 - this.frame.po / 2);
        var a;
        for (a = 0; a < this.frame.Nc; a++) this.frame.tb[a].HL(this.Yf, this.Zf)
    },
    On: function() {
        var a;
        a = this.I.iK(!1);
        if (0 != (this.ao & l.SF)) this.ab = l.Ol;
        else switch (n.IG(a)) {
            case 1:
                this.Ib = this.Ee + 1;
                1 == this.Uo && this.Ib == this.os && this.Ib++;
                this.ab = l.Pl;
                this.Ib >= this.Ff && (this.ab = l.Ol);
                break;
            case 2:
                this.Ib =
                    Math.max(0, this.Ee - 1);
                1 == this.Uo && this.Ib == this.os && (0 == this.Ib ? this.Ib = this.Ee : this.Ib--);
                this.ab = l.Pl;
                break;
            case 3:
                this.ab = l.Pl;
                0 != (n.Tp(a) & 32768) ? (this.Ib = n.Tp(a) & 32767, this.Ib >= this.Ff && (this.Ib = this.Ff - 1), 0 > this.Ib && (this.Ib = 0)) : n.Tp(a) < this.Xn ? (this.Ib = this.Wn[n.Tp(a)], -1 == this.Ib && (this.Ib = this.Ee + 1)) : this.Ib = this.Ee + 1;
                break;
            case 4:
                this.ab = l.wq;
                this.Ib = this.Sx;
                break;
            default:
                this.ab = l.Ol
        }
        this.ab == l.Pl && (0 > this.Ib || this.Ib >= this.Ff) && (this.ab = this.Ee);
        if (this.ab != l.Pl || this.Ib != this.Ee) {
            for (a =
                0; a < this.frame.Nc; a++) this.frame.tb[a].qA();
            this.frame = null;
            this.Ee = -1
        }
    },
    sv: function() {
        null == this.Wx && (this.Wx = new Bd(this));
        return this.Wx
    },
    gE: function(a) {
        var b, c, d = this.frame.Tn;
        if (null != d) {
            b = document.createElement("canvas");
            b.width = this.oa;
            b.height = this.wa;
            c = document.createElement("canvas");
            c.width = this.oa;
            c.height = this.wa;
            var e = new Da(c);
            e.Ac(0, 0, this.oa, this.wa, this.pg);
            this.ue.Eb(e, 0, 0);
            e = new Da(b);
            0 != (d.Ap & ua.xq) ? e.Ac(0, 0, this.oa, this.wa, d.zp) : (e.Ac(0, 0, this.oa, this.wa, this.bB), null != a && e.Cj(a,
                0, 0, a.width, a.height, 0, 0));
            this.kd = document.createElement("canvas");
            this.kd.width = this.oa;
            this.kd.height = this.wa;
            this.kd.getContext("2d").drawImage(b, 0, 0);
            this.transition = this.sv().Wl(d, this.kd, b, c);
            if (null != this.transition) return this.ab = l.ku, !0
        }
        this.kd = null;
        this.ab = l.Nl;
        this.I.eA();
        return !1
    },
    DK: function() {
        if (null != this.transition) {
            if (this.transition.yr()) return !1;
            this.transition.Sb(v.mu);
            return !0
        }
        return !1
    },
    aJ: function() {
        null != this.transition && (this.transition.end(), this.kd = this.transition = null,
            this.ab == l.ku && (this.ab = l.Nl), this.I.eA());
        return !0
    },
    hM: function() {
        var a, b, c = this.frame.fv;
        if (null != c) {
            a = document.createElement("canvas");
            a.width = this.oa;
            a.height = this.wa;
            b = document.createElement("canvas");
            b.width = this.oa;
            b.height = this.wa;
            var d = new Da(a);
            d.Ac(0, 0, this.oa, this.wa, this.pg);
            this.ue.Eb(d, 0, 0);
            d = new Da(b);
            0 != (c.Ap & ua.xq) ? d.Ac(0, 0, this.oa, this.wa, c.zp) : d.Ac(0, 0, this.oa, this.wa, 0);
            this.kd = document.createElement("canvas");
            this.kd.width = this.oa;
            this.kd.height = this.wa;
            this.kd.getContext("2d").drawImage(a,
                0, 0);
            this.transition = this.sv().Wl(c, this.kd, a, b);
            if (null != this.transition) return this.ab = l.vq, !0
        }
        this.kd = null;
        return !1
    },
    EK: function() {
        if (null != this.transition) {
            if (this.transition.yr()) return this.NA(), !1;
            this.transition.Sb(v.yq)
        }
        return !0
    },
    NA: function() {
        null != this.transition && (this.Xf = this.transition.u, this.transition.end(), this.kd = this.transition = null, this.ab == l.vq && (this.ab = l.uq));
        return !0
    },
    sK: function() {
        this.file.ma(4);
        this.$n = this.file.v();
        this.ao = this.file.v();
        this.file.v();
        this.file.v();
        this.oa =
            this.file.v();
        this.wa = this.file.v();
        this.eB = this.file.w();
        this.dB = this.file.w();
        var a, b;
        this.$C = Array(l.dg);
        for (a = 0; a < l.dg; a++) this.$C[a] = this.file.v();
        this.Zw = Array(l.dg * l.pn);
        for (a = 0; a < l.dg; a++)
            for (b = 0; b < l.pn; b++) this.Zw[a * l.pn + b] = this.file.v();
        this.bB = this.file.Pc();
        this.Ff = this.file.w();
        this.cB = this.file.w();
        this.file.ma(1);
        this.file.ma(3)
    },
    xK: function() {
        this.qm = this.file.v();
        this.xv = Array(this.qm);
        this.zB = Array(this.qm);
        var a;
        for (a = 0; a < this.qm; a++) this.xv[a] = this.file.w();
        this.file.tL(this.zB)
    },
    wK: function() {
        this.Eo = this.file.w();
        this.wv = Array(this.Eo);
        var a;
        for (a = 0; a < this.Eo; a++) this.wv[a] = this.file.ub()
    },
    uK: function(a) {
        this.Xn = a / 2;
        this.Wn = Array(this.Xn);
        for (a = 0; a < this.Xn; a++) this.Wn[a] = this.file.v()
    },
    mG: function(a) {
        return null == this.Wn || -1 == a || a >= this.Xn ? -1 : this.Wn[a]
    },
    pv: function(a) {
        if (this.yv) {
            var b;
            for (b = 0; b < this.yv.size(); b++)
                if (gFont = this.yv.get(b), gFont.sI(a)) return gFont
        }
        return a
    },
    hK: function() {
        this.Ji = null
    },
    SJ: function() {
        var a;
        if (null == this.Da || null != this.Da && 0 == (this.Yk & K.TE))
            for (this.ro =
                Array(l.dg), a = 0; a < l.dg; a++) this.ro[a] = this.dB ^ 4294967295;
        else this.ro = null;
        if (null == this.Da || null != this.Da && 0 == (this.Yk & K.VE))
            for (this.pp = Array(l.dg), a = 0; a < l.dg; a++) this.pp[a] = this.eB ^ 4294967295;
        else this.pp = null;
        this.aD = Array(l.dg);
        for (a = 0; a < l.dg; a++) this.aD[a] = "";
        if (null == this.Da || null != this.Da && 0 == (this.Yk & K.my))
            for (this.Zn = Array(this.qm), a = 0; a < this.qm; a++) this.Zn[a] = this.xv[a];
        else this.Zn = null;
        if (null == this.Da || null != this.Da && 0 == (this.Yk & K.my))
            for (this.Yn = Array(this.Eo), a = 0; a < this.Eo; a++) this.Yn[a] =
                this.wv[a];
        else this.Yn = null
    },
    mB: function() {
        for (var a = this; null == a.ro;) a = this.Da;
        return a.ro
    },
    uB: function() {
        for (var a = this; null == a.pp;) a = this.Da;
        return a.pp
    },
    qJ: function() {
        for (var a = this; null != a.Da && 0 != (a.Yk & K.UE);) a = a.Da;
        return a.Zw
    },
    wJ: function() {
        for (var a = this; null == a.Zn;) a = a.Da;
        return a.Zn
    },
    vJ: function() {
        for (var a = this; null == a.Yn;) a = a.Da;
        return a.Yn
    },
    Pz: function(a) {
        var b = this.wJ();
        if (0 > a || 1E3 < a) return null;
        var c = b.length;
        if (a + 1 > c)
            for (; c < a + 1; c++) b.push(0);
        return b
    },
    kB: function(a) {
        var b = this.Pz(a);
        return null != b ? b[a] : 0
    },
    YL: function(a, b) {
        var c = this.Pz(a);
        null != c && (c[a] = b)
    },
    Oz: function(a) {
        var b = this.vJ();
        if (0 > a || 1E3 < a) return null;
        var c = b.length;
        if (a + 1 > c)
            for (; c < a + 1; c++) b.push("");
        return b
    },
    jB: function(a) {
        var b = this.Oz(a);
        return null != b ? b[a] : ""
    },
    XL: function(a, b) {
        var c = this.Oz(a);
        null != c && (c[a] = b)
    },
    XI: function(a) {
        a && (this.tE.charCodeAt(this.Cp) == a.charCode ? (this.Cp++, this.Cp == this.tE.length && (this.$x = 250, this.Cp = 0)) : this.Cp = 0)
    },
    xA: function(a) {
        if (a) {
            var b = a.keyCode;
            this.Lk = this.nc[b] = !0;
            null != this.I &&
                null != this.I.i && this.I.i.UK(b);
            for (b = 0; b < this.$a.length; b++) this.$a[b].xA(a)
        }
    },
    yA: function(a) {
        if (a) {
            this.nc[a.keyCode] = !1;
            var b;
            for (b = 0; b < this.$a.length; b++) this.$a[b].yA(a)
        }
    },
    rg: function(a) {
        return this.nc[a]
    },
    Vs: function(a, b) {
        this.Rj = a;
        this.Tj = b
    },
    yo: function(a, b, c) {
        a.pageX ? (this.Nf = a.pageX, this.Of = a.pageY) : a.clientY && (this.Nf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.Of = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
        for (var d = 0, e = 0, f = b; f &&
            "BODY" != f.tagName;) d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent;
        this.Nf -= e + this.Rj;
        this.Of -= d + this.Tj;
        this.Nf = Math.floor(this.Nf / this.ic);
        this.Of = Math.floor(this.Of / this.jc);
        null != this.I && null != this.I.i && this.I.i.XC();
        for (d = 0; d < this.$a.length; d++) this.$a[d].yo(a, b);
        this.Pj || 305419896 == c || this.ct(new Ta(a.pageX, a.pageY, this.canvas), !1)
    },
    nz: function(a) {
        if (a.which) switch (a.which) {
            case 2:
                return l.zq;
            case 3:
                return l.hg;
            default:
                return l.dd
        } else switch (a.button) {
            case 2:
                return l.hg;
            case 4:
                return l.zq;
            default:
                return l.dd
        }
    },
    tw: function(a) {
        var b = this.nz(a);
        this.yo(a, this.canvas, 305419896);
        this.nc[b] = !1;
        for (b = 0; b < this.$a.length; b++) this.$a[b].tw(a);
        this.Pj || this.wl(new Ta(a.pageX, a.pageY, this.canvas), !1)
    },
    sw: function(a, b) {
        var c = this.nz(a);
        this.yo(a, this.canvas, 305419896);
        this.Lk = !0;
        this.nc[c] = !0;
        this.cv();
        if (null != this.I && null != this.I.i)
            if (b) {
                var d = Date.now(),
                    e = null !== this.rw && this.mC == c && d - this.rw <= l.MG ? 2 : 1;
                this.mC = c;
                this.rw = d;
                this.I.i.Ro(c - l.dd, e)
            } else this.Iq.oo ? this.I.i.Ro(c - l.dd, 1) : this.I.i.Ro(c -
                l.dd, 0 == a.detail % 2 ? 2 : 1);
        for (c = 0; c < this.$a.length; c++) this.$a[c].sw(a, b);
        this.Pj || this.dt(new Ta(a.pageX, a.pageY, this.canvas), !1);
        window.focus()
    },
    Un: function(a) {
        this.nc[l.dd] = a;
        var b;
        for (b = 0; b < this.$a.length; b++) this.$a[b].Un(a)
    },
    nC: function(a) {
        this.nc[l.dd] = !1;
        this.nc[l.zq] = !1;
        this.nc[l.hg] = !1;
        var b;
        for (b = 0; b < this.$a.length; b++) this.$a[b].nC(a);
        this.Pj || this.wl(new Ta(a.pageX, a.pageY, this.canvas), !1)
    },
    click: function(a) {
        if (this.Iq.oo) {
            var b;
            for (b = 0; b < this.$a.length; b++) this.$a[b].click(a)
        }
    },
    oA: function(a) {
        if (this.Iq.oo) {
            null !=
                this.I && null != this.I.i && this.I.i.Ro(0, 2);
            var b;
            for (b = 0; b < this.$a.length; b++) this.$a[b].oA(a)
        }
    },
    oC: function(a) {
        this.rA = "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail;
        null != this.I && null != this.I.i && this.I.VK(this.rA)
    },
    cv: function() {
        this.Iq.HB && null != this.up && "suspended" == this.up.state && this.up.resume()
    },
    dt: function(a, b) {
        this.cv();
        !this.lo && this.Se && (this.Se.Zk(), this.Se = null);
        if (null != this.sf) {
            var c, d, e = b ? 1 : a.changedTouches.length;
            for (c = 0; c < e; c++) {
                var f;
                b ? (f = a, f.identifier = a.pointerId) : f =
                    a.changedTouches[c];
                for (d = 0; d < l.ld; d++)
                    if (this.sf[d] == l.jk) {
                        this.sf[d] = f.identifier;
                        this.Ri[d] = !1;
                        for (o = 0; o < this.rf.size(); o++)
                            if (this.rf.get(o).pM(f)) {
                                this.Ri[d] = !0;
                                this.bn[d] = o;
                                break
                            } if (!this.Ri[d] && (this.$g[d] = this.eo(f), this.ah[d] = this.fo(f), this.zo == l.jk && f.identifier != l.zy))
                            for (this.zo = d, this.Nf = this.$g[d], this.Of = this.ah[d], this.Lk = !0, this.nc[l.dd] = !0, null != this.I && null != this.I.i && this.I.i.Ro(0, 1), d = 0; d < this.$a.length; d++) this.$a[d].dt(a, b);
                        break
                    }
            }
        }
    },
    ct: function(a, b) {
        if (null != this.sf) {
            var c,
                d, e, f = b ? 1 : a.changedTouches.length;
            for (c = 0; c < f; c++) {
                var g;
                b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
                for (d = 0; d < l.ld; d++)
                    if (this.sf[d] == g.identifier) {
                        if (this.Ri[d]) this.rf.get(this.bn[d]).mE(g);
                        else {
                            for (e = 0; e < this.rf.size(); e++) this.rf.get(e).mE(g);
                            this.$g[d] = this.eo(g);
                            this.ah[d] = this.fo(g)
                        }
                        if (this.zo == d)
                            for (this.Nf = this.$g[d], this.Of = this.ah[d], null != this.I && null != this.I.i && this.I.i.XC(), d = 0; d < this.$a.length; d++) this.$a[d].ct(a, b);
                        break
                    }
            }
        }
    },
    wl: function(a, b) {
        this.lo && this.Se && (this.Se.Zk(),
            this.Se = null);
        if (null != this.sf) {
            var c, d, e, f = b ? 1 : a.changedTouches.length;
            for (c = 0; c < f; c++) {
                var g;
                b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
                for (d = 0; d < l.ld; d++)
                    if (this.sf[d] == g.identifier) {
                        this.sf[d] = l.jk;
                        if (this.Ri[d]) this.rf.get(this.bn[d]).kE(g);
                        else {
                            for (e = 0; e < this.rf.size(); e++) this.rf.get(e).kE(g);
                            this.$g[d] = this.eo(g);
                            this.ah[d] = this.fo(g)
                        }
                        if (d == this.zo)
                            for (this.Nf = this.$g[d], this.Of = this.ah[d], this.zo = l.jk, this.nc[l.dd] = !1, e = 0; e < this.$a.length; e++) this.$a[e].wl(a, b)
                    }
            }
        }
    },
    eo: function(a) {
        var b =
            a.pageX;
        for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
        return Math.floor((b - this.Rj) / this.ic)
    },
    fo: function(a) {
        var b = a.pageY;
        for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
        return Math.floor((b - this.Tj) / this.jc)
    },
    tJ: function(a) {
        if (null != this.zk) {
            var b;
            b = a.lastIndexOf("\\");
            0 > b && (b = a.lastIndexOf("/"));
            0 <= b && (a = a.substring(b + 1));
            for (b = 0; b < this.zk.length; b++)
                if (this.zk[b].path == a) return this.zk[b]
        }
        return null
    },
    Nx: function(a) {
        this.mA = a;
        this.canvas.style.cursor =
            0 <= this.mA ? this.cursor : "none"
    },
    hE: function(a, b) {
        null == this.ya && (this.ya = new r(this), this.ya.OB(), this.ya.reset(b), this.Oh = 1, 0 > this.rf.indexOf(this.ya) && this.rf.add(this.ya))
    },
    fM: function() {
        this.gM();
        this.Oh = 2
    },
    bJ: function() {
        null != this.ya && (1 == this.Oh && this.rf.rD(this.ya), this.ya = null);
        2 == this.Oh && this.ZI();
        this.Oh = 0
    },
    gM: function() {
        0 == this.xn && window.DeviceMotionEvent && (this.nu = this.UH.bind(this), window.addEventListener("devicemotion", this.nu));
        this.xn++
    },
    UH: function(a) {
        var b = a.acceleration.x / 9.780318,
            c = a.acceleration.y / 9.780318,
            d = a.accelerationIncludingGravity.x / 9.780318;
        a = a.accelerationIncludingGravity.y / 9.780318;
        this.kk = b;
        this.lk = c;
        this.yh = d;
        this.zh = a;
        switch (window.orientation) {
            case 0:
                this.kk = -b;
                this.lk = c;
                this.yh = -d;
                this.zh = a;
                break;
            case 90:
                this.kk = c;
                this.lk = b;
                this.yh = a;
                this.zh = d;
                break;
            case 180:
                this.kk = b;
                this.lk = -c;
                this.yh = d;
                this.zh = -a;
                break;
            case -90:
                this.kk = -c, this.lk = -b, this.yh = -a, this.zh = -d
        }
        this.lo && (this.kk = -this.kk, this.lk = -this.lk, this.yh = -this.yh, this.zh = -this.zh)
    },
    ZI: function() {
        this.xn--;
        0 >= this.xn && (window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.nu), this.xn = 0)
    },
    bo: function() {
        var a = 0; - .2 > this.yh && (a |= 4);
        .2 < this.yh && (a |= 8); - .2 > this.zh && (a |= 1);
        .2 < this.zh && (a |= 2);
        return a
    },
    av: function(a) {
        if (a.xl) {
            null == this.Se && (a.lE = 2);
            switch (a.lE) {
                case 0:
                    0 < a.Wf && (a.Wf -= 2, 0 > a.Wf && (a.Wf = 0, phase++));
                    break;
                case 2:
                    128 > a.Wf && (a.Wf += 4, 128 <= a.Wf && (a.Wf = 128, a.bt = !0))
            }
            this.context.Ac(a.he.left, a.he.top, a.he.right - a.he.left, a.he.bottom - a.he.top, this.pg, 0, 0);
            a.xl.Eb(this.context, a.he.left,
                a.he.top, w.tf, a.Wf);
            a.bt && (a.xl = null, a.he = null, a.an = null)
        } else if (a.bt = !0, null != this.Se && 0 != (this.Ma & l.AE)) {
            a.an = new za;
            a.an.Sq();
            a.an.Gb = 24;
            var b = a.an.Gb + 6;
            a.xl = new ka(this, 120, b);
            var c = a.xl.measureText(this.iw, a.an) + 64;
            a.xl.resize(c, b);
            a.xl.WB();
            a.xl.Tr(this.iw, n.zi | n.Zj, null, 16776960, a.an, 2, 0);
            a.he = new ba;
            a.he.left = this.oa / 2 - c / 2;
            a.he.top = this.wa / 2 - b / 2;
            a.he.right = a.he.left + c;
            a.he.bottom = a.he.top + b;
            a.Wf = 128;
            a.lE = 0;
            a.bt = !1;
            this.context.Ac(0, 0, this.oa, this.wa, this.pg, 0, 0)
        }
        return a.bt
    }
};
E.BG = 1;
E.GO =
    2;
E.CG = 4;
E.Hy = 32;
E.IO = 256;
E.HO = 2048;
E.Vc = 32768;
E.DG = 131072;
E.hn = 0;
E.ie = 1;
E.XE = 1;
E.YE = 2;
E.Sp = 6;
E.oG = 256;
E.rG = 1;
E.sG = 2;
E.tG = 4;
E.xG = 0;
E.yG = 1;
E.vG = 2;
E.wG = 3;
E.prototype = {
    vK: function(a) {
        this.app.file.seek(this.app.lv[a]);
        this.Rn = new R(this.app);
        this.zd = new id;
        this.Dr = new ba;
        a = 0;
        var b;
        for (this.Rr = -1; 32639 != a;)
            if (a = this.app.file.v(), this.app.file.v(), b = this.app.file.w(), 0 != b) {
                this.hL = this.app.file.S + b;
                switch (a) {
                    case 13108:
                        this.aw();
                        null != this.app.Da && 0 != (this.app.Yk & K.SE) ? (this.qo = this.app.JI, this.po = this.app.KI) :
                            (this.qo = Math.min(this.app.oa, this.rd), this.po = Math.min(this.app.wa, this.wc));
                        break;
                    case 13128:
                        var c = b / 6;
                        this.xo = Array(c);
                        this.td = Array(c);
                        this.ud = Array(c);
                        for (b = this.de = 0; b < c; b++) this.xo[b] = this.app.file.v(), this.de = Math.max(this.de, this.xo[b]), this.td[b] = this.app.file.v(), this.ud[b] = this.app.file.v();
                        this.de++;
                        break;
                    case 13130:
                        this.ya = this.app.file.v();
                        this.jo = this.app.file.v();
                        break;
                    case 13122:
                        this.Dr.load(this.app.file);
                        break;
                    case 13124:
                        this.Rr = this.app.file.v();
                        break;
                    case 13127:
                        this.RB = this.app.file.w();
                        break;
                    case 13109:
                        this.aB = this.app.file.ub();
                        break;
                    case 13115:
                        this.Tn = new ua;
                        this.Tn.load(this.app.file);
                        break;
                    case 13116:
                        this.fv = new ua;
                        this.fv.load(this.app.file);
                        break;
                    case 13121:
                        this.AK();
                        break;
                    case 13125:
                        this.zK();
                        break;
                    case 13112:
                        this.zd.load(this.app);
                        break;
                    case 13117:
                        this.Rn.load(this.app), this.Cg = this.Rn.Cg
                }
                this.app.file.seek(this.hL)
            } this.app.Wc.pf();
        for (b = 0; b < this.zd.Pf; b++) this.app.Wc.Mj(this.zd.lB(b).Kf);
        this.app.ba.pf();
        this.app.Xg.pf();
        this.app.Ub.pf();
        this.app.Wc.load(this.app.file);
        this.app.Wc.kc(this.app.ba, this.app.Ub);
        this.app.Ma & l.xi && (this.app.Ub.qp(), this.app.Xg.qp(), 0 == this.app.de && this.app.ba.qp());
        this.app.ba.load(this.app.file);
        this.app.Ub.load(this.app.file);
        this.Rn.dJ(this.app.Xg);
        this.app.Xg.load();
        this.app.Wc.GL();
        for (b = 0; b < this.zd.Pf; b++) a = this.zd.list[b], a.Fr >= q.Sd && this.app.Wc.bM(a.Kf)
    },
    AK: function() {
        this.Nc = this.app.file.w();
        this.tb = Array(this.Nc);
        var a;
        for (a = 0; a < this.Nc; a++) this.tb[a] = new X(this.app), this.tb[a].load(this.app.file)
    },
    zK: function() {
        var a;
        for (a =
            0; a < this.Nc; a++) this.tb[a].Yd = this.app.file.w(), this.tb[a].Zd = this.app.file.w(), this.app.file.ma(12)
    },
    aw: function() {
        this.rd = this.app.file.w();
        this.wc = this.app.file.w();
        this.MB = this.app.file.Pc();
        this.Wb = this.app.file.w()
    }
};
Z.cd = 32;
Z.prototype = {
    XH: function(a) {
        null == this.wk && (this.wk = new O);
        this.wk.add(a)
    },
    OI: function() {
        if (null != this.wk && 0 < this.wk.size() && !this.Wu) {
            var a = this.wk.get(0);
            this.wk.bp(0);
            this.Wu = !0;
            var b = this;
            b.context.decodeAudioData(a.response, function(c) {
                a.buffer = c;
                a.response = null;
                b.app.Vi(a);
                b.Wu = !1
            })
        }
    },
    reset: function() {
        var a;
        for (a = 0; a < Z.cd; a++) this.zn[a] = !1
    },
    play: function(a, b, c, d) {
        if (0 != this.xz) {
            var e = this.app.Xg.AJ(a);
            if (null != e) {
                0 == this.yu && (c = 0);
                if (0 > c) {
                    for (a = 0; a < Z.cd && (null != this.gb[a] || 0 != this.zn[a]); a++);
                    if (a == Z.cd)
                        for (a = 0; a < Z.cd && (0 != this.zn[a] || null == this.gb[a] || 0 != this.gb[a].Cn); a++);
                    c = a;
                    0 <= c && c < Z.cd && (this.fn[c] = this.jw)
                }
                if (!(0 > c || c >= Z.cd)) {
                    if (null != this.gb[c]) {
                        if (1 == this.gb[c].Cn) return;
                        this.gb[c] != e && (this.gb[c].stop(), this.gb[c] = null)
                    }
                    for (a = 0; a < Z.cd; a++) this.gb[a] == e && (this.gb[a].stop(),
                        this.gb[a] = null);
                    this.gb[c] = e;
                    e.play(b, d, this.fn[c])
                }
            }
        }
    },
    aM: function(a) {
        this.yu = a
    },
    gK: function() {
        var a;
        for (a = 0; a < Z.cd; a++) null != this.gb[a] && this.gb[a].cK() && this.app.Xg.Mj(this.gb[a].handle)
    },
    Zs: function() {
        var a;
        for (a = 0; a < Z.cd; a++) null != this.gb[a] && (this.gb[a].stop(), this.gb[a] = null)
    },
    pause: function() {
        var a;
        for (a = 0; a < Z.cd; a++) null != this.gb[a] && this.gb[a].EJ()
    },
    resume: function() {
        var a;
        for (a = 0; a < Z.cd; a++) null != this.gb[a] && this.gb[a].FJ()
    },
    cM: function(a, b) {
        0 > b && (b = 0);
        100 < b && (b = 100);
        0 <= a && a < Z.cd && (this.fn[a] =
            b, null != this.gb[a] && this.gb[a].VD(b))
    },
    ZL: function(a) {
        var b;
        this.jw = a;
        for (b = 0; b < Z.cd; b++) this.fn[b] = a, null != this.gb[b] && this.gb[b].VD(a)
    },
    nI: function() {
        var a;
        for (a = 0; a < Z.cd; a++) null != this.gb[a] && this.gb[a].mI() && (this.gb[a] = null)
    }
};
Yc.prototype = {
    di: function() {
        var a = this.app.file.v();
        this.path = this.app.file.ub(a);
        a = this.path.lastIndexOf("\\");
        0 <= a && (this.path = this.path.substring(a + 1));
        this.length = this.app.file.w();
        this.offset = this.app.file.S;
        this.app.file.ma(this.length)
    },
    open: function() {
        return this.app.file.kg(this.offset,
            this.length)
    }
};
Zc.prototype = {
    load: function() {
        return this.Mv
    },
    reset: function() {
        this.Qw = this.Ne = 0;
        this.Qq = 25
    },
    step: function() {
        switch (this.Ne) {
            case 0:
                -1 != this.app.al ? this.context.Ac(0, 0, this.app.oa, this.app.wa, this.app.al) : this.context.Mq(0, 0, this.app.oa, this.app.wa);
                this.context.Cj(this.wg, this.ui - this.wg.width / 2, this.vi - this.wg.height / 2, this.wg.width, this.wg.height, 0, 0);
                this.Ne++;
                break;
            case 1:
                this.angle = this.app.Kh / this.app.Lh * 2 * Math.PI;
                this.Yl(this.angle);
                this.app.Kh == this.app.Lh && this.Ne++;
                break;
            case 2:
                0 < this.Qq && this.Qq--;
                0 == this.Qq && this.Ne++;
                break;
            case 3:
                this.app.av(this) && this.Ne++
        }
    },
    Kv: function() {
        return 4 == this.Ne
    },
    Yl: function(a) {
        var b, c, d, e, f;
        for (b = this.Qw; b <= a; b += .005) {
            c = this.ui + Math.cos(b) * (this.lf - this.size);
            d = this.vi - Math.sin(b) * (this.lf - this.size);
            e = this.ui + Math.cos(b) * this.lf;
            f = this.vi - Math.sin(b) * this.lf;
            this.context.xd(c, d, e, f, this.color, 1, 0, 0);
            var g;
            for (g = 0; 3 > g; g++) c = this.ui + Math.cos(b) * (this.lf - this.size - g), d = this.vi - Math.sin(b) * (this.lf - this.size - g), e = this.ui + Math.cos(b) *
                (this.lf - this.size - g - 1), f = this.vi - Math.sin(b) * (this.lf - this.size - g - 1), this.context.xd(c, d, e, f, this.color, 1, 0, 0), c = this.ui + Math.cos(b) * (this.lf + g), d = this.vi - Math.sin(b) * (this.lf + g), e = this.ui + Math.cos(b) * (this.lf + g + 1), f = this.vi - Math.sin(b) * (this.lf + g + 1), this.context.xd(c, d, e, f, this.color, 1, 0, 0)
        }
        this.Qw = a
    }
};
$c.prototype = {
    load: function() {
        return !0
    },
    reset: function() {
        this.ts = !1;
        this.Ne = 0;
        this.alpha = 128;
        this.position = 0
    },
    step: function() {
        if (this.app.Kh < this.app.Lh) switch (this.Ne) {
            case 0:
                0 < this.alpha && (this.alpha -=
                    2, 0 >= this.alpha && (this.alpha = 0, this.Ne++))
        } else switch (this.Ne) {
            case 0:
            case 1:
                this.Ne = 2;
                break;
            case 2:
                128 > this.alpha && (this.alpha += 4);
                128 <= this.alpha && (this.alpha = 128, null == this.app.Se ? this.ts = !0 : this.Ne++);
                break;
            default:
                this.ts = this.app.av(this);
                return
        }
        this.context.Ac(this.rect.left, this.rect.top, this.width, this.height, this.hI, w.tf, this.alpha);
        this.context.As(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, w.tf, this.alpha);
        this.position = this.app.Kh / this.app.Lh * (this.width - 2);
        this.context.Ac(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.iI, w.tf, this.alpha)
    },
    Kv: function() {
        return this.ts && this.app.Kh == this.app.Lh
    }
};
ad.prototype = {
    load: function() {
        this.step();
        return !this.D.yg
    },
    reset: function() {
        this.D.I.QA();
        this.D.I.Nv();
        this.D.I.nt(!1);
        this.D.I.Hm(-1, !1);
        this.D.I.i.gt();
        this.D.I.nv();
        this.D.I.ov();
        this.D.I.C.ej = this.D.I.C.Tv = this.D.I.Gj = 0;
        this.D.I.C.fj = this.D.I.C.Uv = this.D.I.Hj = 0;
        this.D.wD();
        this.D.I.tu();
        this.D.I.Gv();
        this.D.I.Hm(-1, !1);
        this.D.I.bx();
        this.D.I.Su(!1);
        this.D.I.bv();
        this.D.I.$v();
        this.D.I.i.cx();
        this.D.I.i.Gq(this.D.I);
        this.D.I.ev();
        this.D.I.Jq();
        this.D.I.Cb = 0;
        this.D.I.Wm = 0;
        this.D.si = !1;
        this.app.$a.push(this.D);
        this.Xl = 0
    },
    step: function() {
        this.D.si || (this.kM && (this.D.si = this.app.Kh == this.app.Lh), 0 == this.D.wp() && (this.D.si = !0), this.D.zA(this.context, this.Hc.x, this.Hc.y, !1));
        this.D.si && this.app.Se && this.app.av(this)
    },
    Kv: function() {
        var a = this.D.si;
        this.app.Se && (a = !1);
        if (a) {
            if (0 < this.Xl && (this.Xl--, 0 < this.Xl)) return !1;
            var b;
            for (b = 0; b <
                this.app.$a.length; b++)
                if (this.app.$a[b] == this.D) {
                    this.app.$a.splice(b, 1);
                    break
                }
        }
        return a
    }
};
r.rc = 0;
r.Tc = 1;
r.Uc = 2;
r.Gy = -1;
r.ld = 3;
r.Di = 1;
r.ag = 2;
r.bg = 4;
r.Fy = 8;
r.FO = 2147483648;
r.zG = 70;
r.rF = 60;
r.pF = .5;
r.prototype = {
    OB: function() {
        null == this.ec && (this.ec = ha.kg(this.app, "joyback.png"), this.Br = ha.kg(this.app, "joyfront.png"), this.Fd = ha.kg(this.app, "fire1U.png"), this.ae = ha.kg(this.app, "fire2U.png"), this.VA = ha.kg(this.app, "fire1D.png"), this.WA = ha.kg(this.app, "fire2D.png"))
    },
    reset: function(a) {
        this.Ca = a;
        null != this.ec &&
            0 != this.ec.width ? this.ND() : this.Au = !0;
        this.xg = this.JB ? r.zG * Math.PI / 180 : r.rF * Math.PI / 180
    },
    ND: function() {
        var a, b;
        a = this.app.oa;
        b = this.app.wa;
        0 == (this.Ca & r.Fy) ? (0 != (this.Ca & r.Di) && (this.cc[r.rc] = 16 + this.ec.width / 2, this.dc[r.rc] = b - 16 - this.ec.height / 2), 0 != (this.Ca & r.ag) && 0 != (this.Ca & r.bg) ? (this.cc[r.Tc] = a - this.Fd.width / 2 - 32, this.dc[r.Tc] = b - this.Fd.height / 2 - 16, this.cc[r.Uc] = a - this.ae.width / 2 - 16, this.dc[r.Uc] = b - this.ae.height / 2 - this.Fd.height - 24) : 0 != (this.Ca & r.ag) ? (this.cc[r.Tc] = a - this.Fd.width / 2 - 16, this.dc[r.Tc] =
            b - this.Fd.height / 2 - 16) : 0 != (this.Ca & r.bg) && (this.cc[r.Uc] = a - this.ae.width / 2 - 16, this.dc[r.Uc] = b - this.ae.height / 2 - 16)) : (0 != (this.Ca & r.Di) && (this.cc[r.rc] = a - 16 - this.ec.width / 2, this.dc[r.rc] = b - 16 - this.ec.height / 2), 0 != (this.Ca & r.ag) && 0 != (this.Ca & r.bg) ? (this.cc[r.Tc] = this.Fd.width / 2 + 16 + 2 * this.ae.width / 3, this.dc[r.Tc] = b - this.Fd.height / 2 - 16, this.cc[r.Uc] = this.ae.width / 2 + 16, this.dc[r.Uc] = b - this.ae.height / 2 - this.Fd.height - 24) : 0 != (this.Ca & r.ag) ? (this.cc[r.Tc] = this.Fd.width / 2 + 16, this.dc[r.Tc] = b - this.Fd.height /
            2 - 16) : 0 != (this.Ca & r.bg) && (this.cc[r.Uc] = this.ae.width / 2 + 16, this.dc[r.Uc] = b - this.ae.height / 2 - 16))
    },
    Qb: function(a, b) {
        0 != (a & r.Di) ? this.cc[r.rc] = b : 0 != (a & r.ag) ? this.cc[r.Tc] = b : 0 != (a & r.bg) && (this.cc[r.Uc] = b)
    },
    Rb: function(a, b) {
        0 != (a & r.Di) ? this.dc[r.rc] = b : 0 != (a & r.ag) ? this.dc[r.Tc] = b : 0 != (a & r.bg) && (this.dc[r.Uc] = b)
    },
    Eb: function(a) {
        this.Au && (this.Au = !1, this.ND());
        var b, c;
        0 != (this.Ca & r.Di) && (b = this.cc[r.rc] - this.ec.width / 2, c = this.dc[r.rc] - this.ec.height / 2, a.nf(this.ec, b, c, 0, 1, 1, 0, 0), b = this.cc[r.rc] + this.If - this.Br.width /
            2, c = this.dc[r.rc] + this.Jf - this.Br.height / 2, a.nf(this.Br, b, c, 0, 1, 1, 0, 0));
        if (0 != (this.Ca & r.ag)) {
            var d = 0 == (this.ya & 16) ? this.Fd : this.VA;
            b = this.cc[r.Tc] - d.width / 2;
            c = this.dc[r.Tc] - d.height / 2;
            a.nf(d, b, c, 0, 1, 1, 0, 0)
        }
        0 != (this.Ca & r.bg) && (d = 0 == (this.ya & 32) ? this.ae : this.WA, b = this.cc[r.Uc] - d.width / 2, c = this.dc[r.Uc] - d.height / 2, a.nf(d, b, c, 0, 1, 1, 0, 0))
    },
    pM: function(a) {
        var b = !1,
            c = this.app.eo(a),
            d = this.app.fo(a);
        this.LB = r.pF * Math.ceil(Math.sqrt(this.ec.width / 2 * this.ec.width / 2 + this.ec.height / 2 * this.ec.height / 2));
        this.cf =
            Math.ceil(Math.sqrt(this.ec.width / 4 * this.ec.width / 4 + this.ec.height / 4 * this.ec.height / 4));
        c = this.getKey(c, d);
        c != r.Gy && (this.touches[c] = a.identifier, c == r.rc && (this.ya &= 240, b = !0), c == r.Tc ? (this.ya |= 16, b = !0) : c == r.Uc && (this.ya |= 32, b = !0));
        return b
    },
    mE: function(a) {
        var b = this.app.eo(a),
            c = this.app.fo(a);
        if (this.getKey(b, c) == r.rc && a.identifier == this.touches[r.rc] && (this.If = b - this.cc[r.rc], this.Jf = c - this.dc[r.rc], a = (2 * Math.PI - Math.atan2(this.Jf, this.If)) % (2 * Math.PI), this.ya &= 240, b = Math.sqrt(this.If * this.If + this.Jf *
                this.Jf), this.JB ? (this.If = Math.cos(a) * this.cf, this.Jf = Math.sin(a) * -this.cf) : (this.If < -this.cf && (this.If = -this.cf), this.If > this.cf && (this.If = this.cf), this.Jf < -this.cf && (this.Jf = -this.cf), this.Jf > this.cf && (this.Jf = this.cf)), b > this.LB && b < 3 * this.cf)) {
            b = 0;
            if (0 <= a)
                for (;;) {
                    if (this.Mh(a, 0, this.xg) || this.Mh(a, 2 * Math.PI, this.xg)) {
                        b = 8;
                        break
                    }
                    if (this.Mh(a, Math.PI / 2, this.xg)) {
                        b = 1;
                        break
                    }
                    if (this.Mh(a, Math.PI, this.xg)) {
                        b = 4;
                        break
                    }
                    if (this.Mh(a, Math.PI / 4 * 6, this.xg)) {
                        b = 2;
                        break
                    }
                    if (this.Mh(a, Math.PI / 4, Math.PI / 2 - this.xg)) {
                        b =
                            9;
                        break
                    }
                    if (this.Mh(a, Math.PI / 4 * 3, Math.PI / 2 - this.xg)) {
                        b = 5;
                        break
                    }
                    if (this.Mh(a, Math.PI / 4 * 5, Math.PI / 2 - this.xg)) {
                        b = 6;
                        break
                    }
                    if (this.Mh(a, Math.PI / 4 * 7, Math.PI / 2 - this.xg)) {
                        b = 10;
                        break
                    }
                    break
                }
            this.ya |= b
        }
    },
    Mh: function(a, b, c) {
        return a > b - c / 2 && a < b + c / 2
    },
    kE: function(a) {
        var b;
        for (b = 0; b < r.ld; b++)
            if (this.touches[b] == a.identifier) {
                this.touches[b] = 0;
                switch (b) {
                    case r.rc:
                        this.Jf = this.If = 0;
                        this.ya &= 240;
                        break;
                    case r.Tc:
                        this.ya &= -17;
                        break;
                    case r.Uc:
                        this.ya &= -33
                }
                break
            }
    },
    getKey: function(a, b) {
        return 0 != (this.Ca & r.Di) && a >= this.cc[r.rc] -
            this.ec.width / 2 && a < this.cc[r.rc] + this.ec.width / 2 && b > this.dc[r.rc] - this.ec.height / 2 && b < this.dc[r.rc] + this.ec.height / 2 ? r.rc : 0 != (this.Ca & r.ag) && a >= this.cc[r.Tc] - this.Fd.width / 2 && a < this.cc[r.Tc] + this.Fd.width / 2 && b > this.dc[r.Tc] - this.Fd.height / 2 && b < this.dc[r.Tc] + this.Fd.height / 2 ? r.Tc : 0 != (this.Ca & r.bg) && a >= this.cc[r.Uc] - this.ae.width / 2 && a < this.cc[r.Uc] + this.ae.width / 2 && b > this.dc[r.Uc] - this.ae.height / 2 && b < this.dc[r.Uc] + this.ae.height / 2 ? r.Uc : r.Gy
    },
    bo: function() {
        return this.ya
    }
};
h.lO = 2;
h.OF = 4;
h.on = 16;
h.PF =
    32;
h.RF = 64;
h.QF = 128;
h.Jt = 512;
h.MN = 2;
h.ON = 4;
h.QN = 8;
h.NN = 16;
h.LN = 32;
h.RN = 64;
h.PN = 128;
h.SN = 256;
h.Ay = 480;
h.By = 300;
h.kn = 64;
h.ln = 16;
h.LQ = 1;
h.NQ = 2;
h.MQ = 4;
h.iu = 1;
h.aQ = 2;
h.$P = 4;
h.bQ = 8;
h.$y = 0;
h.mq = 1;
h.fg = 2;
h.fu = 3;
h.$G = 4;
h.bF = 1;
h.jn = 2;
h.vt = 4;
h.qy = 8;
h.Yp = 10;
h.Xp = 1;
h.Ot = 2;
h.Wp = 3;
h.Jy = 4;
h.LO = 5;
h.MO = 6;
h.JO = 7;
h.NO = 8;
h.KO = 9;
h.Vp = -2;
h.GG = 100;
h.HG = 101;
h.hh = 1;
h.ih = 2;
h.jh = 4;
h.gh = 8;
h.LE = 15;
h.Qt = 128;
h.uf = 2147483647;
h.Ft = 1110591041;
h.lu = 1110594637;
h.mH = 1110600435;
h.Pt = 1110874198;
h.tq = 1110634490;
h.gn = 1110590791;
h.dL = [0, 0,
    0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255
];
h.lz = [0, h.hh, h.ih, 0, h.jh, h.jh + h.hh, h.jh + h.ih, 0, h.gh, h.gh + h.hh, h.gh + h.ih, 0, 0, 0, 0, 0];
h.wz = !1;
h.Oq = function(a, b, c) {
    switch (c) {
        case 0:
            return a == b;
        case 1:
            return a != b;
        case 2:
            return a <= b;
        case 3:
            return a < b;
        case 4:
            return a >= b;
        case 5:
            return a > b
    }
    return !1
};
h.Wz = function(a, b, c) {
    switch (c) {
        case 0:
            return a == b;
        case 1:
            return a != b;
        case 2:
            return a <= b;
        case 3:
            return a < b;
        case 4:
            return a >= b;
        case 5:
            return a > b
    }
    return !1
};
h.ER = function(a) {
    a = a.xa >= q.cg ? a.ext.sB() : a.qg();
    null == a && (a = new Sa);
    return a
};
h.mS = function(a, b, c) {
    a.xa >= q.cg ? a.ext.OD(b, c) : a.Vg(b, c)
};
h.GR = function(a) {
    return a.xa >= q.cg ? a.ext.tB() : a.ir()
};
h.nS = function(a, b) {
    a.xa >= q.cg ? a.ext.PD(b) : a.Ts(b)
};
h.QK = function(a) {
    null != a.F && (a.F.Dw(), a.F.W |= w.gg, a.F.rl = 0)
};
h.PK = function(a) {
    null != a.F && (a.F.Io(), a.F.W &= ~w.gg, a.F.rl = 0)
};
h.Qb = function(a, b) {
    null != a.A ? a.A.V.Qb(b) : a.o != b && (a.o = b, null != a.b && (a.b.M = !0, a.b.Ra = !0))
};
h.Rb = function(a, b) {
    null != a.A ? a.A.V.Rb(b) : a.m != b && (a.m = b, null != a.b && (a.b.M = !0, a.b.Ra = !0))
};
h.LR = function(a,
    b) {
    if (0 == a) return 0 <= b ? 24 : 8;
    if (0 == b) return 0 <= a ? 0 : 16;
    var c, d = !1,
        e = !1;
    0 > a && (d = !0, a = -a);
    0 > b && (e = !0, b = -b);
    c = 256 * a / b;
    var f;
    for (f = 0; !(c >= D.Cl[f]); f += 2);
    c = D.Cl[f + 1];
    e && (c = -c + 32 & 31);
    d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
    return c
};
h.prototype = {
    WL: function(a) {
        this.C = a
    },
    tu: function() {
        this.H = Array(this.C.Cg);
        this.i = this.C.Rn;
        this.xe = 0;
        var a;
        for (a = this.h.Wc.iB(); null != a; a = this.h.Wc.oB()) a.Me >= q.Sd && this.xe++;
        this.zx = -1 == this.C.Rr ? this.h.jd & 65535 : this.C.Rr;
        this.ol = Array(Math.round(this.C.Cg / 32 + 1));
        this.ml = new O;
        this.Rg =
            this.C.Cg;
        this.Gx = this.i.IC;
        this.C.ej = 0;
        this.C.fj = 0;
        this.ca = this.C.ej;
        this.ga = this.C.fj;
        this.Ns = this.Ms = 0;
        this.Od = this.C.Dr.right; - 1 == this.Od && (this.Od = 2147479552);
        this.Pd = this.C.Dr.bottom; - 1 == this.Pd && (this.Pd = 2147479552);
        this.Hx = this.Cb = this.ob = 0;
        this.Qc &= h.QF;
        this.Qc |= h.OF;
        this.Tm = 0;
        this.Is = Array(h.Yp);
        this.Ij = null;
        this.Qc |= h.RF;
        this.va = Array(h.Qt);
        this.Um = Array(h.Qt);
        this.Js = new xa;
        this.Js.code = 0;
        this.Es = Array(4);
        this.yx = Array(4);
        this.Ds = Array(4);
        this.Rc = Array(4);
        for (a = this.Cc = 0; a < h.Yp; a++) this.Is[a] =
            50;
        this.Eu = this.us = !1;
        this.C.ED = !0
    },
    ov: function() {
        this.C.ED = !1;
        this.Ij = this.ml = this.ol = this.T = this.H = null;
        var a;
        for (a = 0; a < h.Qt; a++) this.va[a] = 0;
        this.Js = null
    },
    TJ: function(a) {
        this.tu();
        this.h.Oh = 0;
        if (null == this.h.Da && this.h.Pj)
            if (this.C.ya == E.wG) null == this.h.ya && (this.h.ya = new r(this.h), this.h.ya.OB()), this.h.ya.reset(0), this.h.hE();
            else if (this.C.ya != E.xG) {
            var b = 0;
            0 != (this.C.jo & E.rG) && (b = r.ag);
            0 != (this.C.jo & E.sG) && (b |= r.bg);
            0 != (this.C.jo & E.tG) && (b |= r.Fy);
            this.C.ya == E.yG && (b |= r.Di);
            0 != (b & (r.ag | r.bg |
                r.Di)) && (this.h.hE(b), this.h.ya.reset(b));
            this.C.ya == E.vG && this.h.fM()
        }
        this.Ex = 255;
        a && (this.Qc |= h.on);
        this.Gv();
        this.Hm(-1, !1);
        this.bx();
        this.Ya = 0;
        this.Su(a);
        this.bv();
        this.OJ();
        this.$v();
        this.i.cx();
        this.i.Gq(this);
        this.aE();
        this.Jq();
        this.Wm = 0;
        this.ev();
        this.Eu = !1
    },
    Zu: function() {
        if (0 < this.Uf && null == this.h.Mf) this.us && (1 == this.h.Lk && (0 <= this.Ks ? this.h.nc[this.Ks] && (this.resume(), this.Cb = 0, this.i.Ie(-458755)) : this.h.Lk && (this.resume(), this.Cb = 0, this.i.Ie(-458755))), this.h.Lk = !1), null != this.ss && this.ss.KJ(),
            a = this.Cb;
        else {
            this.h.wu |= l.gy;
            var a = this.kJ();
            this.h.wu &= ~l.gy;
            0 != (this.Qc & h.on) && (this.RA = (new Date).getTime() - this.pl, this.nt(!0), this.i.gt())
        }
        if (a == h.Xp || a == h.Ot || a == h.Wp) {
            this.h.Xf = document.createElement("canvas");
            this.h.Xf.width = this.h.oa;
            this.h.Xf.height = this.h.wa;
            var b = new Da(this.h.Xf);
            this.h.frame.Cr ? b.Mq(0, 0, this.oa, this.wa) : b.Ac(0, 0, this.oa, this.wa, this.pg);
            b.Ac(0, 0, this.h.oa, this.h.wa, this.h.pg);
            this.h.ue.Eb(b, 0, 0)
        }
        if (0 != a) switch (a) {
            case 5:
                this.pause();
                this.h.Lk = !1;
                this.us = !0;
                a = 0;
                break;
            case 101:
                if (this.C.mR) break;
                this.QA();
                this.Nv();
                this.nt(!1);
                this.Hm(-1, !1);
                this.i.gt();
                this.nv();
                this.ov();
                this.C.ej = this.C.Tv = this.Gj = 0;
                this.C.fj = this.C.Uv = this.Hj = 0;
                this.h.wD();
                this.tu();
                this.Gv();
                this.Hm(-1, !1);
                this.bx();
                this.Su(!1);
                this.bv();
                this.$v();
                this.i.cx();
                this.i.Gq(this);
                this.ev();
                this.aE();
                this.Jq();
                this.Wm = a = 0;
                break;
            case 100:
            case -2:
                this.i.Ie(-196611)
        }
        return this.Cb = a
    },
    iK: function(a) {
        var b;
        100 < this.Cb && (this.Cb = h.Vp);
        b = this.Wm;
        this.LL();
        this.Nv();
        this.nt(a);
        this.i.gt();
        this.ov();
        this.nv();
        this.Hm(-1, !0);
        this.h.bJ();
        return n.KG(this.Cb, b)
    },
    Gv: function() {
        var a;
        for (a = 0; a < this.Rg; a++) this.H[a] = null
    },
    bx: function() {
        var a, b;
        this.Qc |= h.PF;
        this.Qc |= h.Jt;
        var c = this.cp = 0;
        this.T = Array(this.xe);
        this.oi = 0;
        for (a = this.h.Wc.iB(); null != a; a = this.h.Wc.oB())
            if (b = a.Me, b >= q.Sd) {
                this.T[c] = new M;
                this.T[c].AI(a);
                this.T[c].Qo = -1;
                if (b == q.uh || b == q.Yy)
                    for (b = this.C.zd.fr(); null != b; b = this.C.zd.Go())
                        if (b.Kf == this.T[c].ad) {
                            this.T[c].Qo = b.gj;
                            break
                        } c++;
                a = a.oc;
                if (0 != (a.Eg & z.vh) && null != a.hf)
                    for (b = 0; b < a.hf.rm; b++) {
                        var d =
                            a.hf.Jd[b];
                        d.yw == S.SG && (this.oi |= 1 << d.om - 1)
                    }
            } for (c = 0; c < this.C.Nc; c++) this.C.tb[c].Aw = 1;
        return 0
    },
    eA: function() {
        var a, b, c, d, e;
        this.Qc &= ~h.on;
        c = 0;
        for (e = this.C.zd.fr(); null != e; c++, e = this.C.zd.Go())
            if (a = this.h.Wc.Gk(e.Kf), b = a.oc, a = a.Me, !(a < q.cg) && 0 == (b.Eg & z.dz) && (d = h.qy, e.Xv == Aa.fz)) {
                if (0 == (b.oj & z.nq)) {
                    if (a != q.uh) continue;
                    d |= h.jn
                }
                0 == (b.Eg & z.az) && this.dv(e.gj, e.Kf, 2147483648, 2147483648, -1, d, -1, -1)
            } this.i.Gq(this);
        this.pl = (new Date).getTime() - this.RA
    },
    Su: function(a) {
        var b, c, d, e, f;
        d = 0;
        for (f = this.C.zd.fr(); null !=
            f; d++, f = this.C.zd.Go())
            if (b = this.h.Wc.Gk(f.Kf), c = b.oc, b = b.Me, e = h.qy, f.Xv == Aa.fz) {
                b == q.uh && (e |= h.vt);
                if (0 == (c.oj & z.nq)) {
                    if (b == q.Yy) continue;
                    e |= h.jn
                }
                a && b >= q.cg && 0 == (c.Eg & z.dz) || 0 == (c.Eg & z.az) && this.dv(f.gj, f.Kf, 2147483648, 2147483648, -1, e, -1, -1)
            } this.Qc &= ~h.Jt
    },
    Nv: function() {
        var a;
        for (a = 0; a < this.Rg && 0 != this.ob; a++)
            if (null != this.H[a]) {
                var b = this.H[a];
                (32 > b.xa || b.O.yc != h.gn) && this.dr(a, !0)
            } for (a = 0; a < this.Rg && 0 != this.ob; a++) null != this.H[a] && (b = this.H[a], 32 <= b.xa && b.O.yc == h.gn && this.dr(a, !0))
    },
    nt: function(a) {
        a ||
            (0 == (this.h.ao & l.UF) ? this.h.pc.Zs() : this.h.pc.gK())
    },
    Hm: function(a, b) {
        var c, d;
        d = -1 == a ? this.C.Nc : a + 1;
        for (c = 0; c < d; c++) {
            var e = this.C.tb[c];
            e.reset();
            e.SI();
            b && e.qA()
        }
    },
    Jq: function() {
        0 != this.oi && this.JD(-1)
    },
    nv: function() {
        0 != this.oi && this.JD(0)
    },
    JD: function(a) {
        0 <= a ? this.h.Nx(1) : this.h.Nx(-1)
    },
    aE: function() {
        this.h.Nx(1)
    },
    ru: function(a) {
        var b, c;
        for (c = 0; c < this.ml.size() && (b = this.ml.get(c), !n.xb(b.name, a)); c++);
        c == this.ml.size() && (b = new rb, this.ml.add(b), c = this.ml.size() - 1, b.name = a, b.Ca = 0);
        return c
    },
    LL: function() {
        var a,
            b, c, d, e, f;
        for (c = 0; c < this.T.length; c++)
            if (b = this.T[c], f = b.lb, 32767 != b.ad && 0 == (f & 2147483648) && (d = this.h.Wc.Gk(b.ad), 0 != (d.$h & q.ez) && (a = this.H[f], b.Md == q.uh || b.Md == q.un || null != a.N))) {
                e = b.uj + b.Md.toString();
                null == this.h.Ji && (this.h.Ji = new O);
                var g = !1;
                d = null;
                for (a = 0; a < this.h.Ji.size(); a++)
                    if (d = this.h.Ji.get(a), e == d.name) {
                        g = !0;
                        break
                    } 0 == g ? (d = new Fe, d.name = e, d.Qf = new O, this.h.Ji.add(d)) : d.Qf.clear();
                for (;;) {
                    a = this.H[f];
                    if (b.Md == q.uh) f = new He, f.text = a.ri, f.vb = a.vb, d.Qf.add(f);
                    else if (b.Md == q.un) f = new Ge, f.value =
                        a.sa, f.vb = a.vb, f.Sc = a.Sc, f.Qs = a.Qs, f.Ps = a.Ps, d.Qf.add(f);
                    else {
                        e = new Ie;
                        e.Ca = a.N.Qe;
                        e.values = Array(a.N.Va.length);
                        for (f = 0; f < a.N.Va.length; f++) e.values[f] = a.N.Va[f];
                        e.ka = Array(a.N.ze.length);
                        for (f = 0; f < a.N.ze.length; f++) e.ka[f] = a.N.ze[f];
                        d.Qf.add(e)
                    }
                    f = a.bc;
                    if (0 != (f & 2147483648)) break
                }
            }
    },
    $v: function() {
        var a, b, c, d, e, f;
        if (null != this.h.Ji)
            for (c = 0; c < this.T.length; c++)
                if (b = this.T[c], a = b.lb, 32767 != b.ad && 0 <= a && (e = this.h.Wc.Gk(b.ad), 0 != (e.$h & q.ez)))
                    for (f = b.uj + b.Md.toString(), d = 0; d < this.h.Ji.size(); d++)
                        if (e = this.h.Ji.get(d),
                            f == e.name) {
                            for (d = 0;;) {
                                a = this.H[a];
                                if (b.Md == q.uh) f = e.Qf.get(d), a.ri = f.text, a.vb = f.vb, a.b.M = !0, a.TQ = !0;
                                else if (b.Md == q.un) f = e.Qf.get(d), a.sa = f.value, a.vb = f.vb, a.Sc = f.Sc, a.Qs = f.Qs, a.Ps = f.Ps, a.RQ = !0, a.b.M = !0;
                                else {
                                    f = e.Qf.get(d);
                                    a.N.Qe = f.Ca;
                                    a.N.aj(f.values.length);
                                    a.N.GJ(f.ka.length);
                                    var g;
                                    for (g = 0; g < f.values.length; g++) a.N.Va[g] = f.values[g];
                                    for (g = 0; g < f.ka.length; g++) a.N.ze[g] = f.ka[g]
                                }
                                a = a.bc;
                                if (0 != (a & 2147483648)) break;
                                d++;
                                if (d >= e.Qf.size()) break
                            }
                            break
                        }
    },
    dv: function(a, b, c, d, e, f, g, m) {
        for (;;) {
            var p = new bd,
                l = null; - 1 != a && (l = this.C.zd.xJ(a));
            var n = this.h.Wc.Gk(b),
                q = n.oc;
            0 == (q.oj & z.nq) && (f |= h.jn);
            if (this.ob >= this.Rg) break;
            var k = null,
                r = new G;
            switch (n.Me) {
                case 2:
                    k = new pd;
                    break;
                case 3:
                    k = new td;
                    break;
                case 4:
                    k = new ud;
                    break;
                case 5:
                    k = new rd;
                    break;
                case 6:
                    k = new sd;
                    break;
                case 7:
                    k = new da;
                    break;
                case 8:
                    break;
                case 9:
                    k = new K;
                    break;
                default:
                    k = new vd(n.Me, this), null == k.ext && (k = null)
            }
            if (null == k) break;
            k.prototype = r;
            k.rK = l;
            if (0 > m)
                for (m = 0; m < this.Rg && null != this.H[m]; m++);
            if (m >= this.Rg) break;
            this.H[m] = k;
            this.ob++;
            k.PJ = q.yc;
            k.ta =
                q.Eg;
            m > this.BD && this.Ax++;
            k.Vb = m;
            this.cp++;
            0 == this.cp && (this.cp = 1);
            k.Av = this.cp;
            k.bf = b;
            k.Jk = a;
            k.xa = n.Me;
            this.SK(k);
            k.c = this;
            k.io = !0;
            k.O = q;
            0 == (k.ta & z.bz) && (k.ta &= ~z.fk, 0 != (k.af & M.pq) && 0 != (this.C.Wb & E.Hy) && (k.ta |= z.fk), 0 != (k.af & (M.Td | M.qq)) && (k.ta |= z.fk));
            a = c;
            2147483648 == a && (a = l.Yv);
            p.qI = a;
            k.o = a;
            2147483648 == d && (d = l.Zv);
            p.rI = d;
            k.m = d;
            null != l && -1 == g && (g = l.NB);
            p.Uz = g;
            k.be = g;
            g = this.C.tb[g];
            g.Aw++;
            p.Vz = g.Aw;
            p.En = f;
            p.Tz = e;
            p.pI = l;
            k.b = null;
            0 != (k.ta & (z.ek | z.vh | z.gk)) && (k.b = new qd, k.b.Y());
            k.A = null;
            0 != (k.ta & z.vh) &&
                (k.A = new Ga, 0 == (p.En & h.bF) && k.A.Y(0, k, q, p, -1));
            k.ha = null;
            0 != (k.ta & z.ek) && (k.ha = new Ia, k.ha.Y(k));
            k.F = null;
            0 != (k.ta & z.gk) && (k.F = new w, k.F.QJ(k, q, p));
            k.N = null;
            0 != (k.ta & z.gH) && (k.N = new Ea, k.N.Y(k, q, p));
            k.Y(q, p);
            0 != (k.ta & z.gk) && k.F.Fv(!0);
            1 <= this.Ya && k.Eh();
            return m
        }
        return -1
    },
    dr: function(a, b) {
        var c = this.H[a];
        if (null != c) {
            if (1 != b || 0 != c.Av) this.jK(c), null != c.A && c.A.Fb(b), null != c.N && c.N.Fb(b), null != c.F && c.F.Fb(b), null != c.b && c.b.Fb(b), c.Fb(b), this.RK(c);
            this.H[a] = null;
            this.ob--
        }
    },
    lg: function(a) {
        this.ol[Math.floor(a /
            32)] |= 1 << (a & 31);
        this.gp++
    },
    UI: function() {
        if (0 != this.gp)
            for (var a = 0, b, c; a < this.Rg;) {
                b = this.ol[a / 32];
                if (0 != b) {
                    for (c = this.ol[a / 32] = 0; 0 != b && 32 > c; c++) {
                        if (0 != (b & 1)) {
                            var d = this.H[a + c];
                            null != d && 1 == d.Kb.Hg && this.i.qd(d, d.xa | -2162688);
                            this.dr(a + c, !1);
                            this.gp--
                        }
                        b >>= 1
                    }
                    if (0 == this.gp) break
                }
                a += 32
            }
    },
    jK: function(a) {
        var b = 0,
            c, d;
        for (c = 0; c < this.ob; c++) {
            for (; null == this.H[b];) b++;
            d = this.H[b];
            b++;
            null != d.A && d.b.Oc == S.QG && (d = d.A.V, d.Hl == a && 1 == d.bq && d.eE())
        }
    },
    Eh: function() {
        var a, b, c;
        for (c = a = 0; a < this.ob; a++) {
            for (; null == this.H[c];) c++;
            c++
        }
        for (c = a = 0; a < this.ob; a++) {
            for (; null == this.H[c];) c++;
            b = this.H[c];
            c++;
            b.Eh()
        }
    },
    SK: function(a) {
        var b = a.bf,
            c;
        for (c = 0; c < this.xe && this.T[c].ad != b; c++);
        b = this.T[c];
        0 != (b.lb & 2147483648) ? (b.lb = a.Vb, a.vg = c | 2147483648, a.bc = 2147483648) : (c = this.H[b.lb], a.vg = c.vg, c.vg = a.Vb, a.bc = c.Vb, b.lb = a.Vb);
        a.Bv = b.Ow;
        a.Kb = b;
        a.af = b.Ld; - 1 == a.Jk ? a.Jk = b.Qo : -1 == b.Qo && (b.Qo = a.Jk);
        b.Hg += 1
    },
    RK: function(a) {
        var b = a.Kb;
        --b.Hg;
        var c;
        0 == (a.vg & 2147483648) ? (c = this.H[a.vg], 0 == (a.bc & 2147483648) ? (b = this.H[a.bc], null != c && (c.bc = a.bc), null !=
            b && (b.vg = a.vg)) : null != c && (c.bc = 2147483648)) : 0 == (a.bc & 2147483648) ? (c = this.H[a.bc], null != c && (c.vg = a.vg, b.lb = c.Vb)) : b.lb = 2147483648
    },
    oF: function() {
        var a = this.Dy();
        if (null != a) {
            var b = 0,
                c;
            for (c = 0; c < this.ob; b++, c++) {
                for (; null == this.H[b];) b++;
                var d = this.H[b];
                32 <= d.xa && (d.O.yc == h.Ft || d.O.yc == h.lu || d.O.yc == h.mH || d.O.yc == h.tq || d.O.yc == h.Pt ? d.ext.nL() : d.O.yc == h.gn && d.ext.nL())
            }
            for (c = b = 0; c < this.ob; b++, c++) {
                for (; null == this.H[b];) b++;
                d = this.H[b];
                if (0 != (d.ta & z.vh)) {
                    var e = !1;
                    if (d.b.Oc == S.Gi) {
                        var f = d.O.hf.Jd[d.A.Ix];
                        if (n.xb(f.Mc, "box2d8directions") || n.xb(f.Mc, "box2dspring") || n.xb(f.Mc, "box2dspaceship") || n.xb(f.Mc, "box2dstatic") || n.xb(f.Mc, "box2dracecar") || n.xb(f.Mc, "box2daxial") || n.xb(f.Mc, "box2dplatform") || n.xb(f.Mc, "box2dbouncingball") || n.xb(f.Mc, "box2dbackground")) e = !0
                    }
                    0 == e && 2 == d.xa && a.mL(d)
                }
            }
            for (c = b = 0; c < this.ob; b++, c++)
                for (; null == this.H[b];) b++
        }
    },
    Dy: function() {
        if (0 == this.zD) {
            this.zD = !0;
            this.mi = null;
            var a = 0,
                b;
            for (b = 0; b < this.ob; a++, b++) {
                for (; null == this.H[a];) a++;
                var c = this.H[a];
                if (32 <= c.xa && c.O.yc == h.gn) {
                    this.mi =
                        c.ext;
                    break
                }
            }
        }
        return this.mi
    },
    Rp: function(a) {
        if (a && 0 == (a.X & G.je) && 0 != (a.ta & z.vh) && a.b.Oc == S.Gi) {
            var b = a.O.hf.Jd[a.A.Ix];
            if (n.xb(b.Mc, "box2d8directions") || n.xb(b.Mc, "box2dspring") || n.xb(b.Mc, "box2dspaceship") || n.xb(b.Mc, "box2dstatic") || n.xb(b.Mc, "box2dracecar") || n.xb(b.Mc, "box2daxial") || n.xb(b.Mc, "box2dplatform") || n.xb(b.Mc, "box2dbouncingball") || n.xb(b.Mc, "box2dbackground")) return a.A.V.Yc
        }
        return null
    },
    $H: function(a) {
        if (a.O.yc == h.Ft || a.O.yc == h.lu || a.O.yc == h.Pt || a.O.yc == h.tq) {
            var b = 0,
                c;
            for (c = 0; c < this.ob; b++,
                c++) {
                for (; null == this.H[b];) b++;
                var d = this.H[b];
                32 <= d.xa && d.O.yc == h.gn && (a.O.yc == h.Ft ? a.ext.identifier == d.ext.identifier && d.ext.nR.add(a.ext) : a.O.yc == h.lu ? a.ext.identifier == d.ext.identifier && d.ext.qS.add(a.ext) : a.O.yc == h.Pt ? a.ext.identifier == d.ext.identifier && d.ext.PR.add(a.ext) : a.O.yc == h.tq && a.ext.identifier == d.ext.identifier && d.ext.gS.add(a.ext))
            }
            if (a.O.yc != h.tq)
                for (c = b = 0; c < this.ob; b++, c++) {
                    for (; null == this.H[b];) b++;
                    d = this.H[b];
                    d.xa == q.Sd && (d = this.Rp(d)) && a.ext.YR(d)
                }
        }
    },
    Jb: function(a) {
        return null !=
            a.A && null != a.A.V ? a.A.V.Jb() : a.b.Sa
    },
    pause: function(a) {
        if (0 == this.Uf) {
            this.Uf = 1;
            this.xD = this.h.jd;
            var b = 0,
                c;
            for (c = 0; c < this.ob; c++) {
                for (; null == this.H[b];) b++;
                b++
            }
            a || this.h.pc.pause()
        }
    },
    resume: function() {
        if (!this.NK && 0 != this.Uf) {
            this.Uf = 0;
            this.Jq();
            var a = 0,
                b;
            for (b = 0; b < this.ob; b++) {
                for (; null == this.H[a];) a++;
                a++
            }
            this.h.pc.resume();
            a = this.h.jd;
            a -= this.xD;
            this.pl += a;
            this.Ks = 0;
            this.us = !1
        }
    },
    QA: function() {
        this.h.pc.Zs()
    },
    Oi: function() {
        var a = 0,
            b;
        for (b = 0; b < this.ob; b++) {
            for (; null == this.H[a];) a++;
            var c = this.H[a];
            a++;
            c.Oi()
        }
    },
    jg: function(a, b, c) {
        a = this.xM(a, b, c);
        return null != a ? a.top : h.uf
    },
    xM: function(a, b, c) {
        b -= this.ca;
        c -= this.ga;
        var d; - 1 == a ? (d = 0, a = this.C.Nc) : (d = a, a += 1);
        for (; d < a; d++) {
            var e = this.C.tb[d].yJ(b, c);
            if (null != e) return e
        }
        return null
    },
    ev: function() {
        this.pl = this.h.jd;
        this.gp = this.Hx = this.Cb = this.Ya = this.pi = 0;
        var a;
        for (a = 0; a < (this.Rg + 31) / 32; a++) this.ol[a] = 0;
        this.kl = this.C.qo;
        this.ll = this.C.po;
        this.Nm = -h.Ay;
        this.Rm = -h.By;
        this.Lm = this.Od + h.Ay;
        this.Pm = this.Pd + h.By;
        this.Gj = a = this.ca;
        a -= h.kn;
        0 > a && (a = this.Nm);
        this.Mm = a;
        this.Hj = a = this.ga;
        a -= h.ln;
        0 > a && (a = this.Rm);
        this.Qm = a;
        a = this.ca;
        a += this.kl + h.kn;
        a > this.Od && (a = this.Lm);
        this.Km = a;
        a = this.ga;
        a += this.ll + h.ln;
        a > this.Pd && (a = this.Pm);
        this.Om = a;
        for (a = this.Uf = this.Vm = this.Sm = this.jl = 0; 4 > a; a++) this.Rc[a] = 0, this.Es[a] = 0, this.Ds[a] = 255;
        this.hl = 0;
        this.i.Hu = !1;
        this.i.fp = !1;
        this.Ks = 0;
        this.mi = null;
        this.zD = !1;
        this.Bx = this.Gs = this.Fs = this.AD = null;
        for (a = 0; a < h.Yp; a++) this.Is[a] = 20;
        this.Tm = 0
    },
    kJ: function() {
        this.h.pc.nI();
        if (null != this.h.Da && this.h.yg) return this.pl = this.h.jd,
            this.pi = 0, this.Cb;
        if (null != this.h.Mf) return this.h.Mf.handle(), 0;
        this.Eu || (this.oF(), this.Eu = !0);
        var a = this.h.jd - this.pl,
            b = this.pi;
        this.pi = a;
        this.ip = a -= b;
        this.Vm += a;
        this.Ya += 1;
        this.Cc = this.ip * this.C.RB / 1E3;
        this.Is[this.Tm] = a;
        this.Tm++;
        this.Tm >= h.Yp && (this.Tm = 0);
        for (a = 0; 4 > a; a++) this.Es[a] = this.Rc[a];
        this.fK();
        1 == this.h.Oh ? this.Rc[0] |= this.h.ya.bo() & this.Ex : 2 == this.h.Oh && (this.Rc[0] |= this.h.bo() & this.Ex);
        if (0 != this.oi)
            for (this.qv(), this.hl = 0, this.h.nc[l.dd] && (this.hl |= 16), this.h.nc[l.hg] && (this.hl |=
                    32), a = 0; a < this.Gx; a++) 0 != (this.QR & 1) && (b = this.Rc[a] & 207, b |= this.hl, this.Rc[a] = b);
        else this.qv();
        for (a = 0; 4 > a; a++)
            if (b = this.Rc[a] & h.dL[4 * this.Gx + a], b &= this.Ds[a], this.Rc[a] = b, b ^= this.Es[a], this.yx[a] = b, 0 != b)
                if (b &= this.Rc[a], 0 != (b & 240)) this.i.CD = a, b = this.yx[a], 0 != (b & 240) && (this.i.Dc = b, this.i.Ie(-196615)), 0 != (b & 15) && (this.i.Dc = b, this.i.Ie(-196615));
                else {
                    var c = this.i.fc[this.i.Oe[-q.Xy] + 4];
                    0 != c && (this.i.Dc = b, this.i.Cf(c, null))
                } if (0 != this.ob) {
            a = this.ob;
            b = 0;
            do {
                for (this.Ax = 0; null == this.H[b];) b++;
                c = this.H[b];
                c.BB = c.tr;
                c.tr = null;
                c.io && (this.BD = b, c.handle());
                a += this.Ax;
                b++;
                a--
            } while (0 != a)
        }
        this.fd++;
        this.i.yI();
        this.i.NJ();
        this.i.DD && 0 == (this.Qc & h.on) && this.i.Cf(0, null);
        this.i.MJ();
        this.UI();
        this.doScroll();
        this.i.Cs = -1;
        this.Sm++;
        if (0 == this.Cb) return this.Hx;
        this.Cb != h.Xp && this.Cb != h.Ot && this.Cb != h.Vp && this.Cb != h.Wp && this.Cb != h.GG && this.Cb != h.Jy || this.i.Ie(-65539);
        return this.Cb
    },
    fK: function() {
        var a;
        for (a = 0; 4 > a; a++) this.Rc[a] = 0;
        var b = this.h.qJ();
        for (a = 0; 4 > a; a++) {
            var c;
            for (c = 0; c < l.pn; c++) this.h.nc[b[a * l.pn +
                c]] && (this.Rc[a] |= 1 << c)
        }
    },
    qv: function() {
        this.ki = this.h.Nf + this.ca - this.h.Yf;
        this.li = this.h.Of + this.ga - this.h.Zf
    },
    Le: function(a) {
        a.A.U = !1;
        h.wz = !1;
        a.A.lp = 0;
        var b, c;
        0 != (a.af & M.qq) && (b = this.kx(a.b.qx, a.b.sx, a.b.rx, a.b.tx), 0 != b && (c = this.kx(a.o - a.ia, a.m - a.ja, a.o - a.ia + a.K, a.m - a.ja + a.J), 0 == c && (b ^= c, 0 != b && (a.A.lp |= Ga.xF, this.i.Dc = b, this.i.qd(a, -720896 | a.xa & 65535)))), b = this.kx(a.o - a.ia, a.m - a.ja, a.o - a.ia + a.K, a.m - a.ja + a.J), 0 != (b & a.A.Jx) && (c = a.A.U, 0 != (b & h.hh) ? a.A.V.Qb(a.o + this.Od) : 0 != (b & h.ih) && a.A.V.Qb(a.o - this.Od),
            0 != (b & h.jh) ? a.A.V.Rb(a.m + this.Pd) : 0 != (b & h.gh) && a.A.V.Rb(a.m - this.Pd), a.b.Oc != S.eu && a.b.Oc != S.Gi && (a.A.U = c)), b = this.bl(a.b.qx, a.b.sx, a.b.rx, a.b.tx), b != h.LE && (c = this.bl(a.o - a.ia, a.m - a.ja, a.o - a.ia + a.K, a.m - a.ja + a.J), b = ~b & c, 0 != b && (a.A.lp |= Ga.yF, this.i.Dc = b, this.i.qd(a, -786432 | a.xa & 65535))));
        0 != (a.af & M.pq) && (a.b.Oc == S.eu ? a.A.V.MK() : this.rk(a, a.b.Ga, a.b.Ua, a.b.mb, a.b.nb, a.o, a.m, 0, E.ie) && this.i.qd(a, -851968 | a.xa & 65535));
        if (0 != (a.af & M.wn) && (b = this.tm(a, a.b.Ga, a.b.Ua, a.b.mb, a.b.nb, a.o, a.m, a.Kb.sj), null != b))
            for (c =
                0; c < b.size(); c++) {
                var d = b.get(c);
                if (0 == (d.X & G.je)) {
                    var e = a.xa,
                        f = a,
                        g = d;
                    f.xa > g.xa && (f = d, g = a, e = f.xa);
                    this.i.Dc = g.bf;
                    this.i.IL = g.Vb;
                    this.i.qd(f, -917504 | e & 65535)
                }
            }
        return h.wz
    },
    tm: function(a, b, c, d, e, f, g, m) {
        var p = null;
        f -= a.ia;
        var h = f + a.K;
        g -= a.ja;
        var l = g + a.J,
            n, k;
        if (0 != (a.X & G.mh) || 0 != (a.X & G.je)) return p;
        var r = !1,
            v = null,
            z = -1;
        a.xa == q.Sd && 0 == (a.F.W & w.wh) && (r = !0);
        a.xa == q.Sd && (z = a.F.Ym);
        var u = a.X;
        a.X |= G.mh;
        var t = 0,
            A, U, C;
        if (null != m)
            for (t = 0; t < m.length; t += 2)
                for (var E = this.T[m[t + 1]].lb; 0 == (E & 2147483648);) {
                    if (A = this.H[E],
                        E = A.bc, 0 == (A.X & G.mh) && 0 == (A.X & G.je) && (U = A.o - A.ia, C = A.m - A.ja, U < h && U + A.K > f && C < l && C + A.J > g)) switch (A.xa) {
                        case q.Sd:
                            (0 > z || 0 <= z && z == A.F.Ym) && 0 != (A.F.W & w.hk) && (0 == r || 0 != (A.F.W & w.wh) ? (null == p && (p = new O), p.add(A)) : (null == v && (k = this.h.ba.sb(b), null != k && (v = k.He(0, c, d, e))), k = this.h.ba.sb(A.b.Ga), null != k && (n = k.He(0, A.b.Ua, A.b.mb, A.b.nb)), null != v && null != n && v.Nj(f, g, 0, n, U, C, 0) && (null == p && (p = new O), p.add(A))));
                            break;
                        case q.uh:
                        case q.un:
                        case q.Vy:
                        case q.Zy:
                        case q.Ty:
                            null == p && (p = new O);
                            p.add(A);
                            break;
                        default:
                            null ==
                                p && (p = new O), p.add(A)
                    }
                } else
                    for (m = 0; m < this.ob; m++) {
                        for (; null == this.H[t];) t++;
                        A = this.H[t];
                        t++;
                        if (0 == (A.X & G.mh) && (U = A.o - A.ia, C = A.m - A.ja, U < h && U + A.K > f && C < l && C + A.J > g)) switch (A.xa) {
                            case q.Sd:
                                (0 > z || 0 <= z && z == A.F.Ym) && 0 != (A.F.W & w.hk) && (0 == r || 0 != (A.F.W & w.wh) ? (null == p && (p = new O), p.add(A)) : (null == v && (k = this.h.ba.sb(b), null != k && (v = k.He(0, c, d, e))), k = this.h.ba.sb(A.b.Ga), null != k && (n = k.He(0, A.b.Ua, A.b.mb, A.b.nb)), null != v && null != n && v.Nj(f, g, 0, n, U, C, 0) && (null == p && (p = new O), p.add(A))));
                                break;
                            case q.uh:
                            case q.un:
                            case q.Vy:
                            case q.Zy:
                            case q.Ty:
                                null ==
                                    p && (p = new O);
                                p.add(A);
                                break;
                            default:
                                null == p && (p = new O), p.add(A)
                        }
                    }
        a.X = u;
        return p
    },
    rk: function(a, b, c, d, e, f, g, m, p) {
        b = this.C.tb[a.be];
        switch (a.xa) {
            case q.Sd:
                if (0 == (a.F.W & w.wh)) {
                    if (a = this.h.ba.sb(a.b.Ga), null != a) return a = a.He(B.lh, c, d, e), null != b.Nj(a, f - this.ca, g - this.ga, m, p)
                } else return f = f - a.ia - this.ca, g = g - a.ja - this.ga, c = f + a.K, a = g + a.J, m = null != b.at(f, g, c, a, m, p);
                return !1;
            default:
                return f = f - a.ia - this.ca, g = g - a.ja - this.ga, c = f + a.K, a = g + a.J, m = null != b.at(f, g, c, a, m, p)
        }
    },
    pB: function(a, b) {
        var c = 0,
            d, e, f, g, m, p, h = null,
            l = -1;
        for (d = 0; d < this.ob; d++) {
            for (; null == this.H[c];) c++;
            e = this.H[c];
            c++;
            f = e.o - e.ia;
            g = e.m - e.ja;
            m = f + e.K;
            p = g + e.J;
            a >= f && a < m && b >= g && b < p && 0 == (e.X & G.je) && e.xa == q.Sd && (0 == (e.F.W & w.wh) ? this.h.ba.sb(e.b.Ga).He(B.lh, 0, 1, 1).$s(a - e.o, b - e.m, e.b.Ua, e.b.mb, e.b.nb) && (f = e.tc(), f > l && (l = f, h = e)) : (f = e.tc(), f > l && (l = f, h = e)))
        }
        return h
    },
    bl: function(a, b, c, d) {
        var e = 0;
        0 > a && (e |= h.hh);
        0 > b && (e |= h.jh);
        c > this.Od && (e |= h.ih);
        d > this.Pd && (e |= h.gh);
        return h.lz[e]
    },
    kx: function(a, b, c, d) {
        var e = 15;
        a < this.Od && (e &= ~h.ih);
        b < this.Pd && (e &= ~h.gh);
        0 < c && (e &= ~h.hh);
        0 < d && (e &= ~h.jh);
        return h.lz[e]
    },
    random: function(a) {
        var b = 31415 * this.zx + 1;
        this.zx = b &= 65535;
        return b * a >>> 16
    },
    tv: function(a) {
        if (0 == a || -1 == a) return this.random(32);
        var b, c = 0,
            d = 0,
            e = a;
        for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
        if (1 == d) return c;
        d = this.random(d);
        e = a;
        for (b = 0; 32 > b; b++) {
            if (0 != (e & 1) && (d--, 0 > d)) return b;
            e >>>= 1
        }
        return 0
    },
    Hf: function(a) {
        this.nl = a.Ia;
        this.yd = 0;
        this.Jh = !1;
        return this.getExpression()
    },
    jb: function(a) {
        this.nl = a.Ia;
        this.yd = 0;
        this.Jh = !1;
        return this.getExpression()
    },
    uv: function(a) {
        this.nl =
            a.Ia;
        this.yd = 0;
        this.Jh = !1;
        return this.getExpression()
    },
    vv: function() {
        this.Jh = !1;
        var a = this.getExpression();
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    },
    getExpression: function() {
        var a, b = this.fa;
        this.Um[this.fa] = this.Js;
        do {
            this.fa++;
            this.An = !0;
            this.nl[this.yd].evaluate(this);
            this.An = !1;
            this.yd++;
            do
                if (a = this.nl[this.yd], 0 < a.code && 1310720 > a.code) a.code > this.Um[this.fa - 1].code ? (this.Um[this.fa] = a, this.yd++, this.fa++, this.An = !0, this.nl[this.yd].evaluate(this), this.An = !1, this.yd++) : (this.fa--, this.Um[this.fa].evaluate(this));
                else {
                    this.fa--;
                    if (this.fa == b) break;
                    this.Um[this.fa].evaluate(this)
                } while (1)
        } while (this.fa > b + 1);
        return this.va[b + 1]
    },
    nB: function(a, b) {
        var c = this.i.Ef(a);
        if (null == c) return b ? !0 : !1;
        var d = this.i.Ic,
            e = 0,
            f, g, m, p, h, l, n = new O;
        for (f = 0; f < this.ob; f++) {
            for (; null == this.H[e];) e++;
            g = this.H[e];
            e++;
            m = g.o - g.ia;
            p = g.m - g.ja;
            h = m + g.K;
            l = p + g.J;
            this.ki >= m && this.ki < h && this.li >= p && this.li < l && 0 == (g.X & G.je) && (g.xa == q.Sd ? 0 == (g.F.W & w.wh) ? this.h.ba.sb(g.b.Ga).He(B.lh, 0, 1, 1).$s(this.ki - g.o, this.li - g.m, g.b.Ua, g.b.mb, g.b.nb) && n.add(g) :
                n.add(g) : n.add(g))
        }
        if (0 == n.size()) return b ? !0 : !1;
        if (0 == b) {
            do {
                for (e = 0; e < n.size() && (g = n.get(e), g != c); e++);
                e == n.size() && (d--, this.i.Ed());
                c = this.i.Ye()
            } while (null != c);
            return 0 != d
        }
        do {
            for (e = 0; e < n.size(); e++)
                if (g = n.get(e), g == c) return !1;
            c = this.i.Ye()
        } while (null != c);
        return !0
    },
    GB: function(a) {
        var b = !1,
            c = 0;
        if (0 != (a.ta & z.ek)) {
            if (null != a.F && a.F.RJ()) return;
            null != a.ha && a.ha.Bh(u.Al) && (c = 1)
        }
        0 == c && (b = !0);
        b ? (a.io = !1, this.lg(a.Vb)) : (null != a.F && (a.F.Ss(!1), a.X |= G.mh), null != a.A && (a.A.Fb(!1), a.A.VJ(a, S.RG, !1), a.b.$ = 0),
            0 != (c & 1) && (a.ha.Fq(u.Al), a.ha.vu()))
    },
    bv: function() {
        var a, b = new ba,
            c;
        for (c = 0; c < this.C.Nc; c++) {
            var d = this.C.tb[c],
                e = 0 != (d.Ma & X.Ht),
                f = 0 != (d.Ma & X.It),
                g = d.Xr,
                m;
            for (m = 0; m < g; m++) {
                a = this.C.zd.lB(d.Zr + m);
                a.Fr < q.Sd && (b.left = a.Yv, b.top = a.Zv);
                var p;
                p = new ia(this.h, b.left, b.top, a, null, 0);
                p.nd(0, d);
                e ? (p = new ia(this.h, this.C.rd + b.left, b.top, a, null, 0), p.nd(1, d), b.left + p.width > this.C.rd && (p = new ia(this.h, b.left - this.C.rd, b.top, a, null, 0), p.nd(4, d)), f && (p = new ia(this.h, b.left, this.C.wc + b.top, a, null, 0), p.nd(2, d), p =
                    new ia(this.h, this.C.rd + b.left, this.C.wc + b.top, a, null, 0), p.nd(3, d), b.top + p.height > this.C.wc && (p = new ia(this.h, b.left, b.top - this.C.wc, a, null, 0), p.nd(5, d)))) : f && (p = new ia(this.h, b.left, this.C.wc + b.top, a, null, 0), p.nd(2, d), b.top + p.height > this.C.wc && (p = new ia(this.h, b.left, b.top - this.C.wc, a, null, 0), p.nd(5, d)))
            }
        }
    },
    SL: function() {
        var a, b, c = this.Gj,
            d = this.Hj,
            e, f;
        for (a = 0; a < this.C.Nc; a++) {
            b = this.C.tb[a];
            e = c * b.Qj + b.Zq;
            f = d * b.Sj + b.$q;
            var g = 0 != (b.Ma & X.It);
            0 != (b.Ma & X.Ht) && (0 > e && (e = e % this.C.rd + this.C.rd), e > this.C.rd &&
                (e %= this.C.rd));
            g && (0 > f && (f = f % this.C.wc + this.C.wc), f > this.C.wc && (f %= this.C.wc));
            b.x = e;
            b.y = f;
            b.hc.x = -e + this.h.Yf;
            b.hc.y = -f + this.h.Zf;
            b.Nb.x = -e + this.h.Yf;
            b.Nb.y = -f + this.h.Zf;
            b.Qa.x = -e + this.h.Yf;
            b.Qa.y = -f + this.h.Zf
        }
        this.C.ej = this.Gj;
        this.C.fj = this.Hj
    },
    OJ: function() {
        var a;
        for (a = 0; a < this.C.Nc; a++) {
            var b = this.C.tb[a];
            b.Ma & X.Qp && b.sr()
        }
    },
    KD: function(a, b, c, d) {
        a -= Math.floor(this.kl / 2);
        b -= Math.floor(this.ll / 2); - 1 != c && c < this.C.Nc && (c = this.C.tb[c], 1 < c.Qj && (a -= this.ca, a /= c.Qj, a = n.Gd(this.ca + a)), 1 < c.Sj && (b -= this.ga,
            b /= c.Sj, b = n.Gd(this.ga + b)));
        0 > a && (a = 0);
        0 > b && (b = 0);
        c = a + this.kl;
        var e = b + this.ll;
        c > this.Od && (c = this.Od - this.kl, 0 > c && (c = 0), a = c);
        e > this.Pd && (e = this.Pd - this.ll, 0 > e && (e = 0), b = e);
        0 != (d & 1) && a != this.ca && (this.Gj = a, this.jl |= h.iu);
        0 != (d & 2) && b != this.ga && (this.Hj = b, this.jl |= h.iu)
    },
    vM: function(a, b) {
        var c = 0;
        this.Ms = a - this.ca;
        0 != this.Ms && c++;
        this.Ns = b - this.ga;
        0 != this.Ns && c++;
        var d, e;
        if (0 == c)
            for (e = 0; e < this.C.Nc; e++)
                if (d = this.C.tb[e], 0 != d.Zq || 0 != d.$q) {
                    c++;
                    break
                } e = this.ca;
        var f = this.ga,
            g = this.Ms,
            m = this.Ns;
        this.ca = a;
        this.Mm =
            a - h.kn;
        0 > this.Mm && (this.Mm = this.Nm);
        this.ga = b;
        this.Qm = b - h.ln;
        0 > this.Qm && (this.Qm = this.Rm);
        this.Km = a + this.kl + h.kn;
        this.Km > this.Od && (this.Km = this.Lm);
        this.Om = b + this.ll + h.ln;
        this.Om > this.Pd && (this.Om = this.Pm);
        var p = 0,
            l;
        for (l = 0; l < this.ob; l++) {
            for (; null == this.H[p];) p++;
            var n = this.H[p];
            p++;
            if (0 != c)
                if (0 != (n.ta & z.fH)) {
                    d = g;
                    var q = m;
                    null == n.A ? (n.o += d, n.m += q) : (d += n.o, q += n.m, n.A.V.Qb(d), n.A.V.Rb(q))
                } else if (d = n.be, d < this.C.Nc) {
                var k = e,
                    q = f,
                    r = a,
                    v = b;
                d = this.C.tb[d];
                0 != (d.Ma & X.KF) && (k *= d.Qj, r *= d.Qj);
                0 != (d.Ma & X.LF) &&
                    (q *= d.Sj, v *= d.Sj);
                k = n.o + k - r + g - d.Zq;
                d = n.m + q - v + m - d.$q;
                0 == (n.ta & z.vh) ? (n.o = k, n.m = d) : (n.A.V.Qb(k), n.A.V.Rb(d));
                n.bm()
            }
        }
    },
    doScroll: function() {
        if (0 != (this.jl & h.iu)) {
            this.jl = 0;
            if (this.C.ej != this.Gj || this.C.fj != this.Hj) this.SL(), this.vM(this.C.ej, this.C.fj);
            this.Gj = this.ca;
            this.Hj = this.ga
        }
    },
    Aq: function(a, b, c, d, e, f) {
        d = this.C.tb[d];
        var g = new ia(this.h, b - this.ca + d.x, c - this.ca + d.y, null, a, e);
        g.nd(0, d);
        !f || e != aa.mq && e != aa.fg || null == this.mi || (g.body = this.mi.XR(pHo.o - this.ca + d.x, pHo.m - this.ga + d.y, pHo.b.Ga, e));
        f =
            0 != (d.Ma & X.It);
        0 != (d.Ma & X.Ht) ? (g = new ia(this.h, this.C.rd + b - this.ca + d.x, c - this.ga + d.y, null, a, e), g.nd(1, d), b + g.width > this.C.rd && (g = new ia(this.h, b - this.ca + d.x - this.C.rd, c - this.ga + d.y, null, a, e), g.nd(4, d)), f && (g = new ia(this.h, b - this.ca + d.x, this.C.wc + c - this.ga + d.y, null, a, e), g.nd(2, d), g = new ia(this.h, this.C.rd + b - this.ca + d.x, this.C.wc + c - this.ga + d.y, null, a, e), g.nd(3, d), c + g.height > this.C.wc && (g = new ia(this.h, b - this.ca + d.x, c - this.ga + d.y - this.C.wc, null, a, e), g.nd(5, d)))) : f && (g = new ia(this.h, b - this.ca + d.x, this.C.wc +
            c - this.ga + d.y, null, a, e), g.nd(2, d), c + g.height > this.C.wc && (g = new ia(this.h, b - this.ca + d.x, c - this.ga + d.y - this.C.wc, null, a, e), g.nd(5, d)))
    },
    Yi: function() {
        return 0 != this.oi ? 0 : this.ki
    },
    Zi: function() {
        return 0 != this.oi ? 0 : this.li
    },
    VK: function(a) {
        0 > a ? this.i.Ie(-720902) : this.i.Ie(-655366)
    },
    TA: function(a) {
        var b, c;
        if (0 != this.ob)
            for (b = 0; b < this.Rg; b++)
                if ((c = this.H[b]) && c.Kb.uj == a) return this.iv = c.Kb.Hg - 1, c;
        return null
    },
    UA: function(a) {
        if (a && this.iv) {
            var b = a.Vb + 1;
            a = a.Kb.uj;
            for (var c;;) {
                c = this.H[b];
                if (null != c && c.Kb.uj ==
                    a) return this.iv--, c;
                b++
            }
        }
        this.iv = 0;
        return null
    }
};
bd.jn = 2;
M.TP = 15;
M.jH = 16;
M.wn = 128;
M.Td = 256;
M.pq = 512;
M.qq = 1024;
M.UP = 2048;
M.rq = 4096;
M.iH = 65535;
M.prototype = {
    AI: function(a) {
        this.ad = a.Oo;
        this.Md = a.Me;
        var b = a.oc;
        this.VC = b.oj;
        this.UC = a.Iw;
        this.TC = a.Jw;
        this.gs = b.Eg;
        this.$c = 0;
        this.lb = -1;
        this.Ld = M.iH;
        null != a.Kw && (this.uj = a.Kw);
        this.ym = Array(8);
        for (a = 0; 8 > a; a++) this.ym[a] = b.Fw[a]
    }
};
ca.PG = 0;
ca.$O = 1;
ca.cP = 2;
ca.aP = 3;
ca.XO = 4;
ca.YO = 5;
ca.ZO = 6;
ca.WO = 7;
ca.bP = 8;
ca.dP = 9;
ca.TO = 0;
ca.RO = 1;
ca.VO = 2;
ca.SO = 3;
ca.UO = 4;
ca.SM = 123456789;
ca.prototype = {
    uG: function() {
        m_currentAngle = 0
    },
    Y: function(a) {
        this.j = a;
        this.R = this.j.c
    },
    Hv: function() {},
    Fb: function() {},
    move: function() {
        return !1
    },
    setPosition: function() {},
    Qb: function() {},
    Rb: function() {},
    stop: function() {},
    Te: function() {},
    reverse: function() {},
    start: function() {},
    Be: function() {},
    Vf: function() {},
    Ae: function() {},
    sp: function() {},
    rp: function() {},
    ou: function() {
        return 0
    },
    kr: function() {
        return 0
    },
    gB: function() {
        return 0
    },
    hB: function() {
        return 0
    },
    Jn: function(a) {
        return this.j.A.Jn(this.j, a, 32)
    },
    Ni: function(a) {
        this.j.b.fe =
            a;
        null != this.j.ha && this.j.ha.De()
    },
    Ou: function() {
        this.j.c.fd++;
        this.j.A.V.Pe = this.j.c.fd;
        this.j.c.Le(this.j)
    },
    bo: function(a) {
        return this.j.c.Rc[a]
    },
    Kx: function() {}
};
u.Qd = 0;
u.qc = 1;
u.Ce = 2;
u.Hp = 3;
u.Al = 4;
u.HE = 5;
u.fy = 6;
u.ey = 7;
u.dy = 8;
u.cy = 9;
u.qt = 10;
u.Ip = 11;
u.TM = 12;
u.nM = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
u.prototype = {
    load: function(a) {
        var b = a.S,
            c = Array(32),
            d;
        for (d = 0; 32 > d; d++) c[d] = a.v();
        this.Ud = Array(32);
        this.Ah = Array(32);
        this.Li = Array(32);
        for (d = 0; 32 > d; d++) this.Ud[d] = null, this.Ah[d] = 0, this.Li[d] = 0, 0 != c[d] &&
            (this.Ud[d] = new cd, a.seek(b + c[d]), this.Ud[d].load(a))
    },
    kc: function(a) {
        var b;
        for (b = 0; 32 > b; b++) null != this.Ud[b] && this.Ud[b].kc(a)
    },
    gI: function(a) {
        var b, c, d, e, f;
        for (b = 0; 32 > b; b++)
            if (null == this.Ud[b]) {
                c = 0;
                for (e = b + 1; 32 > c; c++, e++)
                    if (e &= 31, null != this.Ud[e]) {
                        this.Ah[b] = e;
                        break
                    } d = 0;
                for (f = b - 1; 32 > d; d++, f--)
                    if (f &= 31, null != this.Ud[f]) {
                        this.Li[b] = f;
                        break
                    } e == f || c < d ? this.Ah[b] |= 64 : d < c && (this.Li[b] |= 64)
            } else 16 > a && 0 == u.nM[a] && (this.Ud[b].qu = this.Ud[b].pu)
    }
};
Ma.jE = [u.Hp, u.qc, u.Ce, 0, u.Ce, u.Qd, 0, 0, u.qc, u.Qd, 0, 0, u.Qd,
    u.qc, u.Ce, 0, u.Qd, 0, 0, 0, u.Qd, u.qc, u.Ce, 0, u.Qd, u.qc, u.Ce, 0, u.qc, u.Ce, u.Qd, 0, u.Qd, u.qc, u.Ce, 0, u.qc, u.Ce, u.Qd, 0, u.Qd, u.qc, u.Ce, 0, u.Qd, u.qc, u.Ce, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
Ma.prototype = {
    load: function(a) {
        var b = a.S;
        a.ma(2);
        this.xf = a.v();
        var c = Array(this.xf),
            d;
        for (d = 0; d < this.xf; d++) c[d] = a.v();
        this.yf = Array(this.xf);
        this.Ki = Array(this.xf);
        for (d = 0; d < this.xf; d++) this.yf[d] = null, this.Ki[d] = 0, 0 != c[d] && (this.yf[d] = new u, a.seek(b + c[d]), this.yf[d].load(a), this.Ki[d] = 1);
        for (a = 0; a < this.xf; a++)
            if (0 == this.Ki[a]) {
                b = !1;
                if (12 > a)
                    for (d = 0; 4 > d; d++)
                        if (0 != this.Ki[Ma.jE[4 * a + d]]) {
                            this.yf[a] = this.yf[Ma.jE[4 * a + d]];
                            b = !0;
                            break
                        } if (0 == b)
                    for (d = 0; d < this.xf; d++)
                        if (0 != this.Ki[d]) {
                            this.yf[a] = this.yf[d];
                            break
                        }
            } else this.yf[a].gI(a)
    },
    kc: function(a) {
        var b;
        for (b = 0; b < this.xf; b++) 0 != this.Ki[b] && this.yf[b].kc(a)
    }
};
cd.prototype = {
    load: function(a) {
        this.qu = a.fb();
        this.pu = a.fb();
        this.oz = a.v();
        this.pz = a.v();
        this.Ql = a.v();
        this.mk = Array(this.Ql);
        var b;
        for (b = 0; b < this.Ql; b++) this.mk[b] = a.v()
    },
    kc: function(a) {
        var b;
        for (b = 0; b < this.Ql; b++)
            if (null !=
                a) {
                var c = a.Ih(this.mk[b]); - 1 != c && (this.mk[b] = c)
            }
    }
};
Ia.uu = [u.Qd, u.qc, u.Ce, u.HE, u.fy, u.ey, u.dy, u.cy, u.qt, u.Ip, 12, 13, 14, 15, -1];
Ia.prototype = {
    Y: function(a) {
        this.a = a;
        this.Fm = 0;
        this.FB(u.qc);
        if (this.Bh(u.Hp)) this.Fm = 1, this.Fq(u.Hp), this.vu(), this.Ni();
        else {
            for (a = 0; 0 <= Ia.uu[a] && !this.Bh(Ia.uu[a]); a++);
            0 > Ia.uu[a] && this.Bh(u.Al) && (this.Fm = 2, this.Fq(u.Al), this.vu(), this.Ni())
        }
    },
    FB: function(a) {
        this.a.b.fe = a;
        this.nx = !1;
        this.Mg = this.Zo = this.Dm = this.zj = this.ws = this.Lg = 0;
        this.xs = this.yj = this.cl = -1;
        this.$o = this.we =
            null;
        this.Ni()
    },
    De: function() {
        switch (this.Fm) {
            case 0:
                return this.Ni();
            case 1:
                this.dI();
                break;
            case 2:
                this.eI()
        }
        return !1
    },
    Ni: function() {
        var a = this.a.o;
        this.a.b.Aj = a;
        a -= this.a.ia;
        this.a.b.qx = a;
        a += this.a.K;
        this.a.b.rx = a;
        a = this.a.m;
        this.a.b.Bj = a;
        a -= this.a.ja;
        this.a.b.sx = a;
        a += this.a.J;
        this.a.b.tx = a;
        this.a.b.zs = this.a.b.Ga;
        this.a.b.ys = this.a.b.Ua;
        return this.Mi(1)
    },
    Mi: function(a) {
        var b = this.a.O,
            c = this.a.b.$,
            d = this.a.b.fe;
        0 != this.zj && (c = this.zj - 1);
        d == u.qc && (0 == c && (d = u.Qd), 75 <= c && (d = u.Ce));
        0 != this.Lg && (d =
            this.Lg - 1);
        d != this.cl && (this.cl = d, d >= b.mj.xf && (d = b.mj.xf - 1), b = b.mj.yf[d], b != this.we && (this.we = b, this.vs = -1, this.Mg = 0, 0 == (this.a.ta & z.eH) && (this.Zo = 0)));
        var e = this.a.b.Sa % 32,
            b = !1;
        0 != this.ws && (e = this.ws - 1);
        if (this.vs != e && (this.vs = e, d = this.we.Ud[e], null == d ? 0 != (this.we.Li[e] & 64) ? e = this.we.Li[e] & 63 : 0 != (this.we.Ah[e] & 64) ? e = this.we.Ah[e] & 63 : (d = e, 0 > this.xs ? e = this.we.Ah[e] & 63 : (e -= this.xs, e = 15 < (e & 31) ? this.we.Ah[d] & 63 : this.we.Li[d] & 63)) : this.xs = e, d = this.we.Ud[e], null != this.we.Ud[0] && 0 != (this.a.O.oj & z.aH) && (this.a.b.Ua =
                360 * this.vs / 32, d = this.we.Ud[0], this.$o = null, b = !0), this.$o != d)) {
            this.$o = d;
            this.dl = d.oz;
            this.nD = d.pz;
            var e = d.qu,
                f = d.pu;
            if (e != this.yj || f != this.Em) this.yj = e, this.Em = f, this.mD = f - e, this.Cm = e, this.mx = -1;
            this.kf = d.Ql;
            0 != this.Dm && this.Dm - 1 >= this.kf && (this.Dm = 0);
            this.Mg >= this.kf && (this.Mg = 0);
            d = d.mk[this.Mg];
            0 == this.nx && (this.a.b.Ga = d, d = this.a.c.h.ba.Fk(d, this.a.b.Ua, this.a.b.mb, this.a.b.nb), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ia = d.Ja, this.a.ja = d.Ha, this.a.Cv = d.eh, this.a.Dv = d.fh), this.a.b.M = !0, this.a.b.Ra = !0);
            if (1 == this.kf) {
                0 == this.yj && (this.kf = 0);
                d = this.a.b.Ga;
                if (0 == d) return !1;
                d = this.a.c.h.ba.Fk(d, this.a.b.Ua, this.a.b.mb, this.a.b.nb);
                null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ia = d.Ja, this.a.ja = d.Ha, this.a.Cv = d.eh, this.a.Dv = d.fh);
                return !1
            }
        }
        if (0 == a && 0 == this.Dm || 0 == b && 0 == this.kf) return !1;
        a = this.mD;
        c != this.mx && (this.mx = c, 0 == a ? (this.Cm = this.yj, 0 != this.zj && (this.Cm = this.zj - 1)) : (d = this.a.b.eb - this.a.b.gi, 0 == d ? 0 != this.zj ? (a = a * c / 100 + this.yj, a > this.Em && (a = this.Em)) : (a /= 2, a += this.yj) :
            (a = a * c / d + this.yj, a > this.Em && (a = this.Em)), this.Cm = a));
        d = this.$o;
        a = this.Dm;
        if (0 == a) {
            if (0 == this.Cm || this.nx) return !1;
            c = this.Zo;
            a = this.Mg;
            e = this.Cm;
            0 != (this.a.c.C.Wb & E.Vc) && (e = Math.round(e * this.a.c.Cc));
            for (c += e; 100 < c;)
                if (c -= 100, a++, a >= this.kf && (a = this.nD, 0 != this.dl && (this.dl--, 0 == this.dl))) {
                    this.Mg = this.kf - 1;
                    this.kf = 0;
                    0 != this.Lg && (this.zj = this.ws = this.Lg = 0);
                    this.Mg < d.Ql && (d = d.mk[this.Mg], d != this.a.b.Ga && (this.a.b.Ga = d, this.a.b.M = !0, this.a.b.Ra = !0));
                    this.Zo = c;
                    if (0 != (this.a.c.Qc & h.Jt)) return !1;
                    b && (this.a.b.M = !0, this.a.b.Ra = !0, d = this.a.c.h.ba.Fk(this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ia = d.Ja, this.a.ja = d.Ha, this.a.Cv = d.eh, this.a.Dv = d.fh));
                    c = -131072;
                    c |= this.a.xa & 65535;
                    this.a.c.i.Dc = this.a.ha.cl;
                    return this.a.c.i.qd(this.a, c)
                } this.Zo = c
        } else a--;
        this.Mg = a;
        this.a.b.M = !0;
        this.a.b.Ra = !0;
        d = d.mk[a];
        if (this.a.b.Ga != d || this.oD != this.a.b.Ua) this.a.b.Ga = d, this.oD = this.a.b.Ua, 0 <= d && (d = this.a.c.h.ba.Fk(d, this.a.b.Ua, this.a.b.mb, this.a.b.nb), null != d && (this.a.K =
            d.width, this.a.J = d.height, this.a.ia = d.Ja, this.a.ja = d.Ha, this.a.Cv = d.eh, this.a.Dv = d.fh));
        return !1
    },
    Bh: function(a) {
        return 0 == this.a.O.mj.Ki[a] ? !1 : !0
    },
    vu: function() {
        0 == this.dl && (this.dl = 1)
    },
    Fq: function(a) {
        this.Lg = a + 1;
        this.Mi(0)
    },
    fI: function() {
        this.Lg = 0;
        this.Mi(0)
    },
    cI: function(a) {
        0 > a && (a = 0);
        100 < a && (a = 100);
        this.zj = a + 1;
        this.Mi(0)
    },
    dI: function() {
        this.Mi(1);
        this.Lg != u.Hp + 1 && (this.Bh(u.Qd) || this.Bh(u.qc) || this.Bh(u.Ce) ? (this.Fm = 0, this.fI()) : (this.Fm = 2, this.a.c.GB(this.a)))
    },
    eI: function() {
        0 == (this.a.X & G.Ci) &&
            (this.Mi(1), this.Lg != u.Al + 1 && this.a.c.lg(this.a.Vb))
    }
};
dd.prototype = {
    Yu: function() {
        var a = this.app.Dj + "M" + n.Vn(this.handle, "png"),
            b = new Image;
        this.ba.Lb[this.handle] = b;
        var c = this;
        b.onload = function() {
            c.app.Vi(c)
        };
        b.onerror = function() {
            c.app.Vi(c)
        };
        b.src = a
    }
};
ed.prototype = {
    di: function(a) {
        this.file = a;
        this.Hb = this.file.v();
        this.Vk = Array(this.Hb);
        a = this.file.v();
        var b, c, d = new ha;
        for (b = 0; b < a; b++) c = this.file.S, d.im(this.file), this.Vk[d.handle] = c;
        this.Ta = Array(this.Hb);
        for (b = 0; b < this.Hb; b++) this.Ta[b] = 0;
        this.Fa =
            null;
        this.kj = this.Hb;
        this.ff = 0;
        this.images = null
    },
    sb: function(a) {
        return 0 <= a && a < this.kj && -1 != this.Fa[a] ? this.images[this.Fa[a]] : null
    },
    qp: function() {
        var a;
        for (a = 0; a < this.Hb; a++) this.Vk[a] && (this.Ta[a] = 1)
    },
    pf: function() {
        if (0 == (this.app.Ma & l.xi) && 0 == (this.app.Ma & l.pt)) {
            var a;
            for (a = 0; a < this.Hb; a++) this.Ta[a] = 0
        }
        this.bi = null
    },
    Mj: function(a) {
        this.Ta[a]++
    },
    Ih: function(a) {
        this.Mj(a);
        return -1
    },
    PB: function(a) {
        null == this.Lb[a] && (null != this.bi && a < this.bi.length && null != this.bi[a] ? this.Lb[a] = this.bi[a] : (this.Lb[a] =
            new dd(this, a), this.app.yn(this.Lb[a])))
    },
    load: function(a) {
        var b;
        if (0 < this.app.de)
            if (null == this.Lb) {
                if (this.Lb = Array(this.app.de), this.app.Ma & l.xi)
                    for (b = 0; b < this.app.de; b++) this.app.Lb[b] && this.PB(b)
            } else if (0 == (this.app.Ma & l.xi)) {
            this.bi = Array(this.app.de);
            for (b = 0; b < this.app.de; b++) this.bi[b] = this.Lb[b];
            this.Lb = Array(this.app.de);
            for (b = 0; b < this.app.de; b++) this.Lb[b] = null
        }
        for (b = this.ff = 0; b < this.Hb; b++) 0 != this.Ta[b] && this.ff++;
        b = Array(this.ff);
        var c = 0,
            d;
        for (d = 0; d < this.Hb; d++)
            if (0 != this.Ta[d]) {
                if (null !=
                    this.images && -1 != this.Fa[d] && null != this.images[this.Fa[d]]) {
                    if (b[c] = this.images[this.Fa[d]], b[c].Ta = this.Ta[d], null != this.Lb && null != this.bi) {
                        var e = b[c].Bb;
                        0 < e && (this.Lb[e] = this.bi[e])
                    }
                } else 0 != this.Vk[d] && (b[c] = new ha, a.seek(this.Vk[d]), b[c].load(this.app), b[c].Ta = this.Ta[d]);
                c++
            } this.images = b;
        this.Fa = Array(this.Hb);
        for (b = 0; b < this.Hb; b++) this.Fa[b] = -1;
        for (b = 0; b < this.ff; b++) this.images[b] && (this.Fa[this.images[b].handle] = b);
        this.kj = this.Hb
    },
    bw: function(a) {
        var b;
        for (b = 0; b < a.length; b++)
            if (0 <= a[b] && a[b] <
                this.kj && 0 != this.Vk[a[b]] && null == this.sb(a[b])) {
                var c, d = -1;
                for (c = 0; c < this.ff; c++)
                    if (null == this.images[c]) {
                        d = c;
                        break
                    } if (-1 == d) {
                    var e = Array(this.ff + 10);
                    for (c = 0; c < this.ff; c++) e[c] = this.images[c];
                    for (; c < this.ff + 10; c++) e[c] = null;
                    d = this.ff;
                    this.ff += 10;
                    this.images = e
                }
                this.Fa[a[b]] = d;
                this.images[d] = new ha;
                this.images[d].Ta = 1;
                this.file.seek(this.Vk[a[b]]);
                this.images[d].load(this.app)
            }
    },
    Fk: function(a, b, c, d) {
        var e;
        null == this.ci && (this.ci = new ha);
        e = this.sb(a);
        if (null != e) {
            a = e.width;
            var f = e.height,
                g = e.Ja,
                m = e.Ha,
                p = e.eh;
            e = e.fh;
            0 == b ? (1 != c && (g *= c, p *= c, a *= c), 1 != d && (m *= d, e *= d, f *= d)) : (1 != c && (g *= c, p *= c, a *= c), 1 != d && (m *= d, e *= d, f *= d), null == this.fi && (this.fi = new ba), null == this.Kk && (this.Kk = new ta), null == this.nk && (this.nk = new ta), this.Kk.x = g, this.Kk.y = m, this.nk.x = p, this.nk.y = e, this.fi.left = this.fi.top = 0, this.fi.right = a, this.fi.bottom = f, this.YI(this.fi, this.Kk, this.nk, b), a = this.fi.right, f = this.fi.bottom, g = this.Kk.x, m = this.Kk.y, p = this.nk.x, e = this.nk.y);
            this.ci.width = a;
            this.ci.height = f;
            this.ci.Ja = g;
            this.ci.Ha = m;
            this.ci.eh =
                p;
            this.ci.fh = e;
            return this.ci
        }
        return e
    },
    YI: function(a, b, c, d) {
        var e, f, g;
        90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
        var m, p, h, l, n;
        null == b ? m = p = n = f = 0 : (h = -b.x * d, l = -b.x * g, n = -b.y * d, f = -b.y * g, m = h + f, p = n - l);
        e = null == b ? a.right : a.right - b.x;
        h = e * d;
        l = e * g;
        e = h + f;
        n -= l;
        var k;
        f = null == b ? a.bottom : a.bottom - b.y;
        k = h + f * g;
        f = f * d - l;
        var q, r;
        q = m + k - e;
        r = p + f - n;
        h = Math.min(m, Math.min(e, Math.min(k, q)));
        l = Math.min(p, Math.min(n, Math.min(f, r)));
        m = Math.max(m, Math.max(e, Math.max(k, q)));
        p = Math.max(p, Math.max(n, Math.max(f, r)));
        null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - h, c.y = f * d - e * g - l);
        null != b && (b.x = -h, b.y = -l);
        a.right = m - h;
        a.bottom = p - l
    }
};
ha.JK = 10;
ha.kg = function(a, b) {
    var c = new ha;
    c.app = a;
    c.Ab = new Image;
    c.Ab.onload = function() {
        c.app.Kh++;
        c.width = c.Ab.width;
        c.height = c.Ab.height
    };
    a.Lh++;
    a.yg = !0;
    c.Ab.src = a.Dj + b;
    return c
};
ha.prototype = {
    im: function(a) {
        this.handle = a.v();
        a.ma(12)
    },
    Yu: function() {
        this.Ab = new Image;
        var a = this;
        this.Ab.onload = function() {
            a.app.Vi(a)
        };
        this.Ab.onerror =
            function() {
                a.app.Vi(a)
            };
        this.Ab.src = this.app.Dj + n.Vn(this.handle, "png")
    },
    load: function(a) {
        this.app = a;
        this.handle = a.file.v();
        this.width = a.file.v();
        this.height = a.file.v();
        this.Ja = a.file.Z();
        this.Ha = a.file.Z();
        this.eh = a.file.Z();
        this.fh = a.file.Z();
        this.Bb = 0;
        this.Ab = null;
        null != this.app.frame.xo ? (this.Bb = this.app.frame.xo[this.handle], 0 != this.Bb ? (this.app.ba.PB(this.Bb), this.td = this.app.frame.td[this.handle], this.ud = this.app.frame.ud[this.handle]) : this.app.yn(this)) : this.app.yn(this)
    },
    createElement: function() {
        var a =
            document.createElement("div");
        a.style.width = this.width + "px";
        a.style.height = this.height + "px";
        a.style.backgroundRepeat = "no-repeat";
        0 == this.Bb ? a.style.backgroundImage = "url('" + this.Ab.src + "')" : (a.style.backgroundPosition = "-" + this.td + "px -" + this.ud + "px", a.style.backgroundImage = "url('" + this.app.Dj + "M" + n.Vn(this.Bb, "png") + "')");
        return a
    },
    He: function(a, b, c, d) {
        if (0 == (a & B.El)) {
            null == this.Ag && (this.Ag = new B, this.Ag.Tu(this.app, this, a));
            if (0 == b && 1 == c && 1 == d) return this.Ag;
            null == this.Qh && (this.Qh = new O);
            var e,
                f = 2147483647,
                g = -1;
            for (e = 0; e < this.Qh.size(); e++) {
                a = this.Qh.get(e);
                if (b == a.angle && c == a.ic && d == a.jc) return a.P;
                a.Vx < f && (f = a.Vx, g = e)
            }
            this.Qh.size() < this.JK && (g = -1);
            a = new Ve;
            a.P = new B;
            a.P.HI(this.Ag, b, c, d);
            a.angle = b;
            a.ic = c;
            a.jc = d;
            a.Vx = this.app.jd;
            0 > g ? this.Qh.add(a) : this.Qh.set(g, a);
            return a.P
        }
        null == this.km && (null == this.Ag && (this.Ag = new B, this.Ag.Tu(this.app, this, 0)), this.km = new B, this.km.Tu(this.app, this, a));
        return this.km
    }
};
fd.prototype = {
    di: function(a) {
        var b = a.w(),
            c;
        this.ce = 0;
        var d = a.S,
            e = new za;
        for (c =
            0; c < b; c++) e.im(a), this.ce = Math.max(this.ce, e.handle + 1);
        a.seek(d);
        this.es = Array(this.ce);
        for (c = 0; c < b; c++) d = a.S, e.im(a), this.es[e.handle] = d;
        this.Ta = Array(this.ce);
        for (c = 0; c < this.ce; c++) this.Ta[c] = 0;
        this.Fa = null;
        this.Bg = this.ce;
        this.Rh = 0;
        this.fonts = null
    },
    load: function(a) {
        var b;
        for (b = this.Rh = 0; b < this.ce; b++) 0 != this.Ta[b] && this.Rh++;
        b = Array(this.Rh);
        var c = 0,
            d;
        for (d = 0; d < this.ce; d++) 0 != this.Ta[d] && (null != this.fonts && -1 != this.Fa[d] && null != this.fonts[this.Fa[d]] ? b[c] = this.fonts[this.Fa[d]] : (b[c] = new za, a.seek(this.es[d]),
            b[c].load(a)), b[c].Ta = this.Ta[d], c++);
        this.fonts = b;
        this.Fa = Array(this.ce);
        for (b = 0; b < this.ce; b++) this.Fa[b] = -1;
        for (b = 0; b < this.Rh; b++) this.Fa[this.fonts[b].handle] = b;
        this.Bg = this.ce
    },
    Gf: function(a) {
        return -1 == a ? this.Ho : 0 <= a && a < this.Bg && -1 != this.Fa[a] ? this.fonts[this.Fa[a]] : null
    },
    jr: function(a) {
        return this.Gf(a).uJ()
    },
    pf: function() {
        if (0 == (this.app.jR & l.xi) && 0 == (this.app.Ma & l.pt)) {
            var a;
            for (a = 0; a < this.ce; a++) this.Ta[a] = 0
        }
    },
    qp: function() {
        var a;
        for (a = 0; a < this.ce; a++) this.es[a] && (this.Ta[a] = 1)
    },
    Mj: function(a) {
        -1 ==
            a ? null == this.Ho && (this.Ho = new za, this.Ho.Sq()) : this.Ta[a]++
    },
    Ih: function(a) {
        this.Mj(a);
        return -1
    },
    Dq: function(a) {
        var b, c;
        for (c = 0; c < this.Rh && (null == this.fonts[c] || this.fonts[c].Gb != a.Gb || this.fonts[c].se != a.se || this.fonts[c].re != a.re || this.fonts[c].qe != a.qe); c++);
        if (c < this.Rh) return this.fonts[c].handle;
        c = -1;
        for (b = this.ce; b < this.Bg && -1 != this.Fa[b]; b++);
        if (-1 == c) {
            var d = Array(this.Bg + 10);
            for (b = 0; b < this.Bg; b++) d[b] = this.Fa[b];
            for (; b < this.Bg + 10; b++) d[b] = -1;
            c = this.Bg;
            this.Bg += 10;
            this.Fa = d
        }
        d = -1;
        for (b = 0; b <
            this.Rh; b++)
            if (null == this.fonts[b]) {
                d = b;
                break
            } - 1 == d && (d = this.Rh, this.fonts.push(null));
        this.Fa[c] = d;
        this.fonts[d] = new za;
        this.fonts[d].handle = c;
        this.fonts[d].Gb = a.Gb;
        this.fonts[d].se = a.se;
        this.fonts[d].re = a.re;
        this.fonts[d].qe = a.qe;
        return c
    }
};
za.prototype = {
    im: function(a) {
        this.handle = a.w();
        0 == a.od ? a.ma(72) : a.ma(104)
    },
    load: function(a) {
        this.handle = a.w();
        var b = a.S;
        a.ma(12);
        this.Gb = a.w();
        0 > this.Gb && (this.Gb = -this.Gb);
        a.w();
        a.w();
        a.w();
        this.se = a.w();
        this.re = a.fb();
        a.fb();
        a.fb();
        a.fb();
        a.fb();
        a.fb();
        a.fb();
        a.fb();
        this.qe = a.ub();
        0 == a.od ? a.seek(b + 72) : a.seek(b + 104)
    },
    uJ: function() {
        var a = new Sa;
        a.Gb = this.Gb;
        a.se = this.se;
        a.re = this.re;
        a.qe = this.qe;
        return a
    },
    Sq: function() {
        this.qe = "Arial";
        this.Gb = 13;
        this.se = 400;
        this.re = 0
    },
    Ze: function() {
        return this.Gb + Math.ceil(this.Gb / 8)
    },
    qg: function() {
        if (null == this.font) {
            this.font = this.re ? "italic " : "normal ";
            var a = 100 * Math.floor(this.se / 100),
                a = Math.max(a, 100),
                a = Math.min(a, 900);
            this.font += a + " ";
            this.font += this.Gb + "px ";
            this.font += this.qe
        }
        return this.font
    }
};
gd.prototype = {
    di: function(a) {
        this.file =
            a;
        this.Hb = this.file.v();
        this.fs = Array(this.Hb);
        this.Ta = Array(this.Hb);
        this.Fa = Array(this.Hb);
        for (a = 0; a < this.Hb; a++) this.Ta[a] = 0, this.Fa[a] = -1;
        var b = this.file.v(),
            c = new Ua(this.app),
            d;
        for (a = 0; a < b; a++) d = this.file.S, c.im(), this.fs[c.handle] = d;
        this.kj = this.Hb;
        this.Fo = 0;
        this.ul = null
    },
    AJ: function(a) {
        return 0 <= a && a < this.kj && -1 != this.Fa[a] ? this.ul[this.Fa[a]] : null
    },
    pf: function() {
        if (0 == (this.app.Ma & l.xi) && 0 == (this.app.Ma & l.pt)) {
            var a;
            for (a = 0; a < this.Hb; a++) this.Ta[a] = 0
        }
    },
    qp: function() {
        var a;
        for (a = 0; a < this.Hb; a++) this.fs[a] &&
            (this.Ta[a] = 1)
    },
    Mj: function(a) {
        this.Ta[a]++
    },
    Ih: function(a) {
        this.Mj(a);
        return -1
    },
    load: function() {
        var a;
        for (a = this.Fo = 0; a < this.Hb; a++) 0 != this.Ta[a] && this.Fo++;
        a = Array(this.Fo);
        var b = 0,
            c;
        for (c = 0; c < this.Hb; c++) 0 != this.Ta[c] && (null != this.ul && -1 != this.Fa[c] && null != this.ul[this.Fa[c]] ? a[b] = this.ul[this.Fa[c]] : (a[b] = new Ua(this.app), this.file.seek(this.fs[c]), a[b].load()), a[b].Ta = this.Ta[c], b++);
        this.ul = a;
        this.Fa = Array(this.Hb);
        for (a = 0; a < this.Hb; a++) this.Fa[a] = -1;
        for (a = 0; a < this.Fo; a++) this.Fa[this.ul[a].handle] =
            a;
        this.kj = this.Hb;
        this.pf()
    }
};
Ua.prototype = {
    im: function() {
        this.handle = this.file.v();
        this.file.ma(5);
        var a = this.file.v();
        0 == this.file.od ? this.file.ma(a) : this.file.ma(2 * a)
    },
    Yu: function() {
        var a, b = this.Xc.pc.ex & this.type;
        0 == b && (b = this.Xc.pc.kw & this.type);
        for (a = 0; 4 > a && !(b & 1 << a); a++);
        if (4 > a) {
            b = "";
            switch (a) {
                case 0:
                    b = "ogg";
                    break;
                case 1:
                    b = "m4a";
                    break;
                case 2:
                    b = "mp3";
                    break;
                case 3:
                    b = "wav"
            }
            if (this.context) {
                var c = this,
                    d = new XMLHttpRequest;
                d.open("GET", this.Xc.Dj + n.Vn(this.handle, b), !0);
                d.responseType = "arraybuffer";
                d.addEventListener("load", function() {
                    c.response = d.response;
                    c.Xc.pc.XH(c)
                });
                d.send()
            } else this.wb = new Audio, this.wb.UR = "auto", c = this, this.wb.addEventListener("loadeddata", function(a) {
                c.Xc.Vi(c);
                c.wb.removeEventListener("loadeddata", arguments.callee, !1)
            }, !1), this.wb.addEventListener("error", function() {
                c.Xc.Vi(c);
                c.wb = null
            }, !1), this.wb.src = this.Xc.Dj + n.Vn(this.handle, b), this.wb.load(), this.wb.autoplay = !1
        } else this.Xc.Vi(this)
    },
    load: function() {
        this.handle = this.file.v();
        this.type = this.file.fb();
        this.Hn =
            this.frequency = this.file.w();
        var a = this.file.v();
        this.name = this.file.ub(a);
        this.wb = null;
        this.Xc.yn(this)
    },
    CK: function() {
        this.handle = 9999;
        this.type = 4;
        this.Hn = this.frequency = 4E4;
        this.name = "";
        this.wb = null;
        this.Xc.yn(this)
    },
    Zk: function(a, b) {
        a || (a = 0);
        b || (b = this.frequency);
        if (this.wb) this.wb.volume = this.volume / 100, this.Hn = b, this.wb.playbackRate = b / this.frequency, this.wb.duration && (this.wb.currentTime = 0), this.wb.play();
        else if (this.buffer) {
            this.source = this.context.createBufferSource();
            this.source.buffer =
                this.buffer;
            0 == this.Vl ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
            a || (a = 0);
            b || (b = this.frequency);
            this.Hn = b;
            this.source.playbackRate.value = b / this.frequency;
            this.startTime = Date.now() - a;
            "undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
            var c = this;
            this.source.onended = function() {
                c.uz = !0
            }
        }
        this.Ch = !1;
        this.Qi = !0;
        this.uz = !1
    },
    play: function(a, b, c) {
        this.Sh = a;
        0 == this.Sh && (this.Sh = 1E7);
        this.volume = c;
        this.Zk()
    },
    stop: function() {
        this.wb ? this.wb.pause() : this.source && this.Qi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
        this.Qi = this.Cn = !1
    },
    VD: function(a) {
        this.volume = a;
        this.wb ? this.wb.volume = a / 100 : this.source && (this.gain ? this.gain.gain.value = a / 100 : this.source.gain.value = a / 100)
    },
    pause: function() {
        this.Ch || (this.wb ? this.wb.pause() :
            this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.aL = Date.now() - this.startTime), this.Ch = !0)
    },
    EJ: function() {
        this.Ch ? this.Hq = !1 : (this.pause(), this.Hq = !0)
    },
    resume: function() {
        this.Ch && (this.wb ? this.wb.play() : this.source && this.Zk(this.aL), this.Ch = !1)
    },
    FJ: function() {
        this.Hq && (this.resume(), this.Hq = !1)
    },
    bK: function() {
        return this.Ch
    },
    cK: function() {
        return (this.wb || this.source) && this.Qi ? !this.Ch : !1
    },
    setPosition: function(a) {
        this.wb ? this.wb.currentTime =
            a / 1E3 : this.source && (this.Qi && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.Zk(a))
    },
    mI: function() {
        if (1 == this.Qi && 0 == this.Ch)
            if (this.wb) {
                if (this.wb.ended) {
                    if (0 < this.Sh && (this.Sh--, 0 < this.Sh)) return this.Zk(0, this.Hn), !1;
                    this.Qi = this.Cn = !1;
                    return !0
                }
            } else if (this.source && (3 == this.source.playbackState || this.uz)) {
            if (0 < this.Sh && (this.Sh--, 0 < this.Sh)) return this.Zk(0, this.Hn), !1;
            this.Qi = this.Cn = !1;
            return !0
        }
        return !1
    }
};
hd.prototype = {
    IE: function(a) {
        this.gL[this.position++] =
            a
    }
};
R.Ai = 80;
R.kH = 256;
R.VQ = function(a, b) {
    var c = b >> 5,
        d = 1 << (b & 31),
        e = 0 != (a[c] & d);
    a[c] |= d;
    return e
};
R.eJ = function(a) {
    return a.ac + 0
};
R.$f = function(a) {
    a &= 65535;
    return 0 != (a & 32768) ? a - 65536 : a
};
R.Dt = function(a) {
    return a >> 16
};
R.hr = function(a) {
    return a & 4294901760
};
R.prototype = {
    Ef: function(a) {
        var b;
        this.Ic = 0;
        this.Ng = null;
        this.Og = -1;
        if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.kL(a);
        var c = this.s.T[a];
        if (c.$c == this.Yb) {
            if (0 != (c.cb & 2147483648)) return null;
            b = this.s.H[c.cb];
            this.ji = null;
            this.gl = c;
            this.qf = b;
            this.ep =
                a
        } else {
            c.$c = this.Yb;
            if (this.Pg) return c.cb = -1, c.wd = 0, null;
            c.cb = c.lb;
            if (0 != (c.lb & 2147483648)) return c.wd = 0, null;
            var d = c.lb;
            do b = this.s.H[d], d = b.bc, b.lc = d; while (0 == (d & 2147483648));
            b = this.s.H[c.lb];
            this.ji = null;
            this.gl = c;
            this.qf = b;
            this.ep = a;
            c.wd = c.Hg
        }
        this.Ic = c.wd;
        return b
    },
    kL: function(a) {
        var b, c, d = 0,
            e = 0;
        for (a = this.Ob[a & 32767]; e < a.Aa.length;) {
            c = a.Aa[e + 1];
            c = this.s.T[c];
            if (c.$c == this.Yb) b = 0, 0 == (c.cb & 2147483648) && (b = c.wd, null == this.Ng && (this.Ng = a, this.Og = e));
            else if (b = 0, c.$c = this.Yb, this.Pg) c.cb = -1, c.wd =
                0;
            else if (c.cb = c.lb, 0 != (c.lb & 2147483648)) c.wd = 0;
            else {
                null == this.Ng && (this.Ng = a, this.Og = e);
                b = c.lb;
                do b = this.s.H[b], b = b.lc = b.bc; while (0 == (b & 2147483648));
                b = c.wd = c.Hg
            }
            d += b;
            e += 2
        }
        a = this.Ng;
        return null != a ? (c = this.s.T[a.Aa[this.Og + 1]], this.ji = null, this.gl = c, this.qf = b = this.s.H[c.cb], this.ep = a.Aa[this.Og + 1], this.Ic = d, b) : null
    },
    Ye: function() {
        var a = this.qf,
            b;
        if (null == a && (b = this.s.T[this.ep], 0 == (b.cb & 2147483648))) return a = this.s.H[b.cb], this.ji = null, this.gl = b, this.qf = a;
        if (null != a && 0 == (a.lc & 2147483648)) return this.ji =
            a, this.gl = null, this.qf = a = this.s.H[a.lc];
        if (null == this.Ng) return null;
        do {
            this.Og += 2;
            if (this.Og >= this.Ng.Aa.length) return null;
            b = this.s.T[this.Ng.Aa[this.Og + 1]]
        } while (0 != (b.cb & 2147483648));
        this.ji = null;
        this.gl = b;
        this.qf = a = this.s.H[b.cb];
        this.ep = this.Ng.Aa[this.Og + 1];
        return a
    },
    fJ: function(a) {
        a = this.Ob[a & 32767];
        for (var b = 0, c; b < a.Aa.length;) c = this.s.T[a.Aa[b + 1]], c.$c != this.Yb && (c.$c = this.Yb, c.wd = 0, c.cb = -1), b += 2
    },
    Ed: function() {
        --this.qf.Kb.wd;
        null != this.ji ? (this.ji.lc = this.qf.lc, this.qf = this.ji) : (this.gl.cb =
            this.qf.lc, this.qf = null)
    },
    am: function(a) {
        var b = a.Kb;
        if (b.$c != this.Yb) b.$c = this.Yb, b.cb = a.Vb, b.wd = 1, a.lc = -1;
        else {
            var c = b.cb;
            if (0 != (c & 2147483648)) b.cb = a.Vb, b.wd += 1, a.lc = -1;
            else {
                do {
                    if (a.Vb == c) return;
                    b = this.s.H[c];
                    c = b.lc
                } while (0 == (c & 2147483648));
                b.lc = a.Vb;
                a.lc = -1;
                a.Kb.wd += 1
            }
        }
    },
    sA: function(a) {
        a = this.s.T[a];
        a.$c = this.Yb;
        a.cb = -1;
        a.wd = 0
    },
    hJ: function(a, b) {
        if (0 == (a & 32768)) this.sA(a);
        else {
            if (32767 == (a & 32767)) return;
            var c = this.Ob[a & 32767],
                d;
            for (d = 0; d < c.Aa.length; d += 2) this.sA(c.Aa[d + 1])
        }
        b.lc = -1;
        b.Kb.cb = b.Vb;
        b.Kb.wd =
            1;
        b.Kb.$c = this.Yb
    },
    PA: function() {
        var a, b, c;
        for (b = 0; b < this.s.xe; b++)
            if (c = this.s.T[b], c.$c == this.Yb) {
                if (c.Nw != this.Hs)
                    for (c.Nw = this.Hs, a = c.lb; 0 == (a & 2147483648);) a = this.s.H[a], a.Ev = 0, a = a.bc;
                for (a = c.cb; 0 == (a & 2147483648);) a = this.s.H[a], a.Ev = 1, a = a.lc
            }
    },
    gJ: function() {
        var a, b, c, d, e;
        for (d = 0; d < this.s.xe; d++)
            if (e = this.s.T[d], e.Nw == this.Hs)
                for (e.$c = this.Yb, a = e.lb, c = null; 0 == (a & 2147483648);) b = this.s.H[a], 0 != b.Ev && (null != c ? c.lc = a : e.cb = a, b.lc = -1, c = b), a = b.bc
    },
    $i: function(a) {
        if (this.fl) return this.Jm = !1, a = this.mr(a);
        if (0 == (a & 32768)) return a = this.s.T[a], a.$c == this.Yb && 0 == (a.cb & 2147483648) ? this.s.H[a.cb] : 0 == (a.lb & 2147483648) ? this.s.H[a.lb] : null;
        var b = this.Ob[a & 32767],
            c = 0;
        if (c >= b.Aa.length) return null;
        do {
            a = this.s.T[b.Aa[c + 1]];
            if (a.$c == this.Yb && 0 == (a.cb & 2147483648)) return this.s.H[a.cb];
            c += 2
        } while (c < b.Aa.length);
        c = 0;
        do {
            a = this.s.T[b.Aa[c + 1]];
            if (0 == (a.lb & 2147483648)) return this.s.H[a.lb];
            c += 2
        } while (c < b.Aa.length);
        return null
    },
    DJ: function(a, b) {
        this.Jm = !0;
        var c = this.mr(a);
        if (null != c) return 0 != this.Bc && (b.Na |= V.wi, this.Ej = !0), c;
        b.Na |= T.Dl;
        return c
    },
    zb: function(a) {
        a.Na &= ~T.Dl;
        this.Jm = !0;
        var b = this.mr(a.yb);
        if (null != b) return 0 != this.Bc && (a.Na |= V.wi, this.Ej = !0), b;
        a.Na |= T.Dl;
        return b
    },
    mr: function(a) {
        return 0 == (a & 32768) ? this.BJ(a) : this.CJ(a)
    },
    BJ: function(a) {
        var b = this.s.T[a];
        if (b.Lw != this.el) {
            b.Lw = this.el;
            b.Mw = this.ii;
            if (b.$c == this.Yb && 0 == (b.cb & 2147483648)) {
                b.Gg = b.cb;
                a = this.s.H[b.cb];
                b.vj = a.lc;
                if (0 != (a.lc & 2147483648)) return b.Rf = !1, b.tj = 1, this.Bc = !1, a;
                b.Rf = !0;
                b.tj = 2;
                this.Bc = !0;
                return a
            }
            if (this.Jm && b.$c == this.Yb) return b.tj =
                0, b.Gg = -1, null;
            if (0 == (b.lb & 2147483648)) {
                b.Gg = b.lb;
                a = this.s.H[b.lb];
                if (null == a) return b.tj = 0, b.Gg = -1, null;
                if (0 == (a.bc & 2147483648)) return b.vj = a.bc, b.Rf = !0, b.tj = 3, this.Bc = !0, a;
                b.Rf = !1;
                b.tj = 1;
                this.Bc = !1;
                return a
            }
            b.tj = 0;
            b.Gg = -1;
            return null
        }
        if (b.Mw != this.ii) {
            var c;
            b.Mw = this.ii;
            switch (b.tj) {
                case 0:
                    return this.Bc = b.Rf, null;
                case 1:
                    return a = this.s.H[b.Gg], this.Bc = b.Rf, a;
                case 2:
                    b.Gg = b.vj;
                    a = this.s.H[b.vj];
                    if (null == a) return null;
                    c = a.lc;
                    0 != (c & 2147483648) && (b.Rf = !1, c = b.cb);
                    b.vj = c;
                    this.Bc = b.Rf;
                    return a;
                case 3:
                    b.Gg =
                        b.vj;
                    a = this.s.H[b.vj];
                    if (null == a) return null;
                    c = a.bc;
                    0 != (c & 2147483648) && (b.Rf = !1, c = b.lb);
                    b.vj = c;
                    this.Bc = b.Rf;
                    return a
            }
        }
        if (0 > b.Gg) return null;
        a = this.s.H[b.Gg];
        this.Bc = b.Rf;
        return a
    },
    CJ: function(a) {
        var b, c = this.Ob[a & 32767];
        if (c.fx != this.el) {
            c.fx = this.el;
            c.gx = this.ii;
            b = this.kD(c);
            if (0 <= b) {
                c.Ig = b;
                a = this.s.H[b];
                if (null == a) return c.wj = 0, c.Ig = -1, null;
                b = a.lc;
                if (0 != (b & 2147483648) && (b = this.jx(c), 0 > b)) return c.wj = 1, this.Bc = c.Sf = !1, a;
                c.xj = b;
                c.wj = 2;
                this.Bc = c.Sf = !0;
                return a
            }
            if (this.Jm && c.hx) return c.wj = 0, c.Ig = -1,
                null;
            b = this.jD(c);
            if (0 <= b && (c.Ig = b, a = this.s.H[b], null != a)) {
                b = a.bc;
                if (0 != (b & 2147483648) && (b = this.ix(c), 0 != (b & 2147483648))) return c.wj = 1, this.Bc = c.Sf = !1, a;
                c.xj = b;
                c.wj = 3;
                this.Bc = c.Sf = !0;
                return a
            }
            c.wj = 0;
            c.Ig = -1;
            return null
        }
        if (c.gx != this.ii) switch (c.gx = this.ii, c.wj) {
            case 0:
                return this.Bc = c.Sf, null;
            case 1:
                return a = this.s.H[c.Ig], this.Bc = c.Sf, a;
            case 2:
                return c.Ig = c.xj, a = this.s.H[c.xj], null != a && (b = a.lc, 0 != (b & 2147483648) && (b = this.jx(c), 0 > b && (c.Sf = !1, b = this.kD(c))), c.xj = b), this.Bc = c.Sf, a;
            case 3:
                return c.Ig =
                    c.xj, a = this.s.H[c.xj], null != a && (b = a.bc, 0 != (b & 2147483648) && (b = this.ix(c), 0 != (b & 2147483648) && (c.Sf = !1, b = this.jD(c))), c.xj = b), this.Bc = c.Sf, a
        }
        if (0 > c.Ig) return null;
        a = this.s.H[c.Ig];
        this.Bc = c.Sf;
        return a
    },
    jx: function(a) {
        for (var b = a.Bm, c; b < a.Aa.length;) {
            c = a.Aa[b + 1];
            c = this.s.T[c];
            if (c.$c == this.Yb && (a.hx = !0, 0 == (c.cb & 2147483648))) return a.Bm = b + 2, c.cb;
            b += 2
        }
        return -1
    },
    kD: function(a) {
        a.Bm = 0;
        a.hx = !1;
        return this.jx(a)
    },
    ix: function(a) {
        for (var b = a.Bm, c; b < a.Aa.length;) {
            c = a.Aa[b + 1];
            c = this.s.T[c];
            if (0 == (c.lb & 2147483648)) return a.Bm =
                b + 2, c.lb;
            b += 2
        }
        return -1
    },
    jD: function(a) {
        a.Bm = 0;
        return this.ix(a)
    },
    $I: function() {
        this.Hu = !1;
        for (var a = this.s.Fs, b = this.s.Gs;;) {
            for (var c = null, d = null, e = this.s.AD; null != e;) {
                if (0 > e.index) {
                    (c = e.next) && (n.xb(e.name, c.name) || (c = null));
                    break
                }
                d = e;
                e = e.next
            }
            if (null == e) break;
            e.stop = !1;
            for (e.index = 0; e.index < e.Uh; e.index++) {
                this.s.Fs = e;
                if (this.s.Gs = c) c.index = e.index;
                this.fl = 0;
                this.qd(e.Qf[e.index], -2686976);
                if (e.stop) break
            }
            if (c)
                for (c.index = 0; c.index < c.Uh; c.index++) {
                    this.s.Fs = c;
                    if (this.s.Gs = e) e.index = c.index;
                    this.fl =
                        0;
                    this.qd(c.Qf[c.index], -2686976);
                    if (c.stop) break
                }
            c && (e.next = c.next);
            null == d ? this.s.AD = e.next : d.next = e.next
        }
        this.s.Fs = a;
        this.s.Gs = b
    },
    Ie: function(a) {
        var b = a & 65535;
        0 != (b & 32768) && (b = 65536 - b);
        a = this.fc[this.Oe[b] + -(a >> 16)];
        0 != a && this.Cf(a, null)
    },
    qd: function(a, b) {
        this.Os = b;
        var c = this.fc[a.Bv + -(b >> 16)];
        return 0 != c ? (this.Cf(c, a), !0) : !1
    },
    NJ: function() {
        for (var a = !1, b = this.s.Bx; b;) {
            if (this.s.pi >= b.jd)
                if (b.type == gb.QH) {
                    this.s.i.Dc = b.name;
                    var c = this.fc[this.Oe[-q.vn] + L.Sy];
                    0 != c && this.Cf(c, null);
                    a = b.xu = !0
                } else
                    for (0 ==
                        b.xp && (b.xp = this.s.pi); this.s.pi >= b.xp;) {
                        this.s.i.Dc = b.name;
                        this.s.i.Dx = b.index;
                        c = this.fc[this.Oe[-q.vn] + L.Sy];
                        0 != c && this.Cf(c, null);
                        b.index++;
                        b.Jr--;
                        if (0 == b.Jr) {
                            a = b.xu = !0;
                            break
                        }
                        b.xp += b.oM
                    }
            b = b.next
        }
        if (a)
            for (b = this.s.Bx, a = null; b;) c = b.next, b.xu ? null == a ? this.s.Bx = c : a.next = c : a = b, b = c
    },
    yI: function() {
        var a;
        if (0 != (this.s.Qc & h.on)) a = this.fc[this.Oe[-q.lq] + 1], 0 != a && (this.fc[this.Oe[-q.lq] + 1] = -1, this.Cf(a, null), this.fp = !0);
        else {
            a = this.fc[this.Oe[-q.vn] + 3];
            0 != a && this.Cf(a, null);
            a = this.fc[this.Oe[-q.lq] + 1];
            var b,
                c, d, e, f;
            if (0 != a) {
                if (this.fp) {
                    e = null;
                    b = a;
                    do {
                        d = this.sc[b];
                        if (d != e)
                            for (e = d, c = d.ac; c < d.ac + d.Fe; c++) f = d.ib[c], 0 == (f.Na & T.Dl) && (f.Na |= T.Np);
                        b++
                    } while (null != this.sc[b])
                }
                this.Cf(a, null);
                this.fc[this.Oe[-q.lq] + 1] = 0;
                if (this.fp) {
                    e = null;
                    b = a;
                    do {
                        d = this.sc[b];
                        if (d != e)
                            for (e = d, c = d.ac; c < d.ac + d.Fe; c++) f = d.ib[c], f.Na &= ~T.Np;
                        b++
                    } while (null != this.sc[b]);
                    this.fp = !1
                }
            }
            a = this.fc[this.Oe[-q.vn] + 2];
            0 != a && this.Cf(a, null);
            a = this.fc[this.Oe[-q.vn] + 1];
            0 != a && this.Cf(a, null)
        }
    },
    Cf: function(a, b) {
        var c, d, e;
        this.yD = !1;
        do
            if (d = this.sc[a],
                0 == (d.La & F.zt))
                if (this.Qg = d, this.Ls[0] = 0, this.Ls[1] = 0, this.Ls[2] = 0, this.Ls[3] = 0, 0 == (d.La & F.At)) {
                    this.Yb += 1;
                    this.Pg = !1;
                    e = 0;
                    if (d.ib[e].rb(this.s, b))
                        for (e++; e < d.ac && 0 != d.ib[e].na(this.s); e++);
                    e == d.ac && (this.yD ? null != b && this.kI(b) : this.Jz(d));
                    a++
                } else {
                    this.Hs++;
                    if (0 == (d.La & F.wy)) {
                        c = !1;
                        do {
                            this.Yb++;
                            this.Pg = !1;
                            e = this.og[a];
                            0 == d.ib[e].rb(this.s, b) && (this.Pg = !0);
                            for (e++; e < d.ac && -1507329 != d.ib[e].Ba;) 0 == d.ib[e].na(this.s) && (this.Pg = !0), e++;
                            this.PA();
                            0 == this.Pg && (c = !0);
                            a++;
                            d = this.sc[a];
                            if (null == d) break
                        } while (d ==
                            this.Qg)
                    } else {
                        var f;
                        c = this.Pg = !1;
                        do {
                            this.Yb++;
                            f = !1;
                            e = this.og[a];
                            if (d.ib[e].rb(this.s, b))
                                for (e++; e < d.ac && -1572865 != d.ib[e].Ba;) {
                                    if (0 == d.ib[e].na(this.s)) {
                                        f = !0;
                                        break
                                    }
                                    e++
                                } else f = !0;
                            0 == f && (this.PA(), c = !0);
                            a++;
                            d = this.sc[a];
                            if (null == d) break
                        } while (d == this.Qg)
                    }
                    c && (this.Yb++, this.gJ(), this.Jz(this.Qg))
                }
        else
        if (a++, null != this.sc[a])
            for (c = this.sc[a]; c == d;) {
                a++;
                if (null == this.sc[a]) break;
                c = this.sc[a]
            }
        while (null != this.sc[a])
    },
    Jz: function(a) {
        if (0 != (a.La & F.vy)) {
            0 != (a.La & F.Ct) && (this.Fj = new O);
            if (0 != (a.La & F.nn)) {
                var b =
                    this.s.Ya,
                    c = a.Xi;
                a.Xi = b;
                if (b == c || b - 1 == c) return
            }
            if (0 != (a.La & F.Bt))
                if (0 != a.$l) a.$l--;
                else return;
            if (0 != (a.La & F.mn)) {
                b = this.s.pi / 10;
                c = a.$l;
                if (0 != c && b < c) return;
                a.$l = b + a.Xi
            }
        }
        this.el++;
        this.Ej = !1;
        this.ii = 0;
        this.fl = !0;
        b = 0;
        do c = a.ib[b + a.ac], 0 == (c.Na & (T.uy | T.Np)) && (c.Na &= ~V.wi, c.qa(this.s)), b++; while (b < a.Fe);
        if (this.Ej) {
            do
                for (this.Ej = !1, this.ii++, b = 0; b < a.Fe; b++) c = a.ib[b + a.ac], 0 != (c.Na & V.wi) && (c.Na &= ~V.wi, c.qa(this.s)); while (this.Ej)
        }
        this.fl = !1;
        null != this.Fj && this.cJ();
        this.Hu && this.$I()
    },
    kI: function(a) {
        var b;
        b = a.bf;
        this.Yb += 1;
        this.am(a);
        this.el++;
        this.Ej = !1;
        this.ii = 0;
        this.fl = !0;
        var c = 0,
            d;
        do {
            a = this.Qg.ib[this.Qg.ac + c];
            d = a.Ba & 4294901760;
            if (262144 == d || 589824 == d)
                if (b == a.Xe) a.qa(this.s);
                else if (d = a.yb, 0 != (d & 32768)) {
                var e = this.Ob[d & 32767];
                for (d = 0; d < e.Aa.length;) {
                    if (e.Aa[d] == b) {
                        a.qa(this.s);
                        break
                    }
                    d += 2
                }
            }
            c++
        } while (c < this.Qg.Fe);
        this.fl = !1
    },
    cJ: function() {
        if (!(1 >= this.Fj.size())) {
            var a = this.s.random(this.Fj.size()),
                b;
            do b = this.s.random(this.Fj.size()); while (a == b);
            a = this.Fj.get(a);
            b = this.Fj.get(b);
            var c = a.o,
                d = a.m,
                e = b.m;
            h.Qb(a, b.o);
            h.Rb(a, e);
            h.Qb(b, c);
            h.Rb(b, d);
            this.Fj = null
        }
    },
    Ro: function(a, b) {
        var c;
        this.s.qv();
        if (null != this.s && 0 == this.s.Uf && 0 != this.Bn && (c = a, 2 == b && (c += R.kH), this.s.Vm = 0, 0 == this.s.oi)) {
            this.Cs = this.Dc = c;
            this.Ie(-262150);
            this.Ie(-327686);
            c = 0;
            var d, e, f, g, m, p, h = new O;
            for (d = 0; d < this.s.ob; d++) {
                for (; null == this.s.H[c];) c++;
                e = this.s.H[c];
                c++;
                f = e.o - e.ia;
                g = e.m - e.ja;
                m = f + e.K;
                p = g + e.J;
                this.s.ki >= f && this.s.ki < m && this.s.li >= g && this.s.li < p && 0 != (e.af & M.Td) && 0 == (e.X & G.je) && (e.xa == q.Sd ? 0 == (e.F.W & w.wh) ? this.Xc.ba.sb(e.b.Ga).He(B.lh,
                    0, 1, 1).$s(this.s.ki - e.o, this.s.li - e.m, e.b.Ua, e.b.mb, e.b.nb) && h.add(e) : h.add(e) : h.add(e))
            }
            for (c = 0; c < h.size(); c++) e = h.get(c), this.Dx = e.bf, this.Cx = e, this.Ie(-393222)
        }
    },
    UK: function() {
        null != this.s && 0 != this.Bn && (this.s.Vm = 0, this.Ie(-524294))
    },
    XC: function() {
        0 != this.Bn && 0 == this.s.Uf && (this.s.Vm = 0)
    },
    bA: function(a, b) {
        var c = this.s.T[a];
        if (c.$c != this.Yb) {
            if (this.Pg) return this.Ic = 0, null;
            for (c = c.lb; 0 == (c & 2147483648);) {
                c = this.s.H[c];
                if (null == c) break;
                if (0 == (c.X & G.je) && (this.Ic++, this.Ic == b)) return c;
                c = c.bc
            }
            return null
        }
        for (c =
            c.cb; 0 == (c & 2147483648);) {
            c = this.s.H[c];
            if (null == c) break;
            if (0 == (c.X & G.je) && (this.Ic++, this.Ic == b)) return c;
            c = c.lc
        }
        return null
    },
    cA: function(a, b) {
        b++;
        this.Ic = 0;
        if (0 == (a & 32768)) return this.bA(a, b);
        if (32767 == (a & 32767)) return null;
        var c = this.Ob[a & 32767],
            d;
        for (d = 0; d < c.Aa.length; d += 2) {
            var e = this.bA(c.Aa[d + 1], b);
            if (null != e) return e
        }
        return null
    },
    jL: function(a, b, c, d, e) {
        a = new Le(a, b, c, d, e);
        null == this.il && (this.il = new O);
        this.il.add(a)
    },
    MJ: function() {
        if (null != this.il) {
            var a;
            for (a = 0; a < this.il.size(); a++) {
                var b =
                    this.il.get(a);
                if (null != b && 0 != b.code) switch (this.Dc = b.YK, this.CD = b.Zh, b.KL) {
                    case 0:
                        this.Ie(b.code);
                        break;
                    case 1:
                        this.qd(b.XK, b.code)
                }
            }
            this.il.clear()
        }
    },
    load: function(a) {
        for (var b, c, d = 0;;)
            if (b = a.file.qD(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
                this.Cg = a.file.v();
                300 > this.Cg && (this.Cg = 300);
                a.file.v();
                this.IC = a.file.v();
                for (c = 0; c < 7 + q.Uy; c++) this.zw[c] = a.file.v();
                this.Th = a.file.v();
                if (0 < this.Th)
                    for (this.Kg = Array(this.Th), c = 0; c < this.Th; c++) this.Kg[c] = new Ke, this.Kg[c].qs = a.file.Z(), this.Kg[c].rs = a.file.Z()
            } else if (69 ==
            b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.w(), this.Do = a.file.w(), this.$d = Array(this.Do);
        else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
            for (a.file.w(), b = a.file.w(), c = 0; c < b; c++) this.$d[d] = F.create(a), d++;
        else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
        this.XB = Math.max(this.XB, d)
    },
    DB: function(a) {
        var b, c;
        c = this.$d[a];
        c.La &= F.Op;
        c.La |= F.zt;
        a++;
        for (b = !1;;) {
            c = this.$d[a];
            c.La &= F.Op;
            c.La |= F.zt;
            c = c.ib[0];
            switch (c.Ba) {
                case -589825:
                    c = c.B[0];
                    c.sg |= la.Lt;
                    a = this.DB(a);
                    continue;
                case -655361:
                    b = !0, a++
            }
            if (b) break;
            a++
        }
        return a
    },
    cx: function() {
        var a, b, c, d, e, f, g = new O,
            m;
        for (d = 0; d < this.$d.length;) a = this.$d[d], a.La &= F.Op, b = a.ib[0], -589825 == b.Ba && (a = b.B[0], m = new Je, m.id = a.HJ, m.OA = d, g.add(m), a.sg &= ~(la.Lt | la.Kt), 0 != (a.sg & la.fG) && (a.sg |= la.Kt)), d++;
        for (d = 0; d < this.$d.length;) {
            a = this.$d[d];
            a.La &= F.Op;
            b = a.ib[0];
            if (-589825 == b.Ba && (a = b.B[0], a.sg &= ~la.Lt, 0 != (a.sg & la.Kt))) {
                d = this.DB(d);
                continue
            }
            d++
        }
        for (d = 0; d < this.$d.length; d++) switch (a = this.$d[d], b = a.ib[0], b.Ba) {
            case -589825:
            case -655361:
                break;
            default:
                for (a.Xi = 0, e = a.$l = 0; e <
                    a.ac + a.Fe; e++)
                    if (b = a.ib[e], b.Na = 0 > b.Ba ? b.Na & T.AF : b.Na & ~(V.wi | T.Dl), 0 != b.Dd)
                        for (f = 0; f < b.Dd; f++) switch (c = b.B[f], c.code) {
                            case 25:
                                c.it = 0;
                                break;
                            case 13:
                                c.vI = c.Xl;
                                break;
                            case 39:
                                var p;
                                for (p = 0; p < g.size(); p++)
                                    if (m = g.get(p), m.id == c.id) {
                                        c.S = m.OA;
                                        break
                                    }
                        }
        }
    },
    Gq: function(a) {
        var b, c, d, e, f, g, m, p, h, l, r, k, v;
        this.s = a;
        for (g = a = v = this.el = 0; g < this.s.xe; g++) - 1 != this.s.T[g].ad && (this.s.T[g].Lw = -1, this.s.T[g].Ld = 0, this.s.T[g].xm = -1, a++, this.s.T[g].ad + 1 > v && (v = this.s.T[g].ad + 1));
        this.Ob = null;
        var u;
        if (0 < this.Th) {
            c = Array(this.Th);
            for (b = 0; b < this.Th; b++)
                for (f = this.Kg[b].qs & 32767, u = c[b] = 0; u < this.s.xe; u++)
                    if (this.s.T[u].Md == this.Kg[b].rs)
                        for (g = 0; 8 > g && -1 != this.s.T[u].ym[g]; g++) f == this.s.T[u].ym[g] && c[b]++;
            this.Ob = Array(this.Th);
            for (b = 0; b < this.Th; b++) {
                this.Ob[b] = new Me;
                0 != c[b] && (this.Ob[b].Aa = Array(2 * c[b]));
                a = 0;
                f = this.Kg[b].qs & 32767;
                for (u = 0; u < this.s.xe; u++)
                    if (this.s.T[u].Md == this.Kg[b].rs)
                        for (g = 0; 8 > g && -1 != this.s.T[u].ym[g]; g++) f == this.s.T[u].ym[g] && (this.Ob[b].Aa[2 * a] = this.s.T[u].ad, this.Ob[b].Aa[2 * a + 1] = u, a++);
                this.Ob[b].fx = -1
            }
        }
        this.Ue =
            Array(200 * v + 1);
        a = 0;
        var w = [];
        for (u = 0; u < this.$d.length; u++) {
            b = this.$d[u];
            for (k = 0; k < b.Fe + b.ac; k++) {
                c = b.ib[k];
                c.Na &= ~T.uy;
                0 <= R.$f(c.Ba) && (c.yb = this.ho(c.Xe, R.$f(c.Ba)));
                if (c.Ba == V.xE) g = c.B[0], g.Ia[0].code == ea.Et && 0 == g.Ia[1].code && (m = {}, m.aI = c.B[0], m.name = g.Ia[0].Tb, w.push(m), this.s.ru(g.Ia[0].Tb));
                else if (c.Ba == V.QM || c.Ba == V.PM) g = c.B[0], g.Ia[0].code == ea.Et && 0 == g.Ia[1].code && (g.Ia[0] = new eb, g.Ia[0].code = ea.yy, g.Ia[0].value = this.s.ru(g.Ia[0].Tb));
                if (0 < c.Dd)
                    for (m = 0; m < c.Dd; m++) switch (d = c.B[m], d.code) {
                        case 25:
                            d.value =
                                0;
                            break;
                        case 21:
                            if (0 == (c.Xe & q.hu))
                                for (g = this.s.C.zd.fr(); null != g; g = this.s.C.zd.Go()) {
                                    if (c.Xe == g.Kf) {
                                        d.Kq = g.gj;
                                        break
                                    }
                                } else d.Kq = -1;
                            f = d.So; - 1 != f && (d.To = this.ho(f, d.ls));
                            break;
                        case 9:
                        case 18:
                        case 16:
                            f = d.So; - 1 != f && (d.To = this.ho(f, d.ls));
                            break;
                        case 1:
                            d.Mb = this.ho(d.Zh, d.type);
                            break;
                        case 15:
                        case 27:
                        case 28:
                        case 45:
                        case 46:
                        case 22:
                        case 23:
                        case 52:
                        case 59:
                        case 53:
                        case 62:
                        case 54:
                            for (p = d, g = 0; g < p.Ia.length; g++) 0 < R.$f(p.Ia[g].code) && (f = p.Ia[g], f.Mb = this.ho(f.Zh, R.$f(f.code)))
                    }
            }
            m = 0;
            p = F.Pp | F.vy | F.xy;
            for (k = 0; k <
                b.ac + b.Fe; k++) {
                c = b.ib[k];
                e = R.$f(c.Ba);
                r = c.Ba;
                l = h = g = 0;
                d = null;
                if (e >= q.Sd) switch (R.hr(r)) {
                    case 262144:
                    case 589824:
                        m |= F.xy;
                        f = c.Xe;
                        if (0 != (f & q.hu))
                            for (e = this.lL(c.yb); - 1 != e; e = this.lD()) a = this.UB(b, a, this.s.T[e].ad);
                        else a = this.UB(b, a, f);
                        break;
                    case 1638400:
                        m |= F.Ct;
                        break;
                    case -917504:
                        d = c.B[0];
                        g = c.B[0];
                        this.Cq(c.yb, c.Xe, g.Mb, g.Zh);
                        this.Cq(g.Mb, g.Zh, c.yb, c.Xe);
                        f = R.$f(c.Ba);
                        l = this.Ar(f) ? M.Td | M.wn : M.Td | M.rq | M.wn;
                        g = g.type;
                        h = this.Ar(g) ? M.Td | M.wn : M.Td | M.rq | M.wn;
                        g = 3;
                        break;
                    case -262144:
                        f = R.$f(c.Ba);
                        l = this.Ar(f) ? M.Td :
                            M.Td | M.rq;
                        d = c.B[0];
                        g = c.B[0].type;
                        h = this.Ar(g) ? M.Td : M.Td | M.rq;
                        g = 3;
                        break;
                    case -720896:
                    case -786432:
                        h = M.qq;
                        g = 1;
                        break;
                    case -851968:
                        h = M.pq, g = 1
                } else switch (r) {
                    case -327681:
                        p &= ~F.Pp;
                        break;
                    case -393217:
                        p |= F.mn;
                        break;
                    case -262145:
                        p |= F.mn;
                        break;
                    case -196609:
                        p |= F.nn + F.Bt;
                        break;
                    case -196614:
                        l = M.Td;
                        d = c.B[0];
                        g = 2;
                        break;
                    case -393222:
                        l = M.Td, d = c.B[1], g = 2
                }
                if (0 != (g & 1))
                    for (e = this.Jg(c.yb); - 1 != e; e = this.Tf()) this.s.T[e].Ld |= h;
                if (0 != (g & 2))
                    for (e = this.Jg(d.Mb); - 1 != e; e = this.Tf()) this.s.T[e].Ld |= l
            }
            b.La &= ~p;
            b.La |= m
        }
        this.Ue[a] = -1;
        m = Array(q.le + v + 1);
        b = k = 0;
        for (e = -q.le; 0 > e; e++, b++) m[b] = k, k += this.zw[q.le + e];
        for (u = 0; u < this.s.xe; u++, b++) m[b] = k, k = this.s.T[u].Md < q.cg ? k + (this.zw[q.le + this.s.T[u].Md] + R.Ai + 1) : k + (this.Xc.br.co(this.s.T[u].Md) + R.Ai + 1);
        h = k;
        this.fc = Array(h);
        for (g = 0; g < h; g++) this.fc[g] = 0;
        p = 0;
        f = Array(this.s.C.Cg);
        for (u = 0; u < this.Do; u++)
            for (b = this.$d[u], b.La &= ~F.At, d = !0, k = l = 0; k < b.ac; k++) {
                c = b.ib[k];
                e = R.$f(c.Ba);
                r = c.Ba;
                g = -R.Dt(r);
                if (d)
                    if (0 != (c.Na & T.yt) && p++, 0 > e) this.fc[m[7 + e] + g]++;
                    else {
                        d = 0;
                        for (e = this.Jg(c.yb); - 1 != e; e = this.Tf()) this.fc[m[q.le +
                            e] + g]++, f[d++] = e;
                        f[d] = -1;
                        if (-917504 == R.hr(r))
                            for (d = c.B[0], e = this.Jg(d.Mb); - 1 != e; e = this.Tf()) {
                                for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && this.fc[m[q.le + e] + g]++
                            }
                    } d = !1;
                if (-1507329 == c.Ba || -1572865 == c.Ba) d = !0, b.La |= F.At, 0 == l ? l = c.Ba : c.Ba = l, -1572865 == l && (b.La |= F.wy)
            }
        c = p + 1;
        for (b = 0; b < h; b++) 0 != this.fc[b] && (k = this.fc[b], this.fc[b] = c, c += k + 1);
        this.sc = Array(c);
        this.og = Array(c);
        for (g = 0; g < c; g++) this.sc[g] = null, this.og[g] = 0;
        l = Array(h);
        for (g = 0; g < h; g++) l[g] = this.fc[g];
        this.s.Ij = null;
        p = h = 0;
        var t;
        for (u = 0; u < this.Do; u++)
            for (b =
                this.$d[u], d = !0, k = 0; k < b.ac; k++) {
                c = b.ib[k];
                e = R.$f(c.Ba);
                r = c.Ba;
                g = -R.Dt(r);
                if (d)
                    if (0 != (c.Na & T.yt) && (p++, this.sc[h] = b, this.og[h] = k, h++), 0 > e) {
                        if (t = m[q.le + e] + g, this.sc[l[t]] = b, this.og[l[t]] = k, l[t]++, c.Ba == L.ZE) {
                            d = !1;
                            for (g = 0; g < b.ac && b.ib[g].Ba != L.$E && b.ib[g].Ba != L.aF; g++);
                            g < b.ac && (d = !0);
                            g = c.B[0];
                            if (g.Ia[0].code == ea.Et && 0 == g.Ia[1].code)
                                for (e = g.Ia[0].Tb, this.s.ru(e), g = 0; g < w.length; g++)
                                    if (r = w[g], n.xb(r.name, e)) {
                                        this.s.Ij || (this.s.Ij = []);
                                        t = null;
                                        for (g = 0; g < this.s.Ij.length; g++)
                                            if (n.xb(e, this.s.Ij[g].name)) {
                                                t =
                                                    this.s.Ij[g];
                                                break
                                            } t || (t = new hd(e), this.s.Ij.push(t));
                                        t.IE(b);
                                        t.QB |= d;
                                        r.aI.oR = g + 1;
                                        break
                                    }
                        }
                    } else {
                        d = 0;
                        for (e = this.Jg(c.yb); - 1 != e; e = this.Tf()) t = m[q.le + e] + g, this.sc[l[t]] = b, this.og[l[t]] = k, l[t]++, f[d++] = e;
                        f[d] = -1;
                        if (-917504 == R.hr(r))
                            for (d = c.B[0], e = this.Jg(d.Mb); - 1 != e; e = this.Tf()) {
                                for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && (t = m[q.le + e] + g, this.sc[l[t]] = b, this.og[l[t]] = k, l[t]++)
                            }
                    } d = !1;
                if (-1507329 == c.Ba || -1572865 == c.Ba) d = !0
            }
        this.Mk = Array(v + 1 + a / 2);
        for (u = w = 0; u < this.s.xe; u++)
            if (v = this.s.T[u], b = m[q.le + u], v.Ow = b,
                0 != (v.gs & z.vh)) {
                a = 0;
                k = this.fc[b - R.Dt(-786432)];
                if (0 != k)
                    for (; null != this.sc[k];) {
                        b = this.sc[k];
                        c = b.ib[this.og[k]];
                        f = c.B[0].value;
                        d = R.eJ(b);
                        for (g = b.Fe; 0 < g; g--, d++) c = b.ib[d], c.Ba == (524288 | v.Md & 65535) && (a |= f);
                        k++
                    }
                v.Pw = a;
                b = v.ad;
                for (g = a = 0; - 1 != this.Ue[a]; a += 2)
                    if (this.Ue[a] == b)
                        if (c = this.Ue[a + 1], 0 != (c & 32768)) v.Ld |= c;
                        else {
                            for (k = 0; k < g && this.Mk[w + k] != c;) k++;
                            k == g && (this.Mk[w + g++] = c)
                        } 0 < g && (v.xm = w, this.Mk[w + g++] = -1, w += g)
            } this.Oe[0] = 0;
        for (g = 1; g <= q.le; g++) this.Oe[g] = m[q.le - g];
        for (u = 0; u < this.s.xe; u++)
            if (v = this.s.T[u],
                e = v.lb, 0 == (e & 2147483648)) {
                do a = this.s.H[e], a.Bv = v.Ow, a.Kb = v, a.af = v.Ld, 0 != (a.ta & z.vh) && (a.A.Jx = v.Pw), 0 != (a.ta & z.gk) && 0 == (a.af & M.Td) && a.F.Ss(!1), 0 == (a.ta & z.bz) && (a.ta &= ~z.fk, 0 != (a.af & M.pq) && 0 != (this.s.C.Wb & E.Hy) && (a.ta |= z.fk), 0 != (a.af & (M.Td | M.qq)) && (a.ta |= z.fk)), e = a.bc; while (0 == (e & 2147483648))
            } this.DD = 0 != p ? !0 : !1;
        this.Ue = null;
        this.Bn = !0
    },
    gt: function() {
        this.Bn = !1;
        this.og = this.sc = this.fc = this.Mk = this.Ob = null
    },
    ho: function(a, b) {
        if (0 != (a & q.hu)) {
            var c;
            for (c = 0; a != this.Kg[c].qs || b != this.Kg[c].rs;) c++;
            return c |
                32768
        }
        for (c = 0; c < this.s.xe && this.s.T[c].ad != a;) c++;
        return c
    },
    Ar: function(a) {
        var b;
        for (b = 0; b < this.s.xe; b++)
            if (-1 != this.s.T[b].ad && this.s.T[b].Md == a)
                if (0 != (this.s.T[b].gs & z.gk) && 0 == (this.s.T[b].gs & z.gu)) break;
                else return !1;
        return !0
    },
    Jg: function(a) {
        if (0 == (a & 32768)) return this.Xo = -1, a;
        if (-1 == a) return -1;
        this.Xo = a & 32767;
        this.Vo = 0;
        return this.Tf()
    },
    Tf: function() {
        var a;
        if (-1 == this.Xo || this.Vo >= this.Ob[this.Xo].Aa.length) return -1;
        a = this.Ob[this.Xo].Aa[this.Vo + 1];
        this.Vo += 2;
        return a
    },
    lL: function(a) {
        if (0 == (a &
                32768)) return this.Yo = -1, a;
        if (-1 == a) return -1;
        this.Yo = a & 32767;
        this.Wo = 0;
        return this.lD()
    },
    lD: function() {
        var a;
        if (-1 == this.Yo || this.Wo >= this.Ob[this.Yo].Aa.length) return -1;
        a = this.Ob[this.Yo].Aa[this.Wo + 1];
        this.Wo += 2;
        return a
    },
    Cq: function(a, b, c, d) {
        var e, f;
        if (0 > b) {
            if (null != this.Ob)
                for (e = this.Ob[a & 32767], f = 0; f < e.Aa.length;) this.Cq(e.Aa[f + 1], e.Aa[f], c, d), f += 2
        } else if (0 > d) {
            if (null != this.Ob)
                for (e = this.Ob[c & 32767], f = 0; f < e.Aa.length;) this.Cq(a, b, e.Aa[f + 1], e.Aa[f]), f += 2
        } else {
            a = this.s.T[a];
            if (null == a.sj) a.sj = [], a = a.sj;
            else
                for (a = a.sj, b = 0; b < a.length; b += 2)
                    if (d == a[b]) return;
            a.push(d);
            a.push(c)
        }
    },
    UB: function(a, b, c) {
        var d, e, f, g, m;
        for (m = 0; m < a.ac; m++)
            if (g = a.ib[m], 2 <= R.$f(g.Ba)) switch (e = 32768 + M.jH, f = R.hr(g.Ba), f) {
                case -917504:
                    f = g.B[0];
                    for (d = this.Jg(g.yb); - 1 != d; d = this.Tf()) d = this.s.T[d].ad, c == d && (e = 0, b = this.VB(b, c, f.Mb));
                    if (0 == e) break;
                    for (d = this.Jg(f.Mb); - 1 != d; d = this.Tf()) d = this.s.T[d].ad, c == d && (b = this.VB(b, c, g.yb));
                    break;
                case -786432:
                    f = g.B[0], e = 32768 + f.value;
                case -851968:
                    for (d = this.Jg(g.yb); - 1 != d; d = this.Tf()) d =
                        this.s.T[d].ad, c == d && (this.Ue[b++] = c, this.Ue[b++] = e)
            }
        return b
    },
    VB: function(a, b, c) {
        for (c = this.Jg(c); - 1 != c; c = this.Tf()) {
            c = this.s.T[c].ad;
            var d;
            for (d = 0; d < a && (this.Ue[d] != b || this.Ue[d + 1] != c); d += 2);
            d == a && (this.Ue[a++] = b, this.Ue[a++] = c)
        }
        return a
    },
    dJ: function(a) {
        var b, c, d, e, f, g;
        for (d = 0; d < this.Do; d++)
            for (b = this.$d[d], e = 0; e < b.ac + b.Fe; e++)
                for (c = b.ib[e], f = 0; f < c.Dd; f++) switch (c.B[f].code) {
                    case 6:
                    case 35:
                        g = c.B[f], a.Ih(g.Qx)
                }
    }
};
F.Pp = 1;
F.nn = 2;
F.Bt = 4;
F.mn = 8;
F.Ct = 16;
F.ZN = 64;
F.XN = 128;
F.CF = 256;
F.WN = 512;
F.At = 1024;
F.xy =
    2048;
F.wy = 4096;
F.DF = 8192;
F.zt = 16384;
F.YN = 32768;
F.vy = F.Ct + F.nn + F.Bt + F.mn;
F.Op = F.CF + F.DF;
F.create = function(a) {
    var b = a.file.S,
        c = a.file.Z(),
        d = new F;
    d.ac = a.file.fb();
    d.Fe = a.file.fb();
    d.La = a.file.v();
    a.file.ma(2);
    d.Xi = a.file.w();
    d.$l = a.file.w();
    d.ib = Array(d.ac + d.Fe);
    var e, f = 0;
    for (e = 0; e < d.ac; e++) d.ib[f++] = L.create(a);
    for (e = 0; e < d.Fe; e++) d.ib[f++] = V.create(a);
    a.file.seek(b - c);
    return d
};
T.BF = 1;
T.VN = 2;
T.zF = 4;
T.Np = 8;
T.Dl = 16;
T.yt = 32;
T.UN = 64;
T.uy = 128;
T.AF = T.yt + T.BF + T.zF + T.Np + T.Dl;
T.$j = 1;
gb.QH = 0;
gb.jQ = 1;
Aa.fz = 0;
Aa.VP = 1;
Aa.WP = 2;
Aa.XP = 3;
Aa.prototype = {
    load: function(a) {
        this.gj = a.v();
        this.Kf = a.v();
        this.Yv = a.w();
        this.Zv = a.w();
        this.Xv = a.v();
        a.v();
        this.NB = a.v();
        a.ma(2)
    },
    nd: function(a, b) {
        this.Wv[a] = b
    }
};
id.prototype = {
    load: function(a) {
        this.Pf = a.file.w();
        this.list = Array(this.Pf);
        var b, c = 0;
        for (b = 0; b < this.Pf; b++) this.list[b] = new Aa, this.list[b].load(a.file), this.list[b].gj + 1 > c && (c = this.list[b].gj + 1), this.list[b].Fr = a.Wc.Gk(this.list[b].Kf).Me;
        this.Fa = Array(c);
        for (b = 0; b < this.Pf; b++) this.Fa[this.list[b].gj] = b
    },
    lB: function(a) {
        return this.list[a]
    },
    xJ: function(a) {
        return a < this.Fa.length ? this.list[this.Fa[a]] : null
    },
    Go: function() {
        var a;
        if (this.Er < this.Pf) {
            do
                if (a = this.list[this.Er++], 2 <= a.Fr) return a; while (this.Er < this.Pf)
        }
        return null
    },
    fr: function() {
        this.Er = 0;
        return this.Go()
    }
};
X.KF = 1;
X.LF = 2;
X.hO = 4;
X.Gt = 16;
X.Ht = 32;
X.It = 64;
X.iO = 65536;
X.Qp = 131072;
X.jO = 262144;
X.prototype = {
    load: function(a) {
        this.Ma = a.w();
        this.Qj = a.pD();
        this.Sj = a.pD();
        this.Xr = a.w();
        this.Zr = a.w();
        a.ub();
        this.Az = this.Ma;
        this.Dz = this.Qj;
        this.Ez = this.Sj;
        this.Bz = this.Xr;
        this.Cz = this.Zr
    },
    reset: function() {
        this.Ma = this.Az;
        this.Qj = this.Dz;
        this.Sj = this.Ez;
        this.Xr = this.Bz;
        this.Zr = this.Cz;
        this.x = this.y = this.Zq = this.$q = 0;
        this.Eq = this.Xk = this.Am = this.zm = null;
        this.Kx(0);
        this.scale = 1;
        this.RD(1);
        this.SD(1);
        this.XD(this.app.oa / 2);
        this.ZD(this.app.wa / 2);
        this.WD(this.app.oa / 2);
        this.YD(this.app.wa / 2);
        this.$D(!1);
        this.Ma & X.Qp ? (this.ne = !0, this.sr()) : (this.ne = !1, this.show())
    },
    SI: function() {
        this.hc.EL()
    },
    ZH: function(a) {
        null == this.zm && (this.zm = new O);
        this.zm.add(a)
    },
    rz: function(a) {
        null == this.Am && (this.Am =
            new O);
        this.Am.add(a)
    },
    Aq: function(a) {
        null == this.Eq && (this.Eq = new O);
        this.Eq.add(a)
    },
    GI: function(a, b) {
        this.hc = new Ca;
        this.hc.x = a;
        this.hc.y = b;
        this.Nb = new Ca;
        this.Nb.x = a;
        this.Nb.y = b;
        this.Qa = new Ca;
        this.Qa.x = a;
        this.Qa.y = b;
        this.Kx(0);
        this.scale = 1;
        this.RD(1);
        this.SD(1);
        this.XD(this.app.oa / 2);
        this.ZD(this.app.wa / 2);
        this.WD(this.app.oa / 2);
        this.YD(this.app.wa / 2);
        this.$D(!1);
        this.app.ue.me(this.hc);
        this.app.ue.me(this.Nb);
        this.app.ue.me(this.Qa);
        this.dM()
    },
    Kx: function(a) {
        this.angle = a;
        this.hc.angle = a;
        this.Nb.angle =
            a;
        this.Qa.angle = a
    },
    RD: function(a) {
        this.ic = a;
        this.hc.ic = a;
        this.Nb.ic = a;
        this.Qa.ic = a
    },
    SD: function(a) {
        this.jc = a;
        this.hc.jc = a;
        this.Nb.jc = a;
        this.Qa.jc = a
    },
    XD: function(a) {
        this.Ja = a;
        this.hc.Ja = a;
        this.Nb.Ja = a;
        this.Qa.Ja = a
    },
    ZD: function(a) {
        this.Ha = a;
        this.hc.Ha = a;
        this.Nb.Ha = a;
        this.Qa.Ha = a
    },
    WD: function(a) {
        this.Dp = a = this.app.oa - a;
        this.hc.Dp = a;
        this.Nb.Dp = a;
        this.Qa.Dp = a
    },
    YD: function(a) {
        this.Fp = a = this.app.wa - a;
        this.hc.Fp = a;
        this.Nb.Fp = a;
        this.Qa.Fp = a
    },
    $D: function(a) {
        this.ig = a;
        this.hc.ig = a;
        this.Nb.ig = a;
        this.Qa.ig = a
    },
    HL: function(a, b) {
        this.hc.x = a;
        this.hc.y = b;
        this.Nb.x = a;
        this.Nb.y = b;
        this.Qa.x = a;
        this.Qa.y = b;
        this.show()
    },
    dM: function() {
        this.Ma & X.Gt ? this.show() : this.sr()
    },
    sr: function() {
        this.Ma &= ~X.Qp;
        this.ne && (this.hc.visible = !1, this.Nb.visible = !1, this.ne = this.Qa.visible = !1)
    },
    show: function() {
        0 == this.ne && (this.hc.visible = !0, this.Nb.visible = !0, this.ne = this.Qa.visible = !0)
    },
    qA: function() {
        null != this.hc && (this.app.ue.removeChild(this.hc), this.hc = null);
        null != this.Nb && (this.app.ue.removeChild(this.Nb), this.Nb = null);
        null != this.Qa &&
            (this.app.ue.removeChild(this.Qa), this.Qa = null)
    },
    YH: function(a, b, c, d) {
        var e = new ba;
        e.left = a;
        e.top = b;
        e.right = c;
        e.bottom = d;
        null == this.Xk && (this.Xk = new O);
        this.Xk.add(e)
    },
    yJ: function(a, b) {
        a += this.x;
        b += this.y;
        if (null != this.Xk) {
            var c, d;
            for (c = 0; c < this.Xk.size(); c++)
                if (d = this.Xk.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
        }
        return null
    },
    Nj: function(a, b, c, d, e) {
        b = b + this.x - a.Ja;
        c = c + this.y - a.Ha;
        var f = b + a.width,
            g = c + a.height,
            m = c;
        0 != d && (m = g - d);
        var p, h;
        h = e == ra.hn ? this.zm : this.Am;
        if (null == h) return null;
        for (e = 0; e < h.size(); e++)
            if (p = h.get(e), p.x < f && p.x + p.width > b && p.y < g && p.y + p.height > m && p.Nj(a, b, c, d)) return p;
        return null
    },
    at: function(a, b, c, d, e, f) {
        f = f == ra.hn ? this.zm : this.Am;
        if (null == f) return null;
        a += this.x;
        b += this.y;
        c += this.x;
        d += this.y;
        0 != e && (b = d - e);
        for (e = 0; e < f.size(); e++) {
            var g = f.get(e);
            if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.at(a, b, c, d)) return g
        }
        return null
    }
};
ia.prototype = {
    Eb: function(a, b, c) {
        if (null != this.qK)
            if (this.type == q.ZG) {
                var d = this.ee.oc,
                    e;
                switch (d.nj) {
                    case 1:
                        switch (d.Wh) {
                            case 1:
                                a.xd(b +
                                    this.x, c + this.y, this.width, this.height, this.sk, this.Yd, this.Zd);
                                break;
                            case 2:
                                a.Ac(b + this.x, c + this.y, this.width, this.height, this.sk, this.Yd, this.Zd);
                                break;
                            case 3:
                                a.wx(b + this.x, c + this.y, this.width, this.height, this.sk, this.Yd, this.Zd)
                        }
                        break;
                    case 2:
                        switch (d.Wh) {
                            case 1:
                                a.xd(b + this.x, c + this.y, this.width, this.height, this.sk, this.Yd, this.Zd);
                                break;
                            case 2:
                                a.vx(b + this.x, c + this.y, this.width, this.height, this.sk, this.Pu, 0 != this.AB, this.Yd, this.Zd);
                                break;
                            case 3:
                                a.tD(b + this.x, c + this.y, this.width, this.height, this.sk,
                                    this.Pu, 0 != this.AB, this.Yd, this.Zd)
                        }
                        break;
                    case 3:
                        switch (d.Wh) {
                            case 2:
                                e = this.app.ba.sb(d.Vh);
                                a.uD(e, b + this.x, c + this.y, this.width, this.height, this.Yd, this.Zd);
                                break;
                            case 3:
                                e = this.app.ba.sb(d.Vh), a.vD(e, b + this.x, c + this.y, this.width, this.height, this.Yd, this.Zd)
                        }
                }
                if (0 < this.borderWidth) switch (d.Wh) {
                    case 1:
                        var f = e = 0,
                            g = this.width,
                            m = this.height;
                        0 != (d.Mo & Ja.EG) && (e += g, g = -g);
                        0 != (d.Mo & Ja.FG) && (f += m, m = -m);
                        a.xd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + m, this.borderColor, this.borderWidth);
                        break;
                    case 2:
                        a.As(b +
                            this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
                        break;
                    case 3:
                        a.sD(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
                }
            } else this.type == q.YG ? a.FL(this.ed, b + this.x + this.ed.Ja, c + this.y + this.ed.Ha, 0, 1, 1, this.Yd, this.Zd) : null != this.j && this.j.Eb(a, b, c);
        else a.nf(this.ed, b + this.x + this.ed.Ja, c + this.y + this.ed.Ha, 0, 1, 1, this.Yd, this.Zd)
    },
    LD: function(a, b) {
        this.Yd = a;
        this.Zd = b
    },
    nd: function(a, b) {
        b.hc.me(this);
        this.type == q.Wy && b.Aq(this);
        switch (this.gf) {
            case aa.mq:
                b.ZH(this);
                b.rz(this);
                break;
            case aa.fg:
                b.rz(this);
                break;
            case aa.fu:
                b.YH(this.x, this.y, this.x + this.width, this.y + this.height)
        }
    },
    Nj: function(a, b, c, d) {
        var e;
        switch (this.type) {
            case 0:
                return e = this.height, this.gf == aa.fg && (e = E.Sp), a.Ux(b, c, d, this.x, this.y, this.width, e, 0);
            case 1:
                if (0 != this.Tl) return !0;
                e = B.lh;
                this.gf == aa.fg && (e = B.El);
                e = this.ed.He(e, 0, 1, 1);
                return a.Nj(b, c, d, e, this.x, this.y, 0);
            case 11:
                if (0 != this.Tl) return !0;
                e = B.lh;
                this.gf == aa.fg && (e = B.El);
                e = this.ed.He(e, 0, 1, 1);
                return a.Nj(b, c, d, e, this.x, this.y, 0)
        }
        return !1
    },
    at: function(a, b, c, d) {
        var e;
        switch (this.type) {
            case 0:
                if (this.gf == aa.fg) {
                    a = this.y + Math.min(this.height, E.Sp);
                    if (this.y < d && a > b) return !0;
                    break
                }
                return !0;
            case 1:
                if (0 != this.Tl) return !0;
                e = B.lh;
                this.gf == aa.fg && (e = B.El);
                e = this.ed.He(e, 0, 1, 1);
                return e.Ux(this.x, this.y, 0, a, b, c, d, 0);
            case 11:
                if (0 != this.Tl) return !0;
                e = B.lh;
                this.gf == aa.fg && (e = B.El);
                e = this.ed.He(e, 0, 1, 1);
                return e.Ux(this.x, this.y, 0, a, b, c, d, 0)
        }
        return !1
    }
};
q.QP = 1;
q.OP = 2;
q.SP = 4;
q.RP = 8;
q.oq = 16;
q.hH = 32;
q.PP = 64;
q.NP = 1;
q.MP = 2;
q.ez = 4;
q.le = 7;
q.Xy = -7;
q.kP = -6;
q.jP = -5;
q.vn = -4;
q.lq = -3;
q.mP = -2;
q.nP = -1;
q.ZG = 0;
q.YG = 1;
q.Sd = 2;
q.uh = 3;
q.Yy = 4;
q.Zy = 5;
q.Vy = 6;
q.un = 7;
q.lP = 8;
q.Ty = 9;
q.iP = 10;
q.Wy = 11;
q.Uy = 10;
q.cg = 32;
q.hu = 32768;
q.prototype = {
    aw: function(a) {
        this.Oo = a.v();
        this.Me = a.v();
        this.$h = a.v();
        a.ma(2);
        this.Iw = a.w();
        this.Jw = a.w()
    },
    load: function(a) {
        a.seek(this.RC);
        switch (this.Me) {
            case 0:
                this.oc = new Ja;
                break;
            case 1:
                this.oc = new kd;
                break;
            default:
                this.oc = new z
        }
        this.oc.load(a, this.Me);
        this.SC = 0
    },
    tM: function() {
        this.oc = null
    },
    kc: function(a, b) {
        this.oc.kc(a, b)
    }
};
jd.prototype = {
    di: function(a) {
        this.rj =
            a.w();
        this.zc = Array(this.rj);
        var b;
        for (b = this.Fg = 0; b < this.rj; b++)
            for (var c = 0, d; 32639 != c;)
                if (c = a.v(), a.v(), d = a.w(), 0 != d) {
                    d = a.S + d;
                    switch (c) {
                        case 17476:
                            this.zc[b] = new q;
                            this.zc[b].aw(a);
                            this.zc[b].Oo >= this.Fg && (this.Fg = this.zc[b].Oo + 1);
                            break;
                        case 17477:
                            this.zc[b].Kw = a.ub();
                            break;
                        case 17478:
                            this.zc[b].RC = a.S
                    }
                    a.seek(d)
                } this.ai = Array(this.Fg);
        for (b = 0; b < this.rj; b++) this.ai[this.zc[b].Oo] = b;
        this.Po = Array(this.Fg);
        this.qj = Array(this.Fg);
        for (a = 0; a < this.Fg; a++) this.Po[a] = 0, this.qj[a] = 0
    },
    Gk: function(a) {
        return this.zc[this.ai[a]]
    },
    GL: function() {
        var a;
        for (a = 0; a < this.rj; a++) this.zc[a].$h &= ~q.oq
    },
    bM: function(a) {
        this.zc[this.ai[a]].$h |= q.oq
    },
    iB: function() {
        var a;
        for (a = 0; a < this.rj; a++)
            if (0 != (this.zc[a].$h & q.oq)) return this.Vq = a, this.zc[a];
        return null
    },
    oB: function() {
        if (this.Vq < this.rj) {
            var a;
            for (a = this.Vq + 1; a < this.rj; a++)
                if (0 != (this.zc[a].$h & q.oq)) return this.Vq = a, this.zc[a]
        }
        return null
    },
    pf: function() {
        var a;
        for (a = 0; a < this.Fg; a++) this.Po[a] = 0
    },
    Mj: function(a) {
        this.Po[a] = 1
    },
    load: function(a) {
        var b;
        for (b = 0; b < this.Fg; b++)
            if (0 != this.Po[b]) {
                if (0 ==
                    this.qj[b] || 0 != this.qj[b] && 0 != (this.zc[this.ai[b]].SC & q.hH)) this.zc[this.ai[b]].load(a), this.qj[b] = 1
            } else 0 != this.qj[b] && (this.zc[this.ai[b]].tM(), this.qj[b] = 0);
        this.pf()
    },
    kc: function(a, b) {
        var c;
        for (c = 0; c < this.Fg; c++) 0 != this.qj[c] && this.zc[this.ai[c]].kc(a, b)
    }
};
aa.$y = 0;
aa.mq = 1;
aa.fg = 2;
aa.fu = 3;
aa.$G = 4;
kd.prototype = {
    load: function(a) {
        a.ma(4);
        this.NC = a.v();
        this.JC = a.v();
        this.KC = a.w();
        this.LC = a.w();
        this.Vh = a.v()
    },
    kc: function(a) {
        null != a && (a = a.Ih(this.Vh), -1 != a && (this.Vh = a))
    }
};
Ja.EG = 1;
Ja.FG = 2;
Ja.prototype = {
    load: function(a) {
        a.ma(4);
        this.NC = a.v();
        this.JC = a.v();
        this.KC = a.w();
        this.LC = a.w();
        this.ds = a.v();
        this.cs = a.Pc();
        this.Wh = a.v();
        this.nj = a.v();
        if (1 == this.Wh) this.Mo = a.v();
        else switch (this.nj) {
            case 1:
                this.Dg = this.um = a.Pc();
                break;
            case 2:
                this.Dg = a.Pc();
                this.um = a.Pc();
                this.Lo = a.w();
                break;
            case 3:
                this.Vh = a.v()
        }
    },
    kc: function(a) {
        3 == this.nj && null != a && (a = a.Ih(this.Vh), -1 != a && (ocImage = a))
    }
};
z.wP = 1;
z.vP = 2;
z.dH = 4;
z.dz = 8;
z.vh = 16;
z.ek = 32;
z.yP = 64;
z.AP = 128;
z.gH = 256;
z.gk = 512;
z.xP = 1024;
z.fH = 2048;
z.gu = 4096;
z.cz = 8192;
z.fk =
    16384;
z.bz = 32768;
z.zP = 65536;
z.az = 131072;
z.eH = 1048576;
z.oP = 1;
z.uP = 2;
z.bH = 4;
z.nq = 8;
z.qP = 4;
z.pP = 48;
z.tP = 16;
z.sP = 32;
z.rP = 48;
z.aH = 64;
z.cH = 128;
z.CP = 1;
z.JP = 2;
z.IP = 4;
z.KP = 8;
z.HP = 16;
z.EP = 32;
z.BP = 64;
z.GP = 128;
z.FP = 256;
z.LP = 512;
z.DP = 1024;
z.prototype = aa;
z.prototype = {
    load: function(a, b) {
        var c = a.S;
        this.Fw = Array(8);
        var d;
        a.ma(4);
        a.ma(2);
        var e = a.v();
        a.ma(2);
        var f = a.v(),
            g = a.v(),
            m = a.v();
        this.Eg = a.w();
        for (d = 0; 8 > d; d++) this.Fw[d] = a.Z();
        a.v();
        var p = a.v(),
            h = a.v();
        this.oj = a.v();
        var l = a.v();
        this.yc = a.w();
        a.Pc();
        d = a.w();
        var n =
            a.w();
        this.Ko = this.vm = null;
        0 != m && (a.seek(c + m), this.hf = new de, this.hf.load(a));
        0 != p && (a.seek(c + p), this.wm = new $d, this.wm.load(a, 0 != (this.oj & z.cH)));
        0 != h && (a.seek(c + h), this.No = new Zd, this.No.load(a));
        0 != g && (a.seek(c + g), this.mj = new Ma, this.mj.load(a));
        0 != f && (a.seek(c + f), this.Zc = new md, this.Zc.load(a));
        0 != l && (a.seek(c + l), f = a.w(), a.ma(4), this.PC = a.w(), a.w(), this.OC = a.w(), 0 != f - 20 && (this.MC = a.S));
        0 != d && (a.seek(c + d), this.vm = new ua, this.vm.load(a));
        0 != n && (a.seek(c + n), this.Ko = new ua, this.Ko.load(a));
        if (0 !=
            e) switch (a.seek(c + e), b) {
            case 3:
            case 4:
                this.Zc = new od;
                this.Zc.load(a);
                break;
            case 5:
            case 6:
            case 7:
                this.kb = new ja;
                this.kb.load(a);
                break;
            case 8:
                this.Zc = new nd;
                this.Zc.load(a);
                this.Eg &= ~(z.gk | z.gu | z.dH);
                break;
            case 9:
                this.Zc = new ld, this.Zc.load(a)
        }
    },
    kc: function(a, b) {
        null != this.mj && this.mj.kc(a);
        null != this.Zc && this.Zc.kc(a, b);
        null != this.kb && this.kb.kc(a, b)
    }
};
ld.prototype = {
    load: function(a) {
        a.ma(4);
        this.Xh = a.w();
        this.Yh = a.w();
        a.v();
        this.QC = a.v();
        this.Kd = a.w();
        a.ma(8);
        this.Gw = a.ub()
    },
    kc: function() {}
};
md.prototype = {
    load: function(a) {
        a.ma(2);
        this.fA = a.w();
        this.hA = a.w();
        this.gA = a.w()
    },
    kc: function() {}
};
ja.CN = 0;
ja.BN = 1;
ja.nF = 2;
ja.mF = 3;
ja.AN = 4;
ja.DN = 5;
ja.rt = 256;
ja.prototype = {
    load: function(a) {
        a.ma(4);
        this.Xh = a.w();
        this.Yh = a.w();
        this.Hw = a.v();
        this.jf = a.v();
        this.Uk = a.v();
        this.pj = a.v();
        switch (this.jf) {
            case 1:
            case 4:
                this.pm = a.v();
                this.frames = Array(this.pm);
                var b;
                for (b = 0; b < this.pm; b++) this.frames[b] = a.v();
                break;
            case 2:
            case 3:
            case 5:
                if (this.ds = a.v(), this.cs = a.Pc(), this.Wh = a.v(), this.nj = a.v(), 1 == this.Wh) this.Mo = a.v();
                else switch (this.nj) {
                    case 1:
                        this.Dg =
                            a.Pc();
                        break;
                    case 2:
                        this.Dg = a.Pc(), this.um = a.Pc(), this.Lo = a.w()
                }
        }
    },
    kc: function(a, b) {
        switch (this.jf) {
            case 1:
            case 4:
                var c;
                for (c = 0; c < this.pm; c++) null != a && a.Ih(this.frames[c]);
                break;
            case 5:
                null != b && b.Ih(this.pj)
        }
    }
};
nd.prototype = {
    load: function(a) {
        a.w();
        a.w();
        this.Kd = a.w();
        a.Pc();
        this.Xh = a.w();
        this.Yh = a.w();
        a.ma(4);
        var b = a.w();
        this.text = a.ub(b)
    },
    kc: function() {}
};
pa.mQ = 0;
pa.lQ = 1;
pa.nQ = 2;
pa.oQ = 4;
pa.kQ = 15;
pa.RH = 256;
pa.kz = 512;
pa.prototype = {
    load: function(a) {
        this.cn = a.Z();
        this.Bp = a.v();
        this.Xx = a.Pc();
        this.ti =
            a.ub()
    },
    kc: function(a, b) {
        null != b && b.Ih(this.cn)
    }
};
od.prototype = {
    load: function(a) {
        var b = a.S;
        a.ma(4);
        this.Vw = a.w();
        this.Ww = a.w();
        this.Wk = a.w();
        this.Xb = Array(this.Wk);
        var c = Array(this.Wk),
            d;
        for (d = 0; d < this.Wk; d++) c[d] = a.w();
        for (d = 0; d < this.Wk; d++) this.Xb[d] = new pa, a.seek(b + c[d]), this.Xb[d].load(a)
    },
    kc: function(a, b) {
        var c;
        for (c = 0; c < this.Wk; c++) this.Xb[c].kc(a, b)
    }
};
G.je = 1;
G.Mt = 2;
G.BO = 4;
G.Bi = 8;
G.Ci = 16;
G.nG = 32;
G.mh = 8192;
G.AO = 16384;
G.CO = 32768;
G.prototype = {
    QD: function(a, b) {
        if (this.b.mb != a || this.b.nb != b) {
            0 <=
                a && (this.b.mb = a);
            0 <= b && (this.b.nb = b);
            this.b.M = !0;
            var c = this.c.h.ba.Fk(this.b.Ga, this.b.Ua, this.b.mb, this.b.nb);
            this.K = c.width;
            this.J = c.height;
            this.ia = c.Ja;
            this.ja = c.Ha
        }
    },
    Y: function() {},
    handle: function() {},
    Eh: function() {},
    dA: function() {},
    display: function() {},
    Fb: function() {},
    pJ: function() {
        return null
    },
    LD: function() {},
    su: function() {},
    Rl: function() {},
    Wi: function() {
        return 0
    },
    tl: function() {},
    Ik: function() {},
    $m: function() {},
    tc: function() {
        return -1
    },
    dm: function() {
        return 0
    },
    ge: function() {},
    Oi: function() {},
    bm: function() {}
};
pd.prototype = n.extend(new G, {
    handle: function() {
        this.F.handle();
        this.b.M && (this.b.M = !1)
    },
    su: function(a, b, c, d, e) {
        this.za = this.c.C.tb[d];
        this.pa = e;
        this.za.Qa.me(this)
    },
    Eb: function(a, b, c) {
        if (this.pa && (0 == (this.X & G.Bi) || this.F.Ug)) {
            var d = this.F.Zb;
            this.F.W & w.rH && (d |= w.iy);
            var e = this.c.h.ba.sb(this.b.Ga);
            e && (this.yl ? a.Cj(this.yl, b + this.o - this.c.ca + this.za.x - e.Ja, c + this.m - this.c.ga + this.za.y - e.Ha, this.yl.width * this.b.mb, this.yl.height * this.b.nb, d, this.F.$b) : a.nf(e, b + this.o - this.c.ca + this.za.x,
                c + this.m - this.c.ga + this.za.y, this.b.Ua, this.b.mb, this.b.nb, d, this.F.$b))
        }
    },
    Wi: function() {
        return this.za.Qa.removeChild(this)
    },
    tl: function() {
        this.pa = !0
    },
    Ik: function() {
        this.pa = !1
    },
    tc: function() {
        return this.za.Qa.tc(this)
    },
    dm: function() {
        return this.za.Qa.children.length
    },
    ge: function(a) {
        a >= this.za.Qa.children.length && (a = this.za.Qa.children.length);
        0 > a && (a = 0);
        this.za.Qa.ge(this, a)
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    }
});
K.my = 1;
K.TE = 2;
K.VE = 4;
K.wN = 8;
K.WE = 16;
K.uN = 32;
K.hN = 64;
K.yN = 128;
K.gN = 256;
K.zN = 512;
K.xN = 1024;
K.kN = 2048;
K.Jp = 4096;
K.jN = 8192;
K.ly = 16384;
K.qN = 32768;
K.RE = 65536;
K.rN = 131072;
K.iN = 262144;
K.UE = 524288;
K.sN = 1048576;
K.SE = 2097152;
K.pN = 12582912;
K.mN = 0;
K.oN = 4194304;
K.nN = 8388608;
K.lN = 12582912;
K.vN = 16777216;
K.tN = 33554432;
K.prototype = n.extend(new G, {
    fE: function(a, b, c) {
        b = a.Zc;
        this.K = b.Xh;
        this.J = b.Yh;
        this.Kd = b.Kd;
        0 != (this.Kd & K.WE) && (this.Kd |= K.RE); - 1 == c && (c = 0, 0 != (this.Kd & K.ly) && (c = b.QC));
        null == b.Gw || 0 != b.Gw.length || 0 == (this.Kd & K.ly) || c >= this.c.h.Ff || c == this.c.h.Ee || (this.ne = 0 != (a.oj & z.nq) ? !0 : !1, this.Hc =
            new Ca, this.Hc.x = this.o - this.c.ca, this.Hc.y = this.m - this.c.ga, this.c.h.ue.me(this), this.Tw = this.o, this.Uw = this.m, this.D = new l(this.c.h, this.c.h.file, this.c.h.path, !0), this.D.MD(this.c.h, c, this.Kd, this.Hc, this.K, this.J), this.D.digest(), 0 != (this.Kd & K.Jp) && null == this.c.h.Mf && (this.c.h.Mf = this, this.c.h.I.pause()), this.D.Rx(), this.D.Vs((this.c.h.Rj + this.Hc.x) * this.c.h.ic, (this.c.h.Tj + this.Hc.y) * this.c.h.jc), this.D.wp(), this.c.h.$a.push(this.D))
    },
    Y: function(a) {
        this.fE(a, !0, -1)
    },
    handle: function() {
        this.A.move();
        if (null != this.D) {
            if (this.Tw != this.o || this.Uw != this.m) this.Hc.x = this.o - this.c.ca, this.Hc.y = this.m - this.c.ga, this.Tw = this.o, this.Uw = this.m, this.D.Vs(this.Hc.x * this.c.h.ic, this.Hc.y * this.c.h.jc), this.uM();
            0 == this.D.wp() ? (this.Xq(), 0 != (this.Kd & K.Jp) && null != this.D.Da && this.D.Da.Mf == this && (this.D.Da.Mf = null, this.D.Da.I.resume()), this.D = null) : (this.WC = this.level, this.level = this.D.Ee)
        }
    },
    Eb: function(a) {
        this.ne && null != this.D && this.D.zA(a, this.Hc.x, this.Hc.y)
    },
    Fb: function() {
        if (null != this.D) {
            switch (this.D.ab) {
                case 3:
                    this.D.On()
            }
            this.Xq();
            this.D.MA();
            0 != (this.Kd & K.Jp) && null != this.D.Da && this.D.Da.Mf == this && (this.D.Da.Mf = null, this.D.Da.I.resume());
            this.D = null
        }
    },
    Xq: function() {
        var a;
        for (a = 0; a < this.c.h.$a.length; a++)
            if (this.c.h.$a[a] == this.D) {
                this.c.h.$a.splice(a, 1);
                break
            } this.c.h.ue.removeChild(this.Hc)
    },
    dS: function() {
        if (null != this.D) {
            if (null != this.D.I) {
                this.D.I.Cb = h.Jy;
                return
            }
            this.Fb(!0)
        }
        this.fE(this.O, !1, -1)
    },
    kR: function() {
        null != this.D && (null != this.D.I && (this.D.I.Cb = h.Vp), 0 != (this.Kd & K.Jp) && null != this.D.Da && this.D.Da.Mf == this && (this.D.Da.Mf =
            null, this.D.Da.I.resume()))
    },
    sr: function() {
        this.ne = !1
    },
    show: function() {
        this.ne = !0
    },
    OR: function(a) {
        null != this.D && null != this.D.I && 0 <= a && 4096 > a && (this.D.I.Cb = h.Wp, this.D.I.Wm = 32768 | a)
    },
    Ib: function() {
        null != this.D && null != this.D.I && (this.D.I.Cb = h.Xp)
    },
    VR: function() {
        null != this.D && null != this.D.I && (this.D.I.Cb = h.Ot)
    },
    eS: function() {
        null != this.D && null != this.D.I && (this.D.I.Cb = h.HG)
    },
    pause: function() {
        null != this.D && null != this.D.I && this.D.I.pause()
    },
    resume: function() {
        null != this.D && null != this.D.I && this.D.I.resume()
    },
    lS: function(a, b) {
        null != this.D && this.D.YL(a, b)
    },
    kS: function(a, b) {
        null != this.D && this.D.XL(a, b)
    },
    bK: function() {
        return null != this.D && null != this.D.I ? 0 != this.D.I.Uf : !1
    },
    PQ: function() {
        return null == this.D
    },
    NR: function() {
        return this.ne
    },
    qR: function() {
        return this.level != this.WC
    },
    BR: function(a) {
        return null != this.D ? this.D.jB(a) : ""
    },
    CR: function(a) {
        return null != this.D ? this.D.kB(a) : 0
    },
    zR: function() {
        return this.level + 1
    },
    Ys: function() {},
    Us: function() {},
    UQ: function() {
        null != this.D && this.ne && (hoAdRunHeader.h.eL.removeChild(this),
            hoAdRunHeader.h.eL.me(this))
    },
    uM: function() {
        if (null != this.D && null != this.D.I) {
            var a = this.D.I,
                b = 0,
                c;
            for (c = 0; c < a.ob; c++) {
                for (; null == a.H[b];) b++;
                var d = a.H[b];
                b++;
                d.bm()
            }
        }
    },
    Oi: function() {
        this.D.Vs((this.c.h.Rj + this.Hc.x) * this.c.h.ic, (this.c.h.Tj + this.Hc.y) * this.c.h.jc);
        null != this.D && this.D.Im()
    }
});
qd.prototype = {
    Y: function() {
        this.nb = this.mb = 1;
        this.Ua = 0;
        this.Oc = -1
    },
    Fb: function() {}
};
da.sy = 15;
da.hF = 240;
da.iF = 4;
da.fF = 61440;
da.gF = 12;
da.jF = 512;
da.lF = 1024;
da.kF = 2048;
da.prototype = n.extend(new G, {
    Y: function() {
        this.Fc = -1;
        this.mp = this.Ec = 0;
        this.K = this.J = 1;
        if (null == this.O.kb) this.J = this.hd = this.K = this.gd = 1;
        else {
            var a = this.O.kb;
            this.K = this.gd = a.Xh;
            this.J = this.hd = a.Yh;
            this.Cd = a.Uk;
            this.type = a.jf;
            switch (this.type) {
                case 5:
                    var b = this.Fc; - 1 == b && (b = a.pj);
                    this.font = this.c.h.Ub.Gf(b);
                    this.Hd = this.font.Ze();
                    this.Ec = a.Dg;
                    break;
                case 2:
                case 3:
                    this.Ec = a.Dg, this.mp = a.um
            }
        }
        a = this.O.Zc;
        this.vb = a.hA;
        this.Sc = a.gA;
        this.sa = a.fA;
        this.Pi = !1
    },
    Fb: function() {},
    handle: function() {
        this.F.handle();
        this.b.M && (this.b.M = !1)
    },
    qg: function() {
        var a =
            this.O.kb;
        if (5 == this.type) {
            var b = rsFont; - 1 == b && (b = a.pj);
            return this.c.h.Ub.jr(b)
        }
        return null
    },
    Vg: function(a, b) {
        5 == this.type && (this.Fc = this.c.h.Ub.Dq(a), this.font = this.c.h.Ub.Gf(this.Fc), this.Hd = this.font.Ze(), null != b && (this.K = this.gd = b.right - b.left, this.J = this.hd = b.bottom - b.top), this.hb())
    },
    ir: function() {
        return this.Ec
    },
    Ts: function(a) {
        this.Ec = a;
        this.hb()
    },
    Ru: function(a) {
        0 != this.Pi || n.Lv(a) || (this.Pi = !0)
    },
    Gn: function(a) {
        0 == this.Pi ? (a = n.Gd(a), a < this.vb && (a = this.vb), a > this.Sc && (a = this.Sc), a != Math.round(this.sa) &&
            (this.sa = a, this.b.M = !0, this.hb())) : (a < this.vb && (a = this.vb), a > this.Sc && (a = this.Sc), a != this.sa && (this.sa = a, this.b.M = !0, this.hb()))
    },
    BI: function(a) {
        this.Ru(a);
        this.Gn(this.sa + a)
    },
    EI: function(a) {
        this.Ru(a);
        this.Gn(this.sa - a)
    },
    fR: function(a) {
        this.vb = a;
        this.Gn(this.sa)
    },
    DI: function(a) {
        this.Sc = a;
        this.Gn(this.sa)
    },
    CI: function(a) {
        this.Ec = a;
        this.hb()
    },
    eR: function(a) {
        this.mp = a;
        this.hb()
    },
    dR: function() {
        return this.sa
    },
    cR: function() {
        return this.vb
    },
    bR: function() {
        return this.Sc
    },
    $Q: function() {
        return this.Ec
    },
    aR: function() {
        return this.mp
    },
    Rl: function(a, b, c, d, e, f) {
        null != this.O.kb && 1 != this.Pa && (this.Pa = !0, this.yz = d, this.pa = e, this.za = this.c.C.tb[c], this.la = this.yz ? this.za.Nb : this.za.Qa, 0 > f ? this.la.me(this) : this.la.Bq(this, f), 5 != this.type && this.hb())
    },
    Wi: function() {
        if (null == this.O.kb || 0 == this.Pa) return -1;
        this.Pa = !1;
        var a = this.la.tc(this);
        this.la.removeChild(this);
        return a
    },
    tc: function() {
        return this.Pa ? this.la.tc(this) : -1
    },
    dm: function() {
        return this.Pa ? this.la.children.length : -1
    },
    ge: function(a) {
        this.Pa && this.la.ge(this, a)
    },
    tl: function() {
        null !=
            this.O.kb && 0 == this.pa && (this.pa = !0, this.hb())
    },
    Ik: function() {
        null != this.O.kb && 1 == this.pa && (this.pa = !1)
    },
    Eh: function() {
        this.Xd || this.hb()
    },
    hb: function() {
        var a, b = this.O.kb;
        switch (this.type) {
            case 4:
                this.Tg = this.Sc <= this.vb ? 0 : Math.floor((this.sa - this.vb) * b.pm / (this.Sc - this.vb));
                this.Tg = Math.min(this.Tg, b.pm - 1);
                a = this.c.h.ba.sb(b.frames[Math.max(this.Tg, 0)]);
                this.K = a.width;
                this.J = a.height;
                this.ia = a.Ja;
                this.ja = a.Ha;
                break;
            case 2:
            case 3:
                a = this.gd;
                b.jf == ja.nF && (a = this.hd);
                this.Tg = this.Sc <= this.vb ? 0 : (this.sa -
                    this.vb) * a / (this.Sc - this.vb);
                b.jf == ja.mF ? (this.ja = 0, this.J = this.hd, this.K = this.Tg, this.ia = 0 != (b.Uk & ja.rt) ? this.Tg - this.gd : 0) : (this.ia = 0, this.K = this.gd, this.J = this.Tg, this.ja = 0 != (b.Uk & ja.rt) ? this.Tg - this.hd : 0);
                break;
            case 1:
                a = 0 == this.Pi ? n.cj(this.sa, this.Cd) : n.$u(this.sa, this.Cd);
                var c, d, e, f = 0,
                    g = 0;
                for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.ba.sb(e), null !=
                    d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
                this.ia = f;
                this.ja = g;
                this.K = f;
                this.J = g;
                break;
            case 5:
                a = 0 == this.Pi ? n.cj(this.sa, this.Cd) : n.$u(this.sa, this.Cd), this.ia = b = null != this.pb ? this.pb.measureText(a, this.font) : (new ka(this.c.h, 16, 16)).measureText(a, this.font), this.ja = this.hd / 2 + this.Hd / 2, this.K = b, this.J = this.Hd, null == this.pb ? this.pb = new ka(this.c.h, this.K, this.J) : (this.K > this.pb.width || this.J > this.pb.height) && this.pb.resize(this.K, this.J), this.pb.Ws(a, n.Lp | n.Mp, new ba(0, 0, 1E3, 1E3), this.font, this.Ec)
        }
        this.Xd = !0
    },
    Eb: function(a, b, c) {
        if (this.pa && this.Xd) {
            var d, e, f;
            d = this.O.kb;
            b = b + this.o - this.ia - this.c.ca + this.za.x;
            c = c + this.m - this.ja - this.c.ga + this.za.y;
            var g = this.K,
                m = this.J;
            switch (this.type) {
                case 4:
                    d = this.c.h.ba.sb(d.frames[Math.max(this.Tg, 0)]);
                    a.nf(d, b + d.Ja, c + d.Ha, 0, 1, 1, this.F.Zb, this.F.$b);
                    break;
                case 2:
                case 3:
                    e = this.Ec;
                    f = this.mp;
                    switch (d.nj) {
                        case 1:
                            a.Ac(b, c, g, m, e, this.F.Zb, this.F.$b);
                            break;
                        case 2:
                            0 != (d.Uk & ja.rt) && (dl = e, e = f, f = dl), a.vx(b, c, g, m, e, f, 0 != d.Lo, this.F.Zb, this.F.$b)
                    }
                    break;
                case 1:
                    e = 0 == this.Pi ?
                        n.cj(this.sa, this.Cd) : n.$u(this.sa, this.Cd);
                    for (f = 0; f < e.length; f++) m = e.charCodeAt(f), g = 0, 45 == m ? g = d.frames[10] : 46 == m || 44 == m ? g = d.frames[12] : 43 == m ? g = d.frames[11] : 69 == m || 101 == m ? g = d.frames[13] : 48 <= m && 57 >= m && (g = d.frames[m - 48]), g = this.c.h.ba.sb(g), null != g && (a.nf(g, b + g.Ja, c + g.Ha, 0, 1, 1, this.F.Zb, this.F.$b), b += g.width);
                    break;
                case 5:
                    this.pb.Eb(a, b, c, this.F.Zb, this.F.$b)
            }
        }
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    }
});
rd.prototype = n.extend(new G, {
    Y: function() {
        this.Fc = -1;
        this.Ec = 0;
        var a = this.O.kb;
        this.K = this.gd =
            a.Xh;
        this.J = this.hd = a.Yh;
        this.type = a.jf;
        this.Ec = a.Dg;
        this.sl = a.Hw;
        this.sa = this.c.h.uB()[this.sl - 1];
        this.Cd = a.Uk;
        if (5 == this.type) {
            var b = this.Fc; - 1 == b && (b = a.pj);
            this.font = this.c.h.Ub.Gf(b);
            this.Hd = this.font.Ze()
        }
    },
    Fb: function() {},
    handle: function() {
        var a = this.c.h.uB()[this.sl - 1];
        a != this.sa && (this.sa = a, this.hb());
        this.F.handle();
        this.b.M && (this.b.M = !1)
    },
    qg: function() {
        var a = this.O.kb;
        if (5 == a.jf) {
            var b = this.Fc; - 1 == b && (b = a.pj);
            return this.c.h.Ub.jr(b)
        }
        return null
    },
    Vg: function(a, b) {
        5 == type && (this.Fc = hoAdRunHeader.h.Ub.Dq(a),
            a = this.c.h.Ub.Gf(this.Fc), this.Hd = a.Ze(), null != b && (this.K = this.gd = b.right - b.left, this.J = this.hd = b.bottom - b.top), this.hb())
    },
    ir: function() {
        return this.Ec
    },
    Ts: function(a) {
        this.Ec = a;
        this.hb()
    },
    Rl: function(a, b, c, d, e, f) {
        null != this.O.kb && 1 != this.Pa && (this.Pa = !0, this.pa = e, this.za = this.c.C.tb[c], this.la = d ? this.za.Nb : this.za.Qa, 0 > f ? this.la.me(this) : this.la.Bq(this, f), 5 != this.type && this.hb())
    },
    Wi: function() {
        if (null == this.O.kb || 0 == this.Pa) return -1;
        this.Pa = !1;
        var a = this.la.tc(this);
        this.la.removeChild(this);
        return a
    },
    tc: function() {
        return this.Pa ? this.la.tc(this) : -1
    },
    dm: function() {
        return this.Pa ? this.la.children.length : -1
    },
    ge: function(a) {
        this.Pa && this.la.ge(this, a)
    },
    tl: function() {
        null != this.O.kb && 0 == this.pa && (this.pa = !0, this.hb())
    },
    Ik: function() {
        null != this.O.kb && 1 == this.pa && (this.pa = !1)
    },
    UD: function(a) {
        a != this.sa && (this.sa = a, this.hb())
    },
    Eh: function() {
        this.Xd || this.hb()
    },
    hb: function() {
        this.Xd = !0;
        this.K = this.J = 1;
        if (null != this.O.kb) {
            var a = this.O.kb,
                b, c = n.cj(this.sa, this.Cd);
            switch (a.jf) {
                case 1:
                    var d, e, f =
                        0,
                        g = 0;
                    for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.ba.sb(b), f += b.width, g = Math.max(g, b.height));
                    this.ia = f;
                    this.ja = g;
                    this.K = f;
                    this.J = g;
                    break;
                case 5:
                    this.ia = a = null != this.pb ? this.pb.measureText(c, this.font) : (new ka(this.c.h, 8, 8)).measureText(c, this.font), this.ja = this.hd / 2 + this.Hd / 2, this.K = a, this.J = this.Hd, null == this.pb ? this.pb = new ka(this.c.h, this.K, this.J) :
                        (this.K > this.pb.width || this.J > this.pb.height) && this.pb.resize(this.K, this.J), this.pb.Ws(c, n.Lp | n.Mp, new ba(0, 0, 1E3, 1E3), this.font, this.Ec)
            }
        }
    },
    Eb: function(a, b, c) {
        if (this.pa && this.Xd) {
            this.globalAlpha = this.alpha;
            this.globalCompositeOperation = this.tk;
            var d = this.O.kb;
            b = b + this.o - this.ia - this.c.ca + this.za.x;
            var e = c + this.m - this.ja - this.c.ga + this.za.y;
            c = n.cj(this.sa, this.Cd);
            switch (this.type) {
                case 1:
                    var f, g;
                    for (f = 0; f < c.length; f++) {
                        var m = c.charCodeAt(f);
                        g = 0;
                        45 == m ? g = d.frames[10] : 46 == m || 44 == m ? g = d.frames[12] :
                            43 == m ? g = d.frames[11] : 69 == m || 101 == m ? g = d.frames[13] : 48 <= m && 57 >= m && (g = d.frames[m - 48]);
                        g = this.c.h.ba.sb(g);
                        a.nf(g, b + g.Ja, e + g.Ha, 0, 1, 1, this.F.Zb, this.F.$b);
                        b += g.width
                    }
                    break;
                case 5:
                    this.pb.Eb(a, b, e, this.F.Zb, this.F.$b)
            }
        }
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    }
});
sd.prototype = n.extend(new G, {
    Y: function() {
        this.Fc = -1;
        this.Ec = 0;
        var a = this.O.kb;
        this.K = this.gd = a.Xh;
        this.J = this.hd = a.Yh;
        this.type = a.jf;
        this.Ec = a.Dg;
        this.sl = a.Hw;
        this.sa = this.c.h.mB()[this.sl - 1];
        this.Cd = a.Uk;
        if (5 == this.type) {
            var b = this.Fc; - 1 ==
                b && (b = a.pj);
            this.font = this.c.h.Ub.Gf(b);
            this.Hd = this.font.Ze()
        }
    },
    Fb: function() {},
    handle: function() {
        var a = this.c.h.mB()[this.sl - 1];
        a != this.sa && (this.sa = a, this.hb());
        this.F.handle();
        this.b.M && (this.b.M = !1)
    },
    qg: function() {
        var a = this.O.kb;
        if (5 == a.jf) {
            var b = this.Fc; - 1 == b && (b = a.pj);
            return this.c.h.Ub.jr(b)
        }
        return null
    },
    Vg: function(a, b) {
        5 == type && (this.Fc = hoAdRunHeader.h.Ub.Dq(a), a = this.c.h.Ub.Gf(this.Fc), this.Hd = a.Ze(), null != b && (this.K = this.gd = b.right - b.left, this.J = this.hd = b.bottom - b.top), this.hb())
    },
    ir: function() {
        return this.Ec
    },
    Ts: function(a) {
        this.Ec = a;
        this.hb()
    },
    Rl: function(a, b, c, d, e, f) {
        null != this.O.kb && 1 != this.Pa && (this.Pa = !0, this.pa = e, this.za = this.c.C.tb[c], this.la = d ? this.za.Nb : this.za.Qa, 0 > f ? this.la.me(this) : this.la.Bq(this, f), 5 != this.type && this.hb())
    },
    Wi: function() {
        if (null == this.O.kb || 0 == this.Pa) return -1;
        this.Pa = !1;
        var a = this.la.tc(this);
        this.la.removeChild(this);
        return a
    },
    tc: function() {
        return this.Pa ? this.la.tc(this) : -1
    },
    dm: function() {
        return this.Pa ? this.la.children.length : -1
    },
    ge: function(a) {
        this.Pa && this.la.ge(this,
            a)
    },
    tl: function() {
        null != this.O.kb && 0 == this.pa && (this.pa = !0, this.hb())
    },
    Ik: function() {
        null != this.O.kb && 1 == this.pa && (this.pa = !1)
    },
    UD: function(a) {
        a != this.sa && (this.sa = a, this.hb())
    },
    Eh: function() {
        this.Xd || this.hb()
    },
    hb: function() {
        this.Xd = !0;
        this.K = this.J = 1;
        if (null != this.O.kb) {
            var a = this.O.kb;
            switch (a.jf) {
                case 4:
                    if (0 != this.sa) {
                        var b = this.c.h.ba.sb(a.frames[0]),
                            c = this.sa * b.width;
                        c <= this.gd ? (this.K = c, this.J = b.height) : (this.K = this.gd, this.J = (this.gd / b.width + this.sa - 1) * b.height);
                        break
                    }
                    this.K = this.J = 1;
                    break;
                case 1:
                    var d, e, b, f = 0,
                        g = 0,
                        c = n.cj(this.sa, this.Cd);
                    for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.ba.sb(e), f += b.width, g = Math.max(g, b.height));
                    this.ia = f;
                    this.ja = g;
                    this.K = f;
                    this.J = g;
                    break;
                case 5:
                    c = n.cj(this.sa, this.Cd), this.ia = a = null != this.pb ? this.pb.measureText(c, this.font) : (new ka(this.c.h, 8, 8)).measureText(c, this.font), this.ja = this.hd / 2 + this.Hd / 2, this.K = a,
                        this.J = this.Hd, null == this.pb ? this.pb = new ka(this.c.h, this.K, this.J) : (this.K > this.pb.width || this.J > this.pb.height) && this.pb.resize(this.K, this.J), this.pb.Ws(c, n.Lp | n.Mp, new ba(0, 0, 1E3, 1E3), this.font, this.Ec)
            }
        }
    },
    Eb: function(a, b, c) {
        if (this.pa && this.Xd) {
            this.globalAlpha = this.alpha;
            this.globalCompositeOperation = this.tk;
            var d, e = this.O.kb;
            b = b + this.o - this.ia - this.c.ca + this.za.x;
            c = c + this.m - this.ja - this.c.ga + this.za.y;
            switch (this.type) {
                case 1:
                    var f, g;
                    d = n.cj(this.sa, this.Cd);
                    for (f = 0; f < d.length; f++) {
                        var m = d.charCodeAt(f);
                        g = 0;
                        45 == m ? g = e.frames[10] : 46 == m || 44 == m ? g = e.frames[12] : 43 == m ? g = e.frames[11] : 69 == m || 101 == m ? g = e.frames[13] : 48 <= m && 57 >= m && (g = e.frames[m - 48]);
                        g = this.c.h.ba.sb(g);
                        a.nf(g, b + g.Ja, c + g.Ha, 0, 1, 1, this.F.Zb, this.F.$b);
                        b += g.width
                    }
                    break;
                case 4:
                    if (0 != this.sa) {
                        d = b + this.K;
                        f = c + this.J;
                        var m = b,
                            p = this.sa;
                        for (g = this.c.h.ba.sb(e.frames[0]); c < f && 0 < p; c += g.height)
                            for (b = m; b < d && 0 < p; b += g.width, --p) a.nf(g, b + g.Ja, c + g.Ha, 0, 1, 1, this.F.Zb, this.F.$b)
                    }
                    break;
                case 5:
                    this.pb.Eb(a, b, c, this.F.Zb, this.F.$b)
            }
        }
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    }
});
td.prototype = n.extend(new G, {
    Y: function(a, b) {
        var c = a.Zc;
        this.K = c.Vw;
        this.J = c.Ww;
        this.gd = c.Vw;
        this.hd = c.Ww;
        this.Sc = c.Wk;
        this.np = 0;
        0 < c.Xb.length && (this.np = c.Xb[0].Xx);
        this.ri = null;
        this.Fc = -1;
        this.vb = 0;
        this.pa = !0;
        this.FD = b.En;
        0 != (b.En & h.vt) && 0 < c.Xb.length && (this.ri = c.Xb[0].ti);
        var d = this.Fc; - 1 == d && 0 < c.Xb.length && (d = c.Xb[0].cn);
        this.font = this.c.h.Ub.Gf(d);
        this.pb = new ka(this.c.h, this.K, this.J)
    },
    Fb: function() {},
    handle: function() {
        this.F.handle();
        this.b.M && (this.b.M = !1)
    },
    qg: function() {
        var a =
            this.Fc; - 1 == a && (a = this.O.Zc.Xb[0].cn);
        return this.c.h.Ub.jr(a)
    },
    Vg: function(a, b) {
        this.Fc = this.c.h.Ub.Dq(a);
        this.font = this.c.h.Ub.Gf(this.Fc);
        null != b && (this.K = b.right - b.left, this.J = b.bottom - b.top, this.pb.resize(this.K, this.J));
        this.b.M = !0;
        this.hb()
    },
    ir: function() {
        return this.np
    },
    Ts: function(a) {
        this.np = a;
        this.hb()
    },
    Rl: function(a, b, c, d, e, f) {
        1 != this.Pa && (this.Pa = !0, this.pa = e, this.za = this.c.C.tb[c], this.la = d ? this.za.Nb : this.za.Qa, 0 > f ? this.la.me(this) : this.la.Bq(this, f))
    },
    Wi: function() {
        if (0 == this.Pa) return -1;
        this.Pa = !1;
        var a = this.la.tc(this);
        this.la.removeChild(this);
        return a
    },
    tc: function() {
        return this.Pa ? this.la.tc(this) : -1
    },
    dm: function() {
        return this.Pa ? this.la.children.length : -1
    },
    ge: function(a) {
        this.Pa && this.la.ge(this, a)
    },
    tl: function() {
        0 == this.pa && (this.pa = !0)
    },
    Ik: function() {
        1 == this.pa && (this.pa = !1)
    },
    qM: function(a) {
        -1 > a && (a = -1);
        a >= this.Sc && (a = this.Sc - 1);
        if (a == this.vb) return !1;
        this.vb = a;
        0 <= a && this.pE(this.O.Zc.Xb[this.vb].ti);
        this.hb();
        return 0 != (this.F.W & w.xh) ? !1 : !0
    },
    pE: function(a) {
        this.ri = a;
        this.hb()
    },
    Eh: function() {
        this.Xd || this.hb()
    },
    hb: function() {
        this.Xd = !0;
        var a = this.O.Zc,
            b = a.Xb[0].Bp;
        this.ja = this.ia = 0;
        this.rect.left = 0;
        this.rect.top = 0;
        this.rect.right = this.K;
        this.rect.bottom = this.J;
        0 <= this.vb ? a = a.Xb[this.vb].ti : (a = this.ri, null == a && (a = ""));
        b &= n.Lp | n.Zj | n.xt | n.Mp | n.Kp | n.zi | n.sF;
        a = this.pb.Ws(a, b, this.rect, this.font, this.np);
        0 == (b & (n.Kp | n.zi)) && (this.J = a)
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    },
    Eb: function(a, b, c) {
        this.pa && this.Xd && this.pb.Eb(a, b + this.o - this.c.ca + this.za.x, c + this.m - this.c.ga +
            this.za.y, this.F.Zb, this.F.$b)
    }
});
ud.prototype = n.extend(new G, {
    Y: function() {},
    Fb: function() {},
    handle: function() {
        this.c.pause();
        this.c.ss = this;
        this.c.C.tb[this.c.C.Nc - 1].Qa.me(this);
        this.wI()
    },
    Xq: function() {
        this.c.C.tb[this.c.C.Nc - 1].Qa.removeChild(this)
    },
    KJ: function() {
        var a;
        a = this.c.h.Nf - this.c.h.Yf;
        var b = this.c.h.Of - this.c.h.Zf;
        0 == this.uk ? this.c.h.nc[l.dd] && (a = this.rB(a, b), 0 != a && (this.uk = a)) : this.c.h.nc[l.dd] || (this.rB(a, b) == this.uk ? (this.c.i.Dc = this.uk, this.c.i.qd(this, -5439484), 0 != (this.O.Zc.Xb[this.uk].Bp &
            pa.RH) ? this.c.i.qd(this, -5308412) : this.c.i.qd(this, -5373948), this.Xq(), this.c.ss = null, this.c.resume(), this.c.dr(this.Vb, !0)) : this.uk = 0)
    },
    rB: function(a, b) {
        var c;
        if (null != this.Nd)
            for (c = 1; c < this.Nd.length; c++)
                if (a >= this.Nd[c].left && a < this.Nd[c].right && b > this.Nd[c].top && b < this.Nd[c].bottom) return c;
        return 0
    },
    Hz: function(a, b, c) {
        var d, e;
        c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
        a.As(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
        var f = Array(3),
            g;
        for (g = 0; 3 > g; g++) f[g] = new ta;
        f[0].x = b.right - 1;
        0 == c &&
            --f[0].x;
        f[0].y = b.top + 1;
        f[1].y = b.top + 1;
        f[1].x = b.left + 1;
        f[2].x = b.left + 1;
        f[2].y = b.bottom;
        0 == c && --f[2].y;
        a.xd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
        a.xd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
        0 == c && --f[0].x;
        f[0].y += 1;
        f[1].x += 1;
        f[1].y += 1;
        f[2].x += 1;
        0 == c && --f[2].y;
        a.xd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
        a.xd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
        0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.xd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.xd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x,
            --f[1].y, f[2].x += 1, --f[2].y, a.xd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.xd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
    },
    CL: function(a, b, c) {
        var d = new ba;
        d.aA(this.Nd[b]);
        this.Hz(a, this.Nd[b], c);
        d.left += 2;
        d.top += 2;
        d.right -= 4;
        d.bottom -= 4;
        c && (d.left += 2, d.top += 2);
        this.Yg[b].Eb(a, (d.left + d.right) / 2 - this.Yg[b].width / 2, (d.top + d.bottom) / 2 - this.Yg[b].height / 2, 0, 0)
    },
    wI: function() {
        this.Ur = new ka(this.c.h, 8, 8);
        var a = this.O.Zc,
            b = this.c,
            c = a.Xb[1],
            d = c.Xx,
            e = 0 != (c.Bp & pa.kz),
            f = b.h.Ub.Gf(c.cn);
        this.mt = Math.floor(3 * this.Ur.measureText("X",
            f) / 2);
        this.bj = 4;
        this.Id = 64;
        var g;
        for (g = 1; g < a.Xb.length; g++) c = a.Xb[g], 0 < c.ti.length && (c = this.Ur.measureText(c.ti, f), this.Id = Math.max(this.Id, c + 2 * this.mt + 4), this.bj = Math.max(this.bj, Math.floor(3 * f.Ze() / 2)));
        this.vr = Math.max(Math.floor(this.bj / 4), 2);
        this.Id += 2 * this.mt + 4;
        var m = new ba;
        for (g = 1; g < a.Xb.length; g++) c = a.Xb[g], this.Yg[g] = new ka(b.h, this.Id, this.bj), m.right = this.Id, m.bottom = this.bj, this.Yg[g].Tr(c.ti, n.Zj | n.zi, m, d, f, e ? 1 : 0, 16777215);
        a = a.Xb[0];
        e = 0 != (a.Bp & pa.kz);
        f = b.h.Ub.Gf(a.cn);
        g = Math.floor(3 *
            this.Ur.measureText("X", f) / 2);
        c = this.Ur.measureText(a.ti, f);
        this.ko = Math.floor(3 * f.Ze() / 2);
        this.Id = Math.max(this.Id, c + 2 * g + 4);
        this.Id > b.h.oa ? this.Id = b.h.oa : this.Id > b.C.rd && (this.Id = b.C.rd);
        m.right = this.Id;
        m.bottom = this.ko;
        this.Yg[0] = new ka(b.h, this.Id, this.ko);
        this.Yg[0].Tr(a.ti, n.Zj | n.zi, m, d, f, e ? 1 : 0, 16777215)
    },
    Eb: function(a) {
        var b = this.O.Zc,
            c = this.c,
            d = this.o - c.ca,
            c = this.m - c.ga,
            e = new ba;
        e.left = d;
        e.top = c;
        var f = this.ko + 1 + (this.bj + this.vr) * (b.Xb.length - 1) + this.vr + 4;
        e.right = d + this.Id;
        e.bottom = c + f;
        a.Ac(e.left,
            e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
        this.Hz(a, e, !1);
        e.left += 2;
        e.top += 2;
        e.right -= 2;
        e.bottom = e.top + this.ko;
        this.Yg[0].Eb(a, (e.left + e.right) / 2 - this.Yg[0].width / 2, (e.top + e.bottom) / 2 - this.Yg[0].height / 2, 0, 0);
        e.top = e.bottom;
        a.xd(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
        e.top += 1;
        e.bottom += 1;
        a.xd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
        if (null == this.Nd)
            for (this.Nd = Array(b.Xb.length), i = 1; i < b.Xb.length; i++) this.Nd[i] = new ba, this.Nd[i].left = d + 2 + this.mt, this.Nd[i].right = d + this.Id - 2 - this.mt,
                this.Nd[i].top = c + 2 + this.ko + 1 + this.vr + (this.bj + this.vr) * (i - 1), this.Nd[i].bottom = this.Nd[i].top + this.bj;
        for (i = 1; i < b.Xb.length; i++) this.CL(a, i, this.uk == i)
    }
});
vd.prototype = n.extend(new G, {
    Y: function(a, b) {
        this.ext.Y(this);
        var c = this.c.h.file.kg(a.MC);
        this.dx = a.OC;
        this.ext.Uu(c, b, a.PC)
    },
    su: function(a, b, c, d, e) {
        this.za = this.c.C.tb[d];
        this.pa = e;
        1 != this.Pa && (this.Pa = !0, this.la = this.za.Qa, this.la.me(this))
    },
    Rl: function(a, b, c, d, e) {
        this.za = this.c.C.tb[c];
        this.pa = e;
        1 != this.Pa && (this.Pa = !0, this.la = d ? this.za.Nb :
            this.za.Qa, this.la.me(this))
    },
    Wi: function() {
        if (0 == this.Pa) return -1;
        this.Pa = !1;
        var a = this.la.tc(this);
        this.la.removeChild(this);
        return a
    },
    handle: function() {
        0 != (this.ta & 512) ? this.F.handle() : 16 == (this.ta & 48) || 48 == (this.ta & 48) ? this.A.move() : 32 == (this.ta & 48) && this.ha.De();
        var a = 0;
        0 == this.Cw && (a = this.ext.zv());
        0 != (a & Fa.gz) && (this.Cw = !0);
        null != this.b && this.b.M && (this.b.M = !1)
    },
    Oi: function() {
        this.ext.Oi()
    },
    dA: function() {},
    Eb: function() {},
    Fb: function(a) {
        this.ext.Xu(a)
    },
    pJ: function() {
        return null
    },
    Fn: function(a,
        b) {
        return this.ext.Fn(a, b)
    },
    action: function(a, b) {
        this.ext.action(a, b)
    },
    Sn: function(a) {
        return this.ext.Sn(a)
    },
    $m: function(a) {
        this.F.Zb = w.tf;
        this.F.$b = a
    },
    jS: function() {},
    tl: function() {
        this.pa = !0
    },
    Ik: function() {
        this.pa = !1
    },
    tc: function() {
        return this.la.tc(this)
    },
    dm: function() {
        return this.la.children.length
    },
    ge: function(a) {
        a >= this.la.children.length && (a = this.la.children.length);
        0 > a && (a = 0);
        this.la.ge(this, a)
    },
    $K: function() {},
    zI: function() {},
    bm: function() {
        this.ext.bm()
    },
    bw: function(a) {
        this.c.h.ba.bw(a)
    },
    DR: function(a) {
        return this.c.h.ba.sb(a)
    },
    tR: function() {
        return this.c.h
    },
    JR: function() {
        return this.o
    },
    KR: function() {
        return this.m
    },
    IR: function() {
        return this.K
    },
    Ze: function() {
        return this.J
    },
    Lx: function(a) {
        null != this.A ? this.A.V.Qb(a) : (this.o = a, null != this.b && (this.b.M = !0, this.b.Ra = !0))
    },
    Mx: function(a) {
        null != this.A ? this.A.V.Rb(a) : (this.m = a, null != this.b && (this.b.M = !0, this.b.Ra = !0))
    },
    Ys: function(a) {
        this.K = a
    },
    Us: function(a) {
        this.J = a
    },
    tp: function(a, b) {
        this.K = a;
        this.J = b
    },
    aS: function() {
        this.Cw = !1
    },
    fB: function(a,
        b) {
        if (0 == this.c.Uf) {
            var c = this.c.i.Dc;
            this.c.i.Dc = b;
            a = -(a + R.Ai + 1) << 16;
            a |= this.xa & 65535;
            this.c.i.qd(this, a);
            this.c.i.Dc = c
        }
    },
    WR: function(a, b) {
        0 == this.c.Uf && (a = -(a + R.Ai + 1) << 16, a |= this.xa & 65535, this.c.i.jL(1, a, b, this, this.bf))
    },
    pause: function() {
        this.c.pause()
    },
    resume: function() {
        this.c.resume()
    },
    bS: function() {},
    gR: function() {
        this.c.lg(this.Vb)
    },
    setPosition: function(a, b) {
        null != this.A ? (this.A.V.Qb(a), this.A.V.Rb(b)) : (this.o = a, this.m = b, null != this.b && (this.b.M = !0, this.b.Ra = !0))
    },
    xR: function() {
        return this.dx
    },
    iS: function(a) {
        this.dx = a
    },
    Aq: function(a, b, c, d, e) {
        this.c.Aq(a, b, c, e, d, !0)
    },
    vR: function() {
        return this.c.Sm
    },
    Ek: function() {
        this.c.yd++;
        return this.c.getExpression()
    },
    wR: function() {
        return this.c.i.Dc
    },
    Iz: function(a, b, c) {
        return 0 != (a.ta & z.vh) && a.b.Oc == S.Gi ? a.A.V.Iz(b, c) : 0
    },
    yR: function() {
        this.Ew = this.Jo = 0;
        return this.zJ()
    },
    zJ: function() {
        if (this.Ew < this.c.ob) {
            for (; null == this.c.H[this.Jo];) this.Jo++;
            var a = this.c.H[this.Jo];
            this.Ew++;
            this.Jo++;
            return a
        }
        return null
    },
    FR: function(a) {
        var b = 0,
            c;
        for (c = 0; c < this.c.ob; c++) {
            for (; null ==
                this.c.H[b];) b++;
            var d = this.c.H[b];
            b++;
            if ((d.Av << 16 | d.Vb & 65535) == a) return d
        }
        return null
    },
    TA: function(a) {
        return this.c.TA(a)
    },
    UA: function(a) {
        return this.c.UA(a)
    },
    WK: function(a) {
        return hoAdRunHeader.h.WK(a)
    },
    YQ: function() {}
});
Na.lH = 22;
Na.create = function(a) {
    var b = a.file.S,
        c = null,
        d = a.file.v(),
        e = a.file.v();
    switch (e) {
        case 1:
            c = new Se(a);
            break;
        case 2:
            c = new Te(a);
            break;
        case 3:
            c = new fa(a);
            break;
        case 4:
            c = new fa(a);
            break;
        case 5:
            c = new Ka(a);
            break;
        case 6:
            c = new Pa(a);
            break;
        case 9:
            c = new hb(a);
            break;
        case 10:
            c = new fa(a);
            break;
        case 11:
            c = new fa(a);
            break;
        case 12:
            c = new fa(a);
            break;
        case 13:
            c = new Pe(a);
            break;
        case 14:
            c = new xd(a);
            break;
        case 15:
            c = new qa(a);
            break;
        case 16:
            c = new yd(a);
            break;
        case 17:
            c = new fa(a);
            break;
        case 18:
            c = new zd(a);
            break;
        case 19:
            c = new Ue(a);
            break;
        case 21:
            c = new hb(a);
            break;
        case 22:
            c = new qa(a);
            break;
        case 23:
            c = new qa(a);
            break;
        case 24:
            c = new Oe(a);
            break;
        case 25:
            c = new Ka(a);
            break;
        case 26:
            c = new fa(a);
            break;
        case 27:
            c = new qa(a);
            break;
        case 28:
            c = new qa(a);
            break;
        case 29:
            c = new Ka(a);
            break;
        case 31:
            c = new fa(a);
            break;
        case 32:
            c =
                new fa(a);
            break;
        case 34:
            c = new Ka(a);
            break;
        case 35:
            c = new Pa(a);
            break;
        case 36:
            c = new Pa(a);
            break;
        case 37:
            c = new fa(a);
            break;
        case 38:
            c = new la(a);
            break;
        case 39:
            c = new Re(a);
            break;
        case 40:
            c = new Va(a);
            break;
        case 41:
            c = new Va(a);
            break;
        case 42:
            c = new Ne(a);
            break;
        case 43:
            c = new fa(a);
            break;
        case 44:
            c = new xd(a);
            break;
        case 45:
            c = new qa(a);
            break;
        case 46:
            c = new qa(a);
            break;
        case 47:
            c = new wd(a);
            break;
        case 48:
            c = new Ka(a);
            break;
        case 49:
            c = new fa(a);
            break;
        case 50:
            c = new fa(a);
            break;
        case 51:
            c = new wd(a);
            break;
        case 52:
            c = new qa(a);
            break;
        case 53:
            c = new qa(a);
            break;
        case 54:
            c = new qa(a);
            break;
        case 55:
            c = new Qe(a);
            break;
        case 56:
            c = new Ka(a);
            break;
        case 57:
            c = new fa(a);
            break;
        case 58:
            c = new fa(a);
            break;
        case 59:
            c = new qa(a);
            break;
        case 60:
            c = new fa(a);
            break;
        case 61:
            c = new fa(a);
            break;
        case 62:
            c = new qa(a);
            break;
        case 63:
            c = new Va(a);
            break;
        case 64:
            c = new Va(a);
            break;
        case 67:
            c = new fa(a)
    }
    c.code = e;
    a.file.seek(b + d);
    return c
};
la.fG = 1;
la.yO = 2;
la.Lt = 4;
la.Kt = 8;
la.zO = 16;
ma.dF = 1;
ma.cF = 2;
ma.eF = 4;
ma.ry = 8;
ma.prototype = {
    ap: function(a, b, c) {
        c.hm = -1;
        if (-1 == this.So) {
            0 !=
                b && (c.dir = -1, 0 == (this.$k & ma.ry) && (c.dir = a.tv(this.js)));
            c.x = this.ms;
            c.y = this.ns;
            var d = this.ax;
            d > a.C.Nc - 1 && (d = a.C.Nc - 1);
            c.hm = d;
            c.zu = !1
        } else {
            a.i.Jm = !1;
            d = a.i.mr(this.To);
            c.zu = a.i.Bc;
            if (null == d) return !1;
            c.x = d.o;
            c.y = d.m;
            c.hm = d.be;
            if (0 != (this.$k & ma.cF) && 0 != (d.ta & z.ek) && 0 <= d.b.Ga) {
                var e;
                e = d.b.Ua;
                null != a.Rp(d) && (e = 0);
                e = a.h.ba.Fk(d.b.Ga, e, d.b.mb, d.b.nb);
                c.x += e.eh - e.Ja;
                c.y += e.fh - e.Ha
            }
            if (0 != (this.$k & ma.dF)) {
                e = this.$w + d.c.Jb(d) & 31;
                var f = D.sJ(this.ks, e);
                c.x += D.rJ(this.ks, e);
                c.y += f
            } else c.x += this.ms, c.y += this.ns;
            0 != (b & 1) && (c.dir = 0 != (this.$k & ma.ry) ? -1 : 0 != (this.$k & ma.eF) ? d.c.Jb(d) : a.tv(this.js))
        }
        return 0 != (b & 2) && (c.x < a.Nm || c.x > a.Lm || c.y < a.Rm || c.y > a.Pm) ? !1 : !0
    }
};
yd.prototype = n.extend(new ma, {});
hb.prototype = n.extend(new ma, {});
zd.prototype = n.extend(new ma, {});
Wa.prototype = {
    Ac: function() {},
    wx: function() {},
    vx: function() {},
    tD: function() {},
    nf: function() {},
    Cj: function() {},
    uD: function() {},
    vD: function() {},
    xd: function() {},
    As: function() {},
    sD: function() {},
    iD: function(a, b, c, d) {
        var e = this.qk[this.qk.length - 1];
        e && (a < e.x &&
            (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.kt && (c = e.x + e.kt - a), b + d > e.y + e.rr && (d = e.y + e.rr - b));
        a = {
            x: a,
            y: b,
            kt: c,
            rr: d
        };
        this.qk.push(a);
        return a
    },
    bD: function() {
        this.qk.pop()
    }
};
Da.prototype = n.extend(new Wa, {
    Bs: function(a) {
        this.Sw = this.Ox = a;
        this.Oa.imageSmoothingEnabled = a;
        this.Oa.webkitImageSmoothingEnabled = a;
        this.Oa.mozImageSmoothingEnabled = a;
        this.Oa.msImageSmoothingEnabled = a;
        this.Rw = -1;
        this.Re(0, 0)
    },
    QD: function(a, b) {
        this.Oa.scale(a, b);
        this.Ep = a;
        this.Gp = b;
        this.yk = this.xk = 0;
        1 < this.Ep ? this.xk = 1 : 0 < this.Ep && 1 > this.Ep &&
            (this.xk = 1 / this.Ep);
        1 < this.Gp && (this.yk = 1);
        0 < this.Gp && 1 > this.Gp && (this.yk = 1 / this.Gp)
    },
    Mq: function(a, b, c, d) {
        this.Oa.clearRect(a, b, c, d)
    },
    Ac: function(a, b, c, d, e, f, g) {
        var m = this.Oa;
        this.Re(f, g);
        m.fillStyle = n.Ge(e);
        m.fillRect(a, b, c, d)
    },
    wx: function(a, b, c, d, e, f, g) {
        var m = this.Oa;
        this.Re(f, g);
        m.fillStyle = n.Ge(e);
        n.Tq(m, a, b, c, d);
        m.fill()
    },
    vx: function(a, b, c, d, e, f, g, m, p) {
        if (e == f) return this.Ac(a, b, c, d, e, m, p);
        var h = this.Oa;
        this.Re(m, p);
        this.Yz(a, b, c, d, g, e, f);
        h.fillRect(a, b, c, d)
    },
    tD: function(a, b, c, d, e, f, g, m, p) {
        if (e ==
            f) return this.wx(a, b, c, d, e, m, p);
        var h = this.Oa;
        this.Re(m, p);
        this.Yz(a, b, c, d, g, e, f);
        n.Tq(h, a, b, c, d);
        this.Oa.fill()
    },
    nf: function(a, b, c, d, e, f, g, m) {
        var p = this.Oa,
            h = b - a.Ja,
            l = c - a.Ha;
        this.Re(g, m);
        0 == d && 1 == e && 1 == f ? 0 == a.Bb ? null != a.Ab && p.drawImage(a.Ab, h, l) : p.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, h, l, a.width, a.height) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e), Math.max(.001, f)), p.translate(-a.Ja, -a.Ha), 0 == a.Bb ? null != a.Ab && 0 != a.width && 0 != a.height && p.drawImage(a.Ab,
            0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, 0, 0, a.width, a.height), p.restore())
    },
    FL: function(a, b, c, d, e, f, g, m) {
        var p = this.Oa,
            h = b - a.Ja,
            l = c - a.Ha;
        this.Re(g, m);
        0 == d && 1 == e && 1 == f ? 0 == a.Bb ? null != a.Ab && p.drawImage(a.Ab, 0, 0, a.width, a.height, h, l, a.width + this.xk, a.height + this.yk) : p.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, h, l, a.width + this.xk, a.height + this.yk) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e),
            Math.max(.001, f)), p.translate(-a.Ja, -a.Ha), 0 == a.Bb ? null != a.Ab && p.drawImage(a.Ab, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, 0, 0, a.width, a.height), p.restore())
    },
    Cj: function(a, b, c, d, e, f, g) {
        this.Re(f, g);
        this.Oa.drawImage(a, b, c, d, e)
    },
    uD: function(a, b, c, d, e, f, g) {
        var m = this.Oa;
        this.Re(f, g);
        m.save();
        m.beginPath();
        m.moveTo(b, c);
        m.lineTo(b + d, c);
        m.lineTo(b + d, c + e);
        m.lineTo(b, c + e);
        m.lineTo(b, c);
        m.clip();
        f = a.width;
        g = a.height;
        d = Math.floor(d / f) + 1;
        e = Math.floor(e /
            g) + 1;
        var p, h;
        for (p = 0; p < d; p++)
            for (h = 0; h < e; h++) 0 == a.Bb ? null != a.Ab && m.drawImage(a.Ab, 0, 0, a.width, a.height, b + p * f, c + h * g, a.width + this.xk, a.height + this.yk) : m.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, b + p * f, c + h * g, a.width + this.xk, a.height + this.yk);
        m.restore()
    },
    vD: function(a, b, c, d, e, f, g) {
        if (!(a instanceof ha)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
        var m = this.Oa;
        this.Re(f, g);
        0 == a.Bb ? null != a.Ab && (m.fillStyle = m.createPattern(a.Ab, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"),
            a.pattern.width = a.width, a.pattern.height = a.height, m = a.pattern.getContext("2d"), m.drawImage(a.app.ba.Lb[a.Bb], a.td, a.ud, a.width, a.height, 0, 0, a.width, a.height)), m.fillStyle = m.createPattern(a.pattern, "repeat"));
        n.Tq(m, b, c, d, e);
        this.Oa.fill()
    },
    xd: function(a, b, c, d, e, f, g, m) {
        var p = this.Oa;
        this.Re(g, m);
        p.strokeStyle = n.Ge(e);
        p.lineCap = "round";
        p.lineWidth = f;
        p.beginPath();
        p.moveTo(a, b);
        p.lineTo(c, d);
        p.closePath();
        p.stroke()
    },
    As: function(a, b, c, d, e, f, g, m) {
        var p = this.Oa;
        this.Re(g, m);
        p.strokeStyle = n.Ge(e);
        p.lineWidth =
            f;
        p.strokeRect(a, b, c, d)
    },
    sD: function(a, b, c, d, e, f, g, m) {
        var p = this.Oa;
        this.Re(g, m);
        p.lineWidth = e;
        p.strokeStyle = n.Ge(f);
        n.Tq(p, a, b, c, d);
        this.Oa.stroke()
    },
    clip: function(a, b, c, d) {
        var e = this.Oa;
        e.save();
        e.beginPath();
        e.rect(a, b, c, d);
        e.clip()
    },
    sM: function() {
        this.Oa.restore()
    },
    iD: function() {
        var a = this.Oa,
            b = Wa.prototype.iD.apply(this, arguments);
        a.beginPath();
        a.rect(b.x, b.y, b.kt, b.rr);
        a.clip()
    },
    bD: function() {
        var a = this.Oa;
        Wa.prototype.bD.apply(this, arguments);
        if (0 < this.qk.length) {
            var b = this.qk[this.qk.length -
                1];
            a.beginPath();
            a.rect(b.x, b.y, b.kt, b.rr);
            a.clip()
        } else a.cS()
    },
    Re: function(a, b) {
        var c = this.Oa;
        if ("undefined" == typeof a) c.globalAlpha = 1, c.tk = "source-over";
        else if (a != this.Rw || b != this.TK) {
            this.Rw = a;
            this.TK = b;
            var d = a & w.hy,
                e = 0 != (a & w.iy) | this.Ox;
            e != this.Sw && (this.Sw = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled = e);
            c.globalAlpha = 0 != (a & w.st) ? (b >>> 24 & 255) / 255 : d == w.tf ? (128 - b) / 128 : 1;
            switch (d) {
                case w.JE:
                    c.tk = "lighter";
                    break;
                case w.KE:
                    c.tk =
                        "xor";
                    break;
                default:
                    c.tk = "source-over"
            }
        }
    },
    Yz: function(a, b, c, d, e, f, g) {
        a = e ? this.Oa.createLinearGradient(a, b, a, b + d) : this.Oa.createLinearGradient(a, b, a + c, b);
        a.addColorStop(0, n.Ge(f));
        a.addColorStop(1, n.Ge(g));
        this.Oa.fillStyle = a
    }
});
ua.xq = 1;
ua.prototype = {
    load: function(a) {
        var b = a.S;
        a.ma(4);
        this.oE = a.w();
        this.nE = a.w();
        this.Ap = a.w();
        this.zp = a.Pc();
        var c = a.w(),
            d = a.w();
        a.seek(b + c);
        this.Kn = a.ub();
        this.Kn = this.Kn.substr(0, this.Kn.indexOf("."));
        this.nA = b + d
    }
};
Ad.prototype = {
    wB: function() {
        return null
    }
};
v.Up = 0;
v.sq =
    1;
v.jz = 2;
v.jy = 3;
v.tt = 0;
v.Nt = 1;
v.oy = 2;
v.iz = 3;
v.Hi = 0;
v.Ii = 1;
v.Vj = 2;
v.Wj = 3;
v.ny = 4;
v.ty = 0;
v.qF = 1;
v.mu = 1;
v.yq = 2;
v.prototype = {
    start: function(a, b, c, d) {
        this.tA = b;
        this.Gh = this.tA.getContext("2d");
        this.aa = c;
        this.u = d;
        this.Mr = (new Date).getTime();
        this.l = a.nE;
        0 == this.l && (this.l = 1);
        this.so = this.Mr;
        this.to = this.Mr + this.l;
        this.ua = this.SB = !0
    },
    finish: function() {},
    yr: function() {
        if (this.SB) {
            var a = new Date;
            return a.getTime() >= this.to ? !0 : a.getTime() >= this.to
        }
        return !0
    },
    uc: function() {
        this.so = (new Date).getTime();
        this.so >
            this.to && (this.so = this.to);
        return this.so - this.Mr
    },
    G: function(a, b, c, d, e, f, g) {
        this.Or && (this.Gh.globalCompositeOperation = "source-atop");
        1 == arguments.length ? this.Gh.drawImage(a, 0, 0) : 0 < f && 0 < g && this.Gh.drawImage(a, d, e, f, g, b, c, f, g)
    },
    stretch: function(a, b, c, d, e, f, g, m, p) {
        this.Or && (this.Gh.globalCompositeOperation = "source-atop");
        0 < d && 0 < e && 0 < m && 0 < p && this.Gh.drawImage(a, f, g, m, p, b, c, d, e)
    },
    Sb: function() {},
    end: function() {},
    Y: function() {}
};
Bd.prototype = {
    iM: function(a, b) {
        var c = a.O.vm;
        b && (c = a.O.Ko);
        var d = null,
            e;
        if (0 !=
            (a.ta & z.ek)) {
            var f = this.app.ba.sb(a.b.Ga),
                d = document.createElement("canvas");
            d.width = f.width;
            d.height = f.height;
            e = d.getContext("2d");
            0 == f.Bb ? e.drawImage(f.Ab, 0, 0) : e.drawImage(this.app.ba.Lb[f.Bb], f.td, f.ud, f.width, f.height, 0, 0, f.width, f.height)
        } else 32 <= a.xa && (d = document.createElement("canvas"), d.width = a.K, d.height = a.J, new StandardRendered(d), d = null);
        if (null == d) return null;
        e = d.width;
        var g = d.height,
            f = document.createElement("canvas");
        f.width = e;
        f.height = g;
        var m = document.createElement("canvas");
        m.width =
            e;
        m.height = g;
        var p = document.createElement("canvas");
        p.width = e;
        p.height = g;
        b ? (e = m.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Ap & ua.xq) && this.$z(p, d, c.zp)) : (e = p.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Ap & ua.xq) && this.$z(m, d, c.zp));
        c = this.Wl(c, f, m, p);
        null != c && (d = 0, 0 != (a.X & G.Ci) ? (c.Or = !0, d |= v.yq) : (c.Or = !1, d |= v.mu), a.yl = f, c.Sb(d));
        return c
    },
    $z: function(a, b, c) {
        a = a.getContext("2d");
        a.drawImage(b, 0, 0);
        var d = b.width;
        b = b.height;
        var e = a.getImageData(0, 0, d, b),
            f, g = (c & 16711680) >>
            16,
            m = (c & 65280) >> 8,
            p = c & 255;
        for (f = 0; f < b; f++)
            for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = m, e.data[4 * (f * d + c) + 2] = p);
        a.putImageData(e, 0, 0)
    },
    Wl: function(a, b, c, d) {
        var e = null;
        "cctrans" == a.Kn.toLowerCase() && (e = new Qa);
        return null != e ? (e = e.wB(a), this.app.file.seek(a.nA), e.Or = !1, e.Y(a, this.app.file, b, c, d), e) : null
    }
};
Qa.CB = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
Qa.prototype = n.extend(new Ad, {
    wB: function(a) {
        var b =
            a.oE;
        a = "" + String.fromCharCode(b & 255);
        b >>= 8;
        a += String.fromCharCode(b & 255);
        b >>= 8;
        a += String.fromCharCode(b & 255);
        a += String.fromCharCode(b >> 8 & 255);
        for (b = 0; b < Qa.CB.length && a != Qa.CB[b]; b++);
        a = null;
        switch (b) {
            case 0:
                a = new Ed;
                break;
            case 1:
                a = new Cd;
                break;
            case 2:
                a = new Dd;
                break;
            case 3:
                a = new Fd;
                break;
            case 4:
                a = new Gd;
                break;
            case 5:
                a = new Id;
                break;
            case 6:
                a = new Jd;
                break;
            case 7:
                a = new Kd;
                break;
            case 8:
                a = new Ld;
                break;
            case 9:
                a = new Md;
                break;
            case 10:
                a = new Nd;
                break;
            case 11:
                a = new Od;
                break;
            case 12:
                a = new Pd;
                break;
            case 13:
                a = new Qd;
                break;
            case 14:
                a = new Rd;
                break;
            case 15:
                a = new Sd;
                break;
            case 16:
                a = new Td;
                break;
            case 17:
                a = new Ud;
                break;
            case 18:
                a = new Vd;
                break;
            case 19:
                a = new Wd;
                break;
            case 20:
                a = new Hd
        }
        return a
    }
});
Cd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.TB = 8 != this.bb ? this.bb : Math.floor(8 * Math.random()));
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c;
            switch (this.TB) {
                case 0:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f * a / this.l;
                    this.G(this.u, b, 0, b, this.f - c, b, c);
                    break;
                case 1:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f * a / this.l;
                    this.G(this.u, b, this.f - c, b, 0, b, c);
                    break;
                case 2:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f * a / this.l;
                    this.G(this.u, b, 0, b, 0, b, c);
                    break;
                case 3:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f * a / this.l;
                    this.G(this.u, b, this.f - c, b, this.f - c, b, c);
                    break;
                case 4:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f / 2 * a / this.l;
                    this.G(this.u, b, 0, b, this.f / 2 - c, b, c);
                    this.G(this.u, b, this.f - c, b, this.f / 2, b, c);
                    break;
                case 5:
                    b = this.g / 3 * a / this.l;
                    c = this.f;
                    this.G(this.u, 0, 0, this.g / 3 - b, 0, b, c);
                    this.G(this.u,
                        this.g - b, 0, 2 * this.g / 3, 0, b, c);
                    b = this.g / 3;
                    c = this.f / 2 * a / this.l;
                    this.G(this.u, b, 0, b, 0, b, c);
                    this.G(this.u, b, this.f - c, b, this.f - c, b, c);
                    break;
                case 6:
                    b = this.g / 3;
                    c = this.f * a / this.l;
                    this.G(this.u, 0, this.f - c, 0, 0, b, c);
                    this.G(this.u, b, 0, b, this.f - c, b, c);
                    this.G(this.u, 2 * b, this.f - c, 2 * b, 0, b, c);
                    break;
                case 7:
                    b = this.g / 7;
                    c = this.f * a / this.l;
                    this.G(this.u, 0, this.f - c, 0, 0, b, c);
                    this.G(this.u, b, 0, b, this.f - c, b, c);
                    this.G(this.u, 2 * b, this.f - c, 2 * b, 0, b, c);
                    this.G(this.u, 3 * b, 0, 3 * b, this.f - c, b, c);
                    this.G(this.u, 4 * b, this.f - c, 4 * b, 0, b, c);
                    this.G(this.u,
                        5 * b, 0, 5 * b, this.f - c, b, c);
                    this.G(this.u, 6 * b, this.f - c, 6 * b, 0, 2 * b, c);
                    break;
                default:
                    this.G(this.u)
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Dd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c;
            this.G(this.u);
            switch (this.bb) {
                case 0:
                    b = this.g / 2 * a / this.l;
                    b = this.g / 2 - b;
                    c = this.f / 2 * a / this.l;
                    c = this.f / 2 - c;
                    this.stretch(this.aa, 0, 0, b, c, 0, 0, this.g /
                        2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    c = this.f / 2 - c;
                    this.stretch(this.aa, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    b = this.g / 2 - b;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.aa, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.aa, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                    break;
                case 1:
                    b = this.g * a / this.l;
                    b = this.g - b;
                    c = this.f * a / this.l;
                    c = this.f - c;
                    this.G(this.aa, 0,
                        0, this.g - b, this.f - c, b, c);
                    break;
                case 2:
                    b = this.g * a / this.l;
                    c = this.f * a / this.l;
                    c = this.f - c;
                    this.G(this.aa, b, 0, 0, this.f - c, this.g - b, c);
                    break;
                case 3:
                    b = this.g * a / this.l;
                    b = this.g - b;
                    c = this.f * a / this.l;
                    this.G(this.aa, 0, c, this.g - b, 0, b, this.f - c);
                    break;
                case 4:
                    b = this.g * a / this.l;
                    c = this.f * a / this.l;
                    this.G(this.aa, b, c, 0, 0, this.g - b, this.f - c);
                    break;
                case 5:
                    b = this.g / 2 * a / this.l;
                    b = this.g / 2 - b;
                    c = this.f / 2 * a / this.l;
                    c = this.f / 2 - c;
                    this.G(this.aa, b - this.g / 2, c - this.f / 2, 0, 0, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    c =
                        this.f / 2 - c;
                    this.G(this.aa, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    b = this.g / 2 - b;
                    c = this.f / 2 * a / this.l;
                    this.G(this.aa, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.G(this.aa, this.g / 2 + b, this.f / 2 + c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                    break;
                case 6:
                    c = this.f / 2 * a / this.l;
                    c = this.f / 2 - c;
                    this.G(this.aa, 0, c - this.f / 2, 0, 0, this.g, this.f / 2);
                    this.G(this.aa, 0, this.f - c, 0, this.f / 2, this.g, this.f / 2);
                    break;
                case 7:
                    b = this.g / 2 * a / this.l, b = this.g /
                        2 - b, this.G(this.aa, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.G(this.aa, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Ed.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Af = b.v();
        this.Fu = b.v();
        this.start(a, c, d, e)
    },
    Sb: function() {
        var a = this.aa.width,
            b = this.aa.height,
            c;
        if (this.ua) {
            0 == this.Af && (this.Af = 1);
            switch (this.Fu) {
                case v.Up:
                case v.sq:
                    this.xc = (a + this.Af - 1) / this.Af;
                    0 == this.xc && (this.xc = 1, this.Af = a);
                    break;
                default:
                    this.xc = (b + this.Af - 1) / this.Af, 0 == this.xc && (this.xc =
                        1, this.Af = b)
            }
            this.Db = 0;
            this.ua = !1
        }
        if (0 >= this.Af || 0 >= this.xc || 0 == this.l) this.G(this.u);
        else {
            var d = this.xc * this.uc() / this.l;
            if (d > this.Db) {
                var e = 0,
                    f = 0,
                    g = 0,
                    m = 0;
                for (c = 0; c < this.Af; c++) {
                    switch (this.Fu) {
                        case v.Up:
                            e = this.Db + c * this.xc;
                            f = 0;
                            g = d - this.Db;
                            m = b;
                            break;
                        case v.sq:
                            e = a - (this.Db + c * this.xc) - (d - this.Db);
                            f = 0;
                            g = d - this.Db;
                            m = b;
                            break;
                        case v.jz:
                            e = 0;
                            f = this.Db + c * this.xc;
                            g = a;
                            m = d - this.Db;
                            break;
                        case v.jy:
                            e = 0, f = b - (this.Db + c * this.xc) - (d - this.Db), g = a, m = d - this.Db
                    }
                    this.G(this.u, e, f, e, f, g, m)
                }
            }
            this.Db = d
        }
        return this.IK
    },
    end: function() {
        this.finish()
    }
});
Fd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Wa = b.w();
        this.Yq = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d, e, f, g, m, p, h, l;
            h = this.g / this.Wa;
            l = this.f / this.Yq;
            d = this.g / this.Wa;
            e = this.f / this.Yq;
            for (f = 0; f < this.Wa; f++)
                for (g = 0; g < this.Yq; g++) b = f * h, c = g * l, m = d * a / this.l, p = e * a / this.l, this.stretch(this.u, b + (d - m) / 2, c + (e - p) / 2, m, p, b + (d - m) / 2, c + (e - p) / 2, m, p)
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Gd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.hj = b.v();
        this.start(a, c, d, e)
    },
    Sb: function() {
        if (this.ua) {
            switch (this.hj) {
                case v.tt:
                case v.Nt:
                    this.xc = this.aa.width / 2;
                    break;
                default:
                    this.xc = this.aa.height / 2
            }
            this.Db = 0;
            this.ua = !1
        }
        if (0 == this.xc) this.G(this.u);
        else {
            var a = 0,
                b = 0,
                c = 0,
                d = 0,
                e = this.xc * this.uc() / this.l;
            if (e > this.Db) {
                switch (this.hj) {
                    case v.tt:
                        a = this.aa.width / 2 - e;
                        b = 0;
                        c = e - this.Db;
                        d = this.u.height;
                        break;
                    case v.Nt:
                        a = this.Db;
                        b = 0;
                        c = e - this.Db;
                        d = this.u.height;
                        break;
                    case v.oy:
                        a = 0;
                        b = this.aa.height / 2 -
                            e;
                        c = this.u.width;
                        d = e - this.Db;
                        break;
                    case v.iz:
                        a = 0, b = this.Db, c = this.u.width, d = e - this.Db
                }
                this.G(this.u, a, b, a, b, c, d);
                switch (this.hj) {
                    case v.tt:
                        a = this.aa.width / 2 + this.Db;
                        break;
                    case v.Nt:
                        a = this.aa.width - e;
                        break;
                    case v.oy:
                        b = this.aa.height / 2 + this.Db;
                        break;
                    case v.iz:
                        b = this.aa.height - e
                }
                this.G(this.u, a, b, a, b, c, d)
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Hd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1);
        var a;
        this.Gh.globalAlpha = 1;
        this.G(this.aa);
        a = this.uc() / this.l;
        this.Gh.globalAlpha = a;
        this.G(this.u);
        return null
    },
    end: function() {
        this.Gh.globalAlpha = 1;
        this.finish()
    }
});
Id.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Wa = b.w();
        this.bb = b.w();
        this.Mn = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d, e, f;
            b = 0;
            var g;
            if (0 == this.bb)
                for (g = this.f / this.Wa, f = 0; f < this.Wa; f++) 0 == b ? (b = 0, c = f * g, d = this.g * a / this.l, e = f == this.Wa - 1 ? this.f : g + 1,
                    0 == this.Mn ? this.G(this.u, b, c, b, c, d, e) : this.G(this.u, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.l, b = this.g - d, e = f == this.Wa - 1 ? this.f : g + 1, 0 == this.Mn ? this.G(this.u, b, c, b, c, d, e) : this.G(this.u, b, c, 0, c, d, e), b = 0);
            else
                for (g = this.g / this.Wa, f = 0; f < this.Wa; f++) 0 == b ? (b = f * g, c = 0, e = this.f * a / this.l, d = f == this.Wa - 1 ? this.g : g + 1, 0 == this.Mn ? this.G(this.u, b, c, b, c, d, e) : this.G(this.u, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.l, c = this.f - e, d = f == this.Wa - 1 ? this.g : g + 1, 0 == this.Mn ? this.G(this.u, b, c, b, c, d, e) : this.G(this.u,
                    b, c, b, 0, d, e), b = 0)
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Jd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.hw = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        if (this.ua) {
            var a = this.aa.width,
                b = this.aa.height;
            this.L = Math.floor((a * this.hw / 100 + b * this.hw / 100) / 2);
            0 == this.L && (this.L = 1);
            this.Ke = (a + this.L - 1) / this.L;
            this.zg = (b + this.L - 1) / this.L;
            this.Rk = this.Ke * this.zg;
            a = Math.floor((this.Rk + 7) / 8 + 2);
            this.Pk = 0;
            this.te = Array(a);
            for (b = 0; b < a; b++) this.te[b] = 0;
            this.ua = !1
        }
        if (null == this.te || 2 > this.Ke || 2 > this.zg ||
            0 == this.l) this.G(this.u);
        else {
            var c, d, b = a = 0;
            c = Math.floor(this.Rk * this.uc() / this.l);
            var e = c - this.Pk;
            if (0 != e)
                for (this.Pk = c, d = 0; d < e; d++) {
                    for (c = 0; 1 > c; c++) {
                        var a = Math.floor(this.Ke * Math.random()),
                            b = Math.floor(this.zg * Math.random()),
                            f, g;
                        f = b * this.Ke + a;
                        g = Math.floor(f / 8);
                        f = 1 << (f & 7);
                        if (0 == (this.te[g] & f)) {
                            this.te[g] |= f;
                            break
                        }
                        var m = g,
                            p = (this.Rk + 7) / 8,
                            h, l = !1;
                        for (h = g; h < p; h++, m++)
                            if (-1 != this.te[m]) {
                                b = Math.floor(8 * h / this.Ke);
                                a = Math.floor(8 * h % this.Ke);
                                for (f = 1; 0 != f; f <<= 1) {
                                    if (0 == (this.te[m] & f)) {
                                        this.te[m] |= f;
                                        l = !0;
                                        break
                                    }
                                    if (++a >=
                                        this.Ke && (a = 0, ++b >= this.zg)) break
                                }
                                if (l) break
                            } if (l) break;
                        for (h = m = 0; h < g; h++, m++) {
                            if (255 != this.te[m]) {
                                b = Math.floor(8 * h / m_nbBlockPerLine);
                                a = Math.floor(8 * h % m_nbBlockPerLine);
                                for (f = 1; 0 != f; f <<= 1) {
                                    if (0 == (this.te[m] & f)) {
                                        this.te[m] |= f;
                                        l = !0;
                                        break
                                    }
                                    if (++a >= this.Ke && (a = 0, ++b >= this.zg)) break
                                }
                                if (l) break
                            }
                            if (l) break;
                            l = !1
                        }
                    }
                    1 > c && this.G(this.u, Math.floor(a * this.L), Math.floor(b * this.L), Math.floor(a * this.L), Math.floor(b * this.L), this.L, this.L)
                }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Kd.prototype = n.extend(new v, {
    Y: function(a,
        b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc(),
            b = a / this.l;
        if (1 < b) this.G(this.u);
        else {
            var c, d, e;
            .25 > b ? (d = 2 * this.g * a / this.l, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.G(this.u, b, c, b, c, d, e), d = this.g / 7, e = 2 * this.f * a / this.l, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.l - b, e = this.f / 2, c = 0, this.G(this.u, b, c, b, c, d, e), c = this.f / 2, e = this.f * a / this.l - c, b = d = this.g / 2, this.G(this.u, b, c, b, c, d, e), d = this.g *
                a / this.l - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.G(this.u, b, c, b, c, d, e), e = this.f * a / this.l - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0);
            this.G(this.u, b, c, b, c, d, e)
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Ld.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.gw = !1);
        var a = this.uc(),
            b = a / this.l;
        if (1 < b) this.G(this.u);
        else {
            var c, d, e, f;
            if (.5 >= b) switch (this.bb) {
                case 0:
                    e = this.g * a / this.l * 2;
                    f = this.f / 2;
                    c = this.g - e;
                    d = this.f / 2;
                    this.G(this.u, 0, 0, c, d, e, f);
                    break;
                case 1:
                    e = this.g * a / this.l * 2;
                    f = this.f / 2;
                    c = this.g - e;
                    d = this.f / 2;
                    this.G(this.u, c, 0, 0, d, e, f);
                    break;
                case 2:
                    e = this.g * a / this.l * 2;
                    f = this.f / 2;
                    c = this.g - e;
                    d = this.f / 2;
                    this.G(this.u, 0, d, c, 0, e, f);
                    break;
                case 3:
                    e = this.g * a / this.l * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.G(this.u, c, d, 0, 0, e, f)
            }
            if (.5 < b) switch (0 == this.gw && (1 >= this.bb ? this.G(this.u, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.G(this.u, 0, this.f / 2, 0, 0, this.g, this.f / 2), this.gw = !0), b = a - this.l / 2, b /= this.l / 2, f = this.f /
                2 * 1E3 * b / 1E3, this.bb) {
                case 0:
                case 1:
                    this.stretch(this.u, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2);
                    this.stretch(this.u, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f);
                    break;
                case 2:
                case 3:
                    this.stretch(this.u, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.u, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f)
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Md.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.hj = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        var a = this.aa.width,
            b = this.aa.height;
        if (this.ua) {
            switch (this.hj) {
                case v.Up:
                case v.sq:
                    this.xc =
                        a;
                    break;
                default:
                    this.xc = b
            }
            this.Db = 0;
            this.ua = !1
        }
        if (0 == this.l) this.G(this.u);
        else {
            var c = this.xc * this.uc() / this.l;
            if (c > this.Db) {
                var d = 0,
                    e = 0;
                switch (this.hj) {
                    case v.Up:
                        d = c - a;
                        e = 0;
                        break;
                    case v.sq:
                        d = a - c;
                        e = 0;
                        break;
                    case v.jz:
                        d = 0;
                        e = c - b;
                        break;
                    case v.jy:
                        d = 0, e = b - c
                }
                this.G(this.u, d, e, 0, 0, a, b);
                this.Db = c
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Nd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.Wa = b.w();
        this.CA = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width,
            this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d, e, f, g;
            f = this.g * this.Wa / 100;
            g = this.f * this.Wa / 100;
            d = f * a / this.l;
            e = g * a / this.l;
            b = this.g / 2 - d / 2;
            c = this.f / 2 - e / 2;
            0 == this.CA ? this.G(this.u, b, c, b, c, d, e) : this.stretch(this.u, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g / 2, f, g);
            b = 100 - this.Wa;
            f = this.g * b / 100;
            g = this.f * b / 100;
            d = f / 2 * a / this.l;
            e = g / 2 * a / this.l;
            this.G(this.u, 0, 0, 0, 0, this.g, e);
            this.G(this.u, 0, 0, 0, 0, d, this.f);
            this.G(this.u, 0, this.f - e, 0, this.f - e, this.g, e);
            this.G(this.u, this.g - d, 0, this.g - d,
                0, d, this.f)
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Od.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c;
            switch (this.bb) {
                case 0:
                    b = this.g * a / this.l;
                    c = this.f * a / this.l;
                    this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f);
                    break;
                case 1:
                    b = this.g * a / this.l;
                    c = this.f * a / this.l;
                    this.stretch(this.u, this.g - b, 0, b, c, 0, 0, this.g, this.f);
                    break;
                case 2:
                    b =
                        this.g * a / this.l;
                    c = this.f * a / this.l;
                    this.stretch(this.u, 0, this.f - c, b, c, 0, 0, this.g, this.f);
                    break;
                case 3:
                    b = this.g * a / this.l;
                    c = this.f * a / this.l;
                    this.stretch(this.u, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f);
                    break;
                case 4:
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    5 > c && (c = 5);
                    this.stretch(this.u, 0, 0, b, c, 0, 0, this.aa.width / 2, this.aa.height / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    5 > c && (c = 5);
                    this.stretch(this.u, this.g - b, 0, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.u,
                        0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.u, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                    break;
                case 5:
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    5 > c && (c = 5);
                    this.stretch(this.u, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.aa.width / 2, this.aa.height / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    5 > c && (c = 5);
                    this.stretch(this.u, this.g / 2, this.f / 2 - c, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.u, this.g /
                        2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                    b = this.g / 2 * a / this.l;
                    c = this.f / 2 * a / this.l;
                    this.stretch(this.u, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                    break;
                case 6:
                    b = this.g;
                    c = this.f * a / this.l;
                    this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f);
                    break;
                case 7:
                    b = this.g * a / this.l;
                    c = this.f;
                    this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f);
                    break;
                case 8:
                    b = this.g * a / this.l;
                    c = this.f;
                    this.stretch(this.u, this.g - b, 0, b, c, 0, 0, this.g, this.f);
                    break;
                case 9:
                    b = this.g, c = this.f * a / this.l, this.stretch(this.u, 0, this.f -
                        c, b, c, 0, 0, this.g, this.f)
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Pd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.gc = 0);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c;
            switch (this.bb) {
                case 0:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g,
                        c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 1:
                    0 == this.gc ? (b = this.g, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = this.g, c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 2:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g,
                        c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, this.g - b, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 3:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = this.f, this.stretch(this.aa, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g, c = this.f, this.stretch(this.u, 0, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 4:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = this.f, this.stretch(this.aa, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g, c = this.f,
                        this.stretch(this.u, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 5:
                    0 == this.gc ? (c = 2 * this.f * a / this.l, c = this.f - c, b = this.g, this.stretch(this.aa, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (c = 2 * this.f * a / this.l, c -= this.f, b = this.g, this.stretch(this.u, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                    break;
                case 6:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g *
                        a / this.l, b -= this.g, c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                    break;
                case 7:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = this.f, this.stretch(this.aa, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g, c = this.f, this.stretch(this.u, this.f - b, 0, b, c, 0, 0, this.g, this.f));
                    break;
                case 8:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, 0, this.f - c, b, c, 0, 0, this.g, this.f),
                        a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g, c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                    break;
                case 9:
                    0 == this.gc ? (b = this.g, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = this.g, c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                    break;
                case 10:
                    0 == this.gc ? (b = 2 * this.g * a / this.l, b = this.g - b, c = 2 * this.f * a / this.l, c = this.f - c, this.stretch(this.aa, this.g - b,
                        this.f - c, b, c, 0, 0, this.g, this.f), a >= this.l / 2 && (this.gc = 1)) : (b = 2 * this.g * a / this.l, b -= this.g, c = 2 * this.f * a / this.l, c -= this.f, this.stretch(this.u, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Qd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.bb = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.Ok = this.Nk = 0);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d, e;
            b = this.f * a / this.l;
            a = this.g * a / this.l;
            if (0 == this.bb) {
                e = b % 2;
                for (c = 0; c < this.g; c += 2) {
                    for (d = this.Nk; d < b; d++) this.G(this.u, c, d, c, d, 1, 1);
                    for (d = this.f - b - e; d < this.f - this.Nk; d++) this.G(this.u, c + 1, d + 1, c + 1, d + 1, 1, 1)
                }
                this.Nk = 0 == b % 2 ? b : b - 1
            }
            if (1 == this.bb) {
                e = a % 2;
                for (d = 0; d < this.f; d++) {
                    for (c = this.Ok; c < a; c += 2) this.G(this.u, c + 1, d, c + 1, d, 1, 1);
                    for (c = this.g - a - e; c < this.g - this.Ok; c += 2) this.G(this.u, c, d + 1, c, d + 1, 1, 1)
                }
                this.Ok = 0 == a % 2 ? a : a - 1
            }
            if (2 == this.bb) {
                e = b % 2;
                for (c = 0; c < this.g; c += 2) {
                    for (d = this.Nk; d < b; d += 2) this.G(this.u, c, d, c, d, 1, 1);
                    for (d = this.f - b - e; d < this.f - this.Nk; d +=
                        2) this.G(this.u, c + 1, d + 1, c + 1, d + 1, 1, 1)
                }
                e = a % 2;
                for (d = 0; d < this.f; d += 2) {
                    for (c = this.Ok; c < a; c += 2) this.G(this.u, c + 1, d, c + 1, d, 1, 1);
                    for (c = this.g - a - e; c < this.g - this.Ok; c += 2) this.G(this.u, c, d + 1, c, d + 1, 1, 1)
                }
                this.Nk = 0 == b % 2 ? b : b - 1;
                this.Ok = 0 == a % 2 ? a : a - 1
            }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Rd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Wa = b.w();
        this.Ln = b.w();
        this.BA = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.jm = 0);
        var a = this.uc();
        if (1 < a /
            this.l) this.G(this.u);
        else {
            var b, c, d;
            b = this.g / 2;
            d = this.f / 2;
            this.jm = 6.28318 * this.Wa * a / this.l;
            1 == this.BA && (this.jm = 6.28318 - this.jm);
            c = this.g / 2 - this.g / 2 * a / this.l;
            b = Math.floor(b + Math.cos(this.jm) * c);
            c = Math.floor(d + Math.sin(this.jm) * c);
            d = this.g * a / this.l;
            a = this.f * a / this.l;
            this.stretch(this.aa, 0, 0, this.g, this.f, 0, 0, this.aa.width, this.aa.height);
            1 == this.rS ? this.stretch(this.u, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.u, b - d / 2, c - a / 2, d, a, this.g - d, this.f - a, d, a)
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Sd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Wa = b.w();
        this.Ln = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.Lr = 0);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d;
            b = this.g / 2;
            c = this.f / 2;
            d = 6.28318 * this.Wa * a / this.l;
            d -= 6.28318 * this.Lr;
            1 == this.Ln && (d = 6.28318 - d);
            a = this.g * a / this.l;
            b = Math.floor(b + Math.cos(d) * a);
            c = Math.floor(c + Math.sin(d) * a);
            this.G(this.u);
            this.G(this.aa, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f);
            0 == this.Ln ?
                6.28318 <= d && this.Lr++ : 0 >= d && this.Lr++
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Td.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.ay = b.w();
        this.ot = b.v();
        this.wE = b.v();
        this.start(a, c, d, e)
    },
    Sb: function() {
        var a = this.aa.width,
            b = this.aa.height;
        if (this.ua) {
            this.L = Math.floor((a * this.ay / 100 + b * this.ay / 100) / 2);
            0 == this.L && (this.L = 1);
            this.Ke = (a + this.L - 1) / this.L;
            this.zg = (b + this.L - 1) / this.L;
            this.fw = this.wE;
            this.sd = this.ot;
            switch (this.ot) {
                case v.Hi:
                    this.da = this.ea = 0;
                    break;
                case v.Ii:
                    this.da = a - this.L;
                    this.ea =
                        0;
                    break;
                case v.Vj:
                    this.da = 0;
                    this.ea = b - this.L;
                    break;
                case v.Wj:
                    this.da = a - this.L;
                    this.ea = b - this.L;
                    break;
                case v.ny:
                    this.da = a / 2 - this.L, this.ea = b / 2 - this.L, this.sd = this.fw == v.ty ? v.Hi : v.Ii, this.Nr = this.da - this.L, this.Qr = this.ea - this.L, this.Kr = this.ea + 2 * this.L, this.Pr = this.da + 2 * this.L, this.Ke = 2 + 2 * (this.da + this.L - 1) / this.L, this.zg = 2 + 2 * (this.ea + this.L - 1) / this.L
            }
            this.Rk = Math.floor(this.Ke * this.zg);
            this.Pk = 0;
            this.ua = !1
        }
        if (this.L >= a || this.L >= b) this.G(this.u);
        else {
            var c;
            c = Math.floor(this.Rk * this.uc() / this.l);
            var d =
                c - this.Pk;
            if (0 != d)
                for (this.Pk = c, c = 0; c < d; c++)
                    if (this.G(this.u, this.da, this.ea, this.da, this.ea, this.L, this.L), this.ot == v.ny) switch (this.sd) {
                        case v.Hi:
                            this.da += this.L;
                            this.da >= this.Pr && (this.da -= this.L, this.ea += this.L, this.sd = v.Ii, this.Pr += this.L);
                            break;
                        case v.Ii:
                            this.ea += this.L;
                            this.ea >= this.Kr && (this.ea -= this.L, this.da -= this.L, this.sd = v.Wj, this.Kr += this.L);
                            break;
                        case v.Wj:
                            this.da -= this.L;
                            this.da + this.L <= this.Nr && (this.da += this.L, this.ea -= this.L, this.sd = v.Vj, this.Nr -= this.L);
                            break;
                        case v.Vj:
                            this.ea -=
                                this.L, this.ea + this.L <= this.Qr && (this.ea += this.L, this.da += this.L, this.sd = v.Hi, this.Qr -= this.L)
                    } else switch (this.fw) {
                        case v.ty:
                            switch (this.sd) {
                                case v.Hi:
                                    this.da += this.L;
                                    this.da >= a && (this.da -= this.L, this.ea += this.L, this.sd = v.Ii);
                                    break;
                                case v.Ii:
                                    this.da -= this.L;
                                    0 >= this.da + this.L && (this.da += this.L, this.ea += this.L, this.sd = v.Hi);
                                    break;
                                case v.Vj:
                                    this.da += this.L;
                                    this.da >= a && (this.da -= this.L, this.ea -= this.L, this.sd = v.Wj);
                                    break;
                                case v.Wj:
                                    this.da -= this.L, 0 >= this.da + this.L && (this.da += this.L, this.ea -= this.L, this.sd =
                                        v.Vj)
                            }
                            break;
                        case v.qF:
                            switch (this.sd) {
                                case v.Hi:
                                    this.ea += this.L;
                                    this.ea >= b && (this.ea -= this.L, this.da += this.L, this.sd = v.Vj);
                                    break;
                                case v.Ii:
                                    this.ea += this.L;
                                    this.ea >= b && (this.ea -= this.L, this.da -= this.L, this.sd = v.Wj);
                                    break;
                                case v.Vj:
                                    this.ea -= this.L;
                                    0 >= this.ea + this.L && (this.ea += this.L, this.da += this.L, this.sd = v.Hi);
                                    break;
                                case v.Wj:
                                    this.ea -= this.L, 0 >= this.ea + this.L && (this.ea += this.L, this.da -= this.L, this.sd = v.Ii)
                            }
                    }
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Ud.prototype = n.extend(new v, {
    Y: function(a, b,
        c, d, e) {
        this.bb = b.w();
        this.Wa = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height, this.Lf = this.Qk = 0);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d, e;
            0 == this.bb ? (b = this.f / this.Wa, e = Math.floor(this.Qk * b) + Math.floor(b), c = 0, d = this.g * a / this.l, d = d * this.Wa / 2, d -= this.g * this.Qk, b = 0 == this.Lf ? 0 : this.g - d, this.G(this.u, b, c, b, c, d, e), c = this.f - e, b = 1 == this.Lf ? 0 : this.g - d, this.G(this.u, b, c, b, c, d, e), d >= this.g && (this.Qk++, this.Lf++, 2 == this.Lf && (this.Lf = 0))) :
                (b = this.g / this.Wa, d = Math.floor(this.Qk * b) + Math.floor(b), b = 0, e = this.f * a / this.l, e = e * this.Wa / 2, e -= this.f * this.Qk, c = 0 == this.Lf ? 0 : this.f - e, this.G(this.u, b, c, b, c, d, e), b = this.g - d, c = 1 == this.Lf ? 0 : this.f - e, this.G(this.u, b, c, b, c, d, e), e >= this.f && (this.Qk++, this.Lf++, 2 == this.Lf && (this.Lf = 0)))
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Vd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.start(a, c, d, e)
    },
    Sb: function(a) {
        var b = this.aa.width,
            c = this.aa.height;
        this.ua && (this.ua = !1);
        if (0 == this.l) this.G(this.u);
        else {
            var d;
            d = this.uc();
            0 != (a & v.yq) ? (a = Math.floor(b - b * d / this.l), d = Math.floor(c - c * d / this.l), this.G(this.u), this.stretch(this.aa, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.l), d = Math.floor(c * d / this.l), this.G(this.aa), this.stretch(this.u, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
Wd.prototype = n.extend(new v, {
    Y: function(a, b, c, d, e) {
        this.Wa = b.w();
        this.start(a, c, d, e)
    },
    Sb: function() {
        this.ua && (this.ua = !1, this.g = this.u.width, this.f = this.u.height);
        var a = this.uc();
        if (1 < a / this.l) this.G(this.u);
        else {
            var b, c, d;
            0 == this.Wa ? (c = this.g * a / this.l, d = this.f * a / this.l, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.u, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.l, c = this.g - c, d = this.f * a / this.l, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.aa, 0, 0, this.g, this.f, a, b, c, d))
        }
        return null
    },
    end: function() {
        this.finish()
    }
});
t.Wg = {
    Iy: "PK\u0003\u0004",
    py: "PK\u0001\u0002",
    ut: "PK\u0005\u0006",
    mz: "PK\u0006\u0007",
    TH: "PK\u0006\u0006",
    KN: "PK\u0007\b"
};
t.RI = {
    Dh: !1,
    Si: !1,
    dir: !1,
    Df: null,
    Ul: null
};
t.prototype =
    function() {
        function a(d) {
            "/" != d.slice(-1) && (d += "/");
            if (!this.files[d]) {
                var e = b(d);
                e && a.call(this, e);
                c.call(this, d, null, {
                    dir: !0
                })
            }
            return this.files[d]
        }

        function b(a) {
            "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
            var b = a.lastIndexOf("/");
            return 0 < b ? a.substring(0, b) : ""
        }

        function c(c, e, p) {
            var g = b(c);
            g && a.call(this, g);
            p = p || {};
            !0 === p.Dh && null == p.Si && (p.Si = !0);
            p = d(p, t.RI);
            p.Df = p.Df || new Date;
            null !== p.Ul && (p.Ul = p.Ul.toUpperCase());
            p.dir || null === e || "undefined" === typeof e ? (p.Dh = !1, p.Si = !1, e = null) : t.vl.ft &&
                e instanceof Uint8Array ? (p.Dh = !1, p.Si = !0, e = t.dh.et(e)) : t.vl.sz && e instanceof ArrayBuffer ? (p.Dh = !1, p.Si = !0, e = new Uint8Array(e), e = t.dh.et(e)) : p.Si && !p.Dh && (!0 !== p.YC && (e = t.dh.iE(e)), delete p.YC);
            return this.files[c] = new f(c, e, p)
        }

        function d() {
            var a = {},
                b, c;
            for (b = 0; b < arguments.length; b++)
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            var c = "",
                d;
            for (d = 0; d < b; d++) c += String.fromCharCode(a & 255), a >>>= 8;
            return c
        }

        function f(a, b,
            c) {
            this.name = a;
            this.data = b;
            this.options = c
        }
        f.prototype = {
            tz: function() {
                var a = this.data;
                if (null === a || "undefined" === typeof a) return "";
                this.options.Dh && (a = nb.decode(a));
                this.options.Si || (a = t.prototype.sE(a));
                return a
            }
        };
        return {
            load: function() {
                throw Error("Load method is not defined. Is the file jszip-load.js included ?");
            },
            filter: function(a) {
                var b = [],
                    c, e, g;
                for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0,
                    this.root.length) === this.root && a(e, g) && b.push(g));
                return b
            },
            file: function(a, b, d) {
                if (1 === arguments.length) {
                    if (a instanceof RegExp) {
                        var e = a;
                        return this.filter(function(a, b) {
                            return !b.options.dir && e.test(a)
                        })
                    }
                    return this.filter(function(b, c) {
                        return !c.options.dir && b === a
                    })[0] || null
                }
                a = this.root + a;
                c.call(this, a, b, d);
                return this
            },
            pR: function(b) {
                if (!b) return this;
                if (b instanceof RegExp) return this.filter(function(a, c) {
                    return c.options.dir && b.test(a)
                });
                var c = a.call(this, this.root + b),
                    d = this.clone();
                d.root = c.name;
                return d
            },
            remove: function(a) {
                a = this.root + a;
                var b = this.files[a];
                b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
                if (b)
                    if (b.options.dir)
                        for (var b = this.filter(function(b, c) {
                                return c.name.slice(0, a.length) === a
                            }), c = 0; c < b.length; c++) delete this.files[b[c].name];
                    else delete this.files[a];
                return this
            },
            sR: function(a) {
                var b, c;
                a = d(a || {}, {
                    Dh: !0,
                    Ul: "STORE",
                    type: "base64"
                });
                var f = a.Ul.toUpperCase();
                if (!t.Bf[f]) throw f + " is not a valid compression method !";
                var g = [],
                    h = [],
                    k = 0,
                    l;
                for (l in this.files)
                    if (this.files.hasOwnProperty(l)) {
                        b =
                            this.files[l];
                        var n = this.sE(b.name),
                            q, r, u;
                        r = b;
                        b = n;
                        var v = f;
                        q = b !== r.name;
                        c = r.tz();
                        var z = r.options;
                        u = z.Df.getHours();
                        u = u << 6 | z.Df.getMinutes();
                        u = u << 5 | z.Df.getSeconds() / 2;
                        r = z.Df.getFullYear() - 1980;
                        r = r << 4 | z.Df.getMonth() + 1;
                        r = r << 5 | z.Df.getDate();
                        var w = null !== c && 0 !== c.length,
                            v = z.Ul || v;
                        if (!t.Bf[v]) throw v + " is not a valid compression method !";
                        z = t.Bf[v];
                        v = w ? z.tI(c) : "";
                        q = "\n\x00" + (q ? "\x00\b" : "\x00\x00") + (w ? z.Sr : t.Bf.STORE.Sr);
                        q += e(u, 2);
                        q += e(r, 2);
                        q += w ? e(this.Rq(c), 4) : "\x00\x00\x00\x00";
                        q += w ? e(v.length, 4) : "\x00\x00\x00\x00";
                        q += w ? e(c.length, 4) : "\x00\x00\x00\x00";
                        q += e(b.length, 2);
                        b = q += "\x00\x00";
                        c = v;
                        c = t.Wg.Iy + b + n + c;
                        n = t.Wg.py + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[l].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(k, 4) + n;
                        k += c.length;
                        h.push(c);
                        g.push(n)
                    } f = h.join("");
                g = g.join("");
                h = f + g + (t.Wg.ut + "\x00\x00\x00\x00" + e(h.length, 2) + e(h.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
                switch (a.type.toLowerCase()) {
                    case "uint8array":
                        return t.dh.Tx(h);
                    case "arraybuffer":
                        return t.dh.Tx(h).buffer;
                    case "blob":
                        return t.dh.lM(h);
                    case "base64":
                        return a.Dh ? nb.encode(h) : h;
                    default:
                        return h
                }
            },
            Rq: function(a, b) {
                if ("" === a || "undefined" === typeof a) return 0;
                var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
                    1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368,
                    4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646,
                    62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
                    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701,
                    2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
                ];
                "undefined" == typeof b && (b = 0);
                var d;
                b ^= -1;
                for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
                return b ^ -1
            },
            clone: function() {
                var a = new t,
                    b;
                for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
                return a
            },
            sE: function(a) {
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
                }
                return b
            },
            rE: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d &
                    31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        }
    }();
t.Bf = {
    STORE: {
        Sr: "\x00\x00",
        tI: function(a) {
            return a
        },
        Yx: function(a) {
            return a
        }
    }
};
t.vl = {
    sz: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
    ft: "undefined" !== typeof Uint8Array,
    blob: function() {
        if ("undefined" === typeof ArrayBuffer) return !1;
        var a = new ArrayBuffer(0);
        try {
            return 0 === (new Blob([a], {
                type: "application/zip"
            })).size
        } catch (c) {}
        try {
            var b = new(window.BlobBuilder ||
                window.WebKitBlobBuilder || window.WG || window.OG);
            b.append(a);
            return 0 === b.getBlob("application/zip").size
        } catch (c) {}
        return !1
    }()
};
t.dh = {
    iE: function(a) {
        for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
        return b
    },
    Tx: function(a) {
        if (!t.vl.ft) throw Error("Uint8Array is not supported by this browser");
        for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
        return b
    },
    et: function(a) {
        if (!t.vl.ft) throw Error("Uint8Array is not supported by this browser");
        for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
        return b
    },
    lM: function(a) {
        if (!t.vl.blob) throw Error("Blob is not supported by this browser");
        a = t.dh.Tx(a).buffer;
        try {
            return new Blob([a], {
                type: "application/zip"
            })
        } catch (c) {}
        try {
            var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.WG || window.OG);
            b.append(a);
            return b.getBlob("application/zip")
        } catch (c) {}
        throw Error("Bug : can't construct the Blob.");
    }
};
var nb = function() {
    return {
        encode: function(a) {
            for (var b = "", c, d, e, f, g, m, h = 0; h < a.length;) c =
                a.charCodeAt(h++), d = a.charCodeAt(h++), e = a.charCodeAt(h++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, m = e & 63, isNaN(d) ? g = m = 64 : isNaN(e) && (m = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m);
            return b
        },
        decode: function(a) {
            var b = "",
                c, d, e, f, g,
                m = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); m < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !=
                f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
            return b
        }
    }
}();
if (!t) throw "JSZip not defined";
(function() {
    function a() {
        this.list = this.next = null
    }

    function b() {
        this.n = this.zf = this.e = 0;
        this.t = null
    }

    function c(c, d, e, f, g, k) {
        this.Uj = 16;
        this.XG = 288;
        this.status = 0;
        this.root = null;
        this.Ph = 0;
        var m = Array(this.Uj + 1),
            h, p, l, n, q, r, u, v = Array(this.Uj + 1),
            A, z, w, t = new b,
            I = Array(this.Uj);
        n = Array(this.XG);
        var C, U = Array(this.Uj + 1),
            E, B, D;
        D = this.root = null;
        for (q = 0; q < m.length; q++) m[q] = 0;
        for (q = 0; q < v.length; q++) v[q] =
            0;
        for (q = 0; q < I.length; q++) I[q] = null;
        for (q = 0; q < n.length; q++) n[q] = 0;
        for (q = 0; q < U.length; q++) U[q] = 0;
        h = 256 < d ? c[256] : this.Uj;
        A = c;
        z = 0;
        q = d;
        do m[A[z]]++, z++; while (0 < --q);
        if (m[0] == d) this.root = null, this.status = this.Ph = 0;
        else {
            for (r = 1; r <= this.Uj && 0 == m[r]; r++);
            u = r;
            k < r && (k = r);
            for (q = this.Uj; 0 != q && 0 == m[q]; q--);
            l = q;
            k > q && (k = q);
            for (E = 1 << r; r < q; r++, E <<= 1)
                if (0 > (E -= m[r])) {
                    this.status = 2;
                    this.Ph = k;
                    return
                } if (0 > (E -= m[q])) this.status = 2, this.Ph = k;
            else {
                m[q] += E;
                U[1] = r = 0;
                A = m;
                z = 1;
                for (w = 2; 0 < --q;) U[w++] = r += A[z++];
                A = c;
                q = z = 0;
                do 0 != (r =
                    A[z++]) && (n[U[r]++] = q); while (++q < d);
                d = U[l];
                U[0] = q = 0;
                A = n;
                z = 0;
                n = -1;
                C = v[0] = 0;
                w = null;
                for (B = 0; u <= l; u++)
                    for (c = m[u]; 0 < c--;) {
                        for (; u > C + v[1 + n];) {
                            C += v[1 + n];
                            n++;
                            B = (B = l - C) > k ? k : B;
                            if ((p = 1 << (r = u - C)) > c + 1)
                                for (p -= c + 1, w = u; ++r < B && !((p <<= 1) <= m[++w]);) p -= m[w];
                            C + r > h && C < h && (r = h - C);
                            B = 1 << r;
                            v[1 + n] = r;
                            w = Array(B);
                            for (p = 0; p < B; p++) w[p] = new b;
                            D = null == D ? this.root = new a : D.next = new a;
                            D.next = null;
                            D.list = w;
                            I[n] = w;
                            0 < n && (U[n] = q, t.zf = v[n], t.e = 16 + r, t.t = w, r = (q & (1 << C) - 1) >> C - v[n], I[n - 1][r].e = t.e, I[n - 1][r].zf = t.zf, I[n - 1][r].n = t.n, I[n - 1][r].t =
                                t.t)
                        }
                        t.zf = u - C;
                        z >= d ? t.e = 99 : A[z] < e ? (t.e = 256 > A[z] ? 16 : 15, t.n = A[z++]) : (t.e = g[A[z] - e], t.n = f[A[z++] - e]);
                        p = 1 << u - C;
                        for (r = q >> C; r < B; r += p) w[r].e = t.e, w[r].zf = t.zf, w[r].n = t.n, w[r].t = t.t;
                        for (r = 1 << u - 1; 0 != (q & r); r >>= 1) q ^= r;
                        for (q ^= r;
                            (q & (1 << C) - 1) != U[n];) C -= v[n], n--
                    }
                this.Ph = v[1];
                this.status = 0 != E && 1 != l ? 1 : 0
            }
        }
    }

    function d(a) {
        for (; w < a;) z |= (H.length == J ? -1 : H.charCodeAt(J++) & 255) << w, w += 8
    }

    function e(a) {
        return z & M[a]
    }

    function f(a) {
        z >>= a;
        w -= a
    }

    function g(a, b, c) {
        var g, m, h;
        if (0 == c) return 0;
        for (h = 0;;) {
            d(D);
            m = B.list[e(D)];
            for (g = m.e; 16 <
                g;) {
                if (99 == g) return -1;
                f(m.zf);
                g -= 16;
                d(g);
                m = m.t[e(g)];
                g = m.e
            }
            f(m.zf);
            if (16 == g) k &= 32767, a[b + h++] = q[k++] = m.n;
            else {
                if (15 == g) break;
                d(g);
                C = m.n + e(g);
                f(g);
                d(F);
                m = G.list[e(F)];
                for (g = m.e; 16 < g;) {
                    if (99 == g) return -1;
                    f(m.zf);
                    g -= 16;
                    d(g);
                    m = m.t[e(g)];
                    g = m.e
                }
                f(m.zf);
                d(g);
                E = k - m.n - e(g);
                for (f(g); 0 < C && h < c;) C--, E &= 32767, k &= 32767, a[b + h++] = q[k++] = q[E++]
            }
            if (h == c) return c
        }
        A = -1;
        return h
    }

    function m(a, b, m) {
        var k, h, p, l, n, q, r, u = Array(316);
        for (k = 0; k < u.length; k++) u[k] = 0;
        d(5);
        q = 257 + e(5);
        f(5);
        d(5);
        r = 1 + e(5);
        f(5);
        d(4);
        k = 4 + e(4);
        f(4);
        if (286 <
            q || 30 < r) return -1;
        for (h = 0; h < k; h++) d(3), u[Q[h]] = e(3), f(3);
        for (; 19 > h; h++) u[Q[h]] = 0;
        D = 7;
        h = new c(u, 19, 19, null, null, D);
        if (0 != h.status) return -1;
        B = h.root;
        D = h.Ph;
        l = q + r;
        for (k = p = 0; k < l;)
            if (d(D), n = B.list[e(D)], h = n.zf, f(h), h = n.n, 16 > h) u[k++] = p = h;
            else if (16 == h) {
            d(2);
            h = 3 + e(2);
            f(2);
            if (k + h > l) return -1;
            for (; 0 < h--;) u[k++] = p
        } else {
            17 == h ? (d(3), h = 3 + e(3), f(3)) : (d(7), h = 11 + e(7), f(7));
            if (k + h > l) return -1;
            for (; 0 < h--;) u[k++] = 0;
            p = 0
        }
        D = 9;
        h = new c(u, q, 257, K, L, D);
        0 == D && (h.status = 1);
        if (0 != h.status) return -1;
        B = h.root;
        D = h.Ph;
        for (k = 0; k < r; k++) u[k] =
            u[k + q];
        F = 6;
        h = new c(u, r, 0, N, O, F);
        G = h.root;
        F = h.Ph;
        return 0 == F && 257 < q || 0 != h.status ? -1 : g(a, b, m)
    }

    function h(a, b) {
        var h, p;
        for (h = 0; h < b && (!U || -1 != A);) {
            if (0 < C) {
                if (0 != A)
                    for (; 0 < C && h < b;) C--, E &= 32767, k &= 32767, a[0 + h++] = q[k++] = q[E++];
                else {
                    for (; 0 < C && h < b;) C--, k &= 32767, d(8), a[0 + h++] = q[k++] = e(8), f(8);
                    0 == C && (A = -1)
                }
                if (h == b) break
            }
            if (-1 == A) {
                if (U) break;
                d(1);
                0 != e(1) && (U = !0);
                f(1);
                d(2);
                A = e(2);
                f(2);
                B = null;
                C = 0
            }
            switch (A) {
                case 0:
                    var l = a,
                        t = 0 + h,
                        I = b - h;
                    p = w & 7;
                    f(p);
                    d(16);
                    p = e(16);
                    f(16);
                    d(16);
                    if (p != (~z & 65535)) p = -1;
                    else {
                        f(16);
                        C = p;
                        for (p =
                            0; 0 < C && p < I;) C--, k &= 32767, d(8), l[t + p++] = q[k++] = e(8), f(8);
                        0 == C && (A = -1)
                    }
                    break;
                case 1:
                    if (null != B) p = g(a, 0 + h, b - h);
                    else a: {
                        var P;p = a;l = 0 + h;t = b - h;
                        if (null == r) {
                            I = Array(288);
                            for (P = 0; 144 > P; P++) I[P] = 8;
                            for (; 256 > P; P++) I[P] = 9;
                            for (; 280 > P; P++) I[P] = 7;
                            for (; 288 > P; P++) I[P] = 8;
                            u = 7;
                            P = new c(I, 288, 257, K, L, u);
                            if (0 != P.status) {
                                alert("HufBuild error: " + P.status);
                                p = -1;
                                break a
                            }
                            r = P.root;
                            u = P.Ph;
                            for (P = 0; 30 > P; P++) I[P] = 5;
                            n = 5;
                            P = new c(I, 30, 0, N, O, n);
                            if (1 < P.status) {
                                r = null;
                                alert("HufBuild error: " + P.status);
                                p = -1;
                                break a
                            }
                            v = P.root;
                            n = P.Ph
                        }
                        B =
                        r;G = v;D = u;F = n;p = g(p, l, t)
                    }
                    break;
                case 2:
                    p = null != B ? g(a, 0 + h, b - h) : m(a, 0 + h, b - h);
                    break;
                default:
                    p = -1
            }
            if (-1 == p) return U ? 0 : -1;
            h += p
        }
        return h
    }

    function l(a) {
        var b, c, d;
        null == q && (q = Array(65536));
        w = z = k = 0;
        A = -1;
        U = !1;
        C = E = 0;
        B = null;
        H = a;
        J = 0;
        b = Array(1024);
        for (a = ""; 0 < (c = h(b, b.length));)
            for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
        H = null;
        return a
    }
    var n, q, k, r = null,
        v, u, z, w, A, U, C, E, B, G, D, F, H, J, M = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
        K = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
            99, 115, 131, 163, 195, 227, 258, 0, 0
        ],
        L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
        N = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        O = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    t.Bf.DEFLATE ? t.Bf.DEFLATE.Yx = l : t.Bf.DEFLATE = {
        Sr: "\b\x00",
        Yx: l
    }
})();
(function() {
    function a(a) {
        var b = "",
            c, d;
        for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" +
            (16 > c ? "0" : "") + c.toString(16).toUpperCase();
        return b
    }

    function b(a) {
        this.stream = "";
        t.vl.ft && a instanceof Uint8Array ? this.stream = t.dh.et(a) : t.vl.sz && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = t.dh.et(a)) : this.stream = t.dh.iE(a);
        this.index = 0
    }

    function c(a, b) {
        this.options = a;
        this.cw = b
    }

    function d(a, b) {
        this.files = [];
        this.cw = b;
        a && this.load(a)
    }
    b.prototype = {
        Sz: function(a) {
            this.Qz(this.index + a)
        },
        Qz: function(a) {
            if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length +
                ", asked index = " + a + "). Corrupted zip ?");
        },
        Zm: function(a) {
            this.Qz(a);
            this.index = a
        },
        bE: function(a) {
            this.Zm(this.index + a)
        },
        jI: function(a) {
            return this.stream.charCodeAt(a)
        },
        Ea: function(a) {
            var b = 0,
                c;
            this.Sz(a);
            for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.jI(c);
            this.index += a;
            return b
        },
        mf: function(a) {
            this.Sz(a);
            var b = this.stream.slice(this.index, this.index + a);
            this.index += a;
            return b
        },
        wL: function() {
            var a = this.Ea(4);
            return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) <<
                1)
        }
    };
    c.prototype = {
        ZJ: function() {
            return 1 === (this.Fz & 1)
        },
        wM: function() {
            return 2048 === (this.Fz & 2048)
        },
        AL: function(b) {
            var c, d;
            b.bE(22);
            this.gv = b.Ea(2);
            d = b.Ea(2);
            this.fileName = b.mf(this.gv);
            b.bE(d);
            if (-1 == this.Pq || -1 == this.ht) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
            this.uI = b.mf(this.Pq);
            a: {
                b = this.Xz;
                for (c in t.Bf)
                    if (t.Bf.hasOwnProperty(c) && t.Bf[c].Sr === b) {
                        c = t.Bf[c];
                        break a
                    } c = null
            }
            if (null === c) throw Error("Corrupted zip : compression " +
                a(this.Xz) + " unknown (inner file : " + this.fileName + ")");
            this.Zx = c.Yx(this.uI);
            if (this.Zx.length !== this.ht) throw Error("Bug : uncompressed data size mismatch");
            if (this.cw.WQ && t.prototype.Rq(this.Zx) !== this.Rq) throw Error("Corrupted zip : CRC32 mismatch");
        },
        vL: function(a) {
            a.mf(2);
            a.Ea(2);
            this.Fz = a.Ea(2);
            this.Xz = a.mf(2);
            this.Df = a.wL();
            this.Rq = a.Ea(4);
            this.Pq = a.Ea(4);
            this.ht = a.Ea(4);
            this.gv = a.Ea(2);
            this.jJ = a.Ea(2);
            this.lJ = a.Ea(2);
            this.vA = a.Ea(2);
            a.Ea(2);
            this.iJ = a.Ea(4);
            this.ew = a.Ea(4);
            if (this.ZJ()) throw Error("Encrypted zip are not supported");
            this.fileName = a.mf(this.gv);
            this.yL(a);
            this.ZK(a);
            this.SA = a.mf(this.lJ);
            this.dir = this.iJ & 16 ? !0 : !1
        },
        ZK: function() {
            if (this.cr[1]) {
                var a = new b(this.cr[1].value); - 1 === this.ht && (this.ht = a.Ea(8)); - 1 === this.Pq && (this.Pq = a.Ea(8)); - 1 === this.ew && (this.ew = a.Ea(8)); - 1 === this.vA && (this.vA = a.Ea(4))
            }
        },
        yL: function(a) {
            var b = a.index,
                c, d, e;
            for (this.cr = this.cr || {}; a.index < b + this.jJ;) c = a.Ea(2), d = a.Ea(2), e = a.mf(d), this.cr[c] = {
                id: c,
                length: d,
                value: e
            }
        },
        LJ: function() {
            this.wM() && (this.fileName = t.prototype.rE(this.fileName),
                this.SA = t.prototype.rE(this.SA))
        }
    };
    d.prototype = {
        Lq: function(b) {
            var c = this.Xa.mf(4);
            if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
        },
        qL: function() {
            this.uA = this.Xa.Ea(2);
            this.wA = this.Xa.Ea(2);
            this.Mz = this.Xa.Ea(2);
            this.Lz = this.Xa.Ea(2);
            this.Nz = this.Xa.Ea(4);
            this.Ju = this.Xa.Ea(4);
            this.AM = this.Xa.Ea(2);
            this.Xa.mf(this.AM)
        },
        rL: function() {
            this.yM = this.Xa.Ea(8);
            this.Xa.mf(2);
            this.Xa.Ea(2);
            this.uA = this.Xa.Ea(4);
            this.wA = this.Xa.Ea(4);
            this.Mz = this.Xa.Ea(8);
            this.Lz = this.Xa.Ea(8);
            this.Nz = this.Xa.Ea(8);
            this.Ju = this.Xa.Ea(8);
            this.zM = {};
            for (var a = this.yM - 44, b, c, d; 0 < a;) b = this.Xa.Ea(2), c = this.Xa.Ea(4), d = this.Xa.mf(c), this.zM[b] = {
                id: b,
                length: c,
                value: d
            }
        },
        sL: function() {
            this.Xa.Ea(4);
            this.DL = this.Xa.Ea(8);
            this.WI = this.Xa.Ea(4);
            if (1 < this.WI) throw Error("Multi-volumes zip are not supported");
        },
        zL: function() {
            var a, b;
            for (a = 0; a < this.files.length; a++) b = this.files[a], this.Xa.Zm(b.ew), this.Lq(t.Wg.Iy), b.AL(this.Xa), b.LJ()
        },
        uL: function() {
            var a;
            for (this.Xa.Zm(this.Ju); this.Xa.mf(4) ===
                t.Wg.py;) a = new c({
                vE: this.vE
            }, this.cw), a.vL(this.Xa), this.files.push(a)
        },
        xL: function() {
            var a = this.Xa.stream.lastIndexOf(t.Wg.ut);
            if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
            this.Xa.Zm(a);
            this.Lq(t.Wg.ut);
            this.qL();
            if (65535 === this.uA || 65535 === this.wA || 65535 === this.Mz || 65535 === this.Lz || -1 === this.Nz || -1 === this.Ju) {
                this.vE = !0;
                a = this.Xa.stream.lastIndexOf(t.Wg.mz);
                if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                this.Xa.Zm(a);
                this.Lq(t.Wg.mz);
                this.sL();
                this.Xa.Zm(this.DL);
                this.Lq(t.Wg.TH);
                this.rL()
            }
        },
        load: function(a) {
            this.Xa = new b(a);
            this.xL();
            this.uL();
            this.zL()
        }
    };
    t.prototype.load = function(a, b) {
        var c, e, f;
        b = b || {};
        b.Dh && (a = nb.decode(a));
        c = (new d(a, b)).files;
        for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.Zx, {
            Si: !0,
            YC: !0,
            Df: f.Df,
            dir: f.dir
        });
        return this
    }
})();
var we = document.getElementsByTagName("script"),
    ze = we[we.length - 1].src;
document.oS = ze.substring(0, ze.lastIndexOf("/") + 1);
oa.Runtime = Xd;
oa.headerLoaded = Yd;
oa.rM = "updateApplication";
oa[window.rM] = Xa;
Ca.prototype = {
    Eb: function(a, b, c) {
        if (this.visible) {
            this.ig && (a.Oa.save(), a.Oa.translate(this.Dp, this.Fp), 0 != this.angle && a.Oa.rotate(.0174532925 * -this.angle), a.Oa.scale(Math.max(.001, this.ic), Math.max(.001, this.jc)), a.Oa.translate(-this.Ja, -this.Ha));
            var d;
            for (d = 0; d < this.children.length; d++) this.children[d].Eb(a, b + this.x, c + this.y);
            this.ig && a.Oa.restore()
        }
    },
    me: function(a) {
        this.children.push(a)
    },
    Bq: function(a, b) {
        b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b,
            0, a))
    },
    EL: function() {
        this.children.length = 0
    },
    removeChild: function(a) {
        var b;
        for (b = 0; b < this.children.length; b++)
            if (this.children[b] == a) return this.children.splice(b, 1), b;
        return -1
    },
    tc: function(a) {
        var b;
        for (b = 0; b < this.children.length; b++)
            if (this.children[b] == a) return b;
        return -1
    },
    ge: function(a, b) {
        var c, d = null;
        for (c = 0; c < this.children.length; c++)
            if (this.children[c] == a) {
                d = this.children[c];
                break
            } null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b,
            0, a))
    }
};
ra.hn = 0;
ra.ie = 1;
ra.XE = 1;
ra.YE = 2;
ra.kn = 64;
ra.ln = 16;
ra.Sp = 6;
B.eQ = 0;
B.fQ = 1;
B.lh = 0;
B.El = 1;
B.Ov = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
B.lx = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
B.Zg = new ta;
B.Oj = new ta;
B.Sl = new ta;
B.Ti = new ta;
B.prototype = {
    Tu: function(a, b, c) {
        var d, e;
        this.width = b.width;
        this.height = b.height;
        this.Ja = b.Ja;
        this.Ha = b.Ha;
        var f = Math.floor((this.width + 15 & 4294967280) / 16);
        this.lineWidth = f;
        e = f * this.height +
            1;
        if ("undefined" != typeof ArrayBuffer) this.P = new Uint16Array(new ArrayBuffer(2 * e));
        else
            for (this.P = Array(e), d = 0; d < e; d++) this.P[d] = 0;
        d = document.createElement("canvas");
        d.width = b.width;
        d.height = b.height;
        d = d.getContext("2d");
        0 == b.Bb ? d.drawImage(b.Ab, 0, 0) : d.drawImage(a.ba.Lb[b.Bb], b.td, b.ud, b.width, b.height, 0, 0, b.width, b.height);
        a = d.getImageData(0, 0, this.width, this.height);
        if (0 == (c & B.El))
            for (c = 0; c < this.height; c++) {
                e = c * b.width * 4 + 3;
                var g = c * f,
                    m = 32768;
                for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.P[g] |= m),
                    e += 4, m >>>= 1, 0 == m && (m = 32768, g++)
            } else
                for (d = 0; d < this.width; d++) {
                    for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
                    if (c < this.height)
                        for (g = Math.min(this.height, c + ra.Sp), m = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.P[e] |= m)
                }
    },
    JL: function(a, b, c) {
        var d, e, f;
        90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
        var g, m;
        null == b ? (e = m = 0, B.Zg.x = B.Zg.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, m = -b.y * f, B.Zg.x = Math.floor(g +
            m), B.Zg.y = Math.floor(e - d));
        d = null == b ? a.right : a.right - b.x;
        g = d * c;
        d *= f;
        B.Oj.x = Math.floor(g + m);
        B.Oj.y = Math.floor(e - d);
        e = null == b ? a.bottom : a.bottom - b.y;
        B.Ti.x = Math.floor(g + e * f);
        B.Ti.y = Math.floor(e * c - d);
        B.Sl.x = B.Zg.x + B.Ti.x - B.Oj.x;
        B.Sl.y = B.Zg.y + B.Ti.y - B.Oj.y;
        c = Math.min(B.Zg.x, Math.min(B.Oj.x, Math.min(B.Ti.x, B.Sl.x)));
        f = Math.min(B.Zg.y, Math.min(B.Oj.y, Math.min(B.Ti.y, B.Sl.y)));
        g = Math.max(B.Zg.x, Math.max(B.Oj.x, Math.max(B.Ti.x, B.Sl.x)));
        d = Math.max(B.Zg.y, Math.max(B.Oj.y, Math.max(B.Ti.y, B.Sl.y)));
        null != b &&
            (b.x = -c, b.y = -f);
        a.right = g - c;
        a.bottom = d - f
    },
    HI: function(a, b, c, d) {
        var e, f, g = a.width;
        e = a.height;
        var m = new ba;
        m.right = Math.floor(a.width * c);
        m.bottom = Math.floor(a.height * d);
        var h = new ta;
        h.x = Math.floor(a.Ja * c);
        h.y = Math.floor(a.Ha * d);
        this.JL(m, h, b);
        var l = m.right,
            m = m.bottom;
        if (0 >= l || 0 >= m) return !1;
        var n = a.lineWidth,
            q = (l + 15 & 2147483632) / 16;
        this.P = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (q * m + 1))) : Array(q * m + 1);
        var k;
        for (k = q * m; 0 <= k; k--) this.P[k] = 0;
        this.lineWidth = q;
        this.width = l;
        this.height =
            m;
        this.Ja = h.x;
        this.Ha = h.y;
        b *= .017453292;
        f = Math.cos(b);
        var r = Math.sin(b);
        b = 0;
        h = Math.floor(65536 * (g / 2 - (l / 2 * f - m / 2 * r) / c));
        k = Math.floor(65536 * (e / 2 - (l / 2 * r + m / 2 * f) / d));
        var u = Math.floor(65536 * f / c),
            v = Math.floor(65536 * r / d),
            z = l / 16,
            l = l % 16;
        d = Math.floor(65536 * f / d);
        c = Math.floor(65536 * r / c);
        var g = 65536 * g,
            r = 65536 * e,
            w, A;
        for (f = 0; f < m; f++) {
            var t = h,
                C = k,
                E = b,
                B;
            for (e = 0; e < z; e++) {
                var D = 0;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 32768));
                t += u;
                C +=
                    v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 16384));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 8192));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 4096));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>>
                    B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 2048));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 1024));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 512));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 256));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C &&
                    C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 128));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 64));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 32));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A *
                    n + B / 16)], 0 != (A & w) && (D |= 16));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 8));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 4));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 2));
                t += u;
                C += v;
                0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), A = Math.floor(C /
                    65536), w = 32768 >>> B % 16, A = a.P[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 1));
                t += u;
                C += v;
                this.P[E++] = D
            }
            if (0 != l) {
                D = 32768;
                for (e = B = 0; e < l; e++, D = D >> 1 & 32767) {
                    if (0 <= t && t < g && 0 <= C && C < r) {
                        A = Math.floor(t / 65536);
                        var F = Math.floor(C / 65536);
                        w = 32768 >>> A % 16;
                        A = a.P[Math.floor(F * n + A / 16)];
                        0 != (A & w) && (B |= D)
                    }
                    t += u;
                    C += v
                }
                this.P[E] = B
            }
            b += q;
            h -= c;
            k += d
        }
        return !0
    },
    Nj: function(a, b, c, d, e, f, g) {
        var h, p, l;
        a <= e ? (h = this, l = Math.floor(c), c = Math.floor(g), p = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (h = d, d = this, l = Math.floor(g), c = Math.floor(c),
            p = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
        f = h.height;
        var n = 0;
        0 != l && (f = l, g += h.height - l, n = h.height - l);
        e = d.height;
        var q = 0;
        0 != c && (e = c, b += d.height - c, q = d.height - c);
        if (p >= a + d.width || p + h.width <= a || g >= b + e || g + f < b) return !1;
        c = a - p;
        l = Math.floor(c / 16);
        c %= 16;
        p = Math.min(p + h.width - a, d.width);
        p = Math.floor((p + 15) / 16);
        g <= b ? (a = b - g + n, n = q, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + q, g = Math.min(g + f, b + e) - g);
        b = a * h.lineWidth;
        e = n * d.lineWidth;
        if (0 != c) switch (p) {
            case 1:
                for (a = 0; a < g; a++) {
                    n = h.P[b + l] << c;
                    if (0 != (n & d.P[e]) ||
                        l + 1 < h.lineWidth && (n = h.P[b + l + 1] << c, n >>>= 16, 0 != (n & d.P[e]))) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
                break;
            case 2:
                for (a = 0; a < g; a++) {
                    n = h.P[b + l] << c;
                    if (0 != (n & d.P[e])) return !0;
                    n = h.P[b + l + 1] << c;
                    q = n >>> 16;
                    if (0 != (q & d.P[e]) || 0 != (n & d.P[e + 1]) || l + 2 < h.lineWidth && (n = h.P[b + l + 2] << c, n >>>= 16, 0 != (n & d.P[e + 1]))) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
                break;
            default:
                for (a = 0; a < g; a++) {
                    n = h.P[b + l] << c;
                    if (0 != (n & d.P[e])) return !0;
                    for (f = 0; f < p - 1; f++)
                        if (n = h.P[b + l + f + 1] << c, q = n >>> 16, 0 != (q & d.P[e + f]) || 0 != (n & d.P[e + f + 1])) return !0;
                    if (l + f + 1 < h.lineWidth &&
                        (n = h.P[b + l + f + 1] << c, n >>>= 16, 0 != (n & d.P[e + f]))) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
        } else
            for (a = 0; a < g; a++) {
                for (f = 0; f < p; f++)
                    if (n = h.P[b + l + f], 0 != (d.P[e + f] & n)) return !0;
                b += h.lineWidth;
                e += d.lineWidth
            }
        return !1
    },
    Ux: function(a, b, c, d, e, f, g, h) {
        a = Math.floor(a);
        b = Math.floor(b);
        d = Math.floor(d);
        e = Math.floor(e);
        var m = 0,
            l = this.height;
        0 < c && (m = this.height - c, b += m, l = c);
        c = g;
        0 < h && (e += g - h, c = h);
        if (a >= d + f || a + this.width <= d || b >= e + c || b + l < e) return !1;
        a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
        b <=
            e ? (m = e - b + m, b = Math.min(b + l, e + c) - e) : b = Math.min(b + l, e + c) - b;
        e = Math.floor(g / 8);
        l = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
        for (f = 0; f < b; f++) switch (d = (f + m) * this.lineWidth, l) {
            case 1:
                c = B.Ov[g & 15] & B.lx[(g + a - 1 & 15) + 1];
                if (0 != (this.P[d + e] & c)) return !0;
                break;
            case 2:
                c = B.Ov[g & 15];
                if (0 != (this.P[d + e] & c)) return !0;
                c = B.lx[(g + a - 1 & 15) + 1];
                if (0 != (this.P[d + e + 1] & c)) return !0;
                break;
            default:
                c = B.Ov[g & 15];
                if (0 != (this.P[d + e] & c)) return !0;
                for (h = 1; h < l - 1; h++)
                    if (0 != this.P[d + e + h]) return !0;
                c = B.lx[(g + a - 1 & 15) + 1];
                if (0 != (this.P[d + e + h] & c)) return !0
        }
        return !1
    },
    $s: function(a, b, c, d, e) {
        a = Math.floor(a);
        b = Math.floor(b);
        var f = a,
            g = b;
        if (0 == c) {
            if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
        } else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
        f += this.Ja;
        g += this.Ha;
        a = Math.floor(f);
        b = Math.floor(g);
        return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.P[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
    }
};
w.xh = 1;
w.qH = 2;
w.ju = 4;
w.rH = 16;
w.gg = 32;
w.hk = 64;
w.wh = 128;
w.iQ = 0;
w.hQ = 1;
w.YM = 0;
w.tf = 1;
w.aN = 2;
w.KE = 3;
w.UM =
    4;
w.dN = 5;
w.XM = 6;
w.ZM = 7;
w.VM = 8;
w.JE = 9;
w.cN = 10;
w.eN = 11;
w.WM = 12;
w.$M = 13;
w.bN = 13;
w.hy = 4095;
w.st = 4096;
w.iy = 8192;
w.prototype = {
    QJ: function(a, b, c) {
        this.a = a;
        this.Ym = c.Uz;
        this.Rs = c.Vz;
        this.W = 0;
        this.W |= w.hk;
        0 == (this.a.af & M.Td) && (this.W &= ~w.hk);
        0 != (this.a.Kb.VC & z.bH) && (this.W |= w.wh);
        0 != (c.En & h.jn) ? (this.W |= w.xh, this.a.xa == q.uh && (this.a.X |= G.mh, this.W &= ~w.hk)) : this.W |= w.gg;
        this.Zb = this.a.Kb.UC;
        this.$b = this.a.Kb.TC;
        this.a.b.Oc == S.UG && (this.W |= w.qH)
    },
    Fv: function(a) {
        this.II(a);
        a && this.a.O.vm && (this.a.X |= G.Bi)
    },
    handle: function() {
        var a =
            this.a.c,
            b, c, d, e;
        0 != (this.a.X & G.Bi) ? (this.Ug || this.Wl(!1), this.bL()) : 0 != (this.a.X & G.Ci) ? this.cL() : 0 == (this.W & w.ju) ? (0 != this.rl && (this.Xm -= a.ip, 0 > this.Xm && (this.Xm = this.rl, 0 == (this.W & w.gg) ? (this.W |= w.gg, this.Dw()) : (this.W &= ~w.gg, this.Io()))), null != this.a.A && this.a.A.move(), 0 == this.a.b.hi && (0 != (this.a.ta & z.fk) ? 0 == (this.a.ta & z.cz) && 0 != (a.h.Ma & l.yE) && (b = this.a.o - this.a.ia, c = this.a.m - this.a.ja, d = b + this.a.K, e = c + this.a.J, (d < a.Nm || b > a.Lm || e < a.Rm || c > a.Pm) && a.lg(this.a.Vb)) : (b = this.a.o - this.a.ia, c = this.a.m -
            this.a.ja, d = b + this.a.K, e = c + this.a.J, d >= a.Mm && b <= a.Km && e >= a.Qm && c <= a.Om || (d >= a.Nm && b <= a.Lm && e >= a.Rm && c <= a.Pm ? (this.W |= w.ju, this.Rs = this.a.Wi()) : 0 == (this.a.ta & z.cz) && a.lg(this.a.Vb))))) : (b = this.a.o - this.a.ia, c = this.a.m - this.a.ja, d = b + this.a.K, e = c + this.a.J, d >= a.Mm && b <= a.Km && e >= a.Qm && c <= a.Om && (this.W &= ~w.ju, this.Fv(!1), this.a.ge(this.Rs)))
    },
    II: function() {
        0 != (this.a.ta & z.ek) ? this.a.su(this.a.o - this.a.c.ca, this.a.m - this.a.c.ga, this.a.b.Ga, this.Ym, 0 == (this.W & w.xh)) : (this.a.X |= G.nG, this.a.Rl(this.a.o - this.a.c.ca,
            this.a.m - this.a.c.ga, this.Ym, 0 != (this.a.ta & z.gu), 0 == (this.W & w.xh), -1));
        this.a.LD(this.Zb, this.$b)
    },
    Wl: function(a) {
        this.a.X &= ~(G.Bi | G.Ci);
        if (0 == a) {
            if (!this.a.O.vm) return !1;
            this.a.X |= G.Bi
        } else {
            if (!this.a.O.Ko) return !1;
            this.a.X |= G.Ci
        }
        this.Ug = this.a.c.h.sv().iM(this.a, a);
        return this.Ug ? !0 : (this.a.X &= ~(G.Bi | G.Ci), !1)
    },
    bL: function() {
        if (0 != (this.a.X & G.Bi)) {
            if (this.Ug.yr()) return this.a.X &= ~G.Bi, this.Ug = this.a.yl = null, !1;
            this.Ug.Sb(v.mu);
            return !0
        }
        return !1
    },
    cL: function() {
        if (0 != (this.a.X & G.Ci)) {
            if (this.Ug.yr()) return this.yl =
                this.Ug = null, this.a.c.lg(this.a.Vb), !1;
            this.Ug.Sb(v.yq);
            return !0
        }
        return !1
    },
    RJ: function() {
        return this.Wl(!0) ? (this.a.X |= G.mh, !0) : !1
    },
    Fb: function() {
        this.Rs = this.a.Wi()
    },
    Io: function() {
        0 == (this.W & w.xh) && (this.W |= w.xh, this.a.b.M = !0, this.a.Ik())
    },
    Dw: function() {
        0 != (this.W & w.xh) && (this.a.c.C.tb[this.a.be].Ma & (X.Qp | X.Gt)) == X.Gt && (this.W &= ~w.xh, this.a.X &= ~G.mh, this.a.b.M = !0, this.a.tl())
    },
    Ss: function(a) {
        this.W = a ? this.W | w.hk : this.W & ~w.hk
    },
    LK: function(a, b) {
        this.Zb = a;
        this.$b = b
    }
};
Zd.prototype = {
    load: function(a) {
        this.$r =
            a.v();
        this.ka = Array(this.$r);
        var b;
        for (b = 0; b < this.$r; b++) this.ka[b] = a.ub()
    }
};
$d.prototype = {
    load: function(a, b) {
        this.as = a.v();
        this.values = Array(this.as);
        var c;
        for (c = 0; c < this.as; c++) this.values[c] = a.w();
        b && (this.Ca = a.w())
    }
};
Ea.SH = 26;
Ea.hz = 10;
Ea.prototype = {
    Y: function(a, b) {
        this.Qe = 0;
        this.Va = Array(Ea.SH);
        this.ze = Array(Ea.hz);
        var c;
        for (c = 0; c < this.Va.length; c++) this.Va[c] = 0;
        for (c = 0; c < this.ze.length; c++) this.ze[c] = "";
        if (null != b.wm)
            for (this.Qe = b.wm.Ca, c = 0; c < b.wm.as; c++) this.Va[c] = b.wm.values[c];
        if (null != b.No)
            for (c =
                0; c < b.No.$r; c++) this.ze[c] = b.No.ka[c]
    },
    Fb: function() {
        var a;
        for (a = 0; a < this.Va.length; a++) this.Va[a] = 0;
        for (a = 0; a < this.ze.length; a++) this.ze[a] = null
    },
    lr: function(a) {
        return a < this.Va.length ? this.Va[a] : 0
    },
    vB: function(a) {
        return a < this.ze.length ? this.ze[a] : ""
    },
    UD: function(a, b) {
        a > this.N.Va.length && this.aj(a + 10);
        this.Va[a] = b
    },
    aj: function(a) {
        if (a >= this.Va.length) {
            var b;
            for (b = 0; b < a; b++) this.Va[b] = 0
        }
    },
    GJ: function(a) {
        if (a >= this.ze.length) {
            var b;
            for (b = 0; b < a; b++) this.ze[b] = ""
        }
    }
};
Ra.cg = 32;
Ra.prototype = {
    FI: function() {
        this.Ck =
            Array(4);
        this.bs = Array(4);
        var a;
        for (a = 0; 4 > a; a++) this.Ck[a] = null, this.bs[a] = 0;
        a = new ib;
        a.handle = 0;
        this.qz(a);
        a = new ib;
        a.handle = 3;
        this.qz(a)
    },
    qz: function(a) {
        var b = a.Hr();
        null != b && (this.Ck[a.handle] = a, this.bs[a.handle] = b.co())
    },
    Hr: function(a) {
        a -= Ra.cg;
        var b = null;
        a < this.Ck.length && null != this.Ck[a] && (b = this.Ck[a].Hr());
        return b
    },
    co: function(a) {
        a -= Ra.cg;
        return a < this.Ck.length ? this.bs[a] : 0
    }
};
ib.prototype = {
    Hr: function() {
        switch (this.handle) {
            case 0:
                return new La;
            case 3:
                return new H
        }
        return null
    }
};
Fa.YP = 1;
Fa.gz =
    2;
Fa.prototype = {
    Y: function(a) {
        this.j = a;
        this.R = a.c
    },
    co: function() {
        return 0
    },
    Uu: function() {
        return !1
    },
    zv: function() {
        return Fa.gz
    },
    Xu: function() {},
    dA: function() {},
    $K: function() {},
    zI: function() {},
    Fn: function() {
        return !1
    },
    action: function() {},
    Sn: function() {
        return null
    },
    sB: function() {
        return null
    },
    OD: function() {},
    tB: function() {
        return 0
    },
    PD: function() {},
    Oi: function() {},
    bm: function() {}
};
ae.prototype = {
    evaluate: function(a) {
        var b = a.i.$i(this.Mb);
        if (null == b) a.va[a.fa] = 0;
        else {
            var c = (this.code >> 16) - R.Ai;
            a.Vu = this;
            a.va[a.fa] = b.Sn(c)
        }
    }
};
be.prototype = {
    qa: function(a) {
        var b = a.i.zb(this);
        if (null != b) {
            var c = (this.Ba >>> 16) - R.Ai;
            a.Vu = this;
            b.action(c, this)
        }
    },
    rv: function(a, b) {
        return a.i.DJ(this.B[b].Mb, this)
    },
    qB: function(a, b) {
        var c = new Oa;
        this.B[b].ap(a, 0, c) && (c.YA = !0);
        return c
    },
    $e: function(a, b) {
        return a.jb(this.B[b])
    },
    Jc: function(a, b) {
        return a.uv(this.B[b])
    }
};
ce.prototype = {
    rb: function(a, b) {
        if (null == b) return this.na(a);
        b.X |= G.Mt;
        var c = -(this.Ba >> 16) - R.Ai - 1;
        a.Vu = this;
        return b.Fn(c, this) ? (a.i.am(b), !0) : !1
    },
    na: function(a) {
        var b =
            a.i.Ef(this.yb),
            c = a.i.Ic,
            d = -(this.Ba >> 16) - R.Ai - 1;
        for (a.Vu = this; null != b;) b.X &= ~G.Mt, b.Fn(d, this) ? 0 != (this.We & T.$j) && (c--, a.i.Ed()) : 0 == (this.We & T.$j) && (c--, a.i.Ed()), b = a.i.Ye();
        return 0 != c ? !0 : !1
    },
    rv: function(a, b) {
        return this.B[b]
    },
    qB: function(a, b) {
        var c = new Oa;
        this.B[b].ap(a, 0, c) && (c.YA = !0);
        return c
    },
    $e: function(a, b) {
        return a.jb(this.B[b])
    },
    Jc: function(a, b) {
        return a.uv(this.B[b])
    }
};
jb.prototype = n.extend(new Fa, {
    bm: function() {
        this.setPosition(this.j.o, this.j.m)
    },
    Oi: function() {
        this.setPosition(this.j.o,
            this.j.m);
        this.tp(this.j.K, this.j.J)
    },
    VL: function(a, b) {
        this.element = a;
        a.style.position = "absolute";
        this.tp(this.j.K, this.j.J);
        this.setPosition(this.j.o, this.j.m);
        this.jv && this.Vg(this.jv);
        this.Bu = this.j.pa = b;
        this.R.h.yg ? (a.style.visibility = "hidden", this.Bu = !1) : a.style.visibility = b ? "visible" : "hidden";
        this.R.h.Qu.appendChild(a)
    },
    xB: function() {
        return this.R.h.canvas ? this.R.h.canvas.offsetLeft : 0
    },
    yB: function() {
        return this.R.h.canvas ? this.R.h.canvas.offsetTop : 0
    },
    Lx: function(a) {
        this.kA = a;
        this.j.Lx(a);
        this.element &&
            (this.element.style.left = this.xB() + this.R.h.Rj + (this.j.o - this.j.c.ca) * this.R.h.ic + "px")
    },
    Mx: function(a) {
        this.lA = a;
        this.j.Mx(a);
        this.element && (this.element.style.top = this.yB() + this.R.h.Tj + (this.j.m - this.j.c.ga) * this.R.h.jc + "px")
    },
    setPosition: function(a, b) {
        this.kA = a;
        this.lA = b;
        this.j.setPosition(a, b);
        this.element && (this.element.style.left = this.xB() + this.R.h.Rj + (this.j.o - this.j.c.ca) * this.R.h.ic + "px", this.element.style.top = this.yB() + this.R.h.Tj + (this.j.m - this.j.c.ga) * this.R.h.jc + "px")
    },
    Ys: function(a) {
        this.jA =
            a;
        this.j.Ys(a);
        this.element && (this.element.style.width = this.j.K * this.R.h.ic + "px")
    },
    Us: function(a) {
        this.iA = a;
        this.j.Us(a);
        this.element && !this.Zz && (this.element.style.height = this.j.J * this.R.h.jc + "px")
    },
    tp: function(a, b) {
        this.jA = a;
        this.iA = b;
        this.j.tp(a, b);
        this.element && (this.element.style.width = this.j.K * this.R.h.ic + "px", this.Zz || (this.element.style.height = this.j.J * this.R.h.jc + "px"))
    },
    Vg: function(a) {
        this.jv = a;
        this.element && (this.element.style.font = a.qg())
    },
    Xu: function() {
        this.element && this.R.h.Qu.removeChild(this.element)
    },
    sB: function() {
        return this.jv
    },
    OD: function(a) {
        this.Vg(a)
    },
    zv: function() {
        this.R.h.yg || this.j.pa == this.Bu || (this.Bu = this.j.pa, this.element.style.visibility = this.j.pa ? "visible" : "hidden");
        this.j.o == this.kA && this.j.m == this.lA || this.setPosition(this.j.o, this.j.m);
        this.j.K == this.jA && this.j.J == this.iA || this.tp(this.j.K, this.j.J);
        return 0
    }
});
S.UG = 0;
S.SG = 1;
S.TG = 2;
S.gP = 3;
S.fP = 4;
S.hP = 5;
S.eu = 9;
S.RG = 11;
S.eP = 12;
S.QG = 13;
S.Gi = 14;
S.prototype = {
    setData: function(a, b, c, d, e) {
        this.yw = a;
        this.om = b;
        this.HC = c;
        this.GC = d;
        this.Wr =
            e
    }
};
de.prototype = {
    load: function(a) {
        var b = a.S;
        this.rm = a.w();
        this.Jd = Array(this.rm);
        var c;
        for (c = 0; c < this.rm; c++) {
            a.seek(b + 4 + 16 * c);
            var d = a.w(),
                e = a.w(),
                f = a.w(),
                g = a.w();
            a.seek(b + f);
            var f = a.v(),
                h = a.v(),
                l = a.fb(),
                n = a.fb();
            a.ma(2);
            var q = a.w();
            switch (h) {
                case 0:
                    this.Jd[c] = new le;
                    break;
                case 1:
                    this.Jd[c] = new ge;
                    break;
                case 2:
                    this.Jd[c] = new ke;
                    break;
                case 3:
                    this.Jd[c] = new fe;
                    break;
                case 4:
                    this.Jd[c] = new ee;
                    break;
                case 5:
                    this.Jd[c] = new he;
                    break;
                case 9:
                    this.Jd[c] = new je;
                    break;
                case 14:
                    this.Jd[c] = new me
            }
            this.Jd[c].setData(h,
                f, l, q, n);
            this.Jd[c].load(a, g - 12);
            14 == h && (a.seek(b + d), d = a.ub(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.Jd[c].$L(d, e))
        }
    }
};
ee.prototype = n.extend(new S, {
    load: function(a) {
        this.wo = a.v();
        this.ZB = a.v();
        this.YB = a.v();
        this.aC = a.v();
        this.$B = a.v()
    }
});
fe.prototype = n.extend(new S, {
    load: function(a) {
        this.hC = a.v();
        this.eC = a.v();
        this.fC = a.v();
        a.v();
        this.gC = a.w()
    }
});
ge.prototype = n.extend(new S, {
    load: function(a) {
        this.iC = a.Z();
        this.kC = a.Z();
        this.jC = a.Z();
        this.lC = a.Z();
        a.v()
    }
});
he.prototype = n.extend(new S, {
    load: function(a) {
        this.nm =
            a.v();
        this.BC = a.v();
        this.AC = a.v();
        this.xw = a.fb();
        this.DC = a.fb();
        this.FC = a.fb();
        a.ma(1);
        this.Za = Array(this.nm);
        var b, c, d;
        for (b = 0; b < this.nm; b++) d = a.S, this.Za[b] = new ie, a.ra(), c = a.ra(), this.Za[b].load(a), a.seek(d + c)
    }
});
ie.prototype = {
    load: function(a) {
        this.dC = a.fb();
        this.mw = a.fb();
        this.nw = a.Z();
        this.ow = a.Z();
        this.lw = a.Z();
        this.qw = a.Z();
        this.cC = a.v();
        this.pw = a.v();
        a = a.ub();
        0 < a.length && (this.ve = a)
    }
};
je.prototype = n.extend(new S, {
    load: function(a) {
        this.uC = a.v();
        this.pC = a.v();
        this.qC = a.v();
        this.tC = a.v();
        this.rC =
            a.v();
        this.sC = a.v()
    }
});
ke.prototype = n.extend(new S, {
    load: function(a) {
        this.yC = a.v();
        this.vw = a.v();
        this.ww = a.v();
        this.xC = a.v();
        a.v();
        this.vC = a.v();
        this.wC = a.v()
    }
});
le.prototype = n.extend(new S, {
    load: function() {}
});
me.prototype = n.extend(new S, {
    load: function(a) {
        a.ma(14);
        this.data = a.S
    },
    $L: function(a) {
        this.Mc = a
    }
});
D.Yj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
D.ik = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236,
    -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49
];
D.WH = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892,
    21504, 25600, 25600
];
D.AG = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
D.Cl = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
D.ef = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0];
D.tn = 1;
D.rJ = function(a,
    b) {
    return a * D.Yj[b] / 256
};
D.sJ = function(a, b) {
    return a * D.ik[b] / 256
};
D.prototype = {
    lj: function(a, b) {
        this.a.c.fd++;
        this.Pe = this.a.c.fd;
        this.a.A.U = !1;
        if (0 == a) return this.a.c.Le(this.a), !1;
        var c, d, e;
        for (e = 0 != (this.a.c.C.Wb & E.Vc) ? Math.floor(a * this.a.c.Cc * 32) : a << 5; 2048 < e;) {
            c = 65536 * this.a.o + (this.a.tg & 65535);
            d = 65536 * this.a.m + (this.a.ug & 65535);
            c += 2048 * D.Yj[b];
            d += 2048 * D.ik[b];
            this.a.tg = c & 65535;
            this.a.o = Math.floor(c / 65536);
            this.a.ug = d & 65535;
            this.a.m = Math.floor(d / 65536);
            if (this.a.c.Le(this.a)) return !0;
            if (this.a.A.U) break;
            e -= 2048
        }
        if (!this.a.A.U && (c = 65536 * this.a.o + (this.a.tg & 65535), d = 65536 * this.a.m + (this.a.ug & 65535), c += D.Yj[b] * e, d += D.ik[b] * e, this.a.tg = c & 65535, this.a.o = Math.floor(c / 65536), this.a.ug = d & 65535, this.a.m = Math.floor(d / 65536), this.a.c.Le(this.a))) return !0;
        this.a.b.M = !0;
        this.a.A.U || (this.a.c.ql = 0);
        return this.a.A.U
    },
    Ao: function(a) {
        0 == a.HC && this.stop()
    },
    Dk: function(a) {
        return 100 >= a ? D.WH[a] : a << 8
    },
    Bo: function(a) {
        if (a) this.bC(!1);
        else switch (this.a.c.i.Os & 4294901760) {
            case -786432:
                a = this.a.o - this.a.ia;
                var b = this.a.m -
                    this.a.ja,
                    c = this.a.c.bl(a, b, a + this.a.K, b + this.a.J);
                a = this.a.o;
                b = this.a.m;
                0 != (c & h.hh) && (a = this.a.ia);
                0 != (c & h.ih) && (a = this.a.c.Od - this.a.K + this.a.ia);
                0 != (c & h.jh) && (b = this.a.ja);
                0 != (c & h.gh) && (b = this.a.c.Pd - this.a.J + this.a.ja);
                this.a.o = a;
                this.a.m = b;
                break;
            case -851968:
            case -917504:
                a = 18 * (this.a.c.Jb(this.a) >> 2);
                do {
                    if (this.bh(this.a.o + D.ef[a], this.a.m + D.ef[a + 1], !1)) {
                        this.a.o += D.ef[a];
                        this.a.m += D.ef[a + 1];
                        return
                    }
                    a += 2
                } while (0 != D.ef[a] || 0 != D.ef[a + 1]);
                this.a.o = this.a.b.Aj;
                this.a.m = this.a.b.Bj;
                this.a.b.Ga = this.a.b.zs;
                this.a.b.Ua = this.a.b.ys
        }
    },
    bC: function(a) {
        switch (this.a.c.i.Os & 4294901760) {
            case -786432:
                a = this.a.o - this.a.ia;
                var b = this.a.m - this.a.ja,
                    c = this.a.c.bl(a, b, a + this.a.K, b + this.a.J);
                a = this.a.o;
                b = this.a.m;
                0 != (c & h.hh) && (a = this.a.ia);
                0 != (c & h.ih) && (a = this.a.c.Od - this.a.K + this.a.ia);
                0 != (c & h.jh) && (b = this.a.ja);
                0 != (c & h.gh) && (b = this.a.c.Pd - this.a.J + this.a.ja);
                this.a.o = a;
                this.a.m = b;
                break;
            case -851968:
            case -917504:
                if (b = new ta, this.KK(this.a.o, this.a.m, this.a.b.Aj, this.a.b.Bj, a, b)) this.a.o = b.x, this.a.m = b.y;
                else {
                    b = 18 *
                        (this.a.c.Jb(this.a) >> 2);
                    do {
                        if (this.bh(this.a.o + D.ef[b], this.a.m + D.ef[b + 1], a)) {
                            this.a.o += D.ef[b];
                            this.a.m += D.ef[b + 1];
                            return
                        }
                        b += 2
                    } while (0 != D.ef[b] || 0 != D.ef[b + 1]);
                    0 == a && (this.a.o = this.a.b.Aj, this.a.m = this.a.b.Bj, this.a.b.Ga = this.a.b.zs, this.a.b.Ua = this.a.b.ys)
                }
        }
    },
    dn: function(a, b, c, d, e) {
        var f;
        f = -1;
        e && (f = this.a.bf);
        e = this.a.Kb;
        if (0 != (e.Ld & 15)) {
            var g = a - this.a.ia,
                h = b - this.a.ja;
            if (0 != (this.a.c.bl(g, h, g + this.a.K, h + this.a.J) & e.Ld)) return !1
        }
        if (0 != (e.Ld & 16) && this.a.c.rk(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb,
                this.a.b.nb, a, b, c, d)) return !1;
        if (-1 == e.xm) return !0;
        a = this.a.c.tm(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, a, b, e.sj);
        if (null == a) return !0;
        b = this.a.c.i.Mk;
        for (c = 0; c < a.size(); c++)
            if (d = a.get(c).bf, d != f)
                for (g = e.xm; 0 <= b[g]; g++)
                    if (b[g] == d) return !1;
        return !0
    },
    bh: function(a, b, c) {
        var d;
        d = -1;
        c && (d = this.a.bf);
        c = this.a.Kb;
        if (0 != (c.Ld & 15)) {
            var e = a - this.a.ia,
                f = b - this.a.ja;
            if (0 != (this.a.c.bl(e, f, e + this.a.K, f + this.a.J) & c.Ld)) return !1
        }
        if (0 != (c.Ld & 16) && this.a.c.rk(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb,
                this.a.b.nb, a, b, 0, E.ie)) return !1;
        if (-1 == c.xm) return !0;
        a = this.a.c.tm(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, a, b, c.sj);
        if (null == a) return !0;
        b = this.a.c.i.Mk;
        for (e = 0; e < a.size(); e++)
            if (f = a.get(e).bf, f != d) {
                var g;
                for (g = c.xm; 0 <= b[g]; g++)
                    if (b[g] == f) return !1
            } return !0
    },
    lm: function(a, b, c, d, e, f, g) {
        var h = n.Gd((a + c) / 2),
            l = n.Gd((b + d) / 2),
            q, r;
        do
            if (this.dn(h + this.a.c.ca, l + this.a.c.ga, e, f, !1)) {
                if (c = h, d = l, q = h, r = l, h = n.Gd((c + a) / 2), l = n.Gd((d + b) / 2), h == q && l == r) return c == a && d == b || !this.dn(a + this.a.c.ca, b + this.a.c.ga,
                    e, f, !1) || (h = a, l = b), g.x = h, g.y = l, !0
            } else if (a = h, b = l, q = h, r = l, h = n.Gd((c + a) / 2), l = n.Gd((d + b) / 2), h == q && l == r) {
            if ((c != a || d != b) && this.dn(c + this.a.c.ca, d + this.a.c.ga, e, f, !1)) return g.x = c, g.y = d, !0;
            g.x = h;
            g.y = l;
            return !1
        } while (1)
    },
    KK: function(a, b, c, d, e, f) {
        var g = n.Gd((a + c) / 2),
            h = n.Gd((b + d) / 2),
            l, q;
        do
            if (this.bh(g, h, e)) {
                if (c = g, d = h, l = g, q = h, g = n.Gd((c + a) / 2), h = n.Gd((d + b) / 2), g == l && h == q) return c == a && d == b || !this.bh(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
            } else if (a = g, b = h, l = g, q = h, g = n.Gd((c + a) / 2), h = n.Gd((d + b) / 2), g == l && h == q) {
            if ((c !=
                    a || d != b) && this.bh(c, d, e)) return f.x = c, f.y = d, !0;
            f.x = g;
            f.y = h;
            return !1
        } while (1)
    },
    sp: function(a) {
        this.a.b.Oc == S.TG && (250 < a && (a = 250), 0 > a && (a = 0), this.sp(a));
        this.a.b.Oc == S.Gi && this.Yc.sp(a)
    },
    rp: function(a) {
        this.a.b.Oc == S.eu && (250 < a && (a = 250), 0 > a && (a = 0), this.rp(a));
        this.a.b.Oc == S.Gi && this.Yc.rp(a)
    },
    kr: function() {
        return this.a.b.Oc == S.Gi ? this.Yc.kr() : this.a.b.$
    },
    Jb: function() {
        return this.a.b.Oc == S.Gi && this.Yc.Jb ? this.Yc.Jb() : this.a.b.Sa
    },
    Fb: function() {},
    start: function() {}
};
va.BL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25,
    25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];
va.VG = [4294967292, 4294967294, 4294967295];
va.oH = [-4, 4, -2, 2, -1, 1];
va.pH = [-4, 4, -4, 4, -4, 4];
va.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.a.tg = 0;
        this.a.ug =
            0;
        this.a.b.$ = b.wo;
        this.a.b.eb = b.wo;
        this.a.b.gi = b.wo;
        this.Gl = b.wo << 8;
        var c = b.$B;
        0 != c && (c = this.Dk(c), this.a.b.gi = 0);
        this.ye = c;
        this.Ly = b.ZB;
        this.Zp = b.YB;
        this.$p = va.VG[this.Zp];
        this.Ei = !1;
        this.Rt = -1;
        this.Fl = this.aq = (100 - b.aC) / 8;
        this.Ao(b);
        this.a.b.M = !0
    },
    move: function() {
        this.a.A.Jj = !1;
        this.a.c.ql = 1;
        this.a.b.fe = u.qc;
        null != this.a.ha && this.a.ha.De();
        if (0 != this.ye) {
            var a = this.Gl;
            if (0 < a) {
                var b = this.ye;
                0 != (this.a.c.C.Wb & E.Vc) && (b *= this.a.c.Cc);
                a -= b;
                0 > a && (a = 0);
                this.Gl = a;
                this.a.b.$ = a >> 8
            }
        }
        this.lj(this.a.b.$, this.a.c.Jb(this.a))
    },
    stop: function() {
        0 == this.Pb && (this.Pb = this.a.b.$ | 32768, this.Gl = this.a.b.$ = 0, this.a.A.U = !0)
    },
    start: function() {
        var a = this.Pb;
        0 != a && (a &= 32767, this.a.b.$ = a, this.Gl = a << 8, this.Pb = 0, this.a.A.U = !0)
    },
    Te: function() {
        if (0 == this.Pb && this.a.c.Ya != this.Rt) {
            this.Rt = this.a.c.Ya;
            this.Pe == this.a.c.fd && this.bC(this.Ei);
            var a = this.a.o,
                b = this.a.m,
                c = 0,
                a = a - 8,
                b = b - 8;
            0 == this.bh(a, b, this.Ei) && (c |= 1);
            a += 16;
            0 == this.bh(a, b, this.Ei) && (c |= 2);
            b += 16;
            0 == this.bh(a, b, this.Ei) && (c |= 4);
            0 == this.bh(a - 16, b, this.Ei) && (c |= 8);
            a = va.BL[32 * c + this.a.c.Jb(this.a)];
            a &= this.$p;
            if (!this.Co(a)) {
                var c = b = va.pH[2 * this.Zp + 1],
                    d = !1;
                do {
                    a -= b;
                    a &= 31;
                    if (this.Co(a)) {
                        d = !0;
                        break
                    }
                    a += 2 * b;
                    a &= 31;
                    if (this.Co(a)) {
                        d = !0;
                        break
                    }
                    a -= b;
                    a &= 31;
                    b += c
                } while (16 >= b);
                if (0 == d) {
                    this.Ei = !0;
                    this.a.b.Sa = this.a.c.random(32) & this.$p;
                    this.a.A.Jj = !0;
                    this.a.A.U = !0;
                    return
                }
            }
            this.Ei = !1;
            this.a.b.Sa = a;
            a = this.a.c.random(100);
            if (a < this.Ly && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.$p, this.Co(a)))) {
                this.a.b.Sa = a;
                this.a.A.Jj = !0;
                this.a.A.U = !0;
                return
            }
            a = this.a.c.Jb(this.a) & 7;
            12 != this.Fl && (0 == a ? (this.Fl--, 0 > this.Fl && (a = this.a.c.Jb(this.a) +
                va.oH[this.a.c.random(2) + 2 * this.Zp], a &= 31, this.Co(a) && (this.a.b.Sa = a, this.Fl = this.aq))) : this.Fl = this.aq);
            this.a.A.Jj = !0;
            this.a.A.U = !0
        }
    },
    Co: function(a) {
        var b = 2048 * D.Yj[a] + (65536 * this.a.o + (this.a.tg & 65535));
        a = 2048 * D.ik[a] + (65536 * this.a.m + (this.a.ug & 65535));
        b = Math.floor(b / 65536);
        a = Math.floor(a / 65536);
        return this.bh(b, a, !1)
    },
    Ae: function() {},
    Be: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.$ = a;
        this.Gl = a << 8;
        this.Pb = 0;
        this.a.A.U = !0
    },
    Vf: function(a) {
        this.Be(a)
    },
    reverse: function() {
        0 == this.Pb && (this.a.A.U = !0, this.a.b.Sa += 16, this.a.b.Sa &= 31)
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    }
});
ne.prototype = n.extend(new D, {
    Y: function(a) {
        this.a = a;
        this.s = a.c;
        this.s.Dy();
        null != this.a.F && this.a.F.Ss(!1);
        null != this.a.F && (this.a.F.W &= ~w.gg, this.a.F.Io());
        this.bq = !0;
        this.a.tg = 0;
        this.a.ug = 0;
        null != this.a.ha && this.a.ha.FB(u.qc);
        this.a.b.$ = 0;
        this.a.b.Ra = !0;
        this.a.b.M = !0
    },
    Fv: function(a) {
        this.a.b.eb =
            this.a.b.$;
        this.a.b.gi = this.a.b.$;
        this.Hl = a
    },
    Fb: function() {
        this.nJ(this.a)
    },
    move: function() {
        if (this.bq) {
            if (null != this.Hl.ha && this.Hl.ha.cl == u.fy) return;
            this.eE()
        }
        null != this.a.ha && this.a.ha.De();
        this.lj(this.a.b.$, this.a.c.Jb(this.a));
        if (-64 > this.a.o || this.a.o > this.a.c.Od + 64 || -64 > this.a.m || this.a.m > this.a.c.Pd + 64) this.a.io = !1, this.a.c.lg(this.a.Vb);
        this.a.b.Ra && (this.a.b.Ra = !1, this.a.c.Le(this.a))
    },
    eE: function() {
        null != this.a.F && this.a.F.Ss(!0);
        null != this.a.F && (this.a.F.W |= w.gg, this.a.F.Dw());
        if (null !=
            this.s.mi) {
            var a = this.s.Rp(this.Hl);
            if (null != a) {
                var b = this.s.mi,
                    c = new ca;
                this.St = c;
                c.uG(this.a, ca.PG);
                c.HK = b.identifier;
                this.qn = b.ZR(a.GK, this.a.b.$ / 250 * 50, c);
                c.FK = this.qn;
                null == this.qn && (this.St = null)
            }
        }
        this.bq = !1;
        this.Hl = null
    },
    nJ: function() {
        null != this.qn && (pBase = this.a.c.mi, pBase.$R(this.qn), this.qn = null);
        null != this.St && (this.St = null)
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Ae: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    Te: function() {},
    Be: function() {},
    Vf: function() {}
});
oe.prototype = n.extend(new D, {
    Y: function(a) {
        this.a = a
    },
    move: function() {
        0 == (this.a.X & G.Ci) && null != this.a.ha && (this.a.ha.De(), this.a.ha.Lg != u.Al + 1 && this.a.c.lg(this.a.Vb))
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0)
    },
    Ae: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    Te: function() {},
    Be: function() {},
    Vf: function() {}
});
pe.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.a.tg = 0;
        this.eg = this.a.ug = 0;
        this.nh = this.a.b.$ = 0;
        this.Tt = -1;
        this.a.b.hi = b.om;
        this.jp = b.eC;
        this.Sg = this.Dk(this.jp);
        this.kp = b.fC;
        this.ye = this.Dk(this.kp);
        this.a.b.eb = b.hC;
        this.a.b.gi = 0;
        this.Ut = b.gC;
        this.Kj = b.Wr;
        this.a.b.M = !0
    },
    move: function() {
        var a, b, c, d;
        this.a.c.ql = 1;
        a = this.a.c.Jb(this.a);
        this.a.b.px = a;
        if (0 == this.nh) {
            this.a.A.Jj = !1;
            b = 0;
            c = this.a.c.Rc[this.a.b.hi - 1] & 15;
            0 != c && (d = D.AG[c], -1 != d &&
                0 != (1 << d & this.Ut) && (b = 1, a = d));
            c = this.eg;
            0 == b ? 0 != c && (b = this.ye, 0 != (this.a.c.C.Wb & E.Vc) && (b *= this.a.c.Cc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.eb && (b = this.Sg, 0 != (this.a.c.C.Wb & E.Vc) && (b *= this.a.c.Cc), c += b, c >> 8 > this.a.b.eb && (c = this.a.b.eb << 8));
            this.eg = c;
            this.a.b.$ = c >> 8;
            this.a.b.Sa = a;
            this.a.b.fe = u.qc;
            null != this.a.ha && this.a.ha.De();
            if (0 == this.lj(this.a.b.$, this.a.c.Jb(this.a))) return;
            if (0 == this.a.b.$) {
                c = this.eg;
                if (0 == c || this.a.b.px == this.a.c.Jb(this.a)) return;
                this.a.b.$ = c >> 8;
                this.a.b.Sa = this.a.b.px;
                if (0 ==
                    this.lj(this.a.b.$, this.a.c.Jb(this.a))) return
            }
        }
        for (; 0 != this.nh && 0 != this.a.c.ql;)
            if (c = this.eg, c -= this.ye, 0 < c) {
                if (this.eg = c, c >>= 8, this.a.b.$ = c, d = this.a.c.Jb(this.a), 0 != this.nh && (d += 16, d &= 31), 0 == this.lj(c, d)) break
            } else {
                this.eg = 0;
                this.nh = this.a.b.$ = 0;
                break
            }
    },
    Te: function() {
        this.Pe == this.a.c.fd && this.Bo(0 != (this.Kj & D.tn));
        this.a.c.Ya != this.Tt && (this.Tt = this.a.c.Ya, this.nh++, 12 <= this.nh ? this.stop() : (this.a.A.Jj = !0, this.a.A.U = !0))
    },
    reverse: function() {},
    Ae: function() {},
    stop: function() {
        this.eg = this.nh = this.a.b.$ =
            0;
        this.a.A.U = !0;
        this.Pe == this.a.c.fd && (this.Bo(0 != (this.Kj & D.tn)), this.nh = 0)
    },
    start: function() {
        this.a.A.U = !0;
        this.Pb = 0
    },
    Vf: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.eb = a;
        this.a.b.$ > a && (this.a.b.$ = a, this.eg = a << 8);
        this.a.A.U = !0
    },
    Be: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.eb && (a = this.a.b.eb);
        this.a.b.$ = a;
        this.eg = a << 8;
        this.a.A.U = !0
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    hS: function(a) {
        this.Ut = a
    }
});
qe.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.a.b.hi = b.om;
        this.Vt = b.iC + this.a.o;
        this.Wt = b.jC + this.a.m;
        this.Xt = b.kC + this.a.o;
        this.Yt = b.lC + this.a.m;
        this.eq = this.cq = this.a.b.$ = 0;
        this.a.b.gi = 0;
        this.a.b.eb = 100;
        this.Kj = b.Wr;
        this.Ao(b);
        this.a.b.M = !0
    },
    move: function() {
        var a = this.a.o,
            b = this.a.m,
            c, d, e, f;
        if (0 == this.Pb && 0 != this.a.c.Ds[this.a.b.hi - 1] && (a = this.a.c.ki, a < this.Vt && (a = this.Vt), a > this.Xt && (a = this.Xt), b = this.a.c.li, b < this.Wt && (b = this.Wt), b > this.Yt && (b = this.Yt),
                c = a - this.a.o, d = b - this.a.m, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.$ = f, 0 != f)) {
            0 == d && (d = 1);
            c = (c << 8) / d;
            for (d = 0; !(c >= D.Cl[d]); d += 2);
            c = D.Cl[d + 1];
            0 != (e & 2) && (c = -c + 32 & 31);
            0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
            this.a.b.Sa = c
        }
        0 != this.a.b.$ && (this.eq = 0, this.cq = this.a.b.$);
        this.eq++;
        10 < this.eq && (this.cq = 0);
        this.a.b.$ = this.cq;
        null != this.a.ha && this.a.ha.De();
        this.a.o = a;
        this.a.m = b;
        this.a.b.M = !0;
        this.a.c.fd++;
        this.Pe = this.a.c.fd;
        this.a.c.Le(this.a)
    },
    stop: function() {
        this.Pe == this.a.c.fd &&
            this.Bo(0 != (this.Kj & D.tn));
        this.a.b.$ = 0
    },
    start: function() {
        this.Pb = 0;
        this.a.A.U = !0
    },
    Te: function() {
        this.stop()
    },
    reverse: function() {},
    Ae: function() {},
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    }
});
re.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.jq = this.a.o;
        this.kq = this.a.m;
        this.md = !1;
        this.rh = 0;
        this.a.fm = 0;
        this.Ka = b;
        this.a.b.gi = b.BC;
        this.a.b.eb = b.AC;
        this.qh = 0;
        this.Ml =
            null;
        this.Sk(0);
        this.Ao(b);
        this.a.b.$ = this.Gc;
        this.a.b.M = !0;
        0 == this.Ka.Za.length && this.stop()
    },
    move: function() {
        this.a.fm = 0;
        this.a.b.fe = u.qc;
        null != this.a.ha && this.a.ha.De();
        if (0 == this.Gc) {
            var a = this.rh;
            if (0 == a) {
                this.a.b.$ = 0;
                this.a.c.Le(this.a);
                return
            }
            a -= this.a.c.ip;
            if (0 < a) {
                this.rh = a;
                this.a.b.$ = 0;
                this.a.c.Le(this.a);
                return
            }
            this.rh = 0;
            this.Gc = this.Pb & 32767;
            this.Pb = 0;
            this.a.b.$ = this.Gc
        }
        a = 0 != (this.a.c.C.Wb & E.Vc) ? 256 * this.a.c.Cc : 256;
        this.a.c.ni = a;
        for (var b;;) {
            b = !1;
            this.a.c.hp = a;
            a *= this.Gc;
            a <<= 5;
            524288 >=
                a ? this.a.c.Fx = a : (a = 16384, a /= this.Gc, this.a.c.hp = a, this.a.c.Fx = 524288);
            for (;;) {
                this.hq = !1;
                if (1 == this.CC(this.a.c.Fx) && 0 == this.hq) {
                    b = !0;
                    break
                }
                if (this.a.c.ni == this.a.c.hp) {
                    b = !0;
                    break
                }
                if (this.a.c.ni > this.a.c.hp) {
                    this.a.c.ni -= this.a.c.hp;
                    a = this.a.c.ni;
                    break
                }
                a = this.a.c.ni * MT_Speed;
                a <<= 5;
                this.CC(a);
                b = !0;
                break
            }
            if (b) break
        }
    },
    CC: function(a) {
        a += this.qh;
        var b = a >>> 16;
        if (b < this.iq) return this.qh = a, a = b * this.sn / 16384 + this.th, this.a.o = b * this.rn / 16384 + this.sh, this.a.m = a, this.a.b.M = !0, this.a.c.Le(this.a), this.a.A.U;
        b -= this.iq;
        a = b << 16 | a & 65535;
        0 != this.Gc && (a /= this.Gc);
        this.a.c.ni += a >> 5 & 65535;
        this.a.o = this.ck;
        this.a.m = this.dk;
        this.a.b.M = !0;
        this.a.c.Le(this.a);
        if (this.a.A.U) return !0;
        this.a.fm = this.a.c.Ya;
        this.a.em = null;
        b = this.ke;
        this.qh = 0;
        if (0 == this.md) {
            b++;
            if (b < this.Ka.nm) {
                this.a.em = this.Ka.Za[b].ve;
                if (null != this.Ml && null != this.Ka.Za[b].ve && n.xb(this.Ml, this.Ka.Za[b].ve)) return this.ke = b, this.df(), this.Vr();
                this.Sk(b);
                this.df();
                return this.a.A.U
            }
            this.a.ur = this.a.c.Ya;
            this.ke = b;
            if (this.md) return this.df(), this.a.A.U;
            if (0 != this.Ka.FC) return this.md = !0, b--, this.a.em = this.Ka.Za[b].ve, this.mm(b), this.df(), this.a.A.U;
            this.EC();
            if (0 == this.Ka.xw) return this.Vr(), this.df(), this.a.A.U;
            b = 0
        } else {
            if (null != this.Ml && null != this.Ka.Za[b].ve && n.xb(this.Ml, this.Ka.Za[b].ve)) return this.df(), this.Vr();
            this.a.em = this.Ka.Za[b].ve;
            this.rh = this.Ka.Za[b].pw;
            b--;
            if (0 <= b) return this.mm(b), this.df(), this.a.A.U;
            this.EC();
            if (0 == this.md) return this.df(), this.a.A.U;
            if (0 == this.Ka.xw) return this.Vr(), this.df(), this.a.A.U;
            b = 0;
            this.md = !1
        }
        this.Sk(b);
        this.df();
        return this.a.A.U
    },
    Sk: function(a) {
        a >= this.Ka.Za.length ? this.stop() : (this.md = !1, this.ke = a, this.rh = this.Ka.Za[a].pw, this.rn = this.Ka.Za[a].lw, this.sn = this.Ka.Za[a].qw, this.sh = this.a.o, this.th = this.a.m, this.ck = this.a.o + this.Ka.Za[a].nw, this.dk = this.a.m + this.Ka.Za[a].ow, this.a.b.Sa = this.Ka.Za[a].mw, this.zC())
    },
    mm: function(a) {
        a >= this.Ka.Za.length ? this.stop() : (this.md = !0, this.ke = a, this.rn = -this.Ka.Za[a].lw, this.sn = -this.Ka.Za[a].qw, this.sh = this.a.o, this.th = this.a.m, this.ck = this.a.o - this.Ka.Za[a].nw,
            this.dk = this.a.m - this.Ka.Za[a].ow, this.a.b.Sa = this.Ka.Za[a].mw + 16 & 31, this.zC())
    },
    zC: function() {
        this.iq = this.Ka.Za[this.ke].cC;
        var a = this.Ka.Za[this.ke].dC,
            b = this.rh;
        0 != b && (this.rh = 20 * b, this.Pb = a |= 32768);
        0 != this.Pb && (a = 0);
        if (a != this.Gc || 0 != a) this.Gc = a, this.hq = this.a.A.U = !0;
        this.a.b.$ = this.Gc
    },
    df: function() {
        this.a.fm == this.a.c.Ya && (this.a.c.i.Dc = 0, this.a.c.i.qd(this.a, -1310720 | this.a.xa & 65535), this.a.c.i.qd(this.a, -2293760 | this.a.xa & 65535));
        this.a.ur == this.a.c.Ya && (this.a.c.i.Dc = 0, this.a.c.i.qd(this.a,
            -1376256 | this.a.xa & 65535))
    },
    Vr: function() {
        this.Pb = this.Gc = 0;
        this.a.A.U = !0;
        this.hq = !1;
        return !0
    },
    EC: function() {
        0 != this.Ka.DC && (this.a.o = this.jq, this.a.m = this.kq, this.a.b.M = !0)
    },
    RR: function(a) {
        var b;
        for (b = 0; b < this.Ka.nm; b++)
            if (null != this.Ka.Za[b].ve && n.xb(a, this.Ka.Za[b].ve)) {
                0 == this.md ? (this.Sk(b), this.a.fm = this.a.c.Ya, this.a.em = this.Ka.Za[b].ve, this.a.ur = 0, this.df()) : 0 < b && (b--, this.mm(b), this.a.fm = this.a.c.Ya, this.a.em = this.Ka.Za[b].ve, this.a.ur = 0, this.df());
                this.a.A.U = !0;
                break
            }
    },
    SR: function(a) {
        var b;
        for (b = 0; b < this.Ka.nm; b++)
            if (null != this.Ka.Za[b].ve && n.xb(a, this.Ka.Za[b].ve)) {
                if (b == this.ke && 0 == this.qh) break;
                this.Ml = a;
                if (0 == this.md)
                    if (b > this.ke) {
                        if (0 != this.Gc) break;
                        0 != (this.Pb & 32768) ? this.start() : this.Sk(this.ke)
                    } else {
                        if (0 != this.Gc) {
                            this.reverse();
                            break
                        }
                        0 != (this.Pb & 32768) ? (this.start(), this.reverse()) : this.mm(MT_MoveNumber - 1)
                    }
                else if (b <= this.ke) {
                    if (0 != this.Gc) break;
                    0 != (this.Pb & 32768) ? this.start() : this.mm(this.ke - 1)
                } else {
                    if (0 != this.Gc) {
                        this.reverse();
                        break
                    }
                    0 != (this.Pb & 32768) ? (this.start(), this.reverse()) :
                        this.Sk(this.ke)
                }
                break
            }
    },
    stop: function() {
        0 == this.Pb && (this.Pb = this.Gc | 32768);
        this.Gc = 0;
        this.a.A.U = !0
    },
    start: function() {
        0 != (this.Pb & 32768) && (this.Gc = this.Pb & 32767, this.Pb = this.rh = 0, this.a.A.U = !0)
    },
    reverse: function() {
        if (0 == this.Pb) {
            this.a.A.U = !0;
            var a = this.ke;
            if (0 == this.qh)(this.md = !this.md) ? 0 == a ? this.md = !this.md : (a--, this.mm(a)) : this.Sk(a);
            else {
                this.md = !this.md;
                this.rn = -this.rn;
                this.sn = -this.sn;
                var a = this.sh,
                    b = this.ck;
                this.sh = b;
                this.ck = a;
                a = this.th;
                this.th = b = this.dk;
                this.dk = a;
                this.a.b.Sa += 16;
                this.a.b.Sa &=
                    31;
                a = this.qh >>> 16;
                a = this.iq - a;
                this.qh = a << 16 | this.qh & 65535
            }
        }
    },
    Qb: function(a) {
        var b = this.a.o;
        this.a.o = a;
        b -= this.sh;
        a -= b;
        this.ck = b = this.ck - this.sh + a;
        b = this.sh;
        this.sh = a;
        this.jq -= b - a;
        this.a.A.U = !0;
        this.a.b.M = !0;
        this.a.b.Ra = !0
    },
    Rb: function(a) {
        var b = this.a.m;
        this.a.m = a;
        b -= this.th;
        a -= b;
        this.dk = b = this.dk - this.th + a;
        b = this.th;
        this.th = a;
        this.kq -= b - a;
        this.a.A.U = !0;
        this.a.b.M = !0;
        this.a.b.Ra = !0
    },
    Be: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.Gc = a;
        this.a.b.$ = a;
        this.a.A.U = !0
    },
    Vf: function(a) {
        this.Be(a)
    },
    Ae: function() {}
});
N.QO = 0;
N.NG = 1;
N.OO = 2;
N.PO = 3;
N.oh = 0;
N.Il = 1;
N.gq = 2;
N.fq = 3;
N.My = 4;
N.Ny = 5;
N.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.s = this.a.c;
        this.a.tg = 0;
        this.Rd = this.a.ug = 0;
        this.a.b.$ = 0;
        this.a.b.hi = b.om;
        this.jp = b.pC;
        this.Sg = this.Dk(this.jp);
        this.kp = b.qC;
        this.ye = this.Dk(this.kp);
        this.a.b.eb = b.uC;
        this.a.b.gi = 0;
        this.Zt = b.rC;
        this.Oy = b.sC;
        var c = b.tC;
        3 < c && (c = N.NG);
        this.Py = c;
        this.Jl = this.Ad = 0;
        this.Kl = null;
        this.Ao(b);
        this.a.b.M = !0;
        this.qb = N.oh
    },
    move: function() {
        var a, b;
        this.a.c.ql = 1;
        a = this.a.c.Rc[this.a.b.hi -
            1];
        this.Gu();
        b = this.Rd;
        var c;
        0 == this.Jl && (0 >= b && (0 != (a & 4) ? (c = this.Sg, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), b -= c, b / 256 < -this.a.b.eb && (b = 256 * -this.a.b.eb)) : 0 > b && (c = this.ye, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.Sg, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), b += c, b / 256 > this.a.b.eb && (b = 256 * this.a.b.eb)) : 0 < b && (c = this.ye, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.Rd = b);
        var d = this.Ad;
        for (c = !1;;) {
            switch (this.qb) {
                case 2:
                case 3:
                    c =
                        this.Zt << 5;
                    0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc);
                    d += c;
                    64E3 < d && (d = 64E3);
                    break;
                case 0:
                    if (0 != (a & 1)) {
                        if (this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf - 4) == h.uf) break;
                        this.qb = N.Il;
                        c = !0;
                        continue
                    }
                    if (0 != (a & 2) && this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf + 4) != h.uf) {
                        this.qb = N.Il;
                        c = !0;
                        continue
                    }
                    break;
                case 1:
                    if (0 == c && (this.Jl = 0, this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) == h.uf && this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf - 4) == h.uf)) break;
                    0 >= d && (0 != (a & 1) ? (c = this.Sg, 0 != (this.a.c.C.Wb &
                        E.Vc) && (c *= this.a.c.Cc), d -= c, c = d / 256, c < -this.a.b.eb && (d = 256 * -this.a.b.eb)) : (c = this.ye, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
                    0 <= d && (0 != (a & 2) ? (c = this.Sg, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), d += c, c = d / 256, c > this.a.b.eb && (d = 256 * this.a.b.eb)) : (c = this.ye, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
            }
            break
        }
        this.Ad = d;
        var e = 0;
        0 > b && (e = 16);
        c = b;
        var f = d;
        if (0 != f) {
            var g = 0;
            0 > c && (g |= 1, c = -c);
            0 > f && (g |= 2, f = -f);
            c = (c << 8) / f;
            for (e = 0; !(c >= D.Cl[e]); e +=
                2);
            e = D.Cl[e + 1];
            0 != (g & 2) && (e = -e + 32 & 31);
            0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
        }
        c = b;
        g = D.Yj[e];
        f = D.ik[e];
        0 > g && (g = -g);
        0 > f && (f = -f);
        g < f && (g = f, c = d);
        0 > c && (c = -c);
        c /= g;
        250 < c && (c = 250);
        this.a.b.$ = c;
        switch (this.qb) {
            case 1:
                0 > d ? this.a.b.Sa = 8 : 0 < d && (this.a.b.Sa = 24);
                break;
            case 3:
                this.a.b.Sa = e;
                break;
            default:
                0 > b ? this.a.b.Sa = 16 : 0 < b && (this.a.b.Sa = 0)
        }
        switch (this.qb) {
            case 4:
                this.a.b.fe = u.qt;
                break;
            case 5:
                this.a.b.fe = u.Ip;
                break;
            case 3:
                this.a.b.fe = u.dy;
                break;
            case 2:
                this.a.b.fe = u.ey;
                break;
            case 1:
                this.a.b.fe = u.cy;
                break;
            default:
                this.a.b.fe =
                    u.qc
        }
        null != this.a.ha && this.a.ha.De();
        this.Gu();
        this.lj(this.a.b.$, e);
        this.qb != N.oh && this.qb != N.Il || 0 != this.ak || (b = !1, d = this.Py, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.Ad = -this.Oy << 8, this.qb = N.gq));
        switch (this.qb) {
            case 2:
                0 <= this.Ad && (this.qb = N.fq);
                break;
            case 3:
                this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) != h.uf && (this.Ad = 0, this.qb = N.Il, this.a.b.Sa = 8);
                break;
            case 0:
                if (0 != (a & 3) && 0 == (a & 12) && this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) != h.uf) {
                    this.qb =
                        N.Il;
                    this.Rd = 0;
                    break
                }
                0 != (a & 2) && null != this.a.ha && this.a.ha.Bh(u.qt) && (this.Rd = 0, this.qb = N.My);
                if (this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) != h.uf) break;
                0 == this.dn(this.a.o, this.a.m + 10, this.Fi, E.ie, !0) ? (a = this.a.o - this.a.c.ca, b = this.a.m - this.a.c.ga, d = new ta, this.lm(a, b + this.Fi - 1, a, b, this.Fi, E.ie, d), this.a.o = d.x + this.a.c.ca, this.a.m = d.y + this.a.c.ga, this.ak = !1) : this.qb = N.fq;
                break;
            case 1:
                if (this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) == h.uf) {
                    if (0 > this.Ad)
                        for (f = 0; 32 > f; f++)
                            if (this.s.jg(this.a.be,
                                    this.a.o + this.vf, this.a.m + this.wf + f) != h.uf) {
                                this.a.m += f;
                                break
                            } this.Ad = 0
                }
                0 != (a & 12) && (this.qb = N.oh, this.Ad = 0);
                break;
            case 4:
                0 == (a & 2) && (null != hoPtr.ha && this.a.ha.Bh(u.Ip) ? (this.qb = N.Ny, this.a.b.fe = u.Ip, this.a.ha.De(), this.a.ha.dl = 1) : this.qb = N.oh);
                break;
            case 5:
                null != this.a.ha && 0 == this.a.ha.kf && (this.qb = N.oh)
        }
        if (this.qb == N.oh || this.qb == N.My || this.qb == N.Ny) {
            do {
                a = null;
                null != this.a.Kb && (a = this.a.Kb.sj);
                if (null == this.a.c.tm(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, this.a.o, this.a.m, a) && (a = this.a.c.tm(this.a,
                        this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, this.a.o, this.a.m + 1, a), null != a && 1 == a.size())) {
                    a = a.get(0);
                    if ((null == this.Kl || this.Kl != a) && this.a.bf != a.bf) {
                        this.Kl = a;
                        this.$t = a.o;
                        this.au = a.m;
                        break
                    }
                    b = a.o - this.$t;
                    d = a.m - this.au;
                    this.$t = a.o;
                    this.au = a.m;
                    this.a.o += b;
                    this.a.m += d;
                    this.a.c.Le(this.a);
                    this.a.b.M = !0;
                    break
                }
                this.Kl = null
            } while (0)
        } else this.Kl = null
    },
    uw: function() {
        this.Ad = this.Rd = this.a.b.$ = 0
    },
    Te: function() {
        this.stop()
    },
    stop: function() {
        if (this.Pe != this.a.c.fd) this.uw();
        else {
            this.a.A.U = !0;
            var a = this.a.o -
                this.a.c.ca,
                b = this.a.m - this.a.c.ga,
                c;
            switch (this.a.c.i.Os & 4294901760) {
                case -786432:
                    a = this.a.o - this.a.ia;
                    b = this.a.m - this.a.ja;
                    c = this.a.c.bl(a, b, a + this.a.K, b + this.a.J);
                    a = this.a.o;
                    b = this.a.m;
                    0 != (c & h.hh) && (a = this.a.ia, this.Rd = 0, this.ak = !0);
                    0 != (c & h.ih) && (a = this.a.c.Od - this.a.K + this.a.ia, this.Rd = 0, this.ak = !0);
                    0 != (c & h.jh) && (b = this.a.ja, this.Ad = 0, this.ak = !1);
                    0 != (c & h.gh) && (b = this.a.c.Pd - this.a.J + this.a.ja, this.Ad = 0, this.ak = !1);
                    this.a.o = a;
                    this.a.m = b;
                    this.qb = this.qb == N.gq ? N.fq : N.oh;
                    this.Jl = 0;
                    break;
                case -851968:
                case -917504:
                    if (this.ak = !1, c = new ta, this.qb == N.fq) this.lm(a, b, this.a.b.Aj - this.a.c.ca, this.a.b.Bj - this.a.c.ga, this.Fi, E.ie, c), this.a.o = c.x + this.a.c.ca, this.a.m = c.y + this.a.c.ga, this.qb = N.oh, this.a.b.M = !0, this.dn(this.a.o, this.a.m + 1, 0, E.ie, !0) ? this.Rd = this.a.b.$ = 0 : (this.Jl = 0, this.a.b.$ = Math.abs(this.Rd / 256), this.Ad = 0);
                    else {
                        if (this.qb == N.oh) {
                            if (this.lm(a, b, a, b - this.Fi, 0, E.ie, c)) {
                                this.a.o = c.x + this.a.c.ca;
                                this.a.m = c.y + this.a.c.ga;
                                this.a.b.M = !0;
                                break
                            }
                            if (this.lm(a, b, this.a.b.Aj - this.a.c.ca, this.a.b.Bj - this.a.c.ga, 0, E.ie, c)) {
                                this.a.o =
                                    c.x + this.a.c.ca;
                                this.a.m = c.y + this.a.c.ga;
                                this.a.b.M = !0;
                                this.uw();
                                break
                            }
                        }
                        if (this.qb == N.gq) {
                            if (this.lm(a, b, a, b - this.Fi, 0, E.ie, c)) {
                                this.a.o = c.x + this.a.c.ca;
                                this.a.m = c.y + this.a.c.ga;
                                this.a.b.M = !0;
                                break
                            }
                            this.Jl = 1;
                            this.Rd = 0
                        }
                        this.qb == N.Il && this.lm(a, b, this.a.b.Aj - this.a.c.ca, this.a.b.Bj - this.a.c.ga, 0, E.ie, c) ? (this.a.o = c.x + this.a.c.ca, this.a.m = c.y + this.a.c.ga, this.a.b.M = !0, this.uw()) : (this.a.b.Ga = this.a.b.zs, this.a.b.Ua = this.a.b.ys, this.dn(this.a.o, this.a.m, 0, E.ie, !0) || (this.a.o = this.a.b.Aj, this.a.m = this.a.b.Bj,
                            this.a.b.M = !0))
                    }
            }
        }
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Be: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.eb && (a = this.a.b.eb);
        this.a.b.$ = a;
        this.Rd = this.a.b.$ * D.Yj[this.a.c.Jb(this.a)];
        this.Ad = this.a.b.$ * D.ik[this.a.c.Jb(this.a)];
        this.a.A.U = !0
    },
    Vf: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.eb = a;
        a <<= 8;
        this.Rd > a && (this.Rd = a);
        this.a.A.U = !0
    },
    rp: function(a) {
        this.Zt =
            a
    },
    Ae: function(a) {
        this.a.b.Sa = a;
        this.Rd = this.a.b.$ * D.Yj[a];
        this.Ad = this.a.b.$ * D.ik[a]
    },
    Gu: function() {
        var a;
        0 < this.a.b.Ga ? a = this.a.c.h.ba.Fk(this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb) : (a = new ha, a.width = this.a.K, a.height = this.a.J, a.Ja = this.a.ia, a.Ha = this.a.ja);
        this.vf = 0;
        this.wf = a.height - a.Ha;
        this.Fi = 2 * a.height + a.height >>> 3
    },
    MK: function() {
        this.Gu();
        this.s.jg(this.a.be, this.a.o + this.vf, this.a.m + this.wf) == h.uf && (0 == this.a.c.rk(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, this.a.o, this.a.m,
            0, E.hn) && (this.qb == N.gq && 0 > this.Ad || 0 == this.a.c.rk(this.a, this.a.b.Ga, this.a.b.Ua, this.a.b.mb, this.a.b.nb, this.a.o, this.a.m, this.Fi, E.ie)) || this.a.c.i.qd(this.a, -851968 | this.a.xa & 65535))
    }
});
Ya.sH = [4294967288, 4294967292, 4294967294, 4294967295];
Ya.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        this.Bd = 0;
        this.ph = this.a.b.$ = 0;
        this.Qy = -1;
        this.a.b.hi = b.om;
        this.jp = b.vw;
        this.Sg = this.Dk(b.vw);
        this.kp = b.ww;
        this.ye = this.Dk(b.ww);
        this.a.b.eb = b.yC;
        this.a.b.gi = 0;
        this.Ry = b.wC;
        this.a.A.Lj = 0;
        this.Kj = b.Wr;
        this.bu =
            0;
        this.cu = Ya.sH[b.vC];
        this.du = b.xC;
        this.Ll = 0;
        this.bk = this.a.c.Jb(this.a);
        this.a.tg = 0;
        this.a.ug = 0;
        this.Ao(b);
        this.a.b.M = !0
    },
    move: function() {
        var a, b, c;
        this.a.c.ql = 1;
        if (0 == this.ph) {
            this.a.A.Jj = !1;
            a = this.a.c.Rc[this.a.b.hi - 1] & 15;
            b = 0;
            0 != (a & 8) && (b = -1);
            0 != (a & 4) && (b = 1);
            if (0 != b) {
                c = this.du;
                0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc);
                for (this.Ll += c; 100 < this.Ll;) this.Ll -= 100, this.bk += b, this.bk &= 31, this.a.b.Sa = this.bk & this.cu;
                this.a.b.M = !0
            }
            c = 0;
            0 != this.a.A.Lj ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 !=
                (a & 2) && (c = 1));
            for (b = this.Bd;;) {
                if (0 != (c & 1)) {
                    if (0 == this.Bd) {
                        if (0 == this.Ry) break;
                        if (0 != (this.bu & 3)) break;
                        this.a.A.Lj ^= 1;
                        c = this.Sg;
                        0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc);
                        b += c;
                        c = b >> 8;
                        c > this.a.b.eb && (this.Bd = b = this.a.b.eb << 8);
                        this.Bd = b;
                        break
                    }
                    c = this.ye;
                    0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc);
                    b -= c;
                    0 > b && (b = 0);
                    this.Bd = b
                } else 0 != (c & 2) && (c = this.Sg, 0 != (this.a.c.C.Wb & E.Vc) && (c *= this.a.c.Cc), b += c, c = b >> 8, c > this.a.b.eb && (this.Bd = b = this.a.b.eb << 8), this.Bd = b);
                break
            }
            this.bu = a;
            this.a.b.$ = this.Bd >> 8;
            this.a.b.fe =
                u.qc;
            null != this.a.ha && this.a.ha.De();
            a = this.a.c.Jb(this.a);
            0 != this.a.A.Lj && (a = a + 16 & 31);
            if (0 == this.lj(this.a.b.$, a)) return
        }
        do {
            if (0 == this.ph) break;
            if (0 == this.a.c.ql) break;
            b = this.Bd;
            b -= this.ye;
            if (0 >= b) {
                this.ph = this.Bd = 0;
                break
            }
            this.Bd = b;
            b >>= 8;
            a = this.a.c.Jb(this.a);
            0 != this.ph && (a += 16, a &= 31);
            if (0 == this.lj(b, a)) break
        } while (1)
    },
    reverse: function() {},
    stop: function() {
        this.Bd = this.ph = 0;
        this.a.A.Lj = 0;
        this.Pe == this.a.c.fd && (this.Bo(0 != (this.Kj & D.tn)), this.a.A.U = !0)
    },
    start: function() {
        this.Pb = 0;
        this.a.A.U = !0
    },
    Te: function() {
        this.Pe ==
            this.a.c.fd && this.Bo(0 != (this.Kj & D.tn));
        this.a.c.Ya != this.Qy && (this.ph = this.a.A.Lj, this.a.A.Lj = 0, this.ph++, 16 <= this.ph ? this.stop() : (this.a.A.U = !0, this.a.A.Jj = !0))
    },
    Be: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.eb && (a = this.a.b.eb);
        this.Bd = a << 8;
        this.a.A.U = !0
    },
    Vf: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.eb = a;
        a <<= 8;
        this.Bd > a && (this.Bd = a);
        this.a.A.U = !0
    },
    sp: function(a) {
        this.du = a
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Rb: function(a) {
        this.a.m != a &&
            (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Ra = !0)
    },
    Ae: function(a) {
        this.bk = a;
        this.a.b.Sa = a & this.cu
    }
});
Za.prototype = n.extend(new D, {
    Y: function(a) {
        this.a = a;
        this.a.b.$ = 0;
        this.a.b.Ra = !0;
        this.a.b.M = !0
    },
    move: function() {
        null != this.a.ha && this.a.ha.De();
        this.a.b.Ra && (this.a.b.Ra = !1, this.a.c.Le(this.a))
    },
    Qb: function(a) {
        this.a.o != a && (this.a.o = a, this.a.A.U = !0, this.a.b.M = !0);
        this.a.b.Ra = !0
    },
    Rb: function(a) {
        this.a.m != a && (this.a.m = a, this.a.A.U = !0, this.a.b.M = !0);
        this.a.b.Ra = !0
    },
    Ae: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    Te: function() {},
    Be: function() {},
    Vf: function() {}
});
se.prototype = n.extend(new D, {
    Y: function(a, b) {
        this.a = a;
        var c = a.c.h.file.kg(b.data);
        this.Yc.Hv(c);
        this.a.b.Ra = !0;
        this.a.b.M = !0
    },
    Fb: function() {
        this.Yc.Fb()
    },
    move: function() {
        this.Yc.move() && (this.a.b.M = !0)
    },
    stop: function() {
        this.Yc.stop(this.Pe == this.a.c.fd)
    },
    start: function() {
        this.Yc.start()
    },
    Te: function() {
        this.Yc.Te(this.Pe == this.a.c.fd)
    },
    Be: function(a) {
        this.Yc.Be(a)
    },
    Vf: function(a) {
        this.Yc.Vf(a)
    },
    reverse: function() {
        this.Yc.reverse()
    },
    Qb: function(a) {
        this.Yc.Qb(a);
        this.a.b.M = !0;
        this.a.b.Ra = !0
    },
    Rb: function(a) {
        this.Yc.Rb(a);
        this.a.b.M = !0;
        this.a.b.Ra = !0
    },
    Ae: function(a) {
        this.Yc.Ae(a);
        this.a.b.M = !0;
        this.a.b.Ra = !0
    },
    Iz: function(a, b) {
        this.oe = b;
        return this.Yc.ou(a)
    }
});
te.prototype = {
    Y: function(a) {
        this.j = a;
        this.R = this.j.c
    },
    Hv: function() {},
    Fb: function() {},
    move: function() {
        return !1
    },
    setPosition: function() {},
    Qb: function() {},
    Rb: function() {},
    stop: function() {},
    Te: function() {},
    reverse: function() {},
    start: function() {},
    Be: function() {},
    Vf: function() {},
    Ae: function() {},
    sp: function() {},
    rp: function() {},
    ou: function() {
        return 0
    },
    kr: function() {
        return 0
    },
    gB: function() {
        return 0
    },
    hB: function() {
        return 0
    },
    Jb: function() {
        return this.j.b.Sa
    },
    Jn: function(a) {
        return this.j.A.Jn(this.j, a, 32)
    },
    Ni: function(a) {
        this.j.b.fe = a;
        null != this.j.ha && this.j.ha.De()
    },
    Ou: function() {
        this.j.c.fd++;
        this.j.A.V.Pe = this.j.c.fd;
        this.j.c.Le(this.j)
    },
    bo: function(a) {
        return this.j.c.Rc[a]
    }
};
Ga.xF = 1;
Ga.yF = 2;
Ga.TN = 4;
Ga.prototype = {
    Y: function(a, b, c, d, e) {
        null != this.V && this.V.Fb();
        null != d && (b.b.Sa =
            d.Tz);
        this.Jx = b.Kb.Pw;
        b.b.Oc = -1;
        if (null != c.hf && a < c.hf.rm) {
            c = c.hf.Jd[a];
            this.Ix = a; - 1 == e && (e = c.yw);
            b.b.Oc = e;
            switch (e) {
                case 0:
                    this.V = new Za;
                    break;
                case 1:
                    this.V = new qe;
                    break;
                case 2:
                    this.V = new Ya;
                    break;
                case 3:
                    this.V = new pe;
                    break;
                case 4:
                    this.V = new va;
                    break;
                case 5:
                    this.V = new re;
                    break;
                case 9:
                    this.V = new N;
                    break;
                case 14:
                    this.V = this.BK(b, c), null == this.V && (this.V = new Za)
            }
            b.b.Sa = this.Jn(b, c.GC, b.b.Sa);
            this.V.Y(b, c)
        } - 1 == b.b.Oc && (b.b.Oc = 0, this.V = new Za, this.V.Y(b, null), b.b.Sa = 0)
    },
    BK: function(a, b) {
        var c = null;
        "clickteam-dragdrop" ==
        b.Mc && (c = new J);
        return null != c ? (c.Y(a), new se(c)) : null
    },
    VJ: function(a, b, c) {
        null != this.V && this.V.Fb();
        a.b.Oc = b;
        switch (b) {
            case 11:
                this.V = new oe;
                break;
            case 13:
                this.V = new ne
        }
        this.V.a = a;
        0 == c && this.V.Y(a, null)
    },
    Fb: function() {
        this.V.Fb()
    },
    move: function() {
        this.V.move()
    },
    TL: function(a, b) {
        var c = a.O;
        null != c.hf && 0 <= b && b < c.hf.rm && this.Y(b, a, c, null, -1)
    },
    Jn: function(a, b, c) {
        if (0 > c || 32 <= c) {
            var d = 0,
                e = b,
                f;
            for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
            if (0 == d) c = 0;
            else
                for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--,
                        0 > d)); c++);
        }
        return c
    }
};
La.DO = 2;
La.EO = 4;
La.qG = 8;
La.prototype = n.extend(new Fa, {
    co: function() {
        return 0
    },
    Uu: function(a) {
        this.EB = a.v();
        this.vc = n.ZC(a.ub());
        0 == this.vc.length && (this.vc = "Ini.ini");
        a = 0;
        this.EB & La.qG && (a |= na.Ey);
        this.Kc = new na(this.R.h, a);
        this.Je = "Group";
        this.gm = "Item";
        this.pe = 0;
        return !1
    },
    zv: function() {
        0 < this.pe && (this.pe--, 0 == this.pe && this.Kc.op());
        return 0
    },
    Xu: function() {
        this.Kc.op()
    },
    action: function(a, b) {
        switch (a) {
            case 0:
                this.IH(b);
                break;
            case 1:
                this.JH(b);
                break;
            case 2:
                this.NH(b);
                break;
            case 3:
                this.GH(b);
                break;
            case 4:
                this.JG(b);
                break;
            case 5:
                this.KH(b);
                break;
            case 6:
                this.HH(b);
                break;
            case 7:
                this.PH(b);
                break;
            case 8:
                this.OH(b);
                break;
            case 9:
                this.MH(b);
                break;
            case 10:
                this.LH(b);
                break;
            case 11:
                this.wF(b);
                break;
            case 12:
                this.vF(b);
                break;
            case 13:
                this.uF(b)
        }
    },
    IH: function(a) {
        this.Je = a.Jc(this.R, 0)
    },
    JH: function(a) {
        this.gm = a.Jc(this.R, 0)
    },
    NH: function(a) {
        a = a.$e(this.R, 0).toString();
        this.Kc.zl(this.Je, this.gm, a, this.vc);
        this.pe = 10
    },
    GH: function(a) {
        a = a.rv(this.R, 0);
        this.Kc.zl(this.Je, "pos." + a.Kb.uj,
            a.o.toString() + "," + a.m.toString(), this.vc);
        this.pe = 10
    },
    JG: function(a) {
        a = a.rv(this.R, 0);
        var b = this.Kc.Hk(this.Je, "pos." + a.Kb.uj, "X", this.vc);
        if ("X" != b) {
            var c = b.indexOf(","),
                d = b.substring(c + 1);
            a.o = parseInt(b.substring(0, c), 10);
            isNaN(a.o) && (a.o = 0);
            a.m = parseInt(d, 10);
            isNaN(a.m) && (a.m = 0);
            a.b.M = !0;
            a.b.Ra = !0
        }
    },
    KH: function(a) {
        a = a.Jc(this.R, 0);
        this.Kc.zl(this.Je, this.gm, a, this.vc);
        this.pe = 10
    },
    HH: function(a) {
        this.vc = n.ZC(a.Jc(this.R, 0))
    },
    PH: function(a) {
        var b = a.Jc(this.R, 0);
        a = a.$e(this.R, 1).toString();
        this.Kc.zl(this.Je,
            b, a, this.vc);
        this.pe = 10
    },
    OH: function(a) {
        var b = a.Jc(this.R, 0),
            c = a.Jc(this.R, 1);
        a = a.$e(this.R, 2).toString();
        this.Kc.zl(b, c, a, this.vc);
        this.pe = 10
    },
    MH: function(a) {
        var b = a.Jc(this.R, 0);
        a = a.Jc(this.R, 1);
        this.Kc.zl(this.Je, b, a, this.vc);
        this.pe = 10
    },
    LH: function(a) {
        var b = a.Jc(this.R, 0),
            c = a.Jc(this.R, 1);
        a = a.Jc(this.R, 2);
        this.Kc.zl(b, c, a, this.vc);
        this.pe = 10
    },
    wF: function(a) {
        this.Kc.pA(this.Je, a.Jc(this.R, 0), this.vc);
        this.pe = 10
    },
    vF: function(a) {
        this.Kc.pA(a.Jc(this.R, 0), a.Jc(this.R, 1), this.vc);
        this.pe = 10
    },
    uF: function(a) {
        this.Kc.TI(a.Jc(this.R,
            0), this.vc);
        this.pe = 10
    },
    Sn: function(a) {
        switch (a) {
            case 0:
                return this.jG();
            case 1:
                return this.gG();
            case 2:
                return this.lG();
            case 3:
                return this.kG();
            case 4:
                return this.iG();
            case 5:
                return this.hG()
        }
        return null
    },
    jG: function() {
        var a = this.Kc.Hk(this.Je, this.gm, "", this.vc),
            a = parseInt(a, 10);
        isNaN(a) && (a = 0);
        return a
    },
    gG: function() {
        return this.Kc.Hk(this.Je, this.gm, "", this.vc)
    },
    lG: function() {
        var a = this.j.Ek(),
            a = this.Kc.Hk(this.Je, a, "", this.vc),
            a = parseInt(a, 10);
        isNaN(a) && (a = 0);
        return a
    },
    kG: function() {
        var a = this.j.Ek(),
            b = this.j.Ek(),
            a = this.Kc.Hk(a, b, "", this.vc),
            a = parseInt(a, 10);
        isNaN(a) && (a = 0);
        return a
    },
    iG: function() {
        var a = this.j.Ek();
        return this.Kc.Hk(this.Je, a, "", this.vc)
    },
    hG: function() {
        var a = this.j.Ek(),
            b = this.j.Ek();
        return this.Kc.Hk(a, b, "", this.vc)
    }
});
H.ky = 0;
H.Bl = 1;
H.yi = 2;
H.kh = 3;
H.Xj = 4;
H.FE = 0;
H.DE = 1;
H.EE = 2;
H.GE = 3;
H.NE = 1;
H.ME = 2;
H.PE = 4;
H.QE = 8;
H.OE = 16;
H.prototype = n.extend(new jb, {
    update: function(a) {
        void 0 === a && (a = this.element);
        switch (this.button.type) {
            case H.Bl:
                a = this.button.Dn;
            case H.ky:
                for (; a.firstChild;) a.removeChild(a.firstChild);
                a.appendChild(document.createTextNode(this.button.ka[0]));
                break;
            case H.yi:
                var b = 0,
                    c = this;
                this.Ve(function() {
                    for (; this.firstChild;) this.removeChild(this.firstChild);
                    this.appendChild(document.createTextNode(c.button.ka[b++]))
                }, a, "label");
                break;
            case H.Xj:
            case H.kh:
                var d = !1;
                this.Ve(function() {
                    this.disabled && (d = !0)
                }, a);
                var e = this.R.h.ba.sb(this.button.images[d ? 2 : this.button.Gz ? 1 : 0]);
                for (null == e && (e = this.R.h.ba.sb(this.button.images[0])); a.firstChild;) a.removeChild(a.firstChild);
                e = e.createElement();
                e.style.display =
                    "inline-block";
                if (this.button.type == H.Xj) switch (a.appendChild(document.createTextNode(this.button.ka[0])), this.button.bI) {
                    case H.FE:
                        a.insertBefore(e, a.firstChild);
                        break;
                    case H.GE:
                        a.appendChild(e);
                        break;
                    case H.DE:
                        a.insertBefore(document.createElement("br"), a.firstChild);
                        a.insertBefore(e, a.firstChild);
                        break;
                    case H.EE:
                        a.appendChild(document.createElement("br")), a.appendChild(e)
                } else a.appendChild(e)
        }
    },
    qE: function(a) {
        if (!(this.button.Ca & H.OE) && this.button.type != H.kh) {
            void 0 === a && (a = this.element);
            a.style.backgroundColor =
                this.button.Ca & H.QE ? "transparent" : n.Ge(this.button.background);
            var b = this;
            this.Ve(function() {
                this.style.color = n.Ge(b.button.gr)
            }, a, "label")
        }
    },
    Ve: function(a, b, c) {
        void 0 === b && (b = this.element);
        void 0 === c && (c = "input");
        switch (this.button.type) {
            case H.ky:
            case H.kh:
            case H.Xj:
                a.call(b);
                break;
            case H.Bl:
                a.call("label" == c ? this.button.Dn : this.button.Fh);
                break;
            case H.yi:
                for (var d = 0, e;;) {
                    for (;
                        (e = b.childNodes[d]).tagName.toLowerCase() != c && !(++d >= b.childNodes.length););
                    if (!1 === a.call(e)) break;
                    if (++d >= b.childNodes.length) break
                }
        }
    },
    co: function() {
        return 6
    },
    Uu: function(a) {
        this.j.K = a.v();
        this.j.J = a.v();
        var b = this.button;
        b.type = a.v();
        b.ox = a.v();
        b.Ca = a.w();
        var c = a.ux();
        b.gr = a.Pc();
        b.background = a.Pc();
        b.images = Array(3);
        for (var d = 0; 3 > d; ++d) b.images[d] = a.v();
        b.type != H.kh && b.type != H.Xj || this.j.bw(b.images);
        if (b.type == H.kh)
            for (this.j.K = 1, this.j.J = 1, d = 0; 3 > d; ++d) {
                var e = this.j.c.h.ba.sb(b.images[d]);
                e && (this.j.K = Math.max(this.j.K, e.width), this.j.J = Math.max(this.j.J, e.height))
            }
        a.v();
        a.w();
        b.bI = a.v();
        if (b.type == H.yi) {
            b.yp = "";
            var e = document.createElement("div"),
                f = "mmf-radio-group-" + this.j.Jk;
            b.ka = Array(b.ox);
            for (d = 0; d < b.ox; ++d) {
                b.ka[d] = a.ub();
                var g = document.createElement("input"),
                    h = document.createElement("label");
                g.setAttribute("name", f);
                g.type = "radio";
                g.id = "mmf-radio-" + this.j.Jk + "-" + d;
                h.setAttribute("for", g.id);
                h.style.position = "relative";
                h.style.top = "-2px";
                h.style.display = "inline-block";
                h.style.height = (1 / b.ox * 100).toString() + "%";
                0 < d && e.appendChild(document.createElement("br"));
                e.appendChild(g);
                e.appendChild(h)
            }
        } else switch (b.ka = [a.ub()], b.yp = a.ub(), b.type) {
            case H.Bl:
                e =
                    document.createElement("div");
                b.Fh = document.createElement("input");
                b.Fh.type = "checkbox";
                b.Fh.id = "mmf-checkbox-" + this.j.Jk;
                b.Dn = document.createElement("label");
                b.Dn.setAttribute("for", b.Fh.id);
                b.Ca & H.PE ? (e.appendChild(b.Dn), e.appendChild(b.Fh)) : (e.appendChild(b.Fh), e.appendChild(b.Dn));
                break;
            case H.kh:
                e = document.createElement("div");
                break;
            default:
                e = document.createElement("button")
        }
        e.title = b.yp;
        b.Ca & H.ME && this.Ve(function() {
            this.disabled = !0
        }, e);
        this.update(e);
        this.qE(e);
        this.Vg(c, e);
        this.VL(e, 0 == (b.Ca &
            H.NE));
        var l = this;
        b.type == H.kh || b.type == H.Xj ? (e.onmousedown = function() {
            l.R.h.Un(!0);
            l.button.Gz = !0;
            l.update()
        }, e.onmouseup = function() {
            l.R.h.Un(!1);
            l.button.Gz = !1;
            l.update();
            l.button.Nu = l.j.c.Sm;
            l.j.fB(1, 0)
        }) : (e.onclick = function() {
            l.R.h.cv();
            l.button.Nu = l.j.c.Sm;
            l.j.fB(1, 0)
        }, e.onmousedown = function() {
            l.R.h.Un(!0)
        }, e.onmouseup = function() {
            l.R.h.Un(!1)
        })
    },
    Fn: function(a, b) {
        switch (a) {
            case 0:
                return this.button.type == H.Bl && this.button.Fh.checked;
            case 1:
                return 0 != (this.j.X & G.Mt) || this.j.c.Sm == this.button.Nu;
            case 2:
                return this.button.type == H.Bl && !this.button.Fh.checked;
            case 3:
                return this.button.visible;
            case 4:
                return this.button.enabled;
            case 5:
                if (this.button.type != H.yi || 0 > c || c >= this.button.ka.length) return !1;
                var c = b.$e(this.R, 0),
                    d = 0,
                    e;
                this.Ve(function() {
                    if (d == c) return e = this, !1;
                    ++d
                });
                return !e.disabled
        }
    },
    action: function(a, b) {
        switch (a) {
            case 0:
                this.button.ka[0] = b.Jc(this.R, 0);
                this.update();
                break;
            case 1:
                this.j.pa = !0;
                this.element.style.visibility = "visible";
                break;
            case 2:
                this.j.pa = !1;
                this.element.style.visibility =
                    "hidden";
                break;
            case 3:
                this.Ve(function() {
                    this.disabled = !1
                });
                this.button.type != H.kh && this.button.type != H.Xj || this.update();
                break;
            case 4:
                this.Ve(function() {
                    this.disabled = !0
                });
                this.button.type != H.kh && this.button.type != H.Xj || this.update();
                break;
            case 5:
                var c = b.qB(this.R, 0);
                c.YA && this.setPosition(c.x, c.y);
                break;
            case 6:
                this.Ys(b.$e(this.R, 0));
                break;
            case 7:
                this.Us(b.$e(this.R, 0));
                break;
            case 8:
                if (this.button.type != H.yi) break;
                var d = b.$e(this.R, 0),
                    c = b.Jc(this.R, 1);
                if (0 > d && d >= this.button.ka.length) break;
                this.button.ka[d] =
                    c;
                this.update();
                break;
            case 9:
            case 10:
                if (this.button.type != H.yi) break;
                d = b.$e(this.R, 0);
                if (0 > d && d >= this.button.ka.length) break;
                this.Ve(function() {
                    if (e == d) return this.disabled = 10 == a, !1;
                    ++e
                });
                break;
            case 11:
                if (this.button.type != H.yi) break;
                d = b.$e(this.R, 0);
                if (0 > d && d >= this.button.ka.length) break;
                var e = 0;
                this.Ve(function() {
                    if (e == d) return this.checked = !0, !1;
                    ++e
                });
                break;
            case 12:
                this.Lx(b.$e(this.R, 0));
                break;
            case 13:
                this.Mx(b.$e(this.R, 0));
                break;
            case 14:
                this.button.type == H.Bl && (this.button.Fh.checked = !0);
                break;
            case 15:
                this.Ve(function() {
                    this.checked = !1
                });
                break;
            case 17:
                this.button.yp = b.Jc(this.R, 0), this.element && (this.element.title = this.button.yp)
        }
    },
    Sn: function(a) {
        switch (a) {
            case 0:
                return this.j.K;
            case 1:
                return this.j.J;
            case 2:
                return this.j.o;
            case 3:
                return this.j.m;
            case 4:
                if (this.button.type != H.yi) return 0;
                var b = 0,
                    c = !1;
                this.Ve(function() {
                    if (this.checked) return c = !0, !1;
                    ++b
                });
                return c ? b : -1;
            case 5:
                return b = this.j.Ek(), 0 > b || b >= this.button.ka.length ? "" : this.button.ka[b];
            case 6:
                return this.button.yp
        }
    },
    tB: function() {
        return this.button.gr
    },
    PD: function(a) {
        this.button.gr = a;
        this.qE()
    },
    Vg: function(a, b) {
        void 0 === b && (b = this.element);
        jb.prototype.Vg.call(this, a);
        this.Ve(function() {
            this.style.font = b.style.font
        }, b, "label")
    }
});
J.HF = 1;
J.JF = 2;
J.FF = 4;
J.GF = 8;
J.EH = 4145;
J.DH = 4146;
J.xH = 4147;
J.yH = 4148;
J.vH = 4149;
J.wH = 4150;
J.uH = 4151;
J.tH = 4152;
J.FH = 4153;
J.BH = 4154;
J.CH = 4155;
J.AH = 4156;
J.zH = 4157;
J.$F = 4158;
J.aG = 4159;
J.ZF = 4160;
J.YF = 4161;
J.dG = 4162;
J.eG = 4163;
J.cG = 4164;
J.bG = 4165;
J.prototype = n.extend(new te, {
    Hv: function(a) {
        a.ma(1);
        this.Nn = a.w();
        this.DA = a.w();
        this.KA =
            a.w();
        this.LA = a.w();
        this.JA = a.w();
        this.IA = a.w();
        this.GA = a.w();
        this.HA = a.w();
        this.EA = a.w();
        this.FA = a.w();
        this.ng = this.DA;
        this.Lc = this.mg = !1;
        this.Px = 0 != (this.Nn & J.JF);
        this.Vv = 0 != (this.Nn & J.HF);
        this.Zl = 0 != (this.Nn & J.FF);
        this.kv = 0 != (this.Nn & J.GF);
        this.ij = this.KA;
        this.jj = this.LA;
        this.uo = this.ij + this.JA;
        this.vo = this.jj + this.IA;
        this.nr = this.GA;
        this.or = this.HA;
        this.pr = this.EA;
        this.qr = this.FA;
        this.Rv = this.j.o;
        this.Sv = this.j.m
    },
    JJ: function() {
        var a = this.j.c.h.rg(l.dd);
        a != this.vz && (this.vz = a) && (this.pk != this.j.c.Ya +
            1 && (this.Nq = !1), this.pk = this.j.c.Ya + 1, this.Mu = !0);
        a = this.j.c.h.rg(l.hg);
        a != this.zz && (this.zz = a) && (this.pk != this.j.c.Ya + 1 && (this.Mu = !1), this.pk = this.j.c.Ya + 1, this.Nq = !0)
    },
    pB: function(a, b) {
        var c = 0,
            d, e, f, g, h, l, n = null,
            r = -1;
        for (d = 0; d < this.j.c.ob; d++) {
            for (; null == this.j.c.H[c];) c++;
            e = this.j.c.H[c];
            c++;
            f = e.o - e.ia;
            g = e.m - e.ja;
            h = f + e.K;
            l = g + e.J;
            a >= f && a < h && b >= g && b < l && 0 == (e.X & G.je) && (f = !0, e.xa == q.Sd && 0 == (e.F.W & w.wh) && 0 == this.j.c.h.ba.sb(e.b.Ga).He(B.lh, 0, 1, 1).$s(a - e.o, b - e.m, e.b.Ua, e.b.mb, e.b.nb) && (f = !1), f && null !=
                e.F && (f = e.tc(), f > r && (r = f, n = e)))
        }
        return n
    },
    zr: function(a, b) {
        var c;
        c = this.pB(a, b);
        return null != c && c == this.j ? !0 : !1
    },
    move: function() {
        this.JJ();
        this.IJ();
        if (this.mg) {
            var a = this.j.c.Yi() - this.Pv,
                b = this.j.c.Zi() - this.Qv;
            this.Pv = this.j.c.Yi();
            this.Qv = this.j.c.Zi();
            this.Ni(u.qc);
            this.x += a;
            this.y += b;
            this.j.o = this.x;
            this.j.m = this.y;
            this.Px && (a = (this.j.m - this.j.ja - this.or) % this.qr, this.j.o -= (this.j.o - this.j.ia - this.nr) % this.pr, this.j.m -= a);
            this.Rz();
            this.Ou();
            return !0
        }
        a = !1;
        if (this.kv) {
            var b = this.j.o,
                c = this.j.m;
            this.Rz();
            if (b != this.j.o || c != this.j.m) a = !0
        }
        this.Ni(u.Qd);
        this.Ou();
        return a
    },
    IJ: function() {
        this.mg ? 0 == this.ng ? 0 == this.j.c.h.rg(l.dd) && this.stop(!0) : 1 == this.ng ? 0 == this.j.c.h.rg(l.hg) && this.stop(!0) : 2 == this.ng ? this.pk == this.j.c.Ya && this.Mu || this.j.c.h.rg(l.dd) ? this.Lc = !0 : this.Lc && this.stop(!0) : 3 == this.ng && (this.pk == this.j.c.Ya && this.Nq || this.j.c.h.rg(l.hg) ? this.Lc = !0 : this.Lc && this.stop(!0)) : 0 == this.ng ? this.j.c.h.rg(l.dd) ? 0 == this.Lc && (this.Lc = !0, this.zr(this.j.c.Yi(), this.j.c.Zi()) && this.vp()) : this.Lc = !1 : 1 == this.ng ? this.j.c.h.rg(l.hg) ? 0 == this.Lc && (this.Lc = !0, this.zr(this.j.c.Yi(), this.j.c.Zi()) && this.vp()) : this.Lc = !1 : 2 == this.ng ? this.j.c.h.rg(l.dd) ? 0 == this.Lc && (this.Lc = !0) : (1 == this.Lc && this.zr(this.j.c.Yi(), this.j.c.Zi()) && this.vp(), this.Lc = !1) : 3 == this.ng && (this.pk == this.j.c.Ya && this.Nq || this.j.c.h.rg(l.hg) ? 0 == this.Lc && (this.Lc = !0) : (1 == this.Lc && this.zr(this.j.c.Yi(), this.j.c.Zi()) && this.vp(), this.Lc = !1))
    },
    vp: function() {
        this.Pv = this.j.c.Yi();
        this.Qv = this.j.c.Zi();
        this.Rv = this.j.o;
        this.Sv = this.j.m;
        this.x = this.j.o;
        this.y = this.j.m;
        this.mg = !0;
        this.j.b.$ = 50
    },
    Rz: function() {
        this.Vv && (this.j.o < this.ij ? (this.j.o = this.ij, this.Zl && (this.mg = !1)) : this.j.o > this.uo && (this.j.o = this.uo, this.Zl && (this.mg = !1)), this.j.m < this.jj ? (this.j.m = this.jj, this.Zl && (this.mg = !1)) : this.j.m > this.vo && (this.j.m = this.vo, this.Zl && (this.mg = !1)))
    },
    setPosition: function(a, b) {
        this.j.o = a;
        this.j.m = b
    },
    Qb: function(a) {
        this.j.o = a
    },
    Rb: function(a) {
        this.j.m = a
    },
    stop: function() {
        this.Lc = this.mg = !1;
        this.j.b.$ = 0
    },
    start: function() {
        this.vp()
    },
    Te: function() {
        this.mg &&
            (this.setPosition(this.Rv, this.Sv), this.stop(!0))
    },
    ou: function(a) {
        switch (a) {
            case J.EH:
                a = this.j.A.V.oe;
                0 <= a && 5 > a && (this.ng = a);
                break;
            case J.DH:
                a = this.j.A.V.oe;
                this.Vv = 0 != a;
                break;
            case J.xH:
                a = this.j.A.V.oe;
                this.Zl = 0 != a;
                break;
            case J.yH:
                a = this.j.A.V.oe;
                this.kv = 0 != a;
                break;
            case J.vH:
                this.ij = a = this.j.A.V.oe;
                break;
            case J.wH:
                this.jj = a = this.j.A.V.oe;
                break;
            case J.uH:
                a = this.j.A.V.oe;
                this.uo = this.ij + a;
                break;
            case J.tH:
                a = this.j.A.V.oe;
                this.vo = this.jj + a;
                break;
            case J.FH:
                a = this.j.A.V.oe;
                this.Px = 0 != a;
                break;
            case J.BH:
                this.nr =
                    a = this.j.A.V.oe;
                break;
            case J.CH:
                this.or = a = this.j.A.V.oe;
                break;
            case J.AH:
                this.pr = a = this.j.A.V.oe;
                break;
            case J.zH:
                this.qr = a = this.j.A.V.oe;
                break;
            case J.$F:
                return this.ij;
            case J.aG:
                return this.jj;
            case J.ZF:
                return this.uo - this.ij;
            case J.YF:
                return this.vo - this.jj;
            case J.dG:
                return this.nr;
            case J.eG:
                return this.or;
            case J.cG:
                return this.pr;
            case J.bG:
                return this.qr
        }
        return 0
    },
    kr: function() {
        return this.j.b.$
    },
    gB: function() {
        return 100
    },
    hB: function() {
        return 100
    }
});
Xd(Q, sa)
};