

function getConfig(lang: string = 'zh-CN') {
    const NumberStep = 4
    const numberMap = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
    }
    const unitMap = {
        3: '',
        2: '十',
        1: '百',
        0: '千',
    }
    const bigUnitMap = {
        0: '',
        1: '万',
        2: '亿',
    }

    return {
        NumberStep,
        numberMap,
        unitMap,
        bigUnitMap,
    }
}
/**
 * 处理字符串中的连续零
 * 
 * 该函数旨在将字符串中的连续零简化为单个零。这对于处理中文数字字符串特别有用，
 * 因为在中文数字中，连续的零通常只需要一个零来表示。
 * 
 * @param str 待处理的字符串
 * @returns 返回处理后的字符串，其中连续的零被简化为单个零
 */
function handleZero(str: string) {
    return str.replace(/零+/g, '零')
}
export function numberToChinese(num: number) {
    const {
        NumberStep,
        numberMap,
        unitMap,
        bigUnitMap,
    } = getConfig()
    const numStr = num.toString()
    // 借助数组循环截取
    // const tmp: string[] = []
    // for (let i = numStr.length; i >= 0; i -= NumberStep) {
    //     let start = i - NumberStep
    //     let end = i
    //     if (start < 0 && end > 0) {
    //         start = 0
    //         const char = numStr.slice(start, end)
    //         tmp.push(char)
    //     } else {
    //         const char = numStr.slice(start, end)
    //         tmp.push(char)
    //     }
    // }
    // const rNumberStr = tmp.reverse().filter(Boolean)

    // 方法2: 借助正则
    const rNumberStr = numStr.replace(/(?=(\d{4})+$)/g, ',').split(',').filter(Boolean)


    const resChinese = rNumberStr.map((num) => {
        let res = ''
        // 不足4位补空格
        if (num.length < NumberStep) {
            num = num.padStart(NumberStep, ' ')
        }
        // 末尾有多个0，换成空格，比如1200 转成中文应该是一千二百
        num = num.replace(/[0]+$/g, ' ')
        for (let i = 0; i < num.length; i++) {
            if (num[i] === ' ') {
                continue
            }

            let unit = unitMap[i as unknown as keyof typeof unitMap]
            const numCn = numberMap[num[i] as unknown as keyof typeof numberMap]
            // 如果是0后面不加单位
            if (num[i] === '0') {
                unit = ''
            }
            res += numCn + unit
        }

        return handleZero(res)
    })

    return resChinese.reduce((prev, cur, idx) => {
        const bigUnit = bigUnitMap[resChinese.length - idx - 1 as unknown as keyof typeof bigUnitMap]
        return prev + cur + bigUnit
    }, '')
}
