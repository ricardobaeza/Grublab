(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("+zOR"),o=u("CB3U"),a=function(){function n(n,l){this.userService=n,this.afAuth=l,this.login=!0}return n.prototype.ngOnInit=function(){this.userService.getAllUsers().subscribe(function(n){return console.log("users",n)})},n.prototype.register=function(){this.login=!0,this.successMessage="Successfully created account"},n}(),i=function(){return function(){}}(),r=u("pMnS"),s=[".main-loader[_ngcontent-%COMP%]{display:block;margin:auto;text-align:center;width:100px;height:100px}.form[_ngcontent-%COMP%]{padding:30px}ion-input[_ngcontent-%COMP%]{--background:#ECF0F1;margin:5px;border-radius:4px}"],c=u("oBZk"),g=u("ZZ/e"),b=u("gIcY"),d=function(){function n(n,l){this.userService=n,this.afAuth=l}return n.prototype.ngOnInit=function(){},n.prototype.signIn=function(){this.login(this.email,this.password)},n.prototype.login=function(n,l){var u=this;this.afAuth.auth.signInWithEmailAndPassword(n,l).then(function(n){return u.loginSuccess(n,l)}).catch(function(n){return u.loginFail(n)})},n.prototype.loginSuccess=function(n,l){var u=this;this.userService.getUser(n.user.uid).subscribe(function(n){n.password=l,u.userService.setUserInStorage(n),u.userService.currentUser=n,u.userService.redirect("/tabs/tab1")})},n.prototype.loginFail=function(n){this.errorMessage="auth/user-not-found"===n.code?"There is not an account with that email":"auth/wrong-password"===n.code?"Incorrect password":n.message},n}(),p=e.nb({encapsulation:0,styles:[[""],s],data:{}});function h(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,6,"ion-input",[["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,1)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,1)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.email=u)&&t),t},c.F,c.l)),e.ob(1,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(3,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(5,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(6,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(7,0,null,null,6,"ion-input",[["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,8)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,8)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.password=u)&&t),t},c.F,c.l)),e.ob(8,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(10,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(12,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(13,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(14,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.signIn()&&e),e},c.v,c.b)),e.ob(15,49152,null,0,g.h,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Sign In"])),(n()(),e.pb(17,0,null,null,1,"p",[["class","error-message"]],null,null,null,null,null)),(n()(),e.Eb(18,null,["",""]))],function(n,l){var u=l.component;n(l,3,0,u.email),n(l,6,0,"Email","email"),n(l,10,0,u.password),n(l,13,0,"Password","password")},function(n,l){var u=l.component;n(l,0,0,e.zb(l,5).ngClassUntouched,e.zb(l,5).ngClassTouched,e.zb(l,5).ngClassPristine,e.zb(l,5).ngClassDirty,e.zb(l,5).ngClassValid,e.zb(l,5).ngClassInvalid,e.zb(l,5).ngClassPending),n(l,7,0,e.zb(l,12).ngClassUntouched,e.zb(l,12).ngClassTouched,e.zb(l,12).ngClassPristine,e.zb(l,12).ngClassDirty,e.zb(l,12).ngClassValid,e.zb(l,12).ngClassInvalid,e.zb(l,12).ngClassPending),n(l,18,0,u.errorMessage)})}var f=function(){function n(n,l){this.userService=n,this.afAuth=l,this.registered=new e.m}return n.prototype.ngOnInit=function(){},n.prototype.register=function(){var n=this;this.password===this.confirmPassword?this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(function(l){return n.registerSuccess(l)}).catch(function(l){return n.registerFail(l)}):this.errorMessage="Passwords do not match"},n.prototype.registerSuccess=function(n){var l=this;this.userService.addUser({id:n.user.uid,name:this.name,email:this.email}).then(function(n){return l.registered.emit(!0)}).catch(function(n){return alert("Error adding user: "+n)})},n.prototype.registerFail=function(n){this.errorMessage="auth/email-already-in-use"===n.code?"There is already an account with that email":n.message},n}(),C=e.nb({encapsulation:0,styles:[[""],s],data:{}});function v(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,6,"ion-input",[["placeholder","Name..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,1)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,1)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.name=u)&&t),t},c.F,c.l)),e.ob(1,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(3,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(5,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(6,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(7,0,null,null,6,"ion-input",[["placeholder","Email..."],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,8)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,8)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.email=u)&&t),t},c.F,c.l)),e.ob(8,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(10,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(12,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(13,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(14,0,null,null,6,"ion-input",[["placeholder","Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,15)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,15)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.password=u)&&t),t},c.F,c.l)),e.ob(15,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(17,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(19,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(20,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(21,0,null,null,6,"ion-input",[["placeholder","Confirm Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,22)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,22)._handleInputEvent(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.confirmPassword=u)&&t),t},c.F,c.l)),e.ob(22,16384,null,0,g.Hb,[e.k],null,null),e.Bb(1024,null,b.b,function(n){return[n]},[g.Hb]),e.ob(24,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,b.c,null,[b.e]),e.ob(26,16384,null,0,b.d,[[4,b.c]],null,null),e.ob(27,49152,null,0,g.D,[e.h,e.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.pb(28,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.register()&&e),e},c.v,c.b)),e.ob(29,49152,null,0,g.h,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Sign Up"])),(n()(),e.pb(31,0,null,null,1,"p",[["class","error-message"]],null,null,null,null,null)),(n()(),e.Eb(32,null,["",""]))],function(n,l){var u=l.component;n(l,3,0,u.name),n(l,6,0,"Name...","text"),n(l,10,0,u.email),n(l,13,0,"Email...","email"),n(l,17,0,u.password),n(l,20,0,"Password...","password"),n(l,24,0,u.confirmPassword),n(l,27,0,"Confirm Password...","password")},function(n,l){var u=l.component;n(l,0,0,e.zb(l,5).ngClassUntouched,e.zb(l,5).ngClassTouched,e.zb(l,5).ngClassPristine,e.zb(l,5).ngClassDirty,e.zb(l,5).ngClassValid,e.zb(l,5).ngClassInvalid,e.zb(l,5).ngClassPending),n(l,7,0,e.zb(l,12).ngClassUntouched,e.zb(l,12).ngClassTouched,e.zb(l,12).ngClassPristine,e.zb(l,12).ngClassDirty,e.zb(l,12).ngClassValid,e.zb(l,12).ngClassInvalid,e.zb(l,12).ngClassPending),n(l,14,0,e.zb(l,19).ngClassUntouched,e.zb(l,19).ngClassTouched,e.zb(l,19).ngClassPristine,e.zb(l,19).ngClassDirty,e.zb(l,19).ngClassValid,e.zb(l,19).ngClassInvalid,e.zb(l,19).ngClassPending),n(l,21,0,e.zb(l,26).ngClassUntouched,e.zb(l,26).ngClassTouched,e.zb(l,26).ngClassPristine,e.zb(l,26).ngClassDirty,e.zb(l,26).ngClassValid,e.zb(l,26).ngClassInvalid,e.zb(l,26).ngClassPending),n(l,32,0,u.errorMessage)})}var m=u("QoAl"),z=u("320Y"),y=u("FVLr"),w=u("ZYCi"),B=u("Ip0R"),k=e.nb({encapsulation:0,styles:[s],data:{}});function M(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,7,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"app-signin",[],null,null,null,h,p)),e.ob(2,114688,null,0,d,[t.a,o.a],null,null),(n()(),e.pb(3,0,null,null,4,"ion-label",[],null,null,null,c.H,c.n)),e.ob(4,49152,null,0,g.K,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Don't have an account? "])),(n()(),e.pb(6,0,null,0,1,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=0!=(n.component.login=!1)&&e),e},null,null)),(n()(),e.Eb(-1,null,["Sign up."]))],function(n,l){n(l,2,0)},null)}function E(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"app-signup",[],null,[[null,"registered"]],function(n,l,u){var e=!0;return"registered"===l&&(e=!1!==n.component.register()&&e),e},v,C)),e.ob(2,114688,null,0,f,[t.a,o.a],null,{registered:"registered"}),(n()(),e.pb(3,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Eb(-1,null,["Already have an account? "])),(n()(),e.pb(5,0,null,null,1,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=0!=(n.component.login=!0)&&e),e},null,null)),(n()(),e.Eb(-1,null,["Sign in."]))],function(n,l){n(l,2,0)},null)}function I(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,1,"app-header",[],null,null,null,m.b,m.a)),e.ob(1,114688,null,0,z.a,[g.Cb,y.a,w.m],null,null),(n()(),e.pb(2,0,null,null,8,"ion-content",[],null,null,null,c.B,c.h)),e.ob(3,49152,null,0,g.r,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,4,"div",[["class","form"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,M)),e.ob(6,16384,null,0,B.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,E)),e.ob(8,16384,null,0,B.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(9,0,null,0,1,"p",[["class","success-message"]],null,null,null,null,null)),(n()(),e.Eb(10,null,["",""]))],function(n,l){var u=l.component;n(l,1,0),n(l,6,0,u.login),n(l,8,0,!u.login)},function(n,l){n(l,10,0,l.component.successMessage)})}function P(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,1,"app-login",[],null,null,null,I,k)),e.ob(1,114688,null,0,a,[t.a,o.a],null,null)],function(n,l){n(l,1,0)},null)}var x=e.lb("app-login",a,P,{},{},[]),F=u("PCNd");u.d(l,"LoginPageModuleNgFactory",function(){return S});var S=e.mb(i,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[r.a,x]],[3,e.j],e.x]),e.xb(4608,B.l,B.k,[e.u,[2,B.t]]),e.xb(4608,b.g,b.g,[]),e.xb(4608,g.a,g.a,[e.z,e.g]),e.xb(4608,g.Cb,g.Cb,[g.a,e.j,e.q,B.c]),e.xb(4608,g.Gb,g.Gb,[g.a,e.j,e.q,B.c]),e.xb(5120,e.d,function(n,l){return[g.Jb(n,l)]},[g.Ib,B.c]),e.xb(1073742336,B.b,B.b,[]),e.xb(1073742336,b.f,b.f,[]),e.xb(1073742336,b.a,b.a,[]),e.xb(1073742336,g.Ab,g.Ab,[]),e.xb(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),e.xb(1073742336,F.a,F.a,[]),e.xb(1073742336,i,i,[]),e.xb(256,g.Ib,void 0,[]),e.xb(1024,w.k,function(){return[[{path:"",component:a}]]},[])])})}}]);