#########################################
version = "0.0.2"
image = "alfierichou/type-service"
imageId = docker images 'type-service' | uniq

build:
	@docker build -t $(image) .

clean:
	@echo "force clear this docker image..."
	@docker rmi --force $(imageId)

tag:
	@echo "make tag this docker image..."
	@docker tag $(image) $(image):$(version)
	@docker push $(image):latest
	@docker push $(image):$(version)
