(function($){var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(event,execAsap){var context=this,args=arguments,dispatch=function(){event.type="debouncedresize";$event.dispatch.apply(context,args)};if(resizeTimeout){clearTimeout(resizeTimeout)}execAsap?dispatch():resizeTimeout=setTimeout(dispatch,$special.threshold)},threshold:150}})(jQuery);!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);(function(e){e.fn.sticky=function(t){var n={offset:20,mode:"fixed",stopper:"",speed:500,classes:{element:"jquery-sticky-element",start:"jquery-sticky-start",sticky:"jquery-sticky-sticky",stopped:"jquery-sticky-stopped",placeholder:"jquery-sticky-placeholder"},onStick:"",onStart:"",onStop:""};this.each(function(){if(t)e.extend(n,t);if(e(this).parent().hasClass(n.classes.element))return;var r={init:function(t){r.element=t.wrap('<div class="'+n.classes.element+'" />').parent();r.units={start:r.element.offset().top};n.states=[n.classes.start,n.classes.sticky,n.classes.stopped].join(" ");if(n.stopper!=""){var s=e(n.stopper),o;if(s.length>0){for(i=0;i<s.length&&typeof r.stopper=="undefined";i++){if(e(s[i]).offset().top>r.element.offset().top+r.element.outerHeight(false)){r.stopper=e(s[i])}}}if(typeof r.stopper!="undefined"&&r.stopper.length>0){o=parseInt(r.stopper.css("margin-top"))||0;r.units.stop=r.stopper.offset().top-o}}r.placeholder=r.element.clone().empty().attr("class",n.classes.placeholder).css({opacity:0,height:r.element.height()}).insertBefore(r.element);r.element.appendTo("body").css({width:r.placeholder.width(),left:r.placeholder.offset().left,top:r.placeholder.offset().top,"margin-bottom":"0px",position:"absolute","z-index":"999"});e(window).bind("resize scroll",function(){r.update()});r.update()},update:function(){var t;r.element.css({width:r.placeholder.width(),left:r.placeholder.offset().left});r.placeholder.css("height",r.element.height());r.units.start=r.placeholder.offset().top;if(r.element.outerHeight(false)+n.offset<e(window).height()){r.units.doctop=e(document).scrollTop();if(r.element.hasClass(n.classes.sticky)&&n.mode=="animate"){r.animate(r.units.doctop+n.offset)}if(typeof r.stopper!="undefined"&&r.stopper.length>0){t=parseInt(r.stopper.css("margin-top"))||0;r.units.stop=r.stopper.offset().top-t}if(!r.element.hasClass(n.classes.stopped)&&typeof r.stopper!="undefined"&&r.stopper.length>0&&r.units.doctop+n.offset+r.element.outerHeight(false)>=r.units.stop){r.stop(r.units.stop-r.element.outerHeight(false),"stop");if(typeof n.onStop=="function")n.onStop()}else if(!r.element.hasClass(n.classes.sticky)&&r.units.doctop>r.units.start-n.offset&&(typeof r.stopper=="undefined"||r.stopper.length==0||r.stopper.length>0&&r.units.doctop+n.offset+r.element.outerHeight(false)<r.units.stop)){r.stick(n.offset);if(n.mode=="animate")r.animate(r.units.doctop+n.offset);if(typeof n.onStick=="function")n.onStick()}else if(r.units.doctop<=r.units.start-n.offset){r.stop(r.units.start,"start");if(typeof n.onStart=="function")n.onStart()}}else if(!r.element.hasClass(n.classes.start)){r.stop(r.units.start,"start")}},animate:function(e){clearTimeout(r.timer);r.timer=setTimeout(function(){if(e>=r.units.stop){e=r.units.stop-r.element.outerHeight(false)}else if(e<=r.units.start){e=r.units.start}r.element.stop().animate({top:e},n.speed)},100)},stick:function(e){r.element.removeClass(n.states).addClass(n.classes.sticky);if(n.mode=="fixed"){r.element.css({top:e,position:"fixed"})}},stop:function(e,t){r.element.removeClass(n.states).addClass(t=="start"?n.classes.start:n.classes.stopped);if(n.mode=="fixed"){r.element.css({top:e,position:"absolute"})}else{r.animate(t=="start"?r.units.start:r.units.stop-r.element.outerHeight(false))}}};r.init(e(this))})}})(jQuery);