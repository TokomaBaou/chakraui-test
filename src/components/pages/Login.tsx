import { Box, Flex, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../hooks/useAuth";

export const Login: VFC = memo(() => {
  //axiosで返した値を受け取る
  const { login, loading } = useAuth();

  //入力した値を保持するstate
  //typescriptで型を指定したいが、初期値が空の場合は、自動的にstringが設定される
  const [userId, setUserId] = useState("");
  //テキストボックスの型として覚える　:Change~
  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);
  //クリックした際にlogin関数にuserIdを渡す
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack sapacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === ""}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
