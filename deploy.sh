git checkout --orphan gh-pages
mv target/public/* .
git add index.html main.cljs.edn main.js main.out
