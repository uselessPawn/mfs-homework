// Runtime: 388 ms, faster than 26.64% of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 43.3 MB, less than 97.13% of JavaScript online submissions for Merge k Sorted Lists.



// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || lists == []) return null;

    let head = new ListNode(0, null); //占位
    let l = lists.length;
    let rsPt = head;

    //初始化各链表指针
    let ptArr = [...lists];
    while (1) {
        let i;
        let min, index;
        // 找到第一个不是null的node
        for (i = 0; i < l; i++) {
            if (ptArr[i] !== null) {
                min = ptArr[i];
                index = i;
                break;
            }
        }

        // 没找到，已经空了
        if (i === l) break;

        //找到了，继续找最小的
        for (let i = index + 1; i < l; i++) {
            if(ptArr[i] === null) continue;
            if (ptArr[i].val < min.val) {
                min = ptArr[i];
                index = i;
            }
        }

        // 加入将最小的加入链表, 并且移动指针数组里的指针
        rsPt.next = min;
        rsPt = rsPt.next;
        ptArr[index] = ptArr[index].next;
    }

    return head.next;
};

