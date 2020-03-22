import * as EventEmitter from 'events'
export function mock(){
let mock = new EventEmitter();

return Object.assign(function(...args){
    let v;
mock.emit('call',this,args,nv => v = nv);
return v

},{mock: mock})

}