import{d as P,g as z,r as g,a as p,o as S,c as C,b as u,e as a,w as v,f as x,F as V,h as U,t as k,u as w,_ as D,i as I,v as T,p as A,j as H}from"./index-2d8222a4.js";const $=P("comment",{state:()=>({doSearch:!1,commentOri:[],comment:[]}),getters:{},actions:{}}),Q={style:{display:"flex"}},L={style:{"margin-top":"1rem"}},N={__name:"VideoSearch",setup(m){const{proxy:l}=z(),d=g(""),_=g(),r=g([]),c=$();function y(e,o=""){console.log(r);const n="https://youtube.googleapis.com/youtube/v3/commentThreads",t=new URLSearchParams({part:"snippet,replies",order:"time",videoId:e,maxResults:100,key:"AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U",pageToken:o}),h=`${n}?${t.toString()}`;return l.$axios.get(h).then(s=>{if(console.log(s.data.items),s.data.items.forEach(f=>{r.value.push(f.snippet.topLevelComment.snippet),c.commentOri.push(f.snippet.topLevelComment.snippet)}),s.data.nextPageToken)return y(e,s.data.nextPageToken);console.log("No more pages"),c.comment=c.commentOri}).catch(s=>{console.error(s)})}const b=function(){console.log(_.value.src);const e=d.value;let o,n=!1;e.includes("youtube")?(o=e.split("v=")[1],n=!0):e.includes("youtu")?(o=e.split("youtu.be/")[1],n=!0):alert("網址錯誤"),n&&(c.doSearch=!0,_.value.src=`https://www.youtube.com/embed/${o}?origin=http://example.com`,l.$axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${o}&key=AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U`).then(t=>{console.log(t.data)}).catch(t=>{console.error(t)}),y(o))};return(e,o)=>{const n=p("el-input"),t=p("el-button");return S(),C(V,null,[u("div",Q,[a(n,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=h=>d.value=h),placeholder:"請輸入影片網址"},null,8,["modelValue"]),a(t,{onClick:b,type:"primary"},{default:v(()=>[x("搜尋")]),_:1})]),u("div",L,[u("iframe",{id:"ytplayer",ref_key:"ytplayer",ref:_,type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/M7lc1UVf-VE?origin=http://example.com",frameborder:"0"},null,512)])],64)}}},O=["innerHTML"],Y={style:{display:"flex","justify-content":"center",margin:"1rem 0"}},j={__name:"commentTable",setup(m){const l=$(),{proxy:d}=z(),_=d.moment,r=g(1),c=g(10),y=n=>{c.value=n},b=U(()=>l.comment.slice((r.value-1)*c.value,r.value*c.value)),e=g(""),o=function(){e.value===""?l.comment=l.commentOri:l.comment=l.commentOri.filter(function(n,t,h){return n.textDisplay.includes(e.value)})};return(n,t)=>{const h=p("el-input"),s=p("el-table-column"),f=p("el-table"),M=p("el-pagination");return S(),C(V,null,[u("div",null,[a(h,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=i=>e.value=i),onChange:o,placeholder:"請輸入"},null,8,["modelValue"])]),a(f,{data:b.value,style:{width:"100%"}},{default:v(()=>[a(s,{type:"index",label:"序號",width:"75"},{default:v(i=>[x(k(c.value*(r.value-1)+i.$index+1),1)]),_:1}),a(s,{prop:"authorDisplayName",label:"作者",width:"180"}),a(s,{prop:"textDisplay",label:"留言"},{default:v(i=>[u("p",{innerHTML:i.row.textDisplay},null,8,O)]),_:1}),a(s,{prop:"publishedAt",label:"發布時間",width:"180"},{default:v(i=>[x(k(w(_)(i.row.publishedAt).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1},8,["data"]),u("div",Y,[a(M,{"current-page":r.value,"onUpdate:currentPage":t[1]||(t[1]=i=>r.value=i),layout:"prev, pager, next, sizes","page-size":c.value,"page-sizes":[10,50,100],total:w(l).comment.length,onSizeChange:y},null,8,["current-page","page-size","total"])])],64)}}};const F=m=>(A("data-v-713b379e"),m=m(),H(),m),B=F(()=>u("div",{class:"header"},[u("h1",null,"Youtube 留言抽獎網站")],-1)),E={style:{"margin-top":"1rem"}},J={__name:"home",setup(m){const l=$();return(d,_)=>{const r=p("el-card");return S(),C(V,null,[B,u("div",null,[a(r,null,{default:v(()=>[a(N)]),_:1})]),I(u("div",E,[a(j)],512),[[T,w(l).doSearch]])],64)}}},W=D(J,[["__scopeId","data-v-713b379e"]]);export{W as default};