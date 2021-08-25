import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              m="auto"
              alt="プロフィール画像"
              src="https://source.unsplash.com/random"
            />
            <Text fontSize="lg" fontWeight="bold">
              マドカダイゴ
            </Text>
            <Text fontSize="sm" color="gray">
              光の巨人
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
