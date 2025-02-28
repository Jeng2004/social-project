'use client';

import styles from "./comment.module.css";


interface Report {
  id: number;
  username: string;
  message: string;
}

export default function ReportPage() {
  const reports: Report[] = [
    { id: 1, username: "nam", message: "Lssues related to perrsons under 18 years of age." },
    { id: 2, username: "fah", message: "Bullying,harassment or inappropriate use." },
    { id: 3, username: "pppipp", message: "Suicide or self-harm." },
    { id: 4, username: "jojo2004", message: "Lssues related to perrsons under 18 years of age." },
    { id: 5, username: "LolOllo", message: "Lssues related to perrsons under 18 years of age." },
    { id: 6, username: "tentten", message: "Includes other accounts they may have or create." },
    { id: 7, username: "user007", message: "Sell or promote restricted products." },
    { id: 8, username: "Bbieiie", message: "Bullying,harassment or inappropriate use." },
    { id: 9, username: "kaika", message: "Suicide or self-harm.." },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Report comment</h2>
        <ul className={styles.reportList}>
          {reports.map((report) => (
            <li key={report.id} className={styles.reportItem}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.text}>
                <div className={styles.username}>{report.username}</div>
                <div className={styles.message}>{report.message}</div>
              </div>
              <div className={styles.actions}>
                <button className={`${styles.button} ${styles.detail}`}>Detail</button>
                <button className={`${styles.button} ${styles.delete}`}>Delete comment</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

