import SignInForm from "@/components/Form/SignInForm";
import SignUpForm from "@/components/Form/SignUpForm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
// Tgia Comment

const Home = () => {
  return (
    <>
      <section className="flex flex-col bg-[#f4ebf7] items-center justify-center h-screen w-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={240}
          height={240}
          className="my-6"
        />
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <SignInForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Home;
