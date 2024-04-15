import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/VerticalChart";
import HorizontalChart from "@/components/VerticalChart/HorizontalChart";
import PieChart from "@/components/PieChart";


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalChart />
        <HorizontalChart/>
        <PieChart/>
      </main>
    </>
  );
}
