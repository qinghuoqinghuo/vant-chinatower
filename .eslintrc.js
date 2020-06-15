module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'indent': 0,
        /* 使用双引号 */
        'quotes': 0,
        /* 禁止在条件表达式中使用赋值语句 */
        'no-cond-assign': 0,
        /* 禁止重复声明变量 */
        "no-redeclare": 0,
        /* 禁止使用var */
        "no-var": 0,
        /* 禁止使用with */
        "no-with": 0,
        /* 强制驼峰法命名 */
        "camelcase": 0,
        /* 禁止行内注释 */
        'no-inline-comments': 0,
        /* 多行模式必须带逗号，单行模式不能带逗号 */
        'always-multiline': 0,
        /* 一元运算符,前后空格 */
        "space-unary-ops": 0,
        /* 必须使用全等 */
        "eqeqeq": 0,
        /* 数组元素间空格隔开(,后面) */
        "array-bracket-spacing": 0,
        /* 块级作用域外访问块内变量 */
        "block-scoped-var": 0,
        /* 行尾逗号 */
        "comma-style": 0,
        /* 数组或对象键值对,末尾的逗号 */
        "comma-dangle": 0,
        /* 圈复杂度.一般为if-else */
        "complexity": 0,
        /* 强制一致函数声明 */
        "func-style": 0,
        /* 最大函数嵌套层数 */
        "max-nested-callbacks": 0,
        /* 逗号前后空格 */
        "comma-spacing": 0,
        /* if while function 后面的{必须与if在同一行，java风格。java风格 */
        "brace-style": 0,
        /* 关键字前后一致的空格 */
        "keyword-spacing": 0,
        /* 单行最大长度,tab个数 */
        'max-len': 0,
        /* 不允许空格和tab混合使用 */
        "no-mixed-operators": 0,
        /* 不允许多个空行 */
        "no-mixed-spaces-and-tabs": 0,
        /* 声明时必须赋初值 */
        'init-declarations': 0,
        /* 强制使用分好而不是ASI */
        'semi': 0,
        /* 允许声明但未使用的变量 */
        'no-unused-vars': 0,
        /* 注释需以空格开头 */
        'spaced-comment': 0,
        /* 禁止console */
        'no-console': 0, // 禁止使用debugger,
        /* 禁止三元运算符 */
        'no-ternary': 0,
        /* return 后面是否允许省略:暂略 ??? */
        'consistent-return': 0,
        /* 方法定义规范--在小程序里暂略 */
        'func-names': 0,
        /* 禁止使用未定义的变量 */
        'no-undef': 0,
        'space-before-function-paren': 0,
        'object-curly-spacing': 0,
        'prefer-const': 0,
        'space-before-blocks': 0,
        'key-spacing': 0,
        'space-infix-ops': 0,
        'no-multi-spaces': 0,
        'no-tabs': 0,
        'no-multiple-empty-lines': 0,
        'no-debugger': 0, // 禁止使用debugger
    }
}
