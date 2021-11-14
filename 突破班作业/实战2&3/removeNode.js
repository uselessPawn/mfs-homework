// Runtime: 72 ms, faster than 93.39% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.3 MB, less than 37.47% of JavaScript online submissions for Remove Nth Node From End of List.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 遍历两次的版本
// var removeNthFromEnd = function (head, n) {
//     let cur = head;
//     let count = 0;

//     //先遍历知道链表长度
//     while (cur) {
//         count++;
//         cur = cur.next;
//     }

//     //算出要删除的正位数字
//     let N = len - n;

//     if(N == 0) {
//         cur = head;
//         head = head.next;
//         cur.next = null;
//         return head;
//     }

//     cur = head;
//     for (let i = 1; i < N; i++) {
//         cur = cur.next;
//     }

//     let target = cur.next;
//     cur.next = target.next;
//     return head;
// };


// 遍历一次的版本
var removeNthFromEnd = function (head, n) {
    if (!head) return null;

    let left = head, right = head;
    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    if(!right) return head.next;

    while (right.next != null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return head;
};
