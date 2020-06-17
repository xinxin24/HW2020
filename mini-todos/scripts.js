
let tasks = []; //{title: "aaaaa", done: false}
function renderEditor() {
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input")

    //inputEl.onchange = (e) => {
    //  console.log("text, ",e.target.value);
    // console.log("input change: ",e);
    // };

    let addTask = () => {
        if (inputEl.value.length === 0) {
            return;
        }

        let newTask = {
            title: inputEl.value,
            done: false,
        };

        inputEl.value = "";

        tasks.push(newTask);

        console.log("tasks: ", tasks);

        renderTaskItems();
    };


    inputEl.onkeypress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    let addEl = document.querySelector("#default-todo-panel .todo-editor > button");
    addEl.onclick = (e) => {
        addTask();
    };
}

function renderTaskItems() {
    console.log("render items");
    let itemsEl = document.querySelector("#default-todo-panel .todo-items");

    itemsEl.querySelectorAll("div").forEach((node) => node.remove());

    console.log(itemsEl);

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let itemEl = document.createElement("div");
        itemEl.className = "task";

        let doneEl = document.createElement("input");
        doneEl.type = "checkbox";
        doneEl.checked = task.done;
        if (task.done) {
            itemEl.classList.add("done");
        }
        else {
            itemEl.classList.remove("done");
        }
        doneEl.onchange = (e) => {
            task.done = e.target.checked;
            if (task.done) {
                itemEl.classList.add("done");
            }
            else {
                itemEl.classList.remove("done");
            }
        }
        itemEl.append(doneEl);

        let titleEl = document.createElement("label");
        titleEl.innerText = task.title;
        itemEl.append(titleEl);

        let ctrlbarEl = renderTaskCtrlBar(tasks, i);

        itemEl.append(ctrlbarEl);

        itemsEl.append(itemEl);


    }
}


function renderTaskCtrlBar(tasks, taskIdx) {
    let ctrlbarEl = document.createElement("div");
    ctrlbarEl.className = "ctrlbar";

    // let important = document.createElement("button");
    // important.innerText = "⭐";
    // important.onclick = () => {
    //     //
    // };

    // ctrlbarEl.append(important);    //重要性标识


    let upEl = document.createElement("button");
    if (taskIdx === 0) {
        upEl.disabled = true;
    }
    upEl.innerText = "⇧";
    upEl.onclick = () => {
        //
    };
    ctrlbarEl.append(upEl);

    let downEl = document.createElement("button");
    downEl.innerText = "⇩";
    downEl.onclick = () => {
        //
    };
    ctrlbarEl.append(downEl);


    let cancelEl = document.createElement("button");
    cancelEl.innerText = "X";
    cancelEl.onclick = () => {
        tasks.splice(taskIdx, 1);
        renderTaskItems();
    };

    ctrlbarEl.append(cancelEl);

    return ctrlbarEl;

}

// function moveUp(tag, pc) {
//     var tagPre = get_previoussibling(tag);
//     var t = document.getElementById(pc);
//     if (tagPre != undefined) {
//         t.insertBefore(tag, tagPre);
//     }
// }
// function moveDown(tag) {
//     var tagNext = get_nextsibling(tag);
//     if (tagNext != undefined) {
//         insertAfter(tag, tagNext);
//     }
// }

// function get_previoussibling(n) {
//     if (n.previousSibling != null) {
//         var x = n.previousSibling;
//         while (x.nodeType != 1) {
//             x = x.previousSibling;
//         }
//         return x;
//     }
// }
// function get_nextsibling(n) {
//     if (n.nextSibling != null) {
//         var x = n.nextSibling;
//         while (x.nodeType != 1) {
//             x = x.nextSibling;
//         }
//         return x;
//     }
// }
// function insertAfter(newElement, targetElement) {
//     var parent = targetElement.parentNode;
//     if (parent.lastChild == targetElement) {
//         parent.appendChild(newElement);
//     } else {
//         parent.insertBefore(newElement, targetElement.nextSibling);
//     }
//     clickUp.appendChild(upCon);
//                 clickUp.setAttribute("href", "#");
//                 clickDown.appendChild(downCon);
//                 clickDown.setAttribute("href", "#")
//                 clickUp.onclick = function () {
//                     moveUp(this.parentNode.parentNode, myList);
//                 }
//                 clickDown.onclick = function () {
//                     moveDown(this.parentNode.parentNode);
//                 }
// }


renderEditor();
renderTaskItems();