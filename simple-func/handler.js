'use strict';

module.exports.handler = function(event, context, cb) {
  const r = require("redis").createClient(process.env.redisServer);

  let message;

  const reply = (err, data) => {
    r.quit();

    cb(null, {
      event,
      message,
      data
    });
  };


  if (event.method === "GET") {
    message = "Get from Redis";
    r.get("test", reply);

  } else if (event.method === "POST") {
    message = `Set "${event.body.value}" to Redis`;
    r.set("test", event.body.value, reply);
  } else {
    message = `'${event.method}' method is not supported`;
    reply();
  }

};
