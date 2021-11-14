// Runtime: 84 ms, faster than 75.13% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 41.2 MB, less than 5.47% of JavaScript online submissions for Merge Two Sorted Lists.


//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 思路是深拷贝一份数据，然后用数组合并
// var mergeTwoLists = function (l1, l2) {
//     let arr1 = [], arr2 = [];
//     let cur = l1;
//     while (cur != null) {
//         arr1.push(cur.val)
//         cur = cur.next;
//     }
//     cur = l2;
//     while (cur != null) {
//         arr2.push(cur.val)
//         cur = cur.next;
//     }

//     let arr3 = merge(arr1, arr2)

//     if (arr3.length === 0) return null;

//     let head = new ListNode(arr3[0], null);
//     cur = head;
//     for (let i = 1, l = arr3.length; i < l; i++) {
//         cur.next = new ListNode(arr3[i], null);
//         cur = cur.next;
//     }
//     return head;
// }


// function merge(arr1, arr2) {
//     let arr3 = [];
//     let len1 = arr1.length;
//     let len2 = arr2.length;
//     let len3 = len1 + len2;
//     let p1 = 0, p2 = 0;

//     for (let i = 0; i < len3; i++) {
//         if (p1 === len1) arr3.push(arr2[p2++]);
//         else if (p2 === len2) arr3.push(arr1[p1++]);
//         else arr3.push(arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++])
//     }
//     return arr3;
// }



// 浅拷贝版本
// Runtime: 84 ms, faster than 75.13% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.5 MB, less than 57.94% of JavaScript online submissions for Merge Two Sorted Lists.

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    let head = new ListNode(0, null);
    let cs1 = head, cs2 = l1, cs3 = l2;

    while (cs2 || cs3) {
        if (!cs2) {
            cs1.next = cs3;
            cs1 = cs3;
            cs3 = cs3.next;
        } else if (!cs3) {
            cs1.next = cs2;
            cs1 = cs2;
            cs2 = cs2.next;
        } else {
            if (cs2.val <= cs3.val) {
                cs1.next = cs2;
                cs1 = cs2;
                cs2 = cs2.next;
            } else {
                cs1.next = cs3;
                cs1 = cs3;
                cs3 = cs3.next;
            }
        }
    }

    return head.next; //表头只是个占位。
}