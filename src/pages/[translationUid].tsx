import * as React from 'react';
import type {NextPage} from "next";
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
    Fade
} from '@chakra-ui/react';



const phrases = [
    {
        key: "short_bio",
        text: {
            en: "Short Bio",
        }
    },
    {
        key: "short_description",
        text: {
            en: "Short Description of Yourself/Company - Be sure to describe vacation rental cleaning experience in detail",
        }
    },
    {
        key: "great_bio_message",
        text: {
            en: "This is a great length bio! You are off to a great start!",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
    {
        key: "average_bio_message",
        text: {
            en: "This is an average length bio. Why settle for average?",
        }
    },
];

const TranslationPage: NextPage = () => {
    const [filterPhrase, setFilterPhrase] = React.useState("");
    const [selectedPhrase, setSelectedPhrase] = React.useState(null);

    const filteredPhrases = phrases.filter((phrase) =>
        phrase.key.toLowerCase().includes(filterPhrase) || phrase.text.en.toLowerCase().includes(filterPhrase)
    );

    const isPhraseSelected = (key: string) => {
        return selectedPhrase?.key === key;
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
                                <Box onClick={() => setSelectedPhrase(phrase)} mx={5} py={5} px={5}
                                     bgColor={isPhraseSelected(phrase.key) ? "#f0f5ff" : undefined} borderRadius={5}
                                     cursor="pointer" flex={1}>
                                    <Text fontWeight="bold">{phrase.key}</Text>
                                    <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap"
                                          maxWidth="200px">{phrase.text.en}</Text>
                                    <HStack align="start" mt={2}>
                                        <Badge colorScheme="green">EN</Badge>
                                        <Badge>ES</Badge>
                                        <Badge colorScheme="green">FR</Badge>
                                        <Badge colorScheme="green">PT</Badge>
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
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </Container>
    )
};

export default TranslationPage;