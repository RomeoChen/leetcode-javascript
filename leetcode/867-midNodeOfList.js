function ListNode(val) {
  this.val = val;
  this.next = null;
}

var middleNode = function (head) {
  let p = q = head;
  while (q && q.next) {
    p = p.next;
    q = q.next.next;
  }
  return p;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(middleNode(head));
// {val: 3, next: ListNode}
