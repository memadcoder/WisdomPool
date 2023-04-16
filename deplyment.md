## Let's build on local and push to prod for now.

first install the same node version on on prod server.

```
nvm install 19.9.0

```

use new version
```
nvm use 19
```

install dependencies. delete node_modules and install again (if local version was diff then prod node version)
```
rm -rf node_modules/
pnpm install
```


first delete the `.next`
```
rm -rf .next
```

then build
```
npm run build
```

let's archive `.next`
```
tar cvf build.tar .next/
```

let's compress it with gzip
```
gzip build.tar
```

copy build to server
```
scp build.tar.gz aws:/home/ubuntu/projects/wisdom-pool/WisdomPool
```

## on prod server

decompress
```
gzip -d build.tar.gz
```

extract
```
tar xvf build.tar
```

verify its working
```
npm start
```

run with pm2
```
pm2 start npm --name "WisdomFE" -- start -- -p 5001
```
