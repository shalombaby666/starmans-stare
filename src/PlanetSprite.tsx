import type { ReactNode } from 'react';

type Paint={glow:string;light:string;body:string;shade:string;shadow:string;mark:string};
const paints:Record<string,Paint>={
 mercury:{glow:'#eee0bb',light:'#dad0b4',body:'#96877c',shade:'#574b52',shadow:'#302c40',mark:'#80766b'},
 venus:{glow:'#fff2a8',light:'#ffdd73',body:'#d2944f',shade:'#945035',shadow:'#532f43',mark:'#f4bf61'},
 earth:{glow:'#acffff',light:'#58c8e8',body:'#1777c0',shade:'#17488d',shadow:'#162a60',mark:'#72e37d'},
 mars:{glow:'#ffe6a1',light:'#f29a63',body:'#c35442',shade:'#86374a',shadow:'#46283f',mark:'#e1c494'},
 jupiter:{glow:'#fff1c0',light:'#eed0a0',body:'#bc886f',shade:'#7c5160',shadow:'#472e50',mark:'#dcaa80'},
 saturn:{glow:'#fff5ad',light:'#f1d786',body:'#c4a76b',shade:'#83704f',shadow:'#504658',mark:'#ead5a0'},
 uranus:{glow:'#dcffff',light:'#96efdc',body:'#55bfc3',shade:'#347caa',shadow:'#253c78',mark:'#b2fcde'},
 neptune:{glow:'#c0d9ff',light:'#728fe4',body:'#405fc1',shade:'#303d91',shadow:'#1d235e',mark:'#6faaff'},
 moon:{glow:'#f8f5d6',light:'#d7d2b8',body:'#a49d8e',shade:'#6d6870',shadow:'#393447',mark:'#847c75'},
 phobos:{glow:'#f7d3a2',light:'#c88667',body:'#956354',shade:'#674552',shadow:'#382d40',mark:'#bd8771'},
 deimos:{glow:'#f0dfc2',light:'#c3ab92',body:'#8e796f',shade:'#62515c',shadow:'#383243',mark:'#aa9078'},
 io:{glow:'#fff5a1',light:'#eed56c',body:'#d39937',shade:'#a44d39',shadow:'#512f48',mark:'#e87132'},
 europa:{glow:'#fff9db',light:'#eee6c8',body:'#cbbda4',shade:'#988c86',shadow:'#5e596e',mark:'#95644d'},
 ganymede:{glow:'#f3e9ce',light:'#cab598',body:'#978477',shade:'#655868',shadow:'#3a354c',mark:'#bca68c'},
 callisto:{glow:'#e8d6b9',light:'#aa9787',body:'#776b70',shade:'#514959',shadow:'#302d40',mark:'#948077'},
 titan:{glow:'#ffe3a1',light:'#e8b64f',body:'#bd8038',shade:'#83532e',shadow:'#46303d',mark:'#d69c3e'},
 enceladus:{glow:'#fff',light:'#f1eddb',body:'#c5ccca',shade:'#8d9ca5',shadow:'#536277',mark:'#94d4d5'},
 triton:{glow:'#edffff',light:'#cfdfd8',body:'#9db7b0',shade:'#668795',shadow:'#394b69',mark:'#d2c6a9'},
 titania:{glow:'#e8dfd1',light:'#c0b0a2',body:'#91838b',shade:'#655a71',shadow:'#383149',mark:'#aa9b90'}
};
const planets=new Set(['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune']);
const rocky=new Set(['mercury','moon','phobos','deimos','callisto','ganymede','titania']);

