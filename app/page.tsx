import Image from "next/image";
import styles from "./page.module.css";
import { getBlogsList } from '@/app/_libs/microcms';

export default async function Home() {
  const data = await getBlogsList({
    
  });
  console.log("data", data);

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p >ブログが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((blog) => (
            <li key={blog.id} >
              <p>{blog.title}</p>
              <p>{blog.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
