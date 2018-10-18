/* flatpickr v4.5.2,, @license MIT */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.flatpickr = t()
}(this, function () {
    "use strict";
    var X = function (e) {
            return ("0" + e).slice(-2)
        },
        ee = function (e) {
            return !0 === e ? 1 : 0
        };

    function te(n, a, i) {
        var o;
        return void 0 === i && (i = !1),
            function () {
                var e = this,
                    t = arguments;
                null !== o && clearTimeout(o), o = window.setTimeout(function () {
                    o = null, i || n.apply(e, t)
                }, a), i && !o && n.apply(e, t)
            }
    }
    var ne = function (e) {
            return e instanceof Array ? e : [e]
        },
        e = function () {},
        ae = function (e, t, n) {
            return n.months[t ? "shorthand" : "longhand"][e]
        },
        w = {
            D: e,
            F: function (e, t, n) {
                e.setMonth(n.months.longhand.indexOf(t))
            },
            G: function (e, t) {
                e.setHours(parseFloat(t))
            },
            H: function (e, t) {
                e.setHours(parseFloat(t))
            },
            J: function (e, t) {
                e.setDate(parseFloat(t))
            },
            K: function (e, t, n) {
                e.setHours(e.getHours() % 12 + 12 * ee(new RegExp(n.amPM[1], "i").test(t)))
            },
            M: function (e, t, n) {
                e.setMonth(n.months.shorthand.indexOf(t))
            },
            S: function (e, t) {
                e.setSeconds(parseFloat(t))
            },
            U: function (e, t) {
                return new Date(1e3 * parseFloat(t))
            },
            W: function (e, t) {
                var n = parseInt(t);
                return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0)
            },
            Y: function (e, t) {
                e.setFullYear(parseFloat(t))
            },
            Z: function (e, t) {
                return new Date(t)
            },
            d: function (e, t) {
                e.setDate(parseFloat(t))
            },
            h: function (e, t) {
                e.setHours(parseFloat(t))
            },
            i: function (e, t) {
                e.setMinutes(parseFloat(t))
            },
            j: function (e, t) {
                e.setDate(parseFloat(t))
            },
            l: e,
            m: function (e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            n: function (e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            s: function (e, t) {
                e.setSeconds(parseFloat(t))
            },
            w: e,
            y: function (e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        },
        ie = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        l = {
            Z: function (e) {
                return e.toISOString()
            },
            D: function (e, t, n) {
                return t.weekdays.shorthand[l.w(e, t, n)]
            },
            F: function (e, t, n) {
                return ae(l.n(e, t, n) - 1, !1, t)
            },
            G: function (e, t, n) {
                return X(l.h(e, t, n))
            },
            H: function (e) {
                return X(e.getHours())
            },
            J: function (e, t) {
                return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
            },
            K: function (e, t) {
                return t.amPM[ee(11 < e.getHours())]
            },
            M: function (e, t) {
                return ae(e.getMonth(), !0, t)
            },
            S: function (e) {
                return X(e.getSeconds())
            },
            U: function (e) {
                return e.getTime() / 1e3
            },
            W: function (e, t, n) {
                return n.getWeek(e)
            },
            Y: function (e) {
                return e.getFullYear()
            },
            d: function (e) {
                return X(e.getDate())
            },
            h: function (e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function (e) {
                return X(e.getMinutes())
            },
            j: function (e) {
                return e.getDate()
            },
            l: function (e, t) {
                return t.weekdays.longhand[e.getDay()]
            },
            m: function (e) {
                return X(e.getMonth() + 1)
            },
            n: function (e) {
                return e.getMonth() + 1
            },
            s: function (e) {
                return e.getSeconds()
            },
            w: function (e) {
                return e.getDay()
            },
            y: function (e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        oe = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (e) {
                var t = e % 100;
                if (3 < t && t < 21) return "th";
                switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year"
        },
        re = function (e) {
            var t = e.config,
                o = void 0 === t ? C : t,
                n = e.l10n,
                r = void 0 === n ? oe : n;
            return function (a, e, t) {
                var i = t || r;
                return void 0 !== o.formatDate ? o.formatDate(a, e, i) : e.split("").map(function (e, t, n) {
                    return l[e] && "\\" !== n[t - 1] ? l[e](a, i, o) : "\\" !== e ? e : ""
                }).join("")
            }
        },
        le = function (e) {
            var t = e.config,
                D = void 0 === t ? C : t,
                n = e.l10n,
                b = void 0 === n ? oe : n;
            return function (e, t, n, a) {
                if (0 === e || e) {
                    var i, o = a || b,
                        r = e;
                    if (e instanceof Date) i = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed) i = new Date(e);
                    else if ("string" == typeof e) {
                        var l = t || (D || C).dateFormat,
                            c = String(e).trim();
                        if ("today" === c) i = new Date, n = !0;
                        else if (/Z$/.test(c) || /GMT$/.test(c)) i = new Date(e);
                        else if (D && D.parseDate) i = D.parseDate(e, l);
                        else {
                            i = D && D.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
                            for (var d, s = [], u = 0, f = 0, m = ""; u < l.length; u++) {
                                var g = l[u],
                                    p = "\\" === g,
                                    h = "\\" === l[u - 1] || p;
                                if (ie[g] && !h) {
                                    m += ie[g];
                                    var v = new RegExp(m).exec(e);
                                    v && (d = !0) && s["Y" !== g ? "push" : "unshift"]({
                                        fn: w[g],
                                        val: v[++f]
                                    })
                                } else p || (m += ".");
                                s.forEach(function (e) {
                                    var t = e.fn,
                                        n = e.val;
                                    return i = t(i, n, o) || i
                                })
                            }
                            i = d ? i : void 0
                        }
                    }
                    if (i instanceof Date && !isNaN(i.getTime())) return !0 === n && i.setHours(0, 0, 0, 0), i;
                    D.errorHandler(new Error("Invalid date provided: " + r))
                }
            }
        };

    function ce(e, t, n) {
        return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
    }
    var de = function (e, t, n) {
            return e > Math.min(t, n) && e < Math.max(t, n)
        },
        se = {
            DAY: 864e5
        },
        ue = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        C = {
            _disable: [],
            _enable: [],
            allowInput: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enable: [],
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function (e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function (e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                var n = new Date(t.getFullYear(), 0, 4);
                return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        };

    function fe(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t)
    }

    function me(e, t, n) {
        var a = window.document.createElement(e);
        return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), a
    }

    function ge(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function pe(e, t) {
        var n = me("div", "numInputWrapper"),
            a = me("input", "numInput " + e),
            i = me("span", "arrowUp"),
            o = me("span", "arrowDown");
        if (a.type = "text", a.pattern = "\\d*", void 0 !== t)
            for (var r in t) a.setAttribute(r, t[r]);
        return n.appendChild(a), n.appendChild(i), n.appendChild(o), n
    }
    "function" != typeof Object.assign && (Object.assign = function (n) {
        if (!n) throw TypeError("Cannot convert undefined or null to object");
        for (var e = arguments.length, a = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) a[t - 1] = arguments[t];
        for (var i = function () {
                var t = a[o];
                t && Object.keys(t).forEach(function (e) {
                    return n[e] = t[e]
                })
            }, o = 0; o < a.length; o++) i();
        return n
    });
    var he = 300;

    function r(d, s) {
        var h = {
            config: Object.assign({}, ve.defaultConfig),
            l10n: oe
        };

        function u(e) {
            return e.bind(h)
        }

        function t() {
            var t = h.config;
            !1 === t.weekNumbers && 1 === t.showMonths || !0 !== t.noCalendar && window.requestAnimationFrame(function () {
                if (h.calendarContainer.style.visibility = "hidden", h.calendarContainer.style.display = "block", void 0 !== h.daysContainer) {
                    var e = (h.days.offsetWidth + 1) * t.showMonths;
                    h.daysContainer.style.width = e + "px", h.calendarContainer.style.width = e + (void 0 !== h.weekWrapper ? h.weekWrapper.offsetWidth : 0) + "px", h.calendarContainer.style.removeProperty("visibility"), h.calendarContainer.style.removeProperty("display")
                }
            })
        }

        function f(e) {
            if (0 !== h.selectedDates.length) {
                void 0 !== e && "blur" !== e.type && function (e) {
                    e.preventDefault();
                    var t = "keydown" === e.type,
                        n = e.target;
                    void 0 !== h.amPM && e.target === h.amPM && (h.amPM.textContent = h.l10n.amPM[ee(h.amPM.textContent === h.l10n.amPM[0])]);
                    var a = parseFloat(n.getAttribute("data-min")),
                        i = parseFloat(n.getAttribute("data-max")),
                        o = parseFloat(n.getAttribute("data-step")),
                        r = parseInt(n.value, 10),
                        l = e.delta || (t ? 38 === e.which ? 1 : -1 : 0),
                        c = r + o * l;
                    if (void 0 !== n.value && 2 === n.value.length) {
                        var d = n === h.hourElement,
                            s = n === h.minuteElement;
                        c < a ? (c = i + c + ee(!d) + (ee(d) && ee(!h.amPM)), s && v(void 0, -1, h.hourElement)) : i < c && (c = n === h.hourElement ? c - i - ee(!h.amPM) : a, s && v(void 0, 1, h.hourElement)), h.amPM && d && (1 === o ? c + r === 23 : Math.abs(c - r) > o) && (h.amPM.textContent = h.l10n.amPM[ee(h.amPM.textContent === h.l10n.amPM[0])]), n.value = X(c)
                    }
                }(e);
                var t = h._input.value;
                m(), Z(), h._input.value !== t && h._debouncedChange()
            }
        }

        function m() {
            if (void 0 !== h.hourElement && void 0 !== h.minuteElement) {
                var e, t, n = (parseInt(h.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(h.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== h.secondElement ? (parseInt(h.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== h.amPM && (e = n, t = h.amPM.textContent, n = e % 12 + 12 * ee(t === h.l10n.amPM[1]));
                var o = void 0 !== h.config.minTime || h.config.minDate && h.minDateHasTime && h.latestSelectedDateObj && 0 === ce(h.latestSelectedDateObj, h.config.minDate, !0);
                if (void 0 !== h.config.maxTime || h.config.maxDate && h.maxDateHasTime && h.latestSelectedDateObj && 0 === ce(h.latestSelectedDateObj, h.config.maxDate, !0)) {
                    var r = void 0 !== h.config.maxTime ? h.config.maxTime : h.config.maxDate;
                    (n = Math.min(n, r.getHours())) === r.getHours() && (a = Math.min(a, r.getMinutes())), a === r.getMinutes() && (i = Math.min(i, r.getSeconds()))
                }
                if (o) {
                    var l = void 0 !== h.config.minTime ? h.config.minTime : h.config.minDate;
                    (n = Math.max(n, l.getHours())) === l.getHours() && (a = Math.max(a, l.getMinutes())), a === l.getMinutes() && (i = Math.max(i, l.getSeconds()))
                }
                c(n, a, i)
            }
        }

        function i(e) {
            var t = e || h.latestSelectedDateObj;
            t && c(t.getHours(), t.getMinutes(), t.getSeconds())
        }

        function a() {
            var e = h.config.defaultHour,
                t = h.config.defaultMinute,
                n = h.config.defaultSeconds;
            if (void 0 !== h.config.minDate) {
                var a = h.config.minDate.getHours(),
                    i = h.config.minDate.getMinutes();
                (e = Math.max(e, a)) === a && (t = Math.max(i, t)), e === a && t === i && (n = h.config.minDate.getSeconds())
            }
            if (void 0 !== h.config.maxDate) {
                var o = h.config.maxDate.getHours(),
                    r = h.config.maxDate.getMinutes();
                (e = Math.min(e, o)) === o && (t = Math.min(r, t)), e === o && t === r && (n = h.config.maxDate.getSeconds())
            }
            c(e, t, n)
        }

        function c(e, t, n) {
            void 0 !== h.latestSelectedDateObj && h.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), h.hourElement && h.minuteElement && !h.isMobile && (h.hourElement.value = X(h.config.time_24hr ? e : (12 + e) % 12 + 12 * ee(e % 12 == 0)), h.minuteElement.value = X(t), void 0 !== h.amPM && (h.amPM.textContent = h.l10n.amPM[ee(12 <= e)]), void 0 !== h.secondElement && (h.secondElement.value = X(n)))
        }

        function n(e) {
            var t = parseInt(e.target.value) + (e.delta || 0);
            (1 < t / 1e3 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && _(t)
        }

        function o(t, n, a, i) {
            return n instanceof Array ? n.forEach(function (e) {
                return o(t, e, a, i)
            }) : t instanceof Array ? t.forEach(function (e) {
                return o(e, n, a, i)
            }) : (t.addEventListener(n, a, i), void h._handlers.push({
                element: t,
                event: n,
                handler: a,
                options: i
            }))
        }

        function r(t) {
            return function (e) {
                1 === e.which && t(e)
            }
        }

        function g() {
            q("onChange")
        }

        function l(e) {
            var t = void 0 !== e ? h.parseDate(e) : h.latestSelectedDateObj || (h.config.minDate && h.config.minDate > h.now ? h.config.minDate : h.config.maxDate && h.config.maxDate < h.now ? h.config.maxDate : h.now);
            try {
                void 0 !== t && (h.currentYear = t.getFullYear(), h.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, h.config.errorHandler(e)
            }
            h.redraw()
        }

        function p(e) {
            ~e.target.className.indexOf("arrow") && v(e, e.target.classList.contains("arrowUp") ? 1 : -1)
        }

        function v(e, t, n) {
            var a = e && e.target,
                i = n || a && a.parentNode && a.parentNode.firstChild,
                o = $("increment");
            o.delta = t, i && i.dispatchEvent(o)
        }

        function D(e, t, n, a) {
            var i, o = N(t, !0),
                r = me("span", "flatpickr-day " + e, t.getDate().toString());
            return r.dateObj = t, r.$i = a, r.setAttribute("aria-label", h.formatDate(t, h.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === ce(t, h.now) && ((h.todayDateElem = r).classList.add("today"), r.setAttribute("aria-current", "date")), o ? (r.tabIndex = -1, z(t) && (r.classList.add("selected"), h.selectedDateElem = r, "range" === h.config.mode && (fe(r, "startRange", h.selectedDates[0] && 0 === ce(t, h.selectedDates[0], !0)), fe(r, "endRange", h.selectedDates[1] && 0 === ce(t, h.selectedDates[1], !0)), "nextMonthDay" === e && r.classList.add("inRange")))) : r.classList.add("disabled"), "range" === h.config.mode && (i = t, !("range" !== h.config.mode || h.selectedDates.length < 2) && 0 <= ce(i, h.selectedDates[0]) && ce(i, h.selectedDates[1]) <= 0 && !z(t) && r.classList.add("inRange")), h.weekNumbers && 1 === h.config.showMonths && "prevMonthDay" !== e && n % 7 == 1 && h.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + h.config.getWeek(t) + "</span>"), q("onDayCreate", r), r
        }

        function b(e) {
            e.focus(), "range" === h.config.mode && P(e)
        }

        function w(e) {
            for (var t = 0 < e ? 0 : h.config.showMonths - 1, n = 0 < e ? h.config.showMonths : -1, a = t; a != n; a += e)
                for (var i = h.daysContainer.children[a], o = 0 < e ? 0 : i.children.length - 1, r = 0 < e ? i.children.length : -1, l = o; l != r; l += e) {
                    var c = i.children[l];
                    if (-1 === c.className.indexOf("hidden") && N(c.dateObj)) return c
                }
        }

        function C(e, t) {
            var n = F(document.activeElement || document.body),
                a = void 0 !== e ? e : n ? document.activeElement : void 0 !== h.selectedDateElem && F(h.selectedDateElem) ? h.selectedDateElem : void 0 !== h.todayDateElem && F(h.todayDateElem) ? h.todayDateElem : w(0 < t ? 1 : -1);
            return void 0 === a ? h._input.focus() : n ? void
            function (e, t) {
                for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : h.currentMonth, a = 0 < t ? h.config.showMonths : -1, i = 0 < t ? 1 : -1, o = n - h.currentMonth; o != a; o += i)
                    for (var r = h.daysContainer.children[o], l = n - h.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0, c = r.children.length, d = l; 0 <= d && d < c && d != (0 < t ? c : -1); d += i) {
                        var s = r.children[d];
                        if (-1 === s.className.indexOf("hidden") && N(s.dateObj) && Math.abs(e.$i - d) >= Math.abs(t)) return b(s)
                    }
                h.changeMonth(i), C(w(i), 0)
            }(a, t): b(a)
        }

        function y(e, t) {
            for (var n = (new Date(e, t, 1).getDay() - h.l10n.firstDayOfWeek + 7) % 7, a = h.utils.getDaysInMonth((t - 1 + 12) % 12), i = h.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = 1 < h.config.showMonths, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", d = a + 1 - n, s = 0; d <= a; d++, s++) o.appendChild(D(l, new Date(e, t - 1, d), d, s));
            for (d = 1; d <= i; d++, s++) o.appendChild(D("", new Date(e, t, d), d, s));
            for (var u = i + 1; u <= 42 - n && (1 === h.config.showMonths || s % 7 != 0); u++, s++) o.appendChild(D(c, new Date(e, t + 1, u % i), u, s));
            var f = me("div", "dayContainer");
            return f.appendChild(o), f
        }

        function M() {
            if (void 0 !== h.daysContainer) {
                ge(h.daysContainer), h.weekNumbers && ge(h.weekNumbers);
                for (var e = document.createDocumentFragment(), t = 0; t < h.config.showMonths; t++) {
                    var n = new Date(h.currentYear, h.currentMonth, 1);
                    n.setMonth(h.currentMonth + t), e.appendChild(y(n.getFullYear(), n.getMonth()))
                }
                h.daysContainer.appendChild(e), h.days = h.daysContainer.firstChild, "range" === h.config.mode && 1 === h.selectedDates.length && P()
            }
        }

        function x() {
            var e = me("div", "flatpickr-month"),
                t = window.document.createDocumentFragment(),
                n = me("span", "cur-month"),
                a = pe("cur-year", {
                    tabindex: "-1"
                }),
                i = a.getElementsByTagName("input")[0];
            i.setAttribute("aria-label", h.l10n.yearAriaLabel), h.config.minDate && i.setAttribute("data-min", h.config.minDate.getFullYear().toString()), h.config.maxDate && (i.setAttribute("data-max", h.config.maxDate.getFullYear().toString()), i.disabled = !!h.config.minDate && h.config.minDate.getFullYear() === h.config.maxDate.getFullYear());
            var o = me("div", "flatpickr-current-month");
            return o.appendChild(n), o.appendChild(a), t.appendChild(o), e.appendChild(t), {
                container: e,
                yearElement: i,
                monthElement: n
            }
        }

        function E() {
            ge(h.monthNav), h.monthNav.appendChild(h.prevMonthNav);
            for (var e = h.config.showMonths; e--;) {
                var t = x();
                h.yearElements.push(t.yearElement), h.monthElements.push(t.monthElement), h.monthNav.appendChild(t.container)
            }
            h.monthNav.appendChild(h.nextMonthNav)
        }

        function T() {
            h.weekdayContainer ? ge(h.weekdayContainer) : h.weekdayContainer = me("div", "flatpickr-weekdays");
            for (var e = h.config.showMonths; e--;) {
                var t = me("div", "flatpickr-weekdaycontainer");
                h.weekdayContainer.appendChild(t)
            }
            return k(), h.weekdayContainer
        }

        function k() {
            var e = h.l10n.firstDayOfWeek,
                t = h.l10n.weekdays.shorthand.concat();
            0 < e && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
            for (var n = h.config.showMonths; n--;) h.weekdayContainer.children[n].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + t.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      "
        }

        function I(e, t) {
            void 0 === t && (t = !0);
            var n = t ? e : e - h.currentMonth;
            n < 0 && !0 === h._hidePrevMonthArrow || 0 < n && !0 === h._hideNextMonthArrow || (h.currentMonth += n, (h.currentMonth < 0 || 11 < h.currentMonth) && (h.currentYear += 11 < h.currentMonth ? 1 : -1, h.currentMonth = (h.currentMonth + 12) % 12, q("onYearChange")), M(), q("onMonthChange"), G())
        }

        function O(e) {
            return !(!h.config.appendTo || !h.config.appendTo.contains(e)) || h.calendarContainer.contains(e)
        }

        function S(t) {
            if (h.isOpen && !h.config.inline) {
                var e = O(t.target),
                    n = t.target === h.input || t.target === h.altInput || h.element.contains(t.target) || t.path && t.path.indexOf && (~t.path.indexOf(h.input) || ~t.path.indexOf(h.altInput)),
                    a = "blur" === t.type ? n && t.relatedTarget && !O(t.relatedTarget) : !n && !e,
                    i = !h.config.ignoredFocusElements.some(function (e) {
                        return e.contains(t.target)
                    });
                a && i && (h.close(), "range" === h.config.mode && 1 === h.selectedDates.length && (h.clear(!1), h.redraw()))
            }
        }

        function _(e) {
            if (!(!e || h.config.minDate && e < h.config.minDate.getFullYear() || h.config.maxDate && e > h.config.maxDate.getFullYear())) {
                var t = e,
                    n = h.currentYear !== t;
                h.currentYear = t || h.currentYear, h.config.maxDate && h.currentYear === h.config.maxDate.getFullYear() ? h.currentMonth = Math.min(h.config.maxDate.getMonth(), h.currentMonth) : h.config.minDate && h.currentYear === h.config.minDate.getFullYear() && (h.currentMonth = Math.max(h.config.minDate.getMonth(), h.currentMonth)), n && (h.redraw(), q("onYearChange"))
            }
        }

        function N(e, t) {
            void 0 === t && (t = !0);
            var n = h.parseDate(e, void 0, t);
            if (h.config.minDate && n && ce(n, h.config.minDate, void 0 !== t ? t : !h.minDateHasTime) < 0 || h.config.maxDate && n && 0 < ce(n, h.config.maxDate, void 0 !== t ? t : !h.maxDateHasTime)) return !1;
            if (0 === h.config.enable.length && 0 === h.config.disable.length) return !0;
            if (void 0 === n) return !1;
            for (var a, i = 0 < h.config.enable.length, o = i ? h.config.enable : h.config.disable, r = 0; r < o.length; r++) {
                if ("function" == typeof (a = o[r]) && a(n)) return i;
                if (a instanceof Date && void 0 !== n && a.getTime() === n.getTime()) return i;
                if ("string" == typeof a && void 0 !== n) {
                    var l = h.parseDate(a, void 0, !0);
                    return l && l.getTime() === n.getTime() ? i : !i
                }
                if ("object" == typeof a && void 0 !== n && a.from && a.to && n.getTime() >= a.from.getTime() && n.getTime() <= a.to.getTime()) return i
            }
            return !i
        }

        function F(e) {
            return void 0 !== h.daysContainer && (-1 === e.className.indexOf("hidden") && h.daysContainer.contains(e))
        }

        function A(e) {
            var t = e.target === h._input,
                n = h.config.allowInput,
                a = h.isOpen && (!n || !t),
                i = h.config.inline && t && !n;
            if (13 === e.keyCode && t) {
                if (n) return h.setDate(h._input.value, !0, e.target === h.altInput ? h.config.altFormat : h.config.dateFormat), e.target.blur();
                h.open()
            } else if (O(e.target) || a || i) {
                var o = !!h.timeContainer && h.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        o ? f() : B(e);
                        break;
                    case 27:
                        e.preventDefault(), R();
                        break;
                    case 8:
                    case 46:
                        t && !h.config.allowInput && (e.preventDefault(), h.clear());
                        break;
                    case 37:
                    case 39:
                        if (o) h.hourElement && h.hourElement.focus();
                        else if (e.preventDefault(), void 0 !== h.daysContainer && (!1 === n || F(document.activeElement))) {
                            var r = 39 === e.keyCode ? 1 : -1;
                            e.ctrlKey ? (I(r), C(w(1), 0)) : C(void 0, r)
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var l = 40 === e.keyCode ? 1 : -1;
                        h.daysContainer && void 0 !== e.target.$i ? e.ctrlKey ? (_(h.currentYear - l), C(w(1), 0)) : o || C(void 0, 7 * l) : h.config.enableTime && (!o && h.hourElement && h.hourElement.focus(), f(e), h._debouncedChange());
                        break;
                    case 9:
                        if (!o) {
                            h.element.focus();
                            break
                        }
                        var c = [h.hourElement, h.minuteElement, h.secondElement, h.amPM].filter(function (e) {
                                return e
                            }),
                            d = c.indexOf(e.target);
                        if (-1 !== d) {
                            var s = c[d + (e.shiftKey ? -1 : 1)];
                            void 0 !== s ? (e.preventDefault(), s.focus()) : h.element.focus()
                        }
                }
            }
            if (void 0 !== h.amPM && e.target === h.amPM) switch (e.key) {
                case h.l10n.amPM[0].charAt(0):
                case h.l10n.amPM[0].charAt(0).toLowerCase():
                    h.amPM.textContent = h.l10n.amPM[0], m(), Z();
                    break;
                case h.l10n.amPM[1].charAt(0):
                case h.l10n.amPM[1].charAt(0).toLowerCase():
                    h.amPM.textContent = h.l10n.amPM[1], m(), Z()
            }
            q("onKeyDown", e)
        }

        function P(o) {
            if (1 === h.selectedDates.length && (!o || o.classList.contains("flatpickr-day") && !o.classList.contains("disabled"))) {
                for (var r = o ? o.dateObj.getTime() : h.days.firstElementChild.dateObj.getTime(), l = h.parseDate(h.selectedDates[0], void 0, !0).getTime(), e = Math.min(r, h.selectedDates[0].getTime()), t = Math.max(r, h.selectedDates[0].getTime()), n = h.daysContainer.lastChild.lastChild.dateObj.getTime(), c = !1, d = 0, s = 0, a = e; a < n; a += se.DAY) N(new Date(a), !0) || (c = c || e < a && a < t, a < l && (!d || d < a) ? d = a : l < a && (!s || a < s) && (s = a));
                for (var u = 0; u < h.config.showMonths; u++)
                    for (var f = h.daysContainer.children[u], m = h.daysContainer.children[u - 1], i = function (e, t) {
                            var n = f.children[e],
                                a = n.dateObj.getTime(),
                                i = 0 < d && a < d || 0 < s && s < a;
                            return i ? (n.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (e) {
                                n.classList.remove(e)
                            }), "continue") : c && !i ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach(function (e) {
                                n.classList.remove(e)
                            }), void(void 0 !== o && (o.classList.add(r < h.selectedDates[0].getTime() ? "startRange" : "endRange"), !f.contains(o) && 0 < u && m && m.lastChild.dateObj.getTime() >= a || (l < r && a === l ? n.classList.add("startRange") : r < l && a === l && n.classList.add("endRange"), d <= a && (0 === s || a <= s) && de(a, l, r) && n.classList.add("inRange")))))
                        }, g = 0, p = f.children.length; g < p; g++) i(g)
            }
        }

        function j() {
            !h.isOpen || h.config.static || h.config.inline || L()
        }

        function Y(a) {
            return function (e) {
                var t = h.config["_" + a + "Date"] = h.parseDate(e, h.config.dateFormat),
                    n = h.config["_" + ("min" === a ? "max" : "min") + "Date"];
                void 0 !== t && (h["min" === a ? "minDateHasTime" : "maxDateHasTime"] = 0 < t.getHours() || 0 < t.getMinutes() || 0 < t.getSeconds()), h.selectedDates && (h.selectedDates = h.selectedDates.filter(function (e) {
                    return N(e)
                }), h.selectedDates.length || "min" !== a || i(t), Z()), h.daysContainer && (W(), void 0 !== t ? h.currentYearElement[a] = t.getFullYear().toString() : h.currentYearElement.removeAttribute(a), h.currentYearElement.disabled = !!n && void 0 !== t && n.getFullYear() === t.getFullYear())
            }
        }

        function H() {
            "object" != typeof h.config.locale && void 0 === ve.l10ns[h.config.locale] && h.config.errorHandler(new Error("flatpickr: invalid locale " + h.config.locale)), h.l10n = Object.assign({}, ve.l10ns.default, "object" == typeof h.config.locale ? h.config.locale : "default" !== h.config.locale ? ve.l10ns[h.config.locale] : void 0), ie.K = "(" + h.l10n.amPM[0] + "|" + h.l10n.amPM[1] + "|" + h.l10n.amPM[0].toLowerCase() + "|" + h.l10n.amPM[1].toLowerCase() + ")", h.formatDate = re(h), h.parseDate = le({
                config: h.config,
                l10n: h.l10n
            })
        }

        function L(e) {
            if (void 0 !== h.calendarContainer) {
                q("onPreCalendarPosition");
                var t = e || h._positionElement,
                    n = Array.prototype.reduce.call(h.calendarContainer.children, function (e, t) {
                        return e + t.offsetHeight
                    }, 0),
                    a = h.calendarContainer.offsetWidth,
                    i = h.config.position.split(" "),
                    o = i[0],
                    r = 1 < i.length ? i[1] : null,
                    l = t.getBoundingClientRect(),
                    c = window.innerHeight - l.bottom,
                    d = "above" === o || "below" !== o && c < n && l.top > n,
                    s = window.pageYOffset + l.top + (d ? -n - 2 : t.offsetHeight + 2);
                if (fe(h.calendarContainer, "arrowTop", !d), fe(h.calendarContainer, "arrowBottom", d), !h.config.inline) {
                    var u = window.pageXOffset + l.left - (null != r && "center" === r ? (a - l.width) / 2 : 0),
                        f = window.document.body.offsetWidth - l.right,
                        m = u + a > window.document.body.offsetWidth;
                    fe(h.calendarContainer, "rightMost", m), h.config.static || (h.calendarContainer.style.top = s + "px", m ? (h.calendarContainer.style.left = "auto", h.calendarContainer.style.right = f + "px") : (h.calendarContainer.style.left = u + "px", h.calendarContainer.style.right = "auto"))
                }
            }
        }

        function W() {
            h.config.noCalendar || h.isMobile || (G(), M())
        }

        function R() {
            h._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(h.close, 0) : h.close()
        }

        function B(e) {
            e.preventDefault(), e.stopPropagation();
            var t = function e(t, n) {
                return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0
            }(e.target, function (e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("disabled") && !e.classList.contains("notAllowed")
            });
            if (void 0 !== t) {
                var n = t,
                    a = h.latestSelectedDateObj = new Date(n.dateObj.getTime()),
                    i = (a.getMonth() < h.currentMonth || a.getMonth() > h.currentMonth + h.config.showMonths - 1) && "range" !== h.config.mode;
                if (h.selectedDateElem = n, "single" === h.config.mode) h.selectedDates = [a];
                else if ("multiple" === h.config.mode) {
                    var o = z(a);
                    o ? h.selectedDates.splice(parseInt(o), 1) : h.selectedDates.push(a)
                } else "range" === h.config.mode && (2 === h.selectedDates.length && h.clear(!1), h.selectedDates.push(a), 0 !== ce(a, h.selectedDates[0], !0) && h.selectedDates.sort(function (e, t) {
                    return e.getTime() - t.getTime()
                }));
                if (m(), i) {
                    var r = h.currentYear !== a.getFullYear();
                    h.currentYear = a.getFullYear(), h.currentMonth = a.getMonth(), r && q("onYearChange"), q("onMonthChange")
                }
                if (G(), M(), Z(), h.config.enableTime && setTimeout(function () {
                        return h.showTimeInput = !0
                    }, 50), i || "range" === h.config.mode || 1 !== h.config.showMonths ? h.selectedDateElem && h.selectedDateElem.focus() : b(n), void 0 !== h.hourElement && setTimeout(function () {
                        return void 0 !== h.hourElement && h.hourElement.select()
                    }, 451), h.config.closeOnSelect) {
                    var l = "single" === h.config.mode && !h.config.enableTime,
                        c = "range" === h.config.mode && 2 === h.selectedDates.length && !h.config.enableTime;
                    (l || c) && R()
                }
                g()
            }
        }
        h.parseDate = le({
            config: h.config,
            l10n: h.l10n
        }), h._handlers = [], h._bind = o, h._setHoursFromDate = i, h._positionCalendar = L, h.changeMonth = I, h.changeYear = _, h.clear = function (e) {
            void 0 === e && (e = !0);
            h.input.value = "", void 0 !== h.altInput && (h.altInput.value = "");
            void 0 !== h.mobileInput && (h.mobileInput.value = "");
            h.selectedDates = [], h.latestSelectedDateObj = void 0, !(h.showTimeInput = !1) === h.config.enableTime && a();
            h.redraw(), e && q("onChange")
        }, h.close = function () {
            h.isOpen = !1, h.isMobile || (h.calendarContainer.classList.remove("open"), h._input.classList.remove("active"));
            q("onClose")
        }, h._createElement = me, h.destroy = function () {
            void 0 !== h.config && q("onDestroy");
            for (var e = h._handlers.length; e--;) {
                var t = h._handlers[e];
                t.element.removeEventListener(t.event, t.handler, t.options)
            }
            if (h._handlers = [], h.mobileInput) h.mobileInput.parentNode && h.mobileInput.parentNode.removeChild(h.mobileInput), h.mobileInput = void 0;
            else if (h.calendarContainer && h.calendarContainer.parentNode)
                if (h.config.static && h.calendarContainer.parentNode) {
                    var n = h.calendarContainer.parentNode;
                    if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                        for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                        n.parentNode.removeChild(n)
                    }
                } else h.calendarContainer.parentNode.removeChild(h.calendarContainer);
            h.altInput && (h.input.type = "text", h.altInput.parentNode && h.altInput.parentNode.removeChild(h.altInput), delete h.altInput);
            h.input && (h.input.type = h.input._type, h.input.classList.remove("flatpickr-input"), h.input.removeAttribute("readonly"), h.input.value = "");
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (e) {
                try {
                    delete h[e]
                } catch (e) {}
            })
        }, h.isEnabled = N, h.jumpToDate = l, h.open = function (e, t) {
            void 0 === t && (t = h._positionElement);
            if (!0 === h.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()), void 0 !== h.mobileInput && (h.mobileInput.focus(), h.mobileInput.click()), void q("onOpen");
            if (h._input.disabled || h.config.inline) return;
            var n = h.isOpen;
            h.isOpen = !0, n || (h.calendarContainer.classList.add("open"), h._input.classList.add("active"), q("onOpen"), L(t));
            !0 === h.config.enableTime && !0 === h.config.noCalendar && (0 === h.selectedDates.length && (h.setDate(void 0 !== h.config.minDate ? new Date(h.config.minDate.getTime()) : new Date, !1), a(), Z()), !1 !== h.config.allowInput || void 0 !== e && h.timeContainer.contains(e.relatedTarget) || setTimeout(function () {
                return h.hourElement.select()
            }, 50))
        }, h.redraw = W, h.set = function (e, t) {
            null !== e && "object" == typeof e ? Object.assign(h.config, e) : (h.config[e] = t, void 0 !== K[e] ? K[e].forEach(function (e) {
                return e()
            }) : -1 < ue.indexOf(e) && (h.config[e] = ne(t)));
            h.redraw(), l(), Z(!1)
        }, h.setDate = function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = h.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return h.clear(t);
            J(e, n), h.showTimeInput = 0 < h.selectedDates.length, h.latestSelectedDateObj = h.selectedDates[0], h.redraw(), l(), i(), Z(t), t && q("onChange")
        }, h.toggle = function (e) {
            if (!0 === h.isOpen) return h.close();
            h.open(e)
        };
        var K = {
            locale: [H, k],
            showMonths: [E, t, T]
        };

        function J(e, t) {
            var n = [];
            if (e instanceof Array) n = e.map(function (e) {
                return h.parseDate(e, t)
            });
            else if (e instanceof Date || "number" == typeof e) n = [h.parseDate(e, t)];
            else if ("string" == typeof e) switch (h.config.mode) {
                case "single":
                case "time":
                    n = [h.parseDate(e, t)];
                    break;
                case "multiple":
                    n = e.split(h.config.conjunction).map(function (e) {
                        return h.parseDate(e, t)
                    });
                    break;
                case "range":
                    n = e.split(h.l10n.rangeSeparator).map(function (e) {
                        return h.parseDate(e, t)
                    })
            } else h.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            h.selectedDates = n.filter(function (e) {
                return e instanceof Date && N(e, !1)
            }), "range" === h.config.mode && h.selectedDates.sort(function (e, t) {
                return e.getTime() - t.getTime()
            })
        }

        function U(e) {
            return e.slice().map(function (e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? h.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: h.parseDate(e.from, void 0),
                    to: h.parseDate(e.to, void 0)
                } : e
            }).filter(function (e) {
                return e
            })
        }

        function q(e, t) {
            if (void 0 !== h.config) {
                var n = h.config[e];
                if (void 0 !== n && 0 < n.length)
                    for (var a = 0; n[a] && a < n.length; a++) n[a](h.selectedDates, h.input.value, h, t);
                "onChange" === e && (h.input.dispatchEvent($("change")), h.input.dispatchEvent($("input")))
            }
        }

        function $(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        }

        function z(e) {
            for (var t = 0; t < h.selectedDates.length; t++)
                if (0 === ce(h.selectedDates[t], e)) return "" + t;
            return !1
        }

        function G() {
            h.config.noCalendar || h.isMobile || !h.monthNav || (h.yearElements.forEach(function (e, t) {
                var n = new Date(h.currentYear, h.currentMonth, 1);
                n.setMonth(h.currentMonth + t), h.monthElements[t].textContent = ae(n.getMonth(), h.config.shorthandCurrentMonth, h.l10n) + " ", e.value = n.getFullYear().toString()
            }), h._hidePrevMonthArrow = void 0 !== h.config.minDate && (h.currentYear === h.config.minDate.getFullYear() ? h.currentMonth <= h.config.minDate.getMonth() : h.currentYear < h.config.minDate.getFullYear()), h._hideNextMonthArrow = void 0 !== h.config.maxDate && (h.currentYear === h.config.maxDate.getFullYear() ? h.currentMonth + 1 > h.config.maxDate.getMonth() : h.currentYear > h.config.maxDate.getFullYear()))
        }

        function V(t) {
            return h.selectedDates.map(function (e) {
                return h.formatDate(e, t)
            }).filter(function (e, t, n) {
                return "range" !== h.config.mode || h.config.enableTime || n.indexOf(e) === t
            }).join("range" !== h.config.mode ? h.config.conjunction : h.l10n.rangeSeparator)
        }

        function Z(e) {
            if (void 0 === e && (e = !0), 0 === h.selectedDates.length) return h.clear(e);
            void 0 !== h.mobileInput && h.mobileFormatStr && (h.mobileInput.value = void 0 !== h.latestSelectedDateObj ? h.formatDate(h.latestSelectedDateObj, h.mobileFormatStr) : ""), h.input.value = V(h.config.dateFormat), void 0 !== h.altInput && (h.altInput.value = V(h.config.altFormat)), !1 !== e && q("onValueUpdate")
        }

        function Q(e) {
            e.preventDefault();
            var t = h.prevMonthNav.contains(e.target),
                n = h.nextMonthNav.contains(e.target);
            t || n ? I(t ? -1 : 1) : 0 <= h.yearElements.indexOf(e.target) ? e.target.select() : e.target.classList.contains("arrowUp") ? h.changeYear(h.currentYear + 1) : e.target.classList.contains("arrowDown") && h.changeYear(h.currentYear - 1)
        }
        return function () {
            h.element = h.input = d, h.isOpen = !1,
                function () {
                    var e = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                        t = Object.assign({}, s, JSON.parse(JSON.stringify(d.dataset || {}))),
                        n = {};
                    h.config.parseDate = t.parseDate, h.config.formatDate = t.formatDate, Object.defineProperty(h.config, "enable", {
                        get: function () {
                            return h.config._enable
                        },
                        set: function (e) {
                            h.config._enable = U(e)
                        }
                    }), Object.defineProperty(h.config, "disable", {
                        get: function () {
                            return h.config._disable
                        },
                        set: function (e) {
                            h.config._disable = U(e)
                        }
                    });
                    var a = "time" === t.mode;
                    t.dateFormat || !t.enableTime && !a || (n.dateFormat = t.noCalendar || a ? "H:i" + (t.enableSeconds ? ":S" : "") : ve.defaultConfig.dateFormat + " H:i" + (t.enableSeconds ? ":S" : "")), t.altInput && (t.enableTime || a) && !t.altFormat && (n.altFormat = t.noCalendar || a ? "h:i" + (t.enableSeconds ? ":S K" : " K") : ve.defaultConfig.altFormat + " h:i" + (t.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(h.config, "minDate", {
                        get: function () {
                            return h.config._minDate
                        },
                        set: Y("min")
                    }), Object.defineProperty(h.config, "maxDate", {
                        get: function () {
                            return h.config._maxDate
                        },
                        set: Y("max")
                    });
                    var i = function (t) {
                        return function (e) {
                            h.config["min" === t ? "_minTime" : "_maxTime"] = h.parseDate(e, "H:i")
                        }
                    };
                    Object.defineProperty(h.config, "minTime", {
                        get: function () {
                            return h.config._minTime
                        },
                        set: i("min")
                    }), Object.defineProperty(h.config, "maxTime", {
                        get: function () {
                            return h.config._maxTime
                        },
                        set: i("max")
                    }), "time" === t.mode && (h.config.noCalendar = !0, h.config.enableTime = !0), Object.assign(h.config, n, t);
                    for (var o = 0; o < e.length; o++) h.config[e[o]] = !0 === h.config[e[o]] || "true" === h.config[e[o]];
                    ue.filter(function (e) {
                        return void 0 !== h.config[e]
                    }).forEach(function (e) {
                        h.config[e] = ne(h.config[e] || []).map(u)
                    }), h.isMobile = !h.config.disableMobile && !h.config.inline && "single" === h.config.mode && !h.config.disable.length && !h.config.enable.length && !h.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (var r = 0; r < h.config.plugins.length; r++) {
                        var l = h.config.plugins[r](h) || {};
                        for (var c in l) - 1 < ue.indexOf(c) ? h.config[c] = ne(l[c]).map(u).concat(h.config[c]) : void 0 === t[c] && (h.config[c] = l[c])
                    }
                    q("onParseConfig")
                }(), H(),
                function () {
                    if (h.input = h.config.wrap ? d.querySelector("[data-input]") : d, !h.input) return h.config.errorHandler(new Error("Invalid input element specified"));
                    h.input._type = h.input.type, h.input.type = "text", h.input.classList.add("flatpickr-input"), h._input = h.input, h.config.altInput && (h.altInput = me(h.input.nodeName, h.input.className + " " + h.config.altInputClass), h._input = h.altInput, h.altInput.placeholder = h.input.placeholder, h.altInput.disabled = h.input.disabled, h.altInput.required = h.input.required, h.altInput.tabIndex = h.input.tabIndex, h.altInput.type = "text", h.input.setAttribute("type", "hidden"), !h.config.static && h.input.parentNode && h.input.parentNode.insertBefore(h.altInput, h.input.nextSibling)), h.config.allowInput || h._input.setAttribute("readonly", "readonly"), h._positionElement = h.config.positionElement || h._input
                }(),
                function () {
                    h.selectedDates = [], h.now = h.parseDate(h.config.now) || new Date;
                    var e = h.config.defaultDate || ("INPUT" !== h.input.nodeName && "TEXTAREA" !== h.input.nodeName || !h.input.placeholder || h.input.value !== h.input.placeholder ? h.input.value : null);
                    e && J(e, h.config.dateFormat);
                    var t = 0 < h.selectedDates.length ? h.selectedDates[0] : h.config.minDate && h.config.minDate.getTime() > h.now.getTime() ? h.config.minDate : h.config.maxDate && h.config.maxDate.getTime() < h.now.getTime() ? h.config.maxDate : h.now;
                    h.currentYear = t.getFullYear(), h.currentMonth = t.getMonth(), 0 < h.selectedDates.length && (h.latestSelectedDateObj = h.selectedDates[0]), void 0 !== h.config.minTime && (h.config.minTime = h.parseDate(h.config.minTime, "H:i")), void 0 !== h.config.maxTime && (h.config.maxTime = h.parseDate(h.config.maxTime, "H:i")), h.minDateHasTime = !!h.config.minDate && (0 < h.config.minDate.getHours() || 0 < h.config.minDate.getMinutes() || 0 < h.config.minDate.getSeconds()), h.maxDateHasTime = !!h.config.maxDate && (0 < h.config.maxDate.getHours() || 0 < h.config.maxDate.getMinutes() || 0 < h.config.maxDate.getSeconds()), Object.defineProperty(h, "showTimeInput", {
                        get: function () {
                            return h._showTimeInput
                        },
                        set: function (e) {
                            h._showTimeInput = e, h.calendarContainer && fe(h.calendarContainer, "showTimeInput", e), h.isOpen && L()
                        }
                    })
                }(), h.utils = {
                    getDaysInMonth: function (e, t) {
                        return void 0 === e && (e = h.currentMonth), void 0 === t && (t = h.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : h.l10n.daysInMonth[e]
                    }
                }, h.isMobile || function () {
                    var e = window.document.createDocumentFragment();
                    if (h.calendarContainer = me("div", "flatpickr-calendar"), h.calendarContainer.tabIndex = -1, !h.config.noCalendar) {
                        if (e.appendChild((h.monthNav = me("div", "flatpickr-months"), h.yearElements = [], h.monthElements = [], h.prevMonthNav = me("span", "flatpickr-prev-month"), h.prevMonthNav.innerHTML = h.config.prevArrow, h.nextMonthNav = me("span", "flatpickr-next-month"), h.nextMonthNav.innerHTML = h.config.nextArrow, E(), Object.defineProperty(h, "_hidePrevMonthArrow", {
                                get: function () {
                                    return h.__hidePrevMonthArrow
                                },
                                set: function (e) {
                                    h.__hidePrevMonthArrow !== e && (fe(h.prevMonthNav, "disabled", e), h.__hidePrevMonthArrow = e)
                                }
                            }), Object.defineProperty(h, "_hideNextMonthArrow", {
                                get: function () {
                                    return h.__hideNextMonthArrow
                                },
                                set: function (e) {
                                    h.__hideNextMonthArrow !== e && (fe(h.nextMonthNav, "disabled", e), h.__hideNextMonthArrow = e)
                                }
                            }), h.currentYearElement = h.yearElements[0], G(), h.monthNav)), h.innerContainer = me("div", "flatpickr-innerContainer"), h.config.weekNumbers) {
                            var t = function () {
                                    h.calendarContainer.classList.add("hasWeeks");
                                    var e = me("div", "flatpickr-weekwrapper");
                                    e.appendChild(me("span", "flatpickr-weekday", h.l10n.weekAbbreviation));
                                    var t = me("div", "flatpickr-weeks");
                                    return e.appendChild(t), {
                                        weekWrapper: e,
                                        weekNumbers: t
                                    }
                                }(),
                                n = t.weekWrapper,
                                a = t.weekNumbers;
                            h.innerContainer.appendChild(n), h.weekNumbers = a, h.weekWrapper = n
                        }
                        h.rContainer = me("div", "flatpickr-rContainer"), h.rContainer.appendChild(T()), h.daysContainer || (h.daysContainer = me("div", "flatpickr-days"), h.daysContainer.tabIndex = -1), M(), h.rContainer.appendChild(h.daysContainer), h.innerContainer.appendChild(h.rContainer), e.appendChild(h.innerContainer)
                    }
                    h.config.enableTime && e.appendChild(function () {
                        h.calendarContainer.classList.add("hasTime"), h.config.noCalendar && h.calendarContainer.classList.add("noCalendar"), h.timeContainer = me("div", "flatpickr-time"), h.timeContainer.tabIndex = -1;
                        var e = me("span", "flatpickr-time-separator", ":"),
                            t = pe("flatpickr-hour");
                        h.hourElement = t.getElementsByTagName("input")[0];
                        var n = pe("flatpickr-minute");
                        if (h.minuteElement = n.getElementsByTagName("input")[0], h.hourElement.tabIndex = h.minuteElement.tabIndex = -1, h.hourElement.value = X(h.latestSelectedDateObj ? h.latestSelectedDateObj.getHours() : h.config.time_24hr ? h.config.defaultHour : function (e) {
                                switch (e % 24) {
                                    case 0:
                                    case 12:
                                        return 12;
                                    default:
                                        return e % 12
                                }
                            }(h.config.defaultHour)), h.minuteElement.value = X(h.latestSelectedDateObj ? h.latestSelectedDateObj.getMinutes() : h.config.defaultMinute), h.hourElement.setAttribute("data-step", h.config.hourIncrement.toString()), h.minuteElement.setAttribute("data-step", h.config.minuteIncrement.toString()), h.hourElement.setAttribute("data-min", h.config.time_24hr ? "0" : "1"), h.hourElement.setAttribute("data-max", h.config.time_24hr ? "23" : "12"), h.minuteElement.setAttribute("data-min", "0"), h.minuteElement.setAttribute("data-max", "59"), h.timeContainer.appendChild(t), h.timeContainer.appendChild(e), h.timeContainer.appendChild(n), h.config.time_24hr && h.timeContainer.classList.add("time24hr"), h.config.enableSeconds) {
                            h.timeContainer.classList.add("hasSeconds");
                            var a = pe("flatpickr-second");
                            h.secondElement = a.getElementsByTagName("input")[0], h.secondElement.value = X(h.latestSelectedDateObj ? h.latestSelectedDateObj.getSeconds() : h.config.defaultSeconds), h.secondElement.setAttribute("data-step", h.minuteElement.getAttribute("data-step")), h.secondElement.setAttribute("data-min", h.minuteElement.getAttribute("data-min")), h.secondElement.setAttribute("data-max", h.minuteElement.getAttribute("data-max")), h.timeContainer.appendChild(me("span", "flatpickr-time-separator", ":")), h.timeContainer.appendChild(a)
                        }
                        return h.config.time_24hr || (h.amPM = me("span", "flatpickr-am-pm", h.l10n.amPM[ee(11 < (h.latestSelectedDateObj ? h.hourElement.value : h.config.defaultHour))]), h.amPM.title = h.l10n.toggleTitle, h.amPM.tabIndex = -1, h.timeContainer.appendChild(h.amPM)), h.timeContainer
                    }()), fe(h.calendarContainer, "rangeMode", "range" === h.config.mode), fe(h.calendarContainer, "animate", !0 === h.config.animate), fe(h.calendarContainer, "multiMonth", 1 < h.config.showMonths), h.calendarContainer.appendChild(e);
                    var i = void 0 !== h.config.appendTo && void 0 !== h.config.appendTo.nodeType;
                    if ((h.config.inline || h.config.static) && (h.calendarContainer.classList.add(h.config.inline ? "inline" : "static"), h.config.inline && (!i && h.element.parentNode ? h.element.parentNode.insertBefore(h.calendarContainer, h._input.nextSibling) : void 0 !== h.config.appendTo && h.config.appendTo.appendChild(h.calendarContainer)), h.config.static)) {
                        var o = me("div", "flatpickr-wrapper");
                        h.element.parentNode && h.element.parentNode.insertBefore(o, h.element), o.appendChild(h.element), h.altInput && o.appendChild(h.altInput), o.appendChild(h.calendarContainer)
                    }
                    h.config.static || h.config.inline || (void 0 !== h.config.appendTo ? h.config.appendTo : window.document.body).appendChild(h.calendarContainer)
                }(),
                function () {
                    if (h.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (t) {
                            Array.prototype.forEach.call(h.element.querySelectorAll("[data-" + t + "]"), function (e) {
                                return o(e, "click", h[t])
                            })
                        }), h.isMobile) return function () {
                        var e = h.config.enableTime ? h.config.noCalendar ? "time" : "datetime-local" : "date";
                        h.mobileInput = me("input", h.input.className + " flatpickr-mobile"), h.mobileInput.step = h.input.getAttribute("step") || "any", h.mobileInput.tabIndex = 1, h.mobileInput.type = e, h.mobileInput.disabled = h.input.disabled, h.mobileInput.required = h.input.required, h.mobileInput.placeholder = h.input.placeholder, h.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", 0 < h.selectedDates.length && (h.mobileInput.defaultValue = h.mobileInput.value = h.formatDate(h.selectedDates[0], h.mobileFormatStr)), h.config.minDate && (h.mobileInput.min = h.formatDate(h.config.minDate, "Y-m-d")), h.config.maxDate && (h.mobileInput.max = h.formatDate(h.config.maxDate, "Y-m-d")), h.input.type = "hidden", void 0 !== h.altInput && (h.altInput.type = "hidden");
                        try {
                            h.input.parentNode && h.input.parentNode.insertBefore(h.mobileInput, h.input.nextSibling)
                        } catch (e) {}
                        o(h.mobileInput, "change", function (e) {
                            h.setDate(e.target.value, !1, h.mobileFormatStr), q("onChange"), q("onClose")
                        })
                    }();
                    var e = te(j, 50);
                    h._debouncedChange = te(g, he), h.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && o(h.daysContainer, "mouseover", function (e) {
                        "range" === h.config.mode && P(e.target)
                    }), o(window.document.body, "keydown", A), h.config.static || o(h._input, "keydown", A), h.config.inline || h.config.static || o(window, "resize", e), void 0 !== window.ontouchstart ? o(window.document, "click", S) : o(window.document, "mousedown", r(S)), o(window.document, "focus", S, {
                        capture: !0
                    }), !0 === h.config.clickOpens && (o(h._input, "focus", h.open), o(h._input, "mousedown", r(h.open))), void 0 !== h.daysContainer && (o(h.monthNav, "mousedown", r(Q)), o(h.monthNav, ["keyup", "increment"], n), o(h.daysContainer, "mousedown", r(B))), void 0 !== h.timeContainer && void 0 !== h.minuteElement && void 0 !== h.hourElement && (o(h.timeContainer, ["increment"], f), o(h.timeContainer, "blur", f, {
                        capture: !0
                    }), o(h.timeContainer, "mousedown", r(p)), o([h.hourElement, h.minuteElement], ["focus", "click"], function (e) {
                        return e.target.select()
                    }), void 0 !== h.secondElement && o(h.secondElement, "focus", function () {
                        return h.secondElement && h.secondElement.select()
                    }), void 0 !== h.amPM && o(h.amPM, "mousedown", r(function (e) {
                        f(e), g()
                    })))
                }(), (h.selectedDates.length || h.config.noCalendar) && (h.config.enableTime && i(h.config.noCalendar ? h.latestSelectedDateObj || h.config.minDate : void 0), Z(!1)), t(), h.showTimeInput = 0 < h.selectedDates.length || h.config.noCalendar;
            var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !h.isMobile && e && L(), q("onReady")
        }(), h
    }

    function n(e, t) {
        for (var n = Array.prototype.slice.call(e), a = [], i = 0; i < n.length; i++) {
            var o = n[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = r(o, t || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }
    "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
        return n(this, e)
    }, HTMLElement.prototype.flatpickr = function (e) {
        return n([this], e)
    });
    var ve = function (e, t) {
        return e instanceof NodeList ? n(e, t) : n("string" == typeof e ? window.document.querySelectorAll(e) : [e], t)
    };
    return ve.defaultConfig = C, ve.l10ns = {
        en: Object.assign({}, oe),
        default: Object.assign({}, oe)
    }, ve.localize = function (e) {
        ve.l10ns.default = Object.assign({}, ve.l10ns.default, e)
    }, ve.setDefaults = function (e) {
        ve.defaultConfig = Object.assign({}, ve.defaultConfig, e)
    }, ve.parseDate = le({}), ve.formatDate = re({}), ve.compareDates = ce, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function (e) {
        return n(this, e)
    }), Date.prototype.fp_incr = function (e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = ve), ve
});