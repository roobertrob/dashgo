import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Robert Santos</Text>
          <Text color="gray.300" fontSize="sm">
            roebrt.fonseca@solides.com.br
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Robert Santos" />
    </Flex>
  );
}
