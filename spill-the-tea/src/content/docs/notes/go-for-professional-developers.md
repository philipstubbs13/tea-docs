---
title: Go for Professional Developers
description: A guide in my new Starlight docs site.
---

- <https://frontendmasters.com/courses/complete-go/introduction/>

* <https://github.com/Melkeydev/fem-project-live>
* <https://www.twitch.tv/melkey>
* <https://www.youtube.com/@melkeydev>
* <https://github.com/Melkeydev/go-blueprint>
* <https://pfglabs.com/>
* <https://go.dev/doc/install>
* <https://github.com/go-chi/chi>
* <https://github.com/pressly/goose>
* <https://stackoverflow.com/questions/56475313/how-to-fix-go-get-warning-modules-disabled-by-go111module-auto-in-gopath-src>
* <https://github.com/jackc/pgx>

```
go mod init beginnerGo

touch main.go

go run main.go

go build -o main main.go
```

```
go mod init github.com/philipstubbs13/femProject

go run main.go -port 8081
```

```
curl -X POST localhost:8080/workouts

curl localhost:8080/workouts/2
```

```
docker compose up --build
```

```
go get github.com/jackc/pgx/v4/stdlib
```

```
ls -l ~/go/bin | grep goose

export PATH=$HOME/go/bin:$PATH
```

```
go get github.com/pressly/goose/v3/cmd/goose@latest
```

```
psql -U postgres -h localhost -p 5432
```
