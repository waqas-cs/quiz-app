(function(g){var window=this;'use strict';var e4=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ze=!1;this.player=a;this.T(a,"minimized",this.qg);this.T(a,"onStateChange",this.lI)},f4=function(a){g.jL.call(this,a);
this.j=new e4(this.player);this.j.hide();g.XK(this.player,this.j.element,4);a.Se()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(e4,g.W);g.h=e4.prototype;
g.h.UF=function(){this.tooltip=new g.gP(this.player,this);g.H(this,this.tooltip);g.XK(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.eM(this.player);g.H(this,this.zc);this.Pg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Pg);this.Pg.Ba(this.element);this.T(this.Pg.element,"click",this.AB);var a=new g.W({G:"button",Fa:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.nI()]});g.H(this,a);a.Ba(this.Pg.element);this.T(a.element,"click",this.Ti);
a=new g.u_(this.player,this);g.H(this,a);a.Ba(this.Pg.element);this.jq=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.jq);this.jq.Ba(this.Pg.element);this.T(this.jq.element,"click",this.AB);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ba(this.jq.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ba(this.jq.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ba(this.jq.element);this.iP=new g.FN(this.player,
this,!1);g.H(this,this.iP);this.iP.Ba(b.element);b=new g.DN(this.player,this);g.H(this,b);b.Ba(a.element);this.nextButton=new g.FN(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ba(c.element);this.Sg=new g.TO(this.player,this);g.H(this,this.Sg);this.Sg.Ba(this.Pg.element);this.Hc=new g.PN(this.player,this);g.H(this,this.Hc);g.XK(this.player,this.Hc.element,4);this.pB=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.pB);g.XK(this.player,this.pB.element,4);a=new g.W({G:"button",
Fa:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.nI()]});g.H(this,a);a.Ba(this.pB.element);this.T(a.element,"click",this.Ti);a=new g.W({G:"button",Fa:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.tI()]});g.H(this,a);a.Ba(this.pB.element);this.T(a.element,"click",this.nY);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.h.show=function(){this.Zd=new g.pp(this.Vq,null,this);this.Zd.start();this.ze||(this.UF(),this.ze=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.W.prototype.hide.call(this);this.player.Se()||(this.ze&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.h.qa=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.W.prototype.qa.call(this)};
g.h.Ti=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.h.nY=function(){this.player.playVideo()};
g.h.AB=function(a){if(a.target===this.Pg.element||a.target===this.jq.element)this.player.V().S("kevlar_miniplayer_play_pause_on_scrim")?g.qH(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.h.qg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Se())};
g.h.Hd=function(){this.Hc.Pb();this.Sg.Pb()};
g.h.Vq=function(){this.Hd();this.Zd&&this.Zd.start()};
g.h.Tc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.xb=function(){g.eO(this.Hc,0,this.player.bb().getPlayerSize().width,!1);g.SN(this.Hc)};
g.h.lI=function(a){this.player.Se()&&(0===a?this.hide():this.show())};
g.h.kc=function(){return this.tooltip};
g.h.bf=function(){return!1};
g.h.Ef=function(){return!1};
g.h.Oi=function(){return!1};
g.h.zy=function(){};
g.h.Un=function(){};
g.h.gt=function(){};
g.h.Do=function(){return null};
g.h.Ww=function(){return null};
g.h.Mj=function(){return new g.Dm(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.ir=function(a,b,c,d,e){var f=0,k=d=0,l=g.Rm(a);if(b){c=g.xp(b,"ytp-prev-button")||g.xp(b,"ytp-next-button");var m=g.xp(b,"ytp-play-button"),n=g.xp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Pm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.xp(b,"ytp-miniplayer-button-top-left"),f=g.Pm(b,this.element),b=g.Rm(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.wh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Ll=function(){};
g.h.dl=function(){return!1};g.v(f4,g.jL);f4.prototype.create=function(){};
f4.prototype.gi=function(){return!1};
f4.prototype.load=function(){this.player.hideControls();this.j.show()};
f4.prototype.unload=function(){this.player.showControls();this.j.hide()};g.iL("miniplayer",f4);})(_yt_player);
