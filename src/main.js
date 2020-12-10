// 1.根据标签名创建元素
const createDiv = dom.createTag("div");
console.log(createDiv); // <div></div>

// 2.根据字符串创建元素
const create = dom.create(`<table>
<tbody>
    <tr>
        <td></td>
    </tr>
</tbody>
</table>`);
console.log(create);

//3.在前面插入一个节点
const newBefore = dom.create(
  `<div id="newBefore">在test前面插入一个节点</div>`
);
console.log(newBefore);

dom.before(test, newBefore);

//4.在后面插入一个节点
const newAfter = dom.create(`<p id="newAfter">在test后面插入一个节点</p>`);
console.log(newAfter);
dom.after(test, newAfter);
//5.给父节点追加子结点
const parent = document.getElementById("parent");
console.log(parent);

const newChild = dom.create(`<div id="newChild">添加子结点</div>`);
console.log(newChild);
dom.append(parent, newChild);

//6.
const newParent = dom.create(`<div>我是你新爸爸</div>`);
console.log(newParent);
dom.wrap(child, newParent);

// find()的用法
//获取指定元素
const selector = dom.find("li")[0];
console.log(selector);
//查找所有的li
const allLis = dom.find("li");
console.log(allLis);
//查找id为list1中的li
const list = dom.find("li", list1);
console.log(list);

//style()的用法
// 1.设置指定样式
dom.style(test, "color", "red");
// 2.获取元素样式
const color = dom.style(test, "color");
console.log(`test元素的字体颜色是${color}`);
// 3.批量设置样式
dom.style(test, {
  border: "1px solid #000",
  width: "100px",
  height: "100px",
  backgroundColor: "orange",
});

//each()遍历，并使用函数处理元素
dom.each(dom.children(list2), (item) => {
  dom.style(item, "color", "blue");
});
