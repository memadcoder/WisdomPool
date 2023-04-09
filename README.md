# Wisdom Pool

Wisdom pool is a web application which will organize publicly available Online Courses / videos.

## Overview

this project is using [Next.js](https://github.com/vercel/next.js/) React framework.

## Installation

```bash
$ npm install
```

Create the `.env` and make necessary update
```bash
cp .env.save .env
```

## Development 

```
npm run dev
```

## Production

```
npm run build
npm start
```

Make use of [PM2](https://github.com/Unitech/pm2).

### with pm2


    Make sure you set the envs first
```
npm run build
pm2 start npm --name "WisdomFE" -- start++
```