let head = null;

function createNode(str) {
  return {
    value: str,
    next: null,
  };
}

function push(head, node) {
  if (head === null) {
    return node;
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = node;
  return head;
}
function printList(head) {
  if (head === null) {
    console.log("[]");
  } else {
    let temp = head;
    let str = "[";

    while (temp !== null) {
      if (temp === head) str = `${str}${temp.value}`;
      else {
        str = `${str},${temp.value}`;
      }
      temp = temp.next;
    }
    str = `${str}]`;
    console.log(str);
  }
}

function unshift(head, node) {
  if (head === null) return node;

  const temp = head;
  head = node;

  head.next = temp;
  return head;
}

function length(head) {
  let temp = head;
  let count = 0;
  while (temp !== null) {
    count += 1;
    temp = temp.next;
  }

  return count;
}

function splice(head, node, pos) {
  //adicionar ao final da lista
  if (pos >= length(head)) {
    return push(head, node);
  }
  // adicionar ao inicio da lista
  if (pos <= 0) {
    return unshift(head, node);
  }

  let temp = head;
  for (let i = 0; i < pos - 1; i++) temp = temp.next;

  let temp2 = temp.next;
  temp.next = node;
  temp.next.next = temp2;

  return head;
}

function deleteFromList(head, str) {
  if (head === null) return head;

  if (head.value === str) return head.next;

  let temp = head;
  let temp2 = head;

  while (temp !== null && temp.value !== str) {
    temp2 = temp;
    temp = temp.next;
  }

  if (temp !== null) {
    temp2.next = temp.next;
  }

  return head;
}

head = push(head, createNode("W"));
head = push(head, createNode("O"));
head = push(head, createNode("L"));
head = push(head, createNode("F"));

head = deleteFromList(head, "O");

printList(head);
