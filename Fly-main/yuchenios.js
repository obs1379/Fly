/**************************************
@Name：ios游戏迷 签到 积分可以兑换苹果付费游戏账号
@Author：Sliverkiss
@Date：2023-08-20 22:11:56

2023.09.04 新增评论任务、获取ck方法
2023.10.14 修复域名更换后签到失败的问题
2024.01.07 修复重写获取ck无法触发的问题

网站入口地址：https://yuchen.tonghuaios.com?tg=add3ea3f
介意邀请码可以把后面的参数删掉
使用方法：抓取yuchen.tonghuaios.com域名下签到的cookie填写到yuchenCookie，多账号用 @ 分隔
脚本兼容：Surge、QuantumultX、Loon、Shadowrocket、Node.js
只测试过loon和青龙，其它环境请自行尝试】

loon：
打开网站->登录后进入我的->随便点一个按钮，如编辑资料、修改密码、积分管理，若提示获取ck成功则可以使用该脚本

[Script]
cron "14 10 * * *" script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/yuchenios.js, timeout=300, tag=ios游戏迷
http-request ^https:\/\/yuchen.tonghuaios.com\/users\?.+ script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/yuchenios.js, timeout=10, tag=ios游戏迷获取token

[MITM]
hostname =yuchen.tonghuaios.com

====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/

// env.js 全局
const _0x42df18=_0x3310;(function(_0x1c28f9,_0x2444a9){const _0x46c20b=_0x3310,_0x52886d=_0x1c28f9();while(!![]){try{const _0x44f413=parseInt(_0x46c20b(0x1c0))/0x1*(-parseInt(_0x46c20b(0x14f))/0x2)+parseInt(_0x46c20b(0x1d4))/0x3+-parseInt(_0x46c20b(0x1cf))/0x4*(-parseInt(_0x46c20b(0x1c5))/0x5)+-parseInt(_0x46c20b(0x14a))/0x6*(parseInt(_0x46c20b(0x1a8))/0x7)+-parseInt(_0x46c20b(0x1b7))/0x8+-parseInt(_0x46c20b(0x209))/0x9*(-parseInt(_0x46c20b(0x17f))/0xa)+-parseInt(_0x46c20b(0x159))/0xb;if(_0x44f413===_0x2444a9)break;else _0x52886d['push'](_0x52886d['shift']());}catch(_0x8d7658){_0x52886d['push'](_0x52886d['shift']());}}}(_0x1d7b,0xb6d9e));const $=new Env(_0x42df18(0x166)),ckName=_0x42df18(0x1f0),Notify=0x1,notify=$['isNode']()?require('./sendNotify'):'';let envSplitor=['@'],userCookie=($[_0x42df18(0x147)]()?process[_0x42df18(0x1b5)][ckName]:$[_0x42df18(0x1d1)](ckName))||'',userList=[],userIdx=0x0,userCount=0x0,host=_0x42df18(0x1c6),commentStatus=!![];$[_0x42df18(0x184)]=[],$['barkKey']=($[_0x42df18(0x147)]()?process['env'][_0x42df18(0x19f)]:$[_0x42df18(0x1d1)](_0x42df18(0x19f)))||'';async function main(){const _0xd3e16f=_0x42df18;console['log']('\x0a==================\x20任务\x20==================\x0a'),taskall=[];for(let _0x1549f0 of userList){_0x1549f0[_0xd3e16f(0x1bd)]?(DoubleLog(_0xd3e16f(0x1ae)+_0x1549f0[_0xd3e16f(0x1c4)]+_0xd3e16f(0x155)),console[_0xd3e16f(0x1ed)](_0xd3e16f(0x163)+_0x1549f0['getRandomTime']()+'ms'),taskall[_0xd3e16f(0x1d3)](await _0x1549f0['signin']()),await $[_0xd3e16f(0x1fc)](_0x1549f0[_0xd3e16f(0x13d)]()),commentStatus&&(taskall[_0xd3e16f(0x1d3)](await _0x1549f0['comment']()),await $[_0xd3e16f(0x1fc)](_0x1549f0[_0xd3e16f(0x13d)]()))):$[_0xd3e16f(0x184)][_0xd3e16f(0x1d3)](_0xd3e16f(0x148)+_0x1549f0['index']+'\x20>>\x20Check\x20ck\x20error!');}await Promise[_0xd3e16f(0x15c)](taskall);}class UserInfo{constructor(_0xa5a060){const _0x44d2ba=_0x42df18;this['index']=++userIdx,this['ck']=_0xa5a060,this['ckStatus']=!![],this['headers']={'User-Agent':'StormSniffer-Extension/2254\x20CFNetwork/1327.0.4\x20Darwin/21.2.0','Cookie':this['ck'],'Content-Type':_0x44d2ba(0x173)},this[_0x44d2ba(0x16b)]=_0x44d2ba(0x18e);}[_0x42df18(0x13d)](){return randomInt(0x3e8,0xbb8);}async[_0x42df18(0x207)](){const _0x2422c7=_0x42df18;try{const _0x4023d6={'url':_0x2422c7(0x1a9)+host+_0x2422c7(0x143),'headers':this[_0x2422c7(0x185)],'body':this[_0x2422c7(0x16b)]};let _0x4b31fb=await httpRequest(_0x4023d6);_0x4b31fb?.['success']==_0x2422c7(0x182)?DoubleLog('✅'+_0x4b31fb?.[_0x2422c7(0x169)]):DoubleLog('🔶'+_0x4b31fb?.[_0x2422c7(0x169)]);}catch(_0x30a0c3){console[_0x2422c7(0x1ed)](_0x30a0c3);}}async[_0x42df18(0x1a2)](){const _0x4baa9b=_0x42df18,_0x58394a=['每日坚持打卡，加油！',_0x4baa9b(0x16e),_0x4baa9b(0x1e5),_0x4baa9b(0x19e),'签到','支持','谢谢','每天签到冲冲冲',_0x4baa9b(0x13b),'加油签到赚积分','积分还是挺好攒的',_0x4baa9b(0x15b),_0x4baa9b(0x189),_0x4baa9b(0x1fe),_0x4baa9b(0x1d2),_0x4baa9b(0x13e),'太好用了吧，资源多，太赞了','资源很齐全！要下的都找到了',_0x4baa9b(0x164),_0x4baa9b(0x154),_0x4baa9b(0x1ca),_0x4baa9b(0x17c),_0x4baa9b(0x194),_0x4baa9b(0x1d5),_0x4baa9b(0x157),'很不错的积分机制，比一些资源网站好多了',_0x4baa9b(0x1de),_0x4baa9b(0x139),_0x4baa9b(0x1ab),'每天都要记得签到哦',_0x4baa9b(0x178),'赚积分咯！',_0x4baa9b(0x1b9)],_0x32d1de=_0x58394a[Math[_0x4baa9b(0x172)](Math[_0x4baa9b(0x168)]()*_0x58394a[_0x4baa9b(0x1d7)])],_0x458daa=encodeURIComponent(_0x32d1de);try{const _0x4e14b8={'url':'https://'+host+'/wp-admin/admin-ajax.php','headers':this['headers'],'body':_0x4baa9b(0x1f2)+_0x458daa+'&comment_post_ID=16047&comment_parent=0&comment_mail_notify=comment_mail_notify&action=ajax_comment'};$[_0x4baa9b(0x1fd)](_0x4e14b8,(_0x5001ea,_0x278e59,_0x13cb29)=>{const _0x5ed218=_0x4baa9b;console['log'](_0x13cb29),DoubleLog(_0x5ed218(0x149));});}catch(_0x229e89){console['log'](_0x229e89);}}}async function getCookie(){const _0x1fcbf0=_0x42df18;if($request&&$request['method']!=_0x1fcbf0(0x1ac)){const _0x3da25e=$request[_0x1fcbf0(0x185)][_0x1fcbf0(0x1b3)]||$request[_0x1fcbf0(0x185)]['cookie'];_0x3da25e?($[_0x1fcbf0(0x13a)](_0x3da25e,ckName),$['msg']($[_0x1fcbf0(0x18b)],'',_0x1fcbf0(0x1dc))):$[_0x1fcbf0(0x169)]($[_0x1fcbf0(0x18b)],'',_0x1fcbf0(0x151));}}!(async()=>{const _0x2dfb10=_0x42df18;if(typeof $request!=_0x2dfb10(0x1d9)){await getCookie();return;}if(!await checkEnv())throw new Error(_0x2dfb10(0x176));;userList[_0x2dfb10(0x1d7)]>0x0&&await main();$[_0x2dfb10(0x1ec)]&&await BarkNotify($,$[_0x2dfb10(0x1ec)],$[_0x2dfb10(0x18b)],$[_0x2dfb10(0x184)][_0x2dfb10(0x1e1)]('\x0a'));;})()['catch'](_0x4ff905=>$['notifyMsg'][_0x42df18(0x1d3)](_0x4ff905[_0x42df18(0x1c3)]||_0x4ff905))[_0x42df18(0x162)](async()=>{const _0x420969=_0x42df18;await SendMsg($[_0x420969(0x184)][_0x420969(0x1e1)]('\x0a')),$['done']();});function DoubleLog(_0x1d4648){const _0x4e1a79=_0x42df18;$[_0x4e1a79(0x147)]()?_0x1d4648&&(console[_0x4e1a79(0x1ed)](''+_0x1d4648),$[_0x4e1a79(0x184)][_0x4e1a79(0x1d3)](''+_0x1d4648)):(console['log'](''+_0x1d4648),$[_0x4e1a79(0x184)][_0x4e1a79(0x1d3)](''+_0x1d4648));}function toParams(_0x46d18d){const _0x1ce9da=_0x42df18;var _0x1743c6=Object[_0x1ce9da(0x1db)](_0x46d18d)[_0x1ce9da(0x191)](function(_0x56b451){return encodeURIComponent(_0x56b451)+'='+encodeURIComponent(_0x46d18d[_0x56b451]);})[_0x1ce9da(0x1e1)]('&');return _0x1743c6;}async function checkEnv(){const _0x334a4b=_0x42df18;if(userCookie){let _0x345fac=envSplitor[0x0];for(let _0xf96347 of envSplitor)if(userCookie['indexOf'](_0xf96347)>-0x1){_0x345fac=_0xf96347;break;}for(let _0x4cd909 of userCookie[_0x334a4b(0x1cd)](_0x345fac))_0x4cd909&&userList[_0x334a4b(0x1d3)](new UserInfo(_0x4cd909));userCount=userList['length'];}else{console[_0x334a4b(0x1ed)](_0x334a4b(0x19d));return;}return console['log'](_0x334a4b(0x1be)+userCount+_0x334a4b(0x1af)),!![];}function randomInt(_0x5dd2e5,_0x7f8b98){const _0x289d3e=_0x42df18;return Math['round'](Math[_0x289d3e(0x168)]()*(_0x7f8b98-_0x5dd2e5)+_0x5dd2e5);}async function SendMsg(_0x284200){const _0x322739=_0x42df18;if(!_0x284200)return;Notify>0x0?$[_0x322739(0x147)]()?await notify['sendNotify']($['name'],_0x284200):$['msg']($[_0x322739(0x18b)],'',_0x284200):console[_0x322739(0x1ed)](_0x284200);}function httpRequest(_0x18f19d,_0x44f713){const _0x4f77cb=_0x42df18;return typeof _0x44f713==='undefined'?'body'in _0x18f19d?_0x44f713='post':_0x44f713=_0x4f77cb(0x1a4):_0x44f713=_0x44f713,new Promise(_0x21de89=>{$[_0x44f713](_0x18f19d,(_0x4a9e9e,_0x4b8920,_0x6248e4)=>{const _0x387b6f=_0x3310;try{_0x4a9e9e?(console[_0x387b6f(0x1ed)](_0x44f713+_0x387b6f(0x1c2)),$['logErr'](_0x4a9e9e)):_0x6248e4?(typeof JSON['parse'](_0x6248e4)=='object'?_0x6248e4=JSON['parse'](_0x6248e4):_0x6248e4=_0x6248e4,_0x21de89(_0x6248e4)):console[_0x387b6f(0x1ed)](_0x387b6f(0x1fa));}catch(_0x33c328){$[_0x387b6f(0x1a7)](_0x33c328,_0x4b8920);}finally{_0x21de89();}});});}async function BarkNotify(_0x5b4c6e,_0x96e001,_0x43cd77,_0x20c521){const _0x345e7e=_0x42df18;for(let _0x415f8f=0x0;_0x415f8f<0x3;_0x415f8f++){console[_0x345e7e(0x1ed)](_0x345e7e(0x1e0)+(_0x415f8f+0x1)+')');const _0x44b774=await new Promise(_0x5914c3=>{const _0x58940f=_0x345e7e;_0x5b4c6e[_0x58940f(0x1fd)]({'url':_0x58940f(0x19b),'headers':{'Content-Type':_0x58940f(0x199)},'body':JSON['stringify']({'title':_0x43cd77,'body':_0x20c521,'device_key':_0x96e001,'ext_params':{'group':_0x43cd77}})},(_0x1343aa,_0x2245f2,_0x4f5374)=>_0x2245f2&&_0x2245f2['status']==0xc8?_0x5914c3(0x1):_0x5914c3(_0x4f5374||_0x1343aa));});if(_0x44b774===0x1){console[_0x345e7e(0x1ed)](_0x345e7e(0x206));break;}else console[_0x345e7e(0x1ed)]('❌Push\x20failed!\x20>>\x20'+(_0x44b774[_0x345e7e(0x1c3)]||_0x44b774));}};function _0x3310(_0x10a18a,_0x453df4){const _0x1d7b6a=_0x1d7b();return _0x3310=function(_0x33104b,_0x21d0fc){_0x33104b=_0x33104b-0x139;let _0x7a44d3=_0x1d7b6a[_0x33104b];return _0x7a44d3;},_0x3310(_0x10a18a,_0x453df4);}function Env(_0x3b27f1,_0x952668){const _0x2178dd=_0x42df18;class _0x3ef88b{constructor(_0x4e5011){const _0x4adb1d=_0x3310;this[_0x4adb1d(0x1b5)]=_0x4e5011;}[_0x2178dd(0x1a6)](_0x3f609a,_0x11b872=_0x2178dd(0x1bf)){const _0x50233d=_0x2178dd;_0x3f609a=_0x50233d(0x205)==typeof _0x3f609a?{'url':_0x3f609a}:_0x3f609a;let _0x2f3391=this[_0x50233d(0x1a4)];return'POST'===_0x11b872&&(_0x2f3391=this[_0x50233d(0x1fd)]),new Promise((_0x2a4ccc,_0x1ee8c7)=>{const _0x5cdf65=_0x50233d;_0x2f3391[_0x5cdf65(0x1d8)](this,_0x3f609a,(_0x5134b8,_0x46805e,_0x2fbc5e)=>{_0x5134b8?_0x1ee8c7(_0x5134b8):_0x2a4ccc(_0x46805e);});});}[_0x2178dd(0x1a4)](_0x17087f){const _0x19eda0=_0x2178dd;return this[_0x19eda0(0x1a6)][_0x19eda0(0x1d8)](this[_0x19eda0(0x1b5)],_0x17087f);}[_0x2178dd(0x1fd)](_0x5e4dcc){const _0x372708=_0x2178dd;return this[_0x372708(0x1a6)]['call'](this['env'],_0x5e4dcc,'POST');}}return new class{constructor(_0x8dd82f,_0x38612d){const _0x127b93=_0x2178dd;this[_0x127b93(0x18b)]=_0x8dd82f,this['http']=new _0x3ef88b(this),this[_0x127b93(0x153)]=null,this['dataFile']='box.dat',this[_0x127b93(0x158)]=[],this[_0x127b93(0x1c8)]=!0x1,this['isNeedRewrite']=!0x1,this[_0x127b93(0x17a)]='\x0a',this[_0x127b93(0x150)]=_0x127b93(0x1b2),this['startTime']=new Date()[_0x127b93(0x14e)](),Object[_0x127b93(0x1d0)](this,_0x38612d),this[_0x127b93(0x1ed)]('','🔔'+this[_0x127b93(0x18b)]+_0x127b93(0x141));}[_0x2178dd(0x16a)](){const _0x1bb4c2=_0x2178dd;return'undefined'!=typeof $environment&&$environment[_0x1bb4c2(0x193)]?_0x1bb4c2(0x165):_0x1bb4c2(0x1d9)!=typeof $environment&&$environment['stash-version']?_0x1bb4c2(0x1f7):'undefined'!=typeof module&&module['exports']?_0x1bb4c2(0x1dd):_0x1bb4c2(0x1d9)!=typeof $task?_0x1bb4c2(0x1f4):_0x1bb4c2(0x1d9)!=typeof $loon?_0x1bb4c2(0x1b6):_0x1bb4c2(0x1d9)!=typeof $rocket?_0x1bb4c2(0x18d):void 0x0;}[_0x2178dd(0x147)](){return'Node.js'===this['getEnv']();}['isQuanX'](){const _0x28856d=_0x2178dd;return'Quantumult\x20X'===this[_0x28856d(0x16a)]();}[_0x2178dd(0x146)](){const _0x5259bc=_0x2178dd;return'Surge'===this[_0x5259bc(0x16a)]();}[_0x2178dd(0x1ea)](){const _0x6c2a62=_0x2178dd;return _0x6c2a62(0x1b6)===this['getEnv']();}['isShadowrocket'](){const _0x8e41a5=_0x2178dd;return'Shadowrocket'===this[_0x8e41a5(0x16a)]();}[_0x2178dd(0x142)](){const _0x25fef7=_0x2178dd;return _0x25fef7(0x1f7)===this['getEnv']();}[_0x2178dd(0x203)](_0x12e7f5,_0x499560=null){const _0x511241=_0x2178dd;try{return JSON[_0x511241(0x1ba)](_0x12e7f5);}catch{return _0x499560;}}[_0x2178dd(0x140)](_0x3da378,_0x40d0a9=null){const _0x311f0d=_0x2178dd;try{return JSON[_0x311f0d(0x1ff)](_0x3da378);}catch{return _0x40d0a9;}}[_0x2178dd(0x19c)](_0x59e6c0,_0x756cf7){const _0x2446b6=_0x2178dd;let _0x512b9f=_0x756cf7;const _0x303560=this[_0x2446b6(0x1d1)](_0x59e6c0);if(_0x303560)try{_0x512b9f=JSON['parse'](this['getdata'](_0x59e6c0));}catch{}return _0x512b9f;}[_0x2178dd(0x1e8)](_0x4985b4,_0x78f18){const _0x7b581c=_0x2178dd;try{return this['setdata'](JSON[_0x7b581c(0x1ff)](_0x4985b4),_0x78f18);}catch{return!0x1;}}[_0x2178dd(0x1e6)](_0x1eb913){return new Promise(_0x1e1a3f=>{const _0x15db04=_0x3310;this[_0x15db04(0x1a4)]({'url':_0x1eb913},(_0x55434f,_0x1358f7,_0x45653e)=>_0x1e1a3f(_0x45653e));});}['runScript'](_0x3a6675,_0x3374f7){const _0x5e913f=_0x2178dd;return new Promise(_0x5d37c5=>{const _0x2de70b=_0x3310;let _0x58c472=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x58c472=_0x58c472?_0x58c472[_0x2de70b(0x1b1)](/\n/g,'')[_0x2de70b(0x144)]():_0x58c472;let _0xd9aec=this[_0x2de70b(0x1d1)](_0x2de70b(0x1b8));_0xd9aec=_0xd9aec?0x1*_0xd9aec:0x14,_0xd9aec=_0x3374f7&&_0x3374f7[_0x2de70b(0x1eb)]?_0x3374f7[_0x2de70b(0x1eb)]:_0xd9aec;const [_0x3557e5,_0x32831b]=_0x58c472[_0x2de70b(0x1cd)]('@'),_0x32248e={'url':_0x2de70b(0x188)+_0x32831b+'/v1/scripting/evaluate','body':{'script_text':_0x3a6675,'mock_type':_0x2de70b(0x175),'timeout':_0xd9aec},'headers':{'X-Key':_0x3557e5,'Accept':'*/*'},'timeout':_0xd9aec};this[_0x2de70b(0x1fd)](_0x32248e,(_0x35c9f0,_0x40f233,_0x19c826)=>_0x5d37c5(_0x19c826));})[_0x5e913f(0x1e4)](_0x296dfd=>this[_0x5e913f(0x1a7)](_0x296dfd));}['loaddata'](){const _0x206baa=_0x2178dd;if(!this[_0x206baa(0x147)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x206baa(0x1e3)]=this[_0x206baa(0x1e3)]?this[_0x206baa(0x1e3)]:require(_0x206baa(0x1e3));const _0x2af921=this[_0x206baa(0x1e3)][_0x206baa(0x1da)](this[_0x206baa(0x186)]),_0x2855b8=this[_0x206baa(0x1e3)][_0x206baa(0x1da)](process['cwd'](),this[_0x206baa(0x186)]),_0x2b320d=this['fs'][_0x206baa(0x1cb)](_0x2af921),_0x1dfdc7=!_0x2b320d&&this['fs']['existsSync'](_0x2855b8);if(!_0x2b320d&&!_0x1dfdc7)return{};{const _0x5ed8a9=_0x2b320d?_0x2af921:_0x2855b8;try{return JSON['parse'](this['fs'][_0x206baa(0x1e7)](_0x5ed8a9));}catch(_0x54ffbd){return{};}}}}[_0x2178dd(0x1f1)](){const _0xc09d9b=_0x2178dd;if(this[_0xc09d9b(0x147)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0xc09d9b(0x1e3)]=this[_0xc09d9b(0x1e3)]?this['path']:require('path');const _0x36f2aa=this[_0xc09d9b(0x1e3)][_0xc09d9b(0x1da)](this[_0xc09d9b(0x186)]),_0x14dcbf=this['path'][_0xc09d9b(0x1da)](process[_0xc09d9b(0x145)](),this[_0xc09d9b(0x186)]),_0x41d241=this['fs'][_0xc09d9b(0x1cb)](_0x36f2aa),_0x15d699=!_0x41d241&&this['fs'][_0xc09d9b(0x1cb)](_0x14dcbf),_0x5d70bf=JSON[_0xc09d9b(0x1ff)](this[_0xc09d9b(0x153)]);_0x41d241?this['fs'][_0xc09d9b(0x16d)](_0x36f2aa,_0x5d70bf):_0x15d699?this['fs'][_0xc09d9b(0x16d)](_0x14dcbf,_0x5d70bf):this['fs'][_0xc09d9b(0x16d)](_0x36f2aa,_0x5d70bf);}}[_0x2178dd(0x195)](_0x1dd356,_0x4699a0,_0x1673d8){const _0x215b71=_0x2178dd,_0x24ddf1=_0x4699a0[_0x215b71(0x1b1)](/\[(\d+)\]/g,_0x215b71(0x1ce))[_0x215b71(0x1cd)]('.');let _0xf60f97=_0x1dd356;for(const _0x227876 of _0x24ddf1)if(_0xf60f97=Object(_0xf60f97)[_0x227876],void 0x0===_0xf60f97)return _0x1673d8;return _0xf60f97;}[_0x2178dd(0x202)](_0x4b27b0,_0x233706,_0x249282){const _0xf0bfd9=_0x2178dd;return Object(_0x4b27b0)!==_0x4b27b0?_0x4b27b0:(Array[_0xf0bfd9(0x1ee)](_0x233706)||(_0x233706=_0x233706[_0xf0bfd9(0x15e)]()[_0xf0bfd9(0x200)](/[^.[\]]+/g)||[]),_0x233706[_0xf0bfd9(0x1fb)](0x0,-0x1)[_0xf0bfd9(0x208)]((_0x3755d7,_0x1f87ce,_0x4cd349)=>Object(_0x3755d7[_0x1f87ce])===_0x3755d7[_0x1f87ce]?_0x3755d7[_0x1f87ce]:_0x3755d7[_0x1f87ce]=Math[_0xf0bfd9(0x1bc)](_0x233706[_0x4cd349+0x1])>>0x0==+_0x233706[_0x4cd349+0x1]?[]:{},_0x4b27b0)[_0x233706[_0x233706[_0xf0bfd9(0x1d7)]-0x1]]=_0x249282,_0x4b27b0);}[_0x2178dd(0x1d1)](_0xd9b69f){const _0x502ec6=_0x2178dd;let _0x3c5188=this['getval'](_0xd9b69f);if(/^@/[_0x502ec6(0x14c)](_0xd9b69f)){const [,_0x13e1d2,_0x4dede6]=/^@(.*?)\.(.*?)$/[_0x502ec6(0x187)](_0xd9b69f),_0x2eea0c=_0x13e1d2?this[_0x502ec6(0x14d)](_0x13e1d2):'';if(_0x2eea0c)try{const _0x2d32e0=JSON[_0x502ec6(0x1ba)](_0x2eea0c);_0x3c5188=_0x2d32e0?this[_0x502ec6(0x195)](_0x2d32e0,_0x4dede6,''):_0x3c5188;}catch(_0x20f569){_0x3c5188='';}}return _0x3c5188;}[_0x2178dd(0x13a)](_0x25ba1b,_0x1b7c76){const _0x51d702=_0x2178dd;let _0x414f37=!0x1;if(/^@/[_0x51d702(0x14c)](_0x1b7c76)){const [,_0x2a104d,_0x5789a4]=/^@(.*?)\.(.*?)$/[_0x51d702(0x187)](_0x1b7c76),_0xcd3eca=this[_0x51d702(0x14d)](_0x2a104d),_0x5dc692=_0x2a104d?_0x51d702(0x1bb)===_0xcd3eca?null:_0xcd3eca||'{}':'{}';try{const _0x3ef519=JSON[_0x51d702(0x1ba)](_0x5dc692);this['lodash_set'](_0x3ef519,_0x5789a4,_0x25ba1b),_0x414f37=this[_0x51d702(0x1b0)](JSON[_0x51d702(0x1ff)](_0x3ef519),_0x2a104d);}catch(_0x39ebbe){const _0xd5735e={};this[_0x51d702(0x202)](_0xd5735e,_0x5789a4,_0x25ba1b),_0x414f37=this[_0x51d702(0x1b0)](JSON[_0x51d702(0x1ff)](_0xd5735e),_0x2a104d);}}else _0x414f37=this[_0x51d702(0x1b0)](_0x25ba1b,_0x1b7c76);return _0x414f37;}[_0x2178dd(0x14d)](_0x493ff9){const _0x5bbebb=_0x2178dd;switch(this[_0x5bbebb(0x16a)]()){case'Surge':case _0x5bbebb(0x1b6):case _0x5bbebb(0x1f7):case _0x5bbebb(0x18d):return $persistentStore[_0x5bbebb(0x1e9)](_0x493ff9);case _0x5bbebb(0x1f4):return $prefs['valueForKey'](_0x493ff9);case'Node.js':return this[_0x5bbebb(0x153)]=this[_0x5bbebb(0x174)](),this[_0x5bbebb(0x153)][_0x493ff9];default:return this[_0x5bbebb(0x153)]&&this[_0x5bbebb(0x153)][_0x493ff9]||null;}}[_0x2178dd(0x1b0)](_0x1c5745,_0x34949d){const _0x1dbad0=_0x2178dd;switch(this[_0x1dbad0(0x16a)]()){case _0x1dbad0(0x165):case'Loon':case _0x1dbad0(0x1f7):case _0x1dbad0(0x18d):return $persistentStore['write'](_0x1c5745,_0x34949d);case _0x1dbad0(0x1f4):return $prefs[_0x1dbad0(0x156)](_0x1c5745,_0x34949d);case _0x1dbad0(0x1dd):return this[_0x1dbad0(0x153)]=this[_0x1dbad0(0x174)](),this[_0x1dbad0(0x153)][_0x34949d]=_0x1c5745,this['writedata'](),!0x0;default:return this[_0x1dbad0(0x153)]&&this[_0x1dbad0(0x153)][_0x34949d]||null;}}[_0x2178dd(0x16c)](_0x1827d0){const _0x5e5279=_0x2178dd;this[_0x5e5279(0x181)]=this[_0x5e5279(0x181)]?this['got']:require(_0x5e5279(0x181)),this[_0x5e5279(0x1a0)]=this[_0x5e5279(0x1a0)]?this['cktough']:require('tough-cookie'),this[_0x5e5279(0x19a)]=this[_0x5e5279(0x19a)]?this[_0x5e5279(0x19a)]:new this[(_0x5e5279(0x1a0))][(_0x5e5279(0x1a5))](),_0x1827d0&&(_0x1827d0[_0x5e5279(0x185)]=_0x1827d0['headers']?_0x1827d0[_0x5e5279(0x185)]:{},void 0x0===_0x1827d0[_0x5e5279(0x185)]['Cookie']&&void 0x0===_0x1827d0['cookieJar']&&(_0x1827d0['cookieJar']=this[_0x5e5279(0x19a)]));}[_0x2178dd(0x1a4)](_0x48b5c,_0x3b79c=()=>{}){const _0xf32739=_0x2178dd;switch(_0x48b5c[_0xf32739(0x185)]&&(delete _0x48b5c[_0xf32739(0x185)][_0xf32739(0x1e2)],delete _0x48b5c[_0xf32739(0x185)][_0xf32739(0x1c9)],delete _0x48b5c[_0xf32739(0x185)]['content-type'],delete _0x48b5c[_0xf32739(0x185)][_0xf32739(0x15d)]),_0x48b5c[_0xf32739(0x161)]&&(_0x48b5c[_0xf32739(0x196)]+='?'+this[_0xf32739(0x192)](_0x48b5c[_0xf32739(0x161)])),this['getEnv']()){case'Surge':case _0xf32739(0x1b6):case'Stash':case'Shadowrocket':default:this[_0xf32739(0x146)]()&&this['isNeedRewrite']&&(_0x48b5c[_0xf32739(0x185)]=_0x48b5c[_0xf32739(0x185)]||{},Object[_0xf32739(0x1d0)](_0x48b5c[_0xf32739(0x185)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x48b5c,(_0x459aa6,_0x31365c,_0x399c19)=>{const _0x3047cb=_0xf32739;!_0x459aa6&&_0x31365c&&(_0x31365c['body']=_0x399c19,_0x31365c[_0x3047cb(0x17b)]=_0x31365c[_0x3047cb(0x201)]?_0x31365c[_0x3047cb(0x201)]:_0x31365c['statusCode'],_0x31365c['status']=_0x31365c[_0x3047cb(0x17b)]),_0x3b79c(_0x459aa6,_0x31365c,_0x399c19);});break;case'Quantumult\x20X':this[_0xf32739(0x1ad)]&&(_0x48b5c['opts']=_0x48b5c[_0xf32739(0x177)]||{},Object[_0xf32739(0x1d0)](_0x48b5c[_0xf32739(0x177)],{'hints':!0x1})),$task[_0xf32739(0x16f)](_0x48b5c)[_0xf32739(0x1cc)](_0x5d45d5=>{const {statusCode:_0x227126,statusCode:_0x3276a7,headers:_0x5eb029,body:_0x4c6b35,bodyBytes:_0x32c87e}=_0x5d45d5;_0x3b79c(null,{'status':_0x227126,'statusCode':_0x3276a7,'headers':_0x5eb029,'body':_0x4c6b35,'bodyBytes':_0x32c87e},_0x4c6b35,_0x32c87e);},_0x5de1ca=>_0x3b79c(_0x5de1ca&&_0x5de1ca[_0xf32739(0x1c7)]||_0xf32739(0x1f6)));break;case _0xf32739(0x1dd):let _0x5b91d8=require('iconv-lite');this[_0xf32739(0x16c)](_0x48b5c),this[_0xf32739(0x181)](_0x48b5c)['on'](_0xf32739(0x1d6),(_0x469c95,_0x14d3cc)=>{const _0x309069=_0xf32739;try{if(_0x469c95[_0x309069(0x185)]['set-cookie']){const _0x178aa9=_0x469c95[_0x309069(0x185)][_0x309069(0x190)][_0x309069(0x191)](this[_0x309069(0x1a0)]['Cookie'][_0x309069(0x1ba)])[_0x309069(0x15e)]();_0x178aa9&&this[_0x309069(0x19a)][_0x309069(0x18f)](_0x178aa9,null),_0x14d3cc[_0x309069(0x1f9)]=this[_0x309069(0x19a)];}}catch(_0x15545f){this[_0x309069(0x1a7)](_0x15545f);}})[_0xf32739(0x1cc)](_0x1faa1c=>{const _0x37347f=_0xf32739,{statusCode:_0x2aab0b,statusCode:_0x52f463,headers:_0x2767c7,rawBody:_0x411b9b}=_0x1faa1c,_0x57424d=_0x5b91d8['decode'](_0x411b9b,this[_0x37347f(0x150)]);_0x3b79c(null,{'status':_0x2aab0b,'statusCode':_0x52f463,'headers':_0x2767c7,'rawBody':_0x411b9b,'body':_0x57424d},_0x57424d);},_0x453605=>{const _0xc67e59=_0xf32739,{message:_0x108cf9,response:_0x2a3eed}=_0x453605;_0x3b79c(_0x108cf9,_0x2a3eed,_0x2a3eed&&_0x5b91d8[_0xc67e59(0x160)](_0x2a3eed[_0xc67e59(0x1ef)],this[_0xc67e59(0x150)]));});}}[_0x2178dd(0x1fd)](_0x57077,_0x35b8c4=()=>{}){const _0xfa01f7=_0x2178dd,_0x39e94a=_0x57077['method']?_0x57077['method'][_0xfa01f7(0x17d)]():_0xfa01f7(0x1fd);switch(_0x57077['body']&&_0x57077[_0xfa01f7(0x185)]&&!_0x57077[_0xfa01f7(0x185)][_0xfa01f7(0x1e2)]&&!_0x57077[_0xfa01f7(0x185)][_0xfa01f7(0x1f8)]&&(_0x57077['headers'][_0xfa01f7(0x1f8)]=_0xfa01f7(0x18c)),_0x57077[_0xfa01f7(0x185)]&&(delete _0x57077['headers'][_0xfa01f7(0x1c9)],delete _0x57077[_0xfa01f7(0x185)][_0xfa01f7(0x15d)]),this[_0xfa01f7(0x16a)]()){case _0xfa01f7(0x165):case'Loon':case'Stash':case _0xfa01f7(0x18d):default:this[_0xfa01f7(0x146)]()&&this[_0xfa01f7(0x1ad)]&&(_0x57077[_0xfa01f7(0x185)]=_0x57077[_0xfa01f7(0x185)]||{},Object['assign'](_0x57077['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x39e94a](_0x57077,(_0x4383d1,_0x288c27,_0x3bd0f0)=>{const _0xa0defa=_0xfa01f7;!_0x4383d1&&_0x288c27&&(_0x288c27[_0xa0defa(0x16b)]=_0x3bd0f0,_0x288c27[_0xa0defa(0x17b)]=_0x288c27['status']?_0x288c27[_0xa0defa(0x201)]:_0x288c27[_0xa0defa(0x17b)],_0x288c27[_0xa0defa(0x201)]=_0x288c27['statusCode']),_0x35b8c4(_0x4383d1,_0x288c27,_0x3bd0f0);});break;case _0xfa01f7(0x1f4):_0x57077[_0xfa01f7(0x1a3)]=_0x39e94a,this[_0xfa01f7(0x1ad)]&&(_0x57077[_0xfa01f7(0x177)]=_0x57077[_0xfa01f7(0x177)]||{},Object[_0xfa01f7(0x1d0)](_0x57077[_0xfa01f7(0x177)],{'hints':!0x1})),$task[_0xfa01f7(0x16f)](_0x57077)[_0xfa01f7(0x1cc)](_0x346c5a=>{const {statusCode:_0x4808f9,statusCode:_0x5a8a7a,headers:_0x498c00,body:_0x55fec3,bodyBytes:_0x265296}=_0x346c5a;_0x35b8c4(null,{'status':_0x4808f9,'statusCode':_0x5a8a7a,'headers':_0x498c00,'body':_0x55fec3,'bodyBytes':_0x265296},_0x55fec3,_0x265296);},_0x245431=>_0x35b8c4(_0x245431&&_0x245431[_0xfa01f7(0x1c7)]||_0xfa01f7(0x1f6)));break;case _0xfa01f7(0x1dd):let _0x1dcf25=require('iconv-lite');this[_0xfa01f7(0x16c)](_0x57077);const {url:_0x5d75fa,..._0x258a3c}=_0x57077;this[_0xfa01f7(0x181)][_0x39e94a](_0x5d75fa,_0x258a3c)[_0xfa01f7(0x1cc)](_0x326980=>{const _0x3ef91d=_0xfa01f7,{statusCode:_0x494f35,statusCode:_0x1974c6,headers:_0x51d459,rawBody:_0x596358}=_0x326980,_0xe2dfca=_0x1dcf25[_0x3ef91d(0x160)](_0x596358,this[_0x3ef91d(0x150)]);_0x35b8c4(null,{'status':_0x494f35,'statusCode':_0x1974c6,'headers':_0x51d459,'rawBody':_0x596358,'body':_0xe2dfca},_0xe2dfca);},_0x5b7f18=>{const _0x1b2989=_0xfa01f7,{message:_0x5cfb97,response:_0x5de5b2}=_0x5b7f18;_0x35b8c4(_0x5cfb97,_0x5de5b2,_0x5de5b2&&_0x1dcf25[_0x1b2989(0x160)](_0x5de5b2[_0x1b2989(0x1ef)],this[_0x1b2989(0x150)]));});}}[_0x2178dd(0x17e)](_0xa08c99,_0x44fc6a=null){const _0x5a48f0=_0x2178dd,_0x3469d1=_0x44fc6a?new Date(_0x44fc6a):new Date();let _0x18c0ff={'M+':_0x3469d1[_0x5a48f0(0x152)]()+0x1,'d+':_0x3469d1[_0x5a48f0(0x1aa)](),'H+':_0x3469d1[_0x5a48f0(0x15f)](),'m+':_0x3469d1[_0x5a48f0(0x13f)](),'s+':_0x3469d1[_0x5a48f0(0x170)](),'q+':Math[_0x5a48f0(0x172)]((_0x3469d1['getMonth']()+0x3)/0x3),'S':_0x3469d1[_0x5a48f0(0x204)]()};/(y+)/[_0x5a48f0(0x14c)](_0xa08c99)&&(_0xa08c99=_0xa08c99[_0x5a48f0(0x1b1)](RegExp['$1'],(_0x3469d1['getFullYear']()+'')[_0x5a48f0(0x1b4)](0x4-RegExp['$1']['length'])));for(let _0x496b7d in _0x18c0ff)new RegExp('('+_0x496b7d+')')[_0x5a48f0(0x14c)](_0xa08c99)&&(_0xa08c99=_0xa08c99[_0x5a48f0(0x1b1)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x18c0ff[_0x496b7d]:('00'+_0x18c0ff[_0x496b7d])[_0x5a48f0(0x1b4)]((''+_0x18c0ff[_0x496b7d])[_0x5a48f0(0x1d7)])));return _0xa08c99;}[_0x2178dd(0x192)](_0x5291a0){const _0x17305a=_0x2178dd;let _0x57f6e4='';for(const _0x20496c in _0x5291a0){let _0x20d3c2=_0x5291a0[_0x20496c];null!=_0x20d3c2&&''!==_0x20d3c2&&(_0x17305a(0x14b)==typeof _0x20d3c2&&(_0x20d3c2=JSON[_0x17305a(0x1ff)](_0x20d3c2)),_0x57f6e4+=_0x20496c+'='+_0x20d3c2+'&');}return _0x57f6e4=_0x57f6e4[_0x17305a(0x13c)](0x0,_0x57f6e4['length']-0x1),_0x57f6e4;}[_0x2178dd(0x169)](_0x41361d=_0x3b27f1,_0x18cc10='',_0x38b774='',_0xfc2c5){const _0x4e989b=_0x2178dd,_0x241b6a=_0x26860d=>{const _0x1c02ea=_0x3310;switch(typeof _0x26860d){case void 0x0:return _0x26860d;case _0x1c02ea(0x205):switch(this[_0x1c02ea(0x16a)]()){case'Surge':case _0x1c02ea(0x1f7):default:return{'url':_0x26860d};case _0x1c02ea(0x1b6):case _0x1c02ea(0x18d):return _0x26860d;case _0x1c02ea(0x1f4):return{'open-url':_0x26860d};case _0x1c02ea(0x1dd):return;}case _0x1c02ea(0x14b):switch(this[_0x1c02ea(0x16a)]()){case'Surge':case _0x1c02ea(0x1f7):case _0x1c02ea(0x18d):default:{let _0x26093c=_0x26860d[_0x1c02ea(0x196)]||_0x26860d[_0x1c02ea(0x198)]||_0x26860d[_0x1c02ea(0x179)];return{'url':_0x26093c};}case'Loon':{let _0x3743f8=_0x26860d[_0x1c02ea(0x198)]||_0x26860d[_0x1c02ea(0x196)]||_0x26860d['open-url'],_0x25a6d1=_0x26860d[_0x1c02ea(0x167)]||_0x26860d[_0x1c02ea(0x1a1)];return{'openUrl':_0x3743f8,'mediaUrl':_0x25a6d1};}case _0x1c02ea(0x1f4):{let _0x43d55b=_0x26860d[_0x1c02ea(0x179)]||_0x26860d[_0x1c02ea(0x196)]||_0x26860d[_0x1c02ea(0x198)],_0x4f90eb=_0x26860d[_0x1c02ea(0x1a1)]||_0x26860d[_0x1c02ea(0x167)],_0x5a290e=_0x26860d[_0x1c02ea(0x18a)]||_0x26860d[_0x1c02ea(0x1f3)];return{'open-url':_0x43d55b,'media-url':_0x4f90eb,'update-pasteboard':_0x5a290e};}case _0x1c02ea(0x1dd):return;}default:return;}};if(!this[_0x4e989b(0x1c8)])switch(this[_0x4e989b(0x16a)]()){case _0x4e989b(0x165):case'Loon':case _0x4e989b(0x1f7):case _0x4e989b(0x18d):default:$notification[_0x4e989b(0x1fd)](_0x41361d,_0x18cc10,_0x38b774,_0x241b6a(_0xfc2c5));break;case'Quantumult\x20X':$notify(_0x41361d,_0x18cc10,_0x38b774,_0x241b6a(_0xfc2c5));break;case _0x4e989b(0x1dd):}if(!this['isMuteLog']){let _0x117b0b=['',_0x4e989b(0x180)];_0x117b0b['push'](_0x41361d),_0x18cc10&&_0x117b0b[_0x4e989b(0x1d3)](_0x18cc10),_0x38b774&&_0x117b0b[_0x4e989b(0x1d3)](_0x38b774),console[_0x4e989b(0x1ed)](_0x117b0b[_0x4e989b(0x1e1)]('\x0a')),this[_0x4e989b(0x158)]=this[_0x4e989b(0x158)][_0x4e989b(0x197)](_0x117b0b);}}[_0x2178dd(0x1ed)](..._0x4ab1c6){const _0x1bb064=_0x2178dd;_0x4ab1c6['length']>0x0&&(this[_0x1bb064(0x158)]=[...this[_0x1bb064(0x158)],..._0x4ab1c6]),console[_0x1bb064(0x1ed)](_0x4ab1c6['join'](this['logSeparator']));}[_0x2178dd(0x1a7)](_0x3564d3,_0x242a59){const _0x5eb0ae=_0x2178dd;switch(this[_0x5eb0ae(0x16a)]()){case _0x5eb0ae(0x165):case _0x5eb0ae(0x1b6):case _0x5eb0ae(0x1f7):case'Shadowrocket':case'Quantumult\x20X':default:this[_0x5eb0ae(0x1ed)]('','❗️'+this['name']+_0x5eb0ae(0x183),_0x3564d3);break;case'Node.js':this[_0x5eb0ae(0x1ed)]('','❗️'+this[_0x5eb0ae(0x18b)]+_0x5eb0ae(0x183),_0x3564d3[_0x5eb0ae(0x1c1)]);}}['wait'](_0x170db4){return new Promise(_0x33c343=>setTimeout(_0x33c343,_0x170db4));}[_0x2178dd(0x171)](_0x47e29e={}){const _0x5af7a6=_0x2178dd,_0x30d27f=new Date()['getTime'](),_0x3c8825=(_0x30d27f-this[_0x5af7a6(0x15a)])/0x3e8;switch(this['log']('','🔔'+this['name']+_0x5af7a6(0x1df)+_0x3c8825+'\x20秒'),this['log'](),this[_0x5af7a6(0x16a)]()){case'Surge':case _0x5af7a6(0x1b6):case _0x5af7a6(0x1f7):case'Shadowrocket':case'Quantumult\x20X':default:$done(_0x47e29e);break;case _0x5af7a6(0x1dd):process[_0x5af7a6(0x1f5)](0x1);}}}(_0x3b27f1,_0x952668);}function _0x1d7b(){const _0xc82533=['exec','http://','支持一下','update-pasteboard','name','application/x-www-form-urlencoded','Shadowrocket','action=daily_sign','setCookieSync','set-cookie','map','queryStr','surge-version','积分还是很好获取的','lodash_get','url','concat','openUrl','application/json','ckjar','https://api.day.app/push','getjson','未找到CK','打卡！','bark_key','cktough','media-url','comment','method','get','CookieJar','send','logErr','28OKwjae','https://','getDate','这个雨晨太好啦,终于可以好好玩了','OPTIONS','isNeedRewrite','🔷账号','个账号','setval','replace','utf-8','Cookie','substr','env','Loon','2856560cyYdvC','@chavy_boxjs_userCfgs.httpapi_timeout','真的很喜欢这个公众号!','parse','null','abs','ckStatus','共找到','GET','59651MthVnc','stack','请求失败','message','index','102830gmmITS','yuchen.tonghuaios.com','error','isMute','Content-Length','非常好，会推荐给大家的','existsSync','then','split','.$1','156Zgsgpm','assign','getdata','知道了，非常有用','push','2462295SQNRjm','超级实用，一定要记得签到哦','redirect','length','call','undefined','resolve','keys','获取签到Cookie成功🎉','Node.js','支持雨晨',',\x20结束!\x20🕛\x20','🔷Bark\x20notify\x20>>\x20Start\x20push\x20(','join','Content-Type','path','catch','每日打卡','getScript','readFileSync','setjson','read','isLoon','timeout','barkKey','log','isArray','rawBody','yuchenCookie','writedata','comment=','updatePasteboard','Quantumult\x20X','exit','UndefinedError','Stash','content-type','cookieJar','请求api返回数据为空，请检查自身原因','slice','wait','post','我要赚积分哈哈','stringify','match','status','lodash_set','toObj','getMilliseconds','string','✅Push\x20success!','signin','reduce','5401737qIqWFg','健康运营加油','setdata','很有帮助，马上拉朋友来','substring','getRandomTime','好，每天坚持签到不会断','getMinutes','toStr',',\x20开始!','isStash','/wp-admin/admin-ajax.php','trim','cwd','isSurge','isNode','❌账号','✅评论成功！获得1积分','200436AkpFYc','object','test','getval','getTime','18caVBaB','encoding','错误获取签到Cookie失败','getMonth','data','支持一下，签到领积分','\x20>>\x20Start\x20work','setValueForKey','非常棒～必须支持作者','logs','4911731lwSwjV','startTime','真是不错,好评！','all','content-length','toString','getHours','decode','params','finally','随机延迟','记得签到','Surge','ios游戏迷','mediaUrl','random','msg','getEnv','body','initGotEnv','writeFileSync','累计点赞','fetch','getSeconds','done','floor','application/x-www-form-urlencoded;\x20charset=utf-8','loaddata','cron','❌未检测到ck，请添加环境变量','opts','非常实用，简直是苹果手机类型的大福利！','open-url','logSeparator','statusCode','非常好用的网站，有很多有意思的游戏','toLocaleLowerCase','time','10NBlmwo','==============📣系统通知📣==============','got','success',',\x20错误!','notifyMsg','headers','dataFile'];_0x1d7b=function(){return _0xc82533;};return _0x1d7b();}
