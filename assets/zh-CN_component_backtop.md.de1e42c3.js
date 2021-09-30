import{_ as t,a}from"./custom.461df50b.js";import{r as s,o as n,c as e,a as o,w as p,u as c,b as l,d as r,e as E}from"./app.1cb19b9f.js";const C=l("h1",{id:"backtop-回到顶部",tabindex:"-1"},[r("Backtop 回到顶部 "),l("a",{class:"header-anchor",href:"#backtop-回到顶部","aria-hidden":"true"},"#")],-1),d=l("p",null,"返回页面顶部的操作按钮",-1),i=l("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),u=l("p",null,"通过滑动来查看容器右下角的按钮",-1),A=l("p",null,"backtop/basic",-1),h=l("h2",{id:"自定义内容",tabindex:"-1"},[r("自定义内容 "),l("a",{class:"header-anchor",href:"#自定义内容","aria-hidden":"true"},"#")],-1),b=l("p",null,"展示区域为 40px * 40px。",-1),k=l("p",null,"backtop/custom",-1),F=E('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>触发滚动的对象</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>滚动高度达到此参数值才出现</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>控制其显示位置, 距离页面右边距</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>控制其显示位置, 距离页面底部距离</td><td>number</td><td></td><td>40</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>点击按钮触发的事件</td><td>click event</td></tr></tbody></table>',4),D='{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"自定义内容","slug":"自定义内容"},{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"zh-CN/component/backtop.md","lastUpdated":1633003652502}',g={};const m=Object.assign(g,{setup:function(l){const r={"../../examples/backtop/basic.vue":t,"../../examples/backtop/custom.vue":a};return(t,a)=>{const l=s("Demo");return n(),e("div",null,[C,d,i,u,o(l,{demos:c(r),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"backtop/basic",html:"%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%2F%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:p((()=>[A])),_:1},8,["demos"]),h,b,o(l,{demos:c(r),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Abottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20%23f2f5f6%3B%0A%20%20%20%20%20%20%20%20box-shadow%3A%200%200%206px%20rgba(0%2C%200%2C%200%2C%200.12)%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20color%3A%20%231989fa%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20UP%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-backtop%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"backtop/custom",html:"%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%3Abottom%3D%22100%22%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20%23f2f5f6%3B%0A%20%20%20%20%20%20%20%20box-shadow%3A%200%200%206px%20rgba(0%2C%200%2C%200%2C%200.12)%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20color%3A%20%231989fa%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20UP%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fel-backtop%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%3Cel-backtop%20%3Abottom%3D%22100%22%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20%23f2f5f6%3B%0A%20%20%20%20%20%20%20%20box-shadow%3A%200%200%206px%20rgba(0%2C%200%2C%200%2C%200.12)%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20color%3A%20%231989fa%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20UP%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fel-backtop%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:p((()=>[k])),_:1},8,["demos"]),F])}}});export{D as __pageData,m as default};
