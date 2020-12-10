// 将dom挂载到window上
window.dom = {
  //   1.document.createElement的简化版
  createTag(tagName) {
    return document.createElement(tagName);
  },
  //   2.传入指定字符串生成模板
  create(string) {
    // template里可以放任意标签
    const container = document.createElement("template");
    //去掉传进来的字符串中的空格
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  // 3.在节点前插入新节点
  before(node, newNode) {
    node.parentNode.insertBefore(newNode, node);
  },
  //4.在节点后插入新节点
  after(node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling);
  },
  //5.添加子结点
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(node,parent){
      dom.before(node,parent)
      dom.append(parent,node)
  },

  //find()查找元素
  find(selector,scope){
      return (scope||document).querySelectorAll(selector)
  },

  //style()样式操作 
  style(node,name,value){
      if(arguments.length===3){
          node.style[name]=value
      }else if(arguments.length===2){
        if(typeof name === 'string'){
            return node.style[name]
        }else if(name instanceof Object){
            const object = name
            for(let name in object){
                node.style[name] = object[name]
            }
        }
      }

  },
  children(node){
    return node.children
  },
  //each()遍历处理元素
  each(nodeList,fn){
    for(let i=0;i<nodeList.length;i++){
        fn.call(null,nodeList[i])
    }
  }
};
