
export function setContent(wrapper,...content){
	wrapper.innerHTML = '';
	appendFlat(wrapper,content);
}

export function tag(name,props = {},children = []){
	let res = document.createElement(name);
	for (let [key,val] of Object.entries(props)){
		res.setAttribute(key, val);
		res[key] = val;
	}
	if (props.className){
		res.classList.add(props.className);
	}
	appendFlat(res,children);
	return res;
}

function appendFlat(container,item){
	if (! item) return null;
	if (item instanceof Element || typeof item === 'string'){
		container.append(item);
		return;
	}
	if (typeof item[Symbol.iterator] === 'function'){
		for(let ch of item){
			appendFlat(container,ch);
		}
		return;
	}
	container.appendChild(item);
}

export function tx(str,props = {}){
	let res = document.createTextNode(str);
	for (let [key,val] of Object.entries(props)){
		res[key] = val;
	}
	return res;

}

export function br(){
	return tag('br');
}

export function span(txt,props = {},children = []){
	return tag('span',props,[tx(txt),...children]);
}

export function table(props = {},children = []){
	return tag('table',props,children);
}

export function tr(props = {},children = []){
	return tag('tr',props,children);
}

export function td(props = {},children = []){
	return tag('td',props,children);
}

export default {
	br,
	span:span,
	table:table,
	tag:tag,
	td:td,
	tr:tr,
	tx:tx,
	setContent:setContent,
};
