declare type DocumentLanguage = 'en' | 'kr' | 'zh'

declare type EditablePrimitive = string | number | boolean

declare type I18nRecord = Record<DocumentLanguage, string>

declare type PrimitivePayload = Record<string, EditablePrimitive>
