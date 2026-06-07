"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import VastuCard from "@/components/VastuCard";

import { vastuData } from "@/data/vastuData";
import Stats from "@/components/Stats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {

  const [search, setSearch] =
    useState("");

  const [direction, setDirection] =
    useState("");

  const [room, setRoom] =
    useState("");

  const filtered =
    vastuData.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesDirection =
        direction === ""
          ? true
          : item.idealDirections.includes(direction);

      const matchesRoom =
        room === ""
          ? true
          : item.room === room;

      return (
        matchesSearch &&
        matchesDirection &&
        matchesRoom
      );
    });

  return (
    <>
      {/* <Navbar /> */}

      <main
        className="
      max-w-7xl
      mx-auto
      p-6
       bg-linear-to-br
  from-[#F8F5F0]
  via-[#FFFDF8]
  to-[#F3E9D2]
      "
      >
        {/* <h1
          className="
          text-4xl
          font-bold
          mb-6
          "
        >
          Interior Vastu Guide
        </h1> */}
        <Hero />

        <div
          className="
  sticky
  top-0
  z-50
  bg-white
  border-b
  shadow-sm
  py-4
  "
        >

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Filters
            direction={direction}
            setDirection={setDirection}
            room={room}
            setRoom={setRoom}
          />

        </div>
        <Stats />
        <div className="my-6">
          <p className="text-gray-600 font-medium">
            Showing {filtered.length} vastu items
          </p>
        </div>
        <div
          className="
       grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
      "
        >
          {filtered.map((item) => (
            <VastuCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </main>
    </>
  );
}