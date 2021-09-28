export type Translation = {
    slug: string,
    originalLangSlug: string,
    phrases: Phrase[],
};

export type Phrase = {
    key: string,
    translations: PhraseTranslation[]
};

export type PhraseTranslation = {
    langSlug: string,
    value: string,
};

export type Language = {
    slug: string,
    name: string,
};
