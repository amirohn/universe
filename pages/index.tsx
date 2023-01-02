import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";
import React, { Component } from "react";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Link legacyBehavior href="/profile">
            <a>
              <Button variant="contained" color="primary">
                Profile
              </Button>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
