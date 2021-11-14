// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



// 一种以2个节点为单位，这样不用考虑单数个
// 另一个以4个节点为单位，这样要考虑单数个


// 以2个节点为单位
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function (head) {
    if (head.next === null) return head;
    head = new ListNode(0, head);

    let r = head;
    let m = r.next;
    let l = m.next;
    let odd = true;

    while (r) {
        if (odd) {
            l.next = r;
            m.next = r.next;
            r.next = m;

            l = r;
            r = m.next;

        } else {
            l = m;
            m = r;
            r = r.next;
        }

        odd = !odd;
    }
    return head.next;
};

