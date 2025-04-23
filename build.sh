# ECR_REGISTRY="738380283950.dkr.ecr.us-east-1.amazonaws.com"
# aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
# docker build -t aws_todoapp .
# docker tag aws_todoapp:latest $ECR_REGISTRY aws_todoapp:latest
# docker push $ECR_REGISTRY aws_todoapp:latest

ECR_REGISTRY="738380283950.dkr.ecr.us-east-1.amazonaws.com"

# Login
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY

# FRONTEND
FRONTEND_IMAGE="frontend_todoapp"
docker build -t $FRONTEND_IMAGE -f frontend/Dockerfile ./frontend
docker tag $FRONTEND_IMAGE:latest $ECR_REGISTRY/$FRONTEND_IMAGE:latest
docker push $ECR_REGISTRY/$FRONTEND_IMAGE:latest

# BACKEND
BACKEND_IMAGE="backend_todoapp"
docker build -t $BACKEND_IMAGE -f backend/Dockerfile ./backend
docker tag $BACKEND_IMAGE:latest $ECR_REGISTRY/$BACKEND_IMAGE:latest
docker push $ECR_REGISTRY/$BACKEND_IMAGE:latest