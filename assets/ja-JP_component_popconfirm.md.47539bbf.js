import{_ as n,a as t,b as a}from"./trigger-event.1040838e.js";import{r as s,o as e,c as p,a as o,w as E,u as c,b as C,d as l,e as u}from"./app.1cb19b9f.js";const i=C("h1",{id:"popconfirm",tabindex:"-1"},[l("Popconfirm "),C("a",{class:"header-anchor",href:"#popconfirm","aria-hidden":"true"},"#")],-1),r=C("p",null,"要素のクリック操作の簡単な確認ダイアログです。",-1),D=C("h2",{id:"基本的な使い方",tabindex:"-1"},[l("基本的な使い方 "),C("a",{class:"header-anchor",href:"#基本的な使い方","aria-hidden":"true"},"#")],-1),F=C("p",null,"popconfirm は ポップオーバー と似ています。 そのため、重複する属性については ポップオーバー のドキュメントを参照してください。",-1),k=C("p",null,"popconfirm/basic-usage",-1),d=C("h2",{id:"カスタマイズ",tabindex:"-1"},[l("カスタマイズ "),C("a",{class:"header-anchor",href:"#カスタマイズ","aria-hidden":"true"},"#")],-1),A=C("p",null,"You can customize Popconfirm like:",-1),m=C("p",null,"popconfirm/customize",-1),f=C("h2",{id:"トリガーイベント",tabindex:"-1"},[l("トリガーイベント "),C("a",{class:"header-anchor",href:"#トリガーイベント","aria-hidden":"true"},"#")],-1),g=C("p",null,"Click the button to trigger the event",-1),h=C("p",null,"popconfirm/trigger-event",-1),b=u('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default Value</th></tr></thead><tbody><tr><td>タイトル</td><td>タイトル</td><td>String</td><td>—</td><td>—</td></tr><tr><td>confirmButtonText</td><td>確認ボタンのテキスト</td><td>String</td><td>—</td><td>—</td></tr><tr><td>cancelButtonText</td><td>キャンセルボタンのテキスト</td><td>String</td><td>—</td><td>—</td></tr><tr><td>confirmButtonType</td><td>確認ボタンの種類</td><td>String</td><td>—</td><td>Primary</td></tr><tr><td>cancelButtonType</td><td>キャンセルボタンの種類</td><td>String</td><td>—</td><td>Text</td></tr><tr><td>アイコン</td><td>アイコン</td><td>String</td><td>—</td><td>el-icon-question</td></tr><tr><td>iconColor</td><td>アイコンカラー</td><td>String</td><td>—</td><td>#f90</td></tr><tr><td>hideIcon</td><td>アイコンを隠すか</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id="スロット" tabindex="-1">スロット <a class="header-anchor" href="#スロット" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>Description</th></tr></thead><tbody><tr><td>reference</td><td>Popconfirm をトリガーとするHTML要素</td></tr></tbody></table><h2 id="イベント" tabindex="-1">イベント <a class="header-anchor" href="#イベント" aria-hidden="true">#</a></h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>onConfirm</td><td>確認ボタンをクリックするときのトリガー</td><td>—</td></tr><tr><td>onCancel</td><td>キャンセルボタンをクリックするときのトリガー</td><td>—</td></tr></tbody></table>',6),B='{"title":"Popconfirm","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本的な使い方","slug":"基本的な使い方"},{"level":2,"title":"カスタマイズ","slug":"カスタマイズ"},{"level":2,"title":"トリガーイベント","slug":"トリガーイベント"},{"level":2,"title":"属性","slug":"属性"},{"level":2,"title":"スロット","slug":"スロット"},{"level":2,"title":"イベント","slug":"イベント"}],"relativePath":"ja-JP/component/popconfirm.md","lastUpdated":1633003652442}',v={};const x=Object.assign(v,{setup:function(C){const l={"../../examples/popconfirm/basic-usage.vue":n,"../../examples/popconfirm/customize.vue":t,"../../examples/popconfirm/trigger-event.vue":a};return(n,t)=>{const a=s("Demo");return e(),p("div",null,[i,r,D,F,o(a,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/basic-usage",html:"%0A%20%20%3Cel-popconfirm%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3Epopconfirm%20%E3%81%A7%E3%81%AF%20%3Ccode%3Etitle%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E3%81%AE%E3%81%BF%E3%81%8C%E5%88%A9%E7%94%A8%E5%8F%AF%E8%83%BD%E3%81%A7%E3%80%81%3Ccode%3Econtent%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E3%81%AF%E7%84%A1%E8%A6%96%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82%3C%2Fp%3E%0A"},{default:E((()=>[k])),_:1},8,["demos"]),d,A,o(a,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econfirm-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EOK%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecancel-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ENo%2C%20Thanks%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eel-icon-info%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ered%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/customize",html:"%0A%20%20%3Cel-popconfirm%0A%20%20%20%20confirm-button-text%3D%22OK%22%0A%20%20%20%20cancel-button-text%3D%22No%2C%20Thanks%22%0A%20%20%20%20icon%3D%22el-icon-info%22%0A%20%20%20%20icon-color%3D%22red%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%0A%20%20%20%20confirm-button-text%3D%22OK%22%0A%20%20%20%20cancel-button-text%3D%22No%2C%20Thanks%22%0A%20%20%20%20icon%3D%22el-icon-info%22%0A%20%20%20%20icon-color%3D%22red%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:E((()=>[m])),_:1},8,["demos"]),f,g,o(a,{demos:c(l),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econfirm-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EYes%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecancel-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ENo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eel-icon-info%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ered%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EconfirmEvent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40cancel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcancelEvent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20methods%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EconfirmEvent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'confirm!'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EcancelEvent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'cancel!'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/trigger-event",html:"%0A%20%20%3Cel-popconfirm%0A%20%20%20%20confirm-button-text%3D%22Yes%22%0A%20%20%20%20cancel-button-text%3D%22No%22%0A%20%20%20%20icon%3D%22el-icon-info%22%0A%20%20%20%20icon-color%3D%22red%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A",js:"%0Aexport%20default%20%7B%0A%20%20methods%3A%20%7B%0A%20%20%20%20confirmEvent()%20%7B%0A%20%20%20%20%20%20console.log('confirm!')%0A%20%20%20%20%7D%2C%0A%20%20%20%20cancelEvent()%20%7B%0A%20%20%20%20%20%20console.log('cancel!')%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A",css:"","css-pre-processor":"none","js-pre-processor":"ts","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%0A%20%20%20%20confirm-button-text%3D%22Yes%22%0A%20%20%20%20cancel-button-text%3D%22No%22%0A%20%20%20%20icon%3D%22el-icon-info%22%0A%20%20%20%20icon-color%3D%22red%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20methods%3A%20%7B%0A%20%20%20%20confirmEvent()%20%7B%0A%20%20%20%20%20%20console.log('confirm!')%0A%20%20%20%20%7D%2C%0A%20%20%20%20cancelEvent()%20%7B%0A%20%20%20%20%20%20console.log('cancel!')%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A%3C%2Fscript%3E%0A",description:""},{default:E((()=>[h])),_:1},8,["demos"]),b])}}});export{B as __pageData,x as default};
