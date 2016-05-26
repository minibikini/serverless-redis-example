# Serverless Redis Example Project

## Install
First, install node.js and Serverless, then run these commands:

```
git clone git@github.com:minibikini/serverless-redis-example.git
cd serverless-redis-example
npm install
serverless project init
```

Then, add the Redis URL the the project variables (`_meta/variables/s-variables-common.json`), example:

```json
{
  "project": "serverless-redis-example",
  "redisServer": "//:PASSWORD@REDIS_HOST:PORT"
}
```

## Deploy Functions
Run:
```sh
serverless function deploy
serverless endpoint deploy
```

## Usage

### Set value:

```sh
curl -H "Content-Type: application/json" -X POST --data '{"value": "hey redis"}' https://ENDPOINT
```

### Get value:

```sh
curl https://ENDPOINT
```