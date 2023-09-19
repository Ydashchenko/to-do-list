"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{91809:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(35250),i=r(19841);function a(e){var n=e.url,r=e.name,a=e.size,s=e.large,o=e.className;return(0,t.jsxs)("div",{className:(0,i.Z)("relative",o),style:{width:a,height:a},children:[(0,t.jsx)("img",{src:n,alt:"".concat(r," logo"),className:(0,i.Z)("h-full w-full bg-white",s?"rounded-[5px]":"rounded-sm")}),(0,t.jsx)("div",{className:(0,i.Z)("absolute inset-0 ring-1 ring-inset ring-black/10",s?"rounded-[5px]":"rounded-sm")})]})}},6038:function(e,n,r){r.d(n,{B0:function(){return T},Ph:function(){return M},k$:function(){return y},zf:function(){return A}});var t=r(4337),i=r(35250),a=r(19841),s=r(19579),o=r.n(s),l=r(1454),u=r(13002),c=r(70671),d=r(94968),f=r(21389),m=r(62509),v=r(32877),h=r(78931),x=r(91809),p=r(88327);function g(){var e=(0,t._)(["relative p-1 "," text-white flex items-center justify-center"]);return g=function(){return e},e}function b(){var e=(0,t._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"]);return b=function(){return e},e}function w(){var e=(0,t._)(["text-white flex justify-center items-center relative tracking-widest"]);return w=function(){return e},e}function j(){var e=(0,t._)(["relative flex"]);return j=function(){return e},e}var k=f.Z.div(g(),function(e){return e.$isMessageRedesign?"rounded-full h-7 w-7":"rounded-sm h-[30px] w-[30px]"}),N=f.Z.span(b(),function(e){return"warning"===e.$type&&"bg-orange-500 text-white"},function(e){return"danger"===e.$type&&"bg-red-500 text-white"}),y=function(e){var n=e.iconName,r=e.background,t=e.notice,a=(0,h.hz)().has(v.FZ),s=p.nI;switch(n){case"globe":s=l.RsK;break;case"terminal":s=l.cDN;break;case"text":s=l.RUS;break;case"browsing":s=l.jRj;break;case"code":s=u.oT$;break;case"plugin":s=l.yG;break;case"user":s=l.fzv}return(0,i.jsxs)(k,{$isMessageRedesign:a,style:{backgroundColor:r},children:[(0,i.jsx)(p.ZP,{icon:s,size:"medium",className:a?"!h-5 !w-5":""}),t&&(0,i.jsx)(N,{$type:t,children:"!"})]})},M=function(e){var n=e.plugin,r=e.notice,t=(0,h.hz)().has(v.FZ);return(0,i.jsxs)(k,{$isMessageRedesign:t,className:"p-0",children:[(0,i.jsx)(x.Z,{url:n.manifest.logo_url,name:n.manifest.name_for_human,size:"100%"}),r&&(0,i.jsx)(N,{$type:r,children:"!"})]})},S=f.Z.div(w()),Z=f.Z.div(j()),C={small:20,redesign:28,medium:38,large:48},_={small:"small",redesign:"small",medium:"medium",large:"medium"},P=function(e){var n,r=e.user,t=e.size,s=e.notice,u=e.rounded,c=s&&(0,i.jsx)(N,{$type:s,children:"!"}),d=(0,h.hz)().has(v.FZ);if((null==r?void 0:r.picture)!=null)return(0,i.jsxs)(Z,{children:[(0,i.jsx)(o(),{src:r.picture,alt:"User",width:C[t],height:C[t],className:d||void 0!==u&&u?"rounded-full":"rounded-sm"}),c]});var f=(null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"").split(" ").map(function(e){return e[0]}).join("");return(0,i.jsxs)(S,{className:(0,a.Z)("bg-blue-300","redesign"===t?"h-7 w-7 text-xs":"small"===t?"h-5 w-5 text-xs":"h-[30px] w-[30px] text-sm",d?"rounded-full":"rounded-sm"),children:[f||(0,i.jsx)(p.ZP,{icon:l.fzv,size:_[t]}),c]})};function T(e){var n=e.size,r=void 0===n?"medium":n,t=(0,c.Z)();return(0,i.jsx)(Z,{children:(0,i.jsx)(o(),{src:"/images/office-building-24x24.svg",alt:t.formatMessage(z.workspaceAvatarAlt),width:C[r],height:C[r],className:(0,a.Z)("medium"===r&&"rounded-sm","large"===r&&"rounded")})})}function A(e){var n=e.className,r=e.iconSize,t=void 0===r?"medium":r,s=e.notice,o=(0,h.ec)(function(e){return e.currentWorkspace}),l=(0,h.ec)(h.F_.isPersonalWorkspace),u=(0,m.kP)().session;return!o||l&&(null==u?void 0:u.user)!==void 0?(0,i.jsx)(P,{user:null==u?void 0:u.user,size:t,notice:s}):(0,i.jsxs)("div",{className:(0,a.Z)("flex items-center justify-center rounded",n),children:[(0,i.jsx)(T,{size:t}),s&&(0,i.jsx)(N,{$type:s,children:"!"})]})}var z=(0,d.vU)({workspaceAvatarAlt:{id:"Avatar.workspaceAvatarAlt",defaultMessage:"Avatar of an office building",description:"Alt text for workspace avatar"}})},50744:function(e,n,r){var t=r(35250),i=r(55344),a=r.n(i);r(70079);var s=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:n})};n.Z=a()(function(){return Promise.resolve(s)},{ssr:!1})},82277:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(4337),i=r(35250),a=r(70079),s=r(21389),o=r(46020),l=r(33669),u=r(50744),c=r(13090);function d(){var e=(0,t._)(["overflow-hidden w-full h-full relative flex z-0"]);return d=function(){return e},e}function f(){var e=(0,t._)(["relative h-full w-full transition-width flex flex-col overflow-auto items-stretch"]);return f=function(){return e},e}function m(e){var n=e.children,r=e.showNavigation,t=e.renderTitle,s=e.renderMobileHeaderRightContent,d=e.renderSidebar,f=(0,l.w$)(),x=[],p=null;return a.Children.forEach(n,function(e){a.isValidElement(e)&&(e.type===m.Sidebars?p=e:x.push(e))}),(0,i.jsxs)(v,{children:[f&&r&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.l6,{children:d})}),(0,i.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 overflow-hidden",children:[(0,i.jsxs)("div",{className:"flex h-full max-w-full flex-1 flex-col",children:[!f&&r&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.Vs,{onClickOpenSidebar:function(){return o.vm.toggleActiveSidebar("mobile-nav")},renderTitle:t,renderSidebar:d,renderRightContent:s})}),(0,i.jsx)(h,{className:"flex-1",children:x})]}),p]})]})}var v=s.Z.div(d()),h=s.Z.main(f());m.Sidebars=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:n})}},13090:function(e,n,r){r.d(n,{H:function(){return y},MP:function(){return k},Vs:function(){return S},js:function(){return N},l6:function(){return Z}});var t=r(39324),i=r(70216),a=r(35250),s=r(98359),o=r(20525),l=r(32148),u=r(97296),c=r(70737),d=r(70079),f=r(1454),m=r(70671),v=r(32004),h=r(94968),x=r(46020),p=r(33669),g=r(42271),b=r(45635),w=r(88327),j=r(15329);function k(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)(j.zV,(0,t._)({onClick:n,className:"flex-shrink-0 flex-grow"},r))}function N(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)("button",(0,t._)({type:"button",className:"px-3",onClick:n},r))}function y(){var e=(0,m.Z)();return(0,p.w$)()?(0,a.jsx)(b.u,{side:"right",label:e.formatMessage(C.closeSidebar),children:(0,a.jsxs)(j.zV,{onClick:x.vm.toggleDesktopNavCollapsed,className:"w-11 flex-shrink-0 items-center justify-center",children:[(0,a.jsx)(w.ZP,{icon:f.iYc}),(0,a.jsx)(l.f,{children:(0,a.jsx)(v.Z,(0,t._)({},C.closeSidebar))})]})}):null}var M=function(e){var n=e.onClose,r=e.sidebarOpen,i=e.children;return(0,a.jsx)(s.u.Root,{show:r,as:d.Fragment,children:(0,a.jsxs)(o.V,{as:"div",className:"relative",onClose:n,children:[(0,a.jsx)(s.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,a.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,a.jsx)(s.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,a.jsxs)(o.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",children:[(0,a.jsx)(s.u.Child,{as:d.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-2",children:(0,a.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(v.Z,(0,t._)({},C.closeSidebar))}),(0,a.jsx)(w.ZP,{icon:f.q5L,size:"medium",className:"text-white","aria-hidden":"true"})]})})}),i]})}),(0,a.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},S=function(e){var n=e.onClickOpenSidebar,r=e.renderTitle,i=e.renderSidebar,s=e.renderRightContent,o=(0,x.tN)(function(e){return e.activeSidebar});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",children:[(0,a.jsxs)("button",{type:"button",className:"-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(v.Z,(0,t._)({},C.openSidebar))}),(0,a.jsx)(w.ZP,{icon:f.cur,"aria-hidden":"true",size:"medium"})]}),(0,a.jsx)("h1",{className:"flex-1 text-center text-base font-normal",children:r}),s]}),(0,a.jsx)(M,{onClose:function(){x.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===o,children:i})]})};function Z(e){var n=e.children,r=(0,m.Z)(),t=(0,d.useRef)(null),i=(0,x.tN)(function(e){return e.isDesktopNavCollapsed});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.E.div,{className:"dark flex-shrink-0 overflow-x-hidden bg-gray-900",ref:t,initial:!1,animate:{width:i?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:function(){t.current&&(t.current.style.visibility="visible")},onAnimationComplete:function(){t.current&&i&&(t.current.style.visibility="hidden")},children:(0,a.jsx)("div",{className:"h-full w-[260px]",children:(0,a.jsx)("div",{className:"flex h-full min-h-0 flex-col ",children:n})})}),(0,a.jsx)(c.M,{initial:!1,children:i&&(0,a.jsx)(u.E.div,{className:"absolute left-2 top-2 z-10 hidden md:inline-block",initial:{opacity:0},animate:{opacity:1,transition:{duration:.165,ease:"easeIn"}},children:(0,a.jsx)(b.u,{side:"right",label:r.formatMessage(C.openSidebar),children:(0,a.jsx)(g.O,{onClick:x.vm.toggleDesktopNavCollapsed,"aria-label":r.formatMessage(C.openSidebar),children:(0,a.jsx)(w.ZP,{className:"text-black dark:text-white",icon:f.iYc})})})})})]})}var C=(0,h.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar",description:"Open sidebar button label"}})},52696:function(e,n,r){r.d(n,{Ap:function(){return c},Ix:function(){return f},_O:function(){return m},bE:function(){return v},qH:function(){return d}});var t=r(96237),i=r(70079),a=r(70671),s=r(94968),o=r(62509),l=r(75641),u=r(78931);function c(){var e=(0,a.Z)(),n=e.formatMessage(h.adminRoleName),r=e.formatMessage(h.standardRoleName);return(0,i.useMemo)(function(){var e;return e={},(0,t._)(e,l.r3.ADMIN,n),(0,t._)(e,l.r3.STANDARD,r),e},[n,r])}function d(e){var n=(0,a.Z)();return e?e.structure===l.CZ.PERSONAL?n.formatMessage(h.personalPlanName):n.formatMessage(h.businessPlanName):n.formatMessage(h.personalPlanName)}function f(e){var n,r,t,i,s,c,d=(0,o.kP)().session,f=(0,u.ec)(function(e){return e.currentWorkspace}),m=(0,u.ec)(u.F_.isPersonalWorkspace),v=(0,u.$T)(),x=(r=(0,a.Z)(),null!==(n=null==f?void 0:f.name)&&void 0!==n?n:r.formatMessage(h.defaultWorkspaceTitle)),p=null!==(c=null!==(s=null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.name)&&void 0!==s?s:null==d?void 0:null===(i=d.user)||void 0===i?void 0:i.email)&&void 0!==c?c:null;return e&&!v?e.structure===l.CZ.PERSONAL?p:e.name:f?m?p:x:p}function m(){return(0,u.ec)(function(e){return e.workspaces})}function v(e){var n=m().find(function(n){return n.id===e});return!!n&&n.role===l.r3.ADMIN}var h=(0,s.vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal",description:"label for personal tier account"},businessPlanName:{id:"useWorkspaces.businessPlanName",defaultMessage:"Business",description:"label for business tier account"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin",description:"Role name for an admin user"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member",description:"Role name for a standard user"}})},42271:function(e,n,r){r.d(n,{O:function(){return o},h:function(){return l}});var t=r(4337),i=r(21389);function a(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return a=function(){return e},e}function s(){var e=(0,t._)(["h-11 w-11"]);return s=function(){return e},e}var o=i.Z.button(a()),l=i.Z.div(s())},45635:function(e,n,r){r.d(n,{u:function(){return u}});var t=r(4337),i=r(35250),a=r(22444),s=r(19841);r(70079);var o=r(21389);function l(){var e=(0,t._)(["relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs"]);return l=function(){return e},e}var u=function(e){var n=e.label,r=e.side,t=e.sideOffset,o=e.withArrow,l=e.wide,u=e.size,d=void 0===u?"small":u,f=e.interactive,m=e.usePortal,v=e.className,h=e.children,x=e.delayDuration,p=e.closeOnOutsideClick,g=e.open,b=(0,i.jsxs)(a.VY,{onPointerDownOutside:void 0===p||p?void 0:function(e){return e.preventDefault()},side:void 0===r?"bottom":r,sideOffset:void 0===t?14:t,className:(0,s.Z)("relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity",void 0!==l&&l?"max-w-sm":"max-w-xs",v),children:[(0,i.jsx)("span",{className:(0,s.Z)("flex items-center whitespace-pre-wrap px-2 py-1 text-center font-medium normal-case text-white",{"text-xs":"xsmall"===d,"text-sm":"small"===d}),children:n}),(void 0===o||o)&&(0,i.jsx)(a.Eh,{asChild:!0,children:(0,i.jsx)(c,{})})]});return(0,i.jsxs)(a.fC,{delayDuration:void 0===x?300:x,disableHoverableContent:!(void 0!==f&&f),open:g,children:[(0,i.jsx)(a.xz,{asChild:!0,children:(0,i.jsx)("span",{className:v,children:h})}),void 0===m||m?(0,i.jsx)(a.h_,{children:b}):b]})},c=o.Z.div(l())},15329:function(e,n,r){r.d(n,{R:function(){return x},Vq:function(){return p},ZB:function(){return v},ZP:function(){return m},zV:function(){return h}});var t=r(4337),i=r(35250),a=r(7813),s=r(19841),o=r(21389);function l(){var e=(0,t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return l=function(){return e},e}function u(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);return u=function(){return e},e}function c(){var e=(0,t._)(["rounded-md border border-white/20 hover:bg-gray-500/10 h-11"]);return c=function(){return e},e}function d(){var e=(0,t._)(["my-1.5 h-px bg-white/20"]);return d=function(){return e},e}function f(){var e=(0,t._)(["",""]);return f=function(){return e},e}function m(e){var n=e.onClick,r=e.href,t=e.target,o=e.children;return(0,i.jsx)(a.v.Item,{children:function(e){var a=e.active;return(0,i.jsx)(v,{as:void 0!==r?"a":"button",onClick:n,href:r,target:t,className:(0,s.Z)(a?"bg-gray-700":"hover:bg-gray-700"),children:o})}})}o.Z.a(l());var v=o.Z.a(u()),h=(0,o.Z)(v)(c()),x=o.Z.div(d()),p=(0,o.Z)(v)(f(),function(e){return e.$active?"bg-gray-800":"hover:bg-gray-800"})},46020:function(e,n,r){r.d(n,{B:function(){return i},EV:function(){return v},bM:function(){return f},tN:function(){return d},vm:function(){return m}});var t,i,a,s=r(39324),o=r(78103),l=r(6948);(t=i||(i={})).AccountPortal="account-portal",t.DeleteChatConfirmation="delete-chat-confirmation",t.DownloadMessages="download-messages",t.InviteUsersToWorkspace="invite-users-to-workspace",t.KeyboardActions="keyboard-actions",t.Settings="settings",t.TempBrowseToast="temp-browse-toast",t.UserContext="user-context",t.WorkspaceSwitcher="workspace-switcher";var u="UiState.isNavigationCollapsed.1",c={isThreadHeaderVisible:!0,isDesktopNavCollapsed:null!==(a=l.m.getItem(u))&&void 0!==a&&a,sharingModalThreadId:void 0,isFilesModalOpen:!1,activeSidebar:!1,activeModals:new Set},d=(0,o.ZP)()(function(){return(0,s._)({},c)}),f={isDesktopNavCollapsed:function(e){return e.isDesktopNavCollapsed},isThreadHeaderVisible:function(e){return e.isThreadHeaderVisible}},m={toggleDesktopNavCollapsed:function(){d.setState(function(e){var n=!e.isDesktopNavCollapsed;return l.m.setItem(u,n),{isDesktopNavCollapsed:n}})},hideThreadHeader:function(){d.setState({isThreadHeaderVisible:!1})},showThreadHeader:function(){d.setState({isThreadHeaderVisible:!0})},openSharingModal:function(e){d.setState({sharingModalThreadId:e})},closeSharingModal:function(){d.setState({sharingModalThreadId:void 0})},openFilesModal:function(){d.setState({isFilesModalOpen:!0})},closeFilesModal:function(){d.setState({isFilesModalOpen:!1})},setActiveSidebar:function(e){d.setState({activeSidebar:e})},toggleActiveSidebar:function(e){d.setState(function(n){return{activeSidebar:n.activeSidebar!==e&&e}})},toggleModal:function(e){d.setState(function(n){var r=new Set(n.activeModals);return r.has(e)?r.delete(e):r.add(e),{activeModals:r}})},openModal:function(e){d.setState(function(n){var r=new Set(n.activeModals);return r.add(e),{activeModals:r}})},closeModal:function(e){d.setState(function(n){var r=new Set(n.activeModals);return r.delete(e),{activeModals:r}})}};function v(e){return d(function(n){return n.activeModals.has(e)})}},33669:function(e,n,r){r.d(n,{_G:function(){return i},aj:function(){return v},dQ:function(){return h},oc:function(){return d},w$:function(){return f},x_:function(){return m}});var t,i,a,s=r(96237),o=r(22830),l=r(70079);(t=i||(i={})).Mobile="mobile",t.Small="small",t.Medium="medium",t.Large="large",t.XLarge="xlarge";var u=(a={},(0,s._)(a,i.Small,640),(0,s._)(a,i.Medium,768),(0,s._)(a,i.Large,1024),(0,s._)(a,i.XLarge,1280),a);function c(e){var n=function(){a(r(e))},r=function(e){return window.matchMedia(e).matches},t=(0,o._)((0,l.useState)(r(e)),2),i=t[0],a=t[1];return(0,l.useEffect)(function(){var r=window.matchMedia(e);return n(),r.addListener?r.addListener(n):r.addEventListener("change",n),function(){r.removeListener?r.removeListener(n):r.removeEventListener("change",n)}},[e]),i}function d(){return c("(min-width: ".concat(u[i.Small],"px)"))}function f(){return c("(min-width: ".concat(u[i.Medium],"px)"))}function m(){return c("(min-width: ".concat(u[i.Large],"px)"))}function v(){return c("(min-width: ".concat(u[i.XLarge],"px)"))}function h(){var e=d(),n=f(),r=m();return v()?i.XLarge:r?i.Large:n?i.Medium:e?i.Small:i.Mobile}}}]);