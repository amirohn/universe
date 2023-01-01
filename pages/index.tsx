import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Head></Head>
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
