#########################################
image = "alfierichou/type-service"
imageId = docker images 'type-service' | uniq
version := $(shell git log -1 --pretty=format:"%h")

build:
	@docker build -t $(image) .

clean:
	@echo "force clear this docker image..."
	@docker rmi --force $(imageId)

gittag:
	@echo "git tag..."
	@npm run postpublish

tag:
	@echo "make tag this docker image..."
	@docker tag $(image) $(image):$(version)
	@docker push $(image):latest
	@docker push $(image):$(version)
