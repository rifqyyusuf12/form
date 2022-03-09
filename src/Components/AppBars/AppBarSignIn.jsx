import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    StackProps,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  function AppBarSignIn (props){
      
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Stack spacing="8" {...props}>
        <Stack spacing="6">
          {isMobile && <Text>Ini logo Mobile</Text>}
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="Enter your email" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" placeholder="********" type="password" />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultIsChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password
            </Button>
          </HStack>
          <Stack spacing="4">
            <Button variant="primary">Sign in</Button>
            <Button variant="secondary" leftIcon={<Text>Logo Google</Text>} iconSpacing="3">
              Sign in with Google
            </Button>
          </Stack>
        </Stack>
      </Stack>
    )
  }
  export default AppBarSignIn;