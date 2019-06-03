;(function(root){
 'use strict'
 /*lent*/
 let is={}
 is.element = function(obj){return !!(obj && obj.nodeType === 1)}
 ;
 function entry(_target){
  let o={}
  o.target=is.element(_target)?_target:document.querySelector(_target)
  o.ctrl=(obj)=>{o._done(obj,'ctrl');return o;}
  o.input=(obj)=>{o._done(obj,'input');return o}
  o._done=(obj,mode)=>{
   o.target.addEventListener('keydown',function(ev){
    let k=ev.keyCode.toString()
    ,flg=(mode==='input')?(obj[k]):((ev.ctrlKey || ev.metaKey) && obj[k])
    if(!flg)return;
    ev.preventDefault();
    obj[k].call(o.target,ev)
   })   
  }
  o.end=(log)=>{console.log(log);return o}
  return o;
 }
 ;
 root.keyCmd=entry;
 /*
let in1=function(ev){ console.log('in') }
,in2=function(ev){ console.log('in') }
keyCmd(document.querySelector('textarea'))
 .input({'default':in1})
 .input({13:in1})
 .ctrl({83:in2}) //'S'
 .ctrl({13:in2}) //'enter'
  */
})(this);
