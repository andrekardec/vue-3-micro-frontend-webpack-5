import { createI18n, I18nOptions } from "vue-i18n";


import deDe from '@providers/locales/deDe.json';
import enUs from '@providers/locales/enUs.json';
import esEs from '@providers/locales/esEs.json';
import frFr from '@providers/locales/frFr.json';
import ptBr from '@providers/locales/ptBr.json';

type MessageSchema = typeof enUs;


export const i18n = createI18n<I18nOptions, [MessageSchema], 'de' | 'en' | 'es', 'fr' | 'de'>({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        'de': deDe,
        'en': enUs,
        'es': esEs,
        'fr': frFr,
        'pt': ptBr,
    },
    numberFormats: {
        'pt': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'BRL'
            },
            integer: {
                style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0
            },
            decimal: {
                style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2
            },
            percent: {
                style: 'percent', useGrouping: false
            }
        },
        'es': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'EUR'
            }
        },
        'en': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'USD'
            },
            decimal: {
                style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2
              },
              percent: {
                style: 'percent', useGrouping: false
              }
        },
        'fr': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'EUR'
            }
        }
    },
});