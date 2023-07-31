"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";

const Blog = () => {
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://sailfire-blogg.vercel.app/api/posts');
      const data = await res.json();
      setValue(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {value && value.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
