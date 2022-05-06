[![Contributors][ack-contributors-shield]][ack-contributors]
[![Forks][ack-forks-shield]][ack-forks]
[![Stargazers][ack-stars-shield]][ack-stars]
[![Issues][ack-issues-shield]][ack-issues]
[![MIT License][ack-license-shield]][license]

[![NestJs][nestjs-shield]][ref-nestjs]
[![NodeJs][nodejs-shield]][ref-nodejs]
[![Typescript][typescript-shield]][ref-typescript]
[![MongoDB][mongodb-shield]][ref-mongodb]
[![JWT][jwt-shield]][ref-jwt]
[![Jest][jest-shield]][ref-jest]
[![Yarn][yarn-shield]][ref-yarn]
[![Kafka][kafka-shield]][ref-kafka]
[![Docker][docker-shield]][ref-docker]

# ACK Microservice NestJs Mongoose Boilerplate 🔥 🚀

---

## STILL ONGOING

---

> Best uses for RESTFUL API, [Microservice](https://microservices.io), or SaaS Project

ack-microservice-nestjs-boilerplate-mongoose is a [NestJs][ref-nestjs] Microservice Boilerplate with Mongoose and MongoDB as Database.
ack-microservice-nestjs-boilerplate-mongoose combine [NestJs Http][ref-nestjs] and [NestJs Kafka Microservice][ref-nestjs-kafka-microservice].

Made with following
- [nodejs-best-practice](https://github.com/goldbergyoni/nodebestpractices) 
- [The Twelve-Factor App](https://12factor.net)
- NestJs Habit.

*You can [Request Feature][ack-issues] or [Report Bug][ack-issues] with following this link*

## Important

If you change env value of `APP_MODE` to `secure` that will trigger more validation.

1. `x-timestamp`, tolerant 5 minutes of request.
2. `user-agent`, whitelist of user agent.
3. `x-api-key`, check api key.
4. check cors origin

You can see our `e2e testing file` or read the documentation on [section environment][ack-doc-env].

## Build with

- NestJs v8.x
- NodeJs v17.x
- Typescript v4.x
- Mongoose v6.x
- MongoDB v5.x
- Yarn v1.x
- NPM v8.x
- Docker v20.x
- Docker Compose v2.x
- Kafka v3.x

## Objective

ack-microservice-nestjs-boilerplate-mongoose have some objective.

- Simple, scalable and secure
- Avoid spaghetti code
- Component based
- Reusable component
- Easy to maintenance
- Support for all microservice patterns

## Features

- NestJs v8.x 🥳
- Hybrid NestJs Project
- Typescript 🚀
- Authentication and Authorization (OAuth2, API Key, Basic Auth) 💪
- Mongodb integrate by using Mongoose Package 🎉
- Database Migration
- Integrate with AWS
- Server Side Pagination
- Url Versioning
- Request Validation Pipe
- Custom error status code 🤫
- Logger and Debugger 📝
- Centralize Configuration 🤖
- Centralize Exception Filter
- Multi-language (i18n)
- Dynamic Setting from Database 🗿
- Maintenance Mode on / off
- Support Docker Installation
- Support Docker Installation
- Support CI/CD with Github Action or Jenkins
- Husky GitHook For Check Source Code, and Run Test Before Commit 🐶
- Linter with EsLint for Typescript
- Request Kafka Validation Pipe
- Integrate with Kafka
- Kafka auto create topic with custom partition and replication
- Kafka Producer Service

## Prerequisites

We assume that everyone who comes here is _**`programmer with intermediate knowledge`**_ and we also need to understand more before we begin in order to reduce the knowledge gap.

1. Understand [NestJs Fundamental](http://nestjs.com), Main Framework. NodeJs Framework with support fully TypeScript.
2. Understand[Typescript Fundamental](https://www.typescriptlang.org), Programming Language. It will help us to write and read the code.
3. Understand [ExpressJs Fundamental](https://nodejs.org), NodeJs Base Framework. It will help us in understanding how the NestJs Framework works.
4. Understand what NoSql is and how it works as a database, especially [MongoDB.](https://docs.mongodb.com)

## Todo

Next development

- [x] Documentation
- [x] Unit Testing
- [x] Integration Testing
- [x] Github action CI/CD
- [x] Github action Auto Release
- [x] Jenkins update script
- [x] Limitation of pagination, available sort - sort - limit page - limit perPage
- [x] Health Check Separate Endpoint
- [x] Timestamp Tolerance Middleware
- [x] Optimize code
- [x] Whitelist user agent
- [x] Docker Compose File Mongodb Replication Set
- [x] API Key Guard
- [x] Kafka Health Check
- [x] Kafka Integration Test
- [x] Master Settings
- [x] Scheduler
- [x] Flag on / off scheduler
- [x] Flag on / off http
- [ ] Flag on / off microservice
- [ ] Swagger

## Documentation

- [Documentation][ack-docs]
- [Example][ack-docs-example]
- [Tips][ack-docs-tips]

## Endpoints

See our [e2e testing][ack-e2e]

## License

Distributed under [MIT licensed][license].

## Contributors

Thanks goes to these wonderful people
<table><tr><td align="center"><a href="https://github.com/tiaamoo"><img src="https://avatars.githubusercontent.com/u/97380402?v=4" width="80px;" alt="Tiaamoo"/><br /><sub><b>Tiaamoo</b></sub></a><br /></td></tr></table>

## Contact

[Andre Christi kan][author-email]

[![Github][github-shield]][author-github]
[![LinkedIn][linkedin-shield]][author-linkedin]
[![Instagram][instagram-shield]][author-instagram]

<!-- BADGE LINKS -->
[ack-contributors-shield]: https://img.shields.io/github/contributors/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose?style=for-the-badge
[ack-forks-shield]: https://img.shields.io/github/forks/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose?style=for-the-badge
[ack-stars-shield]: https://img.shields.io/github/stars/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose?style=for-the-badge
[ack-issues-shield]: https://img.shields.io/github/issues/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose?style=for-the-badge
[ack-license-shield]: https://img.shields.io/github/license/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose?style=for-the-badge

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[mongodb-shield]: https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[yarn-shield]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[docker-shield]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[kafka-shield]: https://img.shields.io/badge/kafka-0000?style=for-the-badge&logo=apachekafka&logoColor=black&color=white

[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white

<!-- CONTACTS -->
[author-linkedin]: https://linkedin.com/in/andrechristikan
[author-instagram]: https://www.instagram.com/___ac.k
[author-email]: mailto:ack@baibay.id
[author-github]: https://github.com/andrechristikan

<!-- Repo LINKS -->
[ack-repo]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose
[ack-e2e]: /e2e
[ack-issues]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose/issues
[ack-stars]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose/stargazers
[ack-forks]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose/network/members
[ack-contributors]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose/graphs/contributors
[ack-history]: https://github.com/andrechristikan/ack-microservice-nestjs-boilerplate-mongoose/commits/main

<!-- license -->
[license]: LICENSE.md
[endpoints]: endpoints.json

<!-- Documents -->
[ack-docs]: https://andrechristikan.github.io/ack-nestjs-boilerplate-docs/
[ack-docs-features]: https://andrechristikan.github.io/ack-nestjs-boilerplate-docs/#/features/readme
[ack-docs-example]: https://andrechristikan.github.io/ack-nestjs-boilerplate-docs/#/example
[ack-docs-tips]: https://andrechristikan.github.io/ack-nestjs-boilerplate-docs/#/tips/readme
[ack-doc-env]: https://andrechristikan.github.io/ack-nestjs-boilerplate-docs/#/features/readme

<!-- Reference -->
[ref-nestjs]: http://nestjs.com
[ref-nestjs-kafka-microservice]: https://docs.nestjs.com/microservices/kafka
[ref-mongoose]: https://mongoosejs.com/
[ref-mongodb]: https://docs.mongodb.com/
[ref-nodejs-best-practice]: https://github.com/goldbergyoni/nodebestpractices
[ref-nodejs]: https://nodejs.org/
[ref-typescript]: https://www.typescriptlang.org/
[ref-jwt]: https://jwt.io
[ref-jest]: https://jestjs.io/docs/getting-started
[ref-docker]: https://docs.docker.com
[ref-yarn]: https://yarnpkg.com
[ref-kafka]: https://kafka.apache.org/quickstart
[ref-postman-import-export]: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/
