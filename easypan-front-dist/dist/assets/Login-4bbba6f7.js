import{j as O,r as g,k as A,_ as G,ag as k,o as m,c as C,a as s,V as r,P as o,n as L,O as b,S as p,T as x,a9 as H,a3 as J,U as Q,bb as W,b9 as X}from"./@vue-3886a262.js";import{u as Y,b as Z}from"./vue-router-6d9ab4b6.js";import{m as ee}from"./js-md5-4754c8f0.js";import{_ as oe}from"./index-db517136.js";import"./aplayer-585df14e.js";import"./element-plus-485a4a99.js";import"./lodash-es-36eb724a.js";import"./@vueuse-08bf1a74.js";import"./@element-plus-4ca69592.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5d216acc.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9626137c.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./vue-cookies-fc2d14d9.js";import"./@highlightjs-e10ea536.js";import"./highlight.js-6845818c.js";import"./axios-4a70c6fc.js";import"./docx-preview-8cc7001d.js";import"./jszip-1f4bc9a3.js";import"./xlsx-74460a39.js";import"./vue-pdf-embed-608804e8.js";import"./vue-0ba3f033.js";import"./dplayer-d4a41b2a.js";import"./vue-clipboard3-6d269bab.js";import"./clipboard-65322c36.js";const se="/assets/qq-8fddb348.png";const c=M=>(W("data-v-d74b197d"),M=M(),X(),M),le={class:"login-body"},te=c(()=>s("div",{class:"bg"},null,-1)),ae={class:"login-panel"},re=c(()=>s("div",{class:"login-title"},"Easy云盘",-1)),ie=c(()=>s("span",{class:"iconfont icon-account"},null,-1)),ne=c(()=>s("span",{class:"iconfont icon-password"},null,-1)),de={key:1},ue={class:"send-emali-panel"},ce=c(()=>s("span",{class:"iconfont icon-checkcode"},null,-1)),me=c(()=>s("div",null,[s("p",null,"1、在垃圾箱中查找邮箱验证码"),s("p",null,"2、在邮箱中头像->设置->反垃圾->白名单->设置邮件地址白名单"),s("p",null," 3、将邮箱【laoluo@wuhancoder.com】添加到白名单不知道怎么设置？ ")],-1)),pe=c(()=>s("span",{class:"a-link",style:{"font-size":"14px"}},"未收到邮箱验证码？",-1)),fe=c(()=>s("span",{class:"iconfont icon-account"},null,-1)),ve=c(()=>s("span",{class:"iconfont icon-password"},null,-1)),_e=c(()=>s("span",{class:"iconfont icon-password"},null,-1)),ge={class:"check-code-panel"},ke=c(()=>s("span",{class:"iconfont icon-checkcode"},null,-1)),we=["src"],he={class:"rememberme-panel"},Ce={class:"no-account"},ye={key:0},Ve={key:1},be={key:2},Me={key:5,class:"login-btn-qq"},qe={class:"check-code-panel"},xe=c(()=>s("span",{class:"iconfont icon-checkcode"},null,-1)),Pe=["src"],Ue={__name:"Login",setup(M){const{proxy:u}=O(),N=Y(),U=Z(),f={checkCode:"/api/checkCode",sendMailCode:"/sendEmailCode",register:"/register",login:"/login",resetPwd:"/resetPwd",qqlogin:"/qqlogin"},t=g(1),v=i=>{t.value=i,T()};A(()=>{v(1)});const j=(i,e,n)=>{e!==a.value.registerPassword?n(new Error(i.message)):n()},a=g({}),q=g(),R={email:[{required:!0,message:"请输入邮箱"},{validator:u.Verify.email,message:"请输入正确的邮箱"}],password:[{required:!0,message:"请输入密码"}],emailCode:[{required:!0,message:"请输入邮箱验证码"}],nickName:[{required:!0,message:"请输入昵称"}],registerPassword:[{required:!0,message:"请输入密码"},{validator:u.Verify.password,message:"密码只能是数字，字母，特殊字符 8-18位"}],reRegisterPassword:[{required:!0,message:"请再次输入密码"},{validator:j,message:"两次输入的密码不一致"}],checkCode:[{required:!0,message:"请输入图片验证码"}]},I=g(),S=g(),w=i=>{i==0?I.value=f.checkCode+"?type="+i+"&time="+new Date().getTime():S.value=f.checkCode+"?type="+i+"&time="+new Date().getTime()},y=g({}),P=g(),h=G({show:!1,title:"发送邮箱验证码",buttons:[{type:"primary",text:"发送验证码",click:()=>{E()}}]}),$=()=>{q.value.validateField("email",i=>{i&&(h.show=!0,L(()=>{w(1),P.value.resetFields(),y.value={email:a.value.email}}))})},E=()=>{P.value.validate(async i=>{if(!i)return;const e=Object.assign({},y.value);e.type=t.value==0?0:1,await u.Request({url:f.sendMailCode,params:e,errorCallback:()=>{w(1)}})&&(u.Message.success("验证码发送成功，请登录邮箱查看"),h.show=!1)})},T=()=>{L(()=>{if(w(0),q.value.resetFields(),a.value={},t.value==1){const i=u.VueCookies.get("loginInfo");i&&(a.value=i)}})},z=()=>{q.value.validate(async i=>{if(!i)return;let e={};if(Object.assign(e,a.value),(t.value==0||t.value==2)&&(e.password=e.registerPassword,delete e.registerPassword,delete e.reRegisterPassword),t.value==1){let _=u.VueCookies.get("loginInfo"),V=_==null?null:_.password;e.password!==V&&(e.password=ee(e.password))}let n=null;t.value==0?n=f.register:t.value==1?n=f.login:t.value==2&&(n=f.resetPwd);let d=await u.Request({url:n,params:e,errorCallback:()=>{w(0)}});if(d)if(t.value==0)u.Message.success("注册成功,请登录"),v(1);else if(t.value==1){if(e.rememberMe){const V={email:e.email,password:e.password,rememberMe:e.rememberMe};u.VueCookies.set("loginInfo",V,"7d")}else u.VueCookies.remove("loginInfo");u.Message.success("登录成功"),u.VueCookies.set("userInfo",d.data,0);const _=U.query.redirectUrl||"/";N.push(_)}else t.value==2&&(u.Message.success("重置密码成功,请登录"),v(1))})},B=async()=>{let i=await u.Request({url:f.qqlogin,params:{callbackUrl:U.query.redirectUrl||""}});i&&(u.VueCookies.remove("userInfo"),document.location.href=i.data)};return(i,e)=>{const n=k("el-input"),d=k("el-form-item"),_=k("el-button"),V=k("el-popover"),F=k("el-checkbox"),D=k("el-form"),K=k("Dialog");return m(),C("div",le,[te,s("div",ae,[r(D,{class:"login-register",model:a.value,rules:R,ref_key:"formDataRef",ref:q},{default:o(()=>[re,r(d,{prop:"email"},{default:o(()=>[r(n,{size:"large",clearable:"",placeholder:"请输入邮箱",modelValue:a.value.email,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.email=l),modelModifiers:{trim:!0},maxLength:"150"},{prefix:o(()=>[ie]),_:1},8,["modelValue"])]),_:1}),t.value==1?(m(),b(d,{key:0,prop:"password"},{default:o(()=>[r(n,{type:"password",size:"large",placeholder:"请输入密码",modelValue:a.value.password,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.password=l),modelModifiers:{trim:!0},"show-password":""},{prefix:o(()=>[ne]),_:1},8,["modelValue"])]),_:1})):p("",!0),t.value==0||t.value==2?(m(),C("div",de,[r(d,{prop:"emailCode"},{default:o(()=>[s("div",ue,[r(n,{size:"large",placeholder:"请输入邮箱验证码",modelValue:a.value.emailCode,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.emailCode=l),modelModifiers:{trim:!0}},{prefix:o(()=>[ce]),_:1},8,["modelValue"]),r(_,{class:"send-mail-btn",type:"primary",size:"large",onClick:$},{default:o(()=>[x("获取验证码")]),_:1})]),r(V,{placement:"left",width:500,trigger:"click"},{reference:o(()=>[pe]),default:o(()=>[me]),_:1})]),_:1}),t.value==0?(m(),b(d,{key:0,prop:"nickName"},{default:o(()=>[r(n,{size:"large",clearable:"",placeholder:"请输入昵称",modelValue:a.value.nickName,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.nickName=l),modelModifiers:{trim:!0},maxLength:"20"},{prefix:o(()=>[fe]),_:1},8,["modelValue"])]),_:1})):p("",!0),r(d,{prop:"registerPassword"},{default:o(()=>[r(n,{type:"password",size:"large",placeholder:"请输入密码",modelValue:a.value.registerPassword,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.registerPassword=l),modelModifiers:{trim:!0},"show-password":""},{prefix:o(()=>[ve]),_:1},8,["modelValue"])]),_:1}),r(d,{prop:"reRegisterPassword"},{default:o(()=>[r(n,{type:"password",size:"large",placeholder:"请再次输入密码",modelValue:a.value.reRegisterPassword,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.reRegisterPassword=l),modelModifiers:{trim:!0},"show-password":""},{prefix:o(()=>[_e]),_:1},8,["modelValue"])]),_:1})])):p("",!0),r(d,{prop:"checkCode"},{default:o(()=>[s("div",ge,[r(n,{size:"large",placeholder:"请输入验证码",modelValue:a.value.checkCode,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.checkCode=l),modelModifiers:{trim:!0},onKeyup:H(z,["enter"])},{prefix:o(()=>[ke]),_:1},8,["modelValue","onKeyup"]),s("img",{src:I.value,class:"check-code",onClick:e[7]||(e[7]=l=>w(0))},null,8,we)])]),_:1}),t.value==1?(m(),b(d,{key:2},{default:o(()=>[s("div",he,[r(F,{modelValue:a.value.rememberMe,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value.rememberMe=l)},{default:o(()=>[x("记住我")]),_:1},8,["modelValue"])]),s("div",Ce,[s("a",{href:"javascript:void(0)",class:"a-link",onClick:e[9]||(e[9]=l=>v(2))},"忘记密码？"),s("a",{href:"javascript:void(0)",class:"a-link",onClick:e[10]||(e[10]=l=>v(0))},"没有账号？")])]),_:1})):p("",!0),t.value==0?(m(),b(d,{key:3},{default:o(()=>[s("a",{href:"javascript:void(0)",class:"a-link",onClick:e[11]||(e[11]=l=>v(1))},"已有账号?")]),_:1})):p("",!0),t.value==2?(m(),b(d,{key:4},{default:o(()=>[s("a",{href:"javascript:void(0)",class:"a-link",onClick:e[12]||(e[12]=l=>v(1))},"去登录?")]),_:1})):p("",!0),r(d,null,{default:o(()=>[r(_,{type:"primary",class:"op-btn",onClick:z,size:"large"},{default:o(()=>[t.value==0?(m(),C("span",ye,"注册")):p("",!0),t.value==1?(m(),C("span",Ve,"登录")):p("",!0),t.value==2?(m(),C("span",be,"重置密码")):p("",!0)]),_:1})]),_:1}),t.value==1?(m(),C("div",Me,[x(" 快捷登录 "),s("img",{src:se,onClick:B})])):p("",!0)]),_:1},8,["model"])]),r(K,{show:h.show,title:h.title,buttons:h.buttons,width:"500px",showCancel:!1,onClose:e[16]||(e[16]=l=>h.show=!1)},{default:o(()=>[r(D,{model:y.value,rules:R,ref_key:"formData4SendMailCodeRef",ref:P,"label-width":"80px",onSubmit:e[15]||(e[15]=J(()=>{},["prevent"]))},{default:o(()=>[r(d,{label:"邮箱"},{default:o(()=>[x(Q(a.value.email),1)]),_:1}),r(d,{label:"验证码",prop:"checkCode"},{default:o(()=>[s("div",qe,[r(n,{size:"large",placeholder:"请输入验证码",modelValue:y.value.checkCode,"onUpdate:modelValue":e[13]||(e[13]=l=>y.value.checkCode=l),modelModifiers:{trim:!0}},{prefix:o(()=>[xe]),_:1},8,["modelValue"]),s("img",{src:S.value,class:"check-code",onClick:e[14]||(e[14]=l=>w(1))},null,8,Pe)])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title","buttons"])])}}},ao=oe(Ue,[["__scopeId","data-v-d74b197d"]]);export{ao as default};
