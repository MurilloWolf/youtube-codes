const list = {
  head: null,
};

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function push(list, value) {
  const node = createNode(value);

  if (list.head === null) {
    list.head = node;
    return list;
  }

  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;

  return list;
}

function print(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function deleteNode(list, value) {
  if (list.head === null) {
    return list;
  }

  if (list.head.value === value) {
    list.head = list.head.next;
    return list;
  }

  let current = list.head;
  while (current.next !== null) {
    if (current.next.value === value) {
      current.next = current.next.next;
      return list;
    }
    current = current.next;
  }
  return list;
}

function indexOf(list, value) {
  let index = 0;
  let current = list.head;
  while (current !== null) {
    if (current.value === value) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
}

push(list, 1);
push(list, 2);
push(list, 3);
print(list);

console.log(indexOf(list, 2));
console.log(indexOf(list, 4));

deleteNode(list, 2);
print(list);