function paintAt(id:string,x:number,y:number):string|null{
 const p=paints[id]??paints.moon, dx=x-15.5,dy=y-15.5,r=Math.hypot(dx,dy);
 if(r>14.55)return null;
 if(r>12.9)return p.shadow;
 if(dx<-4&&dy<-4&&r<12.9)return p.glow;
 if(r>9&&dx>5&&dy>3)return p.shadow;
 if(rocky.has(id)){
  const craters=[[10,10,2],[19,8,1],[9,19,1],[20,20,2],[15,13,1],[24,14,1]];
  for(const [cx,cy,size] of craters){const dist=Math.hypot(x-cx,y-cy);if(dist<=size&&dy>0)return p.shade;if(dist===size+1)return p.mark;}
  const noise=(x*19+y*23+x*y*7)%13;
  if(noise===0||noise===4)return p.mark;
  if(noise===7&&dx>1)return p.shade;
 }
 if(id==='earth'){
  const coastA=Math.hypot((x-11)/1.3,(y-12)/1),coastB=Math.hypot((x-19)/1,(y-20)/1.2),coastC=Math.hypot((x-21)/1.5,(y-10)/1.2);
  if((coastA<4.5&&!(x<11&&y>12&&x+y<25))||(coastB<4&&x+y>31)||(coastC<3&&x>20))return dx>2?p.shade:p.mark;
  if((x+y*2)%11===0)return p.glow;
 }
 if(id==='venus'){
  const band=(y+Math.floor(x/3))%6;
  if(band===0||band===1)return p.mark;
  if(band===4&&dx>0)return p.shade;
 }
 if(id==='mars'&&y<5&&x>11&&x<21)return p.glow;
 if(id==='jupiter'||id==='saturn'){
  const stripe=(y+Math.floor(x/4))%(id==='jupiter'?5:4);
  if(stripe===0||stripe===1)return p.mark;
  if(stripe===3)return p.shade;
  if(id==='jupiter'&&x>18&&x<22&&y>17&&y<21)return '#ef916b';
  if(id==='saturn'&&(x+y)%7===0)return '#fff1b8';
 }
 if(id==='uranus'&&(x+y)%13===0)return p.mark;
 if(id==='neptune'&&((y+Math.floor(x/3))%6<2))return p.mark;
 if(id==='io'){
  if((x*7+y*3)%19===0)return '#ef5336';
  if((x*3+y*5)%13===0)return '#fff29b';
 }
 if(id==='europa'||id==='enceladus'||id==='triton'){
  if((x*5+y*9+4)%23===0||(x*5-y*7+32)%31===0)return p.mark;
  if((x-y+32)%17===0)return p.glow;
 }
 if(id==='titan'&&(x+y*2)%9===0)return p.mark;
 return r<5?p.light:(dx>1||dy>1?p.body:p.light);
}

export default function PlanetSprite({id,title}:{id:string;title?:string}):ReactNode{
 const p=paints[id]??paints.moon;
 const groups=new Map<string,string[]>();
 for(let y=1;y<31;y++)for(let x=1;x<31;x++){
  const fill=paintAt(id,x,y);if(!fill)continue;
  const commands=groups.get(fill)??[];commands.push(`M${x} ${y}h1v1h-1z`);groups.set(fill,commands);
 }
 const isSaturn=id==='saturn';
 return <svg className="pixel-sprite" viewBox={isSaturn?'-8 0 48 32':'0 0 32 32'} role={title?'img':undefined} aria-label={title} aria-hidden={title?undefined:true} focusable="false" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
  {isSaturn&&<><ellipse cx="16" cy="16" rx="23" ry="5" transform="rotate(-18 16 16)" fill="none" stroke="#765937" strokeWidth="4"/><ellipse cx="16" cy="16" rx="23" ry="5" transform="rotate(-18 16 16)" fill="none" stroke="#f5db91" strokeWidth="2" strokeDasharray="3 1"/></>}
  {[...groups].map(([fill,commands])=><path key={fill} fill={fill} d={commands.join('')}/>)}
  {isSaturn&&<path d="M-5 22Q16 7 37 11" fill="none" stroke="#f0d18a" strokeWidth="2.5" strokeDasharray="2 1" shapeRendering="crispEdges"/>}
  {id==='jupiter'&&<path d="M20 18h2v2h-2z" fill="#f0745c"/>}
 </svg>;
}
