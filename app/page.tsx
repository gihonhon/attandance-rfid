import SignInForm from "@/components/Form/SignInForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="flex flex-col bg-[#f4ebf7] items-center justify-center h-screen w-full">
        <Image
          src="/vercel.svg"
          alt="logo"
          width={140}
          height={140}
          className="my-6"
        />
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <SignInForm />
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
              </CardHeader>
              {/** Register */}
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Home;
