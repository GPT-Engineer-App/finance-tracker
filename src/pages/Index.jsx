import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Text, VStack, HStack, Icon, Table, Thead, Tbody, Tr, Th, Td, Select, Tag } from "@chakra-ui/react";
import { FaRegChartBar, FaPlus, FaUpload } from "react-icons/fa";

const transactionsData = [
  // ... (Add 20 transactions with fields like date, description, amount, category)
];

const categories = ["Salary", "Food", "Entertainment", "Transport", "Health", "Other"];

import { Input } from "@chakra-ui/react";
import GoogleMapsSpain from "../components/GoogleMapsSpain";

const Index = () => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [addressSearch, setAddressSearch] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setAddressSearch(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = () => {
    // Intentionally empty due to constraints.
    // Ideally, this would geocode the address to a location and update the map.
  };

  // Function to handle description change
  const handleDescriptionChange = (index, newDescription) => {
    const updatedTransactions = transactions.map((transaction, i) => (i === index ? { ...transaction, description: newDescription } : transaction));
    setTransactions(updatedTransactions);
  };

  // Function to handle amount change
  const handleAmountChange = (index, newAmount) => {
    const updatedTransactions = transactions.map((transaction, i) => (i === index ? { ...transaction, amount: newAmount } : transaction));
    setTransactions(updatedTransactions);
  };

  // Function to add a new transaction
  const addTransaction = () => {
    const newTransaction = {
      date: "2024-02-23",
      description: "New Transaction",
      amount: 0,
      category: "Other",
    };
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle category change
  const handleCategoryChange = (index, newCategory) => {
    const updatedTransactions = transactions.map((transaction, i) => (i === index ? { ...transaction, category: newCategory } : transaction));
    setTransactions(updatedTransactions);
  };

  return (
    <VStack spacing={4} align="stretch">
      {/* Header */}
      <Box bg="blue.500" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1">MyFinance</Heading>
            <HStack spacing={4}>
              <Button leftIcon={<FaUpload />} variant="outline">
                Import
              </Button>
              <Button leftIcon={<FaPlus />} variant="solid" onClick={() => addTransaction()}>
                Add Transaction
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
      {/* Hero Section */}
      <Flex bg="gray.100" p={10} justify="center" align="center" direction="column">
        <Heading as="h2" size="lg" mb={4}>
          Your Finance Overview, Simplified
        </Heading>
        <Text fontSize="xl" maxW="container.md" textAlign="center">
          Import and manage your transactions from all your bank accounts in one place. Categorize them and gain insights to make better financial decisions.
        </Text>
      </Flex>
      import GoogleMapsSpain from '../components/GoogleMapsSpain';
      {/* Search and Google Maps Section */}
      <Box p={4}>
        <Input
          placeholder="Search for an address"
          value={addressSearch}
          onChange={handleSearchChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearchSubmit();
            }
          }}
        />
      </Box>
      <GoogleMapsSpain address={addressSearch} />
      {/* Main Content */}
      <Container maxW="container.xl" py={6}>
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th isNumeric>Amount</Th>
                <Th>Category</Th>
                <Th>Insights</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction, index) => (
                <Tr key={index}>
                  <Td>{transaction.date}</Td>
                  <Td>
                    <Input value={transaction.description} onChange={(e) => handleDescriptionChange(index, e.target.value)} />
                  </Td>
                  <Td isNumeric>
                    <Input type="number" value={transaction.amount} onChange={(e) => handleAmountChange(index, e.target.value)} />
                  </Td>
                  <Td>
                    <Select placeholder="Select category" value={transaction.category} onChange={(e) => handleCategoryChange(index, e.target.value)}>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Select>
                  </Td>
                  <Td>
                    <Icon as={FaRegChartBar} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
      {/* Footer */}
      <Box bg="blue.500" color="white" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} MyFinance. All rights reserved.</Text>
        </Container>
      </Box>
    </VStack>
  );
};

export default Index;
