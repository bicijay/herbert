import * as React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {
    Box,
    Flex,
    Container,
    Center,
    Heading,
    Text,
    VStack,
    Badge,
    HStack,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Input,
    Fade,
    Textarea
} from '@chakra-ui/react';
import {Language, Phrase, Translation} from "../services/types";


type TranslationPageProps = {
    translation: Translation
    languages: Language[]
};

const TranslationPage: NextPage<TranslationPageProps> = ({translation, languages}) => {
    const [filterPhrase, setFilterPhrase] = React.useState("");
    const [selectedPhrase, setSelectedPhrase] = React.useState<Phrase | null>(null);

    const onPhraseSelected = (phrase: Phrase) => {
        setSelectedPhrase(phrase);
    };

    const filteredPhrases = translation.phrases.filter((phrase) =>
        phrase.key.toLowerCase().includes(filterPhrase) || phrase.translations.filter((phraseTrans) => (
            phraseTrans.value.toLowerCase().includes(filterPhrase)
        ))
    );

    const getOriginalPhraseValue = (phrase: Phrase) => {
        const original = phrase.translations.filter((phraseTrans) => (
            phraseTrans.langSlug === translation.originalLangSlug
        ));

        return original?.[0]?.value;
    };

    const isPhraseSelected = (key: string) => {
        return selectedPhrase?.key === key;
    };

    const isTranslated = (phrase: Phrase, langSlug: string) => {
        let isTranslated = false;

        phrase.translations.forEach((phraseTrans) => {
            isTranslated = phraseTrans.langSlug === langSlug;
        });

        return isTranslated;
    };

    return (
        <Container py={10} maxW="container.lg">
            <Flex bgColor="white" borderRadius={20} overflow="hidden" h="100%" align="stretch" boxShadow="xl">
                <Box py={5} overflowY="auto" flex={2}>
                    <Center>
                        <Heading fontSize="2xl">Herbert</Heading>
                    </Center>
                    <Center m={5}>
                        <Input onChange={(e) => setFilterPhrase(e.target.value)} variant="filled"
                               placeholder="Search phrase..."/>
                    </Center>

                    <VStack align="strech">
                        {filteredPhrases.map((phrase, i) => (
                            <Fade in={true} key={i}>
                                <Box title={getOriginalPhraseValue(phrase)} onClick={() => onPhraseSelected(phrase)}
                                     mx={5} py={5} px={5}
                                     bgColor={isPhraseSelected(phrase.key) ? "#f0f5ff" : undefined} borderRadius={5}
                                     cursor="pointer" flex={1}>
                                    <Text fontWeight="bold">{phrase.key}</Text>
                                    <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap"
                                          maxWidth="200px">{getOriginalPhraseValue(phrase)}</Text>
                                    <HStack align="start" mt={2}>
                                        {languages.map((lang) => (
                                            <Badge
                                                colorScheme={isTranslated(phrase, lang.slug) ? "green" : undefined}>{lang.slug.toUpperCase()}</Badge>
                                        ))}
                                    </HStack>
                                </Box>
                            </Fade>
                        ))}
                    </VStack>
                </Box>


                <Box bgColor="#f0f5ff" flex={4} p={8}>
                    <Tabs variant="soft-rounded" colorScheme="green">
                        <TabList>
                            <Tab>English</Tab>
                            <Tab>Portuguese</Tab>
                            <Tab>French</Tab>
                            <Tab>Spanish</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <VStack>
                                    <Textarea value={selectedPhrase.}/>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </Container>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const translation: Translation = {
        slug: "teste",
        originalLangSlug: "en",
        phrases: [
            {
                key: "short_bio",
                translations: [
                    {
                        langSlug: "en",
                        value: "Short Description of Yourself/Company - Be sure to describe vacation rental cleaning experience in detail"
                    }
                ]
            },
            {
                key: "short_description",
                translations: [
                    {
                        langSlug: "en",
                        value: "Short Description of Yourself/Company - Be sure to describe vacation rental cleaning experience in detail"
                    }
                ]
            },
            {
                key: "great_bio_message",
                translations: [
                    {
                        langSlug: "en",
                        value: "This is a great length bio! You are off to a great start!"
                    }
                ]
            },
            {
                key: "average_bio_message",
                translations: [
                    {
                        langSlug: "en",
                        value: "This is an average length bio. Why settle for average?"
                    }
                ]
            },
        ]
    }

    const languages: Language[] = [
        {slug: "en", name: "English"},
        {slug: "pt", name: "Portuguese"},
        {slug: "es", name: "Spanish"},
        {slug: "fr", name: "French"},
    ];

    return {
        props: {
            translation, languages
        }
    }
}

export default TranslationPage;
