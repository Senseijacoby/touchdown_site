"use client";
import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import DiscordIcon from "@/public/discord-icon.svg";
import InstagramIcon from "@/public/instagram-icon.svg";

export default function Contact() {
  return (
    <section className="mx-10 relative grid gap-4  mt-20 md:grid-cols-2  md:mx-10 min-h-screen  lg:py-10 ">
      <div className="z-10">
        <h2 className="mb-4 text-4xl font-bold text-white">Contact Me</h2>
        <p className="text-text1  max-w-md">
          <span className="block">
            I&apos;m interested in opportunities such as collaborations,
            freelance or extended period offers.
          </span>{" "}
          <br />
          If you have any questions,requests or would like to get in touch,
          please send me a message on the form herein below and I will get back
          to you as soon as possible.
        </p>
      </div>
      <div className="z-10">
        <form
          action="https://getform.io/f/ed286a21-1983-461b-8dc7-c6c3bbff9b1c"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-form_bg border border-form_border placeholder-form_placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="John Wick"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-form_bg border border-form_border placeholder-form_placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johnwick@yopmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-form_bg border border-form_border placeholder-form_placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="RE: Job opportunity"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-form_bg border border-form_border placeholder-form_placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="We are interested in ..."
            />
          </div>
          <button
            type="submit"
            className="bg-btnColor hover:bg-sendBtnColor text-white font-medium py-2.5 px-5 rounded-lg w-full hover:scale-110 duration-300"
          >
            SEND
          </button>
        </form>
      </div>
      <div className="flex flex-row gap-4 socials   justify-end ">
        <Link href="https://github.com/Senseijacoby" target="_blank">
          <Image
            className="h-12 w-12 hover:scale-125 duration-300"
            src={GithubIcon}
            alt="Github Icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jack-migwambo-741b2269/"
          target="_blank"
        >
          <Image
            className="h-12 w-12 hover:scale-125 duration-300"
            src={LinkedinIcon}
            alt="Linkedin Icon"
          />
        </Link>

        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            className="h-12 w-12 hover:scale-125 duration-300"
            src={InstagramIcon}
            alt="Instagram Icon"
          />
        </Link>
        <Link href="https://www.discord.com" target="_blank">
          <Image
            className="h-12 w-12 hover:scale-125 duration-300"
            src={DiscordIcon}
            alt="discord Icon"
          />
        </Link>
      </div>
    </section>
  );
}
