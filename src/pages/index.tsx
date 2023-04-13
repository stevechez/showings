/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";

// import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
  RedirectToSignIn,
  RedirectToUserProfile,
} from "@clerk/nextjs";
import { CreateOrganization } from "@clerk/nextjs";
import Header from "~/components/Header";
import Testimonials from "~/components/Testimonials";
import { redirect } from "next/dist/server/api-utils";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  // Redirect to dashboard if user is signed in
  // useEffect(() => {
  //   if (user) {
  //     redirect("/dashboard");
  //   }
  // }, [user]);

  return (
    <>
      <Layout>
        <main>
          {/* <div
          className="h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/homerover-agent.jpeg')" }}
        ></div> */}
          <Hero />
          <Content />
          <Testimonials />

          {/* <button className="btn">Sign In</button> */}

          {/* <CreateOrganization /> */}

          {/* <SignedIn>
            <RedirectToUserProfile />
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut> */}
        </main>
      </Layout>
    </>
  );
};

export default Home;
