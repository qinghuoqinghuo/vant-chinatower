import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {Locale} from 'vant'
// 英文
import enUS from 'vant/lib/locale/lang/en-US'
// 中文简体
import zhCN from 'vant/lib/locale/lang/zh-CN'
import enLocale from './en-US'
import zhLocale from './zh-CN'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enUS,
        ...enLocale
    },
    zh: {
        ...zhCN,
        ...zhLocale
    }
}

const i18n = new VueI18n({
    locale: 'zh',  // 设置默认语言
    messages: messages // 设置资源文件对象
})

// 更新vant组件库本身的语言变化，支持国际化
function vantLocales(lang) {
    if (lang === 'en') {
        Locale.use(lang, enUS)
    } else if (lang === 'zh') {
        Locale.use(lang, zhCN)
    }
}

export {i18n, vantLocales}
