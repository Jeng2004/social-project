'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Admin.module.css";

interface Report {
  id: number;
  username: string;
  message: string;
}

export default function ReportPage() {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([
    { id: 1, username: "nam", message: "Users have reported the command I just don’t like it." },
    { id: 2, username: "fah", message: "Users have reported the command I just don’t like it." },
    { id: 3, username: "pppipp", message: "Includes other accounts they may have or create." },
    { id: 4, username: "jojo2004", message: "Includes other accounts they may have or create." },
    { id: 5, username: "LolOllo", message: "Includes other accounts they may have or create." },
    { id: 6, username: "tentten", message: "Includes other accounts they may have or create." },
    { id: 7, username: "user007", message: "Users reported an issue with the new feature." },
    { id: 8, username: "Bbieiie", message: "Unable to access certain commands after update." },
    { id: 9, username: "kaika", message: "A report regarding command issues." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Report | null>(null);
  const [activeTab, setActiveTab] = useState("reportPost");

  const openModal = (report: Report) => {
    setSelectedPost(report);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setReports(prevReports => prevReports.filter(report => report.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button
          className={`${styles.menuItem} ${activeTab === "reportPost" ? styles.active : ""}`}
          onClick={() => setActiveTab("reportPost")}
        >
          Report a post
        </button>
        <button
          className={`${styles.menuItem} ${activeTab === "reportComment" ? styles.active : ""}`}
          onClick={() => {
            setActiveTab("reportComment");
            router.push("/App/Admin/comment/page.tsx");
          }}
        >
          Report a Comment
        </button>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>Report post</h2>
        <ul className={styles.reportList}>
          {reports.map((report) => (
            <li key={report.id} className={styles.reportItem}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.text}>
                <div className={styles.username}>{report.username}</div>
                <div className={styles.message}>{report.message}</div>
              </div>
              <div className={styles.actions}>
                <button 
                  className={`${styles.button} ${styles.detail}`} 
                  onClick={() => openModal(report)}
                >
                  Detail
                </button>
                <button 
                  className={`${styles.button} ${styles.delete}`} 
                  onClick={() => handleDelete(report.id)}
                >
                  Delete post
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && selectedPost && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}> Detail</h2>
            <div className={styles.postDetailContainer}>
              <div className={styles.postHeader}>
                <div className={styles.username}>{selectedPost.username}</div>
                <div className={styles.message}>{selectedPost.message}</div>
              </div>
              <div className={styles.actions}>
                <button 
                  className={styles.cancelButton} 
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
