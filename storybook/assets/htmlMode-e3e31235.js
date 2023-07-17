var Xe=Object.defineProperty;var o=(e,n)=>Xe(e,"name",{value:n,configurable:!0});import{m as Be}from"./Listing.stories-8e173ca3.js";import"./jsx-runtime-dc251ea5.js";import"./iframe-db756ec9.js";import"./index-1b25731a.js";import"./svg-17f153a1.js";import"./PenrosePrograms-daf2fc36.js";import"./vector-wedge.substance-736fa69b.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Fe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,qe=Object.getOwnPropertyNames,Qe=Object.prototype.hasOwnProperty,Ge=o(e=>Fe(e,"__esModule",{value:!0}),"__markAsModule"),Je=o((e,n,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of qe(n))!Qe.call(e,r)&&r!=="default"&&Fe(e,r,{get:()=>n[r],enumerable:!(i=$e(n,r))||i.enumerable});return e},"__reExport"),f={};Ge(f);Je(f,Be);var Ye=2*60*1e3,Te=o(class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Ye&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=f.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},"WorkerManager"),J;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(J||(J={}));var N;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(N||(N={}));var b;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=N.MAX_VALUE),t===Number.MAX_VALUE&&(t=N.MAX_VALUE),{line:r,character:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.objectLiteral(t)&&s.uinteger(t.line)&&s.uinteger(t.character)}o(i,"is"),e.is=i})(b||(b={}));var m;(function(e){function n(r,t,a,u){if(s.uinteger(r)&&s.uinteger(t)&&s.uinteger(a)&&s.uinteger(u))return{start:b.create(r,t),end:b.create(a,u)};if(b.is(r)&&b.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+u+"]")}o(n,"create"),e.create=n;function i(r){var t=r;return s.objectLiteral(t)&&b.is(t.start)&&b.is(t.end)}o(i,"is"),e.is=i})(m||(m={}));var V;(function(e){function n(r,t){return{uri:r,range:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&m.is(t.range)&&(s.string(t.uri)||s.undefined(t.uri))}o(i,"is"),e.is=i})(V||(V={}));var Y;(function(e){function n(r,t,a,u){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:u}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&m.is(t.targetRange)&&s.string(t.targetUri)&&(m.is(t.targetSelectionRange)||s.undefined(t.targetSelectionRange))&&(m.is(t.originSelectionRange)||s.undefined(t.originSelectionRange))}o(i,"is"),e.is=i})(Y||(Y={}));var z;(function(e){function n(r,t,a,u){return{red:r,green:t,blue:a,alpha:u}}o(n,"create"),e.create=n;function i(r){var t=r;return s.numberRange(t.red,0,1)&&s.numberRange(t.green,0,1)&&s.numberRange(t.blue,0,1)&&s.numberRange(t.alpha,0,1)}o(i,"is"),e.is=i})(z||(z={}));var Z;(function(e){function n(r,t){return{range:r,color:t}}o(n,"create"),e.create=n;function i(r){var t=r;return m.is(t.range)&&z.is(t.color)}o(i,"is"),e.is=i})(Z||(Z={}));var K;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}o(n,"create"),e.create=n;function i(r){var t=r;return s.string(t.label)&&(s.undefined(t.textEdit)||A.is(t))&&(s.undefined(t.additionalTextEdits)||s.typedArray(t.additionalTextEdits,A.is))}o(i,"is"),e.is=i})(K||(K={}));var P;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(P||(P={}));var ee;(function(e){function n(r,t,a,u,c){var l={startLine:r,endLine:t};return s.defined(a)&&(l.startCharacter=a),s.defined(u)&&(l.endCharacter=u),s.defined(c)&&(l.kind=c),l}o(n,"create"),e.create=n;function i(r){var t=r;return s.uinteger(t.startLine)&&s.uinteger(t.startLine)&&(s.undefined(t.startCharacter)||s.uinteger(t.startCharacter))&&(s.undefined(t.endCharacter)||s.uinteger(t.endCharacter))&&(s.undefined(t.kind)||s.string(t.kind))}o(i,"is"),e.is=i})(ee||(ee={}));var X;(function(e){function n(r,t){return{location:r,message:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&V.is(t.location)&&s.string(t.message)}o(i,"is"),e.is=i})(X||(X={}));var te;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(te||(te={}));var re;(function(e){e.Unnecessary=1,e.Deprecated=2})(re||(re={}));var ne;(function(e){function n(i){var r=i;return r!=null&&s.string(r.href)}o(n,"is"),e.is=n})(ne||(ne={}));var W;(function(e){function n(r,t,a,u,c,l){var d={range:r,message:t};return s.defined(a)&&(d.severity=a),s.defined(u)&&(d.code=u),s.defined(c)&&(d.source=c),s.defined(l)&&(d.relatedInformation=l),d}o(n,"create"),e.create=n;function i(r){var t,a=r;return s.defined(a)&&m.is(a.range)&&s.string(a.message)&&(s.number(a.severity)||s.undefined(a.severity))&&(s.integer(a.code)||s.string(a.code)||s.undefined(a.code))&&(s.undefined(a.codeDescription)||s.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(s.string(a.source)||s.undefined(a.source))&&(s.undefined(a.relatedInformation)||s.typedArray(a.relatedInformation,X.is))}o(i,"is"),e.is=i})(W||(W={}));var R;(function(e){function n(r,t){for(var a=[],u=2;u<arguments.length;u++)a[u-2]=arguments[u];var c={title:r,command:t};return s.defined(a)&&a.length>0&&(c.arguments=a),c}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.title)&&s.string(t.command)}o(i,"is"),e.is=i})(R||(R={}));var A;(function(e){function n(a,u){return{range:a,newText:u}}o(n,"replace"),e.replace=n;function i(a,u){return{range:{start:a,end:a},newText:u}}o(i,"insert"),e.insert=i;function r(a){return{range:a,newText:""}}o(r,"del"),e.del=r;function t(a){var u=a;return s.objectLiteral(u)&&s.string(u.newText)&&m.is(u.range)}o(t,"is"),e.is=t})(A||(A={}));var y;(function(e){function n(r,t,a){var u={label:r};return t!==void 0&&(u.needsConfirmation=t),a!==void 0&&(u.description=a),u}o(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&s.objectLiteral(t)&&s.string(t.label)&&(s.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(s.string(t.description)||t.description===void 0)}o(i,"is"),e.is=i})(y||(y={}));var _;(function(e){function n(i){var r=i;return typeof r=="string"}o(n,"is"),e.is=n})(_||(_={}));var x;(function(e){function n(a,u,c){return{range:a,newText:u,annotationId:c}}o(n,"replace"),e.replace=n;function i(a,u,c){return{range:{start:a,end:a},newText:u,annotationId:c}}o(i,"insert"),e.insert=i;function r(a,u){return{range:a,newText:"",annotationId:u}}o(r,"del"),e.del=r;function t(a){var u=a;return A.is(u)&&(y.is(u.annotationId)||_.is(u.annotationId))}o(t,"is"),e.is=t})(x||(x={}));var H;(function(e){function n(r,t){return{textDocument:r,edits:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&O.is(t.textDocument)&&Array.isArray(t.edits)}o(i,"is"),e.is=i})(H||(H={}));var F;(function(e){function n(r,t,a){var u={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(u.options=t),a!==void 0&&(u.annotationId=a),u}o(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&s.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}o(i,"is"),e.is=i})(F||(F={}));var T;(function(e){function n(r,t,a,u){var c={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),u!==void 0&&(c.annotationId=u),c}o(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&s.string(t.oldUri)&&s.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}o(i,"is"),e.is=i})(T||(T={}));var D;(function(e){function n(r,t,a){var u={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(u.options=t),a!==void 0&&(u.annotationId=a),u}o(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&s.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||s.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||s.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}o(i,"is"),e.is=i})(D||(D={}));var B;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return s.string(t.kind)?F.is(t)||T.is(t)||D.is(t):H.is(t)}))}o(n,"is"),e.is=n})(B||(B={}));var j=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return o(e,"TextEditChangeImpl2"),e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=A.insert(n,i):_.is(r)?(a=r,t=x.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=A.replace(n,i):_.is(r)?(a=r,t=x.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=A.del(n):_.is(i)?(t=i,r=x.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=x.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ie=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return o(e,"ChangeAnnotations2"),e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(_.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ie(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(H.is(r)){var t=new j(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new j(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return o(e,"WorkspaceChange2"),Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(O.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new j(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new j(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ie,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;y.is(i)||_.is(i)?t=i:r=i;var a,u;if(t===void 0?a=F.create(n,r):(u=_.is(t)?t:this._changeAnnotations.manage(t),a=F.create(n,r,u)),this._workspaceEdit.documentChanges.push(a),u!==void 0)return u},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;y.is(r)||_.is(r)?a=r:t=r;var u,c;if(a===void 0?u=T.create(n,i,t):(c=_.is(a)?a:this._changeAnnotations.manage(a),u=T.create(n,i,t,c)),this._workspaceEdit.documentChanges.push(u),c!==void 0)return c},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;y.is(i)||_.is(i)?t=i:r=i;var a,u;if(t===void 0?a=D.create(n,r):(u=_.is(t)?t:this._changeAnnotations.manage(t),a=D.create(n,r,u)),this._workspaceEdit.documentChanges.push(a),u!==void 0)return u},e})();var ae;(function(e){function n(r){return{uri:r}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)}o(i,"is"),e.is=i})(ae||(ae={}));var oe;(function(e){function n(r,t){return{uri:r,version:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&s.integer(t.version)}o(i,"is"),e.is=i})(oe||(oe={}));var O;(function(e){function n(r,t){return{uri:r,version:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&(t.version===null||s.integer(t.version))}o(i,"is"),e.is=i})(O||(O={}));var se;(function(e){function n(r,t,a,u){return{uri:r,languageId:t,version:a,text:u}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&s.string(t.languageId)&&s.integer(t.version)&&s.string(t.text)}o(i,"is"),e.is=i})(se||(se={}));var L;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(L||(L={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}o(n,"is"),e.is=n})(L||(L={}));var $;(function(e){function n(i){var r=i;return s.objectLiteral(i)&&L.is(r.kind)&&s.string(r.value)}o(n,"is"),e.is=n})($||($={}));var h;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(h||(h={}));var q;(function(e){e.PlainText=1,e.Snippet=2})(q||(q={}));var ue;(function(e){e.Deprecated=1})(ue||(ue={}));var ce;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}o(n,"create"),e.create=n;function i(r){var t=r;return t&&s.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}o(i,"is"),e.is=i})(ce||(ce={}));var de;(function(e){e.asIs=1,e.adjustIndentation=2})(de||(de={}));var fe;(function(e){function n(i){return{label:i}}o(n,"create"),e.create=n})(fe||(fe={}));var ge;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}o(n,"create"),e.create=n})(ge||(ge={}));var U;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}o(n,"fromPlainText"),e.fromPlainText=n;function i(r){var t=r;return s.string(t)||s.objectLiteral(t)&&s.string(t.language)&&s.string(t.value)}o(i,"is"),e.is=i})(U||(U={}));var le;(function(e){function n(i){var r=i;return!!r&&s.objectLiteral(r)&&($.is(r.contents)||U.is(r.contents)||s.typedArray(r.contents,U.is))&&(i.range===void 0||m.is(i.range))}o(n,"is"),e.is=n})(le||(le={}));var he;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}o(n,"create"),e.create=n})(he||(he={}));var ve;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var u={label:i};return s.defined(r)&&(u.documentation=r),s.defined(t)?u.parameters=t:u.parameters=[],u}o(n,"create"),e.create=n})(ve||(ve={}));var I;(function(e){e.Text=1,e.Read=2,e.Write=3})(I||(I={}));var pe;(function(e){function n(i,r){var t={range:i};return s.number(r)&&(t.kind=r),t}o(n,"create"),e.create=n})(pe||(pe={}));var v;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(v||(v={}));var me;(function(e){e.Deprecated=1})(me||(me={}));var _e;(function(e){function n(i,r,t,a,u){var c={name:i,kind:r,location:{uri:a,range:t}};return u&&(c.containerName=u),c}o(n,"create"),e.create=n})(_e||(_e={}));var we;(function(e){function n(r,t,a,u,c,l){var d={name:r,detail:t,kind:a,range:u,selectionRange:c};return l!==void 0&&(d.children=l),d}o(n,"create"),e.create=n;function i(r){var t=r;return t&&s.string(t.name)&&s.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(t.detail===void 0||s.string(t.detail))&&(t.deprecated===void 0||s.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}o(i,"is"),e.is=i})(we||(we={}));var ke;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(ke||(ke={}));var be;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.typedArray(t.diagnostics,W.is)&&(t.only===void 0||s.typedArray(t.only,s.string))}o(i,"is"),e.is=i})(be||(be={}));var Ee;(function(e){function n(r,t,a){var u={title:r},c=!0;return typeof t=="string"?(c=!1,u.kind=t):R.is(t)?u.command=t:u.edit=t,c&&a!==void 0&&(u.kind=a),u}o(n,"create"),e.create=n;function i(r){var t=r;return t&&s.string(t.title)&&(t.diagnostics===void 0||s.typedArray(t.diagnostics,W.is))&&(t.kind===void 0||s.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||R.is(t.command))&&(t.isPreferred===void 0||s.boolean(t.isPreferred))&&(t.edit===void 0||B.is(t.edit))}o(i,"is"),e.is=i})(Ee||(Ee={}));var xe;(function(e){function n(r,t){var a={range:r};return s.defined(t)&&(a.data=t),a}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&m.is(t.range)&&(s.undefined(t.command)||R.is(t.command))}o(i,"is"),e.is=i})(xe||(xe={}));var Ae;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&s.uinteger(t.tabSize)&&s.boolean(t.insertSpaces)}o(i,"is"),e.is=i})(Ae||(Ae={}));var Ce;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}o(n,"create"),e.create=n;function i(r){var t=r;return s.defined(t)&&m.is(t.range)&&(s.undefined(t.target)||s.string(t.target))}o(i,"is"),e.is=i})(Ce||(Ce={}));var ye;(function(e){function n(r,t){return{range:r,parent:t}}o(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&m.is(t.range)&&(t.parent===void 0||e.is(t.parent))}o(i,"is"),e.is=i})(ye||(ye={}));var Pe;(function(e){function n(a,u,c,l){return new Ze(a,u,c,l)}o(n,"create"),e.create=n;function i(a){var u=a;return!!(s.defined(u)&&s.string(u.uri)&&(s.undefined(u.languageId)||s.string(u.languageId))&&s.uinteger(u.lineCount)&&s.func(u.getText)&&s.func(u.positionAt)&&s.func(u.offsetAt))}o(i,"is"),e.is=i;function r(a,u){for(var c=a.getText(),l=t(u,function(C,S){var G=C.range.start.line-S.range.start.line;return G===0?C.range.start.character-S.range.start.character:G}),d=c.length,p=l.length-1;p>=0;p--){var w=l[p],E=a.offsetAt(w.range.start),g=a.offsetAt(w.range.end);if(g<=d)c=c.substring(0,E)+w.newText+c.substring(g,c.length);else throw new Error("Overlapping edit");d=E}return c}o(r,"applyEdits"),e.applyEdits=r;function t(a,u){if(a.length<=1)return a;var c=a.length/2|0,l=a.slice(0,c),d=a.slice(c);t(l,u),t(d,u);for(var p=0,w=0,E=0;p<l.length&&w<d.length;){var g=u(l[p],d[w]);g<=0?a[E++]=l[p++]:a[E++]=d[w++]}for(;p<l.length;)a[E++]=l[p++];for(;w<d.length;)a[E++]=d[w++];return a}o(t,"mergeSort")})(Pe||(Pe={}));var Ze=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return o(e,"FullTextDocument2"),Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return b.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var u=r-1;return b.create(u,n-i[u])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),s;(function(e){var n=Object.prototype.toString;function i(g){return typeof g<"u"}o(i,"defined"),e.defined=i;function r(g){return typeof g>"u"}o(r,"undefined2"),e.undefined=r;function t(g){return g===!0||g===!1}o(t,"boolean"),e.boolean=t;function a(g){return n.call(g)==="[object String]"}o(a,"string"),e.string=a;function u(g){return n.call(g)==="[object Number]"}o(u,"number"),e.number=u;function c(g,C,S){return n.call(g)==="[object Number]"&&C<=g&&g<=S}o(c,"numberRange"),e.numberRange=c;function l(g){return n.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}o(l,"integer2"),e.integer=l;function d(g){return n.call(g)==="[object Number]"&&0<=g&&g<=2147483647}o(d,"uinteger2"),e.uinteger=d;function p(g){return n.call(g)==="[object Function]"}o(p,"func"),e.func=p;function w(g){return g!==null&&typeof g=="object"}o(w,"objectLiteral"),e.objectLiteral=w;function E(g,C){return Array.isArray(g)&&g.every(C)}o(E,"typedArray"),e.typedArray=E})(s||(s={}));var Ke=o(class{constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),M(n))).then(a=>{if(!a)return;const u=e.getWordUntilPosition(n),c=new f.Range(n.lineNumber,u.startColumn,n.lineNumber,u.endColumn),l=a.items.map(d=>{const p={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:nt(d.command),range:c,kind:rt(d.kind)};return d.textEdit&&(tt(d.textEdit)?p.range={insert:k(d.textEdit.insert),replace:k(d.textEdit.replace)}:p.range=k(d.textEdit.range),p.insertText=d.textEdit.newText),d.additionalTextEdits&&(p.additionalTextEdits=d.additionalTextEdits.map(Q)),d.insertTextFormat===q.Snippet&&(p.insertTextRules=f.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:a.isIncomplete,suggestions:l}})}},"CompletionAdapter");function M(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}o(M,"fromPosition");function et(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}o(et,"fromRange");function k(e){if(e)return new f.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}o(k,"toRange");function tt(e){return typeof e.insert<"u"&&typeof e.replace<"u"}o(tt,"isInsertReplaceEdit");function rt(e){const n=f.languages.CompletionItemKind;switch(e){case h.Text:return n.Text;case h.Method:return n.Method;case h.Function:return n.Function;case h.Constructor:return n.Constructor;case h.Field:return n.Field;case h.Variable:return n.Variable;case h.Class:return n.Class;case h.Interface:return n.Interface;case h.Module:return n.Module;case h.Property:return n.Property;case h.Unit:return n.Unit;case h.Value:return n.Value;case h.Enum:return n.Enum;case h.Keyword:return n.Keyword;case h.Snippet:return n.Snippet;case h.Color:return n.Color;case h.File:return n.File;case h.Reference:return n.Reference}return n.Property}o(rt,"toCompletionItemKind");function Q(e){if(e)return{range:k(e.range),text:e.newText}}o(Q,"toTextEdit");function nt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}o(nt,"toCommand");var De=o(class{constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),M(n))).then(t=>{if(t)return{range:k(t.range),contents:at(t.contents)}})}},"HoverAdapter");function it(e){return e&&typeof e=="object"&&typeof e.kind=="string"}o(it,"isMarkupContent");function Ie(e){return typeof e=="string"?{value:e}:it(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}o(Ie,"toMarkdownString");function at(e){if(e)return Array.isArray(e)?e.map(Ie):[Ie(e)]}o(at,"toMarkedStringArray");var Le=o(class{constructor(e){this._worker=e}provideDocumentHighlights(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDocumentHighlights(r.toString(),M(n))).then(t=>{if(t)return t.map(a=>({range:k(a.range),kind:ot(a.kind)}))})}},"DocumentHighlightAdapter");function ot(e){switch(e){case I.Read:return f.languages.DocumentHighlightKind.Read;case I.Write:return f.languages.DocumentHighlightKind.Write;case I.Text:return f.languages.DocumentHighlightKind.Text}return f.languages.DocumentHighlightKind.Text}o(ot,"toDocumentHighlightKind");var Me=o(class{constructor(e){this._worker=e}provideRenameEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doRename(t.toString(),M(n),i)).then(a=>st(a))}},"RenameAdapter");function st(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){const r=f.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,edit:{range:k(t.range),text:t.newText}})}return{edits:n}}o(st,"toWorkspaceEdit");var Se=o(class{constructor(e){this._worker=e}provideDocumentSymbols(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:ut(t.kind),range:k(t.location.range),selectionRange:k(t.location.range),tags:[]}))})}},"DocumentSymbolAdapter");function ut(e){let n=f.languages.SymbolKind;switch(e){case v.File:return n.Array;case v.Module:return n.Module;case v.Namespace:return n.Namespace;case v.Package:return n.Package;case v.Class:return n.Class;case v.Method:return n.Method;case v.Property:return n.Property;case v.Field:return n.Field;case v.Constructor:return n.Constructor;case v.Enum:return n.Enum;case v.Interface:return n.Interface;case v.Function:return n.Function;case v.Variable:return n.Variable;case v.Constant:return n.Constant;case v.String:return n.String;case v.Number:return n.Number;case v.Boolean:return n.Boolean;case v.Array:return n.Array}return n.Function}o(ut,"toSymbolKind");var je=o(class{constructor(e){this._worker=e}provideLinks(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(t=>({range:k(t.range),url:t.target}))}})}},"DocumentLinkAdapter"),Ne=o(class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.format(r.toString(),null,He(n)).then(a=>{if(!(!a||a.length===0))return a.map(Q)}))}},"DocumentFormattingEditProvider"),We=o(class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.format(t.toString(),et(n),He(i)).then(u=>{if(!(!u||u.length===0))return u.map(Q)}))}},"DocumentRangeFormattingEditProvider");function He(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}o(He,"fromFormattingOptions");var Oe=o(class{constructor(e){this._worker=e}provideFoldingRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{const u={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(u.kind=ct(a.kind)),u})})}},"FoldingRangeAdapter");function ct(e){switch(e){case P.Comment:return f.languages.FoldingRangeKind.Comment;case P.Imports:return f.languages.FoldingRangeKind.Imports;case P.Region:return f.languages.FoldingRangeKind.Region}}o(ct,"toFoldingRangeKind");var Ue=o(class{constructor(e){this._worker=e}provideSelectionRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(M))).then(t=>{if(t)return t.map(a=>{const u=[];for(;a;)u.push({range:k(a.range)}),a=a.parent;return u})})}},"SelectionRangeAdapter"),Ve=o(class extends Ke{constructor(e){super(e,[".",":","<",'"',"=","/"])}},"HTMLCompletionAdapter");function _t(e){const n=new Te(e),i=o((...t)=>n.getLanguageServiceWorker(...t),"worker");let r=e.languageId;f.languages.registerCompletionItemProvider(r,new Ve(i)),f.languages.registerHoverProvider(r,new De(i)),f.languages.registerDocumentHighlightProvider(r,new Le(i)),f.languages.registerLinkProvider(r,new je(i)),f.languages.registerFoldingRangeProvider(r,new Oe(i)),f.languages.registerDocumentSymbolProvider(r,new Se(i)),f.languages.registerSelectionRangeProvider(r,new Ue(i)),f.languages.registerRenameProvider(r,new Me(i)),r==="html"&&(f.languages.registerDocumentFormattingEditProvider(r,new Ne(i)),f.languages.registerDocumentRangeFormattingEditProvider(r,new We(i)))}o(_t,"setupMode1");function wt(e){const n=[],i=[],r=new Te(e);n.push(r);const t=o((...u)=>r.getLanguageServiceWorker(...u),"worker");function a(){const{languageId:u,modeConfiguration:c}=e;ze(i),c.completionItems&&i.push(f.languages.registerCompletionItemProvider(u,new Ve(t))),c.hovers&&i.push(f.languages.registerHoverProvider(u,new De(t))),c.documentHighlights&&i.push(f.languages.registerDocumentHighlightProvider(u,new Le(t))),c.links&&i.push(f.languages.registerLinkProvider(u,new je(t))),c.documentSymbols&&i.push(f.languages.registerDocumentSymbolProvider(u,new Se(t))),c.rename&&i.push(f.languages.registerRenameProvider(u,new Me(t))),c.foldingRanges&&i.push(f.languages.registerFoldingRangeProvider(u,new Oe(t))),c.selectionRanges&&i.push(f.languages.registerSelectionRangeProvider(u,new Ue(t))),c.documentFormattingEdits&&i.push(f.languages.registerDocumentFormattingEditProvider(u,new Ne(t))),c.documentRangeFormattingEdits&&i.push(f.languages.registerDocumentRangeFormattingEditProvider(u,new We(t)))}return o(a,"registerProviders"),a(),n.push(Re(i)),Re(n)}o(wt,"setupMode");function Re(e){return{dispose:()=>ze(e)}}o(Re,"asDisposable");function ze(e){for(;e.length;)e.pop().dispose()}o(ze,"disposeAll");export{wt as setupMode,_t as setupMode1};
//# sourceMappingURL=htmlMode-e3e31235.js.map
