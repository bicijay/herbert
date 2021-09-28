export type Language = {
    id: string,
    label: string,
    name: string
}

export type PhraseTranslation = {
    languageId: string,
    value: string,
}

export type Phrase = {
    id: string,
    key: string,
    translations: PhraseTranslation[]
}

export type Translation = {
    id: string,
    originalLanguageId: string,
    phrases: Phrase[]
}