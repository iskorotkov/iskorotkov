# Ivan Korotkov

**Lead Go Developer** — Belgrade, Serbia — Open to remote contract or relocation

korotkov.ivan.s@gmail.com · [linkedin.com/in/iskorotkov](https://www.linkedin.com/in/iskorotkov) · [github.com/iskorotkov](https://github.com/iskorotkov) · [t.me/iskorotkov](https://t.me/iskorotkov)

## Summary

Backend engineer with 5+ years of commercial Go (Golang) experience building high-load distributed systems: flight ticket price storage at Aviasales and event-driven pharmacy logistics at Protek. Works across Kafka, ClickHouse, Kvrocks/Redis, PostgreSQL and Kubernetes, from design to production. Leads a team, runs technical interviews, teaches Go to engineers from other stacks, and maintains an actively used Go library for Apache Avro.

## Skills

- **Languages:** Go (Golang), SQL, TypeScript
- **Data & messaging:** Apache Kafka, Apache Avro, ClickHouse, Kvrocks, Redis, PostgreSQL, Elasticsearch, RabbitMQ
- **APIs:** gRPC, REST, GraphQL, OpenAPI
- **Infrastructure:** Kubernetes, Docker, Terraform, CI/CD
- **Architecture:** microservices, distributed systems, event-driven architecture, high-load systems, performance optimization (pprof, trace)
- **Practices:** code review, fuzz testing, mentoring, technical interviewing, AI-assisted development (Claude Code)

## Experience

### Lead Software Engineer (Go) — Aviasales — Oct 2026 – Present

- Lead the Prices team that owns the company's flight ticket price cache, used by product teams and external partners.
- Align product managers, analysts and partner teams on goals, scope and deadlines for infrastructure-heavy features.
- Run code reviews and onboard new team members onto Go codebases.

### Senior Software Engineer (Go) — Aviasales — Feb 2024 – Oct 2026

High-load ticket cache serving point lookups and wide queries with tens of filters and aggregations, near-real-time data, millisecond latency and thousands of RPS.

- Cut CPU usage and tail latency of bulk Kvrocks lookups (up to 20k tickets per request) by introducing request chunking.
- Increased price coverage on small markets by building a fallback on ClickHouse aggregations.
- Migrated legacy Ruby and Elixir endpoints to Go and built new GraphQL and REST endpoints for product features and partners.
- Developed Kafka-based ingestion for a storage with a high write rate and short time-to-update.
- Shortened CI builds with incremental Docker builds and layer caching; deployed new databases and services through Terraform and Kubernetes manifests.
- Added Claude Code review to the CI pipeline and wrote Claude Code skills for debugging and monitoring; use LLMs to gather requirements across systems.
- Lead an internal Go education program: maintain documentation for Go repositories, run weekly code reviews and assess developers on synthetic and real tasks.

### Lead Software Engineer (Go) — Protek — Nov 2023 – Feb 2024

Pharmaceutical online marketplace and distribution platform for major pharmacy chains.

- Promoted from Senior after 12 months; led 2 developers through an infrastructure migration.
- Hired 2 mid-level Go developers for my own and an adjacent team.
- Redesigned the technical interview with another senior engineer, cutting the technical section from 90 to 60 minutes so interviewers could run two interviews a day.
- Set up a code style guide and a list of approved third-party libraries; built CLI tools for repetitive deployment tasks.

### Senior Software Engineer (Go) — Protek — Nov 2022 – Nov 2023

- Split a PHP monolith and oversized Go services into Go microservices using the strangler fig pattern, so services deploy independently with a smaller blast radius.
- Authored a new microservice storing warehouse supply quantities and retail prices.
- Built an internal Go library for Kafka and Apache Avro that standardized how teams consume and produce update events.
- Integrated the back office with warehouses through Kafka streaming with backward-compatible event schemas.
- Built gRPC APIs between services and GraphQL/HTTP APIs for frontends, with role-based access control.

### Software Engineer (Go) — MTS Digital — Jul 2022 – Nov 2022

- Built the MVP of a network hardware configuration platform for a national telecom provider, plus a base station emulator for testing.
- Implemented device communication over SSH, Telnet and SNMPv2 with parsing of vendor-specific output (Huawei).
- Built concurrent device polling with retries, exponential backoff and circuit breakers; fixed data races in legacy monitoring code.

### Software Engineer (Go, React) — IT-Swarm — May 2021 – Jul 2022

B2B marketplace connecting businesses with IT service providers.

- Built REST APIs for web and mobile clients and a notification service in Go.
- Sped up service startup with lazy initialization and dependency injection changes.
- Raised Elasticsearch ETL throughput with batching; optimized heavy PostgreSQL queries over relational and JSONB data.
- Built a React/TypeScript admin panel with feature flags for gradual rollouts, and Kibana dashboards for QA and analysts.

## Open Source & Writing

- **Maintainer, [github.com/iskorotkov/avro](https://github.com/iskorotkov/avro) — 2026 – Present.** Continued development of the most popular Go library for Apache Avro after the original (hamba/avro) was archived. Sped up encoding and decoding of complex data structures, found and fixed 3 high-severity (CVSS 8.7) denial-of-service vulnerabilities in the decoder, including CVE-2026-46384 and CVE-2026-46385, and added fuzz testing to catch new ones.
- **Technical writer, Habr — Jul 2023 – Present.** Articles on Go performance and concurrency (pass-by-pointer vs pass-by-value benchmarks, goroutine leaks, memory management, senior Go interview preparation) and technical translations.
- **Other:** chaos-framework (Kubernetes resilience testing); contributions to go-binance, bybit and rust-web3.

## Education

Bachelor's degree, Mathematics and Computer Science — Perm State University — Sep 2018 – Aug 2022

## Certifications

- EF SET English Certificate, 82/100 (C2 Proficient)
- Claude Code: Software Engineering with Generative AI Agents
- Security Analysis of Web Projects

## Languages

Russian (native) · English (C2, EF SET 82/100) · Serbian (basic)
