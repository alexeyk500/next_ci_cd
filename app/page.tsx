import classes from "./page.module.css";
import CountRow from "@/components/CountRow/CountRow";

export default function Home() {
  return (
    <main className={classes.container}>
      <h2>{"A500"}</h2>
      <CountRow />
      <div className={classes.bottomRom}>{`Studio`}</div>
    </main>
  );
}
