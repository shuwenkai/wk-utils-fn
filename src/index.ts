// 数组相关导出
import { chunk } from './array/chunk'
import { concat } from './array/concat'
import { map, reduce, find, findIndex, every, some, filter } from './array/decleares'
import { difference } from './array/difference'
import { drop, dropRight } from './array/drop'
import { flatten, flatten2 } from './array/flatten'
import { pull, pullAll } from './array/pull'
import { unique, unique2, unique3 } from './array/unique'
import { slice } from './array/slice'

// axios
import { axios } from './axios/index'

// eventBus
import { eventBus } from './event-bus/index'

// eventDelegation, 事件委托
import { eventDelegation } from './event-bind/index'
// function相关
import { apply } from './function/apply'
import { bind } from './function/bind'
import { call } from './function/call'
import { throttle, debounce } from './function/throttle'

//object相关
import { deepClone1, deepClone2, deepClone3, deepClone4 } from './object/clone'
import { customInstanceof } from './object/customInstanceof'
import { customNew } from './object/customNew'
// 订阅发布消息相关
import { PubSub } from './pub-sub/index'
// 字符串相关
import { palindrome, reverseString, truncate } from './string/index'
import { dateFormat } from './date/index'
import { numberToChinese } from './numberToChinese/numberToChinese'

export {
    chunk,
    concat,
    map, reduce, find, findIndex, every, some, filter,
    difference,
    drop,
    dropRight,
    flatten,
    flatten2,
    pull,
    pullAll,
    unique,
    unique2,
    unique3,
    slice,
    axios,
    eventBus,
    eventDelegation,
    apply,
    bind,
    call,
    throttle, debounce,
    deepClone1, deepClone2, deepClone3, deepClone4,
    customInstanceof,
    customNew,
    PubSub,
    palindrome, reverseString, truncate,
    dateFormat,
    numberToChinese
};

export default {
    chunk,
    concat,
    map, reduce, find, findIndex, every, some, filter,
    difference,
    drop,
    dropRight,
    flatten,
    flatten2,
    pull,
    pullAll,
    unique,
    unique2,
    unique3,
    slice,
    axios,
    eventDelegation,
    apply,
    bind,
    call,
    throttle, debounce,
    deepClone1, deepClone2, deepClone3, deepClone4,
    customInstanceof,
    customNew,
    PubSub,
    eventBus,
    palindrome, reverseString, truncate,
    dateFormat,
    numberToChinese
}