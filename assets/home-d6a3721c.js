import{d as j,g as I,r as V,a as p,o as v,c as $,b as d,e,w as l,f as g,F as L,h as B,t as M,u as N,i as F,j as E,k as R,E as Q,_ as J,p as W,l as q}from"./index-b6c75e18.js";const A=j("comment",{state:()=>({doSearch:!1,commentOri:[],comment:[],lottery:[]}),getters:{},actions:{addLottery(k,n=1){this.lottery.push({item:k,num:n,edit:!1,winner:[]})}}}),G={style:{display:"flex"}},K={style:{"margin-top":"1rem"}},X={__name:"VideoSearch",setup(k){const{proxy:n}=I(),C=V(""),b=V(),y=V([]),r=A();function u(o,c=""){console.log(y);const s="https://youtube.googleapis.com/youtube/v3/commentThreads",x=new URLSearchParams({part:"snippet,replies",order:"time",videoId:o,maxResults:100,key:"AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U",pageToken:c}),S=`${s}?${x.toString()}`;return n.$axios.get(S).then(_=>{if(console.log(_.data.items),_.data.items.forEach(H=>{y.value.push(H.snippet.topLevelComment.snippet),r.commentOri.push(H.snippet.topLevelComment.snippet)}),_.data.nextPageToken)return u(o,_.data.nextPageToken);console.log("No more pages"),r.comment=r.commentOri}).catch(_=>{console.error(_)})}const w=function(){r.commentOri=[];const o=C.value;let c,s=!1;o.includes("youtube")?(c=o.split("v=")[1],s=!0):o.includes("youtu")?(c=o.split("youtu.be/")[1],s=!0):alert("網址錯誤"),s&&(r.doSearch=!0,b.value.src=`https://www.youtube.com/embed/${c}?origin=http://example.com`,n.$axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${c}&key=AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U`).then(x=>{console.log(x.data)}).catch(x=>{console.error(x)}),u(c))};return(o,c)=>{const s=p("el-input"),x=p("el-button");return v(),$(L,null,[d("div",G,[e(s,{modelValue:C.value,"onUpdate:modelValue":c[0]||(c[0]=S=>C.value=S),placeholder:"請輸入影片網址"},null,8,["modelValue"]),e(x,{onClick:w,type:"primary"},{default:l(()=>[g("搜尋")]),_:1})]),d("div",K,[d("iframe",{id:"ytplayer",ref_key:"ytplayer",ref:b,type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/M7lc1UVf-VE?origin=http://example.com",frameborder:"0"},null,512)])],64)}}},Z=["innerHTML"],ee={style:{display:"flex","justify-content":"center",margin:"1rem 0"}},te={__name:"commentTable",setup(k){const n=A(),{proxy:C}=I(),b=C.moment,y=V(1),r=V(10),u=o=>{r.value=o},w=B(()=>n.comment.slice((y.value-1)*r.value,y.value*r.value));return(o,c)=>{const s=p("el-table-column"),x=p("el-table"),S=p("el-pagination");return v(),$(L,null,[e(x,{data:w.value,style:{width:"100%"}},{default:l(()=>[e(s,{type:"index",label:"序號",width:"75"},{default:l(_=>[g(M(r.value*(y.value-1)+_.$index+1),1)]),_:1}),e(s,{prop:"authorDisplayName",label:"作者",width:"180"}),e(s,{prop:"textDisplay",label:"留言"},{default:l(_=>[d("p",{innerHTML:_.row.textDisplay},null,8,Z)]),_:1}),e(s,{prop:"publishedAt",label:"發布時間",width:"180"},{default:l(_=>[g(M(N(b)(_.row.publishedAt).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1},8,["data"]),d("div",ee,[e(S,{"current-page":y.value,"onUpdate:currentPage":c[0]||(c[0]=_=>y.value=_),layout:"prev, pager, next, sizes","page-size":r.value,"page-sizes":[10,50,100],total:N(n).comment.length,onSizeChange:u},null,8,["current-page","page-size","total"])])],64)}}},le=["innerHTML"],ne={__name:"lotteryList",setup(k){const n=A(),{proxy:C}=I(),b=C.moment;return(y,r)=>{const u=p("el-table-column"),w=p("el-table");return v(!0),$(L,null,F(N(n).lottery,(o,c)=>(v(),$("div",{key:c},[g(M(o.item)+" "+M(o.num)+"位 ",1),e(w,{data:o.winner,style:{width:"100%"}},{default:l(()=>[e(u,{type:"index",label:"序號",width:"75"},{default:l(s=>[g(M(s.$index+1),1)]),_:1}),e(u,{prop:"authorDisplayName",label:"中獎者",width:"180"}),e(u,{prop:"textDisplay",label:"留言"},{default:l(s=>[d("p",{innerHTML:s.row.textDisplay},null,8,le)]),_:1}),e(u,{prop:"publishedAt",label:"發布時間",width:"180"},{default:l(s=>[g(M(N(b)(s.row.publishedAt).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:2},1032,["data"])]))),128)}}},oe=d("h3",null,"篩選區塊",-1),ae=d("div",{style:{"white-space":"nowrap"}},"留言包含：",-1),se=d("div",{style:{"white-space":"nowrap"}},"留言者：",-1),re=d("div",{style:{"white-space":"nowrap"}},"時間區間：",-1),ue=d("h3",null,"獎項區塊",-1),ce=d("div",{style:{"white-space":"nowrap"}},"獎品內容",-1),ie=d("div",{style:{"white-space":"nowrap"}},"抽取人數",-1),de={style:{display:"flex","align-items":"center"}},me={key:0},pe={key:1},_e={__name:"commentFilter",setup(k){const n=A(),{proxy:C}=I(),b=C.moment,y=V(""),r=V(""),u=V(null),w=function(){let m,t;u.value!==null&&(u.value[0]&&(m=u.value[0].getTime()),u.value[1]&&(t=b(u.value[1]).add(23,"h").add(59,"m").add(59,"s").add(999,"ms").format(),t=new Date(t).getTime())),n.comment=n.commentOri.filter(function(i,h,f){const U=new Date(i.publishedAt).getTime(),T=i.textDisplay.includes(y.value)&&i.authorDisplayName.includes(r.value);if(m&&t){const P=U>=m&&U<=t;return T&&P}else return T})},o=V(""),c=V(1),s=function(){const m=n.lottery.map(t=>t.item);o.value===""?Q({message:"請填寫獎項名稱",type:"warning"}):m.includes(o.value)?Q({message:"已有此獎項名稱",type:"warning"}):n.addLottery(o.value,c.value)},x=function(m,t){n.lottery.splice(t,1)},S=function(m,t){m.edit=!m.edit},_=function(m){return Math.floor(Math.random()*m)},H=function(m,t){const i=[];let h=0;for(let f=0;f<t;f++)if(h=_(m),i.length<m)if(i.includes(h)){f-=1;continue}else i.push(h);return i},O=function(){let m=0;n.lottery.forEach((f,U)=>{m+=f.num});const t=H(n.comment.length,m);let i=0,h=0;console.log(t),n.lottery.forEach((f,U)=>{for(f.winner=[],i;i<h+f.num&&i<t.length;i++)f.winner.push(n.comment[t[i]]);h+=f.num})};return(m,t)=>{const i=p("el-input"),h=p("el-col"),f=p("el-date-picker"),U=p("el-row"),T=p("el-card"),P=p("el-input-number"),z=p("el-button");return v(),$(L,null,[e(T,null,{default:l(()=>[oe,e(U,null,{default:l(()=>[e(h,{span:6,class:"flex-center-center"},{default:l(()=>[ae,e(i,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=a=>y.value=a),onChange:w,placeholder:"請輸入",style:{width:"80%"}},null,8,["modelValue"])]),_:1}),e(h,{span:6,class:"flex-center-center"},{default:l(()=>[se,e(i,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=a=>r.value=a),onChange:w,placeholder:"請輸入",style:{width:"80%"}},null,8,["modelValue"])]),_:1}),e(h,{span:12,class:"flex-center-center"},{default:l(()=>[re,e(f,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),type:"daterange","range-separator":"到","start-placeholder":"開始時間","end-placeholder":"結束時間",onChange:w},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(T,{style:{"margin-top":"1rem"}},{default:l(()=>[ue,e(U,null,{default:l(()=>[e(h,{span:6,class:"flex-center-center"},{default:l(()=>[ce,e(i,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=a=>o.value=a),placeholder:"請輸入",style:{width:"80%"}},null,8,["modelValue"])]),_:1}),e(h,{span:6,class:"flex-center-center"},{default:l(()=>[ie,e(P,{modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=a=>c.value=a),min:1},null,8,["modelValue"])]),_:1}),e(z,{onClick:s,type:"primary"},{default:l(()=>[g("新增")]),_:1})]),_:1}),d("ul",null,[(v(!0),$(L,null,F(N(n).lottery,(a,Y)=>(v(),$("li",{key:Y,style:{"text-align":"left"}},[d("div",de,[a.edit?(v(),$("div",pe,[e(i,{modelValue:a.item,"onUpdate:modelValue":D=>a.item=D,placeholder:"請輸入",style:{width:"30%"}},null,8,["modelValue","onUpdate:modelValue"]),e(P,{modelValue:a.num,"onUpdate:modelValue":D=>a.num=D,min:1},null,8,["modelValue","onUpdate:modelValue"]),g("位 ")])):(v(),$("div",me,M(a.item)+" "+M(a.num)+"位 ",1)),a.edit?(v(),E(z,{key:3,onClick:D=>S(a,Y),type:"primary"},{default:l(()=>[g("完成")]),_:2},1032,["onClick"])):(v(),E(z,{key:2,onClick:D=>S(a,Y),type:"success"},{default:l(()=>[g("編輯")]),_:2},1032,["onClick"])),e(z,{onClick:D=>x(a,Y),type:"danger"},{default:l(()=>[g("刪除")]),_:2},1032,["onClick"])])]))),128))])]),_:1}),N(n).lottery.length>0?(v(),E(z,{key:0,onClick:O,type:"danger"},{default:l(()=>[g("開始抽選")]),_:1})):R("",!0)],64)}}};const ye=k=>(W("data-v-488f43da"),k=k(),q(),k),he=ye(()=>d("div",{class:"header"},[d("h1",null,"Youtube 留言抽獎網站")],-1)),fe={style:{"margin-top":"1rem"}},ve={__name:"home",setup(k){A();const n=V("first");return(C,b)=>{const y=p("el-card"),r=p("el-tab-pane"),u=p("el-tabs");return v(),$(L,null,[he,d("div",null,[e(y,null,{default:l(()=>[e(X)]),_:1})]),d("div",fe,[e(_e),e(u,{modelValue:n.value,"onUpdate:modelValue":b[0]||(b[0]=w=>n.value=w)},{default:l(()=>[e(r,{label:"留言列表",name:"first"},{default:l(()=>[e(te)]),_:1}),e(r,{label:"中獎名單",name:"second"},{default:l(()=>[e(ne)]),_:1})]),_:1},8,["modelValue"])])],64)}}},be=J(ve,[["__scopeId","data-v-488f43da"]]);export{be as default};
