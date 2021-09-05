FROM public.ecr.aws/lambda/nodejs:14

ARG FUNCTION_DIR="/var/task"

# Create function directory
RUN mkdir -p ${FUNCTION_DIR}

# Copy handler function and package.json
COPY app.js ${FUNCTION_DIR}
COPY package.json ${FUNCTION_DIR}
COPY mongoconnection.js ${FUNCTION_DIR}
COPY assetSchema.js ${FUNCTION_DIR}

# Install NPM dependencies for function
RUN npm install

# Command can be overwritten by providing a different command in the template directly.
CMD ["app.lambdaHandler"]
