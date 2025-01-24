var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function o(e){try{u(r.next(e))}catch(e){l(e)}}function i(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(a=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(6===i[0]&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),r=require("@libs/fetch"),n=require("@libs/filterInputs"),l=require("@libs/isAbsoluteUrl"),o=function(){function o(){this.id="anf.net",this.name="AllNovelFull",this.icon="src/en/allnovelfull/icon.png",this.site="https://allnovelfull.net",this.version="1.0.0",this.filters={order:{value:"/most-popular",label:"Order by",options:[{label:"Latest Release",value:"/latest-release-novel"},{label:"Hot Novel",value:"/hot-novel"},{label:"Completed Novel",value:"/completed-novel"},{label:"Most Popular",value:"/most-popular"}],type:n.FilterTypes.Picker},genres:{value:"",label:"Genre",options:[{label:"None",value:""},{label:"Shounen",value:"/genre/Shounen"},{label:"Harem",value:"/genre/Harem"},{label:"Comedy",value:"/genre/Comedy"},{label:"Martial Arts",value:"/genre/Martial+Arts"},{label:"School Life",value:"/genre/School+Life"},{label:"Mystery",value:"/genre/Mystery"},{label:"Shoujo",value:"/genre/Shoujo"},{label:"Romance",value:"/genre/Romance"},{label:"Sci-fi",value:"/genre/Sci-fi"},{label:"Gender Bender",value:"/genre/Gender+Bender"},{label:"Mature",value:"/genre/Mature"},{label:"Fantasy",value:"/genre/Fantasy"},{label:"Horror",value:"/genre/Horror"},{label:"Drama",value:"/genre/Drama"},{label:"Tragedy",value:"/genre/Tragedy"},{label:"Supernatural",value:"/genre/Supernatural"},{label:"Ecchi",value:"/genre/Ecchi"},{label:"Xuanhuan",value:"/genre/Xuanhuan"},{label:"Adventure",value:"/genre/Adventure"},{label:"Action",value:"/genre/Action"},{label:"Psychological",value:"/genre/Psychological"},{label:"Xianxia",value:"/genre/Xianxia"},{label:"Wuxia",value:"/genre/Wuxia"},{label:"Historical",value:"/genre/Historical"},{label:"Slice of Life",value:"/genre/Slice+of+Life"},{label:"Seinen",value:"/genre/Seinen"},{label:"Lolicon",value:"/genre/Lolicon"},{label:"Adult",value:"/genre/Adult"},{label:"Josei",value:"/genre/Josei"},{label:"Sports",value:"/genre/Sports"},{label:"Smut",value:"/genre/Smut"},{label:"Mecha",value:"/genre/Mecha"},{label:"Yaoi",value:"/genre/Yaoi"},{label:"Shounen Ai",value:"/genre/Shounen+Ai"},{label:"Magical Realism",value:"/genre/Magical+Realism"},{label:"Video Games",value:"/genre/Video+Games"}],type:n.FilterTypes.Picker}}}return o.prototype.parseNovels=function(e){var t=this,a=[];return e(".col-truyen-main .list-truyen .row").each((function(r,n){var o=e(n).find("h3.truyen-title > a").attr("href");if(o){var i=e(n).find("h3.truyen-title > a").text(),u=e(n).find("img.cover").attr("src");u&&!(0,l.isUrlAbsolute)(u)&&(u=t.site+u);var s={path:o,name:i,cover:u};a.push(s)}})),a},o.prototype.popularNovels=function(n,l){return e(this,arguments,void 0,(function(e,n){var l,o,i,u=n.filters;return t(this,(function(t){switch(t.label){case 0:return l=this.site,u.genres.value.length?l+=u.genres.value:l+=u.order.value,l+="?page=".concat(e),[4,(0,r.fetchApi)(l)];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),i=(0,a.load)(o),[2,this.parseNovels(i)]}}))}))},o.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var l,o,i,u,s,c,v,h=this;return t(this,(function(f){switch(f.label){case 0:return l=this.site+n,[4,(0,r.fetchApi)(l)];case 1:return[4,f.sent().text()];case 2:return o=f.sent(),i=(0,a.load)(o),u={path:n,name:i(".book > img").attr("alt")||"Untitled",cover:this.site+i(".book > img").attr("src"),summary:i(".desc-text").text().trim(),chapters:[]},i(".info > div").each((function(e,t){var a=i(t).find("h3").text(),r=i(t).find("a").map((function(e,t){return i(t).text()})).toArray().join(",");switch(a){case"Author:":u.author=r;break;case"Status:":u.status=r;break;case"Genre:":u.genres=r}})),s=i("#rating").attr("data-novel-id"),c=function(n){return e(h,void 0,void 0,(function(){var e,l,o;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/ajax/chapter-option?novelId="+n,[4,(0,r.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return l=t.sent(),i=(0,a.load)(l),o=[],i("select > option").each((function(e,t){var a=i(t).text(),r=i(t).attr("value");r&&o.push({name:a,path:r})})),[2,o]}}))}))},s?(v=u,[4,c(s)]):[3,4];case 3:v.chapters=f.sent(),f.label=4;case 4:return[2,u]}}))}))},o.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+n)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),l=(0,a.load)(e),[2,l("#chapter-content").html()||""]}}))}))},o.prototype.searchNovels=function(n,l){return e(this,void 0,void 0,(function(){var e,o,i;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"/search?keyword=").concat(n,"&page=").concat(l),[4,(0,r.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),i=(0,a.load)(o),[2,this.parseNovels(i)]}}))}))},o}();exports.default=new o;