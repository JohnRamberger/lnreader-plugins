var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=i(0),l.throw=i(1),l.return=i(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),r=require("@libs/fetch"),a=require("@libs/filterInputs"),o=function(){function o(){this.id="novelupdates",this.name="Novel Updates",this.version="0.7.14",this.icon="src/en/novelupdates/icon.png",this.customCSS="src/en/novelupdates/customCSS.css",this.site="https://www.novelupdates.com/",this.filters={sort:{label:"Sort Results By",value:"sdate",options:[{label:"Last Updated",value:"sdate"},{label:"Rating",value:"srate"},{label:"Rank",value:"srank"},{label:"Reviews",value:"sreview"},{label:"Chapters",value:"srel"},{label:"Title",value:"abc"},{label:"Readers",value:"sread"},{label:"Frequency",value:"sfrel"}],type:a.FilterTypes.Picker},order:{label:"Order",value:"desc",options:[{label:"Descending",value:"desc"},{label:"Ascending",value:"asc"}],type:a.FilterTypes.Picker},storyStatus:{label:"Story Status (Translation)",value:"",options:[{label:"All",value:""},{label:"Completed",value:"2"},{label:"Ongoing",value:"3"},{label:"Hiatus",value:"4"}],type:a.FilterTypes.Picker},language:{label:"Language",value:[],options:[{label:"Chinese",value:"495"},{label:"Filipino",value:"9181"},{label:"Indonesian",value:"9179"},{label:"Japanese",value:"496"},{label:"Khmer",value:"18657"},{label:"Korean",value:"497"},{label:"Malaysian",value:"9183"},{label:"Thai",value:"9954"},{label:"Vietnamese",value:"9177"}],type:a.FilterTypes.CheckboxGroup},novelType:{label:"Novel Type",value:[],options:[{label:"Light Novel",value:"2443"},{label:"Published Novel",value:"26874"},{label:"Web Novel",value:"2444"}],type:a.FilterTypes.CheckboxGroup},genre_operator:{label:"Genre (And/Or)",value:"and",options:[{label:"And",value:"and"},{label:"Or",value:"or"}],type:a.FilterTypes.Picker},genres:{label:"Genres",type:a.FilterTypes.ExcludableCheckboxGroup,value:{include:[],exclude:[]},options:[{label:"Action",value:"8"},{label:"Adult",value:"280"},{label:"Adventure",value:"13"},{label:"Comedy",value:"17"},{label:"Drama",value:"9"},{label:"Ecchi",value:"292"},{label:"Fantasy",value:"5"},{label:"Gender Bender",value:"168"},{label:"Harem",value:"3"},{label:"Historical",value:"330"},{label:"Horror",value:"343"},{label:"Josei",value:"324"},{label:"Martial Arts",value:"14"},{label:"Mature",value:"4"},{label:"Mecha",value:"10"},{label:"Mystery",value:"245"},{label:"Psychoical",value:"486"},{label:"Romance",value:"15"},{label:"School Life",value:"6"},{label:"Sci-fi",value:"11"},{label:"Seinen",value:"18"},{label:"Shoujo",value:"157"},{label:"Shoujo Ai",value:"851"},{label:"Shounen",value:"12"},{label:"Shounen Ai",value:"1692"},{label:"Slice of Life",value:"7"},{label:"Smut",value:"281"},{label:"Sports",value:"1357"},{label:"Supernatural",value:"16"},{label:"Tragedy",value:"132"},{label:"Wuxia",value:"479"},{label:"Xianxia",value:"480"},{label:"Xuanhuan",value:"3954"},{label:"Yaoi",value:"560"},{label:"Yuri",value:"922"}]},reading_list_operator:{label:"Reading List (Include/Exclude)",value:"include",options:[{label:"Include",value:"include"},{label:"Exclude",value:"exclude"}],type:a.FilterTypes.Picker},reading_lists:{label:"Reading Lists",value:[],options:[{label:"All Reading Lists",value:"-1"}],type:a.FilterTypes.CheckboxGroup}}}return o.prototype.parseNovels=function(e){var t=this,n=[];return e("div.search_main_box_nu").each((function(r,a){var o=e(a).find("img").attr("src"),l=e(a).find(".search_title > a").text(),i=e(a).find(".search_title > a").attr("href");if(i){var c={name:l,cover:o,path:i.replace(t.site,"")};n.push(c)}})),n},o.prototype.popularNovels=function(a,o){return e(this,arguments,void 0,(function(e,a){var o,l,i,c,s,u,h,d,p,v=a.showLatestNovels,f=a.filters;return t(this,(function(t){switch(t.label){case 0:return o="".concat(this.site),(null==f?void 0:f.language.value.length)||(null==f?void 0:f.novelType.value.length)||(null===(c=null==f?void 0:f.genres.value.include)||void 0===c?void 0:c.length)||(null===(s=null==f?void 0:f.genres.value.exclude)||void 0===s?void 0:s.length)||(null==f?void 0:f.reading_lists.value.length)||""!==(null==f?void 0:f.storyStatus.value)?(o+="series-finder/?sf=1",(null==f?void 0:f.language.value.length)&&(o+="&org="+f.language.value.join(",")),(null==f?void 0:f.novelType.value.length)&&(o+="&nt="+f.novelType.value.join(",")),(null===(u=null==f?void 0:f.genres.value.include)||void 0===u?void 0:u.length)&&(o+="&gi="+f.genres.value.include.join(",")),(null===(h=null==f?void 0:f.genres.value.exclude)||void 0===h?void 0:h.length)&&(o+="&ge="+f.genres.value.exclude.join(",")),((null===(d=null==f?void 0:f.genres.value.include)||void 0===d?void 0:d.length)||(null===(p=null==f?void 0:f.genres.value.exclude)||void 0===p?void 0:p.length))&&(o+="&mgi="+f.genre_operator.value),(null==f?void 0:f.reading_lists.value.length)&&(o+="&hd="+(null==f?void 0:f.reading_lists.value.join(",")),o+="&mRLi="+(null==f?void 0:f.reading_list_operator.value)),(null==f?void 0:f.storyStatus.value.length)&&(o+="&ss="+f.storyStatus.value),o+="&sort="+(null==f?void 0:f.sort.value),o+="&order="+(null==f?void 0:f.order.value)):o+=v?"latest-series/?st=1":"series-ranking/?rank=week",o+="&pg="+e,[4,(0,r.fetchApi)(o)];case 1:return[4,t.sent().text()];case 2:return l=t.sent(),i=(0,n.load)(l),[2,this.parseNovels(i)]}}))}))},o.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,o,l,i,c,s,u,h,d,p,v,f,b=this;return t(this,(function(t){switch(t.label){case 0:return e=this.site+a,[4,(0,r.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),l=(0,n.load)(o),(i={path:a,name:l(".seriestitlenu").text()||"Untitled",cover:l(".wpb_wrapper img").attr("src"),chapters:[]}).author=l("#authtag").map((function(e,t){return l(t).text().trim()})).toArray().join(", "),i.genres=l("#seriesgenre").children("a").map((function(e,t){return l(t).text()})).toArray().join(","),i.status=l("#editstatus").text().includes("Ongoing")?"Ongoing":"Completed",c=l("#showtype").text().trim(),s=l("#editdescription").text().trim(),i.summary=s+"\n\nType: ".concat(c),u=[],h=l("input#mypostid").attr("value"),(d=new FormData).append("action","nd_getchapters"),d.append("mygrr","0"),d.append("mypostid",h),p="".concat(this.site,"wp-admin/admin-ajax.php"),[4,(0,r.fetchApi)(p,{method:"POST",body:d}).then((function(e){return e.text()}))];case 3:return v=t.sent(),l=(0,n.load)(v),f={v:"volume ",c:" chapter ",part:"part ",ss:"SS"},l("li.sp_li_chp").each((function(e,t){var n=l(t).text();for(var r in f)n=n.replace(r,f[r]);n=n.replace(/\b\w/g,(function(e){return e.toUpperCase()})).trim();var a="https:"+l(t).find("a").first().next().attr("href");u.push({name:n,path:a.replace(b.site,"")})})),i.chapters=u.reverse(),[2,i]}}))}))},o.prototype.getLocation=function(e){var t=e.match(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&"".concat(t[1],"//").concat(t[3])},o.prototype.getChapterBody=function(a,o,l){return e(this,void 0,void 0,(function(){var e,i,c,s,u,h,d,p,v,f,b,m,g,y,x,w,_,T,C,k,A,S,j,E,z,L,N,F,O,P,R,G,M,H,I,q,D,B,J,U,K,$,W;return t(this,(function(t){switch(t.label){case 0:switch(e="",i="",c="",s=["app","blogspot","casper","wordpress","www"],u=o.find((function(e){return!s.includes(e)})),u){case"anotivereads":return[3,1];case"arcanetranslations":return[3,2];case"asuratls":return[3,3];case"daoist":return[3,4];case"darkstartranslations":return[3,5];case"fictionread":return[3,6];case"genesistudio":return[3,7];case"greenztl":return[3,9];case"helscans":return[3,11];case"hiraethtranslation":return[3,12];case"hostednovel":return[3,13];case"infinitenoveltranslations":return[3,14];case"inoveltranslation":return[3,18];case"isotls":return[3,19];case"ko-fi":return[3,20];case"mirilu":return[3,21];case"novelplex":return[3,22];case"novelworldtranslations":return[3,23];case"raeitranslations":return[3,24];case"rainofsnow":return[3,26];case"readingpia":return[3,27];case"redoxtranslation":return[3,28];case"sacredtexttranslations":return[3,30];case"scribblehub":return[3,31];case"skydemonorder":return[3,32];case"stabbingwithasyringe":return[3,33];case"tinytranslation":return[3,37];case"tumblr":return[3,38];case"wattpad":return[3,39];case"webnovel":return[3,40];case"wetriedtls":return[3,41];case"wuxiaworld":return[3,42];case"yoru":return[3,43];case"zetrotranslation":return[3,46]}return[3,47];case 1:return e=a("#comic-nav-name").first().text()||"Title not found",i=a("#spliced-comic").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 2:return[".bottomnav"].forEach((function(e){return a(e).remove()})),e=a(".epwrapper .cat-series").first().text(),a(".entry-content div, .entry-content span").each((function(e,t){var n=a(t),r=n.attr("style");r&&(/border:.*#00219b/.test(r)?n.removeAttr("style").addClass("arcane_box_blue"):/border:.*white/.test(r)?n.removeAttr("style").addClass("arcane_box_white"):r.includes("text-transform: uppercase")&&/text-shadow:.*blue/.test(r)?n.removeAttr("style").addClass("arcane_title_blue"):/text-shadow:.*blue/.test(r)?n.removeAttr("style").addClass("arcane_text_blue"):/text-shadow:.*lightyellow/.test(r)?n.removeAttr("style").addClass("arcane_text_lightyellow"):/color:.*#ff00ff/.test(r)&&n.removeAttr("style").addClass("arcane_text_pink"))})),i=a(".entry-content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 3:return h=a(".post-body div b").first(),e=h.text()||"Title not found",h.remove(),i=a(".post-body").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 4:return e=a(".chapter__title").first().text()||"Title not found",i=a(".chapter__content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 5:return e=a("ol.breadcrumb li").last().text().trim()||"Title not found",i=a(".text-left").html(),(d=(0,n.load)(i))("br").each((function(e,t){d(t).after("<br>")})),i=d.html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 6:return[".content > style",".highlight-ad-container",".meaning",".word"].forEach((function(e){return a(e).remove()})),e=a(".title-image span").first().text()||"Title not found",a(".content").children().each((function(e,t){var n;if(null===(n=a(t).attr("id"))||void 0===n?void 0:n.includes("Chaptertitle-info"))return a(t).remove(),!1})),i=a(".content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 7:return p="".concat(l,"/__data.json?x-sveltekit-invalidated=001"),[4,(0,r.fetchApi)(p).then((function(e){return e.json()}))];case 8:return v=t.sent(),f=v.nodes,b=f.filter((function(e){return"data"===e.type})).map((function(e){return e.data}))[0],m=b[19],g=b[b[0].footnotes],c=null!==($=m+g)&&void 0!==$?$:"",[3,47];case 9:return y=l.split("/").pop(),x="https://api.greenztl.com/api//chapters/".concat(y),[4,(0,r.fetchApi)(x).then((function(e){return e.json()}))];case 10:return w=t.sent(),c=w.currentChapter.content,[3,47];case 11:return e=a(".entry-title-main").first().text()||"Title not found",_="Chapter "+e.split("Chapter")[1].trim(),a("#readerarea.rdminimal").children().each((function(t,n){var r=a(n).text();if(r.includes(_))return e=r,a(n).remove(),!1})),i=a("#readerarea.rdminimal").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 12:return T=["data-lazy-srcset","data-lazy-src","data-lazy-sizes","data-ll-status"],["img.entered","img.lazyloaded"].forEach((function(e){a(e).each((function(){var e=this;T.forEach((function(t){a(e).removeAttr(t)})),a(this).removeClass("entered lazyloaded")}))})),e=a("li.active").first().text()||"Title not found",i=a(".text-left").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 13:return e=a("#chapter-title").first().text()||"Title not found",i=a("#chapter-content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 14:return(C=a("article > p > a").first().attr("href"))?[4,(0,r.fetchApi)(C)]:[3,17];case 15:return[4,t.sent().text()];case 16:k=t.sent(),a=(0,n.load)(k),t.label=17;case 17:return i=a(".hentry").html(),e=a(".page-entry-title").text()||"Title not found",c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 18:return["header","section"].forEach((function(e){return a(e).remove()})),c=a(".styles_content__JHK8G").html(),[3,47];case 19:return["footer","header","nav",".ezoic-ad",".ezoic-adpicker-ad",".ezoic-videopicker-video"].forEach((function(e){return a(e).remove()})),e=a("head title").first().text()||"Title not found",i=a("main article").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 20:return A=null===(W=a('script:contains("shadowDom.innerHTML")').html())||void 0===W?void 0:W.match(/shadowDom\.innerHTML \+= '(<div.*?)';/),c=A&&A[1]?A[1]:"",[3,47];case 21:return["#jp-post-flair"].forEach((function(e){return a(e).remove()})),S=a(".entry-content p strong").first(),e=S.text()||"Title not found",S.remove(),i=a(".entry-content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 22:return[".passingthrough_adreminder"].forEach((function(e){return a(e).remove()})),e=a(".halChap--jud").first().text()||"Title not found",i=a(".halChap--kontenInner ").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 23:return[".separator img"].forEach((function(e){return a(e).remove()})),a(".entry-content a").filter((function(e,t){var n;return(null===(n=a(t).attr("href"))||void 0===n?void 0:n.includes("https://novelworldtranslations.blogspot.com"))||!1})).each((function(e,t){a(t).parent().remove()})),e=a(".entry-title").first().text()||"Title not found",i=a(".entry-content").html().replace(/&nbsp;/g,"").replace(/\n/g,"<br>"),(j=(0,n.load)(i))("span, p, div").each((function(e,t){""===j(t).text().trim()&&j(t).remove()})),i=j.html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 24:return E=l.split("/"),z="".concat(E[0],"//api.").concat(E[2],"/api/chapters/single?id=").concat(E[3],"&num=").concat(E[4]),[4,(0,r.fetchApi)(z).then((function(e){return e.json()}))];case 25:return L=t.sent(),N="Chapter ".concat(L.currentChapter.chapTag),e=L.currentChapter.chapTitle?"".concat(N," - ").concat(L.currentChapter.chapTitle):N,i=(i=[L.novelHead,"<br><hr><br>",L.currentChapter.body,"<br><hr><br>Translator's Note:<br>",L.currentChapter.note].join("")).replace(/\n/g,"<br>"),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 26:return F=a(".bb-item").filter((function(){return"block"===a(this).css("display")})),O=(0,n.load)(F.html()),[".responsivevoice-button",".zoomdesc-cont p img",".zoomdesc-cont p noscript"].forEach((function(e){return O(e).remove()})),i=O(".zoomdesc-cont").html(),(P=O(".scroller h2").first()).length?(e=P.text()||"Title not found",P.remove(),i=O(".zoomdesc-cont").html(),e&&i&&(c="<h2>".concat(e,"</h2><hr><br>").concat(i))):i&&(c=i),[3,47];case 27:return[".ezoic-ad",".ezoic-adpicker-ad",".ez-video-wrap"].forEach((function(e){return a(e).remove()})),c=a(".chapter-body").html()||"Text not found",[3,47];case 28:return R=l.split("/").pop(),e="Chapter ".concat(R),G="".concat(l.split("chapter")[0],"txt/").concat(R,".txt"),[4,(0,r.fetchApi)(G).then((function(e){return e.text()})).then((function(e){return e.split("\n").map((function(e){return e.includes("{break}")?"<br> <p>****</p>":e=(e=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")).replace(/\+\+(.*?)\+\+/g,"<em>$1</em>")})).join("<br>")}))];case 29:return i=t.sent(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 30:return[".entry-content blockquote",".entry-content div",".reaction-buttons"].forEach((function(e){return a(e).remove()})),e=a(".entry-title").first().text()||"Title not found",i=a(".entry-content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 31:return[".wi_authornotes"].forEach((function(e){return a(e).remove()})),e=a(".chapter-title").first().text()||"Title not found",i=a(".chp_raw").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 32:if(a("main").text().toLowerCase().includes("age verification required"))throw new Error("Age verification required, please open in webview.");return e="".concat(a("header .font-medium.text-sm").first().text().trim()),(i=a("#startContainer + * > *").first().html())||(i="".concat(a("#chapter-body").html(),"<hr><br>There could be missing content, please check in webview.")),c=e?"<h2>".concat(e,"</h2><hr><br>").concat(i):i,[3,47];case 33:return(M=a(".entry-content a").attr("href"))?[4,(0,r.fetchApi)(M)]:[3,36];case 34:return[4,t.sent().text()];case 35:H=t.sent(),a=(0,n.load)(H),t.label=36;case 36:return[".has-inline-color",".wp-block-buttons",".wpcnt","#jp-post-flair"].forEach((function(e){return a(e).remove()})),i=a(".entry-content").html(),(I=a(".entry-content h3").first()).length?(e=I.text(),I.remove(),i=a(".entry-content").html()):e="Title not found",c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 37:return[".content noscript",".google_translate_element",".navigate",".post-views","br"].forEach((function(e){return a(e).remove()})),e=a(".title-content").first().text()||"Title not found",a(".title-content").first().remove(),i=a(".content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 38:return c=a(".post").html()||"Text not found",[3,47];case 39:return e=a(".h2").first().text()||"Title not found",i=a(".part-content pre").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 40:return e=a(".cha-tit .pr .dib").first().text()||"Title not found",(i=a(".cha-words").html())||(i=a("._content").html()),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 41:return(q=a('script:contains("p dir=")').html()||a('script:contains("u003c")').html())&&(D=q.slice(q.indexOf(".push(")+6,q.lastIndexOf(")")),c=JSON.parse(D)[1]),[3,47];case 42:return[".MuiLink-root"].forEach((function(e){return a(e).remove()})),e=a("h4 span").first().text()||"Title not found",i=a(".chapter-content").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i),[3,47];case 43:return B=l.split("/").pop(),J="https://pxp-main-531j.onrender.com/api/v1/book_chapters/".concat(B,"/content"),[4,(0,r.fetchApi)(J).then((function(e){return e.json()}))];case 44:return U=t.sent(),[4,(0,r.fetchApi)(U).then((function(e){return e.text()}))];case 45:return c=t.sent(),[3,47];case 46:return["hr",'p:contains(" ")'].forEach((function(e){return a(e).remove()})),i=a(".text-left").html(),(K=a(".text-left h2").first()).length?(e=K.text()||"Title not found",K.remove(),i=a(".text-left").html(),c="<h2>".concat(e,"</h2><hr><br>").concat(i)):i&&(e=a(".active").first().text()||"Title not found",c="<h2>".concat(e,"</h2><hr><br>").concat(i)),[3,47];case 47:return[2,c]}}))}))},o.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,o,l,i,c,s,u,h,d,p,v,f,b,m,g,y,x,w,_;return t(this,(function(t){switch(t.label){case 0:return e="",o="",l="",[4,(0,r.fetchApi)(this.site+a)];case 1:return[4,(i=t.sent()).text()];case 2:if(c=t.sent(),s=i.url,u=s.toLowerCase().split("/")[2].split("."),h=(0,n.load)(c),"bot verification"==(d=h("title").text().toLowerCase().trim())||"just a moment..."==d||"redirecting..."==d||"un instant..."==d||"you are being redirected..."==d)throw new Error("Captcha error, please open in webview.");if(!i.ok)throw new Error("Could not reach site (".concat(i.status,"), try to open in webview."));return p=[h('meta[name="google-adsense-platform-domain"]').attr("content"),h('meta[name="generator"]').attr("content")],v=["blogspot","blogger"],f=p.some((function(e){return e&&v.some((function(t){return e.toLowerCase().includes(t)}))})),b=[h("#dcl_comments-js-extra").html(),h('meta[name="generator"]').attr("content"),h(".powered-by").text(),h("footer").text()],m=["wordpress","site kit by google"],g=b.some((function(e){return e&&m.some((function(t){return e.toLowerCase().includes(t)}))})),y=["etherreads","soafp"],!g&&u.find((function(e){return y.includes(e)}))&&(g=!0),x=["anotivereads","arcanetranslations","asuratls","darkstartranslations","fictionread","helscans","infinitenoveltranslations","mirilu","novelworldtranslations","sacredtexttranslations","stabbingwithasyringe","tinytranslation","zetrotranslation"],u.find((function(e){return x.includes(e)}))&&(g=!1,f=!1),g||f?[3,4]:[4,this.getChapterBody(h,u,s)];case 3:return l=t.sent(),[3,5];case 4:f?([".button-container",".ChapterNav",".ch-bottom",".separator"].forEach((function(e){return h(e).remove()})),e=h(".entry-title").first().text()||h(".post-title").first().text()||"Title not found",o=h(".content-post").html()||h(".entry-content").html()||h(".post-body").html(),e&&o&&(l="<h2>".concat(e,"</h2><hr><br>").concat(o))):g&&([".ad",".author-avatar",".chapter-warning",".entry-meta",".ezoic-ad",".mb-center",".modern-footnotes-footnote__note",".patreon-widget",".post-cats",".pre-bar",".sharedaddy",".sidebar",".swg-button-v2-light",".wp-block-buttons",".wp-block-image",".wp-dark-mode-switcher",".wp-next-post-navi","#hpk","#jp-post-flair","#textbox"].forEach((function(e){return h(e).remove()})),e=h(".entry-title").first().text()||h(".entry-title-main").first().text()||h(".chapter__title").first().text()||h(".sp-title").first().text()||h(".title-content").first().text()||h(".wp-block-post-title").first().text()||h(".title_story").first().text()||h(".active").first().text()||h("head title").first().text()||h("h1.leading-none ~ h2").first().text()||"Title not found",(w=h(".cat-series").first().text()||h("h1.leading-none ~ span").first().text()||"")&&(e=w),o=h(".rdminimal").html()||h(".entry-content").html()||h(".chapter__content").html()||h(".prevent-select").html()||h(".text_story").html()||h(".contenta").html()||h(".single_post").html()||h(".post-entry").html()||h(".main-content").html()||h(".post-content").html()||h(".content").html()||h(".page-body").html()||h(".td-page-content").html()||h(".reader-content").html()||h("#content").html()||h("#the-content").html()||h("article.post").html(),e&&o&&(l="<h2>".concat(e,"</h2><hr><br>").concat(o))),t.label=5;case 5:return l||(["nav","header","footer",".hidden"].map((function(e){return h(e).remove()})),l=h("body").html()||"Text not found"),l&&(l=l.replace(/href="\//g,'href="'.concat(this.getLocation(i.url),"/"))),(_=(0,n.load)(l))("noscript").remove(),_("img").each((function(e,t){var n=_(t),r=n.attr("data-lazy-src")||n.attr("src");r&&n.attr("src",r);var a=n.attr("data-lazy-srcset")||n.attr("srcset");a&&n.attr("srcset",a),n.removeClass("lazyloaded")})),[2,l=_.html()]}}))}))},o.prototype.searchNovels=function(a,o){return e(this,void 0,void 0,(function(){var e,l,i,c,s;return t(this,(function(t){switch(t.label){case 0:return e=a.split("*"),l=e.reduce((function(e,t){return e.length>t.length?e:t}),""),a=l.replace(/[‘’]/g,"'").replace(/\s+/g,"+"),i="".concat(this.site,"series-finder/?sf=1&sh=").concat(a,"&sort=srank&order=asc&pg=").concat(o),[4,(0,r.fetchApi)(i)];case 1:return[4,t.sent().text()];case 2:return c=t.sent(),s=(0,n.load)(c),[2,this.parseNovels(s)]}}))}))},o}();exports.default=new o;