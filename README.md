## 参考

https://github.com/nextjs-microcms-book/nextjs-website-sample

## メモ

https://blog.microcms.io/microcms-js-sdk-2_5_0/
キャッシュをクリアしないとmicrocms側でコンテンツを追加編集しても反映されない

```
        customRequestInit: {
            cache: "no-store",
           },
```