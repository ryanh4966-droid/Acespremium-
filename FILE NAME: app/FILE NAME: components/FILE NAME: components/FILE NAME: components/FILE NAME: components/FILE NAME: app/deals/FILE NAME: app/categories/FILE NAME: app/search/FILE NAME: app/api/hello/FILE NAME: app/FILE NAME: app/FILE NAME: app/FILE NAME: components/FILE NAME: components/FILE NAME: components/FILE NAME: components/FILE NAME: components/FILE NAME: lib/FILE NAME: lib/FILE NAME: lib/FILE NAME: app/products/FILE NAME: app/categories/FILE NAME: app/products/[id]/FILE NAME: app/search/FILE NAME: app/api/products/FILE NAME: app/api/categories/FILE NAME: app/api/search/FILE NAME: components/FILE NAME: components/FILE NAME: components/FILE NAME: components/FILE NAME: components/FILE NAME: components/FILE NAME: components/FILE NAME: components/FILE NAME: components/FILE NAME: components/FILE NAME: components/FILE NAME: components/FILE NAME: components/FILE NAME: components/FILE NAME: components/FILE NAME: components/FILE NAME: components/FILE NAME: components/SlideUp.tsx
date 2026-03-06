"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Category {
  title: string;
  slug: string;
  image: string;
}

const categories: Category[] = [
  {
    title: "Tech & Gadgets",
    slug: "tech",
    image: "/images/categories/tech.jpg",
  },
  {
    title: "Home Essentials",
    slug: "home",
    image: "/images/categories/home.jpg",
  },
  {
    title: "Fitness & Wellness",
    slug: "fitness",
    image: "/images/categories/fitness.jpg",
  },
  {
    title: "Style & Apparel",
    slug: "style",
    image: "/images/categories/style.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Featured Categories</h2>
          <Link
            href="/categories"
            className="flex items-center text-red-500 hover:text-red-400 transition"
          >
