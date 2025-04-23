ECR_REGISTRY="738380283950.dkr.ecr.us-east-1.amazonaws.com"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t aws_todoapp .
docker tag aws_todoapp:latest $ECR_REGISTRY aws_todoapp:latest
docker push $ECR_REGISTRY aws_todoapp:latest