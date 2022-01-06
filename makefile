all: build run 

build:
	@docker build --pull --rm -f "Dockerfile" -t parti:latest "."

run:
	@docker run -it --rm parti:latest

Josh:
	@docker run -it --rm parti:latest /app/entrypoint.sh "Josh"
