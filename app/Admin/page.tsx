'use client';

import styles from "./Admin.module.css";

interface Report {
  id: number;
  username: string;  // ชื่อใหม่เป็น username
  message: string;
}

export default function ReportPage() {
  const reports: Report[] = [
    { id: 1, username: "nam", message: "Users have reported the command I just don’t like it." },
    { id: 2, username: "fah", message: "Users have reported the command I just don’t like it." },
    { id: 3, username: "pppipp", message: "Includes other accounts they may have or create." },
    { id: 4, username: "jojo2004", message: "Includes other accounts they may have or create." },
    { id: 5, username: "LolOllo", message: "Includes other accounts they may have or create." },
    { id: 6, username: "tentten", message: "Includes other accounts they may have or create." },
    { id: 7, username: "user007", message: "Users reported an issue with the new feature." },
    { id: 8, username: "Bbieiie", message: "Unable to access certain commands after update." },
    { id: 9, username: "kaika", message: "A report regarding command issues." },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Report a post</h2>
        <ul className={styles.reportList}>
          {reports.map((report) => (
            <li key={report.id} className={styles.reportItem}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.text}>
                <div className={styles.username}>{report.username}</div> {/* ชื่อผู้ใช้งาน */}
                <div className={styles.message}>{report.message}</div>
              </div>
              <div className={styles.actions}>
                <button className={`${styles.button} ${styles.detail}`}>Detail</button>
                <button className={`${styles.button} ${styles.delete}`}>Delete a post</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
