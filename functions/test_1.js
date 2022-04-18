const quickSort = (arr) => {
    if (arr.length <= 1) return arr//重要  否则引起爆栈裂开
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

// Curry
const curry = function (fn) {
    let args = [].slice.call(arguments, 1)
    return function () {
        let newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}
const curryV2 = fn =>
    judge = (...args) =>
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)

// 对象下划线转驼峰
const transCamel = (str) => {
    const arrSrt = str.split("_")
    for (let i = 1; i < arrSrt.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
    }
    return arrSrt.join("")
}

// 使用setTimeout模拟setInterval
const runFn = () => { console.log(`Run`) }

let timer = null
const simulateSetInterval = (fn = runFn, delay = 1) => {
    timer = setTimeout(() => {
        fn()
        simulateSetInterval()
    }, 1000 * delay)
}

//compose
const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)


//两数找target
const twoSum = (arr, target) => {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        let number = target - arr[i]
        if (number in map) {
            return [i, map[number]]
        } else {
            map[arr[i]] = i
        }
    }
    return []
}

//手写发布订阅

const eventHub = {
    map: {},
    on: (name, fn) => {
        eventHub[name] = eventHub[name] || []
        eventHub[name].push(fn)
    },
    emit: (name, data) => {
        const q = eventHub[name]
        q && q.map(f => f(data))
    },
    off: (name, data) => {
        const q = eventHub[name]
        if (!q) { return }
        const index = q.indexOf(fn)
        if (index < 0) { return }
        q.slice(index, 1)
    }

}

//groupBy

const groupBy = (list, key) => {
    return list.reduce((acc, cur) => {
        acc[cur[key]] = (acc[cur[key]] || []).push(cur)
    }, {})
}


// 根据ID查询tree节点是否有该ID的节点 ,默认以children标识

const travelTree = (list, id) => {
    if (!!list) return null
    let result = null
    for (let key in list) {
        if (list[key].id === id) {
            result = list[key]
            break
        } else if (!!list[key].children?.length) {
            result = travelTree(list[key].children, id)
        }
    }

    return result
}

//数值反转
var reverse = function (x) {
    let newString = x.toString();
    let turnString = '';
    for (let i = newString.length - 1; i >= 0; i--) {
        turnString += newString[i]
    }
    if (turnString.indexOf('-') > 0) {
        turnString = '-' + turnString.substring(0, turnString.indexOf('-'))
    }
    let turnNum = parseFloat(turnString)
    if (turnNum >= Math.pow(2, 31) - 1 || turnNum <= Math.pow(-2, 31)) {
        return 0;
    } else {
        return turnNum;
    }
};

var reverseX = function (x) {
    let turnNum = null
    let newString = x.toString().split('');
    if (newString[0] === '-') {
        newString.shift()
        newString.reverse().unshift('-')
    }
    else { newString.reverse() }
    turnNum = parseFloat(newString.join(''))
    if (turnNum >= Math.pow(2, 31) - 1 || turnNum <= Math.pow(-2, 31)) {
        return 0;
    } else {
        return turnNum;
    }
};
// 先序遍历
const preDeep = (node) => {
    let res = []
    let stack = []
    let head = null
    stack.push(node)
    while (stack.length) {
        head = stack.pop()
        res.push(head)
        if (head.right) { stack.push(head.right) }
        if (head.left) { stack.push(head.left) }
    }
    return res
}
//  recursion version
function preFunction(listNode) {
    const arr = [];
    arr.push(listNode);
    tempPre(listNode.left, arr)
    tempPre(listNode.right, arr)
    return arr;
}
function tempPre(node, arr) {
    if (node === null) {
        return;
    }
    arr.push(node)
    tempPre(node.left, arr);
    tempPre(node.right, arr);
}
// 股票最佳

const maxProfit = function (prices) {
    const result = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        result += Math.max(prices[i + 1] - prices[i], 0);
        //后面减去前面的，正数就相加为利润
    }
    return result;
}
// maxProfit([7, 1, 5, 3, 6, 4]);
console.log(maxProfit([7, 1, 5, 3, 6, 4]));


//小数相加
function addSmall(num1, num2) {

    let temp1, temp2, a;

    // 获取temp1小数点后的长度
    temp1 = num1.toString().split(".")[1].length || 0;

    // 获取temp2小数点后的长度
    temp2 = num2.toString().split(".")[1].length || 0;

    // Math.max(temp1, temp2) 为了获取temp1和temp2两个值中较大的一个
    // Math.pow(a,b) 表示 a 的 b 次方
    accuracy = Math.pow(10, Math.max(temp1, temp2));

    // 计算的方式是先将所有的小数乘为整数，待加减运算执行完之后再除去对应的 a 的值，将其变为小数输出
    return res = (num1 * a + num2 * a) / a
}
// 大数相加
const addBig = (a, b) => {
    const maxLength = Math.max(a.length, b.length)
    let overflow = false
    let sum = ''
    for (let i = 1; i <= maxLength; i++) {
        const ai = a[a.length - i] || '0'
        const bi = b[b.length - i] || '0'
        let ci = parseInt(ai) + parseInt(bi) + overflow ? 1 : 0
        overflow = ci >= 10
        ci = overflow ? ci - 10 : ci
        sum = ci + sum
    }
    sum = overflow ? '1' + sum : sum
    return sum
}
console.log(addBig("11111111101234567", "77777777707654321"))
// 最长子字符串

const maxSubstringV1 = (str) => {
    if (str.length <= 1) { return str.length }
    let max = 0, p1 = 0, p2 = 1, sameIndex = -1, tempMax = 0
    while (p2 < str.length) {
        for (let i = p1; i < p2; i++) {
            if (s[i] === s[p2]) {
                sameIndex = i
                break
            }
        }
        if (sameIndex >= 0) {
            tempMax = p2 - p1
            p1 = sameIndex + 1
        } else { tempMax = p2 - p1 + 1 }
        if (tempMax > max) { max = tempMax }
        p2 += 1
    }
    return max
}

const maxSubstringV2 = (str) => {
    if (str.length <= 1) { return str.length }
    let max = 0, p1 = 0, p2 = 1, isSame = false, tempMax = 0
    const map = new Map()
    map.set(str[p1], 0)
    while (p2 < str.length) {
        if (map.has(s[p2])) {
            hasSame = true
            if (map.get(s[p2]) >= p1) {
                p1 = map.get(s[p2]) + 1
            }
        }
        map.set(s[p2], p2)
        tempMax = p2 - p1 + 1
        if (tempMax > max) { max = tempMax }
        p2 += 1
    }
    return max
}




// 数组去重
var uniq = function (arr) {
    var map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (a[i] === undefined) { continue }
        if (map.has(a[i])) { continue }
        map.set(number, true)

    }
    return [...map.keys()]
}