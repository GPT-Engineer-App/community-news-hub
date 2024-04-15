import React from "react";
import { Box, Heading, Text, Image, Stack, Container, Grid, GridItem, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const articles = [
    {
      title: "Local Charity Event Raises $10,000 for Community Center",
      description: "The annual charity event organized by the local community center was a great success, raising over $10,000 to support various programs and initiatives.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZXZlbnR8ZW58MHx8fHwxNzEzMTU1Njc3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "City Council Approves New Infrastructure Project",
      description: "The city council has given the green light to a new infrastructure project aimed at improving roads and bridges in the downtown area.",
      image: "https://images.unsplash.com/photo-1422565167033-dec8fad92aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmd8ZW58MHx8fHwxNzEzMTU1Njc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "High School Football Team Wins Regional Championship",
      description: "The local high school football team has won the regional championship for the first time in over a decade, bringing pride to the community.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjB0ZWFtJTIwY2VsZWJyYXRpbmd8ZW58MHx8fHwxNzEzMTU1Njc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Local News Daily
          </Heading>
          <Text fontSize="xl">Your trusted source for local news and events.</Text>
        </Container>
      </Box>
      <Container maxW="container.lg" py={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {articles.map((article, index) => (
            <GridItem key={index}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    {article.title}
                  </Heading>
                  <Text>{article.description}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Stack direction="row" spacing={4} align="center">
            <Link href="#">
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
